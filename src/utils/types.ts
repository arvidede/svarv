export type TextFieldContent = TextFieldItem | TextFieldList

export interface TextFieldItem {
    id: string
    type: 'h1' | 'h2' | 'h3' | 'p' | 'li'
    value: string
    style?: {
        fontSize: number
        fontFamily: string
    }
}

export interface TextFieldList {
    id: string
    type: 'ul' | 'ol'
    value: TextFieldItem[]
}

export interface Position {
    top: number
    left: number
}

interface SlideObject {
    position: Position
}

export interface TextObject extends SlideObject {
    text: TextFieldContent[]
    type: 'text'
}

export interface ImageObject extends SlideObject {
    src: string
    type: 'image'
    style?: object
}

export interface ShapeObject extends SlideObject {
    type: 'shape'
    style?: object
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
