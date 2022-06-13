type TTimelineAction = {
    target?: Element;
    vars?: Record<string, string | number>;
    action?: string;
    options?: string;
    isLabel?: boolean;
    label?: string;
};

export type { TTimelineAction };
