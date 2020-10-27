import React from "react";
import styled from "styled-components";

const Profile = ({ item }) => {
  item.avatar = item.avatar.replace("100x100", "300x300");
  return (
    <Card>
      <Image src={item.avatar} />
      <Title>
        {item.first_name} {item.country}
      </Title>
      <Line />
      <Details>ID: {item.id}</Details>
      <Details>Country: {item.country}</Details>
      <Details>Email: {item.email}</Details>
      <Msg>{item.description}</Msg>
    </Card>
  );
};

export default Profile;

const Image = styled.img`
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 30rem;
  }

  background: peachpuff;
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  display: flex;
  box-sizing: border-box;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;

const Card = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  align-items: center;
`;

const Title = styled.p`
  font-size: 3.8rem;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
  color: slategray;
  text-align: center;
  margin-top: 2rem;
`;
const Msg = styled.p`
  font-family: "Raleway";
  font-size: 1.8rem;
  max-width: 40rem;
  margin-top: 2rem;
  transition: height 350ms;
`;

const Details = styled.p`
  font-size: 2.2rem;
  font-weight: inherit;
  font-family: "Yanone Kaffeesatz", sans-serif;
  color: slategray;
  margin-top: 0;
  margin: 20;
  box-sizing: border-box;
  color: darkslateblue;
`;

const Line = styled.hr`
  margin-top: 2rem;
`;
