import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// store
import { store } from 'src/store';

// component
import App from 'src/App.tsx';

// styles
import 'src/styles/index.css';
import 'src/styles/tailwind-post.css';
import 'src/styles/tailwind-pre.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
