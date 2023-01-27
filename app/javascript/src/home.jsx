// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss';

const Home = () => (
  <Layout>
    <h1>Home page updates automatically with Web Dev Server & Rails Server. Trying out changes to the webpack server. Let's see if it works. Attempting changes yet again. I still cant get anything to work, I don't know what the issue is.</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})