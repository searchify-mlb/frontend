import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { VideoList } from "../components/VideoList";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { Video } from "../components/VideoCard";

const videos: Video[] = [
  {
    id: 1,
    title: "Video 1",
    description: "This is video 1",
    url: "https://sporty-clips.mlb.com/ZThRWHFfWGw0TUFRPT1fQmdZQVhGME5YbEVBRFZFQ1VBQUFWd0ZRQUFBQVdsY0FCbFJXQWdjTkNGWmRDUUJX.mp4",
  },
  {
    id: 2,
    title: "Video 2",
    description: "This is video 2",
    url: "https://sporty-clips.mlb.com/ZThRWHFfWGw0TUFRPT1fQmdZQVhGME5YbEVBRFZFQ1VBQUFWd0ZRQUFBQVdsY0FCbFJXQWdjTkNGWmRDUUJX.mp4",
  },
  {
    id: 3,
    title: "Video 3",
    description: "This is video 3",
    url: "https://sporty-clips.mlb.com/ZThRWHFfWGw0TUFRPT1fQmdZQVhGME5YbEVBRFZFQ1VBQUFWd0ZRQUFBQVdsY0FCbFJXQWdjTkNGWmRDUUJX.mp4",
  },
  {
    id: 4,
    title: "Video 4",
    description: "This is video 4",
    url: "https://sporty-clips.mlb.com/ZThRWHFfWGw0TUFRPT1fQmdZQVhGME5YbEVBRFZFQ1VBQUFWd0ZRQUFBQVdsY0FCbFJXQWdjTkNGWmRDUUJX.mp4",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleSelectVideo = (id: number) => {
    setSelectedVideo(videos.find((video) => video.id === id) || null);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }

  return (
    <main className="w-full h-screen">
      <Navbar />
      <div className="container flex flex-col justify-center w-5/6 mx-auto my-16 space-y-8 md:w-3/4">
        <SearchBar onSearch={handleSearch} />
        <VideoList videos={videos} onSelectVideo={handleSelectVideo} />
      </div>
      <Footer />
      {isModalOpen && (
        <Modal>
          <div
            className="flex flex-col items-center justify-center w-5/6 max-w-[1080px] p-4 space-y-2 bg-white border-3 border-black rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo?.url}
              className="w-full rounded-xl"
              controls
            />
            <div className="flex flex-col w-full mb-4 space-y-1">
              <h3 className="text-xl font-bold">
                {selectedVideo?.title || "Clip title"}
              </h3>
              <p className="text-md">
                {selectedVideo?.description || "Clip description"}
              </p>
            </div>
            <button
              className="px-4 py-2 text-sm text-black transition-all border-2 border-black rounded-full hover:cursor-pointer hover:shadow-md hover:font-bold"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}
