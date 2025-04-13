import React, { useEffect, useState } from 'react';

function Workouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://opulent-space-chainsaw-pvx4qwp999ph5r9-8000.app.github.dev/api/workouts/')
            .then(response => response.json())
            .then(data => setWorkouts(data))
            .catch(error => console.error('Error fetching workouts:', error));
    }, []);

    return (
        <div>
            <h1 className="text-center text-primary">Workouts</h1>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.id}</td>
                            <td>{workout.name}</td>
                            <td>{workout.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Workouts;