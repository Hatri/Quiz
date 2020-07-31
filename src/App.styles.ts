import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/noteBackground.jpg';

export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20 px;
    display: flex; 
    justify-content: center;
}

*{ 
    font-family: 'Catamaran', sans-serif; 
    box-sizing: border-box;

}

`

