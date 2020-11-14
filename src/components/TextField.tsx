import React, { FC } from 'react'
import styles from '../styles/TextField.module.scss'
import { TextFieldContent } from '../utils/types'

const mapTextToContent = (text: TextFieldContent) => {
    switch (text.type) {
        case 'h1':
            return (
                <h1 key={text.value} style={text.style}>
                    {text.value}
                </h1>
            )
        case 'h2':
            return (
                <h2 key={text.value} style={text.style}>
                    {text.value}
                </h2>
            )
        case 'h3':
            return (
                <h3 key={text.value} style={text.style}>
                    {text.value}
                </h3>
            )
        case 'p':
            return (
                <p key={text.value} style={text.style}>
                    {text.value}
                </p>
            )
        case 'li':
            return (
                <li key={text.value} style={text.style}>
                    {text.value}
                </li>
            )
        case 'ul':
            return <ul key={text.id}>{text.value.map(mapTextToContent)}</ul>
        case 'ol':
            return <ol>{text.value.map(mapTextToContent)}</ol>
    }
}

interface TextFieldProps {
    isFocused: boolean
    text: TextFieldContent[]
}

const TextField: FC<TextFieldProps> = ({ isFocused, text }) => {
    return (
        <div>
            {text.map(mapTextToContent)}
            {isFocused && <TextFieldSettings />}
        </div>
    )
}

const TextFieldSettings = () => {
    return <div className={styles.itemSettings}>Settings</div>
}

export default TextField
