import { Contact } from "@/components/Contact";
import Featured from "@/components/Featured";
import GetFeatured from "@/components/GetFeatured";
import Impact from "@/components/Impact";
import ScrollTopButton from "@/components/ScrollTopButton";
import SectionContact from "@/components/Section-contact";
import Services from "@/components/Services";
import Test from "@/components/Test";
import Testimonial from "@/components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Contact />
      <Services />
      <Impact />
      <GetFeatured />
      <Test />
      <Testimonial />
      <SectionContact />
      <ScrollTopButton />
    </>
  );
};

export default HomePage;
