import { useState } from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const filter = (filterTag) => {
        setSelectedFilter(filterTag);
    };

    const filteredProjects = selectedFilter
        ? PROJECTS.filter((project) => project.tags.includes(selectedFilter)) 
        : PROJECTS;

    return (
        <div className='flex flex-col pb-4 items-center'>
            <h2 className='my-8 text-center text-4xl font-bold'>My projects</h2>
            <div className='flex gap-8'>
                <button 
                    onClick={() => filter("")} 
                    className={`text-lg ${selectedFilter === "" ? "text-primary border-b-2 decoration-primary font-bold" : "text-gray-700"}`}
                >
                    All
                </button>
                <button 
                    onClick={() => filter("Website Design")} 
                    className={`text-lg ${selectedFilter === "Website Design" ? "text-primary border-b-2 decoration-primary font-bold" : "text-gray-700"}`}
                >
                    Website Design
                </button>
                <button 
                    onClick={() => filter("App Design")} 
                    className={`text-lg ${selectedFilter === "App Design" ? "text-primary border-b-2 decoration-primary font-bold" : "text-gray-700"}`}
                >
                    App Design
                </button>
                <button 
                    onClick={() => filter("Graphic Design")} 
                    className={`text-lg ${selectedFilter === "Graphic Design" ? "text-primary border-b-2 decoration-primary font-bold" : "text-gray-700"}`}
                >
                    Graphic Design
                </button>
            </div>
            <div className="my-8 lg:flex flex-wrap gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;
