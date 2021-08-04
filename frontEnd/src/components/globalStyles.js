import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    .registration__first-row__avatar__wrapper-div {
        border-color: ${({ theme }) => theme.thirdColor};
    }

    .registation .MuiSvgIcon-root {
        color: ${({ theme }) => theme.text} !important;
    }

    .login .MuiSvgIcon-root {
        color: ${({ theme }) => theme.text} !important;
    }

    .MuiSvgIcon-root {
        color: ${({ theme }) => theme.textFieldBorder};
    }

    .MuiPaper-root {
        background: ${({ theme }) => theme.cardBackground};
        color: ${({ theme }) => theme.text};
        border-color: ${({ theme }) => theme.cardBorderColor};
    }
    .MuiInputLabel-outlined {
        color: ${({ theme }) => theme.text} !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colorLabelInput} !important;
    }

    
    
    .MuiInputLabel-formControl, .Mui-focused {
        color: ${({ theme }) => theme.text} !important;
    }

    .MuiInput-input {
        color: ${({ theme }) => theme.text} !important;
        border-bottom: 1px solid ${({ theme }) => theme.textFieldBorder} !important;
    }


    .MuiInput-underline:after {
        border-bottom: 1px solid ${({ theme }) => theme.textFieldBorder} !important;
    }

    .MuiInput-input:after {
        color: white !important;
        background: white !important;
    }


  }
  input, select, textarea {
      color: ${({ theme }) => theme.text} !important;

  }
  textarea:focus, input:focus {
    color: ${({ theme }) => theme.text} !important;
  }
  `
