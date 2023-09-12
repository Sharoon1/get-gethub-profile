import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './pages/Routes';
//Libraries
//bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle'
//react toastify
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Routes/>
    <ToastContainer />
    </>
  );
}

export default App;
