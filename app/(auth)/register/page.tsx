import Link from "next/link";

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
      p-7 gap-y-7"
    >
      <Link href="/" passHref>
        <img src="./logo2.svg" alt="logo" className="h-32" />
      </Link>
      <RegisterForm />
    </main>
  );
}
