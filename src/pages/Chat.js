// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Chat.css";
import Navbar from "../components/Navbar";
import ChatSiteBar from "../components/ChatSiteBar";
import ChatBody from "../components/ChatBody";
import { socketConnect, sendEvent } from "../common/socket";
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

  const navigate = useNavigate();
  const userId = sessionStorage.getItem("id");
  const [getSocket, setSocket] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [msgList, setMsgList] = useState([]);

  const { on, off, refresh } = useSocket((response) => {
    const { en, data } = response.data;

    if (data.flag) {
      switch (en) {
        case "USER_LIST":
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
          const msgListArray = [...msgList];
          msgListArray.push(data.data);

          setMsgList(msgListArray);
          break;
        case "GET_CHAT":
          setMsgList(data.data);

          break;
        default:
          break;
      }
    }
  });

  useEffect(() => {
    socketConnect((flag) => {
      if (flag) {
        sendEvent("USER_LIST", { myId: userId });
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
    document.getElementById("action_menu").toggle();
  };

  const logOut = () => {
    sessionStorage.setItem("id", "");
  };

  function sendMessage(param) {
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

    let sendData = { userId: params._id, myId: userId, type: "user" };
    if (params._id === userId) {
      sendData.type = "me";
    }

    sendEvent("GET_CHAT", sendData);
  }

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
