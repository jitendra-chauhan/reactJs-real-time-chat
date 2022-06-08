// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //

import React from "react";

export default function ChatMessage(props) {
  const { message, myId, buddyId } = props;
  
  return (
    <>
      {message?.length
        ? message.map((msg, index) =>
            msg?.from === myId && msg?.to === buddyId ? (
              <div className="d-flex justify-content-end mb-4" key={index}>
                <div className="msg_cotainer_send">
                  {msg.msg}
                  <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt="profile"
                  />
                </div>
              </div>
            ) : msg?.to === myId && msg?.from === buddyId ? (
              <div className="d-flex justify-content-start mb-4" key={index}>
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt="profile"
                  />
                </div>
                <div className="msg_cotainer">
                  {msg.msg}
                  <span className="msg_time">9:00 AM, Today</span>
                </div>
              </div>
            ) : null
          )
        : null}
    </>
  );
}
