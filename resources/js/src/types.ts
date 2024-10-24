export type EventType = "click" | "hover" | "impression";

export type GlobalState = {
    csrfToken: string;
    prefixUrl: string;
    observer: MutationObserver | null;
    clickListener: EventListener | null;
    mouseoverListener: EventListener | null;
    inertiaStartListener: EventListener | null;
    beforeUnloadListener: EventListener | null;
};
