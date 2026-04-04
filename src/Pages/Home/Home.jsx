import DesignedAction from "../../Components/HomePage/DesignedAction";
import Everything from "../../Components/HomePage/Everything";
import Header from "../../Components/HomePage/Header";
import MovedPost from "../../Components/HomePage/MovedPost";
import TheJournal from "../../Components/HomePage/TheJournal";

function Home() {
  return (
    <>
      <Header />
      <Everything />
      <DesignedAction />
      <TheJournal />
      <MovedPost />
    </>
  );
}

export default Home;
