import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Click aqui!',
    content: 'Si funciono! ;)',
  },
  {
    title: 'No ingreses aqui',
    content: 'Dije que no! :p',
  },
  {
    title: 'Prueba',
    content: 'Probando probando... :)',
  },
];

const options = [
  {
    label: 'This is Red',
    value: 'red',
  },
  {
    label: 'This is Green',
    value: 'green',
  },
  {
    label: 'This is Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};