import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicius Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          choose your favorite recipe and cook it yourself, it is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={
          <p className={classes.loading}>
          <div className={classes.main}>
            <img className={classes.load} src="images/burger.jpg" alt="" />
          </div>
        </p>
        }>
          <Meal />
        </Suspense>
      </main>
    </>
  );
}
