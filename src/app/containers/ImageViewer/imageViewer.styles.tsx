import styled from "styled-components";

export const Style = {
  Container: styled.section`
    width: 100%;
    height: 85vh;
    z-index: 20;

    article.image-viewer-display {
      display: flex;
      height: 75%;
      align-items: center;
      justify-content: space-between;

      figure {
        width: 85%;
        display: grid;
        place-items: center;

        figcaption {
          display: none;
        }

        img {
          min-width: 75%;
          max-height: 75%;
        }
      }
    }

    article.image-viewer-preview {
      display: flex;
      height: 20%;
      display: flex;
      justify-content: space-between;

      figure {
        max-height: 100%;

        img {
          max-height: 100%;
        }
      }
    }
  `
}