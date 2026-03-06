import { uiInterface } from '../assets';
import { Container } from './Container';
import { Button } from './Button';
import { Grid } from './theme/Hero';


export const Hero = () => {


  return (
    <div className="relative">
        <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
            <div className='text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7'>
                <h1 className='hero'>
                    Contruisons un sass <span className='bg-clip-text text-transparent bg-linear-to-b from-red-700 to-amber-950'> Moderne </span>pour votre Startups
                </h1>
                <p className='body-1 text-n-5'>
                   Kers une agence Digital pour l'innovation de votre entreprise.
                   La solution qui fait optimiser et automatiser votre activité.... 
                </p>
                <Button theme="primary" href="#">
                    Princing and plans
                </Button>
            </div>
            <img src={uiInterface} alt="ui-interface" className='w-full opacity-80 mx-auto rounded-3xl' style={{width: "70%", height: "auto" }} />
        </Container>
        <Grid />
    </div>
  )
}
