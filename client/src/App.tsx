import DisplayJson from './pages/DisplayJson'
import ProviderTheme from './theme/CreateTheme'

function App() {

  return (
    <ProviderTheme>
      <DisplayJson />
    </ProviderTheme>
  )
}

export default App
