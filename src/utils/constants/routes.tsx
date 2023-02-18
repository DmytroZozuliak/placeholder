import Home from '../../pages/home_page/HomePage';
import { Navigate } from 'react-router-dom';
import { IRouterRoutes } from '../../interfaces/baseInterfaces';
import { SignInPage } from '../../pages/authentication_page';
import Boards from '../../pages/boards_page';

export enum RoutePath {
  Home = '/',
  News = '/news',
  SignIn = '/sign-in',
  Profile = '/profile',
  NotFound = '*',
}

const routes: IRouterRoutes = {
  public: [
    {
      path: RoutePath.Home,
      element: <Home />,
    },
    {
      path: RoutePath.News,
      element: <Boards />,
    },
    {
      path: RoutePath.SignIn,
      element: <SignInPage />,
    },
    {
      path: RoutePath.NotFound,
      element: <Navigate to={RoutePath.Home} replace />,
    },
  ],
  private: [
    {
      path: RoutePath.Profile,
      element: <Boards />,
    },
  ],
};

export default routes;
