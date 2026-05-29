import svgPaths from "./svg-hygcnfw78z";
import imgImg01481 from "./6c6babb9c4e7c2c887df3c883f2de8312a564fbb.png";

function Group() {
  return (
    <div className="absolute left-[38px] size-[21px] top-[298px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Group 128">
          <circle cx="10.5" cy="10.5" fill="var(--fill-0, #15DAA2)" id="Ellipse 13" r="10.5" />
          <g filter="url(#filter0_d_1_225)" id="Union">
            <path d={svgPaths.p21eb1800} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.8471" id="filter0_d_1_225" width="14.5796" x="3.21019" y="3.61144">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.535032" />
            <feGaussianBlur stdDeviation="0.66879" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_225" />
            <feBlend in="BackgroundImageFix" in2="effect1_dropShadow_1_225" mode="normal" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="앱 알림창">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="IMG_0148 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg01481} />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.7)] h-[118px] left-[23px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] top-[286px] w-[357px]" />
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] h-[58px] leading-[20px] left-[38px] not-italic text-[#383838] text-[15px] top-[325px] w-[272px]">새로운 도움 요청이 도착했어요!</p>
      <p className="absolute font-['Pretendard:Medium',sans-serif] h-[58px] leading-[13px] left-[38px] not-italic text-[#898989] text-[12px] top-[348px] w-[272px]">김말숙 할머니가 TV 연결 도움을 요청했어요</p>
      <p className="absolute font-['Pretendard:Medium',sans-serif] h-[58px] leading-[13px] left-[38px] not-italic text-[#727272] text-[10px] top-[375px] w-[272px]">오후 3:00 ㅣ 다로리 동쪽 마을</p>
      <div className="absolute left-[38px] size-[20px] top-[298px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #2EC197)" id="Ellipse 13" r="10" />
        </svg>
      </div>
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] h-[27px] leading-[20px] left-[64px] not-italic text-[10px] text-black top-[298px] w-[73px]">DOUM</p>
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] h-[27px] leading-[20px] left-[344px] not-italic text-[#626262] text-[10px] top-[298px] w-[73px]">지금</p>
      <Group />
    </div>
  );
}