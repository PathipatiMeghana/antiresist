import svgPaths from "./svg-2pqak78ml3";

function Icon() {
  return (
    <div className="h-[79.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.9863 74.9863">
            <path d={svgPaths.p12ca2400} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.33181" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[117.89px] pt-[31.986px] px-[31.986px] rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] size-[143.958px] top-[31.99px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[39.993px] left-[109.7px] top-[199.94px] w-[160.329px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-0 text-[36px] text-white top-[-2.82px] tracking-[-0.9px]">AntiResist</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[31.986px] items-start left-[142.92px] top-[247.92px] w-[93.867px]" data-name="Heading 2">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#dbeafe] text-[24px]">Analyzer</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[75.37px] top-[291.5px] w-[264px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#bedbff] text-[14px] text-center">Antibiotic Resistance Pattern Analysis</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[40px] left-[211.75px] rounded-[42770700px] size-[127.985px] top-[39.99px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[40px] left-[39.99px] rounded-[42770700px] size-[159.991px] top-[135.89px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-[156.45px] top-[327.87px] w-[66.84px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)]">Version 1.0.0</p>
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="h-[375.867px] overflow-clip relative shrink-0 w-full" data-name="SplashScreen" style={{ backgroundImage: "linear-gradient(135.293deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 50%, rgb(20, 71, 230) 100%)" }}>
      <Container1 />
      <Heading />
      <Heading1 />
      <Paragraph />
      <Container2 />
      <Container3 />
      <Paragraph1 />
    </div>
  );
}

function MobileScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[375.867px] items-start overflow-clip relative shrink-0 w-full" data-name="MobileScreen">
      <SplashScreen />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <MobileScreen />
    </div>
  );
}