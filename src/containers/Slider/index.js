import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((a, b) =>{
    const c = new Date(a.date);
    const d =  new Date(b.date)
    return d-c 
    // En utilisant .sort de cette façon, nous pouvons trier les events par ordre décroissant
    // c - d pour trier par ordre croissant
  }
  );
  const nextCard = () => {
    setTimeout(
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0), 
      // Le fait de prendre la taille du tableau et non de l'index du tableau a rajouté le slider blanc
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${event.id}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx} // Check la radio qui à le même index que l'index de mon state
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
