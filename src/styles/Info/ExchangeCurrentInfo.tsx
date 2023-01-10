import styled from 'styled-components';

export const CurrentPrice =styled.div`
    border:1px solid grey;
    box-shadow: 1px 1px 1px 0;
    height:50px;
    margin:10px 0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Unit = styled.span`
    font-size:13px;
    font-weight:bold;
    margin:0 10px;
`;

export const DetailBtn = styled.button`
    border:0;
    width:100px;
    height:60px;
    position:absolute;
    bottom:0;
    left:110px;
    &:hover {
        background-color :#6E6ED7;
        color:white;
    }
`;