import X from "./icons/X";
import Bookmark from "./icons/Bookmark";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="flex items-center justify-between pl-2  py-5 bg-white mb-2">
      <button className="w-[41px] h-[41px] rounded-full bg-pill-bg flex items-center justify-center ">
        <X />
      </button>
      <span className="text-[18px] font-bold -ml-4">{title}</span>
      <button className="w-[41px] h-[41px]  rounded-full bg-pill-bg flex items-center justify-center shrink-0">
        <Bookmark />
      </button>
    </div>
  );
}
