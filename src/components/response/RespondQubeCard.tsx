import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import { Button, Label } from "../../theme/components";
import { IQube, IDate } from "../letsqube/steps";
import moment from "moment";
import DeclineQube from "./decline";
import AcceptQube from "./accept";

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
  font-size: 10px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    li {
      display: block;
      position: relative;
      float: left;
      width: 100%;
      input[type="radio"] {
        position: absolute;
        visibility: hidden;
      }
      label {
        display: block;
        position: relative;
        padding: 8px 25px 8px 25px;
        cursor: pointer;
      }
      .check {
        display: block;
        position: absolute;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 100%;
        height: 15px;
        width: 15px;
        top: 10px;
        z-index: 5;
        cursor: pointer;
        &:before {
          display: block;
          position: absolute;
          content: "";
          border-radius: 100%;
          height: 9px;
          width: 9px;
          top: 2px;
          left: 2px;
          margin: auto;
        }
      }
    }
  }

  input[type="radio"]:checked ~ .check {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  input[type="radio"]:checked ~ .check::before {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const dummyQube: IQube = {
  organizer: "manfred@mann.com",
  guests: ["me@example.com", "myself@example.com", "i@example.com"],
  dates: [
    {
      endDate: moment().add(15, "days").add(1, "hours").toDate(),
      startDate: moment().add(15, "days").add(1.5, "hours").toDate(),
    },
    {
      endDate: moment().add(15, "days").add(2, "hours").toDate(),
      startDate: moment().add(15, "days").add(2.5, "hours").toDate(),
    },
    {
      endDate: moment().add(15, "days").add(3, "hours").toDate(),
      startDate: moment().add(15, "days").add(3.5, "hours").toDate(),
    },
  ],
  location: "101 elm st Cambridge, MA",
  toBring: ["good mood"],
  alreadyHave: ["snacks", "drinks"],
  note: "Looking forward to it",
};

const RespondQubeCard = () => {
  const [selectedDate, setSelectedDate] = useState<IDate | undefined>(
    undefined
  );
  const [qube, setQube] = useState(dummyQube);
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);

  useEffect(() => {
    // TODO: plug backend
    // axios.get("/backend").then(function (response: any) {
    //   setQube(response);
    // });
    setQube(dummyQube);
  }, [qube]);

  const acceptInvite = () => {
    // TODO: plug backend
    // axios.post("/backend", data).then(function (response: any) {
    //   setYes(true);
    // });
    setYes(true);
  };
  const event = {
    title: `Qube with ${qube.organizer}`,
    description: "",
    startTime:
      selectedDate && selectedDate.startDate
        ? selectedDate.startDate.toString()
        : "",
    endTime:
      selectedDate && selectedDate.endDate
        ? selectedDate.endDate.toString()
        : "",
    location: qube.location,
  };

  let responseBody = (
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
          <StyledSectionHeader>Who</StyledSectionHeader>
          <StyledContentWrapper style={{ marginLeft: 12, marginRight: 12 }}>
            {qube.guests.map((guest, i) => (
              <Label key={`$guest_${i}`}>{guest}</Label>
            ))}
          </StyledContentWrapper>
          {qube.dates.length && (
            <>
              <StyledSectionHeader>When</StyledSectionHeader>
              <StyledContentWrapper>
                {qube.dates[0].startDate &&
                  moment(qube.dates[0].startDate).format("ddd, MMM D, YYYY")}
                <ul>
                  {qube.dates.map((date, i) => (
                    <li key={i} onClick={() => setSelectedDate(date)}>
                      <input
                        type="radio"
                        checked={date === selectedDate}
                        readOnly
                      />
                      <label>{`${moment(date.startDate).format(
                        "H:mm A"
                      )} - ${moment(date.startDate).format("H:mm A")}`}</label>
                      <div className="check">
                        <div className="inside" />
                      </div>
                    </li>
                  ))}
                </ul>
              </StyledContentWrapper>
            </>
          )}
          <StyledSectionHeader>Where</StyledSectionHeader>
          <StyledContentWrapper>{qube.location}</StyledContentWrapper>
          {qube.note && (
            <>
              <StyledSectionHeader>Note</StyledSectionHeader>
              <StyledContentWrapper>{qube.note}</StyledContentWrapper>
            </>
          )}
        </div>
        <div className="button-container">
          <Button secondary onClick={() => setNo(true)}>
            Sorry, I can't
          </Button>
          <Button primary onClick={() => acceptInvite()}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
  if (yes) {
    responseBody = <AcceptQube event={event} />;
  } else if (no) {
    responseBody = <DeclineQube goBack={setNo} />;
  }
  return <StyledRespondQubeCard>{responseBody}</StyledRespondQubeCard>;
};

export default RespondQubeCard;
