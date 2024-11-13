import AboutCompany from "./components/pages/home/AboutCompany";
import BuyInChina from "./components/pages/home/BuyInChina";
import DeliveryClearance from "./components/pages/home/DeliveryClearance";
import EvaluateBenefits from "./components/pages/home/EvaluateBenefits";
import HomeHero from "./components/pages/home/HomeHero";
import MebelTourIs from "./components/pages/home/MebelTourIs";
import OutArticles from "./components/pages/home/OutArticles";
import QualityControl from "./components/pages/home/QualityControl";
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
    </>
  );
}
