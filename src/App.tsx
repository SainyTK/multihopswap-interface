import { useState } from 'react'
import SwapPanel from './components/SwapPanel';
import Topbar from './components/Topbar';
import { TOKENS } from './constants/tokens';
import { TokenType } from './types/TokenType';

function App() {

  const [inputToken, setInputToken] = useState(TOKENS['ETH']);
  const [inputAmount, setInputAmount] = useState(0);
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

    </div>
  )
}

export default App
