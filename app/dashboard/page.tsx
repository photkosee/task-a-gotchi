import PostCard from "./components/PostCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-[1500px] flex-col items-center px-24 py-28 justify-between bg-white">
      <PostCard image={2} title="Post 1" description="This is post 1" />
    </div>
  );
}
