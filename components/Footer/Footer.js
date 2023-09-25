import React, { Component } from 'react';
import '../../css/new.css'

const Footer=(props)=> {
    return (
        <footer className="footer">
            <ul>
              <li className="priv"><a href="src/September/between21To31/App0921/components/Header/Footer#n">개인정보처리방침</a></li>
              <li className="em_bt"><a href="src/September/between21To31/App0921/components/Header/Footer#n">이메일주소무단수집거부</a></li>
            </ul>
            <div className="ft_p">
              <span>주소 : 서울시 구로구 항동</span>
              <span>Tel : 02-1234-5678</span>
            </div>
            <p>COPYRIGHT &copy; React 200, ALL RIGHTS RESERVED.{props.name}</p>
        </footer>
    );
  }

export default Footer;