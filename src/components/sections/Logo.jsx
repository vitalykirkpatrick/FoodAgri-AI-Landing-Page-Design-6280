import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCpu, FiZap } = FiIcons;

const Logo = ({ className = "", size = "normal" }) => {
  const sizeClasses = {
    small: "text-lg",
    normal: "text-2xl",
    large: "text-3xl"
  };

  const iconSizeClasses = {
    small: "w-5 h-5",
    normal: "w-7 h-7",
    large: "w-9 h-9"
  };

  const logoSizeClasses = {
    small: "w-8 h-8",
    normal: "w-10 h-10",
    large: "w-12 h-12"
  };

  const textSizeClasses = {
    small: "text-xs",
    normal: "text-sm",
    large: "text-base"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Enhanced Logo Icon with FA letters and dual icons */}
      <div className="relative">
        {/* Main logo container with gradient */}
        <div className={`bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl ${logoSizeClasses[size]} shadow-lg flex items-center justify-center relative overflow-hidden`}>
          {/* FA letters */}
          <div className={`text-white font-bold ${textSizeClasses[size]} tracking-tight`}>
            FA
          </div>
          
          {/* AI Technology indicator - small CPU icon */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
            <SafeIcon icon={FiCpu} className="w-1.5 h-1.5 text-white" />
          </div>
        </div>

        {/* Food/Agriculture indicator - small leaf/grain accent */}
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        </div>

        {/* AI Technology indicator - small zap */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
          <SafeIcon icon={FiZap} className="w-2 h-2 text-white" />
        </div>
      </div>

      {/* Logo Text with AI in blue */}
      <div className={`font-bold ${sizeClasses[size]}`}>
        <span className="text-emerald-600">FoodAgri </span>
        <span className="text-blue-600">AI</span>
      </div>
    </div>
  );
};

export default Logo;