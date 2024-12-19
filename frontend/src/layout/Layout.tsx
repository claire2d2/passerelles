import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="min-h-screen flex flex-col items-center w-full bg-red-500">
			<div className="flex-1 w-full h-full flex flex-col">
				<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-pink-200">
					navbar
				</nav>
				<div className="flex flex-1 flex-col bg-gray-200 h-full">
					<Outlet />
				</div>
				<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 bg-red-200">
					footer
				</footer>
			</div>
		</main>
	);
};

export default Layout;
