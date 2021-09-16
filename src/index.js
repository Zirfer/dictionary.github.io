import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container.js'
import Header from './components/Header.js'
import Base from './components/Base.js'
import Footer from './components/Footer.js'
// Importar CSS
import './style.css';
//
import { LangProvider } from './context/langContext';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
        <Container>
          <Header />
          <Base />
          <Footer />
        </Container>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
