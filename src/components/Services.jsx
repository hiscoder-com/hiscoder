import { useCallback, useEffect, useState } from 'react'

import services from '../../data/services.json'
import ModalWindow from './ModalWindow'
import ProjectsModal from './ProjectsModal'
import ServiceModal from './ServiceModal'

function Services() {
  const html = document.querySelector('html')

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [showProjectsModal, setShowProjectsModal] = useState(false)

  const [selectedService, setSelectedService] = useState(null)
  const [label, setLabel] = useState('')

  const [overlay, setOverlay] = useState('opacity-0')
  const [modalWindow, setModalWindow] = useState('translate-y-full')

  const handleClick = useCallback((service) => {
    html.classList.add('overflow-hidden')
    setSelectedService(service)
    setLabel(service.label)
    setModalIsOpen(true)
    setTimeout(() => {
      setOverlay('opacity-1')
      setModalWindow('translate-y-0 delay-200')
    }, 0)
  }, [])

  const handleCloseModal = (_, link) => {
    setTimeout(() => {
      html.classList.remove('overflow-hidden')
      setShowProjectsModal(false)
      setModalIsOpen(false)
    }, 600)
    setModalWindow('translate-y-full')
    setOverlay('opacity-0 delay-200')

    setTimeout(() => {
      if (link) {
        const contactUs = document.getElementById('contactUs')
        if (contactUs) {
          contactUs.scrollIntoView()
        }
      }
    }, 500)
  }

  const [id, setId] = useState('1')
  const [movement, setMovement] = useState(0)

  useEffect(() => {
    switch (id) {
      case '1':
        setMovement('rotate-[20deg] -translate-y-[30vw]')
        break
      case '2':
        setMovement('rotate-[15deg] -translate-y-[15vw]')
        break
      case '3':
        setMovement('rotate-6 -translate-y-[2vw]')
        break
      case '4':
        setMovement('-rotate-3 -translate-y-[2vw]')
        break
      case '5':
        setMovement('-rotate-[12deg] translate-y-[15vw]')
        break
      case '6':
        setMovement('-rotate-[18deg] translate-y-[30vw]')
        break

      default:
        setMovement('-rotate-[20deg] translate-y-[30vw]')
        break
    }
  }, [id])

  const classNameHoverBlock = () => {
    const baseClasses = 'hover-block'

    const transform = `-translate-x-[100vw] ${movement} scale-[4]`

    return `${baseClasses} ${transform}`
  }

  return (
    <div
      id="services"
      className="block justify-between px-[2.1vw] pb-[20.5vw] pt-[51vw] sm:flex sm:pb-[2.8vw] sm:pl-[5.92vw] sm:pr-[4.5vw] sm:pt-[4.1vw] lg:pb-[5.5vw] lg:pl-[3.13vw] lg:pr-[2vw] lg:pt-[6.35vw] 2xl:pb-[4.5vw] 2xl:pl-[3.23vw] 2xl:pt-[4.99vw]"
    >
      <div className="flex w-1/4 flex-col items-start sm:mt-[2.5vw]">
        <div className="inline-block flex-col sm:sticky sm:top-16">
          <h3 className="animation-timeline ml-[2.84vw] animate-emergence whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic sm:ml-0 sm:text-[1.06vw] sm:before:mr-[0.45vw] sm:before:h-[0.8vw] sm:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
            Our services
          </h3>
          <h4 className="animation-timeline ml-[2.84vw] mt-[10vw] w-[90vw] animate-emergence text-left text-[9vw] leading-tight sm:ml-0 sm:mt-[2.74vw] sm:w-[32vw] sm:text-[3.185vw] lg:mt-[1.67vw] lg:w-[23vw] lg:text-[2.1vw] 2xl:mt-[1.3vw] 2xl:w-[14vw] 2xl:text-[1.4vw]">
            Skills to enhance your performance
          </h4>
        </div>
      </div>

      <div className="relative mt-[14.1vw] duration-150 hover:text-ourServicesBtn hover:duration-150 sm:mt-0 sm:pt-[0.5vw]">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleClick(service)}
            className="button animation-timeline relative z-10 mb-[1vw] table animate-emergence whitespace-nowrap px-[2.84vw] text-center text-[8.45vw] last:mb-0 hover:text-basic active:rounded-full active:bg-buttonHover sm:mb-0 sm:px-[4.33vw] sm:text-[4.25vw] lg:px-[3.55vw] lg:text-[5.52vw] lg:active:bg-transparent 2xl:px-[4.1vw]"
            onMouseEnter={() => {
              setId(service.id)
            }}
          >
            {service.label}
          </button>
        ))}
        <div className={classNameHoverBlock()}></div>
        <ModalWindow
          onCloseModal={handleCloseModal}
          modalIsOpen={modalIsOpen}
          label={`Our services / ${label}`}
          preventScroll={true}
          overlay={overlay}
          modalWindow={modalWindow}
        >
          {!showProjectsModal && (
            <ServiceModal
              {...selectedService}
              setShowProjectsModal={setShowProjectsModal}
              modalServiceIsOpen={modalIsOpen}
            />
          )}
          {showProjectsModal && <ProjectsModal />}
        </ModalWindow>
      </div>
    </div>
  )
}

export default Services
