import { useEffect, useState } from "react";
import { getTeams, useCurrentUser } from "./Firebase";
import { Link } from "react-router-dom";

export default function UserTeams() {
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
        setRes([]);
        async function teams() {
            const teams = await getTeams();
            if (!teams)
                return;
            teams.forEach((element: number) => {
                getTeamInfo(element);
            });
        }
        function getTeamInfo(id: number) {
            fetch("https://v3.football.api-sports.io/teams?id=" + (id), requestOptions as RequestInit)
                .then(response => response.text())
                .then(result => setRes((prevRes) => prevRes.concat((JSON.parse(result)).response)))
                .catch(error => console.log(error));
        }
        teams();
    }, []);



    return (
        <div className="w-[100%] h-4/5 overflow-y-scroll mt-10">
            <table className="table w-full h-full">
                <thead>
                    {res?.length! ?
                        <tr>
                            <th>Team Name</th>
                            <th>City</th>
                            <th></th>
                            <th></th>
                        </tr>
                        : <tr></tr>}
                </thead>
                <tbody>
                    {res ?
                        res.map((team) =>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={team.team.logo} alt="Team Logo Not Available" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{team.team.name}</div>
                                            <div className="text-sm opacity-50">{team.team.country}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {team.venue.city}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{team.venue.name}</span>
                                </td>
                                <th>

                                </th>
                                <th>
                                    <Link to="/team-page" state={{ team: team, id: team.team.id }} className="btn btn-ghost btn-xs">details</Link>
                                </th>
                            </tr>
                        ) : <tr></tr>}
                </tbody>
            </table>
        </div>
    );

}