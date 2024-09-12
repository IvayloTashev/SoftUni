import Person from "./Person";

export default function Team() {
    return (
        <section className="team section-padding" data-scroll-index='3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>Our Team</h3>
                            <span className="line"></span>
                            <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>
                        <div className="section-content text-center">
                            <div className="row">

                                <Person image={'images/user1.jpg'} name={'Nitu Singh'} position={'Marketing Specialist'} ></Person>
                                <Person image={'images/user2.jpg'} name={'Yogesh Singh'} position={'CEO & Founder'} ></Person>
                                <Person image={'images/user3.jpg'} name={'Nisha Sharma'} position={'Web Developer'} ></Person>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}