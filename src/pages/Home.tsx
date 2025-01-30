import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { VideoList } from "../components/VideoList";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { useQuery } from "@tanstack/react-query";
import { searchVideos } from "../utils/api";
import { Result, SearchVideoResponse } from "../utils/types";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVideo, setSelectedVideo] = useState<Result | null>(null);

  const { data: videosResponse, isFetching: videosLoading } =
    useQuery<SearchVideoResponse>({
      queryKey: ["videos", searchQuery],
      queryFn: () => searchVideos(searchQuery),
      enabled: searchQuery !== "",
    });

  const videos = videosResponse?.result.results || [];

  const handleSelectVideo = (id: string) => {
    setSelectedVideo(videos.find((video) => video.metadata.id === id) || null);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container flex flex-col w-5/6 mx-auto my-16 space-y-8 md:w-3/4 ">
        <SearchBar onSearch={setSearchQuery} />
        {videosLoading && <p>Loading videos...</p>}
        {videos.length === 0 && !videosLoading && <p>Find some cool videos.</p>}
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
              src={selectedVideo?.metadata.video}
              className="w-full rounded-xl"
              controls
            />
            <div className="flex flex-col w-full mb-4 space-y-1">
              <h3 className="text-xl font-bold">
                {selectedVideo?.content || "Clip title"}
              </h3>
              {/* <p className="text-md">
                {selectedVideo?.description || "Clip description"}
              </p> */}
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
