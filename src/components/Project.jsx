import PropTypes from 'prop-types'

function Project({ project, handleClick, color, isHiddenDescription, location }) {
  const hiddenDescription = isHiddenDescription ? 'lg:opacity-0' : 'lg:opacity-100'

  const fontSizeTitle =
    location === 'services'
      ? 'text-[3.08vw] sm:text-[1.07vw] lg:text-[0.25vw] 2xl:text-[0.25vw]'
      : 'text-[3.08vw] sm:text-[1.07vw] lg:text-[0.5vw] 2xl:text-[0.35vw]'

  const fontSizeClient =
    location === 'services'
      ? 'text-[4.1vw] sm:text-[1.25vw] lg:text-[0.3vw]'
      : 'text-[4.1vw] sm:text-[1.25vw] lg:text-[0.6vw] 2xl:text-[0.47vw]'

  const fontSizeService =
    location === 'services'
      ? 'text-[3.59vw] sm:text-[1.25vw] lg:text-[0.3vw]'
      : 'text-[3.59vw] sm:text-[1.25vw] lg:text-[0.6vw] 2xl:text-[0.47vw]'

  const widthItem =
    location === 'services' ? 'sm:w-[42vw] lg:w-1/5' : 'sm:w-[43.43vw] lg:w-1/5'

  const marginDescription =
    location === 'services' ? 'mt-[5.14vw] sm:mt-[0.4vw]' : 'mt-[5.14vw] sm:mt-[1.04vw]'

  const marginClientService =
    location === 'services'
      ? 'mt-[2vw] sm:mt-[0.4vw]'
      : 'mt-[2vw] sm:mt-[1.33vw] lg:mt-[0.79vw] 2xl:mt-[0.44vw]'

  return (
    <div onClick={() => handleClick(project)} className={`${widthItem} w-full sm:mt-0`}>
      <img src={project.img} alt={project.client} className="w-full rounded-md" />
      <div
        className={`block ${marginDescription} sm:flex sm:gap-x-10 lg:w-full lg:gap-x-5 ${hiddenDescription} duration-200`}
      >
        <div className="w-full sm:w-5/12 2xl:w-2/6">
          <p className={`${fontSizeTitle} text-left uppercase`} style={color}>
            client
          </p>
          <p
            className={`${fontSizeClient} ${marginClientService} mt-[2vw] text-left uppercase`}
            style={color}
          >
            {project.client}
          </p>
        </div>
        <div>
          <p
            className={`${fontSizeTitle} mt-[4vw] text-left uppercase sm:mt-0`}
            style={color}
          >
            service
          </p>
          <p
            className={`${fontSizeService} ${marginClientService} text-left uppercase`}
            style={color}
          >
            {project.service}
          </p>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
  isHiddenDescription: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
}

export default Project
