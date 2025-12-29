
"use client";

import { useState } from "react";
import { 
  Drum, Axe, Coins, University, Swords, Shield, Rabbit, 
  Building, Users, TowerControl, Building2, UserPlus, Fence, 
  Home, Castle, LandPlot, AlertTriangle, ChevronDown 
} from "lucide-react";

// --- CSS TO HIDE SCROLLBARS (Native App Feel) ---
const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// --- 1. TYPE DEFINITIONS ---
type SlideType = "cover" | "phase" | "action-list" | "alert";

interface SlideData {
  type: SlideType;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
  content?: string[];
  civColor?: string;
}

interface CivBuildOrder {
  id: string;
  name: string;
  color: string;
  bgGradient: string;
  slides: SlideData[];
}

// --- 2. DATA ---
const BUILD_ORDERS: CivBuildOrder[] = [
  {
    id: "japanese",
    name: "Japanese",
    color: "text-red-400",
    bgGradient: "from-red-950/40",
    slides: [
      { type: "cover", title: "Sengoku Daimyo", subtitle: "Fast Matsuri Eco into Koka Township Pressure", icon: Swords },
      { type: "phase", title: "I. Dark Age Economy", subtitle: "Strong Foundation", icon: Drum },
      { type: "action-list", title: "Immediate Start", icon: Axe, content: [
          "5 Villagers to Wood.",
          "1 Villager builds House.",
          "CRITICAL: Research 'Tawara' upgrade immediately from House."
      ]},
      { type: "action-list", title: "Matsuri Setup", icon: Coins, content: [
          "Shift-click Wood vills to Berries.",
          "Next 2 Vills to Gold & Build Matsuri Market.",
          "Produce Yatai immediately.",
          "Place Yatai between Food & Sheep."
      ]},
      { type: "alert", title: "Mechanic Check", content: ["Toggle Yatai target to ensure the correct Matsuri receives the boost (Aim for Food)."] },
      { type: "action-list", title: "Prep Age Up", icon: Rabbit, content: [
          "All new Villagers to Sheep.",
          "Gather until 5 Villagers ready for landmark."
      ]},
      { type: "phase", title: "II. Feudal Age", subtitle: "Koka Township", icon: University },
      { type: "action-list", title: "Landmark Build", icon: Building2, content: [
          "Build Koka Township (5 Food Vills).",
          "Shift-queue builders to Wood.",
          "Build Lumber Camp & House.",
          "Get Food Upgrade immediately."
      ]},
      { type: "action-list", title: "Production", icon: Swords, content: [
          "Build 2 Stables & 1 Blacksmith.",
          "Spam Yari Cavalry.",
          "Move Eco to Berries/Boar."
      ]}
    ]
  },
  {
    id: "french",
    name: "French",
    color: "text-blue-400",
    bgGradient: "from-blue-950/40",
    slides: [
      { type: "cover", title: "French Knights", subtitle: "Feudal Aggression + Pro Scouts", icon: Shield },
      { type: "phase", title: "I. Opening", subtitle: "Standard Start", icon: Users },
      { type: "action-list", title: "Allocation", icon: Users, content: [
          "7 Vills to Food (Sheep).",
          "3 Vills to Gold."
      ]},
      { type: "phase", title: "II. Transition", subtitle: "School of Cavalry", icon: TowerControl },
      { type: "action-list", title: "Build Landmark", icon: Building, content: [
          "Use 5 Food Vills -> School of Cavalry.",
          "Move builders to Wood when done."
      ]},
      { type: "phase", title: "III. Pressure", subtitle: "Knights & Eco", icon: Shield },
      { type: "action-list", title: "Balance", icon: Coins, content: [
          "Target: 12 Food / 10 Gold.",
          "Constant Knight Production.",
          "Get Pro Scouts at Mill."
      ]}
    ]
  },
  {
    id: "china",
    name: "China",
    color: "text-yellow-400",
    bgGradient: "from-yellow-950/40",
    slides: [
      { type: "cover", title: "China BBQ", subtitle: "Imperial Official & Barbican Rush", icon: Coins },
      { type: "phase", title: "I. Setup", subtitle: "IO Rush", icon: UserPlus },
      { type: "action-list", title: "Start", icon: Axe, content: [
          "All starting Vills to Wood.",
          "Que Imperial Official from TC.",
          "Build Mill on Sheep.",
          "Build 1 Village (House)."
      ]},
      { type: "phase", title: "II. Barbican", subtitle: "Defensive Landmark", icon: Building2 },
      { type: "action-list", title: "Execution", icon: Building, content: [
          "3 Vills to Gold.",
          "1 Villager builds Barbican.",
          "Age Up: Move Food vills to Wood."
      ]},
      { type: "alert", title: "Strategy Choice", content: ["Stable + Pro Scouts OR 2nd TC Boom. Watch opponent."] }
    ]
  },
  {
    id: "english",
    name: "English",
    color: "text-white",
    bgGradient: "from-neutral-800/40",
    slides: [
      { type: "cover", title: "English", subtitle: "Longbow Defense", icon: Castle },
      { type: "action-list", title: "Dark Age", icon: LandPlot, content: [
          "6 Food.",
          "2 Gold.",
          "1 Wood."
      ]},
      { type: "action-list", title: "Council Hall", icon: Building, content: [
          "Build with 4 Food Vills.",
          "Return to Food."
      ]},
      { type: "action-list", title: "Feudal Goal", icon: Users, content: [
          "11 Wood / 11 Food / 3 Gold.",
          "Spam Longbows."
      ]}
    ]
  }
];

// --- 3. COMPONENT ---

export default function Aoe4ScrollReader() {
  const [selectedCivId, setSelectedCivId] = useState("japanese");
  const activeBuild = BUILD_ORDERS.find(b => b.id === selectedCivId) || BUILD_ORDERS[0];

  return (
    <>
      <style>{styles}</style>
      
      {/* h-[100dvh] ensures it fits perfectly on mobile browsers with address bars 
        bg-neutral-950 is easier on battery (OLED screens)
      */}
      <div className="fixed inset-0 bg-neutral-950 text-neutral-100 font-sans overflow-hidden">
        
        {/* MOBILE HEADER (Floating) */}
        <div className="absolute top-0 left-0 right-0 z-50 px-4 py-4 pt-safe flex justify-between items-center pointer-events-none">
          {/* Brand */}
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-auto">
              <Swords className="text-yellow-500 w-4 h-4" />
              <span className="font-bold text-yellow-500 text-xs tracking-wider uppercase">AoE4 Guide</span>
          </div>
          
          {/* Native Select Wrapper */}
          <div className="relative pointer-events-auto shadow-lg">
              <select 
                value={selectedCivId}
                onChange={(e) => setSelectedCivId(e.target.value)}
                className="appearance-none bg-neutral-800 text-sm text-white py-2 pl-4 pr-10 rounded-full border border-neutral-700 focus:outline-none focus:border-yellow-500 font-medium w-32 truncate"
              >
                {BUILD_ORDERS.map((civ) => (
                    <option key={civ.id} value={civ.id}>
                    {civ.name}
                    </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                <ChevronDown className="w-4 h-4" />
              </div>
          </div>
        </div>

        {/* SCROLL FEED */}
        <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
          
          {activeBuild.slides.map((slide, index) => (
            <div 
              key={`${selectedCivId}-${index}`} 
              className="snap-center h-[100dvh] w-full flex flex-col items-center justify-center p-6 relative"
            >
              {/* Dynamic Background Tint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeBuild.bgGradient} to-transparent opacity-20 pointer-events-none`}></div>

              <div className="w-full max-w-sm relative z-10 space-y-6">
                
                {/* --- COVER SLIDE --- */}
                {slide.type === "cover" && (
                  <div className="text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                    <div className={`p-6 rounded-full bg-neutral-900 border-4 border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${activeBuild.color}`}>
                      {slide.icon && <slide.icon className="w-16 h-16" />}
                    </div>
                    <div>
                      <h2 className={`text-4xl font-black uppercase tracking-tighter leading-none mb-4 ${activeBuild.color}`}>
                          {slide.title}
                      </h2>
                      <p className="text-neutral-400 text-lg font-light leading-snug">
                          {slide.subtitle}
                      </p>
                    </div>
                    <div className="absolute bottom-12 left-0 right-0 animate-bounce text-neutral-600 flex flex-col items-center gap-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Swipe Up</p>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* --- PHASE SLIDE (Section Header) --- */}
                {slide.type === "phase" && (
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-800/80 border border-neutral-700 text-yellow-500 mb-2 shadow-xl">
                      {slide.icon && <slide.icon className="w-8 h-8" />}
                    </div>
                    <h3 className="text-yellow-600 font-mono text-xs uppercase tracking-[0.2em]">
                      Current Phase
                    </h3>
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      {slide.title}
                    </h2>
                    <div className="h-1 w-20 bg-neutral-800 mx-auto rounded-full"></div>
                    <p className="text-neutral-400">
                      {slide.subtitle}
                    </p>
                  </div>
                )}

                {/* --- ACTION LIST (The Meat) --- */}
                {slide.type === "action-list" && (
                  <div className="bg-neutral-900/90 border border-neutral-800 p-6 rounded-3xl shadow-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-4">
                       <div className={`p-2 rounded-lg bg-neutral-800 ${activeBuild.color}`}>
                          {slide.icon && <slide.icon className="w-5 h-5" />}
                       </div>
                       <h3 className="text-lg font-bold text-white leading-none">{slide.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {slide.content?.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start">
                              {/* Custom Bullet Point */}
                              <div className={`flex-none mt-1.5 w-2 h-2 rounded-full ring-2 ring-offset-2 ring-offset-neutral-900 ${activeBuild.color.replace('text', 'bg')} ${activeBuild.color.replace('text', 'ring')}`}></div>
                              <span className="text-lg text-neutral-200 font-medium leading-snug">{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* --- ALERT (Warnings) --- */}
                {slide.type === "alert" && (
                  <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-3xl text-center space-y-4 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                      <div className="inline-flex p-3 bg-red-500/10 rounded-full text-red-500 mb-2 animate-pulse">
                          <AlertTriangle className="w-8 h-8" />
                      </div>
                      <h3 className="text-red-400 font-bold uppercase tracking-widest text-xs">{slide.title}</h3>
                      <p className="text-red-100 text-xl font-medium leading-relaxed">
                          "{slide.content?.[0]}"
                      </p>
                  </div>
                )}

              </div>
            </div>
          ))}

          {/* END SPACER */}
          <div className="snap-center h-[50dvh] flex flex-col items-center justify-center text-neutral-600 text-sm gap-4 pb-12">
               <p>End of Build Order</p>
               <button 
                  onClick={(e) => {
                    const container = e.currentTarget.closest('.overflow-y-scroll');
                    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-neutral-800 text-yellow-500 font-bold border border-neutral-700 active:scale-95 transition-transform"
               >
                  Start Over
               </button>
          </div>

        </div>
      </div>
    </>
  );
}
