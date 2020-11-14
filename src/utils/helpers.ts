import { CSSProperties } from 'react'
import { Color, Position } from './types'

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
