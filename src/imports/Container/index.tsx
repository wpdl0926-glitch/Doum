function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[22.477px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[19.5px] left-0 not-italic text-[#787878] text-[13px] top-px whitespace-nowrap">🔒장소</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[148px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#a2a2a2] text-[10px] top-[0.5px] whitespace-nowrap">약속 확정 시 구체적인 주소 제공</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[297px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">다로리 강변 주택가</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start overflow-clip relative rounded-[15px] size-full" data-name="Container">
      <Container1 />
    </div>
  );
}