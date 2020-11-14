import React, { FC, useState } from 'react'
import { SketchPicker as ColorPicker } from 'react-color'
import clsx from 'clsx'
import {
    mapColorToString,
    useComponentVisible,
    Color,
    useSlides,
} from '../utils'
import styles from '../styles/Settings.module.scss'

interface SettingsProps {
    isOpen: boolean
    onToggleMenu: () => void
}

const Settings: FC<SettingsProps> = ({ isOpen, onToggleMenu }) => {
    const { currentSlide, onUpdateSlide } = useSlides()

    const handleChangeColor = (color: string) => {
        onUpdateSlide({ ...currentSlide, color })
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={clsx(
                    styles.menuContainer,
                    isOpen && styles.open,
                    false && ''
                )}
            >
                <ColorItem
                    color={currentSlide.color}
                    onChangeColor={handleChangeColor}
                />
            </div>
            <button className={styles.toggleButton} onClick={onToggleMenu}>
                X
            </button>
        </div>
    )
}

interface ColorItemProps {
    color: string
    onChangeColor: (color: string) => void
}

const ColorItem: FC<ColorItemProps> = ({ color, onChangeColor }) => {
    const [ref, isVisible] = useComponentVisible(false)

    return (
        <div
            className={clsx(styles.menuItem, styles.colorItemWrapper)}
            ref={ref}
        >
            Color
            <div
                className={styles.colorItemColor}
                style={{ backgroundColor: color }}
            ></div>
            {isVisible && (
                <div className={styles.colorPicker}>
                    <ColorPicker
                        color={color}
                        onChange={(color) =>
                            onChangeColor(mapColorToString(color.hex))
                        }
                    />
                </div>
            )}
        </div>
    )
}

export default Settings
