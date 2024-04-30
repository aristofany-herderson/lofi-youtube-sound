import { BirdIcon } from "@/components/ui/icons/bird";
import { CoffeeIcon } from "@/components/ui/icons/coffee";
import { FireIcon } from "@/components/ui/icons/fire";
import { FlakeIcon } from "@/components/ui/icons/flake";
import { KeyboardIcon } from "@/components/ui/icons/keyboard";
import { RainIcon } from "@/components/ui/icons/rain";
import { StormIcon } from "@/components/ui/icons/storm";
import { TreeIcon } from "@/components/ui/icons/tree";
import { UnderwaterIcon } from "@/components/ui/icons/underwater";
import { WavesIcon } from "@/components/ui/icons/waves";

export const audiosList = [
  {
    title: "Birds",
    icon: <BirdIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/birds.mp3",
  },
  {
    title: "Coffee shop",
    icon: <CoffeeIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/coffee.mp3",
  },
  {
    title: "Fireplace",
    icon: <FireIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/fireplace.mp3",
  },
  {
    title: "Forest",
    icon: <TreeIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/forest.mp3",
  },
  {
    title: "Keyboard",
    icon: <KeyboardIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/keyboard.mp3",
  },
  {
    title: "Ocean",
    icon: <WavesIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/ocean.mp3",
  },
  {
    title: "City rain",
    icon: <RainIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/rain.mp3",
  },
  {
    title: "Snow",
    icon: <FlakeIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/snow.mp3",
  },
  {
    title: "Storm rain",
    icon: <StormIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/storm.mp3",
  },
  {
    title: "Underwater",
    icon: <UnderwaterIcon width={18} height={18} />,
    playing: false,
    audio: "/audios/underwater.mp3",
  },
];
