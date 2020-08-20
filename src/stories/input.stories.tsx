import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
    //component: UncontrolledOnOff
}


export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChange}/> - {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)}
    return <><input ref={inputRef}/> - <button onClick={save}>save</button> - {value}</>
}
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <input value={value} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)
    return <input type="checkbox" checked={value} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Warsaw</option>
        <option value="3">Lisbon</option>
    </select>
}