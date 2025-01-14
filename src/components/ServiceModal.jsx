import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import projects from '../../data/projects.json'
import Projects from './Projects'

function ServiceModal({
  label,
  service,
  description,
  setShowProjectsModal,
  modalServiceIsOpen,
}) {
  const [filteredItems, setFilteredItems] = useState(projects)

  useEffect(() => {
    setFilteredItems(projects.filter((project) => project.categories.includes(label)))
  }, [])

  return (
    <>
      <div className="block justify-between px-[5.15vw] pt-[10.25vw] sm:flex sm:px-[3.53vw] sm:pt-[5.22vw] lg:pt-[3vw] 2xl:pt-[2.91vw]">
        <div className="w-full sm:w-4/12 lg:w-[18vw] 2xl:w-3/12">
          <h4 className="animation-timeline animate-emergence text-[10.25vw] leading-none sm:text-[5vw] lg:text-[3.72vw]">
            {label}
          </h4>
          <p className="animation-timeline mt-[2.57vw] block w-full animate-emergence text-[3.6vw] uppercase sm:hidden">
            {service}
          </p>
        </div>
        <div className="mt-[10.25vw] flex w-full flex-col sm:mt-0 sm:w-[50vw] lg:w-[52.76vw]">
          <p className="animation-timeline animate-emergence text-[6.15vw] leading-snug sm:text-[2.08vw] lg:text-[1.86vw]">
            {description}
          </p>
          <h5 className="animation-timeline mt-[14.35vw] animate-emergence whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase text-basic before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic sm:mt-[2.91vw] sm:text-[1.06vw] sm:before:mr-[0.45vw] sm:before:h-[0.8vw] sm:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
            Related Projects
          </h5>
        </div>
      </div>

      <div className="w-full px-[5.15vw] sm:px-[3.53vw] lg:flex lg:justify-end lg:overflow-hidden lg:px-0">
        <Projects
          filteredItems={filteredItems}
          location={'services'}
          modalServiceIsOpen={modalServiceIsOpen}
          setShowProjectsModal={setShowProjectsModal}
        />
      </div>
    </>
  )
}

ServiceModal.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  service: PropTypes.string,
  setShowProjectsModal: PropTypes.func,
  modalServiceIsOpen: PropTypes.bool,
}

export default ServiceModal
