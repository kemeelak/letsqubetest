import React, { useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import sure from "../../../assets/images/sure.svg";
import questionMark from "../../../assets/images/-.svg";
import check from "../../../assets/images/check.svg";
import graphic from "../../../assets/images/graphic.svg";
import { Image } from "semantic-ui-react";
import { Button } from "../../../theme/components";

export const StyledBlueBall = styled.div`
  height: 59px;
  width: 59px;
  border-radius: 59px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  margin: 30px auto 20px auto;
  img {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledStepWrapper = styled.div`
  height: 521px;
  text-align: center;
  .step-content {
    margin: 20px 20px 0 20px;
    height: calc(100% - 45px);
    display: flex;
    flex-flow: column;
  }
  .step-header {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;

const StyledStepBody = styled.div`
  display: flex;
  flex-direction: column;
  &.step-body {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

interface IDeclineQubeProps {
  goBack: (b: boolean) => void;
}

const DeclineQube = ({ goBack }: IDeclineQubeProps) => {
  const [isFinished, setIsFinished] = useState(false);

  const declineInvite = () => {
    // TODO: plug backend
    // axios.post("/backend", data).then(function (response: any) {
    //   setIsFinished(true)
    // });
    setIsFinished(true);
  };
  return (
    <StyledStepWrapper>
      <div className="step-content">
        {isFinished ? (
          <>
            <StyledBlueBall>
              <Image src={check} />
            </StyledBlueBall>
            <div className="blue-text step-header">
              Hope you qube with your loved ones soon :)
            </div>
            <Image src={graphic} style={{ marginTop: 70 }} />
          </>
        ) : (
          <>
            <StyledBlueBall>
              <Image src={questionMark} />
            </StyledBlueBall>
            <div className="blue-text step-header">
              Your friends are going to have fun! Are you sure you don’t want to
              join?
            </div>
            <StyledStepBody className={`step-body`}>
              <Image src={sure} style={{ marginTop: 70 }} />
              <div>
                <Button secondary onClick={() => goBack(false)}>
                  Back
                </Button>
                <Button onClick={() => declineInvite()}>Yes, I'm sure</Button>
              </div>
            </StyledStepBody>
          </>
        )}
      </div>
    </StyledStepWrapper>
  );
};

export default DeclineQube;
