import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="p-8 rounded-sm shadow-wp-252 border border-wp-96 w-full">
                <div className="flex flex-col items-center mb-4 gap-4">
                    <svg className="animate-spin h-16 w-16 mr-3 text-gray-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1.732-1A6 6 0 002 12h4a6 6 0 006 6h2c3.042 0 5.824-1.135 7.938-3l1 1.732A7.962 7.962 0 0112 20.001V24a8 8 0 01-8-8z" />
                    </svg>
                    <p className="text-gray-500 animate-pulse text-wp-20">Loading weather data...</p>
                </div>
            </div>
        </div>
    );
};

export default Loading;