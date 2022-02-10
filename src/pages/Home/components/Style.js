import styled from "@emotion/styled";
import DraftSvg from "../../../assets/Draft.svg";

export const DraftParent = styled.div`
  width: 472px;
  height: 551px;
  background-image: url(${DraftSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const DraftContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PdfParent = styled.div`
  width: 552px;
  height: 551px;
  border: 5px dashed #92bec3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
