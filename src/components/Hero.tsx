import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat dark:bg-curvy-dark-mode">
      {/* Hero Container */}
      <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
        <Image src="/illustration-intro.png" alt="illustration" width={720} height={550} className="mx-auto" />
        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
          Fylo stoes all your most important files in one scure location. Access them wherever you need, share and
          collaborate with friends, famil and co-workers.
        </p>
        <button className="w-52 rounded-full bg-gradient-to-l from-accentBlue to-accentCyan p-3 text-sm text-white duration-200 hover:scale-95 md:w-72 lg:text-lg">
          Get Started
        </button>
      </div>
    </section>
  )
}
export default Hero
