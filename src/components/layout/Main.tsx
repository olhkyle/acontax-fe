import { type ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
	return <main className="p-4">{children}</main>;
};

export default Main;
