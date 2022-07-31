import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
export default function useSelectProjectAnimation() {
    const router = useRouter();
    const [selectedProjectId, setSelectedProjectId] = useState<string>("");
    const sourceElem = useRef<HTMLDivElement | null>(null);
    const modalImgRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Project was clicked on
    const onSelectProject = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        console.log(e.target, 'gfhgfhgf')
        const {id, type } = e.currentTarget.dataset
        sourceElem.current =  type === 'list-item' ?document.querySelector("[data-key='project-box']") : e.currentTarget;
        // const id = e.currentTarget.dataset.id as string;
        setSelectedProjectId(id);
        setIsOpen(true);

        window.history.pushState(null, "New Page Title", `/projects/${id}`);
    };

    // Next or previous arrow button was pressed
    const onGoToProject = (id: string) => {
        const modal = modalRef.current;
        const modalImage = modalImgRef.current;

        if (modal && modalImage) {
            const tl = removeCurrentProject({
                modalContainer: modal,
                modalImage: modalImage
            });

            tl.then(() => {
                setSelectedProjectId(id);
                window.history.pushState(null, "New Page Title", `/projects/${id}`);
                displayNextProject({
                    modalContainer: modal,
                    modalImage: modalImage
                });
            });
        }
    };

    const [tl, setTl] = useState<gsap.core.Timeline>();

    // Close single project view
    const onDeselectProject = () => {
        tl?.reverse().then(() => {
            window.history.pushState(null, "New Page Title", router.pathname);
            setSelectedProjectId("");
            setIsOpen(false);
        });
    };

    useEffect(() => {
        if (isOpen) {
            if (sourceElem.current && modalImgRef.current && modalRef.current) {
                const tl = applyFlipAnim({
                    modal: modalRef.current,
                    source: sourceElem.current,
                    destination: modalImgRef.current
                });

                setTl(tl);
            }
        }
    }, [isOpen]);

    return {
        selectedProjectId,
        onSelectProject,
        onDeselectProject,
        modalImgRef,
        modalRef,
        onGoToProject,
        isOpen,
        setSelectedProjectId
    };
}

function applyFlipAnim({
    modal,
    source,
    destination
}: {
    modal: HTMLDivElement;
    source: HTMLDivElement;
    destination: HTMLDivElement;
}) {
    const sourceRect = source.getBoundingClientRect();
    const destinationRect = destination.getBoundingClientRect();

    const tl = gsap.timeline();

    tl.from(modal, {
        opacity: 0
    })
        .fromTo(
            destination,
            {
                // x: sourceRect.left - destinationRect.left - 200,
                x: sourceRect.left - destinationRect.left,
                y: sourceRect.top - destinationRect.top,
                scale: sourceRect.width / destinationRect.width,
                duration: 0.2,
                ease: "cubic-bezier(0.2, 0, 0.2, 1)"
            },
            {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: "cubic-bezier(0.2, 0, 0.2, 1)"
            }
        )
        .from(modal.querySelector("[data-key=title]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .from(modal.querySelector("[data-key=about]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .from(modal.querySelector("[data-key=tech]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .from(modal.querySelector("[data-key=buttons]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .from(modal.querySelector("[data-key=close-button]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        });

    return tl;
}

function removeCurrentProject({
    modalContainer,
    modalImage
}: {
    modalContainer: HTMLDivElement;
    modalImage: HTMLDivElement;
}) {
    const removeCurrentProjectTl = gsap.timeline();
    removeCurrentProjectTl
        .to(modalContainer.querySelector("[data-key=title]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=about]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=tech]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=buttons]"), {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        .to(modalImage, {
            width: "0px"
        });

    return removeCurrentProjectTl;
}

function displayNextProject({
    modalContainer,
    modalImage
}: {
    modalContainer: HTMLDivElement;
    modalImage: HTMLDivElement;
}) {
    const displayNextProjectTl = gsap.timeline();
    displayNextProjectTl
        .to(modalImage, {
            width: "100%"
        })
        .to(modalContainer.querySelector("[data-key=title]"), {
            opacity: 1,
            y: 0,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=about]"), {
            opacity: 1,
            y: 0,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=tech]"), {
            opacity: 1,
            y: 0,
            duration: 0.2
        })
        .to(modalContainer.querySelector("[data-key=buttons]"), {
            opacity: 1,
            y: 0,
            duration: 0.2
        });

    return displayNextProjectTl;
}

export { applyFlipAnim, removeCurrentProject, displayNextProject };
