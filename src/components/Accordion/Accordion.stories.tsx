import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("collapsed clicked")

export const Collapsed = () => <Accordion title={"Menu"} collapsed={true} setAccordionCollapsed={callback} />
export const Uncollapsed = () => <Accordion title={"Menu"} collapsed={false} setAccordionCollapsed={callback}/>
export const CollapsedChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion title={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
}