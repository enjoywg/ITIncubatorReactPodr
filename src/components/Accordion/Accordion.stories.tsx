import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("collapsed clicked")
const onClickCallback = action("some item was clicked")

export const Collapsed = () => <Accordion title={"Menu"} collapsed={true} setAccordionCollapsed={callback}
                                          onClick={onClickCallback}
                                          items={[{title: "Igor", value: 1}, {title: "Valera", value: 2}, {title: "Sveta", value: 3},]} />
export const Uncollapsed = () => <Accordion title={"Menu"} collapsed={false} setAccordionCollapsed={callback}
                                            onClick={onClickCallback}
                                            items={[{title: "Igor", value: 1}, {title: "Valera", value: 2}, {title: "Sveta", value: 3},]}/>
export const CollapsedChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion title={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}
                      onClick={onClickCallback}
                      items={[{title: "Igor", value: 1}, {title: "Valera", value: 2}, {title: "Sveta", value: 3},]}/>
}