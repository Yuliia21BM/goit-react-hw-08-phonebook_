import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './components/redux/store';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
