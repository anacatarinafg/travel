import "./single.scss";

interface Props {
  id: number;
  img: string;
  place: string;
  title: string;
  about: string;
  color: string;
  info: string; // Replace 'string' with the actual type of the 'info' prop
}

const Single = (props: Props) => {
  const { id, img, place, title, about, color, info } = props;

  return (
    <div className="single">
      <img src={img} alt={place} />
      <h4>{title}</h4>
      <div className="single__details">
        <p>{about}</p>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Single;
