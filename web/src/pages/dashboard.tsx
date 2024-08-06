import { useEffect, useState } from "react";
import { useAuth } from "../services/context/auth";
import _fecth from "../services/fetch";

type User = {
  name: string;
  role: string;
  picture: string;
}
type ContextProps = {
  user: User | null;
  loggedIn: boolean | null;
  checkLoginState: () => Promise<void>
};
type PostProps = {
  title: string;
  body: string;
};


const Dashboard = () => {
  const { user, loggedIn, checkLoginState } = useAuth();
  const [posts, setPosts] = useState<PostProps[]>([]);
/* 
  useEffect(() => {
    (async () => {
      if (loggedIn === true) {
        try {
          // Get posts from server
          const { data: { posts } } = await _fecth({ url: 'user/posts'})
          setPosts(posts);
        } catch (err) {
          console.error(err);
        }
      }
    })();
  }, [loggedIn])
 */
  const handleLogout = async () => {
    try {
      await _fecth({ url: 'auth/logout'});
      // Check login state again
      checkLoginState();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h3>Dashboard</h3>
      <button className="btn" onClick={handleLogout} >Logout</button>
      <h4>{user?.name}</h4>
      <br />
      <p>{user?.role}</p>
      <br />
      <img src={user?.picture} alt={user?.name} />
      <br />
      <div>
        {posts.map(({ title, body }: PostProps) => <div key={title}>
          <h5>{title}</h5>
          <p>{body}</p>
        </div>)}
      </div>
    </>
  )
}


export default Dashboard