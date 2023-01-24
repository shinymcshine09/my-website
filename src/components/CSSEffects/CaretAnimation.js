import { keyframes } from "styled-components"

const CaretAnimation = keyframes`
    0% {
        border-right-color: transparent;
    }
    100% {
        border-right-color: orange;
    }
`

export default CaretAnimation;