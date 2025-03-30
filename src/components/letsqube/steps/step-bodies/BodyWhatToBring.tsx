import React, { useState } from "react";
import { Button, Label } from "../../../../theme/components";
import { IQube, ICommonStepBodyProps } from "..";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

interface IBodyWhatToBringProps extends ICommonStepBodyProps {
  buttonText: string;
  customCheckIfDisabledFunction?: (value: string) => boolean;
}

const StyledSectionHeader = styled.div`
  height: 30px;
  margin: 0 -20px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  background: #ebeff9;
  color: #003cb0;
  position: relative;
`;

const StyledChipInput = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.input.borderColor} !important;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  .chip-input-container {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0px;
    padding: 5px;
    width: 100%;
    overflow-y: auto;
    height: 120px;
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
    height: 35px;
  }
`;

const StyledWrapper = styled.div`
  height: 360px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const BodyWhatToBring = ({
  qube,
  buttonText,
  updateQube,
}: IBodyWhatToBringProps) => {
  const [haveInputString, setHaveInputString] = useState("");
  const [bringInputString, setBringInputString] = useState("");

  const [have, setHave] = useState(
    qube["alreadyHave"] ? qube["alreadyHave"] : ([] as string[])
  );
  const [bring, setBring] = useState(
    qube["toBring"] ? qube["toBring"] : ([] as string[])
  );

  const haveOnInputKeyDown = (event: any): any => {
    const val = event.target.value;
    if ((event.key === "," || event.key === "Enter") && val.length > 1) {
      setHave([...have, haveInputString]);
      setHaveInputString("");
    } else if (event.key === "Backspace" && !val) {
      removeHaveTag(haveInputString.length - 1);
    }
  };

  const bringOnInputKeyDown = (event: any): any => {
    const val = event.target.value;
    if ((event.key === "," || event.key === "Enter") && val.length > 1) {
      setBring([...bring, bringInputString]);
      setBringInputString("");
    } else if (event.key === "Backspace" && !val) {
      removeBringTag(bringInputString.length - 1);
    }
  };

  const removeHaveTag = (i: any) => {
    const newTags = [...have];
    newTags.splice(i, 1);
    setHave(newTags);
  };

  const removeBringTag = (i: any) => {
    const newTags = [...bring];
    newTags.splice(i, 1);
    setBring(newTags);
  };

  return (
    <>
      <StyledWrapper>
        <StyledSectionHeader>I've got</StyledSectionHeader>
        <StyledChipInput>
          <div className="chip-input-container">
            {have.map((haveItem, i) => (
              <Label key={haveItem}>
                {haveItem}
                <Icon
                  name="delete"
                  onClick={() => {
                    removeHaveTag(i);
                  }}
                />
              </Label>
            ))}
            <StyledInputWrapper>
              <input
                onKeyDown={haveOnInputKeyDown}
                value={haveInputString !== "," ? haveInputString : ""}
                onChange={(event) =>
                  setHaveInputString(event.currentTarget.value)
                }
                name="qubeHave"
              />
            </StyledInputWrapper>
          </div>
        </StyledChipInput>
        <StyledSectionHeader>You bring</StyledSectionHeader>
        <StyledChipInput>
          <div className="chip-input-container">
            {bring.map((bringItem, i) => (
              <Label key={bringItem}>
                {bringItem}
                <Icon
                  name="delete"
                  onClick={() => {
                    removeBringTag(i);
                  }}
                />
              </Label>
            ))}
            <StyledInputWrapper>
              <input
                onKeyDown={bringOnInputKeyDown}
                value={bringInputString !== "," ? bringInputString : ""}
                onChange={(event) =>
                  setBringInputString(event.currentTarget.value)
                }
                name="qubeBring"
              />
            </StyledInputWrapper>
          </div>
        </StyledChipInput>
      </StyledWrapper>
      <Button
        disabled={!have.length && !bring.length}
        onClick={() =>
          updateQube({ alreadyHave: have, toBring: bring } as Partial<IQube>)
        }
        primary
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BodyWhatToBring;
