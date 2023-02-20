import {useState, React} from 'react'

function DropdownMenu() {
    const [dropdownActive, setdropdownActive] = useState(false)
    const changeDropdown = () => setdropdownActive(current => !current)

    return(
    <div className='p-5'>
        <div className="relative bg-neutral-800 p-5">
            <button className="flex items-center text-xl leading-5 text-white hover:text-gray-300 transition ease-in-out duration-150" onClick={changeDropdown}>
                Dropdown
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
        </div>
        <div className={"absolute right-0 shadow-lg left-5 w-56 " + (dropdownActive ? "block" : "hidden")} >
            <div className=" bg-neutral-800 shadow-xs">
                <div className="py-1">
                    <button className='px-4 py-2 w-full text-white hover:bg-neutral-900 text-left transition ease-in-out duration-300'>Option 1</button>
                    <button className='px-4 py-2 w-full text-white hover:bg-neutral-900 text-left transition ease-in-out duration-300'>Option 2</button>
                    <button className='px-4 py-2 w-full text-white hover:bg-neutral-900 text-left transition ease-in-out duration-300'>Option 3</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DropdownMenu