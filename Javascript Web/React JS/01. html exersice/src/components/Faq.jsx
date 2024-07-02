import FaqQuestions from "./FaqQuestios"

export default function Faq() {
    return (
        <section className="faq section-padding prelative" data-scroll-index='5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>Frequently Asked Questions</h3>
                            <span className="line"></span>
                            <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>
                        <div className="section-content">
                            <div className="row">

                                <FaqQuestions question={'Nam tellus felis, dignissim quis dui ?'} answer={'Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo.'}></FaqQuestions>
                                <FaqQuestions question={'Mauris scelerisque, dui non faucibus vulputate ?'} answer={'Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo.'}></FaqQuestions>
                                <FaqQuestions question={'Nullam elit est, ultricies et tellus ac ?'} answer={'Ut vestibulum euismod aliquet. Quisque nec malesuada nibh. Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi. Curabitur id porta ipsum, et vestibulum dui.'}></FaqQuestions>
                                <FaqQuestions question={'Suspendisse fermentum placerat enim, at pellentesque augue elit est ?'} answer={'Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi.'}></FaqQuestions>
                                <FaqQuestions question={'Ut vestibulum euismod aliquet. Quisque nec malesuada nibh ?'} answer={'Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.'}></FaqQuestions>
                                <FaqQuestions question={'Donec commodo dapibus congue ?'} answer={'Nullam elit est, ultricies et tellus ac, euismod placerat orci fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.'}></FaqQuestions>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
