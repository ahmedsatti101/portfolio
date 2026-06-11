export default function About({ hidden }: { hidden: boolean }) {
  return (
    <div className={`${hidden ? 'hidden lg:block' : ''} lg:block`}>
      <p className="mt-5 uppercase font-extrabold text-2xl">About me
      </p>
      <p className="font-medium lg:text-xl lg:w-full lg:max-w-300">
        When I'm not talking to computers, I play chess, currently rated 800 elo, and I like to
        watch chess tournaments and study the games of some of the most well known grandmasters such
        as Mikhail Tal. I also like to go on walks and occasionally go on bike rides.
      </p>
    </div>
  )
}
