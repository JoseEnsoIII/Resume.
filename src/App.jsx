import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212016;
  height: 120vh;
`;

const GoBackLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
  text-decoration: none;
  color: #fff;
  background-color: #212016;
  padding: 5px 10px;

  &:hover {
    background-color: #ffF;
    color: black;
    text-decoration: underline;
  }
`;

const ResumeImage = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &.full-size {
    transform: scale(1.5);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const FullImageDisplay = ({ imageUrl }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <ImageContainer>
        <GoBackLink href="https://personal-portfolio-tau-virid.vercel.app/">
        Go Back
      </GoBackLink>
      <ResumeImage
        src="/resume.png"
        alt="Resume"
        className={isImageOpen ? 'full-size' : ''}
        onClick={handleImageClick}
      />
      {isImageOpen && (
        <Overlay onClick={handleImageClick}>
          <FullImage src={imageUrl} alt="Resume" />
        </Overlay>
      )}
    </ImageContainer>
  );
};

export default FullImageDisplay;
