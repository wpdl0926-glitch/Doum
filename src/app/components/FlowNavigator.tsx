import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FlowNavigator() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const flowSteps = [
    { id: 1, name: '메인 화면', path: '/main' },
    { id: 2, name: '요청 상세', path: '/request/1' },
    { id: 3, name: '일정 정하기', path: '/accept/1' },
    { id: 4, name: '수락 확인', path: '/accepted/1' },
    { id: 5, name: '작업 인증', path: '/verify/1' },
    { id: 6, name: '크레딧 적립', path: '/credit-earned' },
    { id: 7, name: '나의 활동', path: '/my-activity' },
    { id: 8, name: '일손 탐색', path: '/explore' },
    { id: 9, name: '마이페이지', path: '/mypage' },
  ];

  const currentStep = flowSteps.find((step) => step.path === location.pathname);

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <div className="bg-white rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] overflow-hidden">
        

        {isExpanded && (
          <div className="max-h-[400px] overflow-y-auto">
            {flowSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  navigate(step.path);
                  setIsExpanded(false);
                }}
                className={`w-full px-4 py-3 text-left border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#f5f5f5] transition-colors ${
                  location.pathname === step.path ? 'bg-[rgba(0,211,205,0.1)]' : ''
                }`}
              >
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838]">
                  {step.id}. {step.name}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
