/* Two buttons 
when pressed change state from
if logged in => logOut 
if LoggedOut => login */
function LogginBtn({ onClick }) {
  return <button onClick={onClick}>Log In</button>;
}

function LoggedOutBtn({ onClick }) {
  return <button onClick={onClick}>Log Out</button>;
}

export { LogginBtn, LoggedOutBtn };
