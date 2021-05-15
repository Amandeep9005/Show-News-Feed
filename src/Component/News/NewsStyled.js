import styled from "styled-components";

const newsStyle = {
  float: "left",
};

const aboutStyle = {
  float: "right",
};

const HeaderBar = styled.div`
  max-width: 80%;
  margin-left: 10%;
`;

const PaginationBar = styled.div`
  margin-left: 50%;
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

const aboutStyles = {
  marginLeft: "93%",
};

export {
  newsStyle,
  aboutStyles,
  HeaderBar,
  PaginationBar,
  styleButton,
  headerStyles,
};
