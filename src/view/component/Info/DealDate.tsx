import styled from 'styled-components';

export const DealDate = () => {

    let date = new Date();
    let standardDate = `(${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}  ${date.getHours()} : ${date.getMinutes()} 기준)`
    return (
        <>
            <DateStyle>{standardDate}</DateStyle>
        </>
    )
}

const DateStyle=styled.span`
    color:grey;
    font-size:11px;
    width:100%;
    margin-left:100px;
`;