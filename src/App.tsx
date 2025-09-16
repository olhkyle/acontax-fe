import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Layout } from './components/layout';
import route from './constant/route';

const queryClient = new QueryClient({});

const router = createBrowserRouter([
	{
		path: route.HOME,
		Component: Layout,
		children: [],
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
