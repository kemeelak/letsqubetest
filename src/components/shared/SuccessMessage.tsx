import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import check from "../../assets/images/check.svg";
import graphic from "../../assets/images/graphic.svg";
import { StyledBlueBall } from "../response/decline";
import { Button } from "../../theme/components";

interface ISuccessMessageProps {
  stepHeader: string;
  subHeader?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const StyledStepWrapper = styled.div`
  height: 521px;
  text-align: center;
  .step-content {
    margin: 20px 20px 0 20px;
    height: calc(100% - 45px);
    display: flex;
    flex-flow: column;
    .check-mark {
      top: 30%;
    }
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

const SuccessMessage = ({
  stepHeader,
  subHeader,
  buttonLabel,
}: ISuccessMessageProps) => {
  return (
    <StyledStepWrapper>
      <div className="step-content">
        <StyledBlueBall>
          <Image src={check} className="check-mark" />
        </StyledBlueBall>
        <div className="blue-text step-header">{stepHeader}</div>
        <StyledStepBody className={`step-body`}>
          <Image src={graphic} style={{ marginTop: 70 }} />
          {subHeader && <div className="blue-text">{subHeader}</div>}
          {buttonLabel && <Button primary>{buttonLabel}</Button>}
        </StyledStepBody>
      </div>
    </StyledStepWrapper>
  );
};

export default SuccessMessage;
