import React from 'react';
import { Button, Input } from '@/components';
import route from '@/constant/route';
import { Link } from 'react-router';

const Login = () => {
	return (
		<div className="flex flex-col gap-4 mt-8 p-4 bg-white rounded-lg">
			<Button type="button" size="lg" variant="secondary">
				Google Login
			</Button>
			<form className="flex flex-col gap-4 mt-8">
				<Input type="email" placeholder="hello@actx.com" />
				<Input type="password" placeholder="*******" />
				<Button type="submit" size="lg" variant="default">
					Login
				</Button>
			</form>

			<Button asChild variant="link" className="mx-auto text-center">
				<Link to={route.SIGNUP}>Do you need to register?</Link>
			</Button>
		</div>
	);
};

export default Login;
