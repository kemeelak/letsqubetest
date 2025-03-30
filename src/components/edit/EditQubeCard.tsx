import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Label } from "../../theme/components";
import moment from "moment";
import { dummyQube } from "../response/RespondQubeCard";

const StyledRespondQubeCard = styled(Card)`
  width: 100% !important;
  height: 100%;
  box-shadow: 0px 0px 10px #b1b1b1 !important;
  .button-container {
    white-space: nowrap;
    button {
      width: 50%;
      display: inline-block;
      white-space: normal;
    }
  }
  .response-wrapper {
    height: 521px;
    .content {
      margin: 0 20px;
      height: calc(100% - 45px);
      .organizer-header {
        height: 49px;
        margin: 0 -20px;
        border-radius: 5px 5px 0 0;
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        color: white;
        font-size: 12px;
        line-height: 14px;
        padding: 10px 20px;
        .organizer {
          flex: 1 1 0px;
        }
        .countdown {
          text-align: right;
          flex: 1 1 0px;
        }
        .bold {
          font-weight: bold;
        }
      }
      .scroll-wrapper {
        height: 395px;
        margin: 0 -20px;
        overflow: auto;
        .ui.label {
          font-size: 10px;
          font-weight: normal;
        }
      }
    }
  }
`;

const StyledSectionHeader = styled.div`
  text-align: center;
  padding: 0 20px;
  height: 30px;
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

const StyledContentWrapper = styled.div`
  margin: 10px 20px;
  font-size: 12px;
  .icon {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EditQubeCard = () => {
  const [qube, setQube] = useState(dummyQube);
  useEffect(() => {
    // TODO: plug backend
    // axios.get("/backend").then(function (response: any) {
    //   setQube(response);
    // });
    setQube(dummyQube);
  }, [qube]);
  return (
    <StyledRespondQubeCard>
      <div className="response-wrapper">
        <div className="content">
          <div className="organizer-header">
            <div className="organizer">
              <div>Quber</div>
              <div className="bold">{qube.organizer}</div>
            </div>
            <div className="countdown">
              <div>Days left</div>
              <div className="bold">
                {moment(qube.dates[0].endDate).diff(moment(), "days")}
              </div>
            </div>
          </div>
          <div className="scroll-wrapper">
            <StyledContentWrapper>
              <Icon name={"clock"} />
              {moment(qube.dates[0].endDate).format("dddd, MMM D")}
            </StyledContentWrapper>
            <StyledContentWrapper>
              <Icon name={"map marker"} />
              {qube.location}
            </StyledContentWrapper>
            {qube.alreadyHave?.length && (
              <>
                <StyledSectionHeader>I got</StyledSectionHeader>
                <StyledContentWrapper>
                  {qube.alreadyHave.map((item, i) => (
                    <Label key={`$item_${i}`}>{item}</Label>
                  ))}
                </StyledContentWrapper>
              </>
            )}
            {qube.toBring?.length && (
              <>
                <StyledSectionHeader>Bring</StyledSectionHeader>
                <StyledContentWrapper>
                  {qube.toBring.map((item, i) => (
                    <Label key={`$item_${i}`}>{item}</Label>
                  ))}
                </StyledContentWrapper>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledRespondQubeCard>
  );
};

export default EditQubeCard;
