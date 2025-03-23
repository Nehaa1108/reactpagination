
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import Pagination from "./Components/Pagination";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
function App() {
  return (
  <Router>
    <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/Pagination' element={
      // <PrivateRoute>
      <Pagination />
      // </PrivateRoute>
      } 
      />
  
   </Routes>
   </Router>
  );
}

export default App;
