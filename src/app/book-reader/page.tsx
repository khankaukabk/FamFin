
"use client";

import * as React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { BookOpen, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// You can replace this with your book's content, with each paragraph as an element in the array.
const bookContent = [
    "BOOK THE FIRST: POVERTY",
    "CHAPTER 1. Sun and Shadow",
    "Thirty years ago, on a specific day, Marseilles was absolutely baking in the sun.",
    "A scorching sun on a fierce August day wasn't any rarer in southern France back then than it is now. Everything in and around Marseilles stared up at the boiling sky, and the sky stared right back, until staring became a universal habit there. Visitors felt awkward getting stared down by the blinding white houses, the white walls, the white streets, the dry stretches of road, and the hills where all the greenery had been burnt away. The only things that weren't staring intensely were the vines, drooping under the weight of their grapes. Even they winked a little now and then, whenever the hot air barely moved their leaves.",
    "There wasn't a breath of wind to cause a ripple on the dirty water in the harbour, or on the beautiful sea outside it. You could see a clear line between the two colours, black and blue, showing exactly where the clean sea stopped; it refused to mix with the filthy harbour water. Boats without covers were too hot to touch; ships blistered where they were tied up; the stone quays hadn't cooled down, day or night, for months. People from all over—Hindus, Russians, Chinese, Spaniards, Portuguese, Englishmen, Frenchmen, Genoese, Neapolitans, Venetians, Greeks, Turks—everyone who had come to trade in Marseilles sought shade. They hid anywhere they could from a sea that was too blue to look at and a purple sky that looked like it held a massive, flaming jewel of fire.",
    "The glare everywhere made your eyes ache. Looking towards the distant Italian coast, there was a bit of relief thanks to some light mist rising from the sea, but that was it. Far away, the dusty roads stared from the hillsides and hollows. Far away, the dusty vines hanging over cottages and the rows of dry trees offered no shade, drooping under the glare of the earth and sky. The horses with their drowsy bells, pulling carts slowly inland, did the same; so did the drivers lying down in the carts, mostly asleep; so did the exhausted farm workers. Everything living or growing was crushed by the glare, except for the lizards darting over stone walls, and the cicadas, chirping their dry, hot sound like a rattle. Even the dust was scorched brown, and the air shimmered as if it were panting.",
    "Blinds, shutters, curtains, and awnings were all shut tight to keep out the glare. If you left even a tiny crack, the sun shot in like a white-hot arrow. The churches were the best escape. Coming out of the dark, cool pillars and arches—dotted with flickering candles and full of ugly old shadows praying, spitting, and begging—felt like diving into a river of fire and swimming for your life to the nearest bit of shade. So, with people lounging wherever there was shade, with hardly any talking or dogs barking, just the occasional clashing of church bells and drumming, Marseilles was broiling in the sun that day.",
    "In Marseilles at that time, there was a nasty prison. In one of its cells—a place so repulsive that even the sun seemed to blink and look away, leaving it to whatever reflected light could find its way in—were two men. Besides them, the room held a battered bench stuck to the wall, a draughts board roughly carved into it with a knife, a set of draughts made from old buttons and soup bones, a set of dominoes, two mats, and two or three wine bottles. That was it, apart from the rats and other hidden vermin, and the visible vermin: the two men.",
    "The cell got its light through a large iron grate, like a window, which allowed it to be inspected from the gloomy staircase outside. There was a broad stone ledge at the bottom of this grate, three or four feet off the ground. One of the men was lolling on this ledge, half-sitting and half-lying, with his knees up and his feet and shoulders pressed against the sides of the opening. The bars were wide enough for him to stick his arm through up to the elbow, so he held on casually to make himself comfortable.",
    "The smell of prison was on everything. The trapped air, the trapped light, the trapped damp, the trapped men—everything was ruined by the confinement. Just as the men looked faded and haggard, the iron was rusty, the stone was slimy, the wood was rotten, the air felt stale, and the light was dim. Like a well, a vault, or a tomb, the prison knew nothing of the brightness outside. It would have kept its polluted atmosphere even if you moved it to a tropical island.",
    "The man lying on the window ledge actually felt chilly. He pulled his big cloak tighter with an impatient shrug and growled, 'To hell with this Brigand of a Sun that never shines in here!'",
    "He was waiting to be fed, looking sideways through the bars to see down the stairs, looking a lot like a wild beast waiting for food. But his eyes, set too close together, weren't as noble as a lion's; they were sharp rather than bright—like pointed weapons with no depth. They glittered and snapped open and shut. A clockmaker could have made a better pair. He had a hook nose, which was handsome enough, but it was too high up between his eyes, just like his eyes were too close together. He was a big, tall man with thin lips (when you could see them under his thick moustache) and messy, dry hair of no specific colour, though it had streaks of red. The hand holding the grate—covered in ugly, freshly healed scratches—was unusually small and plump; it would have been white if not for the prison dirt.",
    "The other man was lying on the stone floor, covered by a rough brown coat.",
    "'Get up, pig!' growled the first man. 'Don't sleep when I'm hungry.'",
    "'It's all the same, master,' said the 'pig', submissively but cheerfully. 'I can wake when I want, I can sleep when I want. It makes no difference.'",
    "As he said this, he got up, shook himself, scratched, tied his brown coat loosely around his neck by the sleeves (he'd been using it as a blanket), and sat on the floor yawning, leaning his back against the wall opposite the grate.",
    "'Tell me the time,' grumbled the first man.",
    "'The midday bells will ring... in forty minutes.' He paused slightly, looking around the cell as if reading the information from the walls.",
    "'You're like a clock. How do you always know?'",
    "'How can I say? I always know the time and where I am. I was brought here at night, straight off a boat, but I know where I am. Look here! Marseilles harbour,' he said, drawing a map on the floor with a dark finger. 'Toulon (where the galleys are), Spain over there, Algiers over there. Moving left, Nice. Round the coast to Genoa. Genoa Mole and Harbour. Quarantine Ground. The City; terrace gardens full of bella donna flowers. Here, Porto Fino. Head out for Leghorn. Out again for Civita Vecchia, then away to—hey! There's no room for Naples,' he'd reached the wall by then, 'but it's all the same; it's in there!'",
    "He stayed on his knees, looking up at his cellmate with a lively expression for someone in prison. He was a sunburnt, quick, agile little man, though a bit stocky. He had earrings in his brown ears, white teeth that lit up his funny brown face, jet-black hair around his brown neck, and a ragged red shirt open at his chest. He wore loose sailor trousers, decent shoes, a long red cap, and a red sash around his waist with a knife tucked in it.",
    "'Just watch if I don't go back to Naples the same way I came! Look here, master! Civita Vecchia, Leghorn, Porto Fino, Genoa, the Coast, Off Nice (which is in there), Marseilles, you and me. The jailer's room and his keys are where my thumb is; and here at my wrist is where they keep the national razor—the guillotine.'",
    "The other man suddenly spat on the floor and made a gurgling noise in his throat.",
    "Immediately after, a lock below gurgled too, and a door banged shut. Slow footsteps started coming up the stairs; the sound of a sweet little voice mixed with the noise. The jailer appeared carrying his daughter, who was three or four years old, and a basket.",
    "'How's the world this morning, gentlemen? My little one is doing the rounds with me to peek at her father's birds. Go on then! Look at the birds, my pretty, look at the birds.'",
    "He looked sharply at the 'birds' himself as he held the child up to the grate, especially eyeing the little man, whose energy he seemed to mistrust. 'I've brought your bread, Signor John Baptist,' he said (they spoke in French, but the little man was Italian). 'And if I might recommend you stop gambling—'",
    "'You don't recommend the master stop!' said John Baptist, smiling and showing his teeth.",
    "'Oh! But the master wins,' the jailer replied, giving the other man a look that wasn't particularly friendly. 'And you lose. It's totally different. You get stale bread and sour drink out of it; he gets Lyons sausage, veal in jelly, white bread, Stracchino cheese, and good wine. Look at the birds, my pretty!'",
    "'Poor birds!' said the child.",
    "Her pretty little face, full of pure compassion as she peeked shyly through the bars, looked like an angel in that prison. John Baptist stood up and moved towards her, as if drawn to her. The other 'bird' stayed where he was, just glancing impatiently at the basket.",
    "'Wait!' said the jailer, putting his daughter on the outer ledge. 'She can feed the birds. This big loaf is for Signor John Baptist. We have to break it to fit it through the cage. There, a tame bird to kiss your little hand! This sausage in a vine leaf is for Monsieur Rigaud. Again—this veal in jelly is for Monsieur Rigaud. Again—these three white rolls are for Monsieur Rigaud. Again, this cheese—again, this wine—again, this tobacco—all for Monsieur Rigaud. Lucky bird!'",
    "The child pushed all these things through the bars into the soft, smooth hand with clear fear—pulling her own hand back more than once and looking at the man with a mix of fright and anger. However, she handed the lump of coarse bread to the dark, rough, knotted hands of John Baptist (who had fewer fingernails on all his fingers combined than Monsieur Rigaud had on one) with total confidence; and when he kissed her hand, she stroked his face affectionately. Monsieur Rigaud, not caring about this, kept the father happy by laughing and nodding at the girl whenever she gave him something. As soon as he had his food arranged on the ledge, he started eating with gusto.",
    "When Monsieur Rigaud laughed, his face changed in a way that was striking but not nice. His moustache went up under his nose, and his nose came down over his moustache, making him look sinister and cruel.",
    "'There!' said the jailer, tipping his basket upside down to empty the crumbs. 'I've spent all the money I was given; here's the receipt, job done. Monsieur Rigaud, as I expected yesterday, the President wants the pleasure of your company an hour after midday today.'",
    "'To try me, eh?' said Rigaud, pausing with his knife in hand and food in his mouth.",
    "'You said it. To put you on trial.'",
    "'No news for me?' asked John Baptist, who had started munching his bread contentedly.",
    "The jailer shrugged.",
    "'My Lady! Am I going to rot here all my life, father?'",
    "'What do I know!' cried the jailer, turning on him with southern intensity, waving his hands as if threatening to tear him apart. 'My friend, how can I possibly tell how long you'll be here? What do I know, John Baptist Cavalletto? For the life of me! There are prisoners here sometimes who aren't in such a devil of a rush to be tried.' He seemed to glance sideways at Monsieur Rigaud with this remark; but Rigaud had gone back to his meal, though perhaps eating a bit slower than before.",
    "'Goodbye, my birds!' said the jailer, picking up his pretty child and prompting her to say it with a kiss.",
    "'Goodbye, my birds!' the child repeated.",
    "Her innocent face looked back so brightly over his shoulder as he walked away, singing her a nursery rhyme:\n\n  'Who passes by this road so late?\n     Compagnon de la Majolaine!\n  Who passes by this road so late?\n     Always gay!'",
    "John Baptist felt honour-bound to reply through the grate, in time and tune, though his voice was a bit rough:\n\n  'Of all the king's knights 'tis the flower,\n     Compagnon de la Majolaine!\n  Of all the king's knights 'tis the flower,\n     Always gay!'",
    "This duet followed them down the steep stairs so far that the jailer had to stop to let his daughter hear the end of the song and repeat the chorus while they were still visible. Then they disappeared, but the little voice kept singing until the door slammed shut.",
    "Monsieur Rigaud, finding John Baptist standing in his way before the echoes died out (even echoes were weak in prison), nudged him with his foot to remind him to get back to his dark corner. The little man sat down again on the floor with the ease of someone used to sitting on pavements. He lined up three chunks of coarse bread and, starting on a fourth, began eating them as if clearing them away was a game.",
    "He might have glanced at the Lyons sausage or the veal in jelly, but they didn't last long enough to make his mouth water; Monsieur Rigaud finished them off quickly, despite the looming trial, and sucked his fingers clean, wiping them on the vine leaves. Then, pausing his drinking to look at his cellmate, his moustache went up and his nose came down.",
    "'How's the bread?'",
    "'A bit dry, but I've got my old sauce here,' replied John Baptist, holding up his knife.",
    "'What sauce?'",
    "'I can cut my bread like this—like a melon. Or like this—like an omelette. Or like this—like a fried fish. Or like this—like Lyons sausage,' said John Baptist, acting out the cuts on his bread and chewing soberly.",
    "'Here!' cried Monsieur Rigaud. 'Have a drink. You can finish this.'",
    "It wasn't a huge gift, as there was hardly any wine left; but Signor Cavalletto jumped up, took the bottle gratefully, tipped it up, and smacked his lips.",
    "'Put the bottle with the others,' said Rigaud.",
    "The little man obeyed and stood ready to give him a light; Rigaud was rolling a cigarette using little squares of paper that came with the tobacco.",
    "'Here! You can have one.'",
    "'A thousand thanks, master!' John Baptist said in Italian, with the quick, polite manner of his people.",
    "Monsieur Rigaud stood up, lit a cigarette, put the rest in his pocket, and stretched out on the bench. Cavalletto sat on the floor, holding his ankles, smoking peacefully. Monsieur Rigaud's eyes seemed uncomfortably drawn to the spot on the floor where John Baptist had put his thumb on the imaginary map earlier. He looked there so often that the Italian noticed and looked back and forth in surprise.",
    "'What a hellhole this is!' said Monsieur Rigaud, breaking the silence. 'Look at the daylight. Day? It looks like last week's light, or light from six months ago—six years ago. So weak and dead!'",
    "The light drifted down a square shaft that blocked a window on the stairs, so you could never see the sky—or anything else.",
    "'Cavalletto,' said Monsieur Rigaud, suddenly looking away from the shaft they were both staring at, 'you know I'm a gentleman, right?'",
    "'Definitely, definitely!'",
    "'How long have we been here?'",
    "'Me, eleven weeks at midnight tomorrow. You, nine weeks and three days at five this afternoon.'",
    "'Have I ever done anything here? Ever touched the broom, spread the mats, rolled them up, found the draughts pieces, collected the dominoes, or done any work at all?'",
    "'Never!'",
    "'Have you ever expected me to do any work?'",
    "John Baptist answered with that specific shake of the right forefinger that means a strong 'no' in Italian.",
    "'No! You knew from the moment you saw me that I was a gentleman?'",
    "'Altro!' replied John Baptist, closing his eyes and tossing his head. This word, which can mean yes, no, maybe, a joke, or a hundred other things depending on the tone, in this context meant a very strong 'I believe you!' or 'Too right!'",
    "'Haha! You're right! I am a gentleman! And I'll live like a gentleman and die like a gentleman! It's my plan to be a gentleman. That's my game. I'll play it out wherever I go!'",
    "He sat up, shouting triumphantly:\n\n'Here I am! Look at me! Thrown by destiny into a cell with a mere smuggler; locked up with a poor little illegal trader whose papers are wrong, and who the police grabbed for lending his boat to other people whose papers were wrong. And yet, he instinctively recognises my status, even in this dark place. Well done! By Heaven! I win, no matter how the game goes.'",
    "Again, his moustache went up and his nose came down.",
    "'What time is it now?' he asked, looking pale and sweaty in a way that didn't match his laughter.",
    "'Just past half-twelve.'",
    "'Good! The President will have a gentleman in front of him soon. Come on! Shall I tell you what I'm accused of? It's now or never, because I won't be coming back here. Either I walk free, or I go to get ready for a shave. You know where they keep the razor.'",
    "Signor Cavalletto took the cigarette out of his mouth and looked more worried than you'd expect.",
    "'I am a'—Monsieur Rigaud stood up to say it—'I am a cosmopolitan gentleman. I don't belong to any specific country. My father was Swiss. My mother was French by blood, English by birth. I was born in Belgium. I'm a citizen of the world.'",
    "His dramatic pose, with one hand on his hip inside his cloak, and the way he spoke to the wall instead of his cellmate, suggested he was rehearsing for the President rather than just talking to little John Baptist Cavalletto.",
    "'Let's say I'm thirty-five. I've seen the world. I've lived here, there, everywhere—and always like a gentleman. I've been treated and respected as a gentleman everywhere. If you try to make me look bad by saying I've lived by my wits—well, how do your lawyers live? Your politicians? Your schemers? Your stockbrokers?'",
    "He kept waving his small, smooth hand around, as if it was proof of his high status.",
    "'Two years ago I came to Marseilles. I admit I was poor; I'd been ill. When your lawyers, politicians, and stockbrokers get ill and haven't saved money, they get poor too. I stayed at the Cross of Gold hotel—run by Monsieur Henri Barronneau—who was sixty-five and failing in health. I'd lived there about four months when Monsieur Barronneau had the misfortune to die. Not exactly a rare misfortune, that. It happens often enough without my help.'",
    "John Baptist had smoked his cigarette down to his fingertips, so Monsieur Rigaud generously threw him another one. He lit the second one from the ash of the first and kept smoking, looking sideways at Rigaud, who was too focused on his own story to notice.",
    "'Monsieur Barronneau left a widow. She was twenty-two. She had a reputation for being beautiful, and (which is often a different thing) actually was beautiful. I stayed at the Cross of Gold. I married Madame Barronneau. It's not for me to say if there was a big difference in class. Here I stand, covered in prison filth; but you might think I was a better match for her than her first husband.'",
    "He had a certain air of being handsome—which he wasn't; and a certain air of being well-bred—which he wasn't. It was just swagger and attitude; but in this world, confident bluffing often passes for proof.",
    "'Anyway, Madame Barronneau approved of me. That shouldn't work against me, I hope?'",
    "His eye fell on John Baptist, who quickly shook his head 'no' and whispered altro, altro, altro a bunch of times.",
    "'Now came the problems. I am proud. I'm not saying pride is good, but I am proud. It's also in my nature to be in charge. I can't submit; I have to lead. Unfortunately, Madame Rigaud's property was legally hers alone. That was her late husband's insane idea. Even more unfortunately, she had relatives. When a wife's relatives get involved against a husband who is a gentleman, proud, and needs to be in charge, there's no peace. There was another issue. Madame Rigaud was, unfortunately, a bit common. I tried to improve her manners and class; she (backed up by her relatives) resented my efforts. We started arguing; and thanks to her relatives gossiping, the neighbours found out. People said I treated Madame Rigaud cruelly. I might have been seen slapping her face—nothing more. I have a light hand; if I corrected her like that, I did it almost playfully.'",
    "If Monsieur Rigaud's smile at this point was 'playful,' Madame Rigaud's relatives would probably have preferred him to be serious.",
    "'I am sensitive and brave. I don't say it's a merit, but it's who I am. If her male relatives had confronted me openly, I'd have dealt with them. They knew that, so they plotted in secret; consequently, Madame Rigaud and I clashed often. Even when I wanted a little money for personal expenses, I couldn't get it without a fight—and I'm a man who needs to be in charge! One night, Madame Rigaud and I were walking amicably—I might say like lovers—on a cliff overlooking the sea. Bad luck made Madame Rigaud bring up her relatives. I reasoned with her, pointing out her lack of loyalty in letting them turn her against her husband. She argued back; I argued back; she got angry; I got angry and provoked her. I admit it. Frankness is part of my character. Finally, in a fit of rage that I will always regret, Madame Rigaud threw herself at me screaming (no doubt people heard it far away), tore my clothes, tore my hair, scratched my hands, stomped on the ground, and finally leaped over the edge, dashing herself to death on the rocks below. That is the series of events that malice has twisted into me trying to force her to give up her rights, and when she refused, struggling with her—and assassinating her!'",
    "He stepped over to the ledge, picked up some vine leaves, and wiped his hands on them, with his back to the light.",
    "'Well,' he demanded after a silence, 'have you got nothing to say to that?'",
    "'It's ugly,' replied the little man, who had stood up and was sharpening his knife on his shoe, leaning against the wall.",
    "'What do you mean?' John Baptist polished his knife silently.",
    "'Do you mean I haven't told the story correctly?'",
    "'Al-tro!' said John Baptist. The word was an apology now, meaning 'Oh, definitely not!'",
    "'What then?'",
    "'Presidents and courts are so prejudiced.'",
    "'Well,' cried the other, nervously throwing his cloak over his shoulder with a curse, 'let them do their worst!'",
    "'I think they probably will,' murmured John Baptist to himself, tucking his knife into his sash.",
    "They didn't say anything else, though they both started pacing back and forth, crossing paths every time. Monsieur Rigaud sometimes stopped, as if to explain things differently or complain angrily; but since Signor Cavalletto kept jogging along looking at the floor, nothing came of it.",
    "Eventually, the sound of a key in the lock stopped them both. Voices followed, then footsteps. The door banged, and the jailer came slowly up the stairs, followed by a guard of soldiers.",
    "'Now, Monsieur Rigaud,' he said, pausing at the grate with his keys, 'please come out.'",
    "'I'm leaving in style, I see?'",
    "'Well, unless you did,' replied the jailer, 'you might leave in so many pieces we couldn't put you back together. There's a mob, Monsieur Rigaud, and they don't love you.'",
    "He unlocked a low door in the corner of the cell. 'Now,' he said, opening it, 'come out.'",
    "Monsieur Rigaud's face went a shade of white that doesn't exist anywhere else in nature. And no human expression looks quite like the one where you can see a terrified heart beating in every line of the face. People compare it to death, but the difference is huge—it's the difference between a struggle that's over and a fight at its most desperate moment.",
    "He lit another paper cigar from his companion's, clenched it in his teeth, pulled his hat down, threw his cloak over his shoulder, and walked out onto the gallery without looking at Signor Cavalletto again. As for the little man, he was focused entirely on getting near the door to look out. Just like a beast eyeing the freedom outside its cage, he spent those few seconds peering out until the door shut.",
    "There was an officer in charge of the soldiers; a stout, capable, very calm man with a drawn sword, smoking a cigar. He briefly ordered Monsieur Rigaud into the middle of the group, stood at the front with total indifference, said 'March!', and they all went clattering down the stairs. The door slammed—the key turned—and a ray of unusual light and fresh air seemed to vanish from the jail like a wisp of cigar smoke.",
    "Left alone, the prisoner jumped onto the ledge like a monkey or a small bear to catch the last glimpse of them leaving. As he held the grate, a roar of noise reached him: yells, screams, curses, threats—all mixed together into a raging storm of sound.",
    "Anxious to know more, he leaped down, ran around the cell, leaped back up, shook the grate, leaped down again, and didn't rest until the noise faded into the distance. How many better prisoners have worn themselves out like this, with no one thinking of them? Even great kings and governors who locked them up, riding happily in the sun with people cheering them on.",
    "At last, John Baptist lay down on the bench with his face on his crossed arms and fell asleep. In his obedience, his lightness, his good humour, his short-lived anger, his acceptance of hard bread and stone floors, and his ability to sleep anywhere, he was a true son of his country.",
    "The staring sun finally finished for the day; it went down in a red, green, and golden glory. The stars came out, and fireflies mimicked them in the air below. The long dusty roads and empty plains went quiet—and the sea was so hushed it barely whispered of the time when it would give up its dead."
];

export default function BookReaderPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y' });
    const [currentPage, setCurrentPage] = React.useState(0);
    const [progressPercentage, setProgressPercentage] = React.useState(0);
    const totalPages = bookContent.length;

    React.useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            const newPage = emblaApi.selectedScrollSnap();
            setCurrentPage(newPage);
            setProgressPercentage(((newPage + 1) / totalPages) * 100);
        };

        emblaApi.on('select', onSelect);
        onSelect(); // Set initial state

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, totalPages]);
    
    return (
        <div className="fixed inset-0 bg-background flex flex-col font-serif">
            <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <div className="text-sm">
                        <p className="font-bold text-foreground">A Tale of Two Cities</p>
                        <p className="text-muted-foreground">Page {currentPage + 1} of {totalPages}</p>
                    </div>
                </div>
                 <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Reader</span>
                </Button>
            </header>
            
            <div className="flex-1 overflow-hidden" ref={emblaRef}>
                <div className="h-full">
                    {bookContent.map((paragraph, index) => (
                        <div key={index} className="h-full flex-shrink-0 flex items-center justify-center p-6 pt-24 pb-20">
                            <p className="text-xl/relaxed sm:text-2xl/relaxed max-w-prose whitespace-pre-wrap">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-background/80 backdrop-blur-sm">
                 <Progress value={progressPercentage} className="w-full h-1" />
            </footer>
        </div>
    );
}

    

    

    
