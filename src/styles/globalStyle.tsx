import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyles = createGlobalStyle`
    

    a{
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 14px;
    }
    body{
        font-family: 'Pretendard', sans-serif;
    }
    img{
        width: 100%;
        height: auto;
    }
    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
       border: none;
    }
    li {
        list-style: none;
    }

`;
export default GlobalStyles;
