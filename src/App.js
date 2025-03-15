
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import ModalPagination from "./Components/ModalPagination";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
function App() {
  return (
  <Router>
    <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/ModalPagination' element={
      // <PrivateRoute>
      <ModalPagination />
      // </PrivateRoute>
      } 
      />
  
   </Routes>
   </Router>
  );
}

export default App;
