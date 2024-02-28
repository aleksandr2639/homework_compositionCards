import { card_1, card_2} from '/src/data/Data'
import Card from './Card'

const Cards = () => {
 return (
     <>
         <Card {...card_1}>{<img src={card_1.img_src} className="card-img-top" alt="..." />}</Card>
         <Card {...card_2}/>
     </>
 )
}

export default Cards
