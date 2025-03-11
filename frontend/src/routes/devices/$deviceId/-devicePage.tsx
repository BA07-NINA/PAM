import { useState } from 'react';
import DeviceNav from '@/components/pagenav/DeviceNav';
import DeviceAudioFilesPage from './-deviceAudioFilesPage';
import DeviceDetailPage from './-deviceDetailPage';
import Modal from '@/components/Modal/Modal';
import DeviceForm from '@/components/DeviceForm';

export default function DevicePage() {
  const [activeTab, setActiveTab] = useState<'details' | 'audioFiles'>('details'); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Device Navigation */}
      <DeviceNav activeTab={activeTab} setActiveTab={setActiveTab} onOpenModal={openModal} />

      {/* Page Content */}
      {activeTab === 'details' && <DeviceDetailPage />}
      {activeTab === 'audioFiles' && <DeviceAudioFilesPage />}

      {/* Modal for DeviceForm */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DeviceForm onSave={closeModal} />
      </Modal>
    </div>
  );
}
