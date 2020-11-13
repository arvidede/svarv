import { Color } from './types'

export const mapColorToString = (color: Color | string): string => {
    if (typeof color === 'string') return color
    return `rgba(${Object.values(color).join(',')})`
}
