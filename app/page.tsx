"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex min-h-[1500px] flex-col items-center justify-between bg-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
