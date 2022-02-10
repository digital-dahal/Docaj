import styled from "@emotion/styled";
import "@fontsource/roboto";
import { keyframes } from "@emotion/react";
const chageColor = keyframes`
    0%{
        background-position:0% 50%;
    }
    25%{
        background-position:0% 100%;
    }
    50%{
        background-position:100% 100%;
    }
    75%{
        background-position:100% 50%;
    }
    100%{
        background-position:100% 0%;
    }
    `;
const AnimatingText = styled.p`
  transform: scale(0.9) translateZ(0);
  filter: blur(0.5px);
  font-family: ${(props) => props.fontFamily ?? "Roboto"};
  font-weight: bold;
  font-size: ${(props) => props.fontSize ?? "1rem"};
  background: linear-gradient(to bottom, #df4f4f, #da19a4, #df4f4f, #da19a4);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: 200% 200%;
  animation: ${chageColor} 1s linear infinite;
  letter-spacing: ${(props) => props.letterSpacing ?? "0"};
`;

export default AnimatingText;
