import card1 from '../../image/cards/aCard.png';

let card=[{
    id: 1,
    name: "A Card",
    image: card1,
    desc: "This is just a card"
}]


const getCard = (key)=> {
    return card.find((c)=>{
        return c.id === key;
    });
}

export default getCard;