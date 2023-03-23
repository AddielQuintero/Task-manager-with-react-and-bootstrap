import { TaskProvider } from '../../contexts'
import { AppUi } from './AppUI'

function App() {
  return (
    <TaskProvider>
      <AppUi />
    </TaskProvider>
  )
}

export default App
