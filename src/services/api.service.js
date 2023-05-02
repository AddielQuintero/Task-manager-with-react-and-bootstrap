import { Task } from '../adapters'

export const API = () => {
  const tasks = [
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 3, text: 'Watering plants', completed: true },
    { id: 2, text: 'Making the bed', completed: true },
    { id: 1, text: 'Throw trash', completed: true },
  ]

  return tasks.map((task) => Task(task))
}
