import React, { useState } from "react";
import styled from "styled-components";
import { parseEmails } from "../../utils/parseEmails";
import { isEmailValid } from "../../utils/isEmailValid";
import { Icon } from "semantic-ui-react";
import { Label } from "./Label";

const StyledChipInput = styled.div`
  background: white;
  border: 2px solid ${({ theme }) => theme.input.borderColor};
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  &.not-empty {
    overflow: hidden;
    overflow-y: auto;
    max-height: 170px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.input.focusedBorderColor};
  }
  .label {
    margin: 0 5px;
  }
  .guest-input-container {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0px;
    padding: 5px;
    width: 100%;
    overflow-y: auto;
    min-height: 40px;
  }
`;

const StyledInputWrapper = styled.div`
  background: none;
  flex-grow: 1;
  padding: 0;
  input {
    display: inline-flex;
    outline: none;
    border: none;
    width: 100%;
    height: 25px;
    margin-top: 2px;
  }
`;

export const GuestsComponent = ({
  emailsString,
  setEmailsString,
}: {
  emailsString: string;
  setEmailsString: (email: string) => void;
}) => {
  const [emailsInputString, setEmailsInputString] = useState("");

  const inputKeyDown = (event: any): any => {
    const val = event.target.value;
    if ((event.key === " " || event.key === "Spacebar") && val.length > 1) {
      setEmailsString(`${emailsString.trim()} ${emailsInputString.trim()}`);
      setEmailsInputString("");
    } else if (event.key === "Backspace" && !val) {
      removeEmailTag(emailsInputString.length - 1);
    } else if (
      event.key === "Enter" &&
      parseEmails(emailsString).filter((email) => isEmailValid(email))
    ) {
      event.preventDefault();
      return false;
    }
  };

  const removeEmailTag = (i: any) => {
    const newTags = parseEmails(emailsString);
    newTags.splice(i, 1);
    setEmailsString(newTags.join(","));
  };

  return (
    <StyledChipInput className={emailsString.length ? "not-empty" : ""}>
      <div className="guest-input-container">
        {parseEmails(emailsString).map((email, i) =>
          email && isEmailValid(email) ? (
            <Label key={email}>
              {email}
              <Icon
                name="delete"
                onClick={() => {
                  removeEmailTag(i);
                }}
              />
            </Label>
          ) : (
            <Label key={email} className="error">
              {email}
              <Icon
                name="delete"
                onClick={() => {
                  removeEmailTag(i);
                }}
              />
            </Label>
          )
        )}
        <StyledInputWrapper>
          <input
            placeholder={
              emailsString.length > 1 ? "" : "Email (maximum 9 guests)"
            }
            onKeyDown={inputKeyDown}
            value={emailsInputString !== " " ? emailsInputString : ""}
            onChange={(event) =>
              setEmailsInputString(event.currentTarget.value)
            }
            name="guests"
          />
        </StyledInputWrapper>
      </div>
    </StyledChipInput>
  );
};

GuestsComponent.displayName = "GuestsComponent";
