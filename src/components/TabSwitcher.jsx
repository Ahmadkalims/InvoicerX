import { useRef, useState, useEffect } from 'react';

const tabs = ['QUOTATION', 'INVOICE', 'RECEIPT'];

export default function TabSwitcher() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('INVOICE');
  const [highlightStyle, setHighlightStyle] = useState({});

  const tabRefs = useRef({});

  useEffect(() => {
    const current = tabRefs.current[activeTab];
    if (current && containerRef.current) {
      const { offsetLeft, offsetWidth } = current;
      setHighlightStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative inline-flex items-center px-2 py-1 rounded-full bg-gray-200 shadow-inner" ref={containerRef}>
      {/* Sliding Highlight */}
      <div
        className="absolute h-full rounded-full bg-gradient-to-r from-purple-200 via-blue-100 to-pink-200 transition-all duration-300"
        style={highlightStyle}
      />

      {/* Buttons */}
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => (tabRefs.current[tab] = el)}
          onClick={() => setActiveTab(tab)}
          className={`relative z-10 px-6 py-2 text-lg font-medium transition-colors duration-200 ${
            activeTab === tab ? 'text-black' : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
