"use client";
import { useEffect, useState } from "react";

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen mode:", err);
      });
      setIsFullscreen(true);
      return;
    }
    
    document.exitFullscreen().catch((err) => {
      console.error("Failed to exit fullscreen mode:", err);
    });
    setIsFullscreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const verification = document.fullscreenElement != null;
      setIsFullscreen(verification);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return { isFullscreen, toggleFullscreen };
};
