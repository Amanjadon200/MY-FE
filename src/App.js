import './App.css';
import {routes} from './Component/config/Routes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Component/shared/Navbar';
// const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
        <Router>
      <Navbar />
          <Routes>
            {routes.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}
          </Routes>
        </Router>
        {/* <Example /> */}
    </div>
  );
}

export default App;
