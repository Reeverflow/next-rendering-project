import { useState } from "react";
const User = (props) => {
  const [showState, setShowState] = useState(false);
  const { u } = props;
  return (
    <>
      <h3
        className={`text-red-300 hover:bg-stone-400 transition-all duration-200 ${
          showState ? `bg-stone-400` : `null`
        }`}
        onClick={() => {
          setShowState(!showState);
        }}
      >
        {u.name}
      </h3>
      {showState && (
        <ul className={`text-red-500 text-xs`}>
          <li>
            Username: <span className={`text-amber-300`}>{u.username}</span>
          </li>
          <li>
            Email: <span className={`text-amber-300`}>{u.email}</span>
          </li>
          <li>
            Phone: <span className={`text-amber-300`}>{u.phone}</span>
          </li>
        </ul>
      )}
    </>
  );
};
export default User;
