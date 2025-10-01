import api from '../axios';

const getAllStatements = async () => {
	try {
		const res = await api.get('/statement');
		return res.data;
	} catch (err) {
		console.error('Failed to fetch statements', err);
		throw err;
	}
};

export { getAllStatements };
