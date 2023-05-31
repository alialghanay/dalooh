
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import ContactUs from './contactus-page/ContactUs';
import Home from './home-page/Home';
import './styles/App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ScrollToHashElement from "./ScrollToHashElement";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <div>
      <Header />
      <ScrollToHashElement />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
