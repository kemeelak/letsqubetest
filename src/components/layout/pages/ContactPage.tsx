import React, { FormEvent, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Form, Card } from "semantic-ui-react";
import { isEmailValid } from "../../../utils/isEmailValid";
import { Button, TextArea, Input } from "../../../theme/components";
import {
  CONTACT_ENDPOINT,
  CONTACT_SUCCESS,
} from "../../../general/app-constants";
import { IResponse } from "../../../general/type-defs";
import SuccessMessage from "../../shared/SuccessMessage";

const StyledContactPageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  top: 60px;
  position: absolute;
  .wrapper {
    margin-top: 50px;
    width: 315px;

    @media all and (min-width: 701px) {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    @media all and (max-width: 700px) {
      margin-left: auto;
      margin-right: auto;
    }

    .form-container {
      height: 470px;
      box-shadow: 0px 0px 10px #d1d8e6;
      border-radius: 5px;
      padding: 26px 20px 20px 20px;
      .title-text {
        text-align: center;
        font-style: normal;
        font-weight: 900;
        font-size: 22px;
        line-height: 30px;
      }
      .sub-title {
        margin-top: 23px;
        margin-bottom: 23px;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        a {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
      textarea {
        resize: none;
        height: 125px;
      }
    }
    .form-footer {
      margin: 20px 0;
      button {
        float: right;
      }
    }
  }
`;

const StyledCardContainer = styled.div`
  width: 315px;
  @media (min-width: 701px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 700px) {
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface IAdvertiseForm {
  [key: string]: string;
}

const FormFields = {
  FIRST_NAME: "fname",
  LAST_NAME: "lname",
  EMAIL: "email",
  MESSAGE: "message",
};

const ContactPage = () => {
  const [form, setForm] = useState({} as IAdvertiseForm);
  const [showSuccess, setShowSuccess] = useState(false);
  const requiredFields = [
    FormFields.FIRST_NAME,
    FormFields.LAST_NAME,
    FormFields.EMAIL,
    FormFields.MESSAGE,
  ];

  const onFormChange = (event: FormEvent<HTMLFormElement>) => {
    const formTarget = event.target as HTMLFormElement;
    const name = formTarget.name;
    const value = formTarget.value;
    const newForm = { ...form, ...{ [name]: value } };
    setForm(newForm);
  };

  const onFormSubmit = () => {
    axios.post(CONTACT_ENDPOINT, form).then((response: IResponse) => {
      if (response.data.message.toUpperCase() === CONTACT_SUCCESS) {
        setShowSuccess(true);
      }
    });
  };

  const isFormValid = () => {
    let isValid = true;
    requiredFields.forEach((field) => {
      if (!form[field]) {
        isValid = false;
      } else if (form[field] && !form[field].trim().length) {
        isValid = false;
      }
    });
    if (form[FormFields.EMAIL] && !isEmailValid(form[FormFields.EMAIL])) {
      isValid = false;
    }
    return isValid;
  };

  return (
    <StyledContactPageWrapper>
      {showSuccess ? (
        <StyledCardContainer>
          <Card>
            <SuccessMessage
              stepHeader="Thank you for your feedback!"
              subHeader="We treasure all feedback. Keep them coming"
            />
          </Card>
        </StyledCardContainer>
      ) : (
        <div className="wrapper">
          <div className="form-container">
            <Form
              onChange={(event: FormEvent<HTMLFormElement>) =>
                onFormChange(event)
              }
              onSubmit={() => {
                onFormSubmit();
              }}
            >
              <div className="title-text pfd blue-text">How can we help?</div>
              <div className="sub-title">
                We are all ears!
                <br />
              </div>
              <Form.Field required>
                <Input name={FormFields.FIRST_NAME} placeholder="First Name" />
              </Form.Field>
              <Form.Field required>
                <Input name={FormFields.LAST_NAME} placeholder="Last Name" />
              </Form.Field>
              <Form.Field required>
                <Input name={FormFields.EMAIL} placeholder="Email address" />
              </Form.Field>
              <Form.Field>
                <TextArea name={FormFields.MESSAGE} placeholder="Message" />
              </Form.Field>
            </Form>
          </div>
          <div className="form-footer">
            <Button
              disabled={!isFormValid()}
              onClick={() => onFormSubmit()}
              primary
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </StyledContactPageWrapper>
  );
};

export default ContactPage;
