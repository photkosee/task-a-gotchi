import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
      px-7 gap-3"
    >
      <Link href="/">logo</Link>
      <LoginForm />
    </main>
  );
}
