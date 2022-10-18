import ProvinceList from "../../components/ProvinceList/ProvinceList";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homeMain">
      <h1>Home page</h1>
      <div className="provinceList">
        <ProvinceList />
      </div>
    </div>
  );
}

export default HomePage;
