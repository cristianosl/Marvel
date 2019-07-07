import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

it('Renderizar corretamente a página inicial', () => {
  shallow(<App />);
});
