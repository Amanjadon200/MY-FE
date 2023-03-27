import './App.css';
import { routes } from './Component/config/Routes';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Component/shared/Navbar';
// const queryClient = new QueryClient()
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            {routes.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}
          </Routes>
        </Router>
    </div >
    </Provider>
    </QueryClientProvider>
  );
}

export default App;
