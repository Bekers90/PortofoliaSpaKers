import { social } from '../constants'
import { Container } from './Container'

export const Footer = () => {
 console.log(social);

  return (
    <div className='bg-gradient-to-b from-black to-amber-950 py-5 lg:py-10 mt-5 lg:mt-10'>
        <Container className='flex flex-col gap-3 lg:flex-row items-center justify-between body-3 text-n-3'>
           <div className='flex items-centergap-4 '>
             {social.map((link) => (
                <a key={link.id} title={link.alt} href={link.link} target="_blank"  rel="noopener noreferrer" >
                    <img src={link.ico} alt={link.alt} width={44} height={24}  className='px-1'/>
                </a>
             ) )}
           </div>
           <div className='space-x-4'>
            <a href="#/" target='_blank' rel='noreferrer'>Terms & conditions</a>
            <a href="#/" target='_blank' rel='noreferrer'> Privacy Policy</a>
           </div>
           <div>@ {new Date().getFullYear()} All right reserved by KERS 
            <a href="/#" target='_blank' rel='noreference'>
            Remote kers</a>
           </div>
        </Container>
     </div>
  )
}
