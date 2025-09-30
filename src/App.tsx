import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Layout, AuthLayout } from './components';
import route from './constant/route';
import { Login, Signup } from './pages';

const queryClient = new QueryClient({});

const router = createBrowserRouter([
	{
		path: route.HOME,
		Component: Layout,
		children: [],
	},
	{
		path: route.AUTH,
		Component: AuthLayout,
		children: [
			{
				path: route.LOGIN,
				Component: Login,
			},
			{
				path: route.SIGNUP,
				Component: Signup,
			},
		],
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
