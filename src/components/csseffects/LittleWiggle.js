import { keyframes } from "styled-components";

const LittleWiggle = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(0eg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
`

export default LittleWiggle;