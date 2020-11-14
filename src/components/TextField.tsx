import React, { FC } from 'react'
import styles from '../styles/TextField.module.scss'

interface TextFieldProps {
    isFocused: boolean
}

const TextField: FC<TextFieldProps> = ({ isFocused }) => {
    return <div>{isFocused && <TextFieldSettings />}</div>
}

const TextFieldSettings = () => {
    return <div className={styles.itemSettings}>Settings</div>
}
