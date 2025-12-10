
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
    "Thirty years ago, Marseilles was sweltering in the sun.",
    "A blazing sun on a fierce August day was hardly a novelty in southern France, then or now. Everything in and around Marseilles seemed to be locked in a staring contest with the fervent sky. Newcomers found themselves unnerved by the glaring white houses, the stark white walls, and the blinding white streets. The parched roads and hills, stripped of greenery, all stared back. Only the vines, heavy with grapes, offered some relief; they seemed to wink, their leaves barely stirring in the hot, still air.",
    "There wasn't a breath of wind to disturb the foul water of the harbour, nor the beautiful sea beyond. A distinct line separated the black of the port from the blue of the ocean, a boundary the pure sea refused to cross. It lay just as placid as the wretched pool it would not touch. Boats without awnings were too hot to handle, ships blistered at their moorings, and the quay stones had been relentlessly hot for months. People from every corner of the globe—Russians, Spaniards, the English, the French—all sought refuge in any available shade, hiding from a sea too intensely blue to gaze upon and a sky of deep purple, dominated by the fiery jewel of the sun.",
    "The relentless glare made one's eyes ache. Far off, towards the Italian coast, a light mist rising from the sea offered a slight reprieve, but there was no other softness to be found. The dusty roads stared from the hillsides and the plains. The vines overhanging the wayside cottages and the monotonous rows of parched trees drooped under the oppressive gaze of earth and sky. It was the same for the horses, their drowsy bells jingling as they pulled long carts inland, and for their drivers, who were rarely awake. Even the labourers in the fields were exhausted. Everything that lived and grew was oppressed by the glare—except for the swift lizards on the stone walls and the cicadas, whose dry, hot chirp was like a constant rattle. The very dust was scorched brown, and the air itself seemed to pant.",
    "Blinds, shutters, and curtains were all drawn to keep out the light. If it found even a keyhole, it shot through like a white-hot arrow. The churches offered the best escape. To step out from their cool, dim interiors—filled with dozing, begging shadows—was to dive into a river of fire, swimming for your life towards the nearest sliver of shade. So, with people lounging wherever they could find cover, a low hum of chatter, and the occasional clang of church bells, Marseilles lay broiling in the sun. In Marseilles that day, there was a dreadful prison. In one of its cells, a place so grim that even the sun shied away, were two men. Besides them, the room held only a scarred bench fixed to the wall, a couple of mats, and a few empty wine bottles. That was all, aside from the rats and other unseen vermin.",
    "What little light the cell received came through a large, grated window, allowing guards to peer in from the gloomy staircase. A wide stone ledge, about three feet from the floor, ran along the bottom of the grating. On this ledge, one of the two men was lounging, half-sitting, half-lying, with his knees drawn up. He held onto the bars with one arm pushed through to the elbow, a casual posture for greater comfort.",
    "A prison's taint was on everything. The air, the light, the dampness, the men themselves—all had deteriorated from confinement. Just as the men were faded and gaunt, the iron was rusty, the stone was slimy, and the wood was rotten. Like a tomb, the prison knew nothing of the world's brightness and would have kept its polluted atmosphere even in the heart of a tropical paradise.",
    "The man on the ledge felt a chill. He pulled his heavy cloak tighter with an impatient shrug and growled, 'To hell with this brigand of a sun that never shines in here!'",
    "He was waiting to be fed, his head turned to see down the stairs, his expression like that of a caged animal. But his eyes, set too close together, lacked the noble quality of a lion's. They were sharp rather than bright—pointed weapons with little surface to betray them. They were flat, without depth or change; they simply glittered, opening and shutting. He had a handsome, hooked nose, though it sat a little too high, just as his eyes were a little too close. He was a large, tall man with thin lips, mostly hidden by a thick moustache, and a mass of shaggy, reddish-brown hair. The hand he used to grip the bars was unusually small and plump, though grimy from the prison.",
    "'Get up, you pig!' he growled. 'Don't sleep when I'm hungry.'",
    "'It's all the same, master,' said the other man, rising with a surprisingly cheerful submissiveness. 'I can wake when I please and sleep when I please. It makes no difference.'",
    "As he spoke, he rose, shook himself, and sat down on the floor opposite the grating, his back to the wall.",
    "'What's the hour?' grumbled the first man.",
    "'The midday bells will ring in forty minutes,' he replied, after a brief glance around the room as if to confirm.",
    "'You're a human clock. How do you always know?'",
    "'How can I say? I just do. I know the hour, and I know where I am. They brought me here at night, from a boat, but I know this place. See?' he said, kneeling and mapping out the area with a grimy finger. 'Marseilles harbour. Over there, Toulon, where the galleys are. Spain, further on. Algiers, across the water. To the left, Nice. Then round to Genoa, and... ah, no room for Naples,' he said, reaching the wall. 'But it's in there somewhere!'",
    "He remained on his knees, a lively look on his face for a man in prison. He was a sunburnt, quick, little man, though rather stocky. He had earrings, white teeth that lit up his tanned face, and a tangle of black hair around his neck. He wore a ragged red shirt, open at the chest, loose seaman's trousers, and a long red cap.",
    "'Just see if I don't return from Naples a changed man! Look, master. From here, we can see it all. The jailer's room is where my thumb is, and just here, at my wrist, is where they keep the national razor—the guillotine.'",
    "The other man spat on the floor and made a strange gurgling sound in his throat.",
    "A moment later, a lock gurgled below, and a door crashed open. Slow steps began to climb the stairs, mixed with the sweet chatter of a small child. The prison-keeper appeared, carrying his young daughter and a basket.",
    "'And how is the world treating you this morning, gentlemen? My little one is making the rounds with me, you see, having a look at her father's 'birds.' He looked sharply at the two prisoners himself, especially the smaller, more active one. 'I've brought your bread, Signor,' he said to the Italian, 'and if I might suggest you stop gambling...'",
    "'You don't make suggestions to the master, do you?' said the smaller man, smiling to show his teeth.",
    "'Ah, but the master wins,' the jailer replied, with a brief, disapproving glance at the other man, 'and you lose. That's a different matter entirely. You get stale bread and sour wine, while he gets fine sausage, jellied veal, and good wine. Now, look at the birds, my pretty!'",
    "'Poor birds,' the child whispered.",
    "Her small, fair face, filled with a divine compassion, was like an angel's in that grim place. John Baptist, the Italian, rose and moved towards her, as if drawn by her goodness. The other man, Rigaud, merely shot an impatient glance at the basket.",
    "'Wait,' said the jailer, placing his daughter on the ledge outside the bars. 'She shall feed the birds. This large loaf is for you, Signor John Baptist. And this sausage in a vine leaf is for Monsieur Rigaud. And this veal, and these three white loaves. And this cheese, and this wine, and this tobacco—all for Monsieur Rigaud. What a lucky bird!'",
    "The child passed the items through the bars into the man's soft, smooth hand, her own hand flinching back more than once. Her brow furrowed with a mixture of fear and anger. In contrast, she had confidently placed the coarse bread into the gnarled, grimy hands of John Baptist. And when he kissed her hand, she had gently stroked his face. Rigaud, indifferent to the distinction, simply nodded at the girl each time she gave him something, and then began to eat with a great appetite.",
    "When Rigaud laughed, a rather unsettling change came over his face. His moustache lifted, and his nose seemed to press down over it in a most cruel and sinister fashion.",
    "'There,' said the jailer, turning his basket upside down. 'The money I received has all been spent. Here is the accounting. And Monsieur Rigaud, as I mentioned yesterday, the President expects you this afternoon.'",
    "'To try me, is it?' said Rigaud, pausing with his knife in hand.",
    "'You have said it. To try you.'",
    "'No news for me?' asked John Baptist, who had begun to munch contentedly on his bread.",
    "The jailer just shrugged.",
    "'Good heavens, am I to lie here for the rest of my life, father?'",
    "'How should I know!' cried the jailer, turning on him with a flash of southern temper. 'How is it possible for me to know how long you will be here? What do I know, John Baptist Cavalletto? My goodness, there are some prisoners who are not in such a devilish hurry to be tried.' He seemed to glance pointedly at Rigaud, but Rigaud had already returned to his meal, though with a slightly less enthusiastic appetite.",
    "'Goodbye, my birds,' said the keeper, taking his pretty child in his arms and kissing her as he prompted the words.",
    "'Goodbye, my birds,' the child repeated.",
    "Her innocent face looked back so brightly over his shoulder as he walked away, singing a child's game to her, that John Baptist felt compelled to sing back a reply from the grate, his voice a little hoarse but in good time and tune. The song followed them down the stairs until the keeper had to stop for his daughter to hear the last of it. Then, the child's head disappeared, and then the keeper's, but her small voice carried on with the refrain until the heavy door clashed shut.",
    "Monsieur Rigaud, finding the listening John Baptist in his way, gave him a shove with his foot, reminding him to return to his own, darker spot. The little man sat down again on the pavement with the casual ease of one accustomed to it, and began to work his way through his hunks of bread as if it were a game.",
    "Perhaps he glanced at the Lyon sausage, or the jellied veal, but they didn't remain long enough to tempt him. Monsieur Rigaud dispatched them quickly, despite the impending trial, and then proceeded to lick his fingers clean, wiping them on the vine leaves. As he paused in his drinking to observe his fellow prisoner, his moustache went up, and his nose came down.",
    "'How's the bread?'",
    "'A little dry, but I have my old sauce here,' John Baptist replied, holding up his knife.",
    "'What sauce?'",
    "'I can cut my bread so—like a melon. Or like this—an omelette. Or like a fried fish. Or even,' he declared, demonstrating the cuts, 'like a Lyon sausage.'",
    "'Here,' said Rigaud, 'You may finish this.'",
    "It wasn't much of a gift, as there was very little wine left, but Signor Cavalletto jumped to his feet, accepted the bottle gratefully, and drained it with a smack of his lips.",
    "'Put the bottle away with the others,' Rigaud ordered.",
    "The little man obeyed and stood ready with a lighted match, for Rigaud was now rolling cigarettes from the tobacco and paper he'd been brought.",
    "'Here. You may have one.'",
    "'A thousand thanks, my master!' John Baptist replied in his native Italian, with the quick, appeasing manner of his countrymen.",
    "Monsieur Rigaud rose, lit a cigarette, and stretched out on the bench. Cavalletto sat on the floor, holding his ankles and smoking peacefully. Rigaud's eyes seemed drawn, uncomfortably, to the spot on the floor where the thumb had been in the hand-drawn map. He stared at it so intently that the Italian, surprised, followed his gaze back and forth more than once.",
    "'What an infernal hole this is,' Rigaud said, breaking a long silence. 'Look at the light. Is this daylight? It's the light of last week, of six months ago, of six years ago. So lifeless and dead.'",
    "It trickled down a square shaft that blocked a window on the staircase, through which the sky was never visible.",
    "'Cavalletto,' Rigaud said suddenly, his gaze shifting from the shaft, 'you know I am a gentleman, don't you?'",
    "'Of course, of course!'",
    "'How long have we been in here?' 'I, eleven weeks tomorrow. You, nine weeks and three days, as of five this afternoon.'",
    "'Have you ever seen me do any work here? Sweep the floor, spread the mats, anything?'",
    "'Never!'",
    "'And you never expected me to, did you?'",
    "John Baptist answered with a sharp, back-handed flick of his finger, the most emphatic 'no' in the Italian language.",
    "'No. You knew from the moment you saw me that I was a gentleman?'",
    "'ALTRO!' John Baptist exclaimed, a Genoese expression that, in this instance, meant 'Of course, I believe you!' with a certainty beyond words.",
    "'Haha! You are quite right. A gentleman I am, a gentleman I will live, and a gentleman I will die. That is my intention. It is my game, and by God, I play it wherever I go!'",
    "He sat up, triumphant. 'Here I am, thrown by fate into the company of a mere smuggler, and even he instinctively recognises my station. It is well done! I win, no matter how the game plays out.'",
    "Again, his moustache lifted as his nose dipped.",
    "'What time is it now?' he asked, a dry heat in his voice that was hard to reconcile with his apparent good humour.",
    "'A little past midday.'",
    "'Good. The President will have a gentleman before him shortly. Come, shall I tell you the charge? It must be now or never, for I shall not be returning. I will either walk free, or I will be sent for a shave. You know where they keep the razor.'",
    "Signor Cavalletto took the cigarette from his lips, showing a flicker of unease.",
    "'I am,' Monsieur Rigaud declared, standing to make his point, 'a cosmopolitan gentleman. I claim no particular country. My father was Swiss, my mother of French blood but English birth. I myself was born in Belgium. I am a citizen of the world.'",
    "His theatrical pose, one hand on his hip, suggested he was rehearsing for the President rather than simply speaking to his fellow inmate.",
    "'Let us say I am five-and-thirty. I have seen the world. I have lived here and there, always as a gentleman, and have been treated as such. If you try to imply I have lived by my wits, well, how do your lawyers and politicians live?'",
    "He gestured with his small, smooth hand, as if it were a witness to his good breeding.",
    "'Two years ago, I arrived in Marseilles. I admit I was poor; I had been ill. When your men of finance and politics fall ill without having saved, they too become poor. I stayed at the Cross of Gold, run by Monsieur Barronneau, a man in his sixties and in failing health. After four months, he had the misfortune to pass away—not an uncommon event, I assure you, and certainly not with any help from me.'",
    "John Baptist, having finished his cigarette, was offered another by Rigaud. He lit it from the embers of the first and watched his companion, who seemed entirely absorbed in his own story.",
    "'Monsieur Barronneau left a widow. She was twenty-two, and quite beautiful. I continued to live at the inn. I married Madame Barronneau. It is not for me to judge the suitability of such a match, but you may think me better suited to her than her first husband was.'",
    "He carried himself with an air of handsomeness and good breeding that he did not actually possess. It was pure swagger, but in this world, blustering assertion is often taken as proof.",
    "'Be that as it may, Madame Barronneau approved of me. That should not be held against me, I hope?'",
    "His eye fell on John Baptist, who vigorously shook his head and muttered 'altro, altro, altro' an infinite number of times.",
    "'Now, we come to the difficulties. I am a proud man. It is in my nature to govern, not to submit. Unfortunately, Madame Rigaud's property was settled upon herself—an insane act by her late husband. More unfortunately, she had relations. When a wife's family interferes with a husband who is a gentleman, and who must govern, peace is impossible. There was another problem: Madame Rigaud was a little common. I tried to improve her, but she and her relations resented my efforts. Quarrels began, and thanks to the slanders of her family, they became public. It has been said I was cruel to her. I may have been seen to slap her face—nothing more. I have a light hand; it was done almost playfully.'",
    "If the playfulness of his smile was any indication, Madame Rigaud's relations might have preferred he be serious.",
    "'I am sensitive and brave. It is simply my character. If her male relations had confronted me openly, I would have dealt with them. But they plotted in secret, which led to frequent clashes between my wife and me. Even when I required a small sum for my personal expenses, I could not get it without a fight—and I, a man whose nature is to rule! One night, we were walking amicably, like lovers, on a cliff overlooking the sea. An ill-fated star prompted her to mention her relations. I reasoned with her, remonstrating her for allowing their jealousy to poison her devotion to me. She retorted, I retorted. She grew heated, and I admit, I provoked her. Frankness is part of my character. Finally, in a fit of fury, she threw herself upon me, screaming, tearing at my clothes and hair, and then, she leaped from the cliff, dashing herself to death on the rocks below. This is the sequence of events that malice has twisted into an accusation of murder.'",
    "He stepped over to the scattered vine leaves and began wiping his hands with them, his back to the light.",
    "'Well,' he demanded after a moment, 'have you nothing to say to that?'",
    "'It's an ugly business,' returned the little man, who was now sharpening his knife on his shoe.",
    "'What do you mean?' John Baptist polished his knife in silence.",
    "'Do you mean to say I haven't represented the case correctly?'",
    "'Al-tro!' John Baptist exclaimed, the word now an apology, meaning, 'Oh, not at all!'",
    "'What then?'",
    "'Presidents and tribunals... they are so prejudiced.'",
    "'Well,' cried the other, flinging his cloak over his shoulder with an oath, 'let them do their worst!'",
    "'Truly, I think they will,' murmured John Baptist to himself, as he tucked his knife back into his sash.",
    "Nothing more was said, though they both began to pace, crossing paths at every turn. From time to time, Rigaud would stop, as if about to make a new point, but Cavalletto continued his shuffling, grotesque jog, his eyes fixed on the floor, and nothing came of it.",
    "Presently, the sound of a key in the lock made them both freeze. Voices and footsteps followed. The door crashed open, and the prison-keeper appeared, followed by a guard of soldiers.",
    "'Now, Monsieur Rigaud,' he said, pausing at the grate, 'have the goodness to come out.'",
    "'I am to depart in state, I see.' 'Well, unless you did,' the jailer returned, 'you might depart in so many pieces it would be difficult to put you back together. There is a crowd, Monsieur Rigaud, and it does not love you.'",
    "He passed out of sight and unlocked a low door in the corner of the cell. 'Now,' he said, opening it, 'come out.'",
    "There is no whiteness on this earth quite like the whiteness of Rigaud's face at that moment. Nor is there any expression quite like the one that shows a terrified heart beating in every line of a man's face. Both are often compared to death, but the difference is the vast gulf between a struggle that is over, and a fight at its most desperate peak.",
    "He lit another of his cigarettes from his companion's, clenched it between his teeth, and put on a soft, slouched hat. He threw the end of his cloak over his shoulder and walked out into the side gallery without another glance at Signor Cavalletto. The little man, for his part, was now completely absorbed in watching the open door, peering out at the freedom beyond like a caged animal, until the door was closed and locked once more.",
    "There was an officer in command of the soldiers, a stout, profoundly calm man, smoking a cigar with his drawn sword in hand. He briefly ordered Rigaud to be placed in the middle of the party, took his place at their head with supreme indifference, gave the word 'march!', and they all went jingling down the stairs. The door clashed, the key turned, and a fleeting ray of light and breath of fresh air seemed to pass through the jail, vanishing in a tiny wreath of smoke from the cigar.",
    "Still, like a captive animal, the prisoner now left alone leaped onto the ledge, desperate not to miss a single glimpse of this departure. As he stood clutching the grate, a great uproar reached his ears: yells, shrieks, and curses, all a raging swell of sound.",
    "Agitated, the prisoner jumped down, ran around the cell, and leaped up again, trying to shake the grate. He leaped down, ran, leaped up and listened, never resting until the noise faded into the distance. How many better men have worn their hearts out in such a way, with no one to know it, their suffering not even realised by their loved ones? Meanwhile, the great kings and governors who imprisoned them ride about in the sun, cheered on by the crowds, and die in their beds making fine speeches, embalmed by a servile history.",
    "At last, John Baptist, now free to choose his own sleeping spot, lay down on the bench, his face buried in his crossed arms, and fell into a deep slumber. In his submission, his good humour, his short-lived passions, and his easy contentment with hard bread and hard stones, he was a true son of the land that gave him birth.",
    "The great, wide stare of the day finally exhausted itself. The sun went down in a blaze of red, green, and gold. The stars appeared in the heavens, and the fireflies mimicked them in the air below, just as men feebly imitate the goodness of a higher order. The long, dusty roads and the endless plains were at rest, and so deep a hush fell upon the sea that it scarcely whispered of the time when it shall give up its dead."
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

    

    