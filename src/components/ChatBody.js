// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //
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
                alt="profile"
              />
              <span className="online_icon"></span>
            </div>
            <div className="user_info">
              <span>
                {props.usersList?.length
                  ? `Chat with ` +
                    props.usersList.filter((d) => d._id === props.getParamId)[0]
                      .username
                  : `testing Name`}
              </span>
              <p>1767 Messages</p>
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
