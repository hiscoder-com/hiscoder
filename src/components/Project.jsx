import PropTypes from 'prop-types'

function Project({ project, handleClick, color }) {
  return (
    <div className="w-full sm:w-[43.43vw] lg:w-[29.8vw] 2xl:w-[25vw]">
      <button className="border-0" onClick={() => handleClick(project)}>
        <img src={project.img} alt={project.client} className="w-full rounded-md" />
        <div className="mt-[5.14vw] block sm:mt-5 sm:flex sm:gap-x-10 lg:w-[30vw] 2xl:w-[22.95vw] 2xl:gap-x-5">
          <div className="w-5/12 2xl:w-2/6">
            <p
              className="text-left text-[3.08vw] uppercase sm:text-[1.07vw] lg:text-[0.63vw] 2xl:text-[0.35vw]"
              style={color}
            >
              client
            </p>
            <p
              className="mt-[2vw] whitespace-nowrap text-left text-[4.1vw] uppercase sm:mt-[1.33vw] sm:text-[1.25vw] lg:mt-[0.79vw] lg:text-[0.84vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]"
              style={color}
            >
              {project.client}
            </p>
          </div>
          <div>
            <p
              className="mt-[4vw] text-left text-[3.08vw] uppercase sm:mt-0 sm:text-[1.07vw] lg:text-[0.63vw] 2xl:text-[0.35vw]"
              style={color}
            >
              service
            </p>
            <p
              className="mt-[2vw] text-left text-[3.6vw] uppercase sm:mt-[1.33vw] sm:text-[1.25vw] lg:mt-[0.79vw] lg:text-[0.84vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]"
              style={color}
            >
              {project.service}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
}

export default Project
