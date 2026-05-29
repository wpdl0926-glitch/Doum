import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock } from 'lucide-react';
import Layout from '../components/Layout';
import logoImage from '../../imports/___________2026-05-29______5.09.12.png';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/main');
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto flex flex-col items-center justify-end px-[32px] pt-[80px] pb-[100px]">
        <div className="w-full max-w-[400px]">
          <div className="flex flex-col items-center mb-12">
            <div className="w-[180px] mb-3">
              <img
                src={logoImage}
                alt="DOUM 로고"
                className="w-full h-auto object-contain scale-[0.8] -mt-[30px]"
              />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] text-center -mt-[21px]">
              이웃과 함께하는 따뜻한 커뮤니티
            </p>
          </div>

          <div className="space-y-3 mb-5">
            <div className="bg-[#f5f5f5] rounded-[12px] p-3 -mt-[15px]">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#00d3cd]" />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] text-[#787878]">이메일</p>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                className="w-full bg-white rounded-[8px] px-3 py-2 font-['Pretendard:Medium',sans-serif] text-[14px] border border-[#e9e9e9] focus:outline-none focus:ring-2 focus:ring-[#00d3cd]"
              />
            </div>

            <div className="bg-[#f5f5f5] rounded-[12px] p-3">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-[#00d3cd]" />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] text-[#787878]">비밀번호</p>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full bg-white rounded-[8px] px-3 py-2 font-['Pretendard:Medium',sans-serif] text-[14px] border border-[#e9e9e9] focus:outline-none focus:ring-2 focus:ring-[#00d3cd]"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[15px] py-3 rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] mb-5"
          >
            로그인
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-[1px] bg-[#e9e9e9]"></div>
            <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">또는</p>
            <div className="flex-1 h-[1px] bg-[#e9e9e9]"></div>
          </div>

          <div className="space-y-3 mb-5">
            <button
              onClick={handleLogin}
              className="w-full bg-[#fee500] text-[#191919] font-['Pretendard:SemiBold',sans-serif] text-[12px] py-2 px-4 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              카카오로 계속하기
            </button>
            <button
              onClick={handleLogin}
              className="w-full bg-[#f7f7f7] text-[#1f1f1f] font-['Pretendard:SemiBold',sans-serif] text-[12px] py-2 px-4 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Google 계정으로 로그인
            </button>
            <button
              onClick={handleLogin}
              className="w-full bg-[#f7f7f7] text-[#1f1f1f] font-['Pretendard:SemiBold',sans-serif] text-[12px] py-2 px-4 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Apple로 계속하기
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#898989]">
              계정이 없으신가요?
            </p>
            <button className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#00d3cd]">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
