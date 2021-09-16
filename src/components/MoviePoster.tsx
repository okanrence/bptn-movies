type Props = {
  image: string;
  liked: boolean;
  onClick: VoidFunction;
};

export const MoviePoster = ({ image, liked, onClick }: Props) => {
  return (
    <div className="h-100 relative">
      <img src={image} alt="" className="rounded-md cursor-pointer h-full" />
      <div
        onClick={onClick}
        className="absolute cursor-pointer opacity-0 hover:opacity-100 bg-opacity-60 flex items-end left-0 right-0 top-0 bottom-0 bg-black w-full rounded-md p-5"
      >
        {!liked && <i className="far fa-thumbs-up text-white text-2xl"></i>}
        {liked && <i className="fas fa-thumbs-up text-white text-2xl"></i>}
      </div>
    </div>
  );
};
