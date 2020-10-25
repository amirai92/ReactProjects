import React from "react";
import styled from "styled-components";

export default ({ image_url }) => {
  return (
    <Box>
      <Image src={image_url} />
    </Box>
  );
};
const Box = styled.div``;

const Image = styled.img`
  height: 10rem;
  width: 10rem;
  /*border: #004141 solid 4px;*/
  border-radius: 50%;
  /*padding: 10px;*/
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;
