const Card = (props) => {
    const { heading, icon, description } = props;

    return (
        <div className="card">
            <div className="card-body items-center text-center">
                <img src={icon} />
                <p className="text-grey-light">{heading}</p>
                <p className="text-grey-light">{description}</p>
            </div>
        </div>
    )
}
export default Card;