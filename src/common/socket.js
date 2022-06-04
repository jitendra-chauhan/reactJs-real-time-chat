import io from "socket.io-client";
import { URL } from "./constants";

let socket;

export const socketConnect = (next) => {
  console.log(process.env);
  console.log("call thi", URL);
  socket = io(URL.SOCKET, { transports: ["websocket"] });

  // Socket connection response handler
  console.log("=22==> connect <===", socket);

  socket.on("disconnect", (connect) => {
    console.log("===disconnect> connect <===", connect);
    next(socket.connected);
  });
  socket.on("connect", () => {
    console.log("===> connect <===");
    next(socket.connected);
  });
  //   socket.emit("req", { en: "USER_LIST", data: {} });
  //   console.log("socket.connected ::", socket.connected);
  //   console.log("socket.disconnected ::", socket.disconnected);
  //   next(socket.connected);

  // Socket response handler
  socket.on("res", (response) => {
    console.log("res ==> ", response);
    const { en, data } = response.data;
    console.log("===>Event Namee <=1==",en);
    console.log("==> data <===", data);
    if (data.flag) {
      switch (en) {
        // case "USER_LIST":
        //   console.log("===> USER_LIST <====", data);
        //   break;
        default:
          console.log();
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
