import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const options = [];

  for (let i = 1; i < 11; i = +1) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  const { filterByLength, value } = props;

  return (
    <select className="button" onChange={filterByLength} value={value}>
      {options}
    </select>
  );
};

Select.propTypes = {
  filterByLength: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Select;
