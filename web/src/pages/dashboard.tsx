import logout from "../services/auth/logout";

type PostProps = {
  title: string;
  body: string;
};

const posts: PostProps[] = [
  { title: 'Post 1', body: 'Body 1' },
  { title: 'Post 2', body: 'Body 2' },
  { title: 'Post 3', body: 'Body 3' },
];
const Dashboard = () => {
  return (
    <>
      <h3>Dashboard Page</h3>
      <button className="btn" onClick={() => logout({ token: '1q2w3e4rasdasd' })} >Logout</button>
      {/* <h4>{user?.name}</h4>
      <br />
      <p>{user?.role}</p>
      <br />
      <img src={user?.picture} alt={user?.name} /> */}
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