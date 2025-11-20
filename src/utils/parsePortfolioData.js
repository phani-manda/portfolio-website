export function parsePortfolioData(raw) {
	// Defensive normalization to keep UI stable even with partial/missing data
	const safeArray = (val) => (Array.isArray(val) ? val : []);
	const safeString = (val, fallback = '') => (typeof val === 'string' ? val : fallback);
	const safeObject = (val) => (val && typeof val === 'object' ? val : {});

	const personalRaw = safeObject(raw?.personal);
	const aboutRaw = safeObject(raw?.about);
	const skillsRaw = safeObject(raw?.skills);

	const normalized = {
		personal: {
			name: safeString(personalRaw.name, 'Your Name'),
			title: safeString(personalRaw.title, ''),
			subtitle: safeString(personalRaw.subtitle, ''),
			description: safeString(personalRaw.description, ''),
			email: safeString(personalRaw.email, ''),
			phone: safeString(personalRaw.phone, ''),
			location: safeString(personalRaw.location, ''),
			resume: safeString(personalRaw.resume, ''),
			linkedin: safeString(personalRaw.linkedin, ''),
			github: safeString(personalRaw.github, ''),
		},
		about: {
			intro: safeString(aboutRaw.intro, ''),
			highlights: safeArray(aboutRaw.highlights),
			education: {
				degree: safeString(aboutRaw.education?.degree, ''),
				university: safeString(aboutRaw.education?.university, ''),
				graduation: safeString(aboutRaw.education?.graduation, ''),
				coursework: safeArray(aboutRaw.education?.coursework),
			},
		},
		skills: {
			languages: safeArray(skillsRaw.languages),
			frontend: safeArray(skillsRaw.frontend),
			backend: safeArray(skillsRaw.backend),
			databases: safeArray(skillsRaw.databases),
			tools: safeArray(skillsRaw.tools),
			concepts: safeArray(skillsRaw.concepts),
		},
		projects: safeArray(raw?.projects).map((p, idx) => ({
			id: p?.id ?? idx,
			title: safeString(p?.title, 'Untitled Project'),
			description: safeString(p?.description, ''),
			image: safeString(p?.image, ''),
			github: safeString(p?.github, ''),
			live: safeString(p?.live, ''),
			tech: safeArray(p?.tech),
			features: safeArray(p?.features),
		})),
		upcomingProjects: safeArray(raw?.upcomingProjects).map((p, idx) => ({
			id: p?.id ?? idx,
			title: safeString(p?.title, ''),
			description: safeString(p?.description, 'Details coming soon.'),
			status: safeString(p?.status, 'Planning'),
			timeline: safeString(p?.timeline, ''),
			tech: safeArray(p?.tech),
		})),
		experience: safeArray(raw?.experience).map((e, idx) => ({
			id: e?.id ?? idx,
			title: safeString(e?.title, ''),
			company: safeString(e?.company, ''),
			period: safeString(e?.period, ''),
			description: safeString(e?.description, ''),
			achievements: safeArray(e?.achievements),
		})),
	};

	return normalized;
}


