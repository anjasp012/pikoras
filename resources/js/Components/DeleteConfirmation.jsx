// ConfirmDialog.jsx
import * as React from "react";
import { Button } from "./ui/button"; // Pastikan Anda sudah mengimpor komponen Button dari shadcn/ui
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"; // Pastikan Anda sudah mengimpor komponen Dialog dari shadcn/ui

const DeleteConfirmation = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle className="mb-2">{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="secondary"
                        onClick={onClose}
                        className="bg-white border border-black"
                    >
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={onConfirm}>
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteConfirmation;
