import AboutCompany from "./components/pages/home/AboutCompany";
import AnswersToQuestions from "./components/pages/home/AnswersToQuestions";
import BuyInChina from "./components/pages/home/BuyInChina";
import DeliveryClearance from "./components/pages/home/DeliveryClearance";
import EvaluateBenefits from "./components/pages/home/EvaluateBenefits";
import HomeHero from "./components/pages/home/HomeHero";
import InteriorDesign from "./components/pages/home/InteriorDesign";
import MebelTourIs from "./components/pages/home/MebelTourIs";
import MediaAboutUs from "./components/pages/home/MediaAboutUs";
import OurHappyClients from "./components/pages/home/OurHappyClients";
import OutArticles from "./components/pages/home/OutArticles";
import QualityControl from "./components/pages/home/QualityControl";
import ShallWeGoOnTour from "./components/pages/home/ShallWeGoOnTour";
import StagesOfWorkingWithUs from "./components/pages/home/StagesOfWorkingWithUs";
import WantToGoTour from "./components/pages/home/WantToGoTour";
import WhoAreWe from "./components/pages/home/WhoAreWe";
import WorkingOptions from "./components/pages/home/WorkingOptions";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BuyInChina />
      <AboutCompany />
      <StagesOfWorkingWithUs />
      <WorkingOptions />
      <EvaluateBenefits />
      <MebelTourIs />
      <QualityControl />
      <WhoAreWe />
      <DeliveryClearance />
      <WantToGoTour />
      <OutArticles />
      <AnswersToQuestions />
      <InteriorDesign />
      <OurHappyClients />
      <MediaAboutUs />
      <ShallWeGoOnTour />
    </>
  );
}
