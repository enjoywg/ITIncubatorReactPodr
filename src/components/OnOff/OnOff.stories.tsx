import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action("on or off clicked")

export const OnOffTrue = () => <OnOff on={true} setOn={callback} />
export const OnOffFalse = () => <OnOff on={false} setOn={callback} />
export const OnOffChanging = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} setOn={setOn} />
}