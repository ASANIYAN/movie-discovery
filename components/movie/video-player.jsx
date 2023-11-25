import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {

    return (
            <ReactPlayer
                url={src}
                controls={true}
                width={"100%"}
            />
    );
}
 
export default VideoPlayer;