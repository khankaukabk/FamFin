
"use client";

import { useState, useMemo } from "react";
import { 
  Drum, Axe, Wheat, Coins, University, Swords, Shield, Rabbit, 
  Building, Users, TowerControl, Building2, UserPlus, Fence, 
  Mountain, UserCog, BookUser, Castle, LandPlot, AlertTriangle, 
  Info, ChevronDown 
} from "lucide-react";

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
  slides: SlideData[];
}

// --- 2. DATA: CONVERTED FROM YOUR TEXT ---
const BUILD_ORDERS: CivBuildOrder[] = [
  {
    id: "japanese",
    name: "Japanese (Sengoku Daimyo)",
    color: "text-red-400",
    slides: [
      { type: "cover", title: "Sengoku Daimyo", subtitle: "Fast Matsuri Eco into Koka Township Pressure", icon: Swords },
      
      // PHASE I
      { type: "phase", title: "I. Dark Age Economy", subtitle: "Establish a strong foundation", icon: Drum },
      { type: "action-list", title: "Immediate Start", icon: Axe, content: [
          "Send 5 Villagers to Wood.",
          "Send 1 Villager to build a House.",
          "CRITICAL: Research 'Tawara' upgrade immediately from the House."
      ]},
      { type: "action-list", title: "Matsuri Market Setup", icon: Coins, content: [
          "Shift-click Wood vills to Berries after 1st tree.",
          "Next 2 Vills to Gold & Build Matsuri Market.",
          "Market: Produce a Yatai immediately.",
          "Place Yatai between Food and Sheep."
      ]},
      { type: "alert", title: "Mechanic Note", content: ["Toggle the Yatai target to ensure the correct Matsuri receives the boost (aim for Farming/Food boost)."] },
      { type: "action-list", title: "Prepare for Age Up", icon: Rabbit, content: [
          "All new Villagers go to TC Sheep.",
          "Gather until you have 5 Villagers ready for landmark."
      ]},

      // PHASE II
      { type: "phase", title: "II. Feudal Transition", subtitle: "Koka Township Landmark", icon: University },
      { type: "action-list", title: "Landmark Build", icon: Building2, content: [
          "Build Koka Township with 5 Food Vills.",
          "Shift-queue builders to Wood after completion.",
          "Build Lumber Camp & House near woodline.",
          "Research Food Upgrade immediately upon Age Up."
      ]},

      // PHASE III
      { type: "phase", title: "III. Feudal Production", subtitle: "Military Infrastructure", icon: Building },
      { type: "action-list", title: "Balancing Eco", icon: Coins, content: [
          "New Vills to Wood until 400 Wood banked.",
          "Take 3 Vills to build 2 Stables & 1 Blacksmith.",
          "Move Wood vills back to Sheep until 15 on Food.",
          "Get Lumber Camp upgrades."
      ]},

      // PHASE IV
      { type: "phase", title: "IV. Unit Scaling", subtitle: "Apply Pressure", icon: Swords },
      { type: "action-list", title: "Attack & Expand", icon: Swords, content: [
          "Constant Yari Cavalry production.",
          "Move Food vills to Berries/Boar as sheep deplete.",
          "At 10 Wood Vills, build 2nd Town Center.",
          "New Vills to Gold (cap at 5).",
          "Maintain pressure."
      ]}
    ]
  },
  {
    id: "french",
    name: "French Knights",
    color: "text-blue-400",
    slides: [
      { type: "cover", title: "French", subtitle: "Fast Feudal Knight Pressure + Pro Scouts", icon: Shield },
      
      { type: "phase", title: "I. Opening", subtitle: "Initial Allocation", icon: Users },
      { type: "action-list", title: "The Start", icon: Users, content: [
          "7 Starting Vills to Food (Sheep).",
          "3 Starting Vills to Gold."
      ]},

      { type: "phase", title: "II. Age Up", subtitle: "School of Cavalry", icon: TowerControl },
      { type: "action-list", title: "Transition", icon: Building, content: [
          "Use 5 Food Vills to build School of Cavalry.",
          "Move builders to Wood after completion."
      ]},

      { type: "phase", title: "III. Feudal Pressure", subtitle: "Knights & Map Control", icon: Shield },
      { type: "action-list", title: "Eco Balance", icon: Coins, content: [
          "Target: 12 on Food, 10 on Gold.",
          "Supports constant Knight production + upgrades."
      ]},
      { type: "action-list", title: "Infrastructure", icon: Building2, content: [
          "Build Mill -> Research Professional Scouts.",
          "Build Stable to supplement Landmark production.",
          "Transition to Farms as sheep/hunts deplete."
      ]}
    ]
  },
  {
    id: "china",
    name: "China (BBQ Rush)",
    color: "text-yellow-500",
    slides: [
      { type: "cover", title: "China", subtitle: "IO Start into Barbican Rush", icon: Coins },
      
      { type: "phase", title: "I. Initial Setup", subtitle: "Imperial Official Rush", icon: UserPlus },
      { type: "action-list", title: "Opening Moves", icon: Axe, content: [
          "All starting Vills to Wood.",
          "Produce Imperial Official immediately from TC.",
          "Build Mill on starting sheep.",
          "Build a Village (House) with next villager.",
          "Move to 3 total on Wood."
      ]},

      { type: "phase", title: "II. Age Up", subtitle: "The Barbican", icon: Building2 },
      { type: "action-list", title: "Landmark", icon: Building, content: [
          "3 Vills to mine Gold.",
          "1 Villager builds Barbican of the Sun.",
          "After Age Up: Move all but 6 Food vills to Wood."
      ]},

      { type: "phase", title: "III. Strategy Choice", subtitle: "Choose your path", icon: Fence },
      { type: "action-list", title: "Option 1: Pro Scouts", icon: Rabbit, content: [
          "Build Stable.",
          "Research Pro Scouts.",
          "Use Zhuge Nu for map control.",
          "Steal deer hunts."
      ]},
      { type: "action-list", title: "Option 2: 2nd TC", icon: Home, content: [
          "Balance: 8 Wood / 6 Food.",
          "New vills to Stone.",
          "Supervise Wood/Stone with Official."
      ]},
      { type: "alert", title: "Fast Castle Note", content: ["For Fast Castle: Build stable, get Pro Scouts, move wood vills to food. Aim for 8 on Gold."] }
    ]
  },
  {
    id: "english",
    name: "English",
    color: "text-white",
    slides: [
      { type: "cover", title: "English", subtitle: "Defensive Longbow Start", icon: Castle },
      { type: "action-list", title: "Dark Age", icon: LandPlot, content: [
          "6 Vills to Food.",
          "2 Vills to Gold.",
          "1 Vill to Wood."
      ]},
      { type: "action-list", title: "Age Up", icon: Building, content: [
          "Use 4 Food Vills to build Council Hall.",
          "Return to Food after completion."
      ]},
      { type: "action-list", title: "Feudal Goal", icon: Users, content: [
          "11 on Wood.",
          "11 on Food.",
          "3 on Gold."
      ]}
    ]
  }
];


// --- 3. THE COMPONENT ---

export default function Aoe4ScrollReader() {
  const [selectedCivId, setSelectedCivId] = useState("japanese");
  const activeBuild = BUILD_ORDERS.find(b => b.id === selectedCivId) || BUILD_ORDERS[0];

  return (
    <div className="fixed inset-0 bg-neutral-950 text-neutral-100 font-sans overflow-hidden">
      
      {/* HEADER */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2">
            <Swords className="text-yellow-500 w-5 h-5" />
            <h1 className="font-bold text-yellow-500 tracking-tight text-sm uppercase">AoE IV Orders</h1>
        </div>
        
        <div className="relative">
            <select 
            value={selectedCivId}
            onChange={(e) => setSelectedCivId(e.target.value)}
            className="appearance-none bg-neutral-800 text-sm text-white py-2 pl-4 pr-8 rounded-lg border border-neutral-700 focus:outline-none focus:border-yellow-500 font-medium"
            >
            {BUILD_ORDERS.map((civ) => (
                <option key={civ.id} value={civ.id}>
                {civ.name}
                </option>
            ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
        </div>
      </div>

      {/* SCROLL FEED */}
      <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        
        {activeBuild.slides.map((slide, index) => (
          <div 
            key={`${selectedCivId}-${index}`} 
            className="snap-center h-full w-full flex flex-col items-center justify-center p-6 relative"
          >
            {/* Background Decoration */}
            <div className={`absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-br from-neutral-900 to-black`}></div>
            {slide.type === 'phase' && <div className={`absolute inset-0 opacity-10 bg-${activeBuild.color.split('-')[1]}-900`}></div>}

            <div className="max-w-md w-full relative z-10 space-y-6">
              
              {/* --- TYPE: COVER --- */}
              {slide.type === "cover" && (
                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className={`inline-flex p-6 rounded-full bg-neutral-900 border-2 border-neutral-800 ${activeBuild.color}`}>
                    {slide.icon && <slide.icon className="w-16 h-16" />}
                  </div>
                  <div>
                    <h2 className={`text-4xl font-black uppercase tracking-tighter ${activeBuild.color}`}>
                        {slide.title}
                    </h2>
                    <p className="text-neutral-400 mt-4 text-lg font-light leading-relaxed">
                        {slide.subtitle}
                    </p>
                  </div>
                  <div className="pt-10 animate-bounce text-neutral-600">
                    <p className="text-xs uppercase tracking-widest mb-2">Swipe Up to Start</p>
                    <ChevronDown className="mx-auto" />
                  </div>
                </div>
              )}

              {/* --- TYPE: PHASE HEADER --- */}
              {slide.type === "phase" && (
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-yellow-500 mb-4">
                    {slide.icon && <slide.icon className="w-10 h-10" />}
                  </div>
                  <h3 className="text-yellow-500 font-mono text-sm uppercase tracking-[0.2em] border-b border-yellow-500/20 pb-4 inline-block">
                    Current Phase
                  </h3>
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-neutral-400 italic">
                    {slide.subtitle}
                  </p>
                </div>
              )}

              {/* --- TYPE: ACTION LIST --- */}
              {slide.type === "action-list" && (
                <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl shadow-2xl backdrop-blur">
                  <div className="flex items-center gap-4 mb-6 border-b border-neutral-800 pb-4">
                     <div className={`p-2 rounded-lg bg-neutral-800 ${activeBuild.color}`}>
                        {slide.icon && <slide.icon className="w-6 h-6" />}
                     </div>
                     <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {slide.content?.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <span className={`flex-none mt-1 w-1.5 h-1.5 rounded-full ${activeBuild.color.replace('text', 'bg')}`} />
                            <span className="text-lg text-neutral-300 leading-snug">{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* --- TYPE: ALERT --- */}
              {slide.type === "alert" && (
                <div className="bg-red-950/30 border border-red-900/50 p-8 rounded-2xl text-center space-y-4">
                    <div className="inline-flex p-3 bg-red-900/20 rounded-full text-red-500 mb-2">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm">{slide.title}</h3>
                    <p className="text-red-200 text-xl font-medium leading-relaxed">
                        "{slide.content?.[0]}"
                    </p>
                </div>
              )}

            </div>
          </div>
        ))}

        {/* FOOTER SPACER */}
        <div className="snap-center h-[50vh] flex items-center justify-center text-neutral-600 text-sm">
             <div className="text-center">
                 <p>Build Order Complete</p>
                 <button 
                    onClick={() => document.querySelector('.overflow-y-scroll')?.scrollTo({top: 0, behavior: 'smooth'})}
                    className="mt-4 text-yellow-500 underline"
                 >
                    Restart
                 </button>
             </div>
        </div>

      </div>
    </div>
  );
}

    