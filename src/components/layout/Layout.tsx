import { Outlet } from 'react-router';
import { Aside, Main, Nav } from '.';

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-1">
				<Aside />
				<Main>
					<Nav />
					<Outlet />
				</Main>
			</div>
		</div>
	);
};

export default Layout;
