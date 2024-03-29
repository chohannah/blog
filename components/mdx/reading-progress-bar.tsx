'use client'

import { useState, useEffect } from 'react'

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0)

  const scrollHeight = () => {
    const element = document.documentElement
    const ScrollTop = element.scrollTop || document.body.scrollTop
    const ScrollHeight = element.scrollHeight || document.body.scrollHeight
    const ClientHeight = element.clientHeight || document.body.clientHeight
    const percent = (ScrollTop / (ScrollHeight - ClientHeight)) * 100

    setWidth(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  return (
    <div className="reading-progress-bar" style={{ width: `${width}%` }}></div>
  )
}

export default ReadingProgressBar
