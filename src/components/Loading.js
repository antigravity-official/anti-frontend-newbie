import React from 'react';
import ReactLoading from 'react-loading'; // npm i react-loading // https://github.com/fakiolinho/react-loading

const Loading = () => {
    return ( <div>
	<ReactLoading type={'spinningBubbles'} color={'#4284f5'} height={'20%'} width={'20%'} />
    <br></br>
    <div>환율 정보를 불러오는 중입니다 ⋯</div>
    </div>
    )
};

export default Loading;