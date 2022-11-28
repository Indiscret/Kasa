import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './styles/Index.css';
import Header from './components/Header/Header';
import Router from './components/Router';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <Router/>
    <Footer/>
  </BrowserRouter>
);

