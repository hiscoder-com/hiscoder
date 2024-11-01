function MobileAppBar() {
  return (
    <div className="fixed left-0 top-10 z-40 flex w-full items-center justify-between px-5 sm:hidden">
      <a
        className="bg-buttonGroup active:bg-buttonHover z-20 flex h-11 w-14 items-center justify-center rounded-full backdrop-blur-3xl"
        href="#"
      >
        <img src="img/logo_dark.svg" alt="mobile logo of GeCraft" className="h-8 w-8" />
      </a>
      <a
        className="bg-buttonGroup text-basic active:bg-buttonHover flex h-11 w-48 items-center justify-center rounded-full text-sm font-bold backdrop-blur-3xl"
        href="#contactUs"
      >
        Request a Consultation
      </a>
    </div>
  )
}

export default MobileAppBar
