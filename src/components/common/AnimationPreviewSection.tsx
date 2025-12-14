"use client"
import { queryClient } from "@/lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import AnimationPreviewResults from "./AnimationPreviewResults";


export default function AnimationPreviewSection({ category, values }: {
    category: string,
    values: Array<string>
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <AnimationPreviewResults category={category} values={values} />
        </QueryClientProvider>
    )
}