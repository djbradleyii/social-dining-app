import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddEvent from './AddEvent';

it('renders Add Event Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddEvent />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
