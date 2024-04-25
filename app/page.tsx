'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import SVGPattern1 from './svg/Pattern1';
import SVGPattern2 from './svg/Pattern2';
import SVGPattern3 from './svg/Pattern3';
import SVGPattern4 from './svg/Pattern4';
import DiamondSVG from './svg/Diamond';

import CapsuleButton from '@/components/ui/CapsuleButton';
import FeaturedCard from '@/components/ui/FeaturedCard';
import PreviewCard from '@/components/ui/PreviewCard';

interface PreviewCardContent {
  imageUrl: string;
  description: string;
  tags: string[];
}

const PreviewCardInfo = {
  cyber: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713838337/Cyber/Cyber_cover2_v9rvzl.png',
    description:
      'Easy to use cybersecurity monitor powered by AI and knowledge graph',
    tags: ['#strategy', '#saas', '#0-to-1'],
  },
  dashboard: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713829915/TCP/DashboardCover_zhv7x2.png',
    description:
      'Creating evidence-based MVP without clear product vision and access to user research',
    tags: ['#strategy', '#saas', '#0-to-1'],
  },
  ubisoft: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713838420/Ubisoft/UbisoftCover_rgmguf.png',
    description:
      'Customer Support Portal Redesign',
    tags: ['#service-design', '#cx', '#design-strategy'],
  },
  marketplace: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713838360/3M/Market_Cover_gzsxtp.png',
    description:
      'Defined persona, customer journey and value proposition to validate an ambitious B2B Marketplace',
    tags: ['#b2b', '#0-to-1', '#mvp-validation', '#user-research'],
  },
  extraspace: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713936695/ExstraSpace/ess_cover_1x_ken99t.png',
    description:
      'Storage E-Commmerce Redesign',
    tags: ['#b2c', '#ecommerce', '#design-system'],
  },
  hamsa: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713936497/unnamed_edxr4x.gif',
    description:
      'High five your friends in VR with your own hands',
    tags: ['#vr', '#social', '#co-creation'],
  },
  garden: {
    imageUrl: 'https://res.cloudinary.com/dtrdipypb/image/upload/v1713937916/ts2_w8sfcl.jpg',
    description:
      '24 hr organic garden in the heart of manhattan',
    tags: ['#installation', '#physical', '#0-to-1'],
  }
};

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GreetingSectionWrapper = styled(SectionWrapper)`
  min-height: 30rem;
`;

const WorkSectionWrapper = styled(SectionWrapper)`
  min-height: 50rem;
`;

const SideSectionWrapper = styled(SectionWrapper)`
  min-height: 45rem;
`;

const GridWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const GridWithLineWrapper = (props: any) => (
  <GridWrapper>
    <div className="flex flex-row justify-center h-full w-full">
      <VerticalDottedLine />
      <div>{props.children}</div>
      <VerticalDottedLine />
    </div>
  </GridWrapper>
);

const VerticalDottedLine = styled.div`
  border: none;
  border-left: 1px solid transparent; /* Hide the solid line */
  background: linear-gradient(to bottom, #C3C3C3 50%, transparent 50%);
  background-size: 1px 9px; /* 6px dash + 3px gap = 9px total */
  width: 1px;
  flex-grow: 1;
  z-index:10;
`;

const Header1 = styled.div`
  font-size: 32px;
  font-weight:600;
  margin-bottom:32px;
`;

const GreetingsText = styled.div`font-size: 32px;
font-weight:400;`;

const Button = styled.button``;

const Greetings = () => (
  <div className="col-start-3 col-end-6">
    <GreetingsText>
      I’m Kylin, a strategic-minded design generalist.
    </GreetingsText>
    <div className="mt-6">
      <CapsuleButton href={'#work'}>Work</CapsuleButton>
      <CapsuleButton href={'#side'}>Side Project</CapsuleButton>
      <CapsuleButton href={'#about'}>About</CapsuleButton>
    </div>
  </div>
);

const HomeLink = (props: {
  href: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  previewCardContent: any;
  openInNewTab: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e: any) => {
    const link = e.target;
    const linkRect = link.getBoundingClientRect();

    // Calculate the position of the hover card
    const top = linkRect.bottom;
    const left = linkRect.left;

    // Set the position and show the hover card
    setCardPosition({ top, left });
    setIsHovered(true);

    props.onMouseEnter();
  };

  const handleMouseLeave = () => {
    // Hide the hover card
    setIsHovered(false);
    props.onMouseLeave();
  };
  // pointer-events-none md:pointer-events-auto
  return (
    <li>
      <div className='group'>
      <div
        // className="flex items-center group mb-[32px] pointer-events-none xl:pointer-events-auto"
        className="flex items-center pt-[16px] pb-[16px]"

        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[16px] h-[16px] ml-[-32px] mr-[16px]">
          <DiamondSVG isHovered={isHovered} />
        </div>
        <a
          href={props.href}
          className="text-textLinkDefault group-hover:text-textLinkHover  transition duration-300 ease-in-out  text-[24px] font-light relative"
          {...(props.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {props.children}
          <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-underlineLinkDefault transition-colors duration-300 group-hover:bg-textLinkHover"></span>
        </a>
      </div>
      <div className="block lg:hidden">
        {/* always show preview card inline on smaller screens */}
        <a href={props.href}>
        <PreviewCard content={props.previewCardContent} />
        </a>
      </div>
      </div>
    </li>
  );
};

const WorkSection = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [previewCardContent, setPreviewCardContent] =
    useState<PreviewCardContent | null>(null);

  const handleLinkHover = (
    imageUrl: string,
    description: string,
    tags: string[]
  ) => {
    setIsLinkHovered(true);
    // setPreviewCardContent(PreviewCardInfo.cyber);
    setPreviewCardContent({
      imageUrl,
      description,
      tags,
    });
  };

  const handleLinkLeave = () => {
    setIsLinkHovered(false);
    setPreviewCardContent(null);
  };

  return (
    <WorkSectionWrapper id="work">
      <div className="w-full h-full relative">
        <div className="w-full grid grid-cols-5 gap-4 ">
          <div className="col-start-2 col-end-6 xl:col-end-4">
            <Header1>entrée</Header1>
            <ul className="flex flex-col items-start">
              {/* <HomeLink
                href="/cyber"
                onMouseEnter={() =>
                  handleLinkHover(
                    '/placeholderPNG.png',
                    'Easy to use cybersecurity monitor powered by AI and knowledge graph',
                    [{ name: 'strategy' }, { name: 'saas' }, { name: '0-to-1' }]
                  )
                }
                onMouseLeave={handleLinkLeave}
              >
                Riot Games R&D - Game UI/UX
              </HomeLink> */}
              <HomeLink
                href="/dashboard"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.dashboard.imageUrl, PreviewCardInfo.dashboard.description, PreviewCardInfo.dashboard.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.dashboard}
                openInNewTab={false}
              >
                Enterprise Onboarding & Customer 360
              </HomeLink>
       
              <HomeLink
                href="/ubisoftcx"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.ubisoft.imageUrl, PreviewCardInfo.ubisoft.description, PreviewCardInfo.ubisoft.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.ubisoft}
                openInNewTab={false}
              >
                Do Gamers Dream of Customer Support?
              </HomeLink>
              <HomeLink
                href="/cyber"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.extraspace.imageUrl, PreviewCardInfo.extraspace.description, PreviewCardInfo.extraspace.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.extraspace}
                openInNewTab={false}
              >
                From Storage-Renting To Space-Booking
              </HomeLink>
              <HomeLink
                href="/cyber"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.cyber.imageUrl, PreviewCardInfo.cyber.description, PreviewCardInfo.cyber.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.cyber}
                openInNewTab={false}

              >
                AI-powered Cybersecurity Dashb  oard
              </HomeLink>
            </ul>
          </div>
          {isLinkHovered && (
            <div className="col-start-4 col-end-6 relative hidden lg:block">
              <div className='absolute'>
              <PreviewCard content={previewCardContent} />
              </div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 w-full h-full z-[-1] flex items-center justify-end ">
          <div className="w-[80vh] h-auto left-1/2 transform translate-x-1/2">
            <SVGPattern2 />
          </div>
        </div>
      </div>
    </WorkSectionWrapper>
  );
};

const SideSection = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [previewCardContent, setPreviewCardContent] =
    useState<PreviewCardContent | null>(null);

  const handleLinkHover = (
    imageUrl: string,
    description: string,
    tags: string[]
  ) => {
    setIsLinkHovered(true);
    setPreviewCardContent({
      imageUrl,
      description,
      tags,
    });
  };

  const handleLinkLeave = () => {
    setIsLinkHovered(false);
    setPreviewCardContent(null);
  };

  return (
    <SideSectionWrapper id="side">
      <div className="w-full h-full relative min-h-60vh">
        <div className="w-full grid grid-cols-5 gap-4 ">
          <div className="col-start-2 col-end-6 xl:col-end-4">
            <Header1>side</Header1>
            <ul className="flex flex-col items-start">
              <HomeLink
                href="https://docs.google.com/presentation/d/1w9adKmAQs5Eip9pk9hrwGX0KUSiBLmcrYJQEMsrNAk0/edit#slide=id.gf220615335_0_40"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.hamsa.imageUrl, PreviewCardInfo.hamsa.description, PreviewCardInfo.hamsa.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.hamsa}
                openInNewTab={true}
              >
                Hamsa VR
              </HomeLink>
              <HomeLink
                href="https://www.youtube.com/watch?v=0EnYRM3RyPE"
                onMouseEnter={() =>
                  handleLinkHover(PreviewCardInfo.garden.imageUrl, PreviewCardInfo.garden.description, PreviewCardInfo.garden.tags)
                }
                onMouseLeave={handleLinkLeave}
                previewCardContent={PreviewCardInfo.garden}
                openInNewTab={true}

              >
                Time Sqauare Electronic Garden
              </HomeLink>
            </ul>
          </div>
          {isLinkHovered && (
            <div className="col-start-4 col-end-6 relative">
              <div className='absolute'>
              <PreviewCard content={previewCardContent} />
              </div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 w-full h-full z-[-1] flex items-center justify-end ">
          <div className="w-[60vh] h-auto left-1/2 transform translate-x-1/2">
            <SVGPattern3 />
          </div>
        </div>
      </div>
    </SideSectionWrapper>
  );
};

const FooterLink = styled.a`
width: max-content;
padding: 8px;

color: #e1dec2;
font-size: 24px;
font-weight: 300;
text-decoration: underline;
transition: all 300ms ease-in-out;
margin-bottom:24px;

&:hover {
  color: white;
}
`;

const FooterSection = () => (
  <div className="absolute left-0 w-[100vw] h-[50vh] bg-[#2A2A2A] flex justify-center z-[-1]">
    <div className="grid grid-cols-5 gap-4 max-w-[1440px] w-full">
      <div className="col-start-2 col-end-5 flex flex-row justify-between">
        <div className="flex flex-col mt-8">
          <FooterLink
            href="https://www.linkedin.com/in/kylinc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/kylinc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/kylinc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kylingoround@gmail.com
          </FooterLink>
        </div>
        <div className="w-[400px] h-[400px] mt-[-60px]">
          <SVGPattern4 />
        </div>
      </div>
    </div>
  </div>
);

const StickyTopBar = () => {
  const [currentActive, setCurrentActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = [
        document.getElementById('greetings')?.offsetTop ?? 0,
        document.getElementById('work')?.offsetTop ?? 0,
        document.getElementById('side')?.offsetTop ?? 0,
        document.getElementById('about')?.offsetTop ?? 0,
      ];

      const scrollPosition = window.scrollY + 100;

      let currentActive = 1;

      console.log(currentActive);

      let activeIndex = 0;
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          activeIndex = i;
          break;
        }
      }

      setCurrentActive(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-0 w-full z-10 ">
      <div className="w-full max-w-[1440px] p-12">
        <div className="flex items-center space-x-4  ">
          <a
            href="#greetings"
            className={`nav-item ${currentActive === 0 ? 'active' : ''}`}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 0 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="#work"
            className={`nav-item ${currentActive === 1 ? 'active' : ''}`}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 1 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="#side"
            className={`nav-item ${currentActive === 2 ? 'active' : ''}`}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 2 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="#about"
            className={`nav-item ${currentActive === 3 ? 'active' : ''}`}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 3 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

// <div className="sticky top-0 z-50 flex justify-around items-center bg-white w-full h-24 shadow-md">
//   {[1, 2, 3, 4].map((index) => (
//     <div
//       key={index}
//       id={`section${index}`}
//       className={`section w-24 h-24 ${
//         activeSection === index ? 'bg-gray-900' : 'bg-gray-300'
//       }`}
//     ></div>
//   ))}
// </div>

const Home = () => (
  <div>
    <GridWithLineWrapper>
      <GreetingSectionWrapper id="greetings">
        <StickyTopBar />
        <div className="w-full h-full relative min-h-60vh mt-36">
          <div className="relative w-full grid grid-cols-5 gap-4 col-end-4 ">
            <Header1 className="col-start-2 col-end-3 ">Hello there.</Header1>
            <Greetings />
          </div>
          <div className="absolute inset-0 w-full h-full z-[-1] flex items-center justify-center pl-[24px] pr-[24px] ">
            <div className="w-full h-auto ml-12 mr-12 max-w-[960px]">
              <SVGPattern1 />
            </div>
          </div>
        </div>
      </GreetingSectionWrapper>
      <WorkSection />
      <SideSection />
      <SectionWrapper id="about">
        <div className="w-full grid grid-cols-5 gap-4 min-h-[40vh] mb-8 mt-8">
          <div className="col-start-2 col-end-5 ">
            <Header1>about</Header1>
            <div className="text-[24px] text-[#2A2A2A] leading-relaxed	">
            Designing for me is like solving puzzles of joggling between people's goals, needs and resource limitations. However, doesn't matter if it is an e-commerce product list or A.I.-powered dashboard, there is always an opportunity to inspire intrigue while helping people get things done.
            </div>
          </div>
        </div>
      </SectionWrapper>
      <FooterSection />
    </GridWithLineWrapper>
  </div>
);

export default Home;

// function NextHome() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
