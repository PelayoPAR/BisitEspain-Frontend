import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import ProvinceDetailsPage from "./pages/ProvinceDetailsPage/ProvinceDetailsPage";
import TestMapPage from "./pages/TestMapPage/TestMapPage";

import axios from "axios";
import { useState, useEffect } from "react";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(process.env.REACT_APP_SERVER_URL);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_SERVER_URL)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage data={data} isError={isError} isLoading={isLoading} />
          }
          name="Home"
        />

        <Route
          path="/profile/:userId"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
          name="ProfilePage"
        />

        <Route
          path="/profile"
          element={
            <IsAnon>
              <ProfilePage />
            </IsAnon>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
          name="SignupPage"
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
          name="LoginPage"
        />

        <Route
          path="/:provinceId"
          element={
            <ProvinceDetailsPage
              data={data}
              isError={isError}
              isLoading={isLoading}
            />
          }
          name="ProvinceDetailsPage"
        />

        <Route
          path="/lostandfound"
          element={<NotFoundPage />}
          name="NotFoundPage"
        />
        <Route path="/testmap" element={<TestMapPage />} name="TestMapPage" />
      </Routes>
    </div>
  );
}

export default App;
