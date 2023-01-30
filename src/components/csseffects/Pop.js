import { keyframes } from "styled-components"

const Pop = keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    80% {
      transform: scale(1.07);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `

export default Pop;