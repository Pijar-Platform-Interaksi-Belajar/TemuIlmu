import Sidebar from "@/components/sidebar";
import CreatePost from "@/components/createPost";
import Post from "@/components/postcard";

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <CreatePost />
          <div className="mt-52 space-y-6">
            <Post 
            avatar="https://example.com/avatar2.jpg"
            name="Emma Stone"
            username="emmastone"
            content="KONTOL"
            image="https://example.com/sample-image.jpg"
            likes={20}
            comments={5}
            retweets={10}
            timestamp="2024-06-11T14:30:00Z"
          />
          </div>
        </div>
      </main>
    </div>
  );
}
