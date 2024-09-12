export default function Person(props) {
    return (
        <div className="col-md-4">
            <div className="team-detail wow bounce" data-wow-delay="0.2s"> <img src={props.image} className="img-fluid" />
                <h4>{props.name}</h4>
                <p>{props.position}</p>
            </div>
        </div>
    )
}