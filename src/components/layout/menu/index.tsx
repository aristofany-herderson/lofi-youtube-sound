"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FullScreenIcon } from "@/components/ui/icons/full-screen";
import { FullScreenExitIcon } from "@/components/ui/icons/full-screen-exit";
import { LinkIcon } from "@/components/ui/icons/link";
import { NatureIcon } from "@/components/ui/icons/nature";
import { PauseIcon } from "@/components/ui/icons/pause";
import { PlayIcon } from "@/components/ui/icons/play";
import { PlayVideoIcon } from "@/components/ui/icons/play-video";
import { StopIcon } from "@/components/ui/icons/stop";
import { TuneIcon } from "@/components/ui/icons/tune";
import { VideoIcon } from "@/components/ui/icons/video";
import { VolumeIcon } from "@/components/ui/icons/volume";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { usePlayer } from "@/contexts/player-context";
import { useToggle } from "@uidotdev/usehooks";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Menu = () => {
  const {
    videoUrl,
    isPlaying,
    ambientAudiosList,
    videoVolume,
    ambientAudiosVolume,
    setVideoVolumeState,
    setAmbientAudiosVolumeState,
    handleTogglePlayingVideoState,
    setVideoUrlState,
    handleToggleAmbientAudioPlayingState,
    stopVideoAndAmbientAudios,
  } = usePlayer();
  const [inputUrlValue, setInputUrlValue] = useState("");
  const [isInFullScreen, setIsInFullScreen] = useToggle(false);

  const handleToggleFullScreen = () => {
    const window = document.documentElement;

    if (isInFullScreen) {
      document.exitFullscreen();
      setIsInFullScreen(false);
      return;
    }

    window.requestFullscreen();
    setIsInFullScreen(true);
  };

  const handleSubmitUrl = () => {
    const verification =
      inputUrlValue.trim() != "" && inputUrlValue.includes("?v=");

    verification && setVideoUrlState(inputUrlValue);
  };
  return (
    <nav className={styles.menu}>
      <Dialog>
        <HoverCard openDelay={500} closeDelay={100}>
          <DialogTrigger asChild>
            <HoverCardTrigger asChild>
              <button className={styles.button}>
                <LinkIcon width={16} height={16} />
              </button>
            </HoverCardTrigger>
          </DialogTrigger>
          <HoverCardContent>Change lofi</HoverCardContent>
        </HoverCard>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter youtube video URL</DialogTitle>
          </DialogHeader>
          <div className={styles.inputWrapper}>
            <input
              value={inputUrlValue}
              onChange={(e) => setInputUrlValue(e.target.value)}
              type="url"
              placeholder={videoUrl}
              spellCheck={false}
              maxLength={200}
            />
            <button onClick={handleSubmitUrl}>
              <PlayVideoIcon height={18} width={18} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <HoverCard openDelay={500} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button
            onClick={handleTogglePlayingVideoState}
            className={styles.button}
          >
            {isPlaying ? (
              <PauseIcon
                className={styles.animatedIcon}
                width={16}
                height={16}
              />
            ) : (
              <PlayIcon
                className={styles.animatedIcon}
                style={{ transform: "translateX(2px)" }}
                width={16}
                height={16}
              />
            )}
          </button>
        </HoverCardTrigger>
        <HoverCardContent>
          {isPlaying ? <p>Pause lofi</p> : <p>Play lofi</p>}
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={500} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button onClick={stopVideoAndAmbientAudios} className={styles.button}>
            <StopIcon width={13} height={13} />
          </button>
        </HoverCardTrigger>
        <HoverCardContent>Stop sound</HoverCardContent>
      </HoverCard>
      <DropdownMenu>
        <HoverCard openDelay={500} closeDelay={100}>
          <DropdownMenuTrigger asChild>
            <HoverCardTrigger asChild>
              <button className={styles.button}>
                <VolumeIcon width={16} height={16} />
              </button>
            </HoverCardTrigger>
          </DropdownMenuTrigger>
          <HoverCardContent>Adjust volume</HoverCardContent>
        </HoverCard>
        <DropdownMenuContent side="top" sideOffset={12}>
          <DropdownMenuGroup>
            <div className={styles.volumeController}>
              <VideoIcon width={18} height={18} />
              <Slider
                value={[videoVolume]}
                onValueChange={(value) => setVideoVolumeState(value[0])}
                className={styles.slider}
                max={1}
                min={0}
                step={0.01}
              />
              <input
                type="number"
                min={0}
                max={100}
                value={Math.round(videoVolume * 100)}
                onChange={(e) => {
                  const currentValue = Number(e.target.value);
                  if (
                    !isNaN(currentValue) &&
                    currentValue >= 0 &&
                    currentValue <= 100
                  ) {
                    setVideoVolumeState(currentValue / 100);
                  }
                }}
              />
            </div>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <div className={styles.volumeController}>
              <NatureIcon width={18} height={18} />
              <Slider
                value={[ambientAudiosVolume]}
                onValueChange={(value) => setAmbientAudiosVolumeState(value[0])}
                className={styles.slider}
                max={1}
                min={0}
                step={0.01}
              />
              <input
                type="number"
                min={0}
                max={100}
                value={Math.round(ambientAudiosVolume * 100)}
                onChange={(e) => {
                  const currentValue = Number(e.target.value);
                  if (
                    !isNaN(currentValue) &&
                    currentValue >= 0 &&
                    currentValue <= 100
                  ) {
                    setAmbientAudiosVolumeState(currentValue / 100);
                  }
                }}
              />
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <HoverCard openDelay={500} closeDelay={100}>
          <DropdownMenuTrigger asChild>
            <HoverCardTrigger asChild>
              <button className={styles.button}>
                <TuneIcon width={16} height={16} />
              </button>
            </HoverCardTrigger>
          </DropdownMenuTrigger>
          <HoverCardContent>Sound effects</HoverCardContent>
        </HoverCard>
        <DropdownMenuContent side="top" sideOffset={12}>
          <DropdownMenuGroup>
            <div className={styles.ambientSounds}>
              {ambientAudiosList.map((audio, index) => {
                return (
                  <Toggle
                    pressed={audio.playing}
                    onPressedChange={() =>
                      handleToggleAmbientAudioPlayingState(index)
                    }
                    key={index}
                  >
                    {audio.icon}
                  </Toggle>
                );
              })}
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <HoverCard openDelay={500} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button onClick={handleToggleFullScreen} className={styles.button}>
            {isInFullScreen ? (
              <FullScreenExitIcon
                className={styles.animatedIcon}
                width={16}
                height={16}
              />
            ) : (
              <FullScreenIcon
                className={styles.animatedIcon}
                width={16}
                height={16}
              />
            )}
          </button>
        </HoverCardTrigger>
        <HoverCardContent>
          {isInFullScreen ? <p>Exit fullscreen</p> : <p>Fullscreen</p>}
        </HoverCardContent>
      </HoverCard>
    </nav>
  );
};
