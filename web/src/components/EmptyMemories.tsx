export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You haven't recorded any memories yet, start{' '}
        <a href="#" className="underline hover:text-gray-50">
          {' '}
          creating them now
        </a>
        !
      </p>
    </div>
  )
}
