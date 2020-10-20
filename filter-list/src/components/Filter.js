import React from "react";
import PropTypes from "prop-types";

let num = -1;
const Filter = ({ list_data, filter_data }) => {
  const filter_the_list = (event) => {
    const toFilterTxt = event.target.value;
    console.log(toFilterTxt);
    const filtered_list = list_data.filter((item) =>
      item.first_name.toLowerCase().includes(toFilterTxt.toLowerCase())
    );
    console.log(filtered_list);
    num = filtered_list.length;
    filter_data({ filtered_list });
  };

  return (
    <div className="header">
      <h4 className="filter_title">
        {num !== -1 ? num : list_data.length}
        items filtered
      </h4>

      <input className="filter" onChange={filter_the_list} />
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
