import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Button, Input, TextArea } from "../../../theme/components";
import { Form } from "semantic-ui-react";
import { isEmailValid } from "../../../utils/isEmailValid";

const StyledAdvertisePageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  top: 60px;
  position: absolute;
  .wrapper {
    margin-top: 50px;
    width: 315px;
    margin-left: auto;
    margin-right: auto;
    .form-container {
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
        font-size: 12px;
        line-height: 16px;
        text-align: center;
      }
      textarea {
        height: 80px;
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

interface IAdvertiseForm {
  [key: string]: string;
}

const FormFields = {
  FIRST_NAME: "fname",
  LAST_NAME: "lname",
  COMPANY: "company",
  COUNTRY: "country",
  EMAIL: "email",
  PHONE: "phone",
  MESSAGE: "message",
};

const AdvertisePage = () => {
  const [form, setForm] = useState({} as IAdvertiseForm);
  const requiredFields = [
    FormFields.FIRST_NAME,
    FormFields.LAST_NAME,
    FormFields.COMPANY,
    FormFields.COUNTRY,
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
    console.table(form);
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
    <StyledAdvertisePageWrapper>
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
            <div className="title-text pfd blue-text">
              Advertise on Letsqube
            </div>
            <div className="sub-title">
              Use this form to get in touch with us.
            </div>
            <Form.Field required>
              <Input name={FormFields.FIRST_NAME} placeholder="First Name" />
            </Form.Field>
            <Form.Field required>
              <Input name={FormFields.LAST_NAME} placeholder="Last Name" />
            </Form.Field>
            <Form.Field required>
              <Input name={FormFields.COMPANY} placeholder="Company" />
            </Form.Field>
            <Form.Field required>
              <Input name={FormFields.EMAIL} placeholder="Email address" />
            </Form.Field>
            <Form.Field>
              <Input name={FormFields.COUNTRY} placeholder="Country" />
            </Form.Field>
            <Form.Field>
              <Input name={FormFields.PHONE} placeholder="Telephone number" />
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
            Get in touch
          </Button>
        </div>
      </div>
    </StyledAdvertisePageWrapper>
  );
};

export default AdvertisePage;
