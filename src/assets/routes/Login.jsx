import React from "react";

function Login() {
  const click = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div>
      <button onClick={click}>asdasd</button>
    </div>
  );
}

export default Login;
