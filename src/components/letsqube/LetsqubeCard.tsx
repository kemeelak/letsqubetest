import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import graphic from "../../assets/images/graphic.svg";
import { Button } from "../../theme/components";
import Steps from "./steps/index";

const StyledLetsqubeCard = styled(Card)`
  width: 100% !important;
  height: 100%;
  box-shadow: 0px 0px 10px #b1b1b1 !important;
  .logo-container {
    text-align: center;
    &.main {
      margin: 30px auto 0 auto;
    }
    &.sub {
      margin: 10px auto 30px auto;
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      line-height: 24px;
      text-align: center;
    }
    &.graphic {
      margin: 30px auto;
    }
  }
  .welcome-text {
    height: 100px;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .button-container {
    margin: 0 20px 20px 20px;
    button {
      width: 100%;
    }
  }
`;

const LetsqubeCard = () => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <StyledLetsqubeCard>
      {!isStarted ? (
        <>
          <div className="logo-container main">
            <Image src={logo} />
          </div>
          <div className="logo-container sub pfd blue-text">Letsqube</div>
          <div className="welcome-text pfd blue-text">
            A one-stop-shop for organizing potlucks and small gatherings.
          </div>
          <div className="logo-container graphic">
            <Image src={graphic} />
          </div>
          <div className="button-container">
            <Button primary onClick={() => setIsStarted(true)}>
              Start qubing
            </Button>
          </div>
        </>
      ) : (
        <Steps />
      )}
    </StyledLetsqubeCard>
  );
};

export default LetsqubeCard;
