import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import route from '@/constant/route';

const AuthLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// 1. has Auth Info -> redirectTo ADMIN HOME
		// 2. none -> redirectTo ADMIN LOGIN
		navigate(route.LOGIN);
	}, []);

	return (
		<div className="min-h-screen">
			<div className="flex flex-col flex-1 justify-center mx-auto p-4 max-w-[500px]">
				<h1 className="mt-8 mb-auto text-4xl font-black text-center">ACTX</h1>
				<p className="mt-8 text-lg text-gray-600 font-medium text-center">Welcome!</p>
				<section>
					<Outlet />
				</section>
			</div>
		</div>
	);
};

export default AuthLayout;
