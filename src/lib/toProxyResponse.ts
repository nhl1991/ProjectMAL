// 외부 API Response를 클라이언트용 NextResponse(JSON)로 변환

import { NextResponse } from "next/server";

export async function toProxyResponse(res: Response) {
    if (res.ok) {
        const data = await res.json().catch(() => undefined);
        if (data === undefined)
            return NextResponse.json(
                { error: "invalid_upstream_response", message: "Upstream returned an invalid response" },
                { status: 502 }
            );
        return NextResponse.json(data, { status: res.status });
    }

    // 에러 본문이 json이 아닌 경우 (ex HTML, 빈 문서)
    const payload = await res.json().catch(() => null);

    // 외부 API 5XX -> 502로 변환, 4XX는 그대로 전달
    const status = res.status >= 500 ? 502 : res.status;

    return NextResponse.json({
        error: payload?.error ?? "upstream_error",
        message: payload?.message ?? `Upstream responded with ${res.status}`
    },
        { status }
    )
}