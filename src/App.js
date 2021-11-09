
import { Pokedex } from '../src/components/pages/pokedex'
import { AppProvider } from './contexts/app/app.context';
import { applyInterceptor } from './utils/interception'

applyInterceptor();
function App() {
  return (
    <>
      <AppProvider>
        <Pokedex />
      </AppProvider>
    </>
  );
}

export default App;
