import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals = [],
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);



  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if(error){
    return <Error title="Failed to fetch meals." message={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id || meal.name} meal={meal}></MealItem>
      ))}
    </ul>
  );
};

export default Meals;
