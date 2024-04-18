import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [places, setDestinations] = useState(travelPlansData);

  return (
    <div>
      {places.map((place) => {
        return (
          <div className="travelCard" key={place.id}>
            <div className="grid-container">
              <img src={place.image} />
            </div>
            <div className="travelInfo">
              <h4>
                {place.destination} ({place.days} Days)
              </h4>
              <p>{place.description}</p>
              <p>
                <span className="bold">Price:</span> {place.totalCost}€
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
