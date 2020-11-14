import React, { FC, useEffect, useRef, useState } from 'react'
import { ContentObject, mapPosition, mapStyles } from '../utils/'
import styles from '../styles/SlideItem.module.scss'
import clsx from 'clsx'

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
                return (
                    <textarea
                        className={styles.textArea}
                        // disabled={!isFocused}
                        value={content?.text}
                        style={mapStyles(content.style)}
                    ></textarea>
                )
            default:
                return null
        }
    }

    useEffect(() => {
        const node = itemRef.current
        const handleKeyPressed = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsFocused(false)
                document.removeEventListener('keydown', handleKeyPressed)
                document.removeEventListener('mousemove', handleMouseMove)
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition((pos) => ({
                top: pos.top + e.movementY,
                left: pos.left + e.movementX,
            }))
        }

        const handleMouseDown = (e: MouseEvent) => {
            setIsFocused(true)
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('keydown', handleKeyPressed)
        }

        const handleMouseUp = (e: Event) => {
            document.removeEventListener('keydown', handleKeyPressed)
            document.removeEventListener('mousemove', handleMouseMove)
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (!node?.contains(e.target as Node)) setIsFocused(false)
        }

        node?.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            node?.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [itemRef])

    return (
        <div
            ref={itemRef}
            style={mapPosition(position)}
            className={clsx(styles.itemWrapper, isFocused && styles.focus)}
        >
            {renderItem()}
        </div>
    )
}

export default SlideItem
