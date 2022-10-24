import ProvinceList from "../../components/ProvinceList/ProvinceList";
import "./HomePage.css";

function HomePage({ allProvinces, isError, isLoading }) {
  return (
    <div className="homeMain">
      <h1>Home page</h1>
      <div className="provinceList">
        <ProvinceList
          allProvinces={allProvinces}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default HomePage;
