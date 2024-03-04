import TaskBord from "./COMPONENTS/TaskBord";
import Footer from "./Footer";
import Heder from "./Heder";
import Hero from "./Hero";

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
