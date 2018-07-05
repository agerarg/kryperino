import React from 'react';
import GetCard from '../../../GameCore/Cards/Cards';
const card = (props)=>{
 
        let id = parseInt(props.id);

        let card = GetCard(id);

        var style = {
            backgroundImage: "url("+card.image+")"    
              };
      

        return (<div className="cardImg"><div class="Card" style={style} ></div></div>)

}
export default card;