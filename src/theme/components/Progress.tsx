import { FunctionComponent } from "react";
import { Progress as SemanticProgress, ProgressProps } from "semantic-ui-react";
import styled from "styled-components";

export const Progress = styled(SemanticProgress)`
  &.ui.progress {
    height: 10px;
    background-color: #99b1df;
    .bar {
      height: 10px;
      background-color: #003cb0;
    }
    &.null {
      .bar {
        display: none;
      }
    }
  }
` as FunctionComponent<ProgressProps>;
Progress.displayName = "UIProgress";
