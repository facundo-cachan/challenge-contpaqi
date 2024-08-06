import { Form, useActionData } from "react-router-dom";
// import login from "../services/auth/login";

const Login = () => {

  let actionData = useActionData() as { error: string } | undefined;

  return (
    <Form method="post" replace className="border-2 border-red-500">
      <label>Username: <input name="email" /> </label>
      <label>Password: <input name="password" /> </label>
      <button type="submit">
        Login
      </button>
      <pre style={{ color: "red" }}>{JSON.stringify(actionData, null, 2)}</pre>
    </Form>
  );
  /* 
    return <>
      <h3>Login to Dashboard</h3>
      <button className="btn" onClick={() => login({ email: 'yo@facundo-cachan.dev', password: '1q2w3e4r' })} >Login</button>
    </> */
}

export default Login