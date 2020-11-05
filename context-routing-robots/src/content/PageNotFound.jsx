import React from "react";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Box>
      404 <br /> Page Not Found!
    </Box>
  );
};

const Box = styled.div`
  font-size: 10rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default PageNotFound;
