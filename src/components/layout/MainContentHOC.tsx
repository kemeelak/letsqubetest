import React from "react";
import styled from "styled-components";
import SlideShow from "../slideshow";

const StyledBody = styled.div`
  background-color: #eeeff1 !important;
  @media all and (min-width: 1199px) {
    width: 100vw;
    height: calc(100vh - 60px);
  }
  @media all and (max-width: 1198px) {
    .mobile-hide {
      display: none;
    }
    width: 100vw;
    height: calc(100vh - 60px);
    overflow: auto;
    padding-bottom: 20px;
    top: 60px;
    position: absolute;
  }
`;

const StyledWrapper = styled.div`
  @media all and (min-width: 1199px) {
    top: 50%;
    left: 150px;
    transform: translate(-10%, -50%);
    position: relative;
    width: 315px;
    height: 515px;
    display: flex;
    .qube-container {
      height: 100%;
      display: inline-flex;
    }
    .qube-container {
      width: 315px;
    }
    .ad-container {
      display: none;
    }
  }
  @media all and (max-width: 1198px) {
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 315px;
    .qube-container {
      width: 100%;
    }
  }
`;

const MainContentHOC = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledBody>
      <StyledWrapper style={{ zIndex: 1 }}>
        <div className="qube-container">{children}</div>
      </StyledWrapper>
      <div className="mobile-hide">
        <SlideShow />
      </div>
    </StyledBody>
  );
};

export default MainContentHOC;
