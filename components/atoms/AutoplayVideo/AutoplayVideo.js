"use client";

import { useEffect, useRef } from "react";

export const HERO_VIDEO_SRC = "/videos/hero-1080.mp4";
export const HERO_VIDEO_POSTER = "/videos/hero-poster.jpg";

// Background video that plays on its own in Safari and on iPhone.
// iOS only autoplays a video that is muted + inline, and React doesn't write the `muted`
// attribute into the server HTML, so it is set from JS before calling play(). The poster
// covers the gap until the first frame is ready (or when the browser blocks playback).
export default function AutoplayVideo({
  src = HERO_VIDEO_SRC,
  poster = HERO_VIDEO_POSTER,
  className,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const result = video.play();
      if (result && typeof result.catch === "function") result.catch(() => {});
    };

    tryPlay();

    // iOS Low Power Mode (or a stalled load) can refuse autoplay: retry on the first touch/scroll
    const unlockEvents = ["touchstart", "pointerdown", "click", "scroll"];
    const unlock = () => {
      tryPlay();
      unlockEvents.forEach((e) => window.removeEventListener(e, unlock));
    };
    unlockEvents.forEach((e) => window.addEventListener(e, unlock, { passive: true }));

    // Resume after the tab/app comes back to the foreground
    const onVisible = () => {
      if (!document.hidden && video.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    return () => {
      unlockEvents.forEach((e) => window.removeEventListener(e, unlock));
      document.removeEventListener("visibilitychange", onVisible);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
