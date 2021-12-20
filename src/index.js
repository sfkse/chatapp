import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import { ChatProvider } from './components/ChatContext';

ReactDOM.render(
  <ChatProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChatProvider>
  ,
  document.getElementById('root')
);
