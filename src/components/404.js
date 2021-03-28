import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const _404 = () => {
  return (
    <React.Fragment>
      <Header />
      Página não encontrada. Ir para <Link to="/dashboard">Página Inicial.</Link>
    </React.Fragment>
  );
};

export default _404;
