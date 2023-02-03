import {useState, React} from 'react'

import {navIcons} from "../data/constants.js"

function NavBar() {
    const {HamIcon, PlayIcon, SliderIcon, SettingsIcon, DarkmodeIcon} = navIcons
    let [navActive, setNavActive] = useState(false)

    return (
        <div className={"h-full bg-neutral-900 flex flex-col justify-between items-start transition-all duration-500 " + 
        (navActive ? "w-60" : "w-24")} 
        onMouseEnter={() => {setNavActive(true)}} 
        onMouseLeave={() => {setNavActive(false)}}>
            
            <div className="w-24 flex justify-center flex-col items-center">
                <img src={HamIcon} alt="" className={"w-12 my-5 transition-all duration-500 " + (navActive && "rotate-180")}/>
                <img src={PlayIcon} alt="" className="w-12 my-5 "/>
                <img src={SliderIcon} alt="" className="w-12 my-5 "/>
            </div>
            <div className="w-24 flex justify-center flex-col items-center">
                <img src={SettingsIcon} alt="" className="w-12 my-5 "/>
                <img src={DarkmodeIcon} alt="" className="w-12 my-5 "/>
            </div>
        </div>
    )
}

export default NavBar