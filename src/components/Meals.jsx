import React, { useEffect, useState } from "react";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  // Sending get request

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return console.log("Couldn't fetch meals");
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;