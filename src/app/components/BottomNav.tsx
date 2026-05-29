import { useNavigate, useLocation } from 'react-router';
import { Home, Search, Activity, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: '홈', path: '/main' },
    { id: 'explore', icon: Search, label: '탐색', path: '/explore' },
    { id: 'activity', icon: Activity, label: '활동', path: '/my-activity' },
    { id: 'profile', icon: User, label: '프로필', path: '/main' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-tl-[25px] rounded-tr-[25px] shadow-[0px_-5px_20px_3px_rgba(0,0,0,0.1)] z-50">
      <div className="flex items-center justify-around px-[20px] py-[16px]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-[#00d3cd]' : 'text-[#c9c9c9]'
                }`}
              />
              <span
                className={`font-['Pretendard:Medium',sans-serif] text-[10px] ${
                  isActive ? 'text-[#00d3cd]' : 'text-[#c9c9c9]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
