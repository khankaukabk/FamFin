"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Drum, Axe, Coins, University, Swords, Shield, Rabbit, 
  Building, Users, TowerControl, Building2, UserPlus, 
  Castle, LandPlot, AlertTriangle, ChevronDown, Check, Sparkles
} from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }
`;

// --- TYPES ---
type SlideType = "cover" | "phase" | "action-list" | "alert";

interface SlideData {
  type: SlideType;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
  content?: string[];
}

interface CivBuildOrder {
  id: string;
  name: string;
  themeColor: string; // Tailwind color class (e.g., 'red')
  slides: SlideData[];
}

// --- DATA ---
const BUILD_ORDERS: CivBuildOrder[] = [
  {
    id: "japanese",
    name: "Japanese",
    themeColor: "red",
    slides: [
      { type: "cover", title: "Sengoku Daimyo", subtitle: "Fast Matsuri Eco into Koka Township Pressure", icon: Swords },
      { type: "phase", title: "I. Dark Age", subtitle: "Setting the Foundation", icon: Drum },
      { type: "action-list", title: "Immediate Start", icon: Axe, content: [
          "5 Villagers to Wood.",
          "1 Villager builds House.",
          "CRITICAL: Research 'Tawara' upgrade immediately."
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
      { type: "phase", title: "II. Feudal Age", subtitle: "Koka Township Transition", icon: University },
      { type: "action-list", title: "Landmark Build", icon: Building2, content: [
          "Build Koka Township (5 Food Vills).",
          "Shift-queue builders to Wood.",
          "Build Lumber Camp & House.",
          "Get Food Upgrade immediately."
      ]},
      { type: "action-list", title: "Production", icon: Swords, content: [
          "Build 2 Stables & 1 Blacksmith.",
          "Produce Yari Cavalry constantly.",
          "Move Eco to Berries/Boar."
      ]}
    ]
  },
  {
    id: "french",
    name: "French",
    themeColor: "blue",
    slides: [
      { type: "cover", title: "Royal Knights", subtitle: "Feudal Aggression + Pro Scouts", icon: Shield },
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
    themeColor: "yellow",
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
    themeColor: "stone",
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

// --- SUB-COMPONENT: CHECKABLE LIST ITEM ---
const CheckableItem = ({ text, themeColor }: { text: string, themeColor: string }) => {
  const [checked, setChecked] = useState(false);
  
  // Reset checked state if text changes (new slide)
  useEffect(() => { setChecked(false); }, [text]);

  return (
    <li 
      onClick={() => setChecked(!checked)}
      className={`
        flex gap-4 items-start p-3 rounded-xl transition-all duration-300 cursor-pointer group select-none
        ${checked ? "bg-white/5" : "bg-transparent active:bg-white/5"}
      `}
    >
      {/* Checkbox Circle */}
      <div className={`
        flex-none mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
        ${checked 
          ? `bg-${themeColor}-500 border-${themeColor}-500 scale-110` 
          : `border-${themeColor}-500/30 group-hover:border-${themeColor}-500/60`}
      `}>
        <Check className={`w-3.5 h-3.5 text-black font-bold transition-all ${checked ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Text */}
      <span className={`
        text-lg font-medium leading-snug transition-all duration-300
        ${checked ? "text-neutral-500 line-through" : "text-neutral-100"}
      `}>
        {text}
      </span>
    </li>
  );
};


// --- MAIN COMPONENT ---
export default function Aoe4NiceReader() {
  const [selectedCivId, setSelectedCivId] = useState("japanese");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const activeBuild = BUILD_ORDERS.find(b => b.id === selectedCivId) || BUILD_ORDERS[0];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update progress bar
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, clientHeight } = scrollContainerRef.current;
    const index = Math.round(scrollTop / clientHeight);
    setCurrentSlideIndex(index);
  };

  // Helper for colors
  const tc = activeBuild.themeColor; 

  return (
    <>
      <style>{styles}</style>
      
      <div className="fixed inset-0 bg-black text-neutral-100 font-sans overflow-hidden">
        
        {/* --- DYNAMIC BACKGROUND AMBIENCE --- */}
        {/* Top Glow */}
        <div className={`absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-${tc}-600/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000 animate-pulse-glow`} />
        {/* Bottom Glow */}
        <div className={`absolute bottom-[-20%] right-[-20%] w-[140%] h-[60%] bg-${tc}-900/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000`} />
        
        {/* --- HEADER --- */}
        <div className="absolute top-0 left-0 right-0 z-50 pt-safe flex flex-col pointer-events-none">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10">
                <div 
                    className={`h-full bg-${tc}-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                    style={{ width: `${((currentSlideIndex + 1) / activeBuild.slides.length) * 100}%` }}
                />
            </div>

            {/* Navbar */}
            <div className="px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 pointer-events-auto">
                    <div className={`p-1.5 rounded-lg bg-${tc}-500/20 border border-${tc}-500/30 backdrop-blur-md`}>
                        <Swords className={`w-4 h-4 text-${tc}-400`} />
                    </div>
                </div>
                
                {/* Civ Selector */}
                <div className="relative pointer-events-auto group">
                    <div className="absolute inset-0 bg-white/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <select 
                        value={selectedCivId}
                        onChange={(e) => {
                            setSelectedCivId(e.target.value);
                            // Reset scroll
                            if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="relative appearance-none bg-black/40 backdrop-blur-xl text-sm text-white py-2.5 pl-5 pr-10 rounded-full border border-white/10 focus:outline-none focus:border-white/30 font-medium w-40 truncate shadow-2xl"
                    >
                        {BUILD_ORDERS.map((civ) => (
                            <option key={civ.id} value={civ.id}>{civ.name}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
            </div>
        </div>

        {/* --- SCROLL FEED --- */}
        <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
        >
          
          {activeBuild.slides.map((slide, index) => (
            <div 
              key={`${selectedCivId}-${index}`} 
              className="snap-center h-[100dvh] w-full flex flex-col items-center justify-center p-6 relative"
            >
              <div className="w-full max-w-sm relative z-10 space-y-6">
                
                {/* --- COVER SLIDE --- */}
                {slide.type === "cover" && (
                  <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-10">
                    <div className="relative mb-10">
                        {/* Glowing Orb Behind Icon */}
                        <div className={`absolute inset-0 bg-${tc}-500 blur-[40px] opacity-40 animate-pulse`} />
                        <div className={`relative p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl shadow-2xl animate-float`}>
                            {slide.icon && <slide.icon className={`w-20 h-20 text-${tc}-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />}
                        </div>
                    </div>
                    
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tighter mb-4 leading-[0.9]">
                        {slide.title}
                    </h2>
                    <p className={`text-${tc}-300/80 text-lg font-medium tracking-wide uppercase`}>
                        {slide.subtitle}
                    </p>

                    <div className="absolute bottom-12 left-0 right-0 animate-bounce text-white/30 flex flex-col items-center gap-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Start</p>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* --- PHASE SLIDE --- */}
                {slide.type === "phase" && (
                  <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className={`inline-flex p-4 rounded-2xl bg-${tc}-500/10 border border-${tc}-500/20 text-${tc}-400 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-md`}>
                      {slide.icon && <slide.icon className={`w-10 h-10`} />}
                    </div>
                    <div>
                        <h3 className={`text-${tc}-400 font-mono text-xs uppercase tracking-[0.3em] mb-3`}>
                        Current Phase
                        </h3>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                        {slide.title}
                        </h2>
                    </div>
                    <div className={`h-1 w-16 bg-${tc}-500/30 mx-auto rounded-full`} />
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                )}

                {/* --- ACTION LIST --- */}
                {slide.type === "action-list" && (
                  <div className="relative group">
                    {/* Glass Card */}
                    <div className="absolute inset-0 bg-white/5 blur-xl rounded-[2rem] opacity-50" />
                    <div className="relative bg-black/40 border border-white/10 p-6 rounded-[2rem] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`p-3 rounded-xl bg-${tc}-500/20 border border-${tc}-500/20 shadow-lg`}>
                                {slide.icon && <slide.icon className={`w-6 h-6 text-${tc}-400`} />}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mt-1">Checklist</p>
                            </div>
                        </div>

                        {/* List */}
                        <ul className="space-y-2">
                            {slide.content?.map((item, i) => (
                                <CheckableItem key={i} text={item} themeColor={tc} />
                            ))}
                        </ul>
                    </div>
                  </div>
                )}

                {/* --- ALERT --- */}
                {slide.type === "alert" && (
                  <div className="relative overflow-hidden bg-red-500/10 border border-red-500/30 p-8 rounded-[2rem] text-center space-y-6 backdrop-blur-xl shadow-[0_0_50px_rgba(239,68,68,0.15)] animate-in zoom-in duration-300">
                      <div className="absolute top-0 right-0 p-32 bg-red-500/20 blur-[60px] rounded-full pointer-events-none" />
                      
                      <div className="relative inline-flex p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl text-white shadow-lg mb-2">
                          <AlertTriangle className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-red-400 font-bold uppercase tracking-[0.2em] text-xs mb-3">{slide.title}</h3>
                        <p className="text-white text-xl font-medium leading-relaxed">
                            "{slide.content?.[0]}"
                        </p>
                      </div>
                  </div>
                )}

              </div>
            </div>
          ))}

          {/* END SPACER */}
          <div className="snap-center h-[50dvh] flex flex-col items-center justify-center gap-6 pb-20">
               <Sparkles className={`w-12 h-12 text-${tc}-400 animate-spin-slow opacity-50`} />
               <p className="text-white/40 font-medium">Build Order Complete</p>
               <button 
                  onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-8 py-4 rounded-full bg-${tc}-600 text-white font-bold tracking-wide shadow-lg active:scale-95 transition-all hover:bg-${tc}-500`}
               >
                  Restart Guide
               </button>
          </div>

        </div>
      </div>
    </>
  );
}
