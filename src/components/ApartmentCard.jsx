import { Link } from "react-router-dom";

function ApartmentCard(props) {
  return (
    <div className="apartment-card">
      <h3>{props.apartment.name}</h3>
      <img src={props.apartment.picture_url.url} alt="" />
      <p>{props.apartment.host_name}</p>
      <p>{props.apartment.price}€/day</p>
      <Link to={`/details/${props.apartment.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default ApartmentCard;
