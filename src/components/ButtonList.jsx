/* eslint-disable react/prop-types */
const ButtonList = () => {
	return (
		<div className="flex">
			<ButtonWrap>All</ButtonWrap>
			<ButtonWrap>Gaming</ButtonWrap>
			<ButtonWrap>IPL</ButtonWrap>
			<ButtonWrap>Live</ButtonWrap>
			<ButtonWrap>APIs</ButtonWrap>
			<ButtonWrap>Esports</ButtonWrap>
			<ButtonWrap>Music</ButtonWrap>
			<ButtonWrap>Valorant</ButtonWrap>
			<ButtonWrap>Mixes</ButtonWrap>
			<ButtonWrap>Data Structures</ButtonWrap>
			<ButtonWrap>Sports</ButtonWrap>
			<ButtonWrap>Laptops</ButtonWrap>
		</div>
	);
};

const ButtonWrap = ({ children }) => {
	return (
		<div className="flex m-1.5 shrink-0">
			<button className="bg-you-grey rounded-md text-[15px] py-1 px-3 font-semibold">
				{children}
			</button>
		</div>
	);
};

export default ButtonList;
