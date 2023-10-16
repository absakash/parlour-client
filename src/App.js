import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=" max-w-6xl mx-auto">
   
 <RouterProvider router={router}>

      </RouterProvider> 
      <Toaster></Toaster>
    </div>
  );
}

export default App;
