import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

import {
	IoNotificationsSharp,
	MdSettings,
	BsArrowRight,
	BsArrowLeft,
	DiReact,
	RiLogoutCircleRLine
} from "react-icons/all";

export function SideBar() {
	const [sideBar, setSideBar] = useState(false);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar}>
								<BsArrowRight />
							</button>


							<ul>
								<a href="/" title="Algo">
									<DiReact />
								</a>
								<a href="/" title="Algo">
									<DiReact />
								</a>
								<a href="/" title="Algo">
									<DiReact />
								</a>
								<a href="/" title="Algo">
									<DiReact />
								</a>
							</ul>
						</nav>
						<div>
							<ul>
								<a href="/" title="Notificaciones">
									<IoNotificationsSharp />
								</a>
								<a href="/" title="Configuraciones">
									<MdSettings />
								</a>
								<a href="/" title="Salir">
									<RiLogoutCircleRLine />
								</a>
							</ul>

						</div>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
								<div>
									<h1>Logo </h1>
								</div>

								<ul>
									<a href="/" title="Algo">
										<DiReact />
										<p>Algo</p>
									</a>
									<a href="/" title="Algo">
										<DiReact />
										<p>Algo</p>
									</a>
									<a href="/" title="Algo">
										<DiReact />
										<p>Algo</p>
									</a>
									<a href="/" title="Algo">
										<DiReact />
										<p>Algo</p>
									</a>
								</ul>
							</nav>
							<div>
								<ul>
									<a href="/">
										<IoNotificationsSharp />
										<p>Notificacione</p>
									</a>
									<a href="/">
										<MdSettings />
										<p>Configuraciones</p>
									</a>
									<a href="/">
										<RiLogoutCircleRLine />
										<p> Sair de la cuenta </p>
									</a>
								</ul>

								<span>
									<p>Leandro Agustin Di Palma</p>
								</span>
							</div>
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}
