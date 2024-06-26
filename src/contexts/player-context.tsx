"use client";
import { audiosList } from "@/data/audios-list";
import { useList, useLocalStorage } from "@uidotdev/usehooks";
import { createContext, ReactNode, useContext, useState } from "react";

type PlayerContextData = {
  videoUrl: string;
  isPlaying: boolean;
  videoVolume: number;
  ambientAudiosVolume: number;
  ambientAudiosList: typeof audiosList;
  setPlayingVideoState: (state: boolean) => void;
  setVideoUrlState: (state: string) => void;
  setVideoVolumeState: (state: number) => void;
  setAmbientAudiosVolumeState: (state: number) => void;
  pauseAmbientAudios: () => void;
  handleTogglePlayingVideoState: () => void;
  handleToggleAmbientAudioPlayingState: (index: number) => void;
  stopVideoAndAmbientAudios: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
};

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useLocalStorage(
    "videoUrl",
    "https://www.youtube.com/watch?v=c3suauAz0zQ?autoplay=1&color=white,rel=0&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&showinfo=0&playsinline=0"
  );
  const [videoVolume, setVideoVolume] = useLocalStorage("videoVolume", 0.9);
  const [ambientAudiosVolume, setAmbientAudiosVolume] = useLocalStorage(
    "ambientVolume",
    0.9
  );
  const [
    ambientAudiosList,
    { updateAt: updateAmbientAudiosList, set: setAmbientAudiosList },
  ] = useList(audiosList);

  const handleTogglePlayingVideoState = () => {
    setIsPlayingVideo((value) => !value);
  };

  const setPlayingVideoState = (state: boolean) => {
    setIsPlayingVideo(state);
  };

  const setVideoUrlState = (state: string) => {
    setVideoUrl(state);
  };

  const setVideoVolumeState = (state: number) => {
    setVideoVolume(state);
  };

  const setAmbientAudiosVolumeState = (state: number) => {
    setAmbientAudiosVolume(state);
  };

  const handleToggleAmbientAudioPlayingState = (index: number) => {
    updateAmbientAudiosList(index, {
      title: ambientAudiosList[index].title,
      audio: ambientAudiosList[index].audio,
      icon: ambientAudiosList[index].icon,
      playing: !ambientAudiosList[index].playing,
    });
  };

  const pauseVideo = () => {
    setIsPlayingVideo(false);
  };

  const pauseAmbientAudios = () => {
    setAmbientAudiosList(audiosList);
  };

  const stopVideoAndAmbientAudios = () => {
    pauseVideo();
    pauseAmbientAudios();
  };

  return (
    <PlayerContext.Provider
      value={{
        videoUrl,
        isPlaying: isPlayingVideo,
        videoVolume,
        ambientAudiosVolume,
        ambientAudiosList,
        setPlayingVideoState,
        setVideoUrlState,
        setVideoVolumeState,
        setAmbientAudiosVolumeState,
        pauseAmbientAudios,
        handleTogglePlayingVideoState,
        handleToggleAmbientAudioPlayingState,
        stopVideoAndAmbientAudios,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
