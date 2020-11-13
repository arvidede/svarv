import React, { FC } from 'react'
import styles from '../styles/Controls.module.scss'
import { Back, Next } from './icons'
import clsx from 'clsx'

interface ControlsProps {
    currentSlide: number
    onSlideChange: (nextSlide: number) => void
    showBack: boolean
    showNext: boolean
}

const Controls: FC<ControlsProps> = ({
    currentSlide,
    showBack,
    showNext,
    onSlideChange,
}) => {
    return (
        <div className={styles.wrapper}>
            {showBack && (
                <button
                    className={clsx(styles.button, !showNext && styles.active)}
                    onClick={() => onSlideChange(currentSlide - 1)}
                >
                    <Back />
                </button>
            )}
            {showNext && (
                <button
                    className={clsx(styles.button, styles.active)}
                    onClick={() => onSlideChange(currentSlide + 1)}
                >
                    <Next />
                </button>
            )}
        </div>
    )
}

export default Controls
