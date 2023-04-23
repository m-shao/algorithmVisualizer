import {useState, React} from 'react'

import DropdownMenu from './DropdownMenu.jsx'

import {inactiveNavIcons} from "../data/constants.js"
import {activeNavIcons} from "../data/constants.js"


function NavBar({setPlaying, playing}) {
    const {IHamIcon, IPlayIcon, ISliderIcon, ISettingsIcon, IDarkmodeIcon} = inactiveNavIcons
    const {AHamIcon, APlayIcon, ASliderIcon, ASettingsIcon, ADarkmodeIcon} = activeNavIcons
    let [navActive, setNavActive] = useState(false)
    let [algorithmActive, setAlgorithmActive] = useState(false)

    const changeAlgorithmState = (tf) => setAlgorithmActive(tf)
    const changeNavState = (tf) => setNavActive(tf)

    return (
        <div className={"h-full bg-neutral-900 flex flex-col justify-between items-start py-6 transition-all duration-500 overflow-hidden " + 
        (navActive ? "w-64" : "w-24")} 
        onMouseEnter={() => changeNavState(true)} 
        onMouseLeave={()=>{
            changeNavState(false); changeAlgorithmState(false);
        }}>
            
            <div className="w-64 flex justify-center flex-col">
                <button className='pl-6'>
                    <img src={navActive? AHamIcon:IHamIcon} alt="Menu" 
                    className={"w-12 mb-5 transition-all duration-500 " + (navActive && "rotate-180")}/>
                </button>
                <button onClick={() => {setPlaying(!playing)}} className='flex items-center gap-6 pl-6'>
                    <img src={navActive? APlayIcon:IPlayIcon} alt="" className="w-12 my-5"/>
                    <h2 className='text-white text-2xl'>Play</h2>
                </button>
                {/* <div className='relative'>
                    <div className={'flex items-center gap-6 pl-6 ' + 
                    ((algorithmActive && navActive) && "bg-black")} 
                    onClick={() =>(setAlgorithmActive(current => !current))}>
                        <img src={navActive? ASliderIcon:ISliderIcon} alt="" className="w-12 my-5"/>
                        <h2 className='text-white text-2xl'>Algorithms</h2>
                    </div>
                    <div className={"bg-black w-64 h-80 absolute " + (algorithmActive ? "block" : "hidden")}>
                        <DropdownMenu/>
                    </div>
                </div> */}


            </div>
            <div className="w-64 flex justify-center flex-col">
                <button className='flex items-center gap-6 pl-6'>
                    <img src={navActive? ASettingsIcon:ISettingsIcon} alt="" className="w-12 my-5"/>
                    <h2 className='text-white text-2xl'>Settings</h2>
                </button>
                <button className='pl-6'>
                    <img src={navActive? ADarkmodeIcon:IDarkmodeIcon} alt="" className="w-12 mt-5"/>
                </button>
            </div>
        </div>
    )
}

export default NavBar