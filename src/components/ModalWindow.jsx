import { useEffect } from 'react'

import PropTypes from 'prop-types'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ModalWindow({
  modalIsOpen,
  onCloseModal,
  children,
  label,
  overlay,
  modalWindow,
}) {
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', modalIsOpen)

    return () => document.body.classList.remove('overflow-hidden')
  }, [modalIsOpen])

  const handleNavigation = (e) => {
    e.preventDefault()

    const href = e.currentTarget.getAttribute('href')
    if (href && href.startsWith('#contactUs')) {
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onCloseModal()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={true}
      shouldReturnFocusAfterClose={false}
      className={`${modalWindow} relative z-50 w-full max-w-[208.938rem] duration-300`}
      overlayClassName={`${overlay} overflow-y-auto duration-300 fixed flex items-center flex-col px-0 sm:px-10 py-12 sm:py-10 top-0 left-0 w-full h-full bg-[#2E2E2ECC] overflow-hidden z-40 before:block after:block before:h-px after:h-px before:grow after:grow`}
    >
      <div
        id="modal-window"
        className="reltive rounded-lg bg-white pt-[10.25vw] shadow-lg sm:pt-[5vw] lg:pt-[3.1vw] 2xl:pt-[2.12vw]"
      >
        <button
          type="button"
          onClick={onCloseModal}
          className="absolute right-5 top-5 flex h-[14.35vw] w-[14.35vw] items-center justify-center rounded-full bg-basic text-white sm:h-[6.6vw] sm:w-[6.6vw] lg:h-[5vw] lg:w-[5vw] 2xl:h-[3.02vw] 2xl:w-[3.02vw]"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1.8vw] w-[1.8vw] sm:h-[1vw] sm:w-[1vw] lg:h-[0.84vw] lg:w-[0.84vw] 2xl:h-[0.44vw] 2xl:w-[0.44vw]"
          >
            <path
              d="M1 1L7.5 7.5M14 14L7.5 7.5M7.5 7.5L14 1L1 14"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
        <h3 className="ml-[5.15vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase text-basic before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic sm:ml-[3.53vw] sm:text-[1.06vw] sm:before:mr-[0.45vw] sm:before:h-[0.8vw] sm:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:ml-[4.36vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          {label}
        </h3>
        {children}
        <p className="animation-timeline mt-[20.5vw] animate-emergence text-center text-[3.6vw] sm:mt-[10.6vw] sm:text-[1.77vw] lg:mt-[9.37vw] lg:text-[1.46vw] 2xl:mt-[7.26vw] 2xl:text-[0.93vw]">
          Do you have a similar project?
        </p>
        <a
          href="#contactUs"
          onClick={onCloseModal}
          onTouchEnd={handleNavigation}
          className="animation-timeline mt-[5.15vw] block animate-emergence text-center text-[5.15vw] text-basic underline sm:mt-[1.77vw] sm:text-[2.65vw] lg:mt-[0.5vw] lg:text-[2.2vw] 2xl:mt-[0.59vw] 2xl:text-[1.4vw]"
        >
          Contact us
        </a>
        <div className="mt-[20.5vw] flex h-[28.7vw] w-full items-center justify-center border-t border-ourServicesBtn text-center sm:mt-[10.5vw] sm:h-[8.83vw] lg:mt-[9.37vw] lg:h-[6.14vw] 2xl:mt-[7.26vw] 2xl:h-[3.43vw]">
          <button
            onClick={onCloseModal}
            className="h-[20.5vw] w-[98.3vw] rounded-full text-[3.6vw] uppercase sm:h-[6vw] sm:text-[1.42vw] lg:h-[5vw] lg:text-[0.84vw] 2xl:h-[2.8vw] 2xl:text-[0.47vw]"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

ModalWindow.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
}

export default ModalWindow
