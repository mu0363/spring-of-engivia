import type { FC } from "react";
import { useSubscribeBroadcast } from "src/hooks/useSubscribe";

type Props = {
  broadcastId: string;
};

export const BroadcastTitle: FC<Props> = ({ broadcastId }) => {
  const broadcast = useSubscribeBroadcast(broadcastId);

  return (
    <div>
      {broadcast?.status && (
        <div className="flex flex-col flex-wrap items-center pt-10 mb-10 w-full text-center">
          <p
            className={`inline py-1 px-3 text-sm rounded-full ${
              broadcast.status === "BEFORE"
                ? "bg-[#FFEDD5] text-[#C2410C]"
                : broadcast.status === "IN_PROGRESS"
                ? "bg-[#D1FAE5] text-[#047857]"
                : "bg-gray-200"
            }`}
          >
            {broadcast.status === "BEFORE"
              ? "放送前・エンジビア募集中"
              : broadcast.status === "IN_PROGRESS"
              ? "放送中"
              : "放送済み"}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-[#111827]">
            {broadcast.title}
          </h1>
        </div>
      )}
    </div>
  );
};
