import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WinnerFetch() {

        //fetch all winners
    const [ winners, setWinners ] =  useState([])
    const url = 'http://localhost:5000/api/winner';
    const getWinners = () => {
        axios.get(url)
        .then(res => {
            const players = res.data.data
            // const playerWin = players.filter(player => player.player.length === )
            // const playerWin = Math.max(players)
             console.log(res.data.data)
              setWinners(players)
            //  console.log(r)
        }).catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
       getWinners();
    //    getHighScores();
    }, [])
    

    return (
        <div>
               <h1>Winners</h1>
                    <div>
                        {
                        winners.map( win => 
                            <li key={ win._id }>
                                Player: <strong>{ win.player }</strong> &nbsp;
                                <span>
                                    Score: { win.points }
                                </span>
                                
                                
                            </li>
                            
                        )
                        }
                        
                    </div>
        </div>
    )
}

export default WinnerFetch
