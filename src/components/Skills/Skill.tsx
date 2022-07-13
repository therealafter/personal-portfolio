interface SkillProps {
  skill: string;
  level: number;
}

export function Skill({ level, skill }: SkillProps) {
  return (
    <div className="flex gap-2">
      <i className="ri-checkbox-circle-line text-lg text-first-color" />

      <div>
        <h3 className="text-lg font-medium leading-4">{skill}</h3>
        <span className="text-base">
          {level === 1 ? "Basic" : level === 2 ? "Intermediate" : "Advance"}
        </span>
      </div>
    </div>
  );
}
