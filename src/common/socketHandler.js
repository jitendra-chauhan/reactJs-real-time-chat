import { socket } from "./socket";

const useSocket = (cb, name = "handler") => {
  const handler = {
    [name]: (r) => cb(r),
  };
  return {
    refresh: () => {
      socket.off("res", handler[name]);
      socket.on("res", handler[name]);
    },
    on: () => socket.on("res", handler[name]),
    off: () => socket.off("res", handler[name]),
  };
};

export default useSocket;
