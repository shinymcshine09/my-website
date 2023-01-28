import { keyframes } from "styled-components";

const FadeLeft = keyframes`
    0% { 
        opacity: 0; 
        -webkit-transform: translateX(50%); 
    }
    100% { 
        opacity: .95; 
    }
`

export default FadeLeft;
