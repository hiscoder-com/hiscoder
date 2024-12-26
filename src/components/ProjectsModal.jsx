import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { selectProjectSelector } from '../redux/selectors'

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
    images: { first, second, third, fourth, fifth },
    backgrounds: { bg_first, bg_second, bg_third, bg_fourth, bg_fifth },
  } = selectedProject

  const [classesLogo, setClassesLogo] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      const definitionClasses =
        img.height >= img.width ? 'w-5/12 -translate-y-1/3' : 'w-10/12 -translate-y-1/2'
      setClassesLogo(definitionClasses)
    }

    img.src = fourth
  }, [fourth])

  const classesTitle =
    'animation-timeline animate-emergence text-center text-[2.06vw] font-extrabold uppercase sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw] z-10'

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
            className="animation-timeline hidden w-[54.5rem] animate-emergence sm:mt-[3vw] sm:block 2xl:mt-[1.46vw]"
            src={img}
            alt={client}
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
            className="animation-timeline mt-[10.3vw] w-full animate-emergence sm:hidden"
            src={img}
            alt={client}
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-[0.5vw] 2xl:gap-[0.3vw]">
        <div
          className={`bg-[url('${bg_first}' animation-timeline col-start-1 col-end-3 mt-[2.6vw] flex animate-emergence flex-col items-center rounded-md px-[2.06vw] pb-[4.11vw] pt-[6.16vw] sm:mt-0 lg:pt-[4vw] 2xl:pb-[2.62vw] 2xl:pt-[4.27vw]`}
        >
          <h3 className={`${classesTitle}`}>{title1}</h3>
          <img
            src={first}
            alt="MacBook"
            className="animation-timeline animate-emergence"
          />
        </div>
        <div
          className={`bg-[url('${bg_second}')] animation-timeline mt-[2.6vw] flex h-[69.8vw] animate-emergence flex-col items-center justify-between rounded-md bg-contain pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]`}
        >
          <h3 className={`${classesTitle}`}>{title2}</h3>
          <img
            src={second}
            alt={second}
            className="animation-timeline h-[55vw] animate-emergence sm:h-[26vw]"
          />
        </div>
        <div
          className={`animation-timeline relative mt-[2.6vw] flex h-[69.8vw] animate-emergence flex-col items-center rounded-md bg-contain sm:mt-0 sm:h-[32.42vw] bg-[url('${bg_third}')]`}
        >
          <h3 className={`${classesTitle} mt-[6.16vw] sm:mt-[2vw] 2xl:mt-[2.24vw]`}>
            {title3}
          </h3>
          <img
            src={third}
            alt="pages"
            className="animation-timeline absolute h-full w-full animate-emergence rounded-md"
          />
        </div>
        <div
          className={`bg-[url('${bg_fourth}')] animation-timeline relative mt-[2.6vw] flex h-[69.8vw] animate-emergence flex-col items-center rounded-md bg-contain pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]`}
        >
          <h3 className={`${classesTitle}`}>{title4}</h3>
          <img
            src={fourth}
            alt="logo"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 ${classesLogo}`}
          />
        </div>
        <div
          className={`bg-[url('${bg_fifth}')] animation-timeline mt-[2.6vw] flex h-[69.8vw] animate-emergence flex-col items-center justify-between rounded-md bg-contain pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]`}
        >
          <h3 className={`${classesTitle}`}>{title5}</h3>
          <img
            src={fifth}
            alt="advantage"
            className="animation-timeline w-full animate-emergence"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectsModal
