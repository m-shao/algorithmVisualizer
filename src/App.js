import NavBar from "./components/NavBar.jsx"
import SortingAlgorithms from "./components/SortingAlgorithms.jsx"


function App() {

  return (
    <div className="App">
      <div className="w-screen h-screen bg-neutral-800 flex">
        <NavBar />
        <div className=" flex-grow max-h-full m-7 bg-neutral-900 box-border rounded-2xl p-7 flex flex-col">
          <div>
            <h1 className="text-4xl text-white">Bubble Sort</h1>
            <h2 className="text-xl text-white">O(n²)</h2>
          </div>
          <SortingAlgorithms barCount="50" />
        </div>
      </div>
    </div>
  );
}

export default App;
