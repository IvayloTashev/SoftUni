import FeaturesSpecs from "./FeaturesSpecs";

export default function Features() {
    return (
        <section className="feature section-padding" data-scroll-index='2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>Features</h3>
                            <span className="line"></span>
                            <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>
                        <div className="section-content text-center">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">

                                    <FeaturesSpecs name={'Fast Processing'} className={'fa fa-bolt'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>
                                    <FeaturesSpecs name={'Low Power Consuming'} className={'fa fa-battery-full'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>
                                    <FeaturesSpecs name={'Wifi Compatibility'} className={'fa fa-wifi'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>

                                </div>
                                <div className="col-md-4 d-none d-md-block d-lg-block">
                                    <div className="feature-mobile"> <img src="images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp" /> </div>
                                </div>
                                <div className="col-md-4 col-sm-12">

                                    <FeaturesSpecs name={'Regular Updates'} className={'fa fa-check-double'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>
                                    <FeaturesSpecs name={'Save Money'} className={'fa fa-dollar-sign'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>
                                    <FeaturesSpecs name={'Unlimited Storage'} className={'fa fa-hdd'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore'}></FeaturesSpecs>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


