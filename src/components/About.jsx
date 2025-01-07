export function SelectedText() {
  return (
    <div className="my-[12.82vw] rounded-[2.6vw] bg-basic p-[5.13vw] text-[5.13vw] leading-[5.65vw] text-white sm:my-0 sm:mt-[17.21vw] sm:w-[35.62vw] sm:rounded-[0.3vw] sm:p-[2.9vw] sm:text-[1.86vw] sm:leading-[2.3vw]">
      If you need web, software, or mobile development, you’re in the right place. And if
      you want to invest in innovative Christian projects, we’d love to hear from you.
      Contact us today!
    </div>
  )
}

const textClasses =
  'animation-timeline animate-emergence text-[5.13vw] leading-[5.65vw] sm:text-[2.08vw] lg:text-[1.86vw] sm:leading-[2.4vw] 2xl:text-[1.4vw] 2xl:leading-[1.5vw]'

function About() {
  return (
    <div className="block justify-between px-[5.15vw] pt-[10.25vw] sm:flex sm:gap-5 sm:px-[4.37vw] sm:pt-[5.22vw] lg:pt-[3vw] 2xl:gap-1 2xl:pt-[2.91vw]">
      <div>
        <h3 className="animation-timeline animate-emergence text-[10.3vw] leading-[4.7vw] delay-1000 sm:text-[5vw] lg:text-[3.72vw] lg:leading-[3.8vw]">
          About <br className="hidden sm:block" /> HisCoder
        </h3>
        <div className="hidden sm:block">
          <SelectedText />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="mt-[10.26vw] flex items-start gap-2.5 sm:mt-0 sm:gap-[1vw]">
            <img src="/img/book.svg" alt="book icon" className="sm:w-[5.49vw]" />
            <p className={`${textClasses}`}>
              At HisCoder.com, we are more than just a software development company – we
              are builders of tools that serve a higher purpose. Established in 2018, our
              mission has been to develop innovative and impactful technology solutions
              that advance the Kingdom of God and help spread the Gospel worldwide.
            </p>
          </div>
          <div className="mt-[5.13vw] flex items-start gap-2.5 sm:mt-[3vw] sm:gap-[1vw]">
            <img src="/img/cross.svg" alt="cross icon" className="sm:w-[7.47vw]" />
            <p className={`${textClasses}`}>
              Rooted in faith and driven by excellence, we specialize in creating
              platforms, websites, and applications that empower individuals, churches,
              and organizations to share the message of hope and truth in meaningful and
              effective ways. Whether it&apos;s a tool for ministry, a resource for
              teaching, or a platform for connection, every line of code we write is
              designed with purpose, passion, and dedication to glorifying God.
            </p>
          </div>
          <div className="mt-[5.13vw] flex items-start gap-2.5 sm:mt-[3vw] sm:gap-[1vw]">
            <img src="/img/flash.svg" alt="flash icon" className="sm:w-[4.04vw]" />
            <p className={`${textClasses}`}>
              With a commitment to excellence, we deliver{' '}
              <b>
                commercial-quality work execution and exceptional results at
                mission-friendly prices
              </b>
              , ensuring our clients receive the best value while fulfilling their Kingdom
              objectives.
            </p>
          </div>
        </div>
        <div className="sm:hidden">
          <SelectedText />
        </div>
        <div className="pl-0 sm:mt-[3vw] sm:pl-[2.42vw]">
          <p className={`${textClasses}`}>
            At HisCoder.com, technology meets mission, innovation fuels impact, and
            together, we work to bring light to the digital world.
          </p>
          <p className={`mt-[5vw] ${textClasses} sm:mt-[1.6vw]`}>
            Yes, we are the team behind LEVEL.bible, Glokas, BibleVis, and OpenBibleText
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
