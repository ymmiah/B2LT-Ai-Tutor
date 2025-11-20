
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, icon, action }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
            {icon && <div className="mr-3 text-indigo-500">{icon}</div>}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default Card;
