import React, { FC, useEffect, useState } from 'react'
import { TextFieldContent, mapTextToContent, useSlides } from '../utils'
import styles from '../styles/TextField.module.scss'

interface TextFieldProps {
    isFocused: boolean
    text: TextFieldContent[]
}

const TextField: FC<TextFieldProps> = ({ isFocused, text }) => {
    const { addTextItem } = useSlides()
    const [focusedTextItem, setFocusedTextItem] = useState<TextFieldContent>()

    useEffect(() => {
        if (isFocused) {
            const handleEnterPressed = (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    addTextItem()
                }
            }
            document.addEventListener('keydown', handleEnterPressed)
            return () =>
                document.removeEventListener('keydown', handleEnterPressed)
        }
    }, [isFocused])

    return (
        <div className={styles.wrapper}>
            {text.map((item) =>
                mapTextToContent(item, () => setFocusedTextItem(item))
            )}
            {isFocused && <TextFieldSettings />}
        </div>
    )
}

const TextFieldSettings = () => {
    return <div className={styles.itemSettings}>Settings</div>
}

export default TextField
