const Login = () => {
  /* const handleLogin = async () => {
    try {
      // Gets authentication url from backend server
      const { data: { url } } = await axios.get(`${serverUrl}/auth/url`);
      // Navigate to conset screen
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  } */
  return <>
    <h3>Login to Dashboard</h3>
    <button className="btn" onClick={() => console.log('handleLogin')} >Login</button>
  </>
}

export default Login