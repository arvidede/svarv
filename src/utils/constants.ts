import { SlideType, TextObject } from './types'
import { v4 as uuid } from 'uuid'

const TEXT_OBJECT: TextObject = {
    text: [
        {
            id: uuid(),
            type: 'p',
            value: 'En lång mening',
            style: {
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        },
        {
            id: uuid(),
            type: 'ol',
            value: [
                {
                    id: uuid(),
                    type: 'li',
                    value: 'Ettan i listan',
                    style: {
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
                {
                    id: uuid(),
                    type: 'li',
                    value: 'Tvåan i listan',
                    style: {
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
            ],
        },
    ],
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
