import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdMic } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { togglebar } from "../utils/store/slice";

const Header = () => {
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(togglebar())
	};
	return (
		<div className="flex justify-between align-middle">
			<div className="flex">
				<button onClick={handleToggle} className="">
					<RxHamburgerMenu className="text-2xl p-2 w-10 h-10 rounded-[50%] hover:bg-you-hover" />
				</button>
				<a href="" className="self-center">
					<FaYoutube className="text-4xl text-you-red" />
				</a>
				<h1 className="font-semibold self-center text-[20px] mx-2">YouTube</h1>
			</div>

			<div className="flex">
				<input
					className="rounded-l-[50px] border border-1 px-5"
					type="text"
					placeholder="Search"
				/>

				<button className="rounded-r-[50px] border border-1 px-3">
					<IoSearch className="text-2xl p-2 w-10 h-10 rounded-[50%]" />
				</button>

				<button>
					<MdMic className="text-2xl p-2 w-10 h-10 rounded-[50%] hover:bg-you-hover mx-3" />
				</button>
			</div>

			<div className="flex">
				<button className="mx-3">
					<MdOutlineVideoCall className="text-2xl p-[6px] w-10 h-10 rounded-[50%] align-middle hover:bg-you-hover" />
				</button>
				<button>
					<FaRegBell className="p-[10px] w-10 h-10 rounded-[50%] hover:bg-you-hover" />
				</button>
				<button className="mx-3">
					<IoPersonCircleOutline className="text-2xl p-2 w-10 h-10 rounded-[50%] hover:bg-you-hover" />
				</button>
			</div>
		</div>
	);
};

export default Header;
