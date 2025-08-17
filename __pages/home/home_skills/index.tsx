import SkillsDesktop, { SkillsDesktopProps } from "./desktop/SkillsDesktop";
import SkillsMobile, { SkillsMobileProps } from "./mobile";

type Props = SkillsDesktopProps & SkillsMobileProps;
export default function Skills({
	skillsContainerRef,
	skillsSectionTitlteRef,
	mobileSkillsContainerRef,
	mobileSkillsSectionTitlteRef,
	isStatic,
}: Props) {
	return (
		<>
			<SkillsDesktop skillsContainerRef={skillsContainerRef} skillsSectionTitlteRef={skillsSectionTitlteRef} isStatic={isStatic} />
			<SkillsMobile
				mobileSkillsContainerRef={mobileSkillsContainerRef}
				mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
				isStatic={isStatic}
			/>
		</>
	);
}
