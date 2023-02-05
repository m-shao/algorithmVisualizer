import React from 'react'

function SortingAlgorithms({barCount}) {

    const arrLength = barCount
    const sortingArr = []
    for(let i = 1; i <= arrLength; i++){
        sortingArr.push(10/arrLength * i)
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    } 

  shuffleArray(sortingArr)

  return (
    <>
        <div className="w-full h-full box-content200 mt-5 ">
            <ul className={"w-full h-full flex items-end " + (sortingArr.length > 35 ? "gap-1" : "gap-2")}>
              {sortingArr.map((length)=>
              <li style={{height:(length*10).toString().concat("%")}} 
                className="bg-gradient-to-b from-violet-700 to-neutral-800 flex-1 border-2 border-violet-700">
              </li>)}
            </ul>
        </div>
    </>
  )
}

export default SortingAlgorithms