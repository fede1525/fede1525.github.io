import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Landing } from './pages/landing'
import { Trivia } from './pages/trivia'
import injectContext from './store/appContext';

const App = () => {
  const basename = process.env.BASENAME;

  return (
      <div>
          <BrowserRouter basename={basename}>
              <Navbar />
              <Routes >
                  <Route element={<Landing />} path="/"/>
                  <Route element={<Trivia />} path="/trivia"/>    
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default injectContext(App);
