import Link from "next/link";

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
      px-7 gap-3"
    >
      <Link href="/">logo</Link>
      <RegisterForm />
    </main>
  );
}
