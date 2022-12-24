import styled from "styled-components";

export const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: var(--width);
    max-width: var(--max-width);
    margin-bottom: 75px;

    h2 {
      font-family: 'DM Serif Text', serif;
      font-size: 25px;
      margin-bottom: 7px;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;

    }

    article.gallery-preview-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    article.gallery-preview-content {
      height: 300px;
      margin-top: 15px;
      display: flex;
      flex-wrap: nowrap;
    }
  `
}