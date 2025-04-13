import React, { useEffect, useState } from 'react';

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://opulent-space-chainsaw-pvx4qwp999ph5r9-8000.app.github.dev/api/activities/')
            .then(response => response.json())
            .then(data => setActivities(data))
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    return (
        <div>
            <h1 className="text-center text-primary">Activities</h1>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.activity_type}</td>
                            <td>{activity.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Activities;