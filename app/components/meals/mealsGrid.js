import classes from "./mealsGrid.module.css"
import MealItem from "./meals-item"

export default function MealsGrid({meals}){
    console.log(typeof meals);
    return(
        <ul className={classes.meals}>
            {
                meals.map((meal) => (
                    <li key={meal.id}>
                        <MealItem {...meal}/>
                    </li>
                ))
            }
        </ul>
    )
}