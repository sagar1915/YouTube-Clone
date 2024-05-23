/* eslint-disable react/prop-types */
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import {
	MdOutlineSmartDisplay,
	MdOutlinePodcasts,
	MdOutlineOutlinedFlag,
	MdHistory,
	MdHelpOutline,
	MdOutlineWatchLater,
} from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { BiLike, BiNews, BiMoviePlay } from "react-icons/bi";
import { ImFire } from "react-icons/im";
import { FiShoppingBag, FiRadio } from "react-icons/fi";
import { PiMusicNote } from "react-icons/pi";

import { GoTrophy } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import {} from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import {
	SiYoutubestudio,
	SiYoutubemusic,
	SiYoutubekids,
	SiYoutubegaming,
	SiYoutubeshorts,
} from "react-icons/si";
import { CgPlayButtonR } from "react-icons/cg";
import { SlArrowRight } from "react-icons/sl";
import { useSelector } from "react-redux";
const SideBar = () => {
	const open = useSelector((store) => store.togglesidebar.isOpen);

	if (!open) return null;

	return (
		<div className="pr-3 bg-[#0b0c0d]">
			<ul className="p-2 *:flex *:h-10 *:p-3 *:items-center">
				<LiWrapper>
					<IoHomeOutline className="mr-5 shrink-0 text-xl" />
					Home
				</LiWrapper>
				<LiWrapper>
					<SiYoutubeshorts className="mr-5 shrink-0 text-xl" />
					Shorts
				</LiWrapper>
				<LiWrapper>
					<MdOutlineSmartDisplay className="mr-5 shrink-0 text-xl" />
					Subscriptions
				</LiWrapper>
			</ul>

			<ul className="p-2 *:flex *:h-10 *:p-3 *:items-center">
				<span className="font-semibold">
					You{" "}
					<span className="mx-2">
						<SlArrowRight className="h-3" />
					</span>
				</span>
				<LiWrapper>
					<CgPlayButtonR className="mr-5 shrink-0 text-xl" />
					Your Channel
				</LiWrapper>
				<LiWrapper>
					<MdHistory className="mr-5 shrink-0 text-xl" />
					History
				</LiWrapper>
				<LiWrapper>
					<CgPlayList className="mr-5 shrink-0 text-xl" />
					Playlists
				</LiWrapper>
				<LiWrapper>
					<MdOutlineWatchLater className="mr-5 shrink-0 text-xl" />
					Watch later
				</LiWrapper>
				<LiWrapper>
					<BiLike className="mr-5 shrink-0 text-xl" />
					Liked videos
				</LiWrapper>
			</ul>
			<ul className="p-2 *:flex *:h-10 *:p-3 *:items-center">
				<span className="font-semibold">Explore</span>
				<LiWrapper>
					<ImFire className="mr-5 text-xl" />
					Trending
				</LiWrapper>
				<LiWrapper>
					<FiShoppingBag className="mr-5 text-xl" />
					Shopping
				</LiWrapper>
				<LiWrapper>
					<PiMusicNote className="mr-5 text-xl" />
					Music
				</LiWrapper>
				<LiWrapper>
					<BiMoviePlay className="mr-5  text-xl" />
					Movies
				</LiWrapper>
				<LiWrapper>
					<FiRadio className="mr-5 text-xl" />
					Live
				</LiWrapper>
				<LiWrapper>
					<SiYoutubegaming className="mr-5 text-xl" />
					Gaming
				</LiWrapper>
				<LiWrapper>
					<BiNews className="mr-5  text-xl" />
					News
				</LiWrapper>
				<LiWrapper>
					<GoTrophy className="mr-5  text-xl" />
					Sports
				</LiWrapper>
				<LiWrapper>
					<AiOutlineBulb className="mr-5  text-xl" />
					Courses
				</LiWrapper>
				<LiWrapper>
					<GiHanger className="mr-5 text-xl" />
					Fashion & Beauty
				</LiWrapper>
				<LiWrapper>
					<MdOutlinePodcasts className="mr-5 text-xl" />
					Podcasts
				</LiWrapper>
			</ul>
			<ul className="p-2 *:flex *:h-10 *:p-3 *:items-center">
				<span className="font-semibold">More From YouTube</span>
				<LiWrapper className="hover:bg-you-grey rounded-lg ml-2">
					<FaYoutube className="mr-5 shrink-0 text-xl text-you-red" />
					YouTube Premium
				</LiWrapper>
				<LiWrapper>
					<SiYoutubestudio className="mr-5 shrink-0 text-xl  text-you-red" />
					YouTube Studio
				</LiWrapper>

				<LiWrapper>
					<SiYoutubemusic className="mr-5 shrink-0 text-xl  text-you-red" />
					YouTube Music
				</LiWrapper>
				<LiWrapper>
					<SiYoutubekids className="mr-5 shrink-0 text-xl  text-you-red" />
					YouTube Kids
				</LiWrapper>
			</ul>
			<ul className="p-2 *:flex *:h-10 *:p-3 *:items-center">
				<LiWrapper>
					<IoSettingsOutline className="mr-5 shrink-0 text-xl" />
					Settings
				</LiWrapper>
				<LiWrapper>
					<MdOutlineOutlinedFlag className="mr-5 shrink-0 text-xl" />
					Report history
				</LiWrapper>
				<LiWrapper>
					<MdHelpOutline className="mr-5 shrink-0 text-xl" />
					Help
				</LiWrapper>
				<LiWrapper>
					<RiFeedbackLine className="mr-5 shrink-0 text-xl" />
					Send feedback
				</LiWrapper>
			</ul>
		</div>
	);
};

export default SideBar;

const LiWrapper = ({ children }) => {
	return <li className="hover:bg-you-grey rounded-lg ml-2">{children}</li>;
};
