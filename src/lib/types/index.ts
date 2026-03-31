export interface Project {
	title: string;
	description: string;
	tags: string[];
	url?: string;
	repo?: string;
}

export interface SocialLink {
	label: string;
	url: string;
}
