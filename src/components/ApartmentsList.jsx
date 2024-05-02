import ApartmentCard from "./ApartmentCard";

function ApartmentsList(props) {
  console.log(props.apartmentsData);
  return (
    <section className="apartments-list">
      {props.apartmentsData.results.map((apartment) => {
        return <ApartmentCard key={apartment.id} apartment={apartment} />;
      })}
    </section>
  );
}

export default ApartmentsList;
