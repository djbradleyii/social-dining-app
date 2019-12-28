import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

it('renders Search Page Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });