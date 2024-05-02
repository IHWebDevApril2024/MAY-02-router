import ApartmentsList from "../components/ApartmentsList";
import { useSearchParams } from "react-router-dom";

function HomePage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");
  function inputChange(event) {
    setSearchParams({price: event.target.valueAsNumber})
    console.log(searchParams.get("price"));
  }

  return (
    <>
      <h1>The search param is {city}</h1>
      <p>Search price:</p>
      <input onChange={(event) => inputChange(event)} type="number" />
      <ApartmentsList apartmentsData={props.apartmentsData} />
    </>
  );
}

export default HomePage;
