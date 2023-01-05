import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface SearchResultProps {
    name: (string | undefined)
}

export default function SearchResult({name}: SearchResultProps)  {
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
        console.log(name);
        fetch("https://v3.football.api-sports.io/teams?search="+encodeURIComponent(name!), requestOptions as RequestInit)
            .then(response => response.text())
            .then(result => { console.log((JSON.parse(result)).response.slice(0,10)); setRes((JSON.parse(result)).response.slice(0,8)) })
            .catch(error => console.log(error));
    }, [name]);



    return (
        <div className="overflow-x-auto w-[60%] fixed top-[20%]">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>City</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
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
                                <Link to="/team-page" state={{team: team}} className="btn btn-ghost btn-xs">details</Link>
                            </th>
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