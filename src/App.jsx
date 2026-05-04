import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner'
import AvailablePlayers from './component/Available-Players/AvailablePlayers';
import SelectedPlayers from './component/Selected-Players/SelectedPlayers';
import { Suspense, useState } from 'react';

const fetchPlayers = async() =>{
  const res = await fetch('/players.json')
  return  res.json();
}

const playersPromise = fetchPlayers()


function App() {
 
const [toggle , setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(3000000);

const [purchasedPlayer, setPurchasedPlayer] = useState([])
// console.log(purchasedPlayer)

const removePlayer = (p) => {
  const filteredData = purchasedPlayer.filter(fPly => fPly.id !== p.id)
  setPurchasedPlayer(filteredData)
  setAvailableBalance(availableBalance + parseInt(p.price.split("USD").join("").split(",").join(""))  )
}

  return (
    <>
<Navbar availableBalance={availableBalance}></Navbar>

<div className='max-w-1500 mx-auto justify-between items-center font-bold flex pl-8 pr-8  '>
      <h1>{ toggle === true ? "Available Players":`Selected Players(${purchasedPlayer.length}/6)`}</h1>

     <div>
      <button onClick={() => setToggle(true)}  className={`px-3 py-2 rounded-l-2xl border  border-gray-400 border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}`} >Available</button>
      <button onClick={() => setToggle(false)} className={`px-3 py-2 rounded-r-2xl border  border-gray-400 border-l-0 ${ toggle === false ? "bg-[#E7FE29]" : ""}`} >Selected <span>({purchasedPlayer.length}/6)</span>  </button>
     </div>
</div>

<Banner></Banner>

{
  toggle === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl "></span>}  >
      <AvailablePlayers purchasedPlayer={purchasedPlayer}  setPurchasedPlayer={setPurchasedPlayer}  availableBalance={availableBalance}  setAvailableBalance={setAvailableBalance}  playersPromise={playersPromise}  ></AvailablePlayers>
</Suspense> : <SelectedPlayers removePlayer={removePlayer}  purchasedPlayer={purchasedPlayer}  ></SelectedPlayers>
}

    
    </>
  )
}

export default App
