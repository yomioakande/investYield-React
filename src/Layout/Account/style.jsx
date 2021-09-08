import styled from "styled-components";

const Style = styled.div`

li{
    margin:0 !important;
}
  .nav-pills {
    border-bottom: 1px solid #dddddd;
  }
  .nav-pills .nav-link.active,
  .nav-pills .nav-link {
    color: #a8a8a8 !important;
    background-color: transparent;
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link.active {
    background-color: transparent;
    color: #08b29b !important;
    border-bottom: 2px solid #96a5a3;
  }
  .nav-pills .nav-link {
    border-radius: unset !important;
  }
`;

export default Style;
