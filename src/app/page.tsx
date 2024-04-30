"use client";
import { Menu } from "@/components/layout/menu";
import { AmbientSounds } from "@/components/misc/ambient-sounds";
import { Player } from "@/components/misc/player";
import { GithubIcon } from "@/components/ui/icons/github";
import { PlayerContextProvider } from "@/contexts/player-context";
import styles from "@/styles/pages/home.module.scss";
import { useToggle } from "@uidotdev/usehooks";
import Link from "next/link";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const [mounted, setMounted] = useToggle(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <PlayerContextProvider>
      <section className={styles.section}>
        <Player />
      </section>
      <Menu />
      <AmbientSounds />
      <Link
        className={styles.githubLink}
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/aristofany-herderson/lofi-youtube-sound"
      >
        <GithubIcon width={20} height={20} />
      </Link>
    </PlayerContextProvider>
  );
}
