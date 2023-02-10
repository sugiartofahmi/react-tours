import GetTours from "../../modules/Home/GetTours";
import MainLayout from "../../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <h1 className="font-bold text-4xl underline decoration-blue-400 underline-offset-8">
        Our Tours
      </h1>
      <GetTours />
    </MainLayout>
  );
};

export default Home;
