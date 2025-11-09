export interface IGoal {
	id: string
	title: string
	image: string
	bigImage: string
	tasks: ITask[]
}

export interface ITask {
	id: string
	title: string
	isCompleted: boolean
}
