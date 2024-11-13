import Card from "./Cardd";
// import App from "../App";
function Tours({tours=[],removetour}){
    return(
        <div className="container">
    <div><h2 className="title">Plan With Love</h2></div>
    <div className="cards">
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removetour={removetour} />
          ))
        }
    </div>
    </div>
    )
}
export default Tours;