import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Root from './pages/Root';
import Footer from './components/layouts/Footer/';
import Header from './components/layouts/Header/';
import Main from './components/layouts/Main/';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import { userActions } from './store/reducers/userSlice';
import { darkTheme, lightTheme } from './theme/theme';
import { readUser } from './utils/functions';

function App() {
  const theme = useTypedSelector((state) => state.settings.theme);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const username = readUser();
    username && dispatch(userActions.logIn({ name: username }));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      <Main>
        <Root />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
