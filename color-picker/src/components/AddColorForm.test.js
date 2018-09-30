import React from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './AddColorForm';
import ReactTestUtils from 'react-dom/test-utils'; // ES6

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddColorForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('calls a callback when form is submitted', (test) => {
//     const div = document.createElement('div');
//     const rendered = ReactDOM.render(<AddColorForm 
//         onNewColor={(title, color) => {
//             console.log(title)
//     }} />, document);
//     // const form = ReactTestUtils.(rendered, 'form');
//     ReactTestUtils.Simulate.submit()
//     ReactDOM.unmountComponentAtNode(div);
// })
