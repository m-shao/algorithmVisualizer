import {useState, React} from 'react'

import {inactiveNavIcons} from "../data/constants.js"
import {activeNavIcons} from "../data/constants.js"

function NavBar() {
    const {IHamIcon, IPlayIcon, ISliderIcon, ISettingsIcon, IDarkmodeIcon} = inactiveNavIcons
    const {AHamIcon, APlayIcon, ASliderIcon, ASettingsIcon, ADarkmodeIcon} = activeNavIcons
    let [navActive, setNavActive] = useState(false)

    return (
        <div className={"h-full bg-neutral-900 flex flex-col justify-between items-start transition-all duration-500 " + 
        (navActive ? "w-60" : "w-24")} 
        onMouseEnter={() => {setNavActive(true)}} 
        onMouseLeave={() => {setNavActive(false)}}>
            
            <div className="w-24 flex justify-center flex-col items-center">
                <img src={navActive? AHamIcon:IHamIcon} alt="" className={"w-12 my-5 transition-all duration-500 " + (navActive && "rotate-180")}/>
                <img src={navActive? APlayIcon:IPlayIcon} alt="" className="w-12 my-5"/>
                <img src={navActive? ASliderIcon:ISliderIcon} alt="" className="w-12 my-5"/>
            </div>
            <div className="w-24 flex justify-center flex-col items-center">
                <img src={navActive? ASettingsIcon:ISettingsIcon} alt="" className="w-12 my-5"/>
                <img src={navActive? ADarkmodeIcon:IDarkmodeIcon} alt="" className="w-12 my-5"/>
            </div>
        </div>
    )
}

export default NavBar