import APP_PATHS from "./app-paths";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";

const ROUTES = [
  { path: APP_PATHS.HOME, element: <HomePage />, name: "Home" },
  { path: APP_PATHS.LoginPage, element: <LoginPage />, name: "LoginPage" },
  {
    path: APP_PATHS.NotFoundPage,
    element: <NotFoundPage />,
    name: "NotFoundPage",
  },
  {
    path: APP_PATHS.ProfilePage,
    element: <ProfilePage />,
    name: "ProfilePage",
  },
  { path: APP_PATHS.SignupPage, element: <SignupPage />, name: "SignupPage" },
];

export default ROUTES;
