import { useEffect, useState } from "react";
import * as gamesAPI from '../../api/games-api';
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();
            setGames(result);
        })();
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameListItem key={game._id} {...game} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    );
}