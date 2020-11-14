import React, { CSSProperties } from 'react'
import { Color, Position, TextFieldContent } from './types'

export const mapColorToString = (color: Color | string): string => {
    if (typeof color === 'string') return color
    return `rgba(${Object.values(color).join(',')})`
}

export const mapStyles = (style: any) => {
    return {}
}

export const mapPosition = (position: Position): CSSProperties => ({
    transform: `translate(${position.left}px, ${position.top}px)`,
})

export const mapTextToContent = (
    text: TextFieldContent,
    onFocus: () => void
) => {
    switch (text.type) {
        case 'h1':
            return (
                <h1
                    key={text.id}
                    style={text.style}
                    contentEditable
                    suppressContentEditableWarning
                    onFocus={onFocus}
                >
                    {text.value}
                </h1>
            )
        case 'h2':
            return (
                <h2
                    key={text.id}
                    style={text.style}
                    contentEditable
                    suppressContentEditableWarning
                    onFocus={onFocus}
                >
                    {text.value}
                </h2>
            )
        case 'h3':
            return (
                <h3
                    key={text.id}
                    style={text.style}
                    contentEditable
                    suppressContentEditableWarning
                    onFocus={onFocus}
                >
                    {text.value}
                </h3>
            )
        case 'p':
            return (
                <p
                    key={text.id}
                    style={text.style}
                    contentEditable
                    suppressContentEditableWarning
                    onFocus={onFocus}
                >
                    {text.value}
                </p>
            )
        case 'ul':
            return (
                <ul key={text.id}>
                    {text.value.map((item) => (
                        <li key={item.id}>{mapTextToContent(item, onFocus)}</li>
                    ))}
                </ul>
            )
        case 'ol':
            return (
                <ol key={text.id}>
                    {text.value.map((item) => (
                        <li key={item.id}>{mapTextToContent(item, onFocus)}</li>
                    ))}
                </ol>
            )
    }
}
