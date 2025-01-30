import { type Result as Video } from "../utils/types";

type VideoCardProps = {
  data: Video;
  onSelectVideo: (id: string) => void;
};

export const VideoCard = ({ data, onSelectVideo }: VideoCardProps) => {
  const { video, id } = data.metadata;
  const { content } = data;

  return (
    <div className="relative flex flex-col w-full p-4 space-y-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
      <video src={video} className="rounded-xl" />
      <div className="flex flex-row justify-between w-full">
        <p className="text-lg font-bold text-black">{content}</p>
        <button
          className="px-4 py-1 w-20 h-fit text-center text-sm font-bold text-white transition-transform bg-blue-900 rounded-full cursor-pointer hover:scale-105 hover:bg-blue-950"
          onClick={() => onSelectVideo(id)}
        >
          Open
        </button>
      </div>
    </div>
  );
};
