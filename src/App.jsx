import { React, useState } from 'react'
import './App.css'
import { Navigate, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./store";
import AuthProvider, { useAuth } from './firebase/Auth';
import Layout from "./components/Layout";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function ProtectedRoute({ children }){
  const { user } = useAuth();
  if(!user){
    return <Navigate to="/login"/>
  }
  return children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </>
  )
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </AuthProvider>
  )
}

export default App
