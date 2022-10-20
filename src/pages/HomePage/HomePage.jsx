import ProvinceList from "../../components/ProvinceList/ProvinceList";
import "./HomePage.css";

function HomePage({ data, isError, isLoading }) {
  return (
    <div className="homeMain">
      <h1>Home page</h1>
      <div className="provinceList">
        <ProvinceList data={data} isError={isError} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default HomePage;
