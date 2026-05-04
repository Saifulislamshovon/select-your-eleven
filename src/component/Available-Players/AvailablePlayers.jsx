import React from 'react';
import { use } from 'react';
import Playercard from '../Playercard/Playercard';


const AvailablePlayers = ({playersPromise,availableBalance, setAvailableBalance, purchasedPlayer ,setPurchasedPlayer}) => {

    const playerData = use(playersPromise);
    // console.log(data);

    return (
<div className='grid grid-cols-1  md:grid grid-cols-3 gap-3 ' >
{
    playerData.map(player =>  <Playercard purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}  availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  player={player} key={player.id} ></Playercard>

)
}

   

        </div>
    );
};

export default AvailablePlayers;