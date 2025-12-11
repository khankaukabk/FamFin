
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Drum, Axe, Wheat, Coins, University, Swords, Shield, Rabbit, CircleDollarSign, Brick, Home, Users, TowerControl, Horse, Building2, UserPlus, Fence, Mountain, Tent, UserCog, BookUser, Castle, LandPlot } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StepCard = ({ icon, title, description, children }: { icon: React.ElementType, title: string, description: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full border border-primary/20">
                    <icon className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle className="font-headline text-xl">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="pl-12">
            {children}
        </CardContent>
    </Card>
);

const StepList = ({ children }: { children: React.ReactNode }) => (
    <ul className="space-y-3 list-disc list-outside ml-4 text-muted-foreground">
        {children}
    </ul>
);

const StepListItem = ({ children }: { children: React.ReactNode }) => (
    <li><span className="text-foreground">{children}</span></li>
);

export default function Aoe4BuildOrderPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="AoE IV Build Orders" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Age of Empires IV Build Orders</CardTitle>
                    <CardDescription className="text-base">A collection of competitive build orders for various civilizations.</CardDescription>
                </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="w-full" defaultValue="sengoku-daimyo">
                <AccordionItem value="sengoku-daimyo">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">Sengoku Daimyo (Japanese)</h3>
                            <p className="text-sm text-muted-foreground">Fast Matsuri Eco into Koka Township & Yari Cavalry Pressure</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={Drum} title="I. Game Start & Dark Age Economy" description="Establish a strong economic foundation with a focus on the Matsuri Festival.">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Axe className="h-5 w-5"/>Immediate Start</h4>
                                        <StepList>
                                            <StepListItem>Send 5 starting Villagers to <span className="font-semibold">Wood</span>.</StepListItem>
                                            <StepListItem>Send 1 starting Villager to build a <span className="font-semibold">House</span>.</StepListItem>
                                            <StepListItem>CRITICAL: Immediately research the <span className="font-semibold text-primary">Tawara</span> upgrade from the House.</StepListItem>
                                        </StepList>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Coins className="h-5 w-5"/>Matsuri Market Setup</h4>
                                         <StepList>
                                            <StepListItem>As soon as Wood Villagers finish their first tree, shift-click them to <span className="font-semibold">Berries</span>.</StepListItem>
                                            <StepListItem>Next 2 Villagers go to <span className="font-semibold">Gold</span> and build the <span className="font-semibold text-primary">Matsuri Market</span>.</StepListItem>
                                             <StepListItem>Market Action: Immediately produce a <span className="font-semibold text-primary">Yatai</span>.</StepListItem>
                                             <StepListItem>Yatai Placement: Position Yatai between <span className="font-semibold">Food</span> and <span className="font-semibold">Sheep</span>.</StepListItem>
                                        </StepList>
                                        <Alert className="mt-4 border-amber-500/50 text-amber-700 [&>svg]:text-amber-700">
                                            <AlertTitle className="font-semibold">Mechanic Note</AlertTitle>
                                            <AlertDescription>
                                                The Yatai must deploy traders ASAP to boost the Matsuri Market. Toggle/untoggle the Yatai target to ensure the correct Matsuri receives the boost (aim for farming/food boost).
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                    <Separator />
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Rabbit className="h-5 w-5"/>Prepare for Age Up</h4>
                                         <StepList>
                                            <StepListItem>All new Villagers go to TC Sheep until you have 5 Villagers ready for the landmark.</StepListItem>
                                        </StepList>
                                    </div>
                                </div>
                            </StepCard>

                             <StepCard icon={University} title="II. Age Up (Feudal Transition)" description="Transition to the Feudal Age by building the Koka Township landmark.">
                                <StepList>
                                    <StepListItem>Landmark: Build the <span className="font-semibold text-primary">Koka Township</span> with the 5 Food Villagers.</StepListItem>
                                    <StepListItem>Shift-queue these 5 builders to <span className="font-semibold">Wood</span> after the landmark is complete.</StepListItem>
                                    <StepListItem>Build a Lumber Camp first, then a House near the woodline.</StepListItem>
                                    <StepListItem>Immediately research the <span className="font-semibold text-primary">Food Upgrade</span> from the House upon reaching Feudal Age.</StepListItem>
                                </StepList>
                            </StepCard>

                            <StepCard icon={Brick} title="III. Feudal Age Production" description="Build up your military infrastructure while balancing your economy.">
                                 <StepList>
                                    <StepListItem>Send all new Villagers to <span className="font-semibold">Wood</span> until you bank 400 Wood.</StepListItem>
                                    <StepListItem>Once at 400 Wood, take 3 Villagers to build <span className="font-semibold">2 Stables</span> and <span className="font-semibold">1 Blacksmith</span> (on Stone).</StepListItem>
                                    <StepListItem>Reallocate Villagers from Wood back to TC Sheep until you have <span className="font-semibold">15 on Food</span>.</StepListItem>
                                    <StepListItem>Send new Villagers to <span className="font-semibold">Wood</span> and get Lumber Camp upgrades.</StepListItem>
                                 </StepList>
                            </StepCard>

                            <StepCard icon={Swords} title="IV. Unit Production & Scaling" description="Apply pressure with Yari Cavalry while expanding your economy.">
                                 <StepList>
                                    <StepListItem>Start constant production of <span className="font-semibold text-primary">Yari Cavalry</span> from the Stables.</StepListItem>
                                    <StepListItem>As TC Sheep run low, move your 15 Food Villagers to <span className="font-semibold">Berries</span> or <span className="font-semibold">Boar</span>.</StepListItem>
                                    <StepListItem>Once you have enough wood with 10 Villagers, build a <span className="font-semibold text-primary">Second Town Center (2nd TC)</span>.</StepListItem>
                                     <StepListItem>Send new Villagers to <span className="font-semibold">Gold</span> until you have 5 on Gold.</StepListItem>
                                    <StepListItem>Maintain constant Villager and Yari Cavalry production until ready for Castle Age.</StepListItem>
                                 </StepList>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="french-knights">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">French</h3>
                            <p className="text-sm text-muted-foreground">Fast Feudal Knight Pressure with Professional Scouts</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={Users} title="I. Opening Allocation" description="Set your initial villager distribution for a fast Feudal.">
                                <StepList>
                                    <StepListItem>Send 7 starting Villagers to <span className="font-semibold">Food</span> (Sheep).</StepListItem>
                                    <StepListItem>Send 3 starting Villagers to <span className="font-semibold">Gold</span>.</StepListItem>
                                </StepList>
                            </StepCard>

                            <StepCard icon={TowerControl} title="II. Age-Up Transition" description="Advance to the Feudal age while preparing your economy for military production.">
                                <StepList>
                                    <StepListItem>Use 5 Villagers from Food to build the <span className="font-semibold text-primary">School of Cavalry</span> landmark.</StepListItem>
                                    <StepListItem>Once the landmark is complete, move these 5 builders to <span className="font-semibold">Wood</span>.</StepListItem>
                                </StepList>
                            </StepCard>

                             <StepCard icon={Horse} title="III. Feudal Age Pressure" description="Begin knight production and establish map control.">
                                 <StepList>
                                    <StepListItem>Balance your economy to have <span className="font-semibold">12 Villagers on Food</span> and <span className="font-semibold">10 on Gold</span>.</StepListItem>
                                    <StepListItem>This balance will support constant <span className="font-semibold text-primary">Knight</span> production and essential upgrades.</StepListItem>
                                    <StepListItem>Build a <span className="font-semibold">Mill</span> to research <span className="font-semibold text-primary">Professional Scouts</span> for harassing the enemy and gathering food from hunts.</StepListItem>
                                    <StepListItem>Build a <span className="font-semibold">Stable</span> to supplement knight production from your landmark.</StepListItem>
                                    <StepListItem>Gradually transition your Food economy to <span className="font-semibold">Farms</span> as you deplete sheep and hunts.</StepListItem>
                                 </StepList>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="china-bbq">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">China</h3>
                            <p className="text-sm text-muted-foreground">Imperial Official Start into Barbican (BBQ) Rush</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={UserPlus} title="I. Initial Setup" description="Focus on wood to get your Imperial Official out quickly.">
                                <StepList>
                                    <StepListItem>Send all starting Villagers to <span className="font-semibold">Wood</span>.</StepListItem>
                                    <StepListItem>Immediately produce an <span className="font-semibold text-primary">Imperial Official</span> from the Town Center.</StepListItem>
                                    <StepListItem>Build a <span className="font-semibold">Mill</span> on your starting sheep.</StepListItem>
                                    <StepListItem>The next new Villager builds a <span className="font-semibold">Village</span> (away from your intended landmark spot).</StepListItem>
                                    <StepListItem>That villager then moves to <span className="font-semibold">Wood</span>, for a total of 3 on Wood.</StepListItem>
                                </StepList>
                            </StepCard>
                            <StepCard icon={Coins} title="II. Economic Balancing" description="Prepare your resources for a fast age-up.">
                                <StepList>
                                    <StepListItem>Assign 3 Villagers to mine <span className="font-semibold">Gold</span>.</StepListItem>
                                    <StepListItem>Use one Villager near your gold mine to build the <span className="font-semibold text-primary">Barbican of the Sun</span> landmark.</StepListItem>
                                </StepList>
                            </StepCard>
                             <StepCard icon={Building2} title="III. Age Up & Feudal Transition" description="Shift your economy to prepare for your chosen Feudal strategy.">
                                 <StepList>
                                    <StepListItem>Move all but 6 of your Food Villagers to <span className="font-semibold">Wood</span>.</StepListItem>
                                    <StepListItem>The villagers who built the landmark should also be moved to <span className="font-semibold">Wood</span>.</StepListItem>
                                 </StepList>
                            </StepCard>
                             <StepCard icon={Fence} title="IV. Strategic Options" description="Choose your path: expand, rush, or boom.">
                                 <StepList>
                                     <StepListItem>
                                        <span className="font-semibold text-primary">Option 1: Professional Scouts</span><br/>
                                        Build a stable, research Pro Scouts, and use them with your Zhuge Nu to control the map and hunt deer.
                                     </StepListItem>
                                     <StepListItem>
                                        <span className="font-semibold text-primary">Option 2: Second Town Center</span><br/>
                                        Balance your economy with 8 on wood and 6 on food. Send all new villagers to stone. Place Officials on Wood and Stone for a fast boom.
                                     </StepListItem>
                                     <StepListItem>
                                        <span className="font-semibold text-primary">Option 3: Feudal All-in Rush</span><br/>
                                        Keep villagers on Food and Wood, produce units from Archery Ranges and Barracks to apply early pressure.
                                     </StepListItem>
                                 </StepList>
                                  <Alert className="mt-4 border-amber-500/50 text-amber-700 [&>svg]:text-amber-700">
                                    <AlertTitle className="font-semibold">Fast Castle Note</AlertTitle>
                                    <AlertDescription>
                                        For a Fast Castle, build a stable and get Professional Scouts to gather from deer. Move most wood villagers to food and aim for about 8 villagers on Gold.
                                    </AlertDescription>
                                </Alert>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="zhu-xi-legacy">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">Zhu Xi's Legacy</h3>
                            <p className="text-sm text-muted-foreground">Efficient early economy and production.</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={Users} title="I. Initial Setup" description="Optimize your villager distribution for a strong start.">
                                <StepList>
                                    <StepListItem>Send 8 Villagers to <span className="font-semibold">Food</span>.</StepListItem>
                                    <StepListItem>Send 4 Villagers to <span className="font-semibold">Gold</span>.</StepListItem>
                                </StepList>
                            </StepCard>
                            <StepCard icon={Mountain} title="II. Age Up" description="Age up with one villager from food.">
                                <StepList>
                                    <StepListItem>Use one villager from food to build the landmark.</StepListItem>
                                </StepList>
                            </StepCard>
                             <StepCard icon={UserCog} title="III. Feudal Economy" description="Rebalance your economy for growth and production.">
                                 <StepList>
                                    <StepListItem>Balance economy to <span className="font-semibold">5 on Food</span>, <span className="font-semibold">4 on Gold</span>, and the rest on <span className="font-semibold">Wood</span>.</StepListItem>
                                    <StepListItem>Assign <span className="font-semibold">6 Villagers</span> and an <span className="font-semibold text-primary">Imperial Official</span> to wood.</StepListItem>
                                    <StepListItem>Assign <span className="font-semibold">1 Villager</span> and an <span className="font-semibold text-primary">Imperial Official</span> for gold collection.</StepListItem>
                                    <StepListItem>Assign <span className="font-semibold">1 Villager</span> and another <span className="font-semibold text-primary">Imperial Official</span> for production buildings.</StepListItem>
                                    <StepListItem>Immediately research <span className="font-semibold">Lumber Camp</span> and <span className="font-semibold">Mill</span> upgrades.</StepListItem>
                                 </StepList>
                            </StepCard>
                             <StepCard icon={Swords} title="IV. Production and Pressure" description="Build up your military and keep applying pressure.">
                                 <StepList>
                                     <StepListItem>Construct <span className="font-semibold">Blacksmith</span> and production buildings.</StepListItem>
                                     <StepListItem><span className="font-bold text-primary">KEEP PUSHING!!</span></StepListItem>
                                 </StepList>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mongols">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">Mongols</h3>
                            <p className="text-sm text-muted-foreground">Aggressive early game with Ovoo and stables.</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={BookUser} title="I. Initial Setup" description="Focus on your Ovoo and wood collection.">
                                <StepList>
                                    <StepListItem>Place <span className="font-semibold text-primary">Ovoo</span> on a stone outcropping.</StepListItem>
                                    <StepListItem>Send all villagers to <span className="font-semibold">Wood</span> and build a <span className="font-semibold text-primary">Ger</span>.</StepListItem>
                                    <StepListItem>Gather enough wood to build a <span className="font-semibold">Stable</span> or <span className="font-semibold">Pasture</span>.</StepListItem>
                                </StepList>
                            </StepCard>
                            <StepCard icon={Coins} title="II. Economic Balancing" description="Prepare for age up while maintaining resource flow.">
                                <StepList>
                                    <StepListItem>Balance economy to <span className="font-semibold">8 on Food</span> and <span className="font-semibold">4 on Gold</span>.</StepListItem>
                                </StepList>
                            </StepCard>
                             <StepCard icon={TowerControl} title="III. Age Up" description="Transition to Feudal with a focus on wood.">
                                 <StepList>
                                    <StepListItem>Use <span className="font-semibold">5 Villagers</span> to build the landmark.</StepListItem>
                                    <StepListItem>Move the landmark builders to <span className="font-semibold">Wood</span> after completion.</StepListItem>
                                 </StepList>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="english">
                    <AccordionTrigger>
                        <div className="text-left">
                            <h3 className="font-headline text-xl">English</h3>
                            <p className="text-sm text-muted-foreground">Solid and defensive start with Longbowmen potential.</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                        <div className="space-y-6">
                            <StepCard icon={LandPlot} title="I. Dark Age Start" description="Establish a balanced early economy.">
                                <StepList>
                                    <StepListItem>Send 6 Villagers to <span className="font-semibold">Food</span>.</StepListItem>
                                    <StepListItem>Send 2 Villagers to <span className="font-semibold">Gold</span>.</StepListItem>
                                    <StepListItem>Send 1 Villager to <span className="font-semibold">Wood</span>.</StepListItem>
                                </StepList>
                            </StepCard>
                            <StepCard icon={Castle} title="II. Age Up" description="Age up with the Council Hall.">
                                <StepList>
                                    <StepListItem>Use 4 Villagers from food to build the landmark.</StepListItem>
                                    <StepListItem>Return them to food after completion.</StepListItem>
                                </StepList>
                            </StepCard>
                             <StepCard icon={Users} title="III. Feudal Economy" description="Balance your economy for military production.">
                                 <StepList>
                                    <StepListItem>Aim for <span className="font-semibold">11 Villagers on Wood</span>.</StepListItem>
                                    <StepListItem>Aim for <span className="font-semibold">11 Villagers on Food</span>.</StepListItem>
                                    <StepListItem>Aim for <span className="font-semibold">3 Villagers on Gold</span>.</StepListItem>
                                 </StepList>
                            </StepCard>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        A build order for competitive Age of Empires IV gameplay.
      </footer>
    </div>
  );
}
