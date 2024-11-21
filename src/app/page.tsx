import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();
  const username = user?.firstName;
  const greet = username ? `Welcome, ${username}!!` : "Hello!";

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-mono font-bold text-red-500">{greet}</h1>
    </div>
  );
};

export default Home;
