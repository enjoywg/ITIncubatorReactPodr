import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)
    let collapsedChange = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} collapsedChange={collapsedChange}/>
            {!collapsed && <AccordionBody/>}
        </div>)

}

type AccordionTitlePropsType = {
    title: string
    collapsedChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapsedChange}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}