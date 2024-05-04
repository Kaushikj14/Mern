import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                                  <p>We are world best IT Comapny</p>
                                  <h1>Welcome to Kaushik Jain</h1> 
                                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facere natus dolor expedita repellat impedit numquam magnam velit adipisci officiis inventore illo, consequuntur nesciunt mollitia saepe eligendi labore? Obcaecati, exercitationem? Iste atque voluptas vero nisi dicta numquam libero. Culpa perferendis voluptas enim voluptatem, laboriosam incidunt quidem. Quod quasi unde consectetur!
                                    </p>     
                                   
                                    <div className="btn btn-group">
                                        <a href="/contact">
                                            <button className="btn">Connect Now</button>
                                        </a>

                                        <a href="/services">
                                            <button className="btn secondry-btn">Learn More</button>
                                        </a>
                                    </div>
                        </div>

                        {/* hero images */}
                                    <div className="hero-image">
                                        <img src="/images/home.png" alt="" width={400} height={400} />
                                    </div>
                    </div>

                </section>
            </main>


            {/* 2nd section */}
            <Analytics />

            {/* 3rd section */}
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        {/* hero images */}
                        <div className="hero-image">
                                        <img src="/images/home.png" alt="" width={400} height={400} />
                                    </div>


                        <div className="hero-content">
                                  <p>We are here to help youy</p>
                                  <h1>Get started today</h1> 
                                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facere natus dolor expedita repellat impedit numquam magnam velit adipisci officiis inventore illo, consequuntur nesciunt mollitia saepe eligendi labore? Obcaecati, exercitationem? Iste atque voluptas vero nisi dicta numquam libero. Culpa perferendis voluptas enim voluptatem, laboriosam incidunt quidem. Quod quasi unde consectetur!
                                    </p>     
                                   
                                    <div className="btn btn-group">
                                        <a href="/contact">
                                            <button className="btn">Connect Now</button>
                                        </a>

                                        <a href="/services">
                                            <button className="btn secondry-btn">Learn More</button>
                                        </a>
                                    </div>
                        </div>

                        
                    </div>

                </section>
        
        </>
    );

}