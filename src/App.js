import RoutesApp from './router'
import './app.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={3000}/>
      <RoutesApp></RoutesApp>
    </div>
  );
}

export default App;