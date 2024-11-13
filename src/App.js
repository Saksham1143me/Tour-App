// import './App.css';
import Tours from './components/Tour';
import { useState } from 'react';
import data from './components/data';
function App() {
  const [tours,settours]=useState(data)
  function removetour(id){
    const newtours=tours.filter((tour)=>tour.id!==id)
    settours(newtours)
  }
    if(tours.length===0){
      return (
        <div className='refresh'>
           <h2>NO TOURS LEFT</h2>
           <button className='btn-refresh' onClick={()=>{
            settours(data)
           }}>Refresh Content</button>
        </div>
      )
    }
  return (
    <div>
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  );
}

export default App;
