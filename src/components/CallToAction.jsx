import { Container } from './Container'
import { Button } from './Button'
import { icoArrowRight } from '../assets'

export const CallToAction = ({ minify = false}) => {
  return (
    <Container>
        <div className=' max-w-4xl mx-auto  py-5 lg:py-10'>
            <div className={`rounded-xl lg:rounded-3xl bg-gradient-to-b from-red-700 to-amber-950 p-6 lg:p-16 gap-8
                ${!minify ? "flex flex-col items-center" 
                : "flex  items-center justify-between lg:flex lg:flex-row lg:items-center" }`} >

                <div className={
                    minify 
                    ? "space-y-1 text-center lg:text-start" 
                    : "space-y-4 text-center"
                    }> 
                    <div className='caption-1 text-n-1/50'>  Ready to start ?</div>
                    <h3 className='h3'> Un Audit gratuit chez KERS. </h3>
                </div>    
                    <Button theme="primary" className='flex items-center justify-center gap-1'>
                       <span> Get started </span>
                        <img src={icoArrowRight } alt="Arrow right" width={24} height={24} />
                    </Button>
            </div>
        </div>
    </Container>
  )
}
