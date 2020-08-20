import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className={"App"}>
            <PageTitle title="This is App"/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion title={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledAccordion title={"Menu2"}/>
            {/*<UncontrolledRating/>*/}
            <UncontrolledOnOff onChange={setOn}/>{on.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
