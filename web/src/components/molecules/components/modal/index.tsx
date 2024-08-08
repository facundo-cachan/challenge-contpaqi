import type ModalProps from './types';

const Modal = ({ children, className }: ModalProps) => (
  <div className={`flex flex-col rounded-lg drop-shadow-2xl absolute ${className}`}>
    {children}
  </div>
);

export default Modal;