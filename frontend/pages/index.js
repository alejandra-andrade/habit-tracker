import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabits } from '../store/habitsSlice';

export default function HabitsPage() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.list);

  useEffect(() => {
    fetch('http://localhost:5001/habits')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setHabits(data));
      })
      .catch((error) => console.error('Error al obtener hábitos:', error));
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hábitos</h1>
      <ul className="space-y-4">
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <li key={index} className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
              <div>
                <strong className="text-lg">{habit.name}</strong>: {habit.description} 
                <span className="block text-sm text-gray-600">Racha: {habit.streak}</span>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Done</button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No hay hábitos disponibles.</p>
        )}
      </ul>
      <div className="mt-6 w-full bg-gray-300 h-4 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full w-2/5"></div>
      </div>
    </div>
  );
}
