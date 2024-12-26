import { useCallback, useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { selectProject } from '../redux/actions'
import { selectProjectSelector } from '../redux/selectors'
import ModalWindow from './ModalWindow'
import Project from './Project'
import ProjectsModal from './ProjectsModal'

function Projects({ location, filteredItems, setShowProjectsModal }) {
  const dispatch = useDispatch()

  const sliderRef = useRef(null)

  const selectedProject = useSelector(selectProjectSelector)

  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [overlay, setOverlay] = useState('opacity-0')
  const [modalWindow, setModalWindow] = useState('translate-y-full')

  const [label, setLabel] = useState('')
  const [isHiddenDescription, setIsHiddenDescription] = useState(true)

  useEffect(() => {
    setColor(location === 'gallery' ? { color: 'white' } : {})
  }, [location])

  const handleClick = useCallback((project) => {
    dispatch(selectProject(project))
    {
      location !== 'gallery' && setShowProjectsModal(true)
    }
    setLabel(project.label)
    setModalIsOpen(true)
    setTimeout(() => {
      setOverlay('opacity-1')
      setModalWindow('translate-y-0 delay-200')
    }, 0)
  }, [])

  const handleCloseModal = (_, link) => {
    setTimeout(() => {
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

  const slider = sliderRef.current

  function handleMouseMove(e) {
    if (!slider) return

    if (window.innerWidth > 1133) {
      const rect = slider.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const percent = (mouseX / rect.width - 0.5) * 6
      slider.style.transform = `translateX(${-percent * 10}%) scale(1.5) translateY(14%)`
      setIsHiddenDescription(false)
    }
  }

  function handleMouseLeave() {
    if (!slider) return

    setIsHiddenDescription(true)
    slider.style.transform = 'scale(1)'
  }

  const height = isHiddenDescription ? 'lg:h-[13.5vw]' : 'lg:h-[28vw] 2xl:h-[25vw]'

  return (
    <>
      {location === 'services' &&
        filteredItems !== undefined &&
        filteredItems.length > 0 && (
          <div
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${height} animation-timeline relative mt-[39.2vw] w-full animate-emergence overflow-hidden duration-200 sm:mt-[5.03vw] lg:mt-[1.57vw]`}
          >
            <motion.div initial={{ x: 0 }} animate={{ x: 0 }}>
              <motion.div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-2.5 lg:flex-nowrap">
                {filteredItems.map((project, index) => (
                  <Project
                    key={index}
                    project={project}
                    handleClick={handleClick}
                    color={color}
                    isHiddenDescription={isHiddenDescription}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      {location === 'services' &&
        filteredItems !== undefined &&
        filteredItems.length === 0 && (
          <div className="flex w-full justify-center pt-[20vw] sm:pt-[10vw]">
            <p className="text-center text-[4.1vw] text-basic sm:text-[1.24vw] lg:text-[1.15vw] 2xl:text-[0.82vw]">
              No projects here at the moment, but we&apos;re always ready to discuss your
              ideas in this field!
            </p>
          </div>
        )}
      {location === 'gallery' && filteredItems.length > 0 && (
        <div
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`${height} animation-timeline relative mt-[39.2vw] w-full animate-emergence overflow-hidden duration-200 sm:mt-[5.03vw] lg:mt-[1.57vw]`}
        >
          <motion.div initial={{ x: 0 }} animate={{ x: 0 }}>
            <motion.div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-2.5 lg:flex-nowrap">
              {filteredItems.map((project, index) => (
                <Project
                  key={index}
                  project={project}
                  handleClick={handleClick}
                  color={color}
                  isHiddenDescription={isHiddenDescription}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
      {location === 'gallery' && filteredItems.length === 0 && (
        <div className="flex w-full items-center justify-center sm:min-h-[89.022vw] lg:min-h-[29.8vw] 2xl:min-h-[22vw]">
          <p className="text-[1.95vw] text-white lg:text-[1.15vw] 2xl:text-[0.82vw]">
            No projects here at the moment, but we&apos;re always ready to discuss your
            ideas in this field!
          </p>
        </div>
      )}
      {selectedProject && (
        <ModalWindow
          onCloseModal={handleCloseModal}
          modalIsOpen={modalIsOpen}
          label={`Our services / ${label}`}
          preventScroll={true}
          overlay={overlay}
          modalWindow={modalWindow}
        >
          <ProjectsModal />
        </ModalWindow>
      )}
    </>
  )
}

Projects.propTypes = {
  location: PropTypes.string.isRequired,
  filteredItems: PropTypes.array,
  category: PropTypes.string,
  modalServiceIsOpen: PropTypes.bool,
  setShowProjectsModal: PropTypes.func,
}

export default Projects
