const src = "https://www.youtube.com/embed/yNDgFK2Jj1E";
const VideoComponent = () => {
    return (
        <iframe className="my-8 dark:border-gray-700 rounded-lg border border-gray-200 max-sm:w-full"
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    );
};

export default VideoComponent;
