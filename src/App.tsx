import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Layout, AuthLayout } from './components';
import route from './constant/route';
import { Home, Login, Signup, NotFound, Landing } from './pages';

const queryClient = new QueryClient({});

const router = createBrowserRouter([
	{
		path: route.SERVICE.ROOT,
		Component: Layout,
		children: [{ path: route.SERVICE.ROOT, Component: Home }],
	},
	{
		path: route.AUTH.ROOT,
		Component: AuthLayout,
		children: [
			{
				path: route.AUTH.LOGIN,
				Component: Login,
			},
			{
				path: route.AUTH.SIGNUP,
				Component: Signup,
			},
		],
	},
	{
		path: route.HOME,
		Component: Landing,
	},
	{
		path: route.SERVICE.NOT_FOUND,
		Component: NotFound,
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
