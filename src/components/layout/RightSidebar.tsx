import SearchBar from '../sidebar/SearchBar';
import TrendingSection from '../sidebar/TrendingSection';
import PopularRooms from '../sidebar/PopularRooms';

export default function RightSidebar() {
  return (
    <div className="fixed right-0 top-10 h-full w-120 p-6 space-y-6">
      <SearchBar />
      <TrendingSection />
      <PopularRooms />
    </div>
  );
}