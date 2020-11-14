export interface Position {
    top: number
    left: number
}

interface SlideObject {
    position: Position
    style: object
}

export interface TextObject extends SlideObject {
    style: {
        fontSize: number
        fontFamily: string
    }
    text: string
    type: 'text'
}

export interface ImageObject extends SlideObject {
    src: string
    type: 'image'
}

export interface ShapeObject extends SlideObject {
    type: 'shape'
}

export type ContentObject = TextObject | ImageObject | ShapeObject

export interface SlideType {
    number: number
    content?: ContentObject[]
    color: string
}

export interface Color {
    r: number
    g: number
    b: number
    a?: number
}
