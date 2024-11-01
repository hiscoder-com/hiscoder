import { useEffect, useRef, useState } from 'react'

import { motion, useAnimationControls } from 'framer-motion'

const getCurrentTransformX = (element) => {
  if (!element) return 0

  const computedStyle = window.getComputedStyle(element)
  const matrix = new DOMMatrix(computedStyle.transform)

  return matrix.m41
}

const Carousel = () => {
  const controls = useAnimationControls()
  const containerRef = useRef(null)
  const lastDirection = useRef(true)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const slideWidth = containerRef.current.children[0].offsetWidth
        setWidth(slideWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (!width) return

    let lastScrollTop = 0
    let ticking = false

    const startAnimation = async (isScrollingDown) => {
      const currentX = getCurrentTransformX(containerRef.current)
      const totalDistance = width

      if (!isScrollingDown) {
        await controls.start({
          x: currentX - totalDistance,
          transition: {
            duration: 0,
          },
        })
      }

      controls.start({
        x: isScrollingDown
          ? [currentX, currentX - totalDistance]
          : [currentX - totalDistance, currentX],
        transition: {
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        },
      })
    }

    const onScroll = async () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY
          const isScrollingDown = lastScrollTop < top

          if (isScrollingDown !== lastDirection.current) {
            controls.stop()
            startAnimation(isScrollingDown)
            lastDirection.current = isScrollingDown
          }

          lastScrollTop = top
          ticking = false
        })
        ticking = true
      }
    }

    startAnimation(true)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [controls, width])

  const SlideElement = () => (
    <span className="flex items-center">
      Our work
      <svg
        className="mx-[4.1vw] h-[5.4vw] w-[5.4vw] sm:mx-[2.3vw] sm:h-[2.91vw] sm:w-[2.91vw] lg:mx-[2.61vw] lg:h-[3.33vw] lg:w-[3.33vw] 2xl:h-[3.37vw] 2xl:w-[3.37vw]"
        viewBox="0 0 116 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z"
          fill="white"
        />
      </svg>
    </span>
  )

  return (
    <div className="animation-timeline absolute left-0 top-[28vw] flex w-full animate-emergence items-center overflow-hidden ease-in sm:top-[7.8vw]">
      <motion.div
        ref={containerRef}
        className="flex items-center whitespace-nowrap text-[18.4vw] text-white sm:text-[9.73vw] lg:text-[11.03vw]"
        animate={controls}
      >
        {[...Array(32)].map((_, i) => (
          <SlideElement key={i} />
        ))}
      </motion.div>
    </div>
  )
}

export default Carousel
