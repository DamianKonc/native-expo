import { PropsWithChildren } from "react";

export type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>