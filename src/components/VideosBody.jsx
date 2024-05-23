import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_API } from "../utils/constants/constants";

const VideosBody = () => {
	const [videosData, setVideosData] = useState([]);
	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const YouTubeData = await fetch(Youtube_API);
		const jsonYouTubeData = await YouTubeData.json();
		setVideosData(jsonYouTubeData.items);
	}
	return (
		videosData && (
			<div className="flex flex-wrap">
				{videosData.map((video) => {
					return <VideoCard key={video.id} info={video} />
				})}
				hello
			</div>
		)
	);
};

export default VideosBody;
