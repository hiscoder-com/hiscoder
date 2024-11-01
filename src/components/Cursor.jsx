import { useEffect, useRef, useState } from 'react'

function Cursor() {
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const links = Array.from(document.getElementsByTagName('a'))
    const buttons = Array.from(document.getElementsByTagName('button'))
    const labels = Array.from(document.getElementsByTagName('label'))
    const inputs = Array.from(document.getElementsByTagName('input'))
    const textareas = Array.from(document.getElementsByTagName('textarea'))

    const elements = [links, buttons, labels, inputs, textareas]

    elements.forEach((element) => {
      element.forEach((element) => {
        element.addEventListener('mouseover', handleMouseOver)
        element.addEventListener('mouseleave', handleMouseLeave)
        element.addEventListener('mousedown', handleMouseDown)
        element.addEventListener('mouseup', handleMouseUp)
      })
    })

    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })

    document.addEventListener('mouseleave', () => {
      cursor.classList.add('hidden')
    })

    document.addEventListener('mouseover', () => {
      cursor.classList.remove('hidden')
    })

    function handleMouseOver() {
      cursor.classList.add('scale-150', 'bg-cursorHover')
    }

    function handleMouseLeave() {
      cursor.classList.remove('scale-150', 'bg-cursorHover')
    }

    function handleMouseDown() {
      cursor.classList.add('scale-50')
    }

    function handleMouseUp() {
      cursor.classList.remove('scale-50')
    }

    return () => {
      elements.forEach((element) => {
        element.forEach((element) => {
          element.removeEventListener('mouseover', handleMouseOver)
          element.removeEventListener('mouseleave', handleMouseLeave)
          element.removeEventListener('mousedown', handleMouseDown)
          element.removeEventListener('mouseup', handleMouseUp)
        })
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{ left: cursorX + 'px', top: cursorY + 'px' }}
      id="cursor"
      className="pointer-events-none absolute z-50 hidden h-[1vw] w-[1vw] -translate-x-1/2 -translate-y-1/2 select-none rounded-full border-[0.05vw] border-solid border-bgHeader bg-cursor transition duration-150"
    ></div>
  )
}

export default Cursor
