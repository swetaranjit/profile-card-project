import classes from "./Form.module.css";
import { useState } from "react";
import SuccessMessage from "./success_message";
export default function Form() {
  //Uncontrolled
  /*function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }*/

  //Controlled
  const [fullname, setFullname] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [isloggedIn, setIsLoggedIn] = useState(false);
  function handleFormSubmit(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      setFullname("");
      setEmail("");
    }, 2000);
  }
  function handleFullnameChange(event) {
    setFullname(event.target.value);
    console.log(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  return isloggedIn ? (
    <SuccessMessage
      fullname={fullname}
      email={email}
      onLogout={setIsLoggedIn}
    />
  ) : (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="fullname">
          Name:{" "}
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            required
            onChange={handleFullnameChange}
          />
        </label>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
