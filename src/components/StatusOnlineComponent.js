import useOnlineStatus from "../utils/useOnlineStatus";

const StatusOnlineComponent = () => {
  const internetStatus = useOnlineStatus();

  return <div>{<p>Online Status: {internetStatus ? "🟢" : "🔴"}</p>}</div>;
};
export default StatusOnlineComponent;
