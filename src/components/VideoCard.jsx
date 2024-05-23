/* eslint-disable react/prop-types */
const VideoCard = ({ info }) => {
	
	return (
		<div className="p-2 m-2 w-[320px] rounded-lg">
			<img
				className="rounded-lg"
				src={info?.snippet?.thumbnails?.medium?.url}
				alt=""
			/>
			<img src="" alt="" />
			<div>
				<h4 className="font-semibold py-1 line-clamp-2">
					{info?.snippet?.title}
				</h4>
				<p className="text-[13px]">{info?.snippet?.channelTitle}</p>

				<div className="flex">
					<p className="text-[12px]">{info?.statistics?.viewCount} views</p>
					<p className="text-[12px] mx-2">{info?.snippet?.publishedAt}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
