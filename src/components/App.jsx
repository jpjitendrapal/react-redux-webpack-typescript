import "../styles/index.scss";
import Hero from './hero/hero';
import {React,  useState } from "react";

export default function App() {
    const [showHero, setShowHero] = useState(false);
    return (<div className="">
                Hi,
                <button onClick={()=>{setShowHero(!showHero)}}>{showHero ? "Hide" : "Show"}</button>
                {showHero && <Hero/>}
            </div>)
}