import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		title: 'FloodSense',
		description:
			'A real-time flood monitoring platform integrating IoT sensor data with a live analytics dashboard. Led system architecture design and built the end-to-end data pipeline from LoRaWAN sensor collection to preprocessing and storage in InfluxDB.',
		tags: ['IoT', 'LoRaWAN', 'InfluxDB', 'Real-time']
	},
	{
		title: 'ML-Based Strategy Analysis',
		description:
			'Decision tree and bagging ensemble learners built from scratch in Python to model financial data. Includes portfolio optimization with SciPy and Monte Carlo simulations to evaluate strategies under realistic constraints.',
		tags: ['Python', 'Machine Learning', 'NumPy', 'SciPy']
	},
	{
		title: 'ENCrypto Chat',
		description:
			'A secure communication application for exchanging encrypted messages using RSA and DES encryption algorithms implemented from scratch in C++.',
		tags: ['C++', 'Cryptography', 'RSA', 'DES'],
		repo: 'https://github.com/eadanp/ENCrypto'
	}
];
