import { FunctionComponent } from "react";
import { Label as SemanticLabel, LabelProps } from "semantic-ui-react";
import styled from "styled-components";

export const Label = styled(SemanticLabel)`
  &.ui.label {
    height: 25px;
    display: inline-flex;
    flex-wrap: wrap;
    margin: 5px 5px;
    background-color: ${({ theme }) => theme.label.backgroundColor};
    color: ${({ theme }) => theme.label.textColor};
    padding: 7px 15px;
    border-radius: 20px !important;
    &.error {
      background-color: ${({ theme }) => theme.label.error};
    }
  }
` as FunctionComponent<LabelProps>;
Label.displayName = "UILabel";
