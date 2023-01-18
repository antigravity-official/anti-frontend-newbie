// 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가
// css로 꾸미기
import React from 'react';

class IndicatorView extends React.Component{
  state = {
    Loading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({Loading: false});
    }, 2000);
  }
  render() {
    return <div>{this.state.Loading ? "로딩중입니다..." : null}
   
    </div>;
  }
}


export default IndicatorView;