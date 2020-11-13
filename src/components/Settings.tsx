import React, { FC, useRef, useState } from 'react'
import { SketchPicker as ColorPicker } from 'react-color'
import styles from '../styles/Settings.module.scss'
import clsx from 'clsx'

interface SettingsProps {
    isOpen: boolean
    onToggleMenu: () => void
}

const Settings: FC<SettingsProps> = ({ isOpen, onToggleMenu }) => {
    const colorPickerRef = useRef(null)
    return (
        <div className={styles.wrapper}>
            <div
                className={clsx(styles.menuContainer, isOpen && styles.open)}
            ></div>
            {colorPickerRef.current && (
                <ColorPicker
                    ref={colorPickerRef.current}
                    color={'#fff'}
                    onChange={(color) => {}}
                />
            )}
            <button className={styles.toggleButton} onClick={onToggleMenu}>
                X
            </button>
        </div>
    )
}

export default Settings
