import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    .MuiPaper-root {
        background: ${({ theme }) => theme.cardBackground};
        color: ${({ theme }) => theme.text};
        border-color: ${({ theme }) => theme.cardBorderColor};
    }
    .MuiInputLabel-outlined {
        color: ${({ theme }) => theme.colorLabelInput} !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colorLabelInput} !important;
    }

    .MuiIconButton-label {
        color: ${({ theme }) => theme.backgroundIcon}
    }


  }
  input, select, textarea {
      color: ${({ theme }) => theme.text} !important;

  }
  textarea:focus, input:focus {
    color: ${({ theme }) => theme.text} !important;
  }
  `
