"use client";
import { usePlayer } from "@/contexts/player-context";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export const AmbientSounds = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  const { ambientAudiosList, ambientAudiosVolume } = usePlayer();
  const audiosWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ambientAudiosList.forEach((audio, index) => {
      if (audiosWrapper.current == null) return;

      const currentAudio =
        audiosWrapper.current.querySelectorAll("audio")[index];
      if (!currentAudio) return;

      if (audio.playing) {
        currentAudio.play();
        return;
      }
      currentAudio.pause();
    });
  }, [ambientAudiosList]);

  return (
    <div ref={audiosWrapper}>
      {!isSSR &&
        ambientAudiosList.map((audio, index) => (
          <ReactPlayer
            key={index}
            url={audio.audio}
            playing={audio.playing}
            volume={ambientAudiosVolume}
            loop
            width={0}
            height={0}
            style={{ display: "none" }}
          />
        ))}
    </div>
  );
};
