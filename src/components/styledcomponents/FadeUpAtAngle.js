import { keyframes } from "styled-components";

const FadeUpAtAngle = keyframes`
    0% { opacity: 0; 
         /* -webkit-transform: rotate(2deg); */
         -webkit-transform: translateY(50%); }
    100% { opacity: 1; }
           /* -webkit-transform: rotate(2deg); */
`

export default FadeUpAtAngle;