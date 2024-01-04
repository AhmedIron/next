import classes from "./loading.module.css";
export default function MealsLoadingPage() {
  return (
    <>
      <p className={classes.loading}>
        <div className={classes.main}>
          <img className={classes.load} src="images/burger.jpg" alt="" />
        </div>
      </p>
    </>
  );
}
