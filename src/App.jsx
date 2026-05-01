import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner'
import AvailablePlayers from './component/Available-Players/AvailablePlayers';
import SelectedPlayers from './component/Selected-Players/SelectedPlayers';
import { Suspense } from 'react';

const fetchPlayers = async() =>{
  const res = await fetch('/players.json')
  return  res.json();
}

function App() {
 
const playersPromise = fetchPlayers()
 

  return (
    <>
<Navbar></Navbar>
<Banner></Banner>

<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}  >
      <AvailablePlayers playersPromise={playersPromise}  ></AvailablePlayers>
</Suspense>

<SelectedPlayers></SelectedPlayers>
    
    </>
  )
}

export default App
