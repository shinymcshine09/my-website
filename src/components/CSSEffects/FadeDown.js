import { keyframes } from "styled-components";

const FadeDown = keyframes`
    0% { 
        opacity: 0; 
        -webkit-transform: translateY(-100%); 
    }
    100% { 
        opacity: 1;
    }
`

export default FadeDown;