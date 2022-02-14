import { useRouter } from "next/router";
import React from "react";
import { signIn } from "next-auth/react";
const Login = () => {
  const router = useRouter();

  return (
    <div className="h-full">
      <div className="grid h-full place-content-center">
        <button
          className="max-w-4xl py-3 bg-green-700 px-8 rounded-lg flex items-center justify-center space-x-4"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
