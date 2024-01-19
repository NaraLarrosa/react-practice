import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'Click aqui!! :)',
    content: 'Si funciono ;)',
  },
  {
    title: 'No entres aca',
    content: 'Dije que no! u.u',
  },
  {
    title: 'Prueba prueba',
    content: 'Prueba',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
