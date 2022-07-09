const CONFIG = {
	// General
	name: 'Sajay',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: secrets.WEATHERAPI, // Write here your API Key
	weatherIcons: 'Onedark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'SearX',
			icon: 'search',
			link: 'https://searx.tiekoetter.com/',
		},
		{
			id: '2',
			name: 'ProtonMail',
			icon: 'mail',
			link: 'https://mail.proton.me/',
		},
		{
			id: '3',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/sajayprakash',
		},
		{
			id: '4',
			name: 'Animixplay',
			icon: 'film',
			link: 'https://animixplay.to/',
		},
		{
			id: '5',
			name: 'Speedtest',
			icon: 'gauge',
			link: 'https://www.speedtest.net/',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'external-link',
			id: '1',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'Twitter',
					link: 'https://www.twitter.com/',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/',
				},
				{
					name: 'Whatsapp Web',
					link: 'https://web.whatsapp.com/',
				},
			],
		},
		{
			icon: 'globe',
			id: '2',
			links: [
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.in/',
				},
				{
					name: 'My website',
					link: 'https://sajayprakash.github.io/',
				},
				{
					name: 'My Megathread',
					link: 'https://sajayprakash.github.io/megathread/#/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
