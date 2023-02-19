import { Navigate } from 'react-router-dom';
import { IRouterRoutes } from '../../interfaces/baseInterfaces';
import Home from '../../pages/home_page/HomePage';
import SignInPage from '../../pages/authentication_page';
import News from '../../pages/news_page';
import Profile from '../../pages/profile_page';

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
      element: <News />,
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
      element: <Profile />,
    },
  ],
};

export default routes;
