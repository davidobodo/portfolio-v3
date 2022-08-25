import SkillsDesktop, { SkillsDesktopProps } from "./desktop";
import SkillsMobile, { SkillsMobileProps } from "./mobile";

type Props = SkillsDesktopProps & SkillsMobileProps;
export default function Skills({
	skillsContainerRef,
	skillsSectionTitlteRef,
	mobileSkillsContainerRef,
	mobileSkillsSectionTitlteRef,
}: Props) {
	return (
		<>
			<SkillsDesktop skillsContainerRef={skillsContainerRef} skillsSectionTitlteRef={skillsSectionTitlteRef} />
			<SkillsMobile
				mobileSkillsContainerRef={mobileSkillsContainerRef}
				mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
			/>
		</>
	);
}
