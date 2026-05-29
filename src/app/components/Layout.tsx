import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';
import FlowNavigator from './FlowNavigator';
import FloatingBar from './FloatingBar';

interface LayoutProps {
  children: ReactNode;
  showFlowNavigator?: boolean;
}

export default function Layout({ children, showFlowNavigator = true }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // 페이지 전환 시 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] flex items-start justify-center">
      <div className="relative w-full max-w-[393px] min-h-screen bg-white shadow-lg">
        {children}
        <FloatingBar className="translate-y-[15px]" />
      </div>
      {showFlowNavigator && <FlowNavigator />}
    </div>
  );
}
