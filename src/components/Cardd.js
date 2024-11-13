import { useState } from "react";
// import App from "../App";
function Card({id,image,info="",price,name,removetour}){
    const [readmore,setreadmore]=useState('true')
    const description=readmore?`${info.substring(0,200)}`:info
    
    function readmoreHandler(){
        setreadmore(!readmore)
    }
   return (
    <div className="card">
        <div className="tour-info">
       <img src={image} alt="img" className="image"></img>
       <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
       </div>
       <div className="desc">{description}<span className="readmore" onClick={readmoreHandler}>
       {readmore ?' Read more': ' Show less'  }
        </span></div>
        </div>
        <button className="btn-remove" onClick={()=>removetour(id)}>Not interested</button>
    </div>
   )
}
export default Card;