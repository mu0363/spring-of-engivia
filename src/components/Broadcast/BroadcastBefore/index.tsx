import type { FC } from "react";
import { BroadcastTitle } from "src/components/Broadcast/BroadcastTitle";
import { EngiviaInput } from "src/components/Engivia/EngiviaInput";
import { EngiviaConfirm } from "src/components/Engivia/EngiviaConfirm";
import { Broadcasting } from "src/components/Broadcast/Broadcasting";
import { Broadcasted } from "src/components/Broadcast/Broadcasted";
import {
  useSubscribeUserEngivia,
  useSubscribeBroadcast,
} from "src/hooks/useSubscribe";
import { useBroadcastId } from "src/hooks/useSharedState";

export const BroadcastBefore: FC = () => {
  const userId = "0VdnReeUhHOkonTR3EFmRb3UO4v1";
  const { broadcastId } = useBroadcastId();
  const broadcast = useSubscribeBroadcast(broadcastId);
  const userEngivia = useSubscribeUserEngivia(broadcastId, userId);

  return (
    <div>
      <BroadcastTitle broadcastId={broadcastId} />
      {broadcast?.status === "DONE" ? (
        <Broadcasted />
      ) : broadcast?.status === "IN_PROGRESS" ? (
        <Broadcasting />
      ) : userEngivia ? (
        <EngiviaConfirm userEngivia={userEngivia} />
      ) : (
        <EngiviaInput />
      )}
    </div>
  );
};
