import logo from './logo.svg';
import './App.css';
import ss1 from './ss1.jpg';
import s5 from './s5.jpg';

import s4 from './s4.jpeg';
import s8 from './s8.jpg';
import s10 from './s10.jpg';
import s11 from './s11.jpg';
import first from './first.png';
import second from './second.png';
import message from './message.png';
import attach from './attach.png';
import smily from './smily.png';






import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';

function App() {
  return (

    <div class="container">
      <div class="subcontainer"></div>
      <div class="container1">

        <div class="leftside-content">
          <div class="leftside">
            <div class="firstuser-icon">
              <UserOutlined style={{
                color: "gray", fontSize: "30px",
                border: "1px solid gray",
                borderRadius: "50%", position: "relative", top: "15px", left: "5px"
              }} />
            </div>
            <div class="msg-ellipse">
              <img src={message} class="message" />   <EllipsisOutlined style={{ fontSize: "30px", color: "gray", transform: "rotate(90deg)", paddingLeft: "25px" }} />

            </div>
          </div>
          <div class="searchicon">
            <SearchOutlined style={{
              fontSize: "22px", color: "black", position: "relative",
              left: "28px",
              top: "10px",
            }} />

            <p class="searchicon-text">Search or start new chat</p>

          </div>
          <div class="scroll">
            <div class="imgdiv">
              <img src={ss1} class="imag" />
              <div class="imgcenter-text">
                <h4>Vignesh</h4>
                <p style={{ color: "#80d4a3" }}>typing...</p>
              </div>
              <div class="imgrightside-text">
                <p>02:01</p>
              </div>

            </div>
            <div class="imgdiv one">
              <img src={s5} class="imag" />
              <div class="imgcenter-text">
                <h4>Susmitha</h4>
                <p>in box top n center</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>

            <div class="imgdiv one">
              <UserOutlined style={{
                color: "#ffffff", fontSize: "55px", backgroundColor: "#dfe5e7",
                border: "1px solid #dfe5e7",
                borderRadius: "50%", height: "60px", width: "60px", marginTop: "10px", marginLeft: "10px"
              }} />
              <div class="imgcenter-text">
                <h4>Saranya</h4>
                <p style={{ color: "gray" }}>k</p>
              </div>
              <div class="imgrightside-text">
                <p >yesterday</p>
              </div>

            </div>
            <div class="imgdiv one">
              <img src={s10} class="imag" />
              <div class="imgcenter-text">
                <h4>Somasundaram</h4>
                <p>at working....</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s8} class="imag" />
              <div class="imgcenter-text">
                <h4>Prisa Varsini</h4>
                <p><CheckOutlined style={{ color: "blue" }} /><CheckOutlined style={{ color: "blue", position: "relative", right: "9px", top: "1px" }} />Aram se</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>Monday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s4} class="imag" />
              <div class="imgcenter-text">
                <h4>Hariharan</h4>
                <p>k</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>Friday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s11} class="imag" />
              <div class="imgcenter-text">
                <h4>Ramesh Kumar</h4>
                <p>work at home.</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>Monday</p>
              </div>

            </div>
            <div class="imgdiv one">
              <img src={s5} class="imag" />
              <div class="imgcenter-text">
                <h4>Chintu Voda</h4>
                <p>in box top n center</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s5} class="imag" />
              <div class="imgcenter-text">
                <h4>Chintu Voda</h4>
                <p>in box top n center</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s5} class="imag" />
              <div class="imgcenter-text">
                <h4>Chintu Voda</h4>
                <p>in box top n center</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv one">
              <img src={s5} class="imag" />
              <div class="imgcenter-text">
                <h4>Chintu Voda</h4>
                <p>in box top n center</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>

          </div>






          <div class="sidediv">

            <div class="sidedicone"></div>

          </div>
        </div>
        <div class="rightside">
          <div class="imgdiv-first">
            <img src={ss1} class="imagfirst" />
            <div class="imgcenterfirst-text">
              <h4>Swathi-TMN</h4>
              <p style={{ color: "gray" }}>typing...</p>
            </div>
            <div class="leftside-icon">
              <img src={attach} class="attach-icon" />  <EllipsisOutlined style={{ fontSize: "30px", color: "gray", transform: "rotate(90deg)", paddingLeft: "25px" }} />
            </div>
          </div>
          <div class="msgcontent">
            <p>22 JANUARY 2015</p>
          </div>
          <div class="msgcontent1">
            <p>Hey! Have you seen whatsapp web feature?</p>
            <p style={{ paddingLeft: "221px", lineHeight: "1px" }}>02.00<CheckOutlined style={{ color: "blue" }} /><CheckOutlined style={{ color: "blue", position: "relative", right: "9px", top: "1px" }} /></p>
          </div>
          <div class="msgcontent2">
            <p>Yeah....Awsmmmmmm <img src={first} class="smily" /> <img src={first} class="smily" /> <img src={second} class="smily" /></p>
            <div class="date2">
              <p>02:01</p>
            </div>
          </div>
          <div class="msgcontent3">
            <p>Find more details on <span style={{ color: "skyblue", textDecoration: "underline" }}>https://w3schools.com</span>,I have just published an article about it.</p>
            <div class="date3">
              <p>02:01</p>
            </div>
          </div>
          <div class="simly-gray">
            <img src={smily} class="smily1" />
            <div class="bottom-center">
              <p>Enter the message</p>
            </div>
            <div class="mic-icon">
              <AudioOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default App;
