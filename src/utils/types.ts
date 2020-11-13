interface Position {
    top: number
    left: number
}

interface SlideObject {
    position: Position
}

interface TextObject extends SlideObject {
    fontSize: number
    fontFamily: 'string'
}

interface ImageObject extends SlideObject {
    src: 'string'
}

export type ContentObject = TextObject | ImageObject

export interface Color {
    r: number
    g: number
    b: number
    a?: number
}

export interface SlideType {
    number: number
    content?: any[]
    color?: string
}
