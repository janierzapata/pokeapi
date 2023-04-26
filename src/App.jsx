import './App.css'
import { AppProvider } from './context/app/app.context';
import { Pokedex } from './components/pages/Pokedex'
import { applyInterceptor } from './utils/interseption';

applyInterceptor();
function App() {

  return (
   <>
   <AppProvider>
    <Pokedex />
   </AppProvider>
   </>
  )
}

export default App
