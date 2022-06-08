// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //
import React from "react";

import ChatUser from "./chat/ChatUser";

export default function ChatSiteBar(props) {
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              name=""
              className="form-control search"
            />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body contacts_body">
          <ul className="contacts">
            <ChatUser
              usersList={props.usersList}
              openUserChatScreen={props.openUserChatScreen}
              getParamId={props.getParamId}
            />
          </ul>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}
