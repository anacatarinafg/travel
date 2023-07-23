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
  hours: string[];
  plan: string;
}

const Single = (props: Props) => {
  const { id, img, place, title, about, color, day, tour, hours, plan } = props;

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
            <p>{hours[0]}</p>
            <p>{hours[1]}</p>
          </div>

          <p>{hours[2]}</p>
        </div>
        <div className="single__crono">
          <div>
            <p>Breakfast at hotel</p>
            <p>
              {plan}
            </p>
          </div>

          <p>Return to the hotel</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
