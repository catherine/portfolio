import { ReactNode, useEffect, useRef, useState } from 'react'
import { Navbar } from './Navbar'

import './PageContainer.css'
import { useScreenSize } from '../hooks/useScreenSize'
import { MOBILE_BREAKPOINT } from '../constants'

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  const navbarRef = useRef<HTMLDivElement>(null)
  const [navbarOffset, setNavbarOffset] = useState(0)
  const { width: screenWidth } = useScreenSize()

  useEffect(() => {
    const updateHeight = () => {
      if (navbarRef.current) {
        setNavbarOffset(navbarRef.current.offsetHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <div className="pageContainer">
      <Navbar navbarRef={navbarRef} />
      <div
        className="pageContainer-content"
        style={{
          marginTop: screenWidth < MOBILE_BREAKPOINT ? navbarOffset : 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
