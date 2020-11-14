import React, { CSSProperties, FC } from 'react'
import { SlideType } from '../utils/'
import styles from '../styles/Slide.module.scss'
import SlideItem from './SlideItem'

interface SlideProps extends SlideType {}

const Slide: FC<SlideProps> = ({ number, content, color }) => {
    const styles_ = {
        backgroundColor: color,
    }

    return (
        <div className={styles.wrapper} style={styles_}>
            <h1>Slide {number}</h1>
            {content?.map((item, idx) => (
                <SlideItem key={idx} content={item} />
            ))}
        </div>
    )
}

export default Slide
