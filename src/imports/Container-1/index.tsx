import svgPaths from "./svg-l5x8646qyq";
import imgImageDoum from "./ccd71e91bca27bd811b3b80baaf2cf2104ec0b5f.png";
import imgRectangle from "./05e36627e1733f61cd6b2adc8d7740685d32a1cc.png";
import imgRectangle3 from "./92b75283ea30d998f0b5f7ca0e1a203ad5ff46ee.png";
import imgRectangle4 from "./51c058b342eddaaa2d4d82f040552fbe8ce92330.png";
import imgRectangle7 from "./98e613c9a418166600bfd8faad35e6a091c5b73a.png";
import imgRectangle8 from "./42c3df4834f8f4e34949b6b3aaf9032c779f46bb.png";
import imgRectangle9 from "./b8762c161c12ac0249206bc274f024d79dd4441f.png";
import { imgRectangle1, imgRectangle2, imgRectangle5, imgRectangle6 } from "./svg-phoj4";

function ImageDoum() {
  return (
    <div className="absolute h-[54px] left-[-10px] top-0 w-[99.117px]" data-name="Image (DOUM)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageDoum} />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[54px] relative shrink-0 w-[89.117px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageDoum />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #383838)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #383838)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#00d3cd] border-2 border-solid border-white left-[24px] rounded-[16777200px] size-[12px] top-0" data-name="Text" />;
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Button />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[7.49%_33.27%_63.21%_31.21%]" data-name="Group">
      <div className="absolute inset-[7.49%_33.27%_63.21%_31.21%] mask-position-[1.034px_0.971px,_0.082px_0.015px]" style={{ maskImage: `url("${imgRectangle1}"), url("${imgRectangle2}")` }} data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[7.51%_33.37%_63.27%_31.34%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[7.51%_33.37%_63.27%_31.34%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[8.98%_34.85%_64.74%_32.82%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.98%_34.85%_64.74%_32.82%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[42.18%_40.16%_46.46%_39.16%]" data-name="Group">
      <div className="absolute inset-[0_0_-10.33%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 8.15116">
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p119c8bf0} fill="var(--fill-0, black)" id="Vector" />
              <path d={svgPaths.p26c05080} fill="var(--fill-0, black)" id="Vector_2" />
            </g>
            <path d={svgPaths.p3ffc7640} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.526" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[65px] overflow-clip relative shrink-0 w-[64.458px]" data-name="Layer_1">
      <div className="absolute inset-[0_2.68%_5.03%_1.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.7267 61.7286">
          <path d={svgPaths.p355247f0} fill="url(#paint0_linear_2057_313)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2057_313" x1="30.8633" x2="30.8633" y1="0" y2="61.7286">
              <stop stopColor="#C6F3F4" />
              <stop offset="1" stopColor="#98C3C3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.15%_3.04%_3.85%_2.33%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.41%] left-[-2.36%] max-w-none top-[0.44%] w-[105.74%]" src={imgRectangle} />
        </div>
      </div>
      <Group />
      <Group3 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[132.5px] top-[-3.5px]" data-name="Container (margin)">
      <Layer />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[46.672px]" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['Pretendard:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#383838] text-[18px] top-[-0.5px] whitespace-nowrap">김민수</p>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139.16px] pb-[4px] top-[64.5px]" data-name="Heading 1 (margin)">
      <Heading />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p7c73480} id="Vector" stroke="var(--stroke-0, #898989)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #898989)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[109.57px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#898989] text-[12px] top-[-0.5px] whitespace-nowrap">경상북도 청도군 다로리</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[30px] items-center left-[99.71px] pb-[12px] top-[95.5px] w-[125.57px]" data-name="Container">
      <Icon1 />
      <Paragraph />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[99.71px] top-[-3.5px]">
      <ContainerMargin1 />
      <Heading1Margin />
      <Container5 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[42.08%_13.32%_53.51%_80.97%]" data-name="Group">
      <div className="absolute inset-[42.08%_13.32%_53.51%_80.97%] mask-position-[0.821px_0.839px,_0.047px_0.035px]" style={{ maskImage: `url("${imgRectangle5}"), url("${imgRectangle6}")` }} data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[42.09%_13.34%_53.52%_80.98%]" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[42.09%_13.34%_53.52%_80.98%]" data-name="Group">
      <ClipPathGroup3 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[42.31%_13.58%_53.74%_81.22%]" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[42.31%_13.58%_53.74%_81.22%]" data-name="Group">
      <ClipPathGroup2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[47.3%_14.44%_50.53%_82.24%]" data-name="Group">
      <div className="absolute inset-[47.3%_16.96%_51.98%_82.24%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58801 2.59913">
          <path d={svgPaths.p2c4c6780} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.3%_14.44%_51.97%_84.77%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58646 2.63842">
          <path d={svgPaths.pe02a80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.22%_15.35%_50.53%_83.14%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.89001 4.56627">
          <path d={svgPaths.p34f18180} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[42.31%_7.1%_42.54%_75.08%]">
      <div className="absolute inset-[43.44%_7.1%_42.54%_75.08%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <Group7 />
      <Group10 />
      <div className="absolute inset-[49.03%_15.64%_50.53%_83.43%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01934 1.59016">
          <path d={svgPaths.p433a300} fill="var(--fill-0, #F2AAAA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.71%_15.6%_49.21%_79.39%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
        </div>
      </div>
      <div className="absolute inset-[46.71%_11.52%_49.21%_83.47%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
        </div>
      </div>
    </div>
  );
}

function Lv() {
  return (
    <div className="absolute contents left-[282px] top-[239px]" data-name="LV.1">
      <div className="absolute h-[7.07px] left-[294.37px] top-[239px] w-[2.969px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96875 7.07031">
          <path d={svgPaths.p1be72380} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute left-[292.63px] size-[1.514px] top-[244.63px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51367 1.51367">
          <path d={svgPaths.p2b41c300} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[7.07px] left-[286.23px] top-[239px] w-[6.553px]" data-name="Vector">
        <div className="absolute inset-[0_4.12%_0_4.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01342 7.07031">
            <path d={svgPaths.p1cf13430} fill="var(--fill-0, #C0C0C0)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[7.07px] left-[282px] top-[239px] w-[4.395px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.39453 7.07031">
          <path d={svgPaths.p36edd000} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[25px] top-[210px]">
      <div className="absolute bg-[#1da39e] h-[9px] left-[38px] top-[218px] w-[124px]" />
      <div className="absolute bg-[#e4e4e4] h-[9px] left-[162px] top-[218px] w-[128px]" />
      <div className="absolute left-[25px] size-[25px] top-[210px]">
        <div className="absolute inset-[-16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <g filter="url(#filter0_d_2057_248)" id="Ellipse 9">
              <circle cx="16.5" cy="16.5" fill="var(--fill-0, white)" r="12.5" />
              <circle cx="16.5" cy="16.5" r="11.5" stroke="var(--stroke-0, #00D3CD)" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33" id="filter0_d_2057_248" width="33" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2057_248" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2057_248" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[59.62%_86.46%_36.96%_9.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.48">
          <path d={svgPaths.pa370000} fill="var(--fill-0, #00D3CD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute left-[86px] size-[12.726px] top-[215.5px]">
        <div className="absolute inset-[-23.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7143 18.7143">
            <g filter="url(#filter0_d_2057_244)" id="Ellipse 6">
              <circle cx="9.35714" cy="9.35714" fill="var(--fill-0, white)" r="6.36286" />
              <circle cx="9.35714" cy="9.35714" r="5.36286" stroke="var(--stroke-0, #00D3CD)" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7143" id="filter0_d_2057_244" width="18.7143" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.49714" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2057_244" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2057_244" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[157px] size-[12.726px] top-[215.5px]">
        <div className="absolute inset-[-23.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7143 18.7143">
            <g filter="url(#filter0_d_2057_242)" id="Ellipse 7">
              <circle cx="9.35714" cy="9.35714" fill="var(--fill-0, white)" r="6.36286" />
              <circle cx="9.35714" cy="9.35714" r="5.36286" stroke="var(--stroke-0, #00D3CD)" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7143" id="filter0_d_2057_242" width="18.7143" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.49714" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2057_242" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2057_242" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[228px] size-[12.726px] top-[215.5px]">
        <div className="absolute inset-[-23.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7143 18.7143">
            <g filter="url(#filter0_d_2057_260)" id="Ellipse 8">
              <circle cx="9.35714" cy="9.35714" fill="var(--fill-0, white)" r="6.36286" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7143" id="filter0_d_2057_260" width="18.7143" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.49714" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2057_260" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2057_260" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function HZazAn() {
  return (
    <div className="absolute contents inset-[57.69%_7.08%_35.44%_85.23%]" data-name="HZazAN">
      <div className="absolute left-[277px] size-[25px] top-[210px]">
        <div className="absolute inset-[-16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <g filter="url(#filter0_d_2057_240)" id="Ellipse 5">
              <circle cx="16.5" cy="16.5" fill="var(--fill-0, white)" r="12.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33" id="filter0_d_2057_240" width="33" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2057_240" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2057_240" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[59.34%_8.92%_37.09%_87.08%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12.9923">
          <path d={svgPaths.p6895680} fill="var(--fill-0, #49D0CB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f84f400} fill="var(--fill-0, #00E6D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#555] text-[12px] w-[158px]">
          <p className="leading-[1.3] mb-0">민수님은 이미 12명의 이웃에게</p>
          <p className="leading-[1.3]">따뜻한 손길을 건넸어요</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[157.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#727272] text-[9px] w-[158px]">
          <p className="leading-[1.5] mb-0">작은 도움이 모여 다로리를</p>
          <p className="leading-[1.5]">더 살기 좋은 마을로 만들고 있습니다</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[157.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[62px] relative shrink-0 w-[291px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start py-[3px] relative size-full">
        <IconMargin />
        <Container8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col h-[89px] items-start px-[17px] py-[11px] relative rounded-[15px] shrink-0 w-[303px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container7 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[87px] items-start justify-center left-[12px] top-[273px] w-[303px]" data-name="Container (margin)">
      <Container6 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[134px]">
      <div className="absolute bg-[rgba(220,248,244,0.5)] h-[238px] left-0 rounded-[15px] top-[134px] w-[325px]" />
      <Group6 />
      <div className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] h-[32px] leading-[0] left-[25px] not-italic text-[#383838] text-[12px] top-[160px] w-[213px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`목표에 가까워지고 있어요 민수님! `}</p>
        <p className="leading-[1.4]">다음 도움을 찾아 레벨을 올려볼까요?</p>
      </div>
      <Lv />
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] h-[10px] leading-[1.4] left-[78px] not-italic text-[#1da39e] text-[9px] top-[236px] tracking-[-0.18px] w-[29px]">도움 1회</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] h-[10px] leading-[1.4] left-[219px] not-italic text-[#ccc] text-[9px] top-[236px] tracking-[-0.18px] w-[32px]">도움 2회</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] h-[10px] leading-[1.4] left-[148px] not-italic text-[#1da39e] text-[9px] top-[236px] tracking-[-0.18px] w-[32px]">활동일지</p>
      <Group11 />
      <HZazAn />
      <ContainerMargin2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[364px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group4 />
        <Group5 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2057_250)" id="Icon">
          <path d={svgPaths.p1e57e600} id="Vector" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a7ce900} id="Vector_2" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.83333 5H6.66667V8.33333" id="Vector_3" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25bee380} id="Vector_4" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2057_250">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(0,211,205,0.1)] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[25.93px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[15px] left-[13px] not-italic text-[#383838] text-[10px] text-center top-[0.5px] whitespace-nowrap">크레딧</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <Container12 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76px] items-start left-0 px-[9px] py-[11px] rounded-[15px] top-0 w-[103px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(0,211,205,0.1)] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.945px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[15px] left-[18.5px] not-italic text-[#383838] text-[10px] text-center top-[0.5px] whitespace-nowrap">캐시 아웃</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <Container14 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76px] items-start left-[111px] px-[9px] py-[11px] rounded-[15px] top-0 w-[103px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container13 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31104300} id="Vector" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b3f8200} id="Vector_2" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 9.16667H13.3333" id="Vector_3" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H13.3333" id="Vector_4" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 9.16667H6.675" id="Vector_5" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 13.3333H6.675" id="Vector_6" stroke="var(--stroke-0, #00D3CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(0,211,205,0.1)] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.945px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[15px] left-[18.5px] not-italic text-[#383838] text-[10px] text-center top-[0.5px] whitespace-nowrap">활동 기록</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <Container16 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76px] items-start left-[222px] px-[9px] py-[11px] rounded-[15px] top-0 w-[103px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[86px] relative shrink-0 w-[377px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[34px] pt-[10px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#00d3cd] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">총 도움 횟수</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#898989] text-[11px] whitespace-nowrap">이번 달 5회</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[67.148px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[42px] relative shrink-0 w-[54.414px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full [word-break:break-word] absolute font-['Pretendard:Bold',sans-serif] leading-[42px] left-[54.41px] not-italic text-[#00d3cd] text-[24px] text-right top-[-1px] whitespace-nowrap">12회</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[285px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] relative size-full">
        <Container20 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f5f5f5] h-[70px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p164f7540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p809b580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#7fdcc0] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">보유 크레딧</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#898989] text-[11px] whitespace-nowrap">도움을 요청할 때 사용해요</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[112.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[42px] relative shrink-0 w-[53.555px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Bold',sans-serif] leading-[42px] left-[7.55px] not-italic text-[#7fdcc0] text-[24px] top-[-1px] whitespace-nowrap">240</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[41px] relative shrink-0 w-[285px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] relative size-full">
        <Container25 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f5f5f5] h-[70px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[150px] relative shrink-0 w-[325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container18 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#383838] text-[13px] text-center whitespace-nowrap">💡 이런 활동은 어때요?</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[23px] relative shrink-0 w-[283px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#727272] text-[11px] text-center whitespace-nowrap">지금 근처에서 도움이 필요한 이웃이 4명 있어요</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00d3cd] h-[39px] left-1/2 rounded-[15px] top-[6px] w-[247px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Bold',sans-serif] leading-[21px] left-[124px] not-italic text-[14px] text-center text-white top-[9px] whitespace-nowrap">새로운 요청 보러가기</p>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(214,214,214,0.05)] h-[129px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(135,135,135,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Paragraph12 />
        <Paragraph13 />
        <InlineContent />
      </div>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="h-[159px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[50px] pt-[30px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[988px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[15px] pt-[40px] px-[34px] relative size-full">
        <Container2 />
        <Container4 />
        <Container9 />
        <Container17 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function MyPageScreen() {
  return (
    <div className="bg-white h-[988px] relative shrink-0 w-full" data-name="MyPageScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start relative size-full" data-name="Container">
      <MyPageScreen />
    </div>
  );
}