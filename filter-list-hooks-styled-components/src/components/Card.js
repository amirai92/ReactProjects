import React from "react";
import ImageLoader from "./ImageLoader";
import styled from "styled-components";

export default ({ first_name, country, description, avatar }) => {
  return (
    <Card>
      <ImageLoader image_url={avatar} desc={description} container={Card} />
      <TextBox>
        <Title>
          {first_name} from {country}
        </Title>
        <Msg>{description}</Msg>
      </TextBox>
    </Card>
  );
};

const Card = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  padding-left: 2.8rem;
`;

const Title = styled.h1`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2.8rem;
`;

const Msg = styled.p`
  font-family: "Raleway";
  font-size: 1.4rem;
  max-width: 35rem;
`;

