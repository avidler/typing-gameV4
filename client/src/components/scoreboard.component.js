import React, {useState, useEffect} from "react"

import axios from 'axios'


function Scoreboard() {

    const [scorelist, setScorelist] = useState([])

    useEffect(() => {
        axios.get('/scoreboard')
        .then(response => {
            console.log(response.data[response.data.length-1].score)
            setScorelist(response.data)
            
        })
        .catch((error) => {
            console.log(error)
        })

    },[])
    

 
    
    return(
        <div class="scoreboard">
            <h1>Scoreboard</h1>
            <table class="scores">
                <th>Rank</th><th>Username</th><th>Score</th><th>Date</th>
            {scorelist.map((player, index) => 
                <tr key={player._id}>
                    
                        <td id="scoreboard-pos">{index+1} </td>
                        <td id="scoreboard-name"> {player.username}</td>
                        <td id="scoreboard-score"> {player.score}</td>
                        <td id="scoreboard-date"> {player.createdAt.split("T")[0]}</td>
                    
                </tr>
            )}
            </table>
        </div>
    )
}

export default Scoreboard