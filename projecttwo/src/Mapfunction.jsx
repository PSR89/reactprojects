let data = [
  { id: 1, name: "Rakesh", age: 17, place: "KL" },
  { id: 2, name: "Sree", age: 17, place: "KL" },
  { id: 3, name: "Anand", age: 17, place: "KL" },
  { id: 4, name: "Ram", age: 17, place: "KL" },
];
function Mapfunction() {
  return (
    <>
      <h1>Mapping </h1>

      {/* -------- mapping ------------ */}

      {data.map((itm) => {
        return (
          <>
            {/* Usage of key is a must while using Map funcion as it needs a unique ID to function  */}
            <div key={itm.id}>
              {itm.name}, {itm.age}, {itm.place}
            </div>
            <div></div>
            <div></div>
          </>
        );
      })}
    </>
  );
}
export default Mapfunction;
