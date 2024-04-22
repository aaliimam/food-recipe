import { useContext } from "react";
import { GlobalContext } from "../../context";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please Wait</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.lenght > 0
        ? recipeList.map((item) => <RecipeItem item={item} />)
        : null}
    </div>
  );
};

export default Home;
