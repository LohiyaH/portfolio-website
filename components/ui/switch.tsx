import React from 'react';

const Switch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
            <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner"></div>
            <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                    checked ? 'translate-x-5 bg-blue-600' : 'translate-x-0'
                }`}
            ></div>
        </label>
    );
};

export default Switch;
