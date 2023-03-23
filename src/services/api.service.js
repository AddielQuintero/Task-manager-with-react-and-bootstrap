import { Task } from '../adapters'

export const API = () => {
  const tasks = [
    { id: 243849, text: 'Read for 1 hour', completed: false },
    { id: 90843, text: 'Watering plants', completed: true },
    { id: 359724, text: 'Making the bed', completed: true },
    { id: 609739, text: 'Throw trash', completed: true },
  ]

  return tasks.map((task) => Task(task))
}
