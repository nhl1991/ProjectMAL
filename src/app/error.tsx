'use client'
export default function Error({
  message,
}: {
  message: string
}) {


  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <p>{message}</p>
      </div>
    </div>
  )
}