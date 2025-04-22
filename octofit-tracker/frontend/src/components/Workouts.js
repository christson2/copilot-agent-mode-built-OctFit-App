import React, { useEffect, useState } from 'react';
import './Workouts.css'; // Import custom CSS for styling

function Workouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://opulent-space-chainsaw-pvx4qwp999ph5r9-8000.app.github.dev/api/workouts/')
            .then(response => response.json())
            .then(data => setWorkouts(data))
            .catch(error => console.error('Error fetching workouts:', error));
    }, []);

    return (
        <div className="workouts-container">
            <h1 className="text-center text-primary">Workouts</h1>
            <div className="workouts-grid">
                {workouts.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h2>{workout.name}</h2>
                        <p>{workout.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Workouts;