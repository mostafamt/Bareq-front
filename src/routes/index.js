import FreeLessons from "../pages/FreeLessons/FreeLessons";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import QuickTour from "../pages/QuickTour/QuickTour";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/quickTour",
    Component: QuickTour,
  },
  {
    path: "/freeLessons",
    Component: FreeLessons,
  },
];

export default routes;
