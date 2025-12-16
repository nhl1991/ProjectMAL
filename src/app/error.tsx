'use client'
export default function Error({
  message,
}: {
  message: string
}) {


  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <h1>Error</h1>
        <p>{message}</p>
      </div>
    </div>
  )
}