import { useEffect, useState } from "react";
import { getTeams, useCurrentUser } from "../Utils/Firebase";
import { Link } from "react-router-dom";

export default function UserSchedule() {
    const [res, setRes] = useState<Array<any>>([]);
    const user = useCurrentUser();

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7d22c3347c0dabd5c65e459f651118f6");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        async function teams() {
            const teams = await getTeams();
            if (!teams)
                return;
            console.log(teams.length)
            teams.forEach((element: number) => {
                console.log("loop");
                getTeamInfo(element);
            });
        }
        function getTeamInfo(id: number) {
            fetch("https://v3.football.api-sports.io/fixtures?season=2022&next=5&team=" + (id), requestOptions as RequestInit)
                .then(response => response.text())
                .then(result => {console.log((JSON.parse(result)).response); setRes((prevRes) => prevRes.concat((JSON.parse(result)).response))})
                .catch(error => console.log(error));
        }
        teams();
        console.log(res);
        setRes(res.sort((a,b)=>(a.fixture.date > b.fixture.date) ? 1 : -1))
        console.log(res);
    }, []);



    return (
        <div className="w-4/5 h-4/5 overflow-scroll mt-10">
            <table className="table w-full h-full max-h-full overflow-scroll">
                <thead>
                    { res?.length! > 0 ?
                    <tr>
                        <th>League</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Date</th>
                    </tr>
                    : <tr></tr>}
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
                            <td className="w-25">
                                <div className="w-25 h-12">
                                    <div className="font-bold">{game.fixture.date}</div>
                                </div>
                            </td>
                        </tr>
                    ) : <tr></tr>}
                </tbody>
            </table>
        </div>
    );

}