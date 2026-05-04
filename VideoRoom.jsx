import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function VideoRoom() {

  const { roomID } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {

    const startCall = async () => {

      if (!containerRef.current) return;

      const appID = 2056054076;
      const serverSecret = "f5f7ff90fffb6371d51ba01105e6373b";

      const userID = Date.now().toString();

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        "User_" + userID
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,

        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference, // ✅ IMPORTANT
        },

        showPreJoinView: true, // ✅ join screen + copy link

        showLeavingView: true,

        sharedLinks: [
          {
            name: "Copy Room Link",
            url: `${window.location.origin}/room/${roomID}`,
          },
        ],
      });

    };

    startCall();

  }, [roomID]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default VideoRoom;