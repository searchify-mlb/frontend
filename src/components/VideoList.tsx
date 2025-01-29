import { type Video, VideoCard } from "./VideoCard";

type VideoListProps = {
  videos: Video[];
  onSelectVideo: (id: number) => void;
};

export const VideoList = ({ videos, onSelectVideo }: VideoListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {videos.map((video) => (
        <VideoCard key={video.id} data={video} onSelectVideo={onSelectVideo} />
      ))}
    </ul>
  );
};
