import React from 'react';
import Banner from '../Banner/Banner';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayer, removePlayer}) => {
    // console.log(purchasedPlayer)
    
    return (

        
<div className=''>

   {
    purchasedPlayer.map(player => <SelectedCard removePlayer={removePlayer}  player={player}></SelectedCard>)
   }

        </div>
    );
};

export default SelectedPlayers;