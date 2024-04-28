"use client";
import { Menu } from "@/components/layout/menu";
import { AmbientSounds } from "@/components/misc/ambient-sounds";
import { Player } from "@/components/misc/player";
import { PlayerContextProvider } from "@/contexts/player-context";
import styles from "@/styles/pages/home.module.scss";
import { useToggle } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useToggle(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return <></>;
  }

  return (
    <PlayerContextProvider>
      <section className={styles.section}>
        <Player />
      </section>
      <Menu />
      <AmbientSounds />
    </PlayerContextProvider>
  );
}
