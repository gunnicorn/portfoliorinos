import Anchoring from "./components/ContentCards";
import styles from "./App.module.css";
// import SelfIntroCard from "./components/Cards/SelfIntroCard";
import HandmadeCard from "./components/Cards/HandmadeCard";
function App() {
  return (
    <div className={styles.mainContainer}>
      {/* <SelfIntroCard />
      <Anchoring />
      weh */}
      <div id="home">
        <HandmadeCard />
      </div>
      <Anchoring />
    </div>
  );
}

export default App;
