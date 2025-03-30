import { FunctionComponent } from "react";
import { Input as SemanticInput, InputProps } from "semantic-ui-react";
import styled from "styled-components";

export const Input = styled(SemanticInput)`
  &.ui.input {
    > input {
      width: 100% !important;
      border-radius: 30px !important;
      padding: 0 10px !important;
      height: 40px;
      border: 2px solid ${({ theme }) => theme.input.borderColor} !important;
      &:focus {
        border: 2px solid ${({ theme }) => theme.input.focusedBorderColor} !important;
      }
    }
    &.error > input {
      border: 2px solid ${({ theme }) => theme.input.errorBorderColor} !important;
    }
    &.disabled > input {
      opacity: 0.8;
    }
  }
` as FunctionComponent<InputProps>;
Input.displayName = "UIInput";
