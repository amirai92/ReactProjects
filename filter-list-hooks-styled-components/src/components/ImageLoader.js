import React, { useState } from "react";
import styled from "styled-components";

const ImageLoader = ({ image_url, desc, container }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [failFetch, setFailFetch] = useState(0);
  const loadImage = () => {
    setIsLoading(false);
    setFailFetch(0);
  };
  const imageFailError = () => {
    if (failFetch < 2) {
      setFailFetch(failFetch + 1);
    }
  };
  return (
    <Box>
      <TempImage show={isLoading}>{"🤖"}</TempImage>
      <Image
        show={!isLoading}
        src={image_url}
        alt={desc}
        container={container}
        onError={imageFailError}
        onLoad={loadImage}
      />
    </Box>
  );
};

export default ImageLoader;
const TempImage = styled.span`
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-size: 4rem;
  position: absolute;
  height: 10rem;
  width: 10rem;
  border: lightgrey 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
`;

const Image = styled.img`
  opacity: ${({ show }) => (show ? 1 : 0)};
  height: 10rem;
  width: 10rem;
  /*border: #004141 solid 4px;*/
  border-radius: 50%;
  /*padding: 10px;*/
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
  ${({ container }) => `
      ${container}:hover & {
        box-shadow: 0 0.4rem 1.5rem DimGrey;
        margin-bottom: 3rem;
        padding-bottom: 1rem;
      }
  `}
`;
