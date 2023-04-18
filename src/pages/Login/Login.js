import React from "react";
import './Login.css';

const Login = () => {
  return (
    <div className="loginWrap">
      <div className="loginContainer">
      <h1 className="loginLogo">Instagram</h1>
      <div className="inputBox">
        <input type="text" className="id" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
        <input type="password" className="pw" placeholder="비밀번호"></input>
      </div>
      <button className="loginBtn btnDefault">로그인</button>
      <div className="findPw"><a href="./">비밀번호를 잊으셨나요?</a></div>
      </div>
    </div>
  );
}
export default Login;