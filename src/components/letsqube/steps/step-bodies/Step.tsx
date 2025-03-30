import React from "react";
import { IStepCommonProps } from "..";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import back from "../../../../assets/images/back.svg";

const StyledStepBody = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  &.step-body {
    flex-grow: 1;
    justify-content: space-between;
  }
  .scroll-wrapper {
    height: 374px;
    position: relative;
    .body-image {
      width: 180px;
      bottom: 40px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.shorter-body {
    .scroll-wrapper {
      height: 361px;
    }
  }
`;

const StyledBackLink = styled.a`
  width: 15px;
  position: absolute;
  top: 35px;
`;

const StyledSkipLink = styled.a`
  position: absolute;
  top: 32px;
  right: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
`;

const Step = ({
  title,
  subTitle,
  goBack,
  additionalFunctionText,
  body,
  customClass,
  additionalStepFunction,
}: IStepCommonProps) => {
  return (
    <>
      {goBack && (
        <StyledBackLink onClick={() => goBack()}>
          <Image src={back} />
        </StyledBackLink>
      )}
      <div className="blue-text step-header">{title}</div>
      {additionalStepFunction && (
        <StyledSkipLink onClick={() => additionalStepFunction()}>
          {additionalFunctionText}
        </StyledSkipLink>
      )}
      <StyledParagraph>{subTitle}</StyledParagraph>
      <StyledStepBody className={`step-body ${customClass ? customClass : ""}`}>
        {body}
      </StyledStepBody>
    </>
  );
};

export default Step;
