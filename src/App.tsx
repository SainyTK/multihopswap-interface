import { useState } from 'react'
import Notification from './components/Notification';
import SwapPanel from './components/SwapPanel';
import Topbar from './components/Topbar';
import { ETH } from './constants/tokens';
import { TokenType } from './types/TokenType';

function App() {

  const [inputToken, setInputToken] = useState(ETH);
  const [inputAmount, setInputAmount] = useState('');
  const [route, setRoute] = useState<TokenType[]>([]);
  const [fees, setFees] = useState<number[]>([]);

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">

      <header className="p-4 mb-12">
        <Topbar />
      </header>

      <section className="flex justify-center">
        <SwapPanel
          inputToken={inputToken}
          inputAmount={inputAmount}
          route={route}
          fees={fees}
          onChangeInputAmount={input => setInputAmount(input)}
          onChangeInputToken={token => setInputToken(token)}
          onChangeRoute={route => setRoute(route)}
          onChangeFees={fees => setFees(fees)}
        />
      </section>

      <Notification />

    </div>
  )
}

export default App
