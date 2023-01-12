import { keyframes } from "styled-components";

const ZoomIn = keyframes`
    0% { opacity: 0;
         transform: scale(0);  }
    100% { opacity: 1;
        transform: scale(1); }
`

export default ZoomIn;