import PropTypes from 'prop-types'

function ImageBlock({ title, imgSrc, altText, additionalClasses, colorTitle, index }) {
  if (index !== 0) {
    additionalClasses = ''
  }

  return (
    <div
      className={`${additionalClasses} animation-timeline relative mt-[2.6vw] flex animate-emergence flex-col items-center rounded-md sm:mt-0`}
    >
      <h3
        className="animation-timeline absolute top-[3vw] z-10 animate-emergence text-center text-[2.06vw] font-extrabold uppercase sm:top-[1.7vw] sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw]"
        style={{ color: colorTitle }}
      >
        {title}
      </h3>
      <img
        src={imgSrc}
        alt={altText}
        className="animation-timeline animate-emergence rounded-md"
        loading="lazy"
      />
    </div>
  )
}

ImageBlock.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
  colorTitle: PropTypes.string.isRequired,
}

export default ImageBlock
