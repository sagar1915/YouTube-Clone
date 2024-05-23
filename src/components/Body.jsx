import ButtonList from "./ButtonList";
import SideBar from "./SideBar";
import VideosBody from "./VideosBody";

const Body = () => {
	return (
		<div className="flex">
			<SideBar />
			<div className="p-2 flex flex-col">
				<ButtonList />
				<VideosBody />
			</div>
		</div>
	);
};

export default Body;
