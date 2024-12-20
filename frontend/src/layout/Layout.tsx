import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthHeader from "../components/NavBar/AuthHeader";

const Layout = () => {

	return (
		<main className="h-screen flex flex-col items-center w-full">
			<div className="flex-1 w-full h-full flex flex-col">
				<nav className="w-full h-16 bg-main grid grid-cols-5 gap-2 font-bold text-white items-center ">
					<div className="col-span-1 pl-5 text-2xl"><Link to="/">Passion Passerelles</Link></div>
					<ul className="col-span-3 grid grid-cols-3 gap-2  text-center ">
						<li className="hover:text-text"> <Link to="/all">Liste complète</Link> </li>
						<li className="hover:text-text"><Link to="/add">Rajouter une passerelle</Link></li>
						<li className="hover:text-text"><Link to="/about">A propos</Link></li>
					</ul>
					<div className="col-span-1 flex items-center"><AuthHeader/></div>
				</nav>
				<div className="flex flex-1 flex-col bg-gray-200 h-full">
					<Outlet />
				</div>
				<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 h-12">
					footer
				</footer>
			</div>
		</main>
	);
};

export default Layout;
