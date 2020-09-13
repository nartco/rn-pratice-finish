export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signUp = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhi-BUwfozS7nXcQYmx09zrnh4GFG0g_o",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong !";
      if (errorId === "EMAIL_EXISTS") {
        message = "this email exist already";
      }
      throw new Error(message);
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhi-BUwfozS7nXcQYmx09zrnh4GFG0g_o",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong !";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "this email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid !";
      }

      console.log(errorResData);
      throw new Error(message);
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({ type: LOGIN });
  };
};
