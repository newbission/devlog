import React from 'react';
import { useRouteError, useNavigate, Link,  } from 'react-router-dom';

const ErrorPage = ({ code }) => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id='error-page'>
      <h1>잘못된 접근입니다.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Link to="/">홈</Link>&nbsp;
        <Link onClick={() => navigate(-1)}>뒤로가기</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
