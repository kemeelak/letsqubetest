import React, { useState } from "react";
import { Button, DateComponent } from "../../../../theme/components";
import { IQube, ICommonStepBodyProps, IDate } from "..";
import { Image } from "semantic-ui-react";

interface IBodyWithDateProps extends ICommonStepBodyProps {
  buttonText: string;
  customCheckIfDisabledFunction?: (value: string) => boolean;
  image: string;
}

const BodyWithDate = ({
  qube,
  buttonText,
  updateQube,
  qubePropertyName,
  image,
}: IBodyWithDateProps) => {
  const [dates, setDates] = useState(
    (qube[qubePropertyName] ? qube[qubePropertyName] : []) as IDate[]
  );

  return (
    <>
      <div className="scroll-wrapper">
        <DateComponent dates={dates} setDates={setDates} />
        <Image className="body-image" src={image} />
      </div>
      <Button
        disabled={!dates.length}
        onClick={() =>
          updateQube({ [qubePropertyName]: dates } as Partial<IQube>)
        }
        primary
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BodyWithDate;
