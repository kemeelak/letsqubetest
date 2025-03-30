import { FunctionComponent } from "react";
import { TextArea as SemanticTextArea, TextAreaProps } from "semantic-ui-react";
import styled from "styled-components";

export const TextArea = styled(SemanticTextArea)`
  width: 100% !important;
  border-radius: 5px;
  padding: 0 10px !important;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.input.borderColor} !important;
  &:focus {
    border: 2px solid ${({ theme }) => theme.input.focusedBorderColor} !important;
  }
` as FunctionComponent<TextAreaProps>;
TextArea.displayName = "UITextArea";
