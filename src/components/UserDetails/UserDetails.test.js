import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserDetails from './UserDetails';

it('renders App Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <UserDetails />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });