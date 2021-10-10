import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

function LandingPage(props) {
  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log(response));
  }, []);
  // 최상단 디렉트리부분에서 npm run dev 를 해줘야 proxy 서버도 켜지면서 정상작동
  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('logout failed');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>시작페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
