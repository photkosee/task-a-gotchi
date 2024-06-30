import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex min-h-[1500px] flex-col items-center justify-between bg-white">
      <Header />
      <Main />
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 p-7">
        <div
          className="border-[1px] border-neutral-300/60 rounded-xl p-7
          flex flex-col gap-y-5 items-center w-[300px]"
        >
          <div className="text-2xl sm:text-3xl text-[#2f496d] font-bold text-center">
            Start Community Events
          </div>
          <div className="text-center">
            Organise and join events for good habits and get community rewards
            for attendance!
          </div>
        </div>

        <div
          className="border-[1px] border-neutral-300/60 rounded-xl p-7
          flex flex-col gap-y-5 items-center w-[300px]"
        >
          <div className="text-2xl sm:text-3xl text-[#2f496d] font-bold text-center">
            Get Cute Gotchis
          </div>
          <div className="text-2xl text-wrap text-center">
            🦚🦩🦜🦃🐘🦙🐫🦥🦇🦔
          </div>
          <div className="text-center">
            Get adorable companions called Gotchis for and completing routine
            tasks
          </div>
        </div>

        <div
          className="border-[1px] border-neutral-300/60 rounded-xl p-7
          flex flex-col gap-y-5 items-center w-[300px]"
        >
          <div className="text-2xl sm:text-3xl text-[#2f496d] font-bold text-center">
            Share Your Progress
          </div>
          <div className="text-center">
            Compare your progress and share your Gotchis with a global
            leaderboard
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
