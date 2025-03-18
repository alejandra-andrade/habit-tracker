import { useEffect, useState } from 'react';

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/habits')
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
      })
      .catch((error) => console.error('Error al obtener hábitos:', error));
  }, []);

  return (
    <div>
      <h1>Hábitos</h1>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <strong>{habit.name}</strong>: {habit.description} (Racha: {habit.streak})
          </li>
        ))}
      </ul>
    </div>
  );
}


