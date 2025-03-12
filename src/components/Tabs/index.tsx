const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div>
      {/* NAV TABS */}
      <ul className="flex border-b">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              className={`px-4 py-2 text-sm font-medium transition
                ${
                  tab.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                }`}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
