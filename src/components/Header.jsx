import AppBar from './AppBar'
import MobileAppBar from './MobileAppBar'

function Header() {
  return (
    <header className="sm:bg-bgHeader relative flex w-full flex-col items-center px-5 pb-[40vw] sm:px-0 sm:pb-[6.5vw] lg:pb-[5.2vw] 2xl:pb-[8.36vw]">
      <MobileAppBar />
      <h1 className="title-gradient mt-24 hidden animate-descent select-none bg-clip-text font-sans text-[20vw] font-black not-italic leading-none text-transparent duration-500 sm:mt-0 sm:block">
        HisCoder
      </h1>

      <h1 className="title-gradient mt-[46vw] animate-descent select-none font-sans text-[55vw] font-black not-italic leading-none sm:hidden">
        His
      </h1>
      <h2 className="title-gradient animate-descent select-none font-sans text-[26vw] font-black not-italic leading-none sm:hidden">
        Coder
      </h2>

      <p className="text-basic mt-10 animate-emergence select-none text-[5vw] sm:mt-[3vw] sm:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[1.86vw]">
        Transforming Ideas into Digital Solutions: Custom Development, Seamless
      </p>
      <p className="text-basic animate-emergence select-none text-[5vw] delay-500 sm:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[1.86vw]">
        Integration, and Cutting-Edge Technology
      </p>

      <a
        className="animation-timeline border-basic text-basic active:border-buttonHover active:bg-buttonHover 1024:hover:border-buttonHover 1024:hover:bg-buttonHover z-10 mt-[42.3vw] flex h-[20.5vw] w-[89.7vw] animate-emergence items-center justify-center rounded-full border-2 text-[4.1vw] text-base font-semibold duration-150 hover:duration-150 sm:mt-[8.84vw] sm:h-[5.93vw] sm:w-[32.7vw] sm:animate-lifting sm:text-[1.77vw] 1024:active:bg-transparent lg:mt-[6.77vw] lg:h-[4.17vw] lg:w-[28.1vw] lg:text-[1.36vw] 2xl:mt-[6vw] 2xl:h-[4.15vw] 2xl:w-[30.84vw] 2xl:text-[1.4vw]"
        href="#contactUs"
      >
        Request a Consultation
      </a>

      <AppBar />

      <p
        id="text"
        className="animation-timeline text-basic z-20 mt-[25.6vw] w-[89.7vw] animate-emergence select-none text-[6.15vw] leading-tight sm:mt-[24.53vw] sm:w-[54vw] sm:text-[2.65vw] lg:mt-[18.74vw] lg:w-[50.1vw] lg:text-[2.5vw] 2xl:mt-[14.2vw] 2xl:w-[49.4vw] 2xl:text-[2.44vw]"
      >
        At HisCoder, our mission is to empower businesses by crafting innovative IT
        solutions that drive efficiency, inspire growth, and pave the way for a digital
        future.
      </p>

      <div className="absolute bottom-20 left-0 h-1/4 w-full bg-[url(/img/header_background_image.png)] bg-cover bg-bottom bg-no-repeat sm:bottom-0 sm:top-[62vw] sm:h-auto sm:w-full sm:bg-[url(/img/header_background_image_big.png)] lg:top-[51vw] lg:h-[25vw] lg:w-full lg:bg-top 2xl:top-[46vw] 2xl:h-[26.6vw]"></div>
    </header>
  )
}

export default Header
