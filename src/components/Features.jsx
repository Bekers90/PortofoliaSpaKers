import { Container } from './Container'
import { features } from '../constants'

export const Features = () => {
  return (
    <Container>
        <div className='max-w-4xl mx-auto py-5 lg:py-10'>
            <div className='space-y-4 mb-8 text-center lg:text-start'>
                <h2 className='h2'>Nos services</h2>
                <p className='body-1 text-n-5'>
                    Kers propose des services de conception et de développement de sites web, applications mobiles et de solutions digitales.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-5 lg:gap-10'>
                {features.map((feature) => (
                      <div 
                      className='border border-stoke-1 hover:bg-red-800 rounded-xl lg:rounded-2xl p-8 cursor-pointer space-y-8 animate'
                      key={feature.id}>
                        <img src={feature.image} width={50} height={50} alt={feature.alt}
                        className="drop-shadow-[0_0_3px_red] brightness-50"
                         />
                        <div className='gap-y-4'>
                            <h3 className='h4 py-4'>{feature.title }</h3>
                            <p className='body-2 text-n-3'>{feature.text}</p>
                        </div>
                      </div>
                 ))}
            </div>
        </div>
    </Container>
  )
}
