import { Container } from './Container'
import { branding } from '../constants'

export const Branding = () => {


  return (
    <Container>
        <div className='lg:gap-1 flex flex-wrap items-center mx-auto justify-between max-w-5xl py-5 lg:py-10 '>
            { branding.map((brand, idx) =>(
                <div key={brand.id} 
                className={ `w-1/2 flex justify-center  sm:w-1/5 md:w-1/5 lg:w-1/10 
                ${branding.length % 2 !==0 && idx === branding.length - 1 ? "hidden lg:flex" : ""}` }>
                    <img 
                    src={brand.image} 
                    width={50} height={96} 
                    alt={brand.alt} 
                     />
                </div>
              )
            )}
        </div>
    </Container>
  )
}
