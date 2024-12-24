function MobileAppBar({ handleClickToButton }) {
  return (
    <div className="fixed left-0 top-10 z-40 flex w-full items-center justify-between px-5 sm:hidden">
      <a
        className="z-20 flex h-11 w-14 items-center justify-center rounded-full bg-buttonGroup backdrop-blur-3xl active:bg-buttonHover"
        href="#"
      >
        <img src="img/logo_dark.svg" alt="mobile logo of GeCraft" className="h-8 w-8" />
      </a>
      <div
        onClick={() => handleClickToButton('About')}
        className="flex h-11 items-center justify-center rounded-full bg-buttonGroup px-5 text-sm font-bold text-white backdrop-blur-3xl active:bg-buttonHover"
      >
        About
      </div>
      <a
        className="flex h-11 w-48 items-center justify-center rounded-full bg-buttonGroup text-sm font-bold text-white backdrop-blur-3xl active:bg-buttonHover"
        href="#contactUs"
      >
        Request a Consultation
      </a>
    </div>
  )
}

export default MobileAppBar
