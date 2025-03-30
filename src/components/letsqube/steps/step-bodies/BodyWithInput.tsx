import React, { useState } from "react";
import { Button, Input } from "../../../../theme/components";
import { IQube, ICommonStepBodyProps } from "..";
import { Image } from "semantic-ui-react";

interface IBodyWithInputProps extends ICommonStepBodyProps {
  placeholder: string;
  buttonText: string;
  customCheckIfDisabledFunction?: (value: string) => boolean;
  image: string;
}

const BodyWithInput = ({
  placeholder,
  qubePropertyName,
  buttonText,
  updateQube,
  customCheckIfDisabledFunction,
  qube,
  image,
}: IBodyWithInputProps) => {
  const [value, setValue] = useState(
    qube[qubePropertyName] ? (qube[qubePropertyName] as string) : ""
  );
  return (
    <>
      <div className="scroll-wrapper">
        <Input
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Image className="body-image" src={image} />
      </div>
      <Button
        disabled={
          customCheckIfDisabledFunction
            ? !customCheckIfDisabledFunction(value)
            : !value.length
        }
        onClick={() =>
          updateQube({ [qubePropertyName]: value } as Partial<IQube>)
        }
        primary
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BodyWithInput;
