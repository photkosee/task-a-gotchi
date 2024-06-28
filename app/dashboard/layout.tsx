"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "../components/Footer";
import useAuthStore from "../store/authStore";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const isAuthenticate = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!token || !isAuthenticate) {
    router.push("/login");
  }

  return isClient && token && isAuthenticate ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <div className="min-h-screen bg-white" />
  );
}
