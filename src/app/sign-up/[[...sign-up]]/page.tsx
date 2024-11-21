import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-10">
        <SignUp />
      </main>
    </div>
  );
};

export default SignUpPage;
