import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-3">
      <div
        className="flex flex-col gap-y-3 items-center justify-center bg-white
        pb-3 pt-7 px-10 rounded-lg shadow-lg"
      >
        <Link href="/" passHref>
          <img src="./logo2.svg" alt="logo" className="h-32" />
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
