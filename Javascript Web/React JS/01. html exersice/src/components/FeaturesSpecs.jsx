export default function FeaturesSpecs(props) {
    return(
        <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
        <div className="media-body text-right media-right-margin">
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
        <div className="media-right icon-border"> <span className={props.className} aria-hidden="true"></span> </div>
    </div>
    )
}

