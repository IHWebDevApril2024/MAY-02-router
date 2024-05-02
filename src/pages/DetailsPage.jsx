import { useParams } from "react-router-dom";

function DetailsPage(props) {
  const id = useParams().apartmentId;

  console.log(
    "THIS IS THE APARTMENTS DATA IN THE DETAILS PAGE: ",
    props.apartmentsData
  );

  const apartmentsArray = props.apartmentsData.results;
  // destructuring also works
  // const {results}= props.apartmentsData;

  const apartmentsFiltered = apartmentsArray.filter((apartment) => {
    return apartment.id === id;
  });

  console.log(apartmentsFiltered);
  return (
    <>
      <h4>Details</h4>
      <h5>{apartmentsFiltered[0].name}</h5>
      <p>{apartmentsFiltered[0].description}</p>
    </>
  );
}

export default DetailsPage;
