import {useState, React} from 'react'

import DropdownMenu from './DropdownMenu.jsx'

import {inactiveNavIcons} from "../data/constants.js"
import {activeNavIcons} from "../data/constants.js"


function NavBar() {
    const {IHamIcon, IPlayIcon, ISliderIcon, ISettingsIcon, IDarkmodeIcon} = inactiveNavIcons
    const {AHamIcon, APlayIcon, ASliderIcon, ASettingsIcon, ADarkmodeIcon} = activeNavIcons
    let [navActive, setNavActive] = useState(false)
    let [algorithmActive, setAlgorithmActive] = useState(false)

    return (
        <div className={"h-full bg-neutral-900 flex flex-col justify-between items-start py-6 transition-all duration-500 " + 
        (navActive ? "w-64" : "w-24")} 
        onMouseEnter={() => {setNavActive(true)}} 
        onMouseLeave={() => {setNavActive(false)}}>
            
            <div className="w-64 flex justify-center flex-col">
                <div className='pl-6'>
                    <img src={navActive? AHamIcon:IHamIcon} alt="" className={"w-12 mb-5 transition-all duration-500 " + (navActive && "rotate-180")}/>
                </div>
                <div className='flex items-center gap-6 pl-6'>
                    <img src={navActive? APlayIcon:IPlayIcon} alt="" className="w-12 my-5"/>
                    <h2 className='text-white text-2xl'>Play</h2>
                </div>
                <div className='flex items-center gap-6 pl-6'>
                    <img src={navActive? ASliderIcon:ISliderIcon} alt="" className="w-12 my-5"/>
                    <h2 className='text-white text-2xl'>Algorithms</h2>
                </div>

            </div>
            <div className="w-64 flex justify-center flex-col">
                <div className='flex items-center gap-6 pl-6'>
                    <img src={navActive? ASettingsIcon:ISettingsIcon} alt="" className="w-12 my-5"/>
                    <h2 className='text-white text-2xl'>Settings</h2>
                </div>
                <div className='pl-6'>
                    <img src={navActive? ADarkmodeIcon:IDarkmodeIcon} alt="" className="w-12 mt-5"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar