"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas by ingredient
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load meals when ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Meal ideas(select an item) {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient && <p className="text-gray-300">Choose an item to see ideas.</p>}

      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="border p-3 rounded-lg shadow-md bg-white flex items-center space-x-3"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded object-cover"
            />
            <span className="font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
