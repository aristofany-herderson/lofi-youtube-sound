"use client";
import { usePlayer } from "@/contexts/player-context";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
const YoutubePlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export const Player = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { videoUrl, isPlaying, videoVolume, setPlayingVideoState } =
    usePlayer();

  const configs = {
    autoplay: 1,
    color: "white",
    controls: 0,
    disablekb: 1,
    fs: 0,
    loop: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    playsinline: 0,
  };

  return (
    <>
      <div className={styles.maskVideo} />
      {!isSSR && (
        <YoutubePlayer
          width="auto"
          height="auto"
          className={styles.player}
          url={videoUrl}
          playing={isPlaying}
          volume={videoVolume}
          onPlay={() => setPlayingVideoState(true)}
          onPause={() => setPlayingVideoState(false)}
          loop
          controls={false}
          pip={false}
          config={{
            playerVars: configs,
          }}
        />
      )}
    </>
  );
};
