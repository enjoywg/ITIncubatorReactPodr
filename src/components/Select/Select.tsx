import React, {useState, KeyboardEvent, useEffect} from "react";
import c from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    useEffect(() => {
            setHoveredElementValue(props.value)
        }, [props.value]
    )
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendedElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendedElement) {
                        props.onChange(pretendedElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <select name="" id="">
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <div className={c.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={c.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={c.items}>
                        {props.items.map(i => <div
                            className={c.item + " " + (hoveredItem === i ? c.selected : "")}
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}