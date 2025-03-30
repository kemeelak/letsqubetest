import React from "react";
import styled from "styled-components";

const StyledApplicationFooter = styled.div`
  &.application-footer {
    background-color: ${({ theme }) => theme.colors.primary};
    clear: both;
    position: relative;
    height: 155px;
    .wrapper {
      color: white;
      @media all and (min-width: 701px) {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        }
      }
      @media all and (max-width: 700px) {
        width: 100%;
        padding: 0 30px 0 20px;
      }
      .footer-menu {
        padding: 40px 0;
        text-align: center;
        a {
          display: inline-block;
          color: white;
          text-align: center;
          padding: 0 16px;
          text-decoration: none;
        }
      }
      .subtitle {
        text-align: center;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
`;

const ApplicationFooter = () => {
  return (
    <StyledApplicationFooter className="application-footer">
      <div className="wrapper">
        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/memories">Memories</a>
          <a href="mailto:bini@letsqube.com">Contact</a>
          <a href="https://www.instagram.com/letsqube/" target="blank">
            Instagram
          </a>
        </div>
        <div className="subtitle">
          To enrich humanity through cultural experiences.
        </div>
      </div>
    </StyledApplicationFooter>
  );
};

export default ApplicationFooter;
