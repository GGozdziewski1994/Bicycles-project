import Layout from "./components/pages/Layout";
import AuthPage from "./components/pages/AuthPage";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import BikesPage from "./components/pages/BikesPage";

const App = () => {
  return (
      <Layout>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/bikes' element={<BikesPage />} />
          </Routes>
      </Layout>
  );
}

export default App;
