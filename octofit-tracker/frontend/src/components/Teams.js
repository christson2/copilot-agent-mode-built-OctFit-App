import React, { useEffect, useState } from 'react';

function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://opulent-space-chainsaw-pvx4qwp999ph5r9-8000.app.github.dev/api/teams/')
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('Error fetching teams:', error));
    }, []);

    return (
        <div>
            <h1 className="text-center text-primary">Teams</h1>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.id}</td>
                            <td>{team.name}</td>
                            <td>{team.members.map(member => member.username).join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Teams;