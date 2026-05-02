import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner'
import AvailablePlayers from './component/Available-Players/AvailablePlayers';
import SelectedPlayers from './component/Selected-Players/SelectedPlayers';
import { Suspense, useState } from 'react';

const fetchPlayers = async() =>{
  const res = await fetch('/players.json')
  return  res.json();
}

function App() {
 
const playersPromise = fetchPlayers()
  
    const [toggle , setToggle] = useState(true);

  return (
    <>
<Navbar></Navbar>

<div className='max-w-1200 mx-auto justify-between items-center font-bold flex pl-8 pr-8  '>
      <h1>Available Players</h1>

     <div>
      <button onClick={() => setToggle(true)}  className={`px-3 py-2 rounded-l-2xl border  border-gray-400 border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}`} >Available</button>
      <button onClick={() => setToggle(false)} className={`px-3 py-2 rounded-r-2xl border  border-gray-400 border-l-0 ${ toggle === false ? "bg-[#E7FE29]" : ""}`} >Selected <span>(0)</span>  </button>
     </div>
</div>

<Banner></Banner>

{
  toggle === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}  >
      <AvailablePlayers playersPromise={playersPromise}  ></AvailablePlayers>
</Suspense> : <SelectedPlayers></SelectedPlayers>
}

    
    </>
  )
}

export default App
