import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Landing } from './pages/landing';
import { Projects } from './pages/projects';
import injectContext from './store/appContext';

const App = () => {
  const basename = process.env.BASENAME;

  return (
      <div>
          <BrowserRouter basename={basename}>
              <Navbar />
              <Routes >
                  <Route element={<Landing />} path="/"/>
                  <Route element={<Projects />} path="/projects" />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default injectContext(App);
