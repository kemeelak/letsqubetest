import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import TimeRange from "react-time-range";
import { Image } from "semantic-ui-react";
import back from "../../assets/images/back.svg";
import forward from "../../assets/images/forward.svg";
import { IDate } from "../../components/letsqube/steps";
import trash from "../../assets/images/trash.svg";

const StyledWrapper = styled.div`
  width: 100% !important;
  border-radius: 30px !important;
  padding: 0 10px !important;
  height: 40px;
  border: 1px solid #e5e5e6 !important;
  color: #58595b !important;
  font-size: 12px;
  margin-bottom: 15px;
  position: relative;
  .container {
    width: 275px;
    margin-top: 7px;
    display: inline-flex;
    height: 23px;
    .trash-icon {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border-radius: 30px;
  cursor: pointer;
  .react-date-picker__wrapper {
    border: none !important;
  }
  &.react-date-picker--open {
    background: #ebeff9;
  }
  .react-date-picker {
    width: 90px;
    &__calendar--open {
      top: 45px !important;
      left: -10px !important;
      width: 275px;
    }
  }
  .qube-calendar {
    position: relative;
    box-shadow: 0px 0px 20px #d1daea;
    border: none;
    background: white;
    border-radius: 5px;
    * {
      color: #4d4d4d;
    }
    .react-calendar {
      &__tile {
        height: 38px;
        background: white;
        border-radius: 20px;
        &:disabled * {
          color: #b1b1b1 !important;
        }
        &:hover:not(.react-calendar__tile--active) {
          background: #ebeff9;
        }
        &--active {
          background: #003cb0;
          * {
            color: white;
          }
        }
      }
      &__month-view__weekdays {
        * {
          color: #979797;
          text-decoration: none;
          font-weight: normal;
        }
      }
      &__navigation {
        height: 30px;
        margin-bottom: 10px;
        button {
          border-radius: 5px;
          &:hover,
          &:disabled {
            background: white;
          }
        }
        &__label {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          text-align: center;

          color: #003cb0;
        }
        &__prev-button {
          img {
            margin-left: 5px;
          }
          &:disabled {
            img {
              opacity: 0.6;
            }
          }
        }
        &__next-button {
          img {
            float: right;
            margin-right: 5px;
          }
        }
        &__prev2-button,
        &__next2-button {
          display: none;
        }
      }
    }
  }
`;

const StyledTimeRange = styled(TimeRange)`
  padding: 0 !important;
  .component {
    padding: 0 !important;
    .label {
      padding: 0 !important;
    }
    select {
      background-color: white !important;
      border: none !important;
    }
  }
`;

interface ICalendarTimeRangePickerProps {
  time?: IDate;
  index: number;
  updateDate: (date: IDate, index: number) => void;
  deleteDatePicker: (idex: number) => void;
}

const defaultDate = { startDate: undefined, endDate: undefined } as IDate;

const CalendarTimeRangePicker = ({
  time,
  index,
  updateDate,
  deleteDatePicker,
}: ICalendarTimeRangePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    time?.startDate || undefined
  );
  const [startTime, setStartTime] = useState<Date | undefined>(
    time?.startDate || undefined
  );
  const [endTime, setEndTime] = useState<Date | undefined>(
    time?.endDate || undefined
  );

  const onDateTimeChange = ({
    newDate,
    newTime,
  }: {
    newDate?: Date;
    newTime?: {
      startTime?: Date;
      endTime?: Date;
    };
  }) => {
    if (newDate) {
      setDate(newDate);
    }
    if (newTime && newTime.startTime) {
      setStartTime(newTime.startTime);
    }
    if (newTime && newTime.endTime) {
      setEndTime(newTime.endTime);
    }
  };

  const onDeleteClick = () => deleteDatePicker(index);

  if (date && startTime && endTime) {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      new Date(startTime).getHours(),
      new Date(startTime).getMinutes(),
      new Date(startTime).getSeconds()
    );
    const endDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      new Date(endTime).getHours(),
      new Date(endTime).getMinutes(),
      new Date(endTime).getSeconds()
    );

    if (
      !time?.endDate ||
      !time?.startDate ||
      (time?.endDate && time?.endDate.getTime() !== endDate.getTime()) ||
      (time?.startDate && time?.startDate.getTime() !== startDate.getTime())
    ) {
      updateDate({ endDate, startDate }, index);
    }
  }

  return (
    <StyledWrapper>
      <div className="container">
        <StyledDatePicker
          calendarType={"US"}
          prevLabel={<Image src={back} />}
          nextLabel={<Image src={forward} />}
          minDate={new Date()}
          value={date}
          calendarIcon={null}
          clearIcon={null}
          calendarClassName={"qube-calendar"}
          onChange={(value: any) => onDateTimeChange({ newDate: value as Date })}
        />
        <StyledTimeRange
          startLabel={null}
          endLabel={"-"}
          endMoment={endTime}
          startMoment={startTime}
          showErrors={false}
          onStartTimeChange={(value: any) =>
            onDateTimeChange({ newTime: value })
          }
          onEndTimeChange={(value: any) => onDateTimeChange({ newTime: value })}
        />
        {index > 0 && (
          <Image
            className="trash-icon"
            src={trash}
            onClick={() => onDeleteClick()}
          />
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledDateComponent = styled.div`
  .add-date {
    margin-top: 3px;
    float: right;
    cursor: pointer;
    font-size: 10px;
    line-height: 12px;
    color: #003cb0;
  }
`;

export const DateComponent = ({
  dates,
  setDates,
}: {
  dates: IDate[];
  setDates: (dates: IDate[]) => void;
}) => {
  const [times, setTimes] = useState(
    dates.length ? dates : ([defaultDate] as IDate[])
  );

  const updateDates = (newDate: IDate, index: number) => {
    const timesToUpdate = [...times];
    timesToUpdate[index] = newDate;
    setTimes(timesToUpdate);
    setDates(timesToUpdate);
  };

  const addNewDatePicker = () => {
    setTimes([...times, defaultDate]);
  };

  const deleteDatePicker = (index: number) => {
    const timesToUpdate = [...times];
    timesToUpdate.splice(index, 1);
    setTimes(timesToUpdate);
    setDates(timesToUpdate);
  };

  const isTimesFilled = () => {
    let result = true;
    times.forEach((time: IDate) => {
      if (!time.endDate || !time.startDate) {
        result = false;
      }
    });
    return result;
  };

  const commonProps = {
    index: 0,
    updateDate: updateDates,
    deleteDatePicker: deleteDatePicker,
  };

  return (
    <StyledDateComponent>
      {times.length ? (
        times.map((time, i) => (
          <CalendarTimeRangePicker
            {...commonProps}
            time={time}
            index={i}
            key={`dtp_${i}`}
          />
        ))
      ) : (
        <CalendarTimeRangePicker {...commonProps} />
      )}
      {times.length < 3 && times.length > 0 && isTimesFilled() && (
        <span className="add-date" onClick={() => addNewDatePicker()}>
          Add
        </span>
      )}
    </StyledDateComponent>
  );
};

DateComponent.displayName = "DateComponent";
