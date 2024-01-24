import Footer from "./Footer";
import Heder from "./Heder";
import Hero from "./Hero";
import TaskBord from "./Task/TaskBord";

const App = () => {
  return (
    <>
      <Heder />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBord />
      </div>
      <Footer />
    </>
  );
};

export default App;
