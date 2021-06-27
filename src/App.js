import React from 'react';
import MenuView from './view/MenuView';
import './css/App.css';
import CreateProviderQuestions from './context/CreateProviderQuestions';

export default function App() {

  return (
    <CreateProviderQuestions>
      <MenuView/>
    </CreateProviderQuestions>
  )
}