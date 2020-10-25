import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
    <Header>
      <Title>{num !== -1 ? num : list_data.length} items filtered</Title>
      <TextBox onChange={update_list} />
    </Header>
  );
};

export default Filter;

const TextBox = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;
  :focus {
    border: tomato 2px solid;
  }
`;

const Title = styled.h4`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
`;
const Header = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

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
