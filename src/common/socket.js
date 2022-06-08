import io from "socket.io-client";
import { URL } from "./constants";

let socket;

// handle socket connection
export const socketConnect = (next) => {
  console.log(process.env);
  console.log("call this", URL);
  socket = io(URL.SOCKET, { transports: ["websocket"] });

  // Socket connection response handler

  socket.on("disconnect", (connect) => {
    next(socket.connected);
  });
  socket.on("connect", () => {
    console.log("===> connect <===");
    next(socket.connected);
  });

  // Socket response handler
  socket.on("res", (response) => {
    console.log("res ==> ", response);
    const { en, data } = response.data;
    console.log("===>Event Namee <=1==",en);
    console.log("==> data <===", data);
    if (data.flag) {
      switch (en) {
        default:
          console.log('default:::');
          break;
      }
    } else {
      console.log("===> error On <====", response);
    }
  });
};

const requestHandler = (en, data) => {
  console.log("====>>>>", en, data);
  return { en, data };
};

export const sendEvent = (en, data) => {
  if (socket) socket.emit("req", requestHandler(en, data));
};

export { socket };
