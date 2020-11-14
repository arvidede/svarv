import { SlideType, TextObject } from './types'

const TEXT_OBJECT: TextObject = {
    style: {
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    text: 'En lång mening',
    type: 'text',
    position: {
        top: 100,
        left: 100,
    },
}

export const DUMMY_SLIDES: SlideType[] = [
    {
        number: 1,
        content: [TEXT_OBJECT],
        color: '#fff',
    },
    {
        number: 2,
        content: [],
        color: '#fff',
    },
    {
        number: 3,
        content: [],
        color: '#fff',
    },
    {
        number: 4,
        content: [],
        color: '#fff',
    },
]
