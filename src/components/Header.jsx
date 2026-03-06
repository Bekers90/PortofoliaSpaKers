import{ logoApp } from '../assets/index';
import { Container } from './Container';
import { Button } from './Button';
import { ElipseBlueBlur } from './theme/Header';

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
        <Container className={"relative bg-black"}>
            <div className='relative z-10 flex items-center justify-between py-4 lg:py-6'>
                <img src={logoApp} width={104} height={32} alt="App-logo" />
                <Button theme="secondary">login</Button>
            </div>
            <ElipseBlueBlur />
        </Container>
    </div>
  )
}
