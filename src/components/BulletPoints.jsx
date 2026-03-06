import {Container} from './Container'
import {Heading } from './theme/Heading'
import { bulletPoints } from '../constants'

export const BulletPoints = () => {
  return (

   <>
   <Heading title= "Why choose us" subtitle="comment ça fonctionne" />
    <Container>
        <div className=' w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24'>
             {bulletPoints.map((bullet) => (
              <div key={bullet.id} 
              className={`
                flex flex-col lg:flex-row items-center gap-10 justify-between lg:gap-28
                 ${bullet.id % 2 === 0 ? "flex-row" : "flex-row-reverse lg:flex-row-reverse" } 
                `} 
              >
                <div className=' w-full flex justify-center lg:w-7/12 '>
                    <img src={bullet.image} 
                    alt= {bullet.alt} 
                    width={bullet.width} 
                    height={bullet.height}
                    className='px-20 lg:px-0' 
                    />
                </div>
                <div className=' w-full lg:w-5/12 space-y-5 text-center lg:text-left '>
                    <h3 className=' h3'>{bullet.title}</h3>
                    <p className='body-1 text-n-5'>{bullet.text}</p>
                </div>
              </div>
             ))}
        </div>
    </Container>
   </>
  )
}
