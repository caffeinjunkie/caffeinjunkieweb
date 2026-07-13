export const getShuffledSkills = (skillsData: string[]) => {
  for (let i = skillsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [skillsData[i], skillsData[j]] = [skillsData[j], skillsData[i]];
  }
  return skillsData.slice(0, 5);
};
