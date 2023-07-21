import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import { destinations } from "../../data";

const Destination = () => {
  const { id } = useParams<{ id: string }>(); // Explicitly specify the type of id as string

  // Check if the id is present and valid before finding the destination
  const destination = id
    ? destinations.find((dest) => dest.id === parseInt(id))
    : undefined;

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination">
      <Single {...destination} />
    </div>
  );
};

export default Destination;
