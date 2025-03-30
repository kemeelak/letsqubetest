import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import check from "../../../assets/images/check.svg";
import graphic from "../../../assets/images/graphic.svg";
import { Button } from "../../../theme/components";
import ICalendarLink from "react-icalendar-link";
import { StyledBlueBall } from "../decline";
import { useHistory } from "react-router-dom";

const StyledStepWrapper = styled.div`
  height: 521px;
  text-align: center;
  button,
  .ui.input {
    width: 100%;
  }
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
    text-decoration: underline;
    cursor: pointer;
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

interface IEventObject {
  event: {
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    location: string;
  };
}

const AcceptQube = ({ event }: IEventObject) => {
  const history = useHistory();
  return (
    <StyledStepWrapper>
      <div className="step-content">
        <StyledBlueBall>
          <Image src={check} />
        </StyledBlueBall>
        <div
          className="blue-text step-header"
          onClick={() => history.push("/edit")}
        >
          View qube
        </div>
        <StyledStepBody className={`step-body`}>
          <Image src={graphic} style={{ marginTop: 70 }} />
          <ICalendarLink event={event}>
            <Button primary>Add to calendar</Button>
          </ICalendarLink>
        </StyledStepBody>
      </div>
    </StyledStepWrapper>
  );
};

export default AcceptQube;
