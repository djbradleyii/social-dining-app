import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditUser from './EditUser';

it('renders App Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <EditUser />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });