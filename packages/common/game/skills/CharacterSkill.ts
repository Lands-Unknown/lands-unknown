import type { SkillHrid } from "common/game/skills/SkillHrid";

export interface CharacterSkill {
  experience: number;
  level: number;
  skillHrid: SkillHrid;
}
