import { timeStamp } from 'console'
import React, { useState, useEffect, FC } from 'react'
import { Settings, Slides, Controls } from './components'
import './styles/App.css'
import { SlideType, DUMMY_SLIDES, SlideContext } from './utils/'

function App() {
    const [slides, setSlides] = useState<SlideType[]>(DUMMY_SLIDES)
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleChangeSlide = (nextSlide: number) => {
        if (nextSlide >= 0 && nextSlide < slides.length)
            setCurrentSlide(nextSlide)
    }

    const handleUpdateSlide = (updatedSlide: SlideType) => {
        setSlides([
            ...slides.slice(0, currentSlide),
            updatedSlide,
            ...slides.slice(currentSlide + 1),
        ])
    }

    useEffect(() => {
        const handleKeyPressed = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'p':
                    if (e.metaKey && e.shiftKey) {
                        e.preventDefault()
                        console.log('shift+cmd+p')
                    }
                    break
                case 'm':
                    handleToggleSettings()
                    break
                case 'ArrowRight':
                    setCurrentSlide((current) =>
                        current < slides.length - 1 ? current + 1 : current
                    )
                    break
                case 'ArrowLeft':
                    setCurrentSlide((current) =>
                        current > 0 ? current - 1 : current
                    )
                    break
                default:
                    break
            }
        }

        document.addEventListener('keydown', handleKeyPressed)
        return () => document.removeEventListener('keydown', handleKeyPressed)
    }, [])

    const [showSettings, setShowSettings] = useState(false)

    const handleToggleSettings = () => setShowSettings((current) => !current)

    return (
        <div className='App'>
            <SlideContext.Provider
                value={{
                    currentSlide: slides[currentSlide],
                    focusedItem: slides[currentSlide],
                    onUpdateSlide: handleUpdateSlide,
                }}
            >
                <Slides slides={slides} currentSlide={currentSlide} />
                <Settings
                    isOpen={showSettings}
                    onToggleMenu={handleToggleSettings}
                />
                <Controls
                    currentSlide={currentSlide}
                    onSlideChange={handleChangeSlide}
                    showBack={currentSlide > 0}
                    showNext={currentSlide < slides.length - 1}
                />
            </SlideContext.Provider>
        </div>
    )
}

const Header = () => {
    return <header>Header</header>
}

export default App
