import React, { useState } from "react";
import { Button, TextArea } from "../../../../theme/components";
import { IQube, ICommonStepBodyProps } from "..";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

interface IBodyWithNoteProps extends ICommonStepBodyProps {
  buttonText: string;
  image: string;
}

export const StyledTextArea = styled(TextArea)`
  padding: 10px !important;
  resize: none;
  height: 150px;
  outline: none;
`;

const BodyWithNote = ({
  buttonText,
  updateQube,
  qubePropertyName,
  qube,
  image,
}: IBodyWithNoteProps) => {
  const [note, setNote] = useState(
    qube[qubePropertyName] ? (qube[qubePropertyName] as string) : ""
  );

  return (
    <>
      <div className="scroll-wrapper">
        <StyledTextArea
          onChange={(e: {
            currentTarget: { value: React.SetStateAction<string> };
          }) => setNote(e.currentTarget.value)}
          value={note}
        />
        <Image className="body-image" src={image} />
      </div>
      <Button
        onClick={() =>
          updateQube({ [qubePropertyName]: note } as Partial<IQube>)
        }
        primary
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BodyWithNote;
