import Color from "color";

export interface ITheme {
  button: {
    primary: IButtonColors;
    secondary: IButtonColors;
  };
  input: {
    borderColor: string;
    focusedBorderColor: string;
  };
  label: {
    backgroundColor: string;
    textColor: string;
    error: string;
  };
  colors: {
    primary: string;
  };
}

export interface IButtonColors {
  color: string;
  backgroundColor: (ratio?: number) => string;
  borderColor: (ratio?: number) => string;
  disabledColor: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
}

export interface IColors {
  primary: string;
  negative: string;
  warning: string;
  white: string;
  silver: string;
  blackGray: string;
  green: string;
}

const defaultColors = {
  primary: "#003CB0",
  white: "#fff",
  silver: "#E5E5E6",
};

const darkenColor = (color: string, ration: number) =>
  Color(color).darken(ration).toString();

export const loadTheme = (colors: Partial<IColors>): ITheme => {
  const { white, primary, silver } = { ...defaultColors, ...colors };

  return {
    button: {
      primary: {
        color: white,
        backgroundColor: (ratio = 0) => darkenColor(primary, ratio),
        borderColor: (ratio = 0) => darkenColor(primary, ratio),
        disabledColor: primary,
        disabledBackgroundColor: white,
        disabledBorderColor: primary,
      },
      secondary: {
        color: primary,
        backgroundColor: (ratio = 0) => darkenColor(white, ratio),
        borderColor: (ratio = 0) => darkenColor(primary, ratio),
        disabledColor: primary,
        disabledBackgroundColor: white,
        disabledBorderColor: primary,
      },
    },
    input: {
      borderColor: silver,
      focusedBorderColor: primary,
    },
    label: {
      backgroundColor: primary,
      textColor: white,
      error: silver,
    },
    colors: {
      primary,
    },
  };
};
