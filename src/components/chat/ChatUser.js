import React from "react";

export default function ChatUser(props) {
  const { usersList, getParamId } = props;
  return (
    <>
      {usersList && usersList.length
        ? usersList.map((user, index) => (
            <li
              key={index}
              className={user?._id === getParamId ? "active" : "null"}
            >
              <div
                className="d-flex bd-highlight"
                onClick={() => props.openUserChatScreen(user)}
              >
                <div className="img_cont">
                  <img
                    // src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img"
                  />
                  <span className="online_icon"></span>
                </div>
                <div className="user_info">
                  <span>{user.username}</span>
                  <p>{user.username} is online</p>
                </div>
              </div>
            </li>
          ))
        : null}
    </>
  );
}
