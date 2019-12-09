import React from 'react';
import PropTypes from 'prop-types';

const Goodslist = ({ goods }) => (
  <ul className="goodslist">
    {goods.map(good => <li key={good} className="good">{good}</li>)}
  </ul>
);

Goodslist.propTypes = { goods: PropTypes.arrayOf(PropTypes.string) };

Goodslist.defaultProps = { goods: [] };

export default Goodslist;
