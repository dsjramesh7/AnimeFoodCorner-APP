import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check online or offline logic
  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });
  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  return onlineStatus;
};

export default useOnlineStatus;
