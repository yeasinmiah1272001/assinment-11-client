import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "../Detail/Detail";


const Details = () => {
    const [card, setCard] = useState({})
    const { id } = useParams();
    const cards = useLoaderData();
    console.log(cards)
    useEffect(() => {
        const findCards = cards.find(card => card.id == id)
        console.log(findCards)
        setCard(findCards)
    }, [id, cards])

    return (
        <div className="">
            <div className="mt-10 ">
                <Detail card={card}></Detail>
            </div>
        </div>
    );
};

export default Details;