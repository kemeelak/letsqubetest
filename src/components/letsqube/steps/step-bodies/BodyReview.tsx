import React from "react";
import axios from "axios";
import { Button, Label } from "../../../../theme/components";
import { ICommonStepBodyProps, stepsMap } from "..";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import moment from "moment";
import {
  SAVE_QUBE_ENDPOINT,
  SAVE_QUBE_SUCCESS,
} from "../../../../general/app-constants";
import { IResponse } from "../../../../general/type-defs";

interface IBodyWithInputProps extends ICommonStepBodyProps {
  buttonText: string;
  showSuccess: (result: boolean) => void;
}

const StyledReviewBody = styled.div`
  height: 393px;
  overflow: hidden;
  overflow-y: auto;
  margin: 0 -20px;
  text-align: left;
  .icon {
    position: absolute;
    right: 40px;
    cursor: pointer;
  }
`;

const StyledSubSectionWrapper = styled.div`
  margin: 10px 20px;
`;

export const StyledSectionHeader = styled.div`
  height: 30px;
  margin: 0 -20px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 30px;
  background: #ebeff9;
  color: #003cb0;
  position: relative;
  span {
    margin-left: 40px;
  }
`;

const BodyReview = ({
  buttonText,
  qube,
  goToReview = () => {},
  showSuccess,
}: IBodyWithInputProps) => {
  const sendQubeInvitation = () => {
    axios.post(SAVE_QUBE_ENDPOINT, qube).then((response: IResponse) => {
      if (response.data.message.toUpperCase() === SAVE_QUBE_SUCCESS) {
        showSuccess(true);
      }
    });
  };
  return (
    <>
      <StyledReviewBody>
        <StyledSectionHeader>
          <span>
            Who{" "}
            <Icon onClick={() => goToReview(stepsMap.guests)} name="pencil" />
          </span>
        </StyledSectionHeader>
        <StyledSubSectionWrapper>
          {qube.guests
            ? qube.guests.map((guest, i) => (
                <Label key={`$guest_${i}`}>{guest}</Label>
              ))
            : "Empty"}
        </StyledSubSectionWrapper>
        <StyledSectionHeader>
          <span>
            When{" "}
            <Icon onClick={() => goToReview(stepsMap.when)} name="pencil" />
          </span>
        </StyledSectionHeader>
        <StyledSubSectionWrapper>
          {qube.dates ? (
            <>
              {moment(qube.dates[0].startDate).format("ddd, MMM D, YYYY")}
              {qube.dates.map((date, i) => (
                <div key={i}>
                  {moment(date.startDate).format("h:mm A")} -{" "}
                  {moment(date.endDate).format("h:mm A")}
                </div>
              ))}
            </>
          ) : (
            "Empty"
          )}
        </StyledSubSectionWrapper>
        <StyledSectionHeader>
          <span>
            Where{" "}
            <Icon onClick={() => goToReview(stepsMap.where)} name="pencil" />
          </span>
        </StyledSectionHeader>
        <StyledSubSectionWrapper>
          {qube.location ? qube.location : "Empty"}
        </StyledSubSectionWrapper>
        <StyledSectionHeader>
          <span>
            Note{" "}
            <Icon onClick={() => goToReview(stepsMap.note)} name="pencil" />
          </span>
        </StyledSectionHeader>
        <StyledSubSectionWrapper>
          {qube.note ? qube.note : "Empty"}
        </StyledSubSectionWrapper>
      </StyledReviewBody>
      <Button primary onClick={() => sendQubeInvitation()}>
        {buttonText}
      </Button>
    </>
  );
};

export default BodyReview;
