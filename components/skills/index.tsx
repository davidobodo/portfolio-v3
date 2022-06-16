import SkillsDesktop, { SkillsDesktopProps } from "./desktop";
import SkillsMobile, { SkillsMobileProps } from "./mobile";

type Props = SkillsDesktopProps & SkillsMobileProps;
export default function Skills({
    skillsListRef,
    skillsContainerRef,
    skillsContentWrapperRef,
    skillsSectionTitlteRef,
    mobileSkillsContainerRef,
    mobileSkillsSectionTitlteRef
}: Props) {
    return (
        <div>
            <SkillsDesktop
                skillsListRef={skillsListRef}
                skillsContainerRef={skillsContainerRef}
                skillsContentWrapperRef={skillsContentWrapperRef}
                skillsSectionTitlteRef={skillsSectionTitlteRef}
            />

            <SkillsMobile
                mobileSkillsContainerRef={mobileSkillsContainerRef}
                mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
            />
        </div>
    );
}
