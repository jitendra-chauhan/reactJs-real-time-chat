import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Chat.css";
import Navbar from "../components/Navbar";
import ChatSiteBar from "../components/ChatSiteBar";
import ChatBody from "../components/ChatBody";
import { socketConnect, sendEvent } from "../common/socket";
import { socket } from "../common/socket";
import useSocket from "../common/socketHandler";

function Chat() {
  if (
    sessionStorage.getItem("id") === "" ||
    sessionStorage.getItem("id") === null
  ) {
    navigate(`/`);
  }

  const { id } = useParams();
  const getParamId = id;
  console.log("===> id <===", id);
  // setParamId(id);
  const navigate = useNavigate();
  // const history = useHistory();
  const userId = sessionStorage.getItem("id");
  const [getSocket, setSocket] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [msgList, setMsgList] = useState([]);

  const { on, off, refresh } = useSocket((response) => {
    const { en, data } = response.data;
    console.log("===>Event Namee <===", en);
    if (data.flag) {
      switch (en) {
        case "USER_LIST":
          console.log("===> USER_LIST <====", data);
          setUsersList(data.data);
          let sendData = {
            userId: id,
            myId: userId,
            type: "user",
          };
          if (id === userId) {
            sendData.type = "me";
          }
          sendEvent("GET_CHAT", sendData);
          break;
        case "USER_CHAT":
          console.log("===> USER_CHAT <====", data);
          console.log("===> USER_CHAT <=msgList===", msgList);
          // refresh();

          const msgListArray = [...msgList];
          msgListArray.push(data.data);
          console.log("====> msgListArray <====", msgListArray);
          setMsgList(msgListArray);
          break;
        case "GET_CHAT":
          console.log("===> GET_CHAT <====", data);
          // const msgListArray = [...msgList];
          // msgListArray.push(data.data);
          // console.log("====> msgListArray <====", msgListArray);
          // setMsgList([...msgList, data.data]);
          setMsgList(data.data);
          console.log("===> GET_CHAT <=msgList===", msgList);
          break;
        default:
          break;
      }
    }
  });

  useEffect(() => {
    socketConnect((flag) => {
      if (flag) {
        console.log("----> connect <===", flag);
        sendEvent("USER_LIST", { myId: userId });

        // socket.on("res", (response) => {
        //   const { en, data } = response.data;
        //   // console.log("===>Event Namee <===", en);
        //   // if (data.flag) {
        //   // const { on, off, refresh } = useSocket((response) => {
        //   //   switch (en) {
        //   //     case "USER_LIST":
        //   //       console.log("===> USER_LIST <====", data);
        //   //       setUsersList(data.data);
        //   //       let sendData = {
        //   //         userId: id,
        //   //         myId: userId,
        //   //         type: "user",
        //   //       };
        //   //       if (id === userId) {
        //   //         sendData.type = "me";
        //   //       }
        //   //       sendEvent("GET_CHAT", sendData);
        //   //       break;
        //   //     case "USER_CHAT":
        //   //       console.log("===> USER_CHAT <====", data);
        //   //       console.log("===> USER_CHAT <=msgList===", msgList);
        //   //       const msgListArray = [...msgList];
        //   //       msgListArray.push(data.data);
        //   //       console.log("====> msgListArray <====", msgListArray);
        //   //       setMsgList(msgListArray);
        //   //       break;
        //   //     case "GET_CHAT":
        //   //       console.log("===> GET_CHAT <====", data);
        //   //       // const msgListArray = [...msgList];
        //   //       // msgListArray.push(data.data);
        //   //       // console.log("====> msgListArray <====", msgListArray);
        //   //       // setMsgList([...msgList, data.data]);
        //   //       setMsgList(data.data);
        //   //       console.log("===> GET_CHAT <=msgList===", msgList);
        //   //       break;
        //   //     default:
        //   //       break;
        //   //   }
        //   // });
        //   // } else {
        //   //   console.log("===> error On <====", response);
        //   // }
        // });
      } else {
        console.log("11----> connect <===", flag);
      }
      setSocket(flag);
    });
    if (getSocket) {
      refresh();
      return () => off();
    }
  }, [getSocket]);

  useEffect(() => {
    refresh();
  }, [msgList]);

  const toggleMenu = () => {
    console.log("hiii");
    document.getElementById("action_menu").toggle();
  };

  const logOut = () => {
    sessionStorage.setItem("id", "");
    console.log("call ");
  };

  function sendMessage(param) {
    console.log("==> sendMessage <===", param);
    console.log("==> sendMessage <=msgList==", msgList);
    if (param !== "") {
      sendEvent("USER_CHAT", {
        to: id,
        from: userId,
        msg: param,
      });
    }
  }

  function openUserChatScreen(params) {
    navigate(`/Chat/${params._id}`);
    console.log("===> openUserChatScreen <===", params._id);

    let sendData = { userId: params._id, myId: userId, type: "user" };
    if (params._id === userId) {
      sendData.type = "me";
    }

    sendEvent("GET_CHAT", sendData);
    // sendEvent("USER_LIST", {});
  }

  // const openUserChatScreen = () => {
  //   history.push(`/Chat/${params._id}`);
  // };

  return (
    <>
      <Navbar title="Chat Page" />
      <div className="container-fluid h-100">
        {getSocket ? (
          <div className="row justify-content-center h-100">
            <ChatSiteBar
              usersList={usersList}
              openUserChatScreen={openUserChatScreen}
              getParamId={getParamId}
            />
            <ChatBody
              toggle={toggleMenu}
              logOut={logOut}
              message={msgList}
              userId={userId}
              sendMessage={sendMessage}
              usersList={usersList}
              getParamId={getParamId}
            />
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    </>
  );
}

export default Chat;
