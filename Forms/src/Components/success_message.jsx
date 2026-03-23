export default function SuccessMessage(props) {
  return (
    <div>
      <h1>Login Successful!</h1>
      <div>
        <p>Fullname:{props.fullname} </p>
        <p>Email: {props.email}</p>
      </div>
      <button onClick={() => props.onLogout(false)}>Logout</button>
    </div>
  );
}
