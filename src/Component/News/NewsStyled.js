import styled from "styled-components";

const PaginationBar = styled.div`
  display: flex;
  justify-content: center;
`;

const styleButton = {
  marginLeft: "2%",
};

const headerStyles = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  height: "30px",
  justifyContent: "space-between",
  paddingLeft: "20px",
  paddingRight: "20px",
};

export { PaginationBar, styleButton, headerStyles };
