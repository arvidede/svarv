import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible(initialIsVisible = false) {
    const [isVisible, setIsVisible] = useState(initialIsVisible)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleMouseClicked = (e: Event) =>
            setIsVisible((currentIsVisible) => {
                if (
                    wrapperRef.current?.contains(e.target as Node) &&
                    !currentIsVisible
                ) {
                    return true
                } else if (
                    !wrapperRef.current?.contains(e.target as Node) &&
                    currentIsVisible
                ) {
                    return false
                } else {
                    return currentIsVisible
                }
            })

        const handleKeyPressed = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsVisible(false)
            }
        }

        document.addEventListener('click', handleMouseClicked, true)
        document.addEventListener('keydown', handleKeyPressed, true)
        return () => {
            document.removeEventListener('click', handleMouseClicked, true)
            document.removeEventListener('keydown', handleKeyPressed, true)
        }
    }, [])

    return [wrapperRef, isVisible] as const
}
