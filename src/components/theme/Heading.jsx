import { Container } from "../Container"

export const Heading = ({ title, subtitle }) => {
  return (
    <Container className="py-5 lg:py-10">
        <div className=" caption-1 uppercase text-center text-n-5">
            {title}
        </div>
        <h2 className="h2 text-center ">{ subtitle }</h2>
    </Container>
  )
}
