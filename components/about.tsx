export default function About({ hidden }: { hidden: boolean }) {
  return (
    <div className={`${hidden ? 'hidden lg:block' : ''} lg:block`}>
      <p className="mt-5 uppercase font-extrabold text-2xl">About me
      </p>
      <p className="font-medium lg:text-xl lg:w-full lg:max-w-300">Lorem ipsum nulla dolor quis. Ullamco nostrud incididunt elit sed consequat est sint cupidatat. Deserunt pariatur ut officia sunt. Et magna excepteur id dolore cillum do in aute. Laboris qui reprehenderit aliquip.
      </p>
    </div>
  )
}
