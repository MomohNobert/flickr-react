import styled from "styled-components";

export const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    z-index: 25;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;
    display: flex;
    align-items: center;
  `,
  CloseContainer: styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
  `,
  ContentContainer: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 30;
    margin: 75px auto auto;
    width: var(--width);
    max-width: var(--max-width);

    div {
      z-index: 30;
    }

    svg.close-modal-svg {
      cursor: pointer;
      margin-left: 10px;
      z-index: 30;
      opacity: 0.75;
      transition: opacity 0.25s linear;

      &:hover {
        opacity: 1;
      }

      @media (max-width: 768px) {
        margin-bottom: 25px;
      }
    }
  `,
};
