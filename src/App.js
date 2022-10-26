import { AboutComponent } from "./components/AboutComponent/AboutComponent";
import { ContactsComponent } from "./components/ContactsComponent/ContactsComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProjectsComponent } from "./components/ProjectsComponent/ProjectsComponent";
import { ScrollUpBtm } from "./components/ScrollUpBtm/ScrollUpBtm";
import { SkillsComponent } from "./components/SkillsComponent/SkillsComponent";
import { StudingComponent } from "./components/StudingComponent/StudingComponent";
import data from "./data/data.json";

function App() {
  return (
    <div className="main">
      <Header />
      <AboutComponent />
      <ProjectsComponent />
      <ContactsComponent />
      <SkillsComponent skills={data.skills} />
      <StudingComponent skills={data.studing} />
      <ScrollUpBtm />
      <Footer />
    </div>
  );
}

export default App;
