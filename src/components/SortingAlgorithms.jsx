import {useState, useEffect, React} from 'react'

import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

function SortingAlgorithms({barCount, playing}) {
	gsap.registerPlugin(Flip)
	const [sortingArr, setSortingArr] = useState([])
	const [state, setState] = useState(Flip.getState(".arr1"))

	useEffect(() => {
		let arr = []
		for(let i = 1; i <= barCount; i++){
			arr.push(10/barCount * i)
		}
		arr = shuffleArray(arr)
		setSortingArr(arr)
	}, [])

	function shuffleArray(arr) {
		let array = [...arr]
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array
	}


	useEffect(() => {
        Flip.from(state, {
            absolute: true,
            duration: 1,
        });
    }, [sortingArr, state])
	
	async function bubbleSort() {
		const arr = [...sortingArr]
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
			  if (arr[j] > arr[j + 1]) {
				// Swap arr[j] and arr[j + 1]
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				setSortingArr(arr)
				setState(Flip.getState(".arr1"))
				console.log(arr)
				await new Promise(resolve => setTimeout(resolve, 1000));
			  }
			}
		  }
		
		
		// // return newArr
		// let array = [...sortingArr]
		// const randomIndex1 = Math.floor(Math.random() * array.length);
        // let randomIndex2 = Math.floor(Math.random() * array.length);
        // while (randomIndex2 === randomIndex1) {
        //   randomIndex2 = Math.floor(Math.random() * array.length);
        // }
        // [array[randomIndex1], array[randomIndex2]] = [array[randomIndex2], array[randomIndex1]];
		// setState(Flip.getState(".arr1"))
		// setSortingArr(array)
	}


	return (
		<>
			<div className="w-full h-full box-content200 mt-5 relative">
				<button onClick={bubbleSort} className='bg-white'>HELLO</button>
				<ul className={"w-full h-full flex items-end " + (sortingArr.length > 35 ? "gap-1" : "gap-2")}>
				{sortingArr.map((length, index)=>(
					<li 
						key={index}
						style={{height:(length*10).toString().concat("%")}} 
						className="arr1 bg-gradient-to-b from-violet-700 to-neutral-800 flex-1 border-2 border-violet-700"
						data-flip-id={"h" + length}>
					</li>
				))}
				</ul>
			</div>
		</>
	)
}

export default SortingAlgorithms