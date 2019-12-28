import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditEvent from './EditEvent';

it('renders App Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <EditEvent />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });