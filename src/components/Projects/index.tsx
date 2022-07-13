import { Card } from "./Card";
import projects from "../../../projects";

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
      {projects.map((project) => (
        <Card data={project} key={project.id} />
      ))}
    </div>
  );
}
