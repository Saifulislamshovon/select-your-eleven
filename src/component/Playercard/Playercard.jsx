import React, { useState } from 'react';
import playerIcon from './../../assets/playerIcon.png'
import flag from './../../assets/flag.png'



const Playercard = ({player,availableBalance, setAvailableBalance, purchasedPlayer, setPurchasedPlayer}) => {

const [isSelected , setIsSelected] = useState(false);
const playerPrice = player.price.split("USD").join("").split(",").join("");

const handleSelected = (playerData) =>{
  
  if(availableBalance < playerPrice){
    alert("Not Enough balance to Pick a Player");
    return
  }
            setIsSelected(true)
            setAvailableBalance(availableBalance-playerPrice)
            
            setPurchasedPlayer(purchasedPlayer => [...purchasedPlayer, playerData ])
            
        }

    
    return (
    <div>

      <div className="card p-3 m-2 bg-base-100 max-w-1200 mx-auto ">
  <figure>
    <img
      src={player.image}
      alt="playerImage"
      className='h-100 w-100 object-cover' />
  </figure>
  <div className="">
    <div className='flex mt-3 '>
            <img className='h-6 w-6 ml-2 p-10px   '  src={playerIcon}  alt="playerIcon" />   <h2 className="card-title pl-1  ">{player.name}</h2>

    </div>

        <div className='flex justify-between border-b-1 border-gray-300 pb-2 '>
            <div className='flex gap-2  items-center'>
                <img className='h-5 w-5 ml-2 mt-2 '   src={flag} alt="flag" />
                <span>{player.country}</span>
            </div>

            <div className='btn  '>{player.role}</div>
        </div>
    
    <div className='pl-2 font-bold mt-2  '>Player-Rating:  {player.rating} </div>

    <div className='flex justify-between  pl-2'><p className='font-bold'> {player.bowlingStyle}</p> 
        <p>{player.battingStyle} </p>
    
    </div>

    <div className="card-actions flex justify-between ">
        <p className='pl-2 font-bold  '>Price: ${player.price} </p>
      <button disabled={isSelected}  
            onClick={()=> {handleSelected(player)}}   
            
        className="btn">{isSelected === true? "Selected":"Choose Player"}</button>
    </div>
  </div>
</div>   


    </div>
    );
};

export default Playercard;