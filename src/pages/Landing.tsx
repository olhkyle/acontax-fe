import { Link } from 'react-router';
import route from '@/constant/route';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllStatements } from '@/api/statement';

const Landing = () => {
	const { data } = useSuspenseQuery({
		queryKey: ['statements'],
		queryFn: getAllStatements,
	});

	console.log(data);
	return (
		<div className="flex flex-col flex-1 min-h-screen mx-auto p-4 w-full">
			<h1 className="text-4xl text-center font-black">It's ACTX Landing Page</h1>
			<div className="flex flex-col gap-4 mt-8">
				<Link to={route.SERVICE.ROOT} className="mx-auto mt-4 px-4 py-2 bg-black text-white rounded-lg">
					Go to Service
				</Link>
				<Link to={route.AUTH.LOGIN} className="mx-auto mt-4 px-4 py-2 bg-black text-white rounded-lg">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Landing;
