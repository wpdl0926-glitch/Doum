interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 */}
      <div className="relative bg-white rounded-[20px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] p-6 mx-4 max-w-[320px] w-full" style={{ marginTop: '300px' }}>
        <h2 className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#383838] text-center mb-3">
          로그아웃
        </h2>
        <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#626262] text-center mb-6">
          정말 로그아웃 하시겠습니까?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] hover:bg-[#f5f5f5] transition-colors"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] hover:bg-[#00b8b4] transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}
