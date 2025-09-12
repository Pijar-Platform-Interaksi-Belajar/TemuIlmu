import Sidebar from '@/components/layout/Sidebar';
import MainFeed from '@/components/feed/MainFeed';
import RightSidebar from '@/components/layout/RightSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-64 mr-80 py-6 px-8">
          <MainFeed />
        </main>
        
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}