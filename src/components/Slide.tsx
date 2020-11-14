import React, { CSSProperties, FC, useState, useEffect, useRef } from 'react'
import { SlideType, ContentObject, Position } from '../utils/'
import styles from '../styles/Slide.module.scss'
import clsx from 'clsx'

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

interface SlideItemProps {
    content: ContentObject
}

const SlideItem: FC<SlideItemProps> = ({ content }) => {
    const [isFocused, setIsFocused] = useState(false)
    const itemRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ top: 100, left: 100 })

    const renderItem = () => {
        switch (content.type) {
            case 'text':
                return <p style={mapStyles(content.style)}>{content?.text}</p>
                break
            default:
                return null
                break
        }
    }
    const handleSetFocus = () => setIsFocused(true)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ top: e.x, left: e.y })
        }

        const handleMouseDown = (e: Event) => {
            setIsFocused(true)
            document.addEventListener('mousemove', handleMouseMove)
        }

        const handleMouseUp = (e: Event) => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (!itemRef.current?.contains(e.target as Node))
                setIsFocused(false)
        }

        itemRef.current?.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            itemRef.current?.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [itemRef.current])

    return (
        <div
            ref={itemRef}
            style={mapPosition(position)}
            className={clsx(styles.itemWrapper, isFocused && styles.focus)}
        >
            <p></p>
            {renderItem()}
        </div>
    )
}

const mapStyles = (style: any) => {
    return {}
}

const mapPosition = (position: Position) => {
    return {
        transform: `translate(${position.top}px, ${position.left}px)`,
    } as CSSProperties
}

export default Slide
