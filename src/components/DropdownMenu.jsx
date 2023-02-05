import {useState, React} from 'react'

function DropdownMenu() {
    const [dropdownActive, setdropdownActive] = useState(false)
    const changeDropdown = () => setdropdownActive(current => !current)

    return(
    <div className='p-5'>
        <div class="relative bg-neutral-800 p-5">
            <button class="flex items-center text-xl leading-5 text-white hover:text-gray-300 transition ease-in-out duration-150" onClick={changeDropdown}>
                Dropdown
                <svg class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
        </div>
        <div class={"absolute right-0 shadow-lg left-5 w-56 " + (dropdownActive ? "block" : "hidden")} >
            <div class=" bg-neutral-800 shadow-xs">
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-neutral-900 focus:outline-none transition ease-in-out duration-150" >Option 1</a>
                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-neutral-900 focus:outline-none transition ease-in-out duration-150">Option 2</a>
                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-neutral-900 focus:outline-none transition ease-in-out duration-150">Option 3</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DropdownMenu