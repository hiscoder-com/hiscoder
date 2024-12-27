import { useSelector } from 'react-redux'

import { selectProjectSelector } from '../redux/selectors'
import ImageBlock from './ImageBlock'

function ProjectsModal() {
  const selectedProject = useSelector(selectProjectSelector)

  const {
    client,
    service,
    img,
    description1,
    description2,
    title1,
    title2,
    title3,
    title4,
    title5,
    link,
    colorTitle,
    images: { first, second, third, fourth, fifth },
  } = selectedProject

  return (
    <div className="-translate-y- px-[5.15vw] pt-[10.3vw] sm:px-[3.53vw] sm:pt-[5.22vw] lg:pt-[3vw] 2xl:pt-[2.91vw]">
      <div className="block pb-0 sm:flex sm:justify-between sm:gap-x-[3vw] sm:pb-[5.22vw] lg:pb-[3vw] 2xl:pb-[2.91vw]">
        <div className="w-full sm:w-7/12 2xl:w-[25.35vw]">
          <h2 className="animation-timeline animate-emergence text-[8vw] delay-1000 sm:text-[2.7vw] 2xl:text-[2.381vw]">
            {client}
          </h2>
          <p className="animation-timeline mt-[2.6vw] animate-emergence text-[3.6vw] uppercase sm:mt-[1.31vw] sm:text-[1.4vw] lg:text-[1.15vw] 2xl:mt-[0.59vw] 2xl:text-[0.93vw]">
            {service}
          </p>
          <img
            className="animation-timeline hidden w-[54.5rem] animate-emergence rounded-md sm:mt-[3vw] sm:block 2xl:mt-[1.46vw]"
            src={img}
            alt={client}
            loading="lazy"
          />
        </div>
        <div className="mt-[10.3vw] flex w-full flex-col justify-between sm:mt-0 2xl:w-[53.55vw]">
          <div>
            <p className="text-[6.16vw] sm:text-[2.08vw] lg:text-[1.42vw] 2xl:text-[1.4vw]">
              {description1}
            </p>
            <p className="mt-[10.3vw] text-[6.16vw] sm:mt-[2vw] sm:text-[2.08vw] lg:text-[1.42vw] 2xl:mt-[1.5vw] 2xl:text-[1.4vw]">
              {description2}
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            className="animation-timeline mt-[10.3vw] animate-emergence text-[5.14vw] underline sm:mt-[2vw] sm:text-[1.83vw] lg:mt-0 lg:text-[1.24vw] 2xl:text-[0.93vw]"
          >
            See the website
          </a>
          <img
            className="animation-timeline mt-[10.3vw] w-full animate-emergence rounded-md sm:hidden"
            src={img}
            alt={client}
            loading="lazy"
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-[0.5vw] 2xl:gap-[0.3vw]">
        <ImageBlock
          title={title1}
          imgSrc={first}
          altText="MacBook"
          colorTitle={colorTitle}
          additionalСlasses="col-start-1 col-end-3"
        />
        <ImageBlock
          title={title2}
          imgSrc={second}
          altText="Second image"
          colorTitle={colorTitle}
        />
        <ImageBlock
          title={title3}
          imgSrc={third}
          altText="Pages"
          colorTitle={colorTitle}
        />
        <ImageBlock
          title={title4}
          imgSrc={fourth}
          altText="Logo"
          colorTitle={colorTitle}
        />
        <ImageBlock
          title={title5}
          imgSrc={fifth}
          altText="Advantage"
          colorTitle={colorTitle}
        />
      </div>
    </div>
  )
}

export default ProjectsModal
