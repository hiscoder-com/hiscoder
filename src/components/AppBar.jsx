import { useEffect, useLayoutEffect, useRef } from 'react'

import PropTypes from 'prop-types'

import appBarButtons from '../../data/appBarButtons.json'

function AppBar({ handleClickToButton }) {
  const AppBarRef = useRef(null)

  useEffect(() => {
    const AppBar = AppBarRef.current
    const text = document.getElementById('text')

    const coordAppBar = AppBar.getBoundingClientRect().top
    const coordText = text.getBoundingClientRect().top

    document.addEventListener('scroll', handleScroll)

    function handleScroll() {
      if (window.scrollY > coordAppBar - 40) {
        AppBar.classList.remove(
          'sm:absolute',
          'sm:top-[52vw]',
          'lg:top-[48vw]',
          '2xl:top-[49vw]'
        )
        AppBar.classList.add('sm:fixed', 'sm:top-10', 'lg:top-10', '2xl:top-10')
      } else if (window.scrollY <= coordText) {
        AppBar.classList.add(
          'sm:absolute',
          'sm:top-[52vw]',
          'lg:top-[48vw]',
          '2xl:top-[49vw]'
        )
        AppBar.classList.remove(
          'duration-500',
          'sm:fixed',
          'sm:top-10',
          'lg:top-10',
          '2xl:top-10'
        )
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    const contactUs = document.getElementById('contactUs')
    document.addEventListener('scroll', function () {
      const contactUsSection = contactUs.getBoundingClientRect().top

      if (contactUsSection < window.innerHeight) {
        AppBarRef.current.classList.remove('sm:top-10', 'lg:top-10', '2xl:top-10')
        AppBarRef.current.classList.add(
          'duration-500',
          'sm:top-[90vh]',
          'lg:top-[85vh]',
          '2xl:top-[90vh]'
        )
      } else if (contactUsSection >= window.innerHeight) {
        AppBarRef.current.classList.remove(
          'sm:top-[90vh]',
          'lg:top-[85vh]',
          '2xl:top-[90vh]'
        )
        AppBarRef.current.classList.add('sm:top-10', 'lg:top-10', '2xl:top-10')
      }
    })
  }, [])

  const classesButtons =
    'flex items-center justify-center whitespace-nowrap rounded-full bg-transparent font-bold text-white duration-150 last:bg-appBarBtn active:bg-appBarBtn active:duration-150 sm:h-[4.95vw] sm:px-[1.86vw] sm:text-[1.42vw] lg:h-[4.43vw] lg:px-[1.6vw] lg:text-[1.1vw] lg:hover:bg-appBarBtn lg:hover:duration-150 lg:active:bg-transparent 2xl:h-[2.53vw] 2xl:px-[0.88vw] 2xl:text-[0.61vw]'

  const getAttributes = (label, href) => {
    const attributes = {
      className: classesButtons,
      onClick: () => handleClickToButton(label),
    }

    if (href) {
      attributes.href = href
    }

    return attributes
  }

  return (
    <div
      ref={AppBarRef}
      className="animation-timeline top-10 z-30 hidden animate-emergence items-center gap-2.5 rounded-full bg-buttonGroup backdrop-blur-3xl sm:absolute sm:top-[52vw] sm:flex sm:p-[0.53vw] lg:top-[48vw] lg:p-[0.32vw] 2xl:top-[49vw] 2xl:p-[0.175vw]"
    >
      <a
        className="flex items-center justify-center rounded-full bg-appBarBtn sm:h-[4.95vw] sm:w-[6vw] lg:h-[4.43vw] lg:w-[6.1vw] 2xl:h-[2.53vw] 2xl:w-[3.3vw]"
        href="#"
      >
        <img
          src="img/logo_dark.svg"
          alt="logo HisCoder"
          className="fill-white sm:w-[3.01vw] lg:w-[3.43vw] 2xl:w-[1.83vw]"
        />
      </a>
      {appBarButtons.map(({ label, href }, index) => (
        <a key={index} {...getAttributes(label, href)}>
          {label}
        </a>
      ))}
    </div>
  )
}

AppBar.propTypes = {
  handleClickToButton: PropTypes.func.isRequired,
}

export default AppBar
