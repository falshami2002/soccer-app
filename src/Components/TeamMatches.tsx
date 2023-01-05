import { useEffect, useState } from "react";

type TeamMatchesProps = {
    id: number
}

export default function TeamMatches({id}: TeamMatchesProps) {
    const [res, setRes] = useState<Array<any>>();

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7d22c3347c0dabd5c65e459f651118f6");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        if(id === undefined)
            return;
        fetch("https://v3.football.api-sports.io/fixtures?season=2022&team="+(id), requestOptions as RequestInit)
            .then(response => response.text())
            .then(result => {console.log((JSON.parse(result))); setRes((JSON.parse(result)).response.slice(0, 5))})
            .catch(error => console.log(error));
    }, []);



    return (
        <div className="overflow-x-auto w-[60%]">
            <table className="table w-full">
                <thead>
                    { res?.length! > 0 ?
                    <tr>
                        <th>League</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th></th>
                        <th></th>
                    </tr>
                    : <div></div>}
                </thead>
                <tbody>
                    { res ?
                    res!.map((game) =>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={game.league.logo} alt="Team Logo Not Available" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{game.league.name}</div>
                                        <div className="text-sm opacity-50">{game.league.country}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={game.teams.home.logo} alt="Team Logo Not Available" />
                                </div>
                                <span className="badge badge-ghost badge-sm">{game.teams.home.name}</span>
                            </td>
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={game.teams.away.logo} alt="Team Logo Not Available" />
                                </div>
                                <span className="badge badge-ghost badge-sm">{game.teams.away.name}</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    ) : <div></div>}
                </tbody>
            </table>
        </div>
    );

}