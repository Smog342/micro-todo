import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import OnLoadingComponent from './components/OnLoadingComponent';
import Task from './components/TaskComponent';
import LayoutComponent from './components/LayoutComponent';

function App() {

  const [appLoading, setAppLoading] = useState(true);

  const Loader = OnLoadingComponent(LayoutComponent);

  setTimeout(() => {setAppLoading(false)}, 5000);

  return (
    <Loader isAppLoading={appLoading} props={''}></Loader>
  );
}

export default App;
