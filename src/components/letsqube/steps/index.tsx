import React, { useState } from "react";
import styled from "styled-components";
import { Progress } from "../../../theme/components";
import Step from "./step-bodies/Step";
import BodyWithInput from "./step-bodies/BodyWithInput";
import { isEmailValid } from "../../../utils/isEmailValid";
import BodyWhatToBring from "./step-bodies/BodyWhatToBring";
import BodyGuests from "./step-bodies/BodyGuests";
import BodyWithDate from "./step-bodies/BodyWithDate";
import BodyWithNote from "./step-bodies/BodyWithNote";
import BodyReview from "./step-bodies/BodyReview";
import you from "../../../assets/images/you.svg";
import where from "../../../assets/images/where.svg";
import who from "../../../assets/images/who.svg";
import note from "../../../assets/images/note.svg";
import when from "../../../assets/images/when.svg";
import SuccessMessage from "../../shared/SuccessMessage";

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
  }
`;
const StyledProgress = styled(Progress)`
  border-radius: 0.28571429rem 0.28571429rem 0 0 !important;
  margin: 0 !important;
  .bar {
    border-radius: inherit !important;
  }
`;

export interface IQube {
  organizer: string;
  guests: string[];
  dates: IDate[];
  location: string;
  toBring?: string[];
  alreadyHave?: string[];
  note?: string;
}

export interface IDate {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export interface IStepCommonProps {
  title: string;
  subTitle?: string;
  body: JSX.Element;
  additionalFunctionText: string;
  goBack?: () => void;
  additionalStepFunction?: () => void | undefined;
  customClass?: string;
}

export type qubeKeys =
  | "organizer"
  | "guests"
  | "dates"
  | "location"
  | "toBring"
  | "alreadyHave"
  | "note";

export interface ICommonStepBodyProps {
  updateQube: (qube: Partial<IQube>) => void;
  qubePropertyName: qubeKeys;
  qube: Partial<IQube>;
  goToReview?: (index: number) => void;
  showSuccess?: (result: boolean) => void;
}

export const stepsMap = {
  organizer: 0,
  guests: 1,
  when: 2,
  where: 3,
  what: 4,
  note: 5,
  review: 6,
};

const Steps = () => {
  const [qube, setQube] = useState({} as Partial<IQube>);
  const [isInReview, setIsInReview] = useState(false);
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const additionalFunctionText = isInReview ? "Review" : "Skip";
  const updateQube = (qubeObject: Partial<IQube>) => {
    const newStep = step + 1;
    const newQube: Partial<IQube> = { ...qube, ...qubeObject };
    setQube(newQube);
    setStep(newStep);
  };

  const goBack = () => {
    const newStep = step - 1;
    setStep(newStep);
  };

  const skip = () => {
    const newStep = step + 1;
    setStep(newStep);
  };

  const review = () => {
    setIsInReview(false);
    setStep(6);
  };

  const goToReview = (step: number) => {
    setIsInReview(true);
    setStep(step);
  };

  const additionalStepFunction = isInReview ? review : undefined;

  let stepCommonProps: IStepCommonProps = {
    title: "",
    subTitle: "",
    body: <span />,
    additionalFunctionText,
    additionalStepFunction,
  };

  let commonStepBodyProps: ICommonStepBodyProps = {
    qube,
    updateQube: updateQube,
    qubePropertyName: "organizer",
  };
  console.log(qube);

  switch (step) {
    case stepsMap.organizer: {
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "You!",
          subTitle: "What's your email?",
          body: (
            <BodyWithInput
              {...commonStepBodyProps}
              placeholder={"Email"}
              qubePropertyName={"organizer"}
              buttonText={"Who"}
              customCheckIfDisabledFunction={isEmailValid}
              image={you}
            />
          ),
        },
      };
      break;
    }
    case stepsMap.guests:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "Who?",
          subTitle: "Add an email and hit space to add more",
          body: (
            <BodyGuests
              {...commonStepBodyProps}
              qubePropertyName={"guests"}
              buttonText={"When"}
              updateQube={updateQube}
              image={who}
            />
          ),
          goBack,
        },
      };
      break;
    case stepsMap.when:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "When?",
          subTitle: "Pick up to 3 different times",
          body: (
            <BodyWithDate
              {...commonStepBodyProps}
              qubePropertyName={"dates"}
              buttonText={"Where"}
              updateQube={updateQube}
              image={when}
            />
          ),
          goBack,
          customClass: "calendar-body",
        },
      };
      break;
    case stepsMap.where:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "Where?",
          subTitle: "What's your home address?",
          body: (
            <BodyWithInput
              {...commonStepBodyProps}
              placeholder={"Address"}
              qubePropertyName={"location"}
              buttonText={"What"}
              updateQube={updateQube}
              image={where}
            />
          ),
          goBack,
        },
      };
      break;
    case stepsMap.what:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "What?",
          subTitle: "Hit comma to separate items",
          body: (
            <BodyWhatToBring
              {...commonStepBodyProps}
              buttonText={"What"}
              updateQube={updateQube}
            />
          ),
          goBack,
          additionalStepFunction: isInReview ? review : skip,
        },
      };
      break;
    case stepsMap.note:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "Note",
          subTitle: "Add a note",
          body: (
            <BodyWithNote
              {...commonStepBodyProps}
              qubePropertyName={"note"}
              buttonText={"Review"}
              updateQube={updateQube}
              image={note}
            />
          ),
          goBack,
        },
      };
      break;
    case stepsMap.review:
      stepCommonProps = {
        ...stepCommonProps,
        ...{
          title: "Review",
          body: (
            <BodyReview
              {...commonStepBodyProps}
              buttonText={"Send qube invitation"}
              updateQube={updateQube}
              goToReview={goToReview}
              showSuccess={setShowSuccess}
            />
          ),
          goBack,
        },
      };
      break;
    default:
      break;
  }
  return (
    <StyledStepWrapper>
      {showSuccess ? (
        <SuccessMessage stepHeader="Invitation sent" buttonLabel="View qube" />
      ) : (
        <>
          <StyledProgress
            className={`${step === 0 ? "null" : ""}`}
            percent={step * 16.7}
          />
          <div className="step-content">
            <Step {...stepCommonProps} />
          </div>
        </>
      )}
    </StyledStepWrapper>
  );
};

export default Steps;
