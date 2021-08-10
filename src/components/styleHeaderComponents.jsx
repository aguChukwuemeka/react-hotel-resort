import styled from "styled-components";
import defaultImage from "../images/room-1.jpeg";

const StylesHeader = styled.button`
  min-height: 60vh;
  width: 100%;
  background: url(${(props) => (props.images ? props.images : defaultImage)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StylesHeader;
