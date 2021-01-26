import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

const theme = {
  cyan: '#43E5E1',
  lightBlue: '#80D0FA',
  darkBlue: '#4EE543',
  purple: '#A355D0',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: ${props => props.theme.cyan};
  color: ${props => props.theme.purple};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gothic A1', sans-serif;
    src: url("/static/GothicA1-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    src: url("/static/NotoSans-Regular.ttf") format("truetype");
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Noto Sans', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: ${theme.purple};
    font-family: 'Gothic A1', sans-serif;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
