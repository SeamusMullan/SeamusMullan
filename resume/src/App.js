import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';


function App () {
  return (
    <div className="App" class="bg-gradient-to-bl from-blue-400 via-violet-500 to-violet-200">
      <Navbar />
      <ProjectCard title="Project Name" description="Lorep woreguh aoeghoaeg oqhego ho" image="https://picsum.photos/250" link="https://google.ie"/>
      <ProjectCard title="Project Name" description="Lorep woreguh aoeghoaeg oqhego ho" image="https://picsum.photos/250" link="https://google.ie"/>
      <ProjectCard title="Project Name" description="Lorep woreguh aoeghoaeg oqhego ho" image="https://picsum.photos/250" link="https://google.ie"/>
      <ProjectCard title="Project Name" description="Lorep woreguh aoeghoaeg oqhego ho" image="https://picsum.photos/250" link="https://google.ie"/>
      <ProjectCard title="Project Name" description="Lorep woreguh aoeghoaeg oqhego ho" image="https://picsum.photos/250" link="https://google.ie"/>
    </div>
  );
}

export default App;
