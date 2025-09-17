import { type ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
	return <main className="relative flex-1 bg-white p-4">{children}</main>;
};

export default Main;
