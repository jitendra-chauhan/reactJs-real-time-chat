import React from "react";

export default function ChatMessage(props) {
  const { message, myId, buddyId } = props;
  console.log("----> message <====", message);
  console.log("----> myId <====", myId);
  let body = "";

  function myMsg(msg) {
    return (
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
        <div className="msg_cotainer">
          Hi, how are you samim?
          <span className="msg_time">8:40 AM, Today</span>
        </div>
      </div>
    );
  }

  function sendMsg(msg) {
    return (
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          Hi Khalid i am good tnx how about you?
          <span className="msg_time_send">8:55 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
      </div>
    );
  }
  //   if (message && message.length) {
  //     message.map((msg, index) => {
  //       if (msg !== "" && msg.to === myId) {
  //         console.log("--> true to<--",msg.msg);
  //         // body += myMsg();
  //       } else if (msg !== "" && msg.from === myId) {
  //         // body += sendMsg();
  //         console.log("--> true from<--",msg.msg);
  //       }
  //     });
  //   }

  return (
    <>
      {/* <body /> */}

      {message?.length
        ? message.map((msg, index) =>
            msg?.from === myId && msg?.to === buddyId ? (
              <div className="d-flex justify-content-end mb-4" key={index}>
                <div className="msg_cotainer_send">
                  {msg.msg}
                  {/* Hi Khalid i am good tnx how about you? */}
                  <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
              </div>
            ) : msg?.to === myId && msg?.from === buddyId ? (
              <div className="d-flex justify-content-start mb-4" key={index}>
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
                <div className="msg_cotainer">
                  {msg.msg}
                  {/* I am good too, thank you for your chat template */}
                  <span className="msg_time">9:00 AM, Today</span>
                </div>
              </div>
            ) : null
          )
        : null}
    </>
  );
}
