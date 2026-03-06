import { Heading } from './theme/Heading'
import { Container } from './Container'
import { pricing } from '../constants'
import { icoCheck } from '../assets'
import { Button } from './Button'

export const Pricing = () => {
  return (
    <div id='pricing'>
        <Heading title="Pricing" subtitle="Plans" />
        <Container>
            <div className=' grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16'>
                {pricing.map((plan) => (
                 <div key={plan.id} className={plan.featured ? "" : " lg:mt-14"}> 
                    <div 
                    className={`
                        ${plan.featured 
                            ? "bg-linear-to-b from-orange-700 to-amber-950" 
                            : "bg-linear-to-b from-orange-600 to-amber-950"
                        }
                        rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start
                        `}
                    >

                    <div className='text-caption-1 text-black uppercase'>
                        {plan.plan}
                    </div>
                    <div className='space-y-3'>
                        <span className='h1'>{plan.amount}</span>
                        <span className = 'h4'> Franc Cfa</span>
                    </div>
                         <hr className={`
                            "border-t mt-7 mb-4 lg:mt-16 lg:mb-8"
                            ${plan.featured ? " border-n-6" : " border-stroke-1"}
                            `} />

                            <div className='space-y-4 pb-8'>
                                 { plan.features.map((feature, idx) => (
                                      <div key={idx}
                                      className='flex items-center justify-center lg:justify-start gap-3'
                                      >
                                        <img src={icoCheck} alt="check" width={24} height={24} />
                                        <div className='body-2 text-n-3'>{feature}</div>
                                      </div>
                                 ))}
                            </div>
                            <div className=' flex justify-center lg:justify-start '>
                                <Button theme = {plan.featured ? "primary" : "secondary"} >
                                    {plan.amount > 0 ? "Get started" : "started for Free" }
                                </Button>
                            </div>
                    </div>
                 </div>  
                ))
                }
            </div>
        </Container>
    </div>
  )
}
