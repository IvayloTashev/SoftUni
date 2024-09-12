export default function AboutSpecs(props) {
    return(
        <div className="col-md-4">
        <div className="icon-box wow fadeInUp" data-wow-delay="0.2s"> <i className={props.className} aria-hidden="true"></i>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
    </div>
    )
}



