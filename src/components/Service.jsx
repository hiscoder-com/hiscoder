import PropTypes from 'prop-types'

function Service({ client, img, service }) {
  return (
    <li className="w-full md:w-[25.32vw]">
      <button>
        <img src={img} alt={client} loading="lazy" />
        <div className="mt-[4.1vw] block md:mt-[0.8vw] md:flex md:gap-x-5 2xl:mt-[0.59vw]">
          <div className="w-5/12 2xl:w-2/6">
            <p className="text-left text-[3.08vw] uppercase sm:text-[2.09vw] md:text-[1.06vw] lg:text-[1vw] 2xl:text-[0.35vw]">
              client
            </p>
            <p className="mt-[1.1vw] whitespace-nowrap text-left text-[4.1vw] uppercase md:mt-[0.8vw] md:text-[1.42vw] lg:text-[1.3vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]">
              {client}
            </p>
          </div>
          <div>
            <p className="mt-[3.08vw] text-left text-[3.08vw] uppercase sm:text-[2.09vw] md:mt-0 md:text-[1.06vw] lg:text-[1vw] 2xl:text-[0.35vw]">
              service
            </p>
            <p className="mt-[1.1vw] text-left text-[3.6vw] uppercase md:mt-[0.8vw] md:text-[1.24vw] lg:text-[1.2vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]">
              {service}
            </p>
          </div>
        </div>
      </button>
    </li>
  )
}

Service.propTypes = {
  client: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
}

export default Service
