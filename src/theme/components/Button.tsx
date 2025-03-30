import React, { FunctionComponent } from "react";
import { Button as SemanticButton, ButtonProps } from "semantic-ui-react";
import { IButtonColors } from "../Theme";
import styled from "styled-components";

const getButtonStyles = (className: string, colors: IButtonColors) => `
  &.ui.button.${className} {
    color: ${colors.color};
    background-color: ${colors.backgroundColor()};
    border: 2px solid ${colors.borderColor()};
  }
  &.ui.button.disabled.${className}, &.ui.button.disabled.${className}:hover, &.ui.button.disabled.${className}:focus {
    color: ${colors.disabledColor};
    background-color: ${colors.disabledBackgroundColor};
    border: 2px solid ${colors.disabledBorderColor};
  }
  &.ui.button.${className}:focus {
    color: ${colors.color};
    background-color: ${colors.backgroundColor()};
    border: 2px solid ${colors.borderColor(0.2)};
    }
  }
  &.ui.button.${className}:hover {
    color: ${colors.color};
    background-color: ${colors.backgroundColor(0.1)};
  }
`;

const FlexButton = (props: ButtonProps) => {
  const { content, children, className, ...rest } = props;
  const classes = content || children ? `${className} flex-padding` : className;
  return (
    <SemanticButton {...rest} className={classes}>
      {content || children ? <div>{content || children}</div> : null}
    </SemanticButton>
  );
};

const StyledButton = styled(FlexButton)`
  &.ui.button {
    border-radius: 30px !important;
    box-shadow: none;
    margin: 0 10px 0 0;
    height: 40px;
    &.flex-padding {
      padding: 0;
      display: inline-flex;
      &:before, &:after {
        content: '';
        display: block;
        width: 1.5em;
        min-width: 10px;
        flex-shrink: 1000000;
      }
      > div {
        padding: .78571429em 0;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        flex-grow: 1;
      }
    }
  }
  &.ui.button:last-child {
    margin: 0;
  }
  &.ui.button, &.ui.button:hover:disabled, &.ui.button.disabled:hover, &.ui.button.disabled:focus {
    border-radius: 3px;
    transition: background-color 100ms, border-color 100ms, opacity: 100ms;
    color: ${(props) => props.theme.button.primary.color};
    background-color: ${(props) =>
      props.theme.button.primary.backgroundColor()};
    border: 2px solid ${(props) => props.theme.button.primary.borderColor()};
  }
  &.ui.button:focus {
    color: ${(props) => props.theme.button.primary.color};
    background-color: ${(props) =>
      props.theme.button.primary.backgroundColor()};
    border: 2px solid ${(props) => props.theme.button.primary.borderColor(0.2)};
  }
  &.ui.button:hover {
    color: ${(props) => props.theme.button.primary.color};
    background-color: ${(props) =>
      props.theme.button.primary.backgroundColor(0.1)};
  }
  &.ui.button.disabled {
    pointer-events: auto !important; /* Need to override semantic-ui in order to support disabled buttons with tooltips. */
  }
  &.ui.circular.button {
    border-radius: 10em !important; /* Enforce the border-radius for circular buttons when disabled */
  }
  ${(props) => getButtonStyles("primary", props.theme.button.primary)}
  ${(props) => getButtonStyles("secondary", props.theme.button.secondary)}
` as FunctionComponent<ButtonProps>;

export const Button = (props: ButtonProps) => {
  const { disabled, onClick, className, children, type, ...rest } = props;
  const classes = disabled ? `${className || ""} disabled` : className;
  const isDisabled = classes && classes.split(" ").includes("disabled");
  const typeOverride = isDisabled ? "button" : type;

  return (
    <StyledButton
      onClick={isDisabled ? () => {} : onClick}
      type={typeOverride}
      className={classes}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
Button.displayName = "UIButton";
