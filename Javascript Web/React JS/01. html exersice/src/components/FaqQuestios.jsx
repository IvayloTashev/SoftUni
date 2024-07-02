export default function FaqQuestions(props) {
    return (
        <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
            <h4>{props.question}</h4>
            <p>{props.answer}</p>
        </div>
    )
}
