import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import PaginaInicial from './screens/PaginaInicial';

const router = createBrowserRouter(
  [
    {
      path: "*",
      Component: RootNavigation
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

function RootNavigation() {
  return (
    <Router>
      <Route path="/" element={<PaginaInicial />} />
    </Router>
  )
}

export default App;
