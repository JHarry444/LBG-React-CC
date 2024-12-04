import { createContext, ReactNode, useContext } from "react";

type TrainerCardData = {
    image?: string,
    title?: string,
    age?: string,
    specialism?: string
}

const TrainerCardContext = createContext<TrainerCardData>({ image: "", title: "", age: "", specialism: "" });

type TrainerCardProps = {
    data: TrainerCardData,
    children: ReactNode | ReactNode[]
}
const TrainerCard = ({ data, children }: TrainerCardProps) => {
    return (
        <TrainerCardContext.Provider value={data}>
            <div className="card">
                {children}
            </div>
        </TrainerCardContext.Provider>
    );
}

TrainerCard.Title = () => {
    const { title } = useContext(TrainerCardContext);
    return (
        <h5>{title}</h5>
    )
}

type TrainerCardImageProps = { top?: boolean }

TrainerCard.Image = ({ top }: TrainerCardImageProps) => {
    const { image } = useContext(TrainerCardContext);
    return (
        <img src={image} className={`card-image-${top ? 'top' : 'bottom'}`} />
    )
}

TrainerCard.Age = () => {
    const { age } = useContext(TrainerCardContext);
    return (
        <p className="card-text">Age: {age}</p>
    )
}

TrainerCard.Specialism = () => {
    const { specialism } = useContext(TrainerCardContext);
    return (
        <p className="card-text">Specialism: {specialism}</p>
    )
}

type TrainerCardBodyProps = { children: ReactNode | ReactNode[] }

TrainerCard.Body = ({ children }: TrainerCardBodyProps) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

export default TrainerCard;