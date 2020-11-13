import React, { useState, FC } from 'react'
import { SlideType, mapColorToString } from '../utils/'
import styles from '../styles/Slide.module.scss'

interface SlideProps extends SlideType {}

const Slide: FC<SlideProps> = ({ number, content, color }) => {
    const [colorState, setColorState] = useState<string>('#fff')
    const styles_ = {
        backgroundColor: mapColorToString(colorState),
    }

    return (
        <div className={styles.wrapper} style={styles_}>
            Slide {number}
        </div>
    )
}

export default Slide
