import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Button } from "react-bootstrap";
import { fetchRandomPerson } from "../state/actions/person.actions";

const get_person_data = createSelector(
  state => state.person,
  person => person
);

const PersonView = () => {
  const { data, is_loading, error_msg } = useSelector(get_person_data);

  const dispatch = useDispatch();

  const get_random_Person = useCallback(() => dispatch(fetchRandomPerson()), [
    dispatch
  ]);

  if (is_loading) return <LoadTxt>Loading data...</LoadTxt>;
  if (error_msg) return <h1>{error_msg}</h1>;

  if (Object.keys(data).length) {
    const {
      picture: { large: avatar },
      name: { first, last }
    } = data;
    return (
      <>
        <Box>
          <Img src={avatar} alt="avatar" />
          <Label>
            {first} {last}
          </Label>
        </Box>
        <Btn size="lg" onClick={get_random_Person}>
          Fetch Another Person
        </Btn>
      </>
    );
  }
  return (
    <Btn size="lg" onClick={get_random_Person}>
      Fetch Person
    </Btn>
  );
};

export default PersonView;

const Btn = styled(Button)`
  /* font-size: 2rem; */
  margin-top: 3rem;
`;
const LoadTxt = styled.h2`
  font-size: 2.2rem;
  margin-top: 17rem;
`;
const Label = styled.h2`
  font-size: 2.2rem;
  margin-top: 1rem;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-top: 1rem;
`;
const Box = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
