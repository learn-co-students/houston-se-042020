import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingList(props){
    console.log(props.paintingObjs)
    return(<div>
       { localStorage.token
       ? props.paintingObjs.map(painting => {
            return <PaintingCard painting={painting} key={painting.id}/>
        })
        : <h4> Please Log In to see the paintings</h4>
    }    
    </div>)
}

export default PaintingList
