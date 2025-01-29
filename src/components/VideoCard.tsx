export type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

type VideoCardProps = {
  data: Video;
  onSelectVideo: (id: number) => void;
};

export const VideoCard = ({ data, onSelectVideo }: VideoCardProps) => {
  const { id, title, url } = data;

  return (
    <div className="relative flex flex-col w-full p-4 space-y-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
      <video src={url} className="rounded-xl" />
      <div className="flex flex-row justify-between w-full">
        <p className="text-lg font-bold text-black">{title}</p>
        <button
          className="px-4 py-1 text-sm font-bold text-white transition-transform bg-blue-900 rounded-full cursor-pointer hover:scale-105 hover:bg-blue-950"
          onClick={() => onSelectVideo(id)}
        >
          Open
        </button>
      </div>
    </div>
  );
};
