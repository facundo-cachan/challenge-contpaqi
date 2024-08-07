import { Form, useActionData } from "react-router-dom";

const Login = () => {
  let actionData = useActionData();

  return (
    <Form method="post" replace className="flex flex-col">
      <label>Username: <input name="email" defaultValue="yo@facundo-cachan.dev" /> </label>
      <label>Password: <input name="password" required /> </label>
      <button type="submit">Login</button>
      <pre style={{ color: "red" }}>{JSON.stringify(actionData, null, 2)}</pre>
    </Form>
  );
}

export default Login