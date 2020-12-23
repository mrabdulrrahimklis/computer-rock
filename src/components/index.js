import styled from 'styled-components';

export const Layout = styled.div`
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  background: ${props => props.background ? props.background : "white"};
  display: ${props => props.display ? props.display : ""};
  align-items: ${props => props.alignItems ? props.alignItems : ""};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  margin: ${props => props.margin ? props.margin : ""};
  padding: ${props => props.padding ? props.padding : ""};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : ""};
  border: ${props => props.border ? props.border : ""};
  min-width: ${props => props.minWidth ? props.minWidth : ""};
  max-height: ${props => props.maxHeight ? props.maxHeight : ""};
  z-index: ${props => props.zIndex ? props.zIndex : ""};
  position: ${props => props.position ? props.position : ""};
  flex: ${props => props.flex ? props.flex : ""};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : ""};
  font-size: ${props => props.fontSize ? props.fontSize : ""};
`;