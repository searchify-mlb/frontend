import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      {children}
    </div>
  );
};
