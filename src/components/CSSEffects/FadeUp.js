import { keyframes } from "styled-components";

const FadeUp = keyframes`
    0% { 
        opacity: 0; 
        -webkit-transform: translateY(50%); 
    }
    100% { 
        opacity: .95; 
    }
`

export default FadeUp;