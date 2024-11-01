import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Oops!!!!!!!!!!!!</h2>
      <h2>Something Went Wrong</h2>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  );
};

export default Error;
