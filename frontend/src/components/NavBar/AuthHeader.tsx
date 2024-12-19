// import { useState } from "react"
// import { HiArrowRightStartOnRectangle } from "react-icons/hi2";

const AuthHeader = () => {
	const AuthStyle = "flex flex-row gap-2 w-full justify-center font-medium";
	const buttonStyle =
		"border-solid border-2 border-md border-white rounded-md p-2 text-sm hover:bg-white hover:text-text active:bg-maindarker active:text-white";
	return (
		<>
			<div className={AuthStyle}>
				<div className={buttonStyle}>Se connecter</div>
				<div className={buttonStyle}>S'enregistrer</div>
			</div>

			{/* {isLoggedIn && <div className={AuthStyle}>
        <span>Bonjour, Claire !</span>
        <HiArrowRightStartOnRectangle/>
        </div> } */}
		</>
	);
};

export default AuthHeader;
