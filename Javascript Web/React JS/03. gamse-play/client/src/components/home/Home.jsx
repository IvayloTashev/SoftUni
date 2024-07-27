import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import LatestGame from "../latest-game/LatestGame";

export default function Home() {
    const [latestGame, setLatestGame] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();
            setLatestGame(result.reverse().slice(0, 3))
        })();
    }, []);


    return (
        // <!--Home Page-->
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGame.length > 0
                    ? latestGame.map(game => <LatestGame key={game._id} {...game}/>)
                    : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    );
}