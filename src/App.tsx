import { Container } from './components/Container/index';
import { CountDown } from './components/CountDown/index';
import { Cycles } from './components/Cycles/index';
import { DefaultInput } from './components/DefaultInput/index';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu/index';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='Form' method='get'>
          <div className='formRow'>
            <DefaultInput
              type='text'
              id='input'
              labelText='Task'
              placeholder='Digite sua Task'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles></Cycles>
          </div>
        </form>
      </Container>
    </>
  );
}
