import React from 'react'
import { SlideType } from './types'

interface SlideContextType {
    currentSlide: SlideType
    focusedItem: SlideType
    onUpdateSlide: (updatedSlide: SlideType) => void
}

export const SlideContext = React.createContext<SlideContextType>(
    {} as SlideContextType
)

export const useSlides = () => {
    const { currentSlide, focusedItem, onUpdateSlide } = React.useContext(
        SlideContext
    )

    const addNewSlide = () => {}

    const duplicateSlide = () => {}

    const addTextItem = () => {
        console.log('Adding new item')
    }

    const changeTextStyle = () => {}

    return { currentSlide, onUpdateSlide, addTextItem }
}
