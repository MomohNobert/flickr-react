import styled from "styled-components";

export const Style = {
  Container: styled.div`
    display: flex;
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 10px;
      border-radius: 50%;
      border: 0.5px solid rgba(0,0,0,0.4);
      display: grid;
      place-items: center;
      background-color: white;
      transition: border 0.2s linear;

      svg {
        height: 15px;
        width: 15px;
        transition: scale 0.2s linear;
      }

      &:hover {
        border: 0.5px solid black;
        svg {
          scale: 1.1;
        }
      }
    }
  `
}