import React, { useState } from "react";
import ChatMessage from "./chat/ChatMessage";

export default function ChatBody(props) {
  const [textarea, setTextarea] = useState("");

  const sendMessage = () => {
    if (textarea !== "") {
      props.sendMessage(textarea);
      setTextarea("");
    }
  };
  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img"
              />
              <span className="online_icon"></span>
            </div>
            <div className="user_info">
              <span>
                {/* Chat with Khalidfff */}

                {props.usersList?.length
                  ? `Chat with ` +
                    props.usersList.filter((d) => d._id === props.getParamId)[0]
                      .username
                  : `testing Name`}
              </span>
              <p>1767 Messages</p>
            </div>
            <div className="video_cam">
              <span>
                <i className="fas fa-video"></i>
              </span>
              <span>
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
          <span id="action_menu_btn" onClick={props.toggle}>
            <i className="fas fa-ellipsis-v"></i>
          </span>
          <div className="action_menu" id="action_menu">
            <ul>
              <li>
                <i className="fas fa-user-circle"></i> View profile
              </li>
              <li>
                <i className="fas fa-users"></i> Add to close friends
              </li>
              <li>
                <i className="fas fa-plus"></i> Add to group
              </li>
              <li>
                <i className="fas fa-ban"></i> Block
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body msg_card_body">
          <ChatMessage
            message={props.message}
            myId={props.userId}
            buddyId={props.getParamId}
          />
          {/* <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                </div>
            </div> */}
          {/* <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
            </div> */}
          {/* <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                </div>
            </div> */}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-append">
              <span className="input-group-text attach_btn">
                <i className="fas fa-paperclip"></i>
              </span>
            </div>
            <textarea
              name=""
              className="form-control type_msg"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
              placeholder="Type your message..."
            ></textarea>
            <div className="input-group-append" onClick={() => sendMessage()}>
              <span className="input-group-text send_btn">
                <i className="fas fa-location-arrow"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
