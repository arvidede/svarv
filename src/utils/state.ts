import React from 'react'
import { SlideType } from './types'

interface SlideContext {
    currentSlide: SlideType
    focusedItem: SlideType
    onUpdateSlide: (updatedSlide: SlideType) => void
}

export const SlideContext = React.createContext<SlideContext>(
    {} as SlideContext
)

export const useSlides = () => React.useContext(SlideContext)
