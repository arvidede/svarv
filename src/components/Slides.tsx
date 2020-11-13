import React, { useState, FC } from 'react'
import styles from '../styles/Slides.module.scss'
import { Slide } from './'
import { SlideType } from '../utils/'

interface SlidesProps {
    slides: SlideType[]
    currentSlide: number
}

const Slides: FC<SlidesProps> = ({ currentSlide, slides }) => {
    const styles_ = {
        transform: `translateX(-${currentSlide * 100}vw)`,
    }

    return (
        <div className={styles.wrapper} style={styles_}>
            {slides.map((slide, idx) => (
                <Slide
                    color={slide.color}
                    key={idx}
                    number={slide.number}
                    content={slide.content}
                />
            ))}
        </div>
    )
}

export default Slides
