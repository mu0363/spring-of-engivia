import type { FC } from "react";
import useSound from "use-sound";
import { voteLikes, updateTotalLikes } from "src/lib/db";
import { EngiviaType } from "src/types/interface";
import { useUser } from "src/hooks/useSharedState";

type Props = {
  broadcastId: string;
  featureEngivia: EngiviaType;
  likes: number;
};

export const SwitchButton: FC<Props> = ({
  broadcastId,
  featureEngivia,
  likes,
}) => {
  const { user } = useUser();
  const [play] = useSound("/hee_low.mp3");

  const handleClick = async () => {
    play();
    await voteLikes(broadcastId, featureEngivia.id, user);
    await updateTotalLikes(broadcastId, featureEngivia.id);
  };

  return (
    <div>
      <div className="block relative m-0 w-[200px] h-32">
        <span
          className="absolute top-9 left-0 w-[200px] h-20 bg-gray-100"
          style={{ borderRadius: "100px / 40px", boxShadow: "0 8px 0 #c4cacc" }}
        ></span>
        <span
          className="absolute before:absolute top-0 before:-top-7 hover:top-1 active:top-4 before:left-0 left-5 mt-8 w-40 before:w-40 before:h-14 h-14 hover:h-[52px] active:h-10 bg-light-blue-700 before:bg-light-blue-600 before:rounded-[80px/30px]"
          style={{
            transition: "all 0.3s",
            borderRadius: "0 0 50% 50%",
          }}
        >
          <button disabled={likes >= 20 && true} onClick={handleClick}>
            <span className="absolute -top-7 left-0 py-2 w-full h-20 text-4xl font-bold text-center text-gray-200">
              へぇ
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};
