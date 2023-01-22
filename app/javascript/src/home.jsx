// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss';

const Home = () => (
  <Layout>
    <h1>Home page updates automatically with Web Dev Server & Rails Server. Testies 123, Testies123</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})