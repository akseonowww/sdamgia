export interface ISubjectLevel {
	title: string
	mobileTitle: string
	url: string
}

export interface ISubject {
	title: string
	levels?: Array<ISubjectLevel>
	url?: string
}

export const getSubjectList = (): Array<ISubject> => [
	{
		title: 'Математика',
		levels: [
			{
				title: 'Базовый уровень',
				mobileTitle: 'база',
				url: 'mathb',
			},
			{
				title: 'Профильный уровень',
				mobileTitle: 'профиль',
				url: 'math',
			},
		],
	},
	{
		title: 'Информатика',
		url: 'inf',
	},
	{
		title: 'Русский язык',
		url: 'rus',
	},
	{
		title: 'Английский язык',
		url: 'en',
	},
	{
		title: 'Немецкий язык',
		url: 'de',
	},
	{
		title: 'Французcкий язык',
		url: 'fr',
	},
	{
		title: 'Испанский язык',
		url: 'sp',
	},
	{
		title: 'Физика',
		url: 'phys',
	},
	{
		title: 'Химия',
		url: 'chem',
	},
	{
		title: 'Биология',
		url: 'bio',
	},
	{
		title: 'География',
		url: 'geo',
	},
	{
		title: 'Обществознание',
		url: 'soc',
	},
	{
		title: 'Литература',
		url: 'lit',
	},
	{
		title: 'История',
		url: 'hist',
	},
]
