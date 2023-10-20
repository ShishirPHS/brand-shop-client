import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import QuestionsAndAns from "../../components/QuestionsAndAns/QuestionsAndAns";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Brands></Brands>
      <QuestionsAndAns></QuestionsAndAns>
      <Footer></Footer>
    </div>
  );
};

export default Home;
