
"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Drum, Axe, Coins, University, Swords, Shield, Rabbit, 
  Building, Users, TowerControl, Building2, UserPlus, 
  Castle, LandPlot, AlertTriangle, ChevronDown, Check, Sparkles,
  ArrowRight, BookUser
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
  themeColor: string; 
  slides: SlideData[];
}

// --- DATA ---
const BUILD_ORDERS: CivBuildOrder[] = [
  {
    id: "delhi",
    name: "Delhi Sultanate",
    themeColor: "green",
    slides: [
      { type: "cover", title: "Delhi Sultanate", subtitle: "Scholar & Ghazi Rush", icon: BookUser },
      { type: "phase", title: "I. Dark Age", subtitle: "Mosque & Sanctity Setup", icon: Drum },
      { type: "action-list", title: "Opening Moves", icon: Axe, content: [
          "Send all vills to Wood immediately (except 1).",
          "1 Villager builds Mosque immediately.",
          "New Villager -> Berries -> Build House.",
          "Villager from Straggler Tree -> Build Mill."
      ]},
      { type: "action-list", title: "Eco Balance", icon: Coins, content: [
          "Assign 8 Villagers to Food.",
          "Assign 3 Villagers to Gold.",
          "Send all new Villagers to Sheep until Age Up."
      ]},
      { type: "phase", title: "II. Age Up", subtitle: "Tower of Victory / Dome", icon: University },
      { type: "action-list", title: "The Transition", icon: Building2, content: [
          "Age Up with 4 Villagers from Berries.",
          "Shift-click builders back to Berries.",
          "Once Aged Up: Send all TC Sheep vills to Wood."
      ]},
      { type: "phase", title: "III. Feudal Age", subtitle: "Ghazi Production", icon: Swords },
      { type: "action-list", title: "Infrastructure", icon: Building, content: [
          "New Vills to Wood until Stable & Blacksmith done.",
          "Rebalance: Take 8 vills off Wood.",
          "Move 2 of them to Gold.",
          "Result: 16 Food / 5 Gold eco."
      ]},
      { type: "action-list", title: "Aggression", icon: Swords, content: [
          "Produce Imams (Scholars) consistently.",
          "Produce Ghazi Riders consistently.",
          "Secure Sacred Sites."
      ]}
    ]
  },
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

// --- NEW COMPONENT: TACTICAL STEP ROW ---
const StepRow = ({ text, index, themeColor }: { text: string, index: number, themeColor: string }) => {
  const [checked, setChecked] = useState(false);
  
  useEffect(() => { setChecked(false); }, [text]);

  return (
    <div 
      onClick={() => setChecked(!checked)}
      className={`
        relative w-full p-4 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-[0.98] overflow-hidden group
        ${checked 
          ? `bg-${themeColor}-900/10 border-${themeColor}-500/20` 
          : "bg-white/5 border-white/10 hover:bg-white/10"}
      `}
    >
      <div className={`absolute inset-0 bg-${themeColor}-500/10 opacity-0 transition-opacity duration-300 ${checked ? 'opacity-100' : ''}`} />

      <div className="flex items-center gap-4 relative z-10">
        <div className={`
          flex-none w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-500
          ${checked 
            ? `bg-${themeColor}-500 text-black rotate-0 scale-100` 
            : `bg-white/5 text-white/30 border border-white/10 -rotate-12`}
        `}>
          {checked ? <Check className="w-5 h-5" /> : (index + 1).toString().padStart(2, '0')}
        </div>
        <div className="flex-grow">
          <p className={`
            text-lg font-medium leading-snug transition-all duration-300
            ${checked ? "text-white/40 line-through decoration-white/20" : "text-white/90"}
          `}>
            {text}
          </p>
        </div>
        <div className={`transition-all duration-300 ${checked ? 'opacity-0 translate-x-2' : 'opacity-20'}`}>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Aoe4NiceReader() {
  const [selectedCivId, setSelectedCivId] = useState("delhi");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const activeBuild = BUILD_ORDERS.find(b => b.id === selectedCivId) || BUILD_ORDERS[0];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, clientHeight } = scrollContainerRef.current;
    const index = Math.round(scrollTop / clientHeight);
    setCurrentSlideIndex(index);
  };

  const tc = activeBuild.themeColor; 

  return (
    <>
      <style>{styles}</style>
      
      <div className="fixed inset-0 bg-neutral-950 text-neutral-100 font-sans overflow-hidden">
        
        {/* --- DYNAMIC BACKGROUND --- */}
        <div className={`absolute top-[-20%] left-[-10%] w-[120%] h-[70%] bg-${tc}-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-glow`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[100%] h-[60%] bg-${tc}-600/10 blur-[120px] rounded-full pointer-events-none`} />
        
        {/* --- HEADER --- */}
        <div className="absolute top-0 left-0 right-0 z-50 pt-safe flex flex-col pointer-events-none">
            <div className="w-full h-1.5 bg-white/5">
                <div 
                    className={`h-full bg-${tc}-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
                    style={{ width: `${((currentSlideIndex + 1) / activeBuild.slides.length) * 100}%` }}
                />
            </div>

            <div className="px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-2 pointer-events-auto">
                    <div className={`p-2 rounded-xl bg-black/40 border border-${tc}-500/30 backdrop-blur-md`}>
                        <BookUser className={`w-4 h-4 text-${tc}-400`} />
                    </div>
                </div>
                
                <div className="relative pointer-events-auto group">
                    <select 
                        value={selectedCivId}
                        onChange={(e) => {
                            setSelectedCivId(e.target.value);
                            if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="relative appearance-none bg-black/50 backdrop-blur-xl text-sm text-white py-3 pl-5 pr-10 rounded-2xl border border-white/10 focus:outline-none focus:border-white/30 font-medium w-40 truncate shadow-2xl"
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
              className="snap-center h-[100dvh] w-full flex flex-col items-center justify-center p-4 relative"
            >
              <div className="w-full max-w-sm relative z-10 space-y-6">
                
                {/* --- COVER SLIDE --- */}
                {slide.type === "cover" && (
                  <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-10">
                    <div className="relative mb-10">
                        <div className={`absolute inset-0 bg-${tc}-500 blur-[50px] opacity-30 animate-pulse`} />
                        <div className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl animate-float`}>
                            {slide.icon && <slide.icon className={`w-24 h-24 text-${tc}-400 drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]`} />}
                        </div>
                    </div>
                    
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 tracking-tighter mb-4 leading-[0.9]">
                        {slide.title}
                    </h2>
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-${tc}-900/30 border border-${tc}-500/30 text-${tc}-300 text-xs font-bold tracking-[0.2em] uppercase`}>
                        {slide.subtitle}
                    </div>

                    <div className="absolute bottom-16 left-0 right-0 animate-bounce text-white/20 flex flex-col items-center gap-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Swipe Up</p>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                )}

                {/* --- PHASE SLIDE --- */}
                {slide.type === "phase" && (
                  <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className={`inline-flex p-6 rounded-[2rem] bg-black/30 border border-${tc}-500/20 text-${tc}-400 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl`}>
                      {slide.icon && <slide.icon className="w-12 h-12" />}
                    </div>
                    <div>
                        <h3 className={`text-${tc}-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 opacity-80`}>
                        Current Phase
                        </h3>
                        <h2 className="text-4xl font-black text-white leading-none tracking-tight">
                        {slide.title}
                        </h2>
                    </div>
                    <div className={`h-1.5 w-12 bg-${tc}-500/50 mx-auto rounded-full`} />
                    <p className="text-white/50 text-xl font-light leading-relaxed px-4">
                      {slide.subtitle}
                    </p>
                  </div>
                )}

                {/* --- ACTION LIST --- */}
                {slide.type === "action-list" && (
                  <div className="flex flex-col h-full justify-center">
                    <div className="flex items-center gap-4 mb-6 pl-2">
                        <div className={`p-3 rounded-2xl bg-${tc}-500/10 border border-${tc}-500/20 shadow-lg`}>
                            {slide.icon && <slide.icon className={`w-6 h-6 text-${tc}-400`} />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{slide.title}</h3>
                            <div className="flex gap-2 items-center mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {slide.content?.map((item, i) => (
                            <StepRow key={i} index={i} text={item} themeColor={tc} />
                        ))}
                    </div>
                  </div>
                )}

                {/* --- ALERT --- */}
                {slide.type === "alert" && (
                  <div className="relative overflow-hidden bg-[#1a0505] border border-red-500/30 p-8 rounded-[2.5rem] text-center space-y-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-in zoom-in duration-300">
                      <div className="relative inline-flex p-5 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl text-white shadow-xl mb-2 rotate-3">
                          <AlertTriangle className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Tactical Warning</h3>
                        <p className="text-red-100 text-2xl font-bold leading-relaxed">
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
               <p className="text-white/30 font-medium uppercase tracking-widest text-sm">Sequence Complete</p>
               <button 
                  onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-10 py-4 rounded-2xl bg-${tc}-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(0,0,0,0.3)] active:scale-95 transition-all hover:bg-${tc}-500`}
               >
                  Restart
               </button>
          </div>

        </div>
      </div>
    </>
  );
}

    