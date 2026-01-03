import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
    url: string;
    videoKey: string | number;
    videoAutoPlay?: boolean;
    showMuteButton?: boolean;
    showPlayButton?: boolean;
    loop?: boolean;
    poster?: string;
    className?: string; // Kept for API compatibility, but styles are module-based
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    videoKey,
    videoAutoPlay = true,
    showMuteButton = false,
    showPlayButton = false,
    loop = true,
    poster,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && videoAutoPlay) {
                        setIsPlaying(true);
                    } else {
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.6 }
        );

        if (videoRef.current) {
            videoRef.current.addEventListener("ended", () => setIsPlaying(false));
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [videoAutoPlay]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.play().catch(() => { });
            } else {
                video.pause();
            }
        }
    }, [isPlaying]);

    const handleLoaded = () => {
        setIsLoaded(true);
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsPlaying((prev) => !prev);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (video) {
            video.muted = !isMuted;
            setIsMuted(video.muted);
        }
    };

    return (
        <div className={styles.videoWrapper} key={`video-${videoKey}`}>
            {!isLoaded && (
                <div className={styles.skeletonWrapper}>
                    <Skeleton
                        height="100%"
                        baseColor="hsl(var(--secondary))"
                        highlightColor="hsl(var(--card))"
                    />
                </div>
            )}

            <video
                id={`video-${videoKey}`}
                ref={videoRef}
                key={`video-source-${videoKey}`}
                muted={isMuted}
                loop={loop}
                playsInline
                autoPlay={false}
                onLoadedData={handleLoaded}
                poster={poster}
                className={`${styles.video} ${isLoaded ? styles.loaded : ''}`}
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {(showMuteButton || showPlayButton) && (
                <div className={styles.controls}>
                    {showPlayButton && (
                        <button onClick={togglePlay} className={styles.controlBtn}>
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                    )}
                    {showMuteButton && (
                        <button onClick={toggleMute} className={styles.controlBtn}>
                            {isMuted ? "Unmute" : "Mute"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
