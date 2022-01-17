import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import BikesPage from "./pages/BikesPage";

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
