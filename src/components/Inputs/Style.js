import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const FileInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.bRadius};
  background: ${(props) =>
    `linear-gradient(${props.gradientPosition},${
      props.bGradient
        ? `${props.bGradient.color1} ,${props.bGradient.color2},${props.bGradient.color1} ,${props.bGradient.color2} `
        : ""
    })`};

`;
