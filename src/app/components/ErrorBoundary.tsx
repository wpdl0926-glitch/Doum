import { useRouteError, useNavigate } from 'react-router';
import Layout from './Layout';

export default function ErrorBoundary() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto flex items-center justify-center">
        <div className="px-[32px] text-center">
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-4">
            오류가 발생했습니다
          </h1>
          <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] mb-6">
            {error?.message || '알 수 없는 오류가 발생했습니다'}
          </p>
          <button
            onClick={() => navigate('/main')}
            className="bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 px-8 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </Layout>
  );
}
