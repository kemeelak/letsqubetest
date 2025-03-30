import React, { useState } from "react";
import { Button } from "../../../../theme/components";
import { IQube, ICommonStepBodyProps } from "..";
import { Image } from "semantic-ui-react";
import { parseEmails } from "../../../../utils/parseEmails";
import { isEmailValid } from "../../../../utils/isEmailValid";
import { GuestsComponent } from "../../../../theme/components/GuestsComponent";

interface IBodyWhatToBringProps extends ICommonStepBodyProps {
  buttonText: string;
  customCheckIfDisabledFunction?: (value: string) => boolean;
  image: string;
}

const BodyGuests = ({
  qube,
  buttonText,
  updateQube,
  qubePropertyName,
  image,
}: IBodyWhatToBringProps) => {
  const valueFromQube: string[] = qube[qubePropertyName]
    ? (qube[qubePropertyName] as string[])
    : [];
  const [emailsString, setEmailsString] = useState(
    valueFromQube ? valueFromQube.join(" ") : ""
  );

  const isOneValidEmailPresent = () => {
    let result = false;
    parseEmails(emailsString).forEach((email, i) => {
      if (email && isEmailValid(email)) {
        result = true;
      }
    });
    return result;
  };

  // TODO: remove this check after Corona
  const isLessThanTenGuests = () => {
    let count = 0;
    parseEmails(emailsString).forEach((email, i) => {
      if (email && isEmailValid(email)) {
        count++;
      }
    });
    return count < 10;
  };

  const onSubmitClick = () => {
    const emails = emailsString.split(" ");
    updateQube({
      [qubePropertyName]: emails.filter((email) => email.length),
    } as Partial<IQube>);
  };

  return (
    <>
      <div className="scroll-wrapper">
        <GuestsComponent
          emailsString={emailsString}
          setEmailsString={setEmailsString}
        />
        <Image className="body-image" src={image} />
      </div>
      <Button
        disabled={!isOneValidEmailPresent() || !isLessThanTenGuests()}
        onClick={() => onSubmitClick()}
        primary
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BodyGuests;
