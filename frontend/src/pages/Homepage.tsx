import GlobalMap from "../components/HomePage/GlobalMap";

const Homepage = () => {
	return (
		<div className="bg-red-500 flex flex-col flex-1 items-center justify-center text-center">
			<div>
				<h1>Bienvenue sur Passion Passerelle !</h1>
				<div>
					<p>
						Le site dont le but est de recenser toutes les passerelles croisées
						sur notre chemin
					</p>
				</div>
			</div>
			<GlobalMap />
			<div>
				<div>
					<p>
						Vous avez croisé une passerelle et souhaitez la rajouter à notre
						liste ?
					</p>
					<p>Inscrivez-vous pour rejoindre la communauté !</p>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
