import FormContactUs from './FormContactUs'

function ContactUs() {
  return (
    <div
      id="contactUs"
      className="px-[5.14vw] pb-[57.95vw] pt-[22.57vw] text-left sm:flex sm:gap-x-[13.02vw] sm:px-[5.92vw] sm:pb-[12vw] sm:pt-[5.3vw] lg:gap-x-[15.95vw] lg:px-[3.13vw] lg:pb-[12vw] lg:pt-[3.86vw] 2xl:gap-x-[15.61vw]"
    >
      <div className="flex flex-col">
        <h3 className="animation-timeline before:bg-basic ml-[2.84vw] animate-emergence whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full sm:ml-0 sm:text-[1.06vw] sm:before:mr-[0.45vw] sm:before:h-[0.8vw] sm:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          Contact us
        </h3>
        <p className="animation-timeline mt-[7.7vw] animate-emergence text-[5.15vw] font-bold uppercase sm:mt-[2.65vw] sm:text-[1.77vw] lg:mt-[1.57vw] lg:text-[1.05vw] 2xl:mt-[1.46vw] 2xl:text-[0.59vw]">
          Phone
        </p>
        <a
          href="tel:+16475940256"
          className="animation-timeline mt-[1.3vw] animate-emergence text-[6.7vw] font-bold sm:mt-[0.45vw] sm:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]"
        >
          +1 (647) 594 0256
        </a>
        <p className="animation-timeline mt-[5.15vw] animate-emergence text-[5.15vw] font-bold uppercase sm:mt-[1.77vw] sm:text-[1.77vw] lg:mt-[1.05vw] lg:text-[1.05vw] 2xl:mt-[0.59vw] 2xl:text-[0.59vw]">
          Email
        </p>
        <a
          href="mailto:info@hiscoder.com"
          className="animation-timeline mt-[1.3vw] animate-emergence text-[6.7vw] font-bold sm:mt-[0.45vw] sm:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]"
        >
          info@hiscoder.com
        </a>
        <div className="mt-[5.15vw] flex items-center sm:mt-[3.53vw] lg:mt-[2.09vw] 2xl:mt-[1.17vw]">
          <a href="https://hiscoder.com/">
            <img
              src="img/logo_form.svg"
              alt="logo"
              className="animation-timeline w-[20vw] animate-emergence sm:w-[6.89vw] lg:w-[4.06vw] 2xl:w-[5.17vw]"
            />
          </a>
          <a
            href="https://www.linkedin.com/showcase/hiscoder/about/?viewAsMember=true"
            target="_blank"
          >
            <img
              src="img/in.svg"
              alt="linkedIn"
              className="ml-[8.98vw] w-[7.7vw] sm:ml-[3.09vw] sm:w-[2.65vw] lg:ml-[1.82vw] lg:w-[1.57vw] 2xl:ml-[1.02vw] 2xl:w-[2vw]"
            />
          </a>
        </div>
      </div>
      <FormContactUs />
    </div>
  )
}

export default ContactUs
