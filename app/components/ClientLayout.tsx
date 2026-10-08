"use client"

import { useState, useEffect } from "react"
import SpaceInvaderLoader from "./SpaceInvaderLoader"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 segundos de carga

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <SpaceInvaderLoader />}
      {children}
    </>
  )
} 