import GridLayout from "../../layout/GridLayout";
import Card from "../../components/Card";
import datas from "../../helper/datas";
import { useState, useEffect } from "react";
const GetTours = () => {
  const [data, setData] = useState(datas);
  //   const getData = async () => {
  //     await fetch("https://course-api.com/react-tours-project")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, [data]);
  const deleteTour = (id) => {
    const newDatas = data.filter((x) => x.id !== id);
    console.log("click");
    setData(newDatas);
  };
  console.log(data);
  return (
    <GridLayout>
      {data.map((x) => (
        <Card
          key={x.id}
          name={x.name}
          info={x.info}
          price={x.price}
          image={x.image}
          onClick={() => deleteTour(x.id)}
        />
      ))}
    </GridLayout>
  );
};

export default GetTours;
