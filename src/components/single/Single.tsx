import "./single.scss";

interface Props {
  id: number;
  img: string[];
  place: string;
  title: string;
  about: string;
  color: string;
  addInfo: string;
  day: string[];
  tour: string[];
}

const Single = (props: Props) => {
  const { id, img, place, title, about, color, day, tour } = props;

  return (
    <div className="single">
      <h2 className="single__headline">Excursion in {place}</h2>
      <div className="single__images">
        <img src={img[1]} alt={place} />
        <img src={img[2]} alt={place} />
        <img src={img[3]} alt={place} />
      </div>
      <div className="single__tours">
        <div className="single__day">
          <button>
            {day[0]} /{tour[0]}
          </button>
          <button>
            {day[1]} /{tour[1]}
          </button>
          <button>
            {day[2]} /{tour[2]}
          </button>
          <button>
            {day[3]} /{tour[3]}
          </button>
          <button>
            {day[4]} /{tour[4]}
          </button>
          <button>
            {day[5]} /{tour[5]}
          </button>
          <button>
            {day[6]} /{tour[6]}
          </button>
        </div>
        <div className="single__hours">
          <div>
            <p>08:00</p>
            <p>09:30</p>
          </div>

          <p>18:30</p>
        </div>
        <div className="single__crono">
          <div>
            <p>Breakfast at hotel</p>
            <p>
              Departure for a sea excursion to the White Rocks.
              <br />
              During the excursion, the tourist makes a trip along the ... coast
              of Iturup Island. On the route, you will visit Olya Bay, Black
              stones, White Rocks, waterfalls in Parasuaya, Bay, inspection of
              the sea lion and seal rockeries, perhaps their abscence at the
              rockery, Tomaya Bay, Lake Soposchoyo. Lunch on the route - tea,
              coffee, seafood, sandwiches, fruits, sweets. Visit to the
              water-health complex of thermal waters Hot Waters.
            </p>
          </div>

          <p>Return to the hotel</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
