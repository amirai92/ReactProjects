// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

let num = -1;

const Filter = ({ list_data, on_filter }) => {
  const update_list = (event) => {
    const txt = event.target.value;
    const filtered_list = list_data.filter((item) =>
      item.first_name.toLowerCase().includes(txt.toLowerCase())
    );
    num = filtered_list.length;
    on_filter(filtered_list);
  };

  return (
    <div className="header">
      <h4 className="filter_title">
        {num !== -1 ? num : list_data.length} items filtered
      </h4>
      <input className="filter" onChange={update_list} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  on_filter: PropTypes.func.isRequired,
  list_data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired,
  num: PropTypes.number.isRequired
};
