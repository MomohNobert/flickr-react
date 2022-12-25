import styled from "styled-components";

type Props = {
  size: number,
}

export const Style = {
  Container: styled.section`
    height: ${({ size }: Props) => `${size + 45}px`};
    margin-right: 12.5px;

    article {
      margin-top: 10px;
      text-align: right;

      p {
        font-size: 15px;

        span {
          font-size: 10px;
        }
      }
    }

    figure {
      height: ${({ size }: Props) => `${size}px`};
      width: ${({ size }: Props) => `${size}px`};
      border-radius: 8px;
      min-width: ${({ size }: Props) => `${size}px`};
      display: grid;
      place-items: center;
      overflow: hidden;
      position: relative;
      transition: border-radius 0.4s linear;
      border: 0.5px solid rgba(0,0,0,0.2);

      figcaption {
        display: none;
      }

      img {
        position: absolute;
        display: grid;
        min-height: 100%;
        place-items: center;
        cursor: pointer;
        transition: scale 0.4s linear;

        &:hover {
          scale: 1.05;
        }
      }

      &:hover {
        border-radius: 0px;
      }
    }


  `
}