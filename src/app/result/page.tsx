
import Result from "@/components/result/components/ResultComponent";

type Params = {
    [key: string]: string;
};

export default async function Page({ searchParams }: { searchParams: Promise<Params> }) {

    const { q, limit, offset } = await searchParams;


    return <Result type="anime" query={`q=${q}&limit=${limit ?? '10'}&offset=${offset ?? '0'}`} title="Result" />;

}