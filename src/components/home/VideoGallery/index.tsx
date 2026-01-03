import { useEffect } from "react";
import Slider from "react-slick";
import { Fancybox } from "@fancyapps/ui";
import { Play } from "lucide-react";
import VideoPlayer from "@/components/ui/VideoPlayer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import styles from "./VideoGallery.module.scss";

const videoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: { slidesToShow: 3 },
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: "40px",
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "60px",
            },
        },
    ],
};

// Placeholder videos - replaced generic "Big Buck Bunny" with Luxury/Gold themed abstract clips + Jewellery Posters
const VIDEO_LIST = [
    {
        url: "/assets/videos/video1.mp4",
        poster: "https://images.unsplash.com/photo-1515562141207-7a88fb052571?q=80&w=600&auto=format&fit=crop",
    },
    {
        url: "/assets/videos/video2.mp4",
        poster: "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=600&auto=format&fit=crop",
    },
    {
        url: "/assets/videos/video3.mp4",
        poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    },
    {
        url: "/assets/videos/video4.mp4",
        poster: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop",
    },
    {
        url: "/assets/videos/video5.mp4",
        poster: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop",
    },
];

const VideoGallery = () => {
    // In a real app, use props or env vars
    const videos = VIDEO_LIST;

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            thumbs: {
                autoStart: true,
            },
            toolbar: [
                "zoom",
                "slideshow",
                "fullscreen",
                "close",
            ],
            Html: {
                video: {
                    autoplay: true,
                }
            }
        } as any);

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className={styles.section} id="video-gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subHeading}>Our Stories</span>
                    <h2 className={styles.heading}>Satisfied Customers</h2>
                </div>

                <div className={styles.sliderWrapper}>
                    <Slider {...videoSliderSettings} className="video-slider">
                        {videos.map((item, index) => (
                            <div className={styles.slideItem} key={index}>
                                <a
                                    href={item.url}
                                    data-fancybox="gallery"
                                    className={styles.videoLink}
                                >
                                    <div className={styles.playerWrapper}>
                                        <VideoPlayer
                                            url={item.url}
                                            poster={item.poster}
                                            videoKey={`gallery-${index}`}
                                            videoAutoPlay={true}
                                            showMuteButton={false}
                                            showPlayButton={false}
                                        />
                                        <div className={styles.playOverlay}>
                                            <div className={styles.playButton}>
                                                <Play fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
