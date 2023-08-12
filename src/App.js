import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Departments from './pages/Departments';
import Products from './pages/Products';
import ProductDescription from './pages/Description';
import Management from './pages/Management';

import Header from './components/Header';
function App() {
  return (
    <div className="App flex flex-row max-h-screen">

      <header>
        <Header></Header>
        <ToastContainer
          position="top-center"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </header>
      <main className=' flex-grow'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/departments' element={<Departments></Departments>} />
          <Route path='/products' element={<Products></Products>} />
          <Route path='/product/:prodId' element={<ProductDescription></ProductDescription>} />
          <Route path='/management' element={<Management></Management>} />
          <Route path='/product/:prodId' element={<ProductDescription></ProductDescription>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
