import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function useSelectProjectAnimation() {
    const [selectedProjectId, setSelectedProjectId] = useState<string>("");
    const sourceElem = useRef<HTMLDivElement | null>(null);
    const modalImgRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const onSelectProject = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        sourceElem.current = document.querySelector("[data-key='project-box']");
        setSelectedProjectId(e.currentTarget.dataset.id as string);
        setIsOpen(true);
    };

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

                displayNextProject({
                    modalContainer: modal,
                    modalImage: modalImage
                });
            });
        }
    };

    const [tl, setTl] = useState<gsap.core.Timeline>();
    const onDeselectProject = () => {
        tl?.reverse().then(() => {
            setSelectedProjectId("");
            setIsOpen(false);
        });
    };

    useEffect(() => {
        if (isOpen) {
            if (sourceElem.current && modalImgRef.current && modalRef.current) {
                const tl = animateProject({
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
        isOpen
    };
}

function animateProject({
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

    console.log(sourceRect.left, destinationRect.left);
    tl.from(modal, {
        opacity: 0
    })
        .fromTo(
            destination,
            {
                x: sourceRect.left - destinationRect.left - 200,
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
