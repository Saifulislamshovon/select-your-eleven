import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
// console.log(player)

const handleRemovedPlayer = () =>{
    removePlayer(player)

}

    return (
         <div className='border border-gray-300 flex justify-between rounded-2xl mt-5 ml-2 mr-2 items-center'>
        <div className='flex justify-between items-center'>
            <img className='max-h-40 max-w-40 rounded-2xl p-3'  src={player.image} alt="Selected-Player-Image" />

            <div className='ml-2'>
                <h1 className='text-2xl font-bold '  >{player.name}</h1>
                <p className='text-2xl'>{player.role}</p>
            </div>


        </div>

        <div>
             <img onClick={handleRemovedPlayer}  className='pr-5'  src="https://i.ibb.co.com/DPRK5htL/Delete-btn.png" alt="Delete-Button" />
    </div>



</div>
    );
};

export default SelectedCard;