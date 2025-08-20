'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}){


    return(
        <div className="w-full h-full">
            <p>{error.message}</p>
        </div>
    )
}