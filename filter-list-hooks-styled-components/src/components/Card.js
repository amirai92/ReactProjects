import React from "react";
import Thumb from "./Thumb";
import styled from "styled-components";

export default ({ first_name, country, description, avatar }) => {
  return (
    <Card>
      <Thumb image_url={avatar} />
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

// const Title = styled.p`
//   font-size: 3.8rem;
//   font-weight: 400;
//   font-family: "Yanone Kaffeesatz", sans-serif;
//   color: slategray;
// `;

//   :hover {
//     background: paleturquoise;
//     ${ImageLoader} {
//       box-shadow: 0 0.4rem 1.5rem DimGrey;
//       margin-bottom: 3rem;
//       padding-bottom: 1rem;
//     }
//   }
//   :active {
//     background: skyblue;
//     color: white;
//     ${Title} {
//       color: white;
//     }
//     ${ImageLoader} {
//       box-shadow: 0 0.4rem 1.5rem DimGrey;
//     }
//   }
// `;
