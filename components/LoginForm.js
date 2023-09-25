import React, { Component,  } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import '../css/new.css'
import ReactThrottle from './R095_reactThrottle';

const LoginForm =()=> {
    // const useNavigate =(e)=>{
    //     e.preventDefault();
    //     changeMode
    // }
        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" />
                </span>LOGIN</h3>
                <div className="log_box">
                    <form>
                    <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2">
                            <img src={require("../img/main/m_log_i2.png")} alt="" />
                        </span>
                        <input type="password" placeholder="비밀번호" />
                    </div>
                    <ul className="af">
                        <li><Link to={'/Register'}>회원가입</Link></li>
                        <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <Link to='/ReactThrottle'><button className="s_bt" type="button">로그인</button></Link>
                    </form>
                </div>
                </div>   
            </section>
        
        );
    }

export default LoginForm;