import StatusSection from "../StatusSection";

export default function ErrorFallback({ e }: { e: Error }) {
    const cause = e.cause ?? null;
    const message = e.message ?? null;
    return (
        <StatusSection>
            <p>{JSON.stringify("cause : " + cause)}</p>
            <p>{JSON.stringify("message : " + message)}</p>
        </StatusSection>
    )
}