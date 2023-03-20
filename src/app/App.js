import { TodoProvider } from '../contexts'
import { AppUi } from './AppUI'

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )
}

export default App
