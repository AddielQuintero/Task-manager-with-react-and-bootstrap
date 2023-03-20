import { Task } from '../adapters'

export const API = () => {
  const tasks = [
    { id: 1, text: 'Read for 1 hour', completed: false },
    { id: 2, text: 'Watering plants', completed: true },
    { id: 3, text: 'Making the bed', completed: true },
    { id: 4, text: 'Throw trash', completed: true },
  ]

  return tasks.map(task => Task(task))
}
