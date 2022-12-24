import styled from "styled-components";

export const Style = {
  Container: styled.main`
    width: var(--width);
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    padding: 100px 0px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15vh;

    h1 {
      font-family: 'DM Serif Text', serif;
      font-size: 45px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 25px;
      max-width: 55%;
      margin-bottom: 15px;
      text-decoration: underline;
    }

    span {
      font-size: 20px;
      max-width: 65%;
    }
  `
}