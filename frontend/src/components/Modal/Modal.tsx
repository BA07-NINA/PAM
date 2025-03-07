import { ModalProps } from '@/types';
import DeviceForm from '@/components/DeviceForm';


function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      {/* Modal innhold - hvit boks */}
      <div className="relative bg-white shadow-2xl rounded-lg w-[90vw] max-w-5xl h-[90vh] p-8 overflow-y-auto">
        {/* Close knapp */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-700"
        >
          ✕
        </button>

        {/* Tittel */}
        <h2 className="text-2xl font-bold mb-6">Fyll ut skjema</h2>

        {/* Innhold - her kan ditt skjema komme */}
        <DeviceForm />
      </div>
    
    </div>);
}

export default Modal;