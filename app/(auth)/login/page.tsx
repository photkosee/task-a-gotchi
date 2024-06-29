import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
      p-7 gap-y-7"
    >
      <Link href="/" passHref>
        <img src="./logo2.svg" alt="logo" className="h-32" />
      </Link>
      <LoginForm />
    </main>
  );
}
