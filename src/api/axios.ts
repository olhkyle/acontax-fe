import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true, // 쿠키 기반 인증 시 필요
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
