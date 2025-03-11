interface DeviceNavProps {
  activeTab: 'details' | 'audioFiles';
  setActiveTab: (tab: 'details' | 'audioFiles') => void;
  onOpenModal: () => void;
}

function DeviceNav({ activeTab, setActiveTab, onOpenModal }: DeviceNavProps) {
  return (
    <nav className="border-b border-gray-200 flex items-center justify-between px-6">
      <ul className="flex flex-row gap-8">
        <li>
          <button
            onClick={() => setActiveTab('details')}
            className={`inline-block py-4 text-lg hover:text-gray-600 ${
              activeTab === 'details' ? 'border-b-2 border-black' : ''
            }`}
          >
            Details
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab('audioFiles')}
            className={`inline-block py-4 text-lg hover:text-gray-600 ${
              activeTab === 'audioFiles' ? 'border-b-2 border-black' : ''
            }`}
          >
            Audio Files
          </button>
        </li>
      </ul>

      {/* Knapp til høyre, skjules hvis vi er på audioFiles */}
      {activeTab !== 'audioFiles' && (
        <button
          onClick={onOpenModal}
          className="bg-green-900 text-white py-2 px-8 rounded-lg hover:bg-green-700 transition-all mr-4 my-4"
        >
          Add info
        </button>
      )}
    </nav>
  );
}

export default DeviceNav;


