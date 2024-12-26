import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import projects from '../../data/projects.json'
import { selectProject } from '../redux/actions'
import { selectProjectSelector } from '../redux/selectors'
import ModalWindow from './ModalWindow'
import Project from './Project'
import ProjectsModal from './ProjectsModal'

function Projects({
  location,
  filteredItems,
  category,
  modalServiceIsOpen,
  setShowProjectsModal,
}) {
  const dispatch = useDispatch()

  const selectedProject = useSelector(selectProjectSelector)

  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [overlay, setOverlay] = useState('opacity-0')
  const [modalWindow, setModalWindow] = useState('translate-y-full')

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [label, setLabel] = useState('')

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
    }, 100)
  }

  useEffect(() => {
    setFilteredProjects(
      filteredProjects.filter((project) => project.categories.includes(category))
    )
  }, [])

  useEffect(() => {
    if (modalServiceIsOpen && window.innerWidth > 1132) {
      const projectsSliderServices = document.querySelector('.projectsSliderServices')
      const projectsCarouselServices = document.querySelector('.projectsCarouselServices')

      let coordX = 0

      projectsCarouselServices.addEventListener('mousemove', handleMouseMove)
      projectsCarouselServices.addEventListener('mouseout', handleMouseOut)

      const percent = () => {
        if (window.innerWidth <= 1133) {
          return 75
        } else if (window.innerWidth <= 1922) {
          return 60
        } else if (window.innerWidth > 1922) {
          return 40
        }
      }

      function handleMouseMove(e) {
        coordX = e.pageX - projectsSliderServices.offsetWidth
        const xServices = (coordX / projectsSliderServices.offsetWidth) * percent()

        projectsCarouselServices.style.cssText = `
          transform: translateX(${-xServices}%);
          transition-property: translateX;
          `
      }

      function handleMouseOut() {
        projectsCarouselServices.style.cssText = 'transform: translateX(0);'
      }

      return () => {
        projectsSliderServices.removeEventListener('mousemove', handleMouseMove)
        projectsSliderServices.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [modalServiceIsOpen])

  useEffect(() => {
    if (window.innerWidth > 1133) {
      const projectsSliderGallery = document.querySelector('.projectsSliderGallery')
      const projectsCarouselGallery = document.querySelector('.projectsCarouselGallery')

      let coordX = 0

      projectsSliderGallery.addEventListener('mousemove', handleMouseMove)
      projectsSliderGallery.addEventListener('mouseout', handleMouseOut)

      function handleMouseMove(e) {
        coordX = e.pageX - projectsSliderGallery.offsetWidth
        const xGallery = (coordX / projectsSliderGallery.offsetWidth) * 20

        projectsCarouselGallery.style.cssText = `
          transform: translateX(${-xGallery}%);
          transition-property: translateX;
          `
      }

      function handleMouseOut() {
        projectsCarouselGallery.style.cssText = 'transform: translateX(0);'
      }

      return () => {
        projectsSliderGallery.removeEventListener('mousemove', handleMouseMove)
        projectsSliderGallery.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return (
    <>
      {location === 'services' &&
        filteredProjects !== undefined &&
        filteredProjects.length > 0 && (
          <div className="projectsSliderServices animation-timeline z-10 mt-[39.2vw] w-full animate-emergence self-end duration-500 sm:mt-[2vw] lg:relative lg:mt-[1.57vw] lg:h-[28vw] lg:w-full lg:overflow-hidden lg:hover:-translate-x-[5vw] lg:hover:scale-110 lg:hover:duration-500 2xl:h-[21vw]">
            <div className="projectsCarouselServices pointer-events-auto flex flex-col gap-y-10 duration-500 lg:absolute lg:flex-row lg:gap-x-2.5">
              {filteredProjects.map((project, index) => (
                <Project
                  key={index}
                  location={location}
                  project={project}
                  handleClick={handleClick}
                  color={color}
                />
              ))}
            </div>
          </div>
        )}
      {location === 'services' &&
        filteredProjects !== undefined &&
        filteredProjects.length === 0 && (
          <div className="flex w-full justify-center pt-[20vw] sm:pt-[10vw]">
            <p className="text-center text-[4.1vw] text-basic sm:text-[1.24vw] lg:text-[1.15vw] 2xl:text-[0.82vw]">
              No projects here at the moment, but we&apos;re always ready to discuss your
              ideas in this field!
            </p>
          </div>
        )}
      {location === 'gallery' && filteredItems.length > 0 && (
        <div className="projectsSliderGallery animation-timeline z-10 mt-[39.2vw] w-full animate-emergence self-end duration-500 hover:duration-500 sm:mt-[5.03vw] lg:relative lg:mt-[1.57vw] lg:h-[28vw] lg:translate-x-0 lg:hover:-translate-x-[10vw] lg:hover:scale-110 2xl:h-[21vw]">
          <div className="projectsCarouselGallery flex flex-col gap-y-[4vw] duration-500 sm:flex-row sm:flex-wrap sm:gap-x-[0.8vw] lg:absolute lg:flex-nowrap lg:overflow-hidden">
            {filteredItems.map((project, index) => (
              <Project
                key={index}
                project={project}
                handleClick={handleClick}
                color={color}
              />
            ))}
          </div>
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
