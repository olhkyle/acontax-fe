import { Aside, Main, Nav } from '.';

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="flex flex-1">
				<Aside />

				<Main>
					<Nav />
				</Main>
			</div>
		</div>
	);
};

export default Layout;
