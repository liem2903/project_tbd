import type React from "react";
import { createPortal } from "react-dom";
type prop = {
    open: boolean,
    children: React.ReactNode,
}

function Portal({open, children}: prop) {
    if (!open) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return createPortal(children, modalRoot);
 }

export default Portal;