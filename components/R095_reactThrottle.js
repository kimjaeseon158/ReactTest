import React from 'react';
import { throttle } from "lodash";
import '../css/new.css';
import { Link } from 'react-router-dom'

const ReactThrottle = () => {
  // const throttleFunc = throttle(() => {
  //   console.log("Throttle API Call");
  // }, 1000);
  
  return (
    <div>
        <section className="sub_wrap" >
            <article className="s_cnt re_1 ct1">
                <div className="li_top">
                    <h2 className="s_tit1" style={{textAlign: "center"}} >회원정보</h2>
                    <form action='/Register' method="post" name="frm">
                        <div className="re1_wrap">
                            <div className="re_cnt ct2">
                                <table className="table_ty1">
                                <tr>
                                        <th>이름</th>
                                        <td>
                                            <input id="pwd_cnf_val" type="password"
                                              />
                                        </td>
                                    </tr>
                                    <tr className="re_email">
                                        <th>이메일</th>
                                        <td>
                                            <input id="email_val" type="text" name="email1"
                                                placeholder=""/>
                                            <span className="e_goll">@</span>
                                            <input id="email_val" type="text" name="email1"
                                                placeholder=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>비밀번호</th>
                                        <td>
                                            <input id="pwd_val" type="password" name="password1"
                                               />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>소속 기관</th>
                                        <td>
                                            <input id="org_val" type="text" name="organization"
                                              />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>전공</th>
                                        <td>
                                            <input id="major_val" type="text" name="specialization"
                                              />
                                        </td>
                                    </tr>
                                    <tr className="tr_tel">
                                        <th>핸드폰</th>
                                        <td>
                                          <input id="phone2_val" name="phone2" max="9999"
                                                maxlength="4" />
                                            <span className="tel_dot">-</span>
                                            <input id="phone2_val" name="phone2" max="9999"
                                                maxlength="4" />
                                            <span className="tel_dot">-</span>
                                            <input id="phone3_val" name="phone3" max="9999"
                                                maxlength="4" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="btn_confirm">
                        <Link to='http://localhost:3000/'><button className="bt_ty bt_ty2 submit_ty1" type="submit">회원정보수정</button></Link>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    </div>
);
}


export default ReactThrottle;