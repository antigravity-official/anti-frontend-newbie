import styled from 'styled-components';

// 바탕 색깔
const LoadingBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #A4A4A4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 흰색 로딩 박스
const WhiteBox = styled.div`
    .loading-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`

const Loading = () => {
    return (
        <LoadingBlock>
            <WhiteBox>
                <div className='loading-area'>
                    Loading...
                </div>
                </WhiteBox>
        </LoadingBlock>
    );
};

export default Loading;