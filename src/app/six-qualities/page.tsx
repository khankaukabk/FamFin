
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Landmark, BookOpen, Handshake, Heart, Megaphone, Quote, CheckCircle, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/ui/navigation";

type Hadith = {
  english: string;
  arabic: string;
  source: string;
};

type Quality = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

const qualities: Quality[] = [
  {
    icon: Quote,
    title: "Kalimah Tayyibah",
    subtitle: "Laa ilaaha illallah Muhammadur Rasulullah",
    content: (
      <div className="space-y-6">
        <div className="text-center">
            <p className="text-2xl font-bold arabic-text">لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">Part One: Laa ilaaha illallah</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">There is no one worthy of worship but Allah.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Faith literally means to accept someone’s words with certainty. In this context, faith is confirming everything reported by the Prophet Muhammad (PBUH) without needing to see it directly, simply because we trust in him. This Kalimah is a sacred pledge between a person and Allah. When a believer recites this solemnly, they admit before Allah that they are His sincere servant, they will obey His commandments, and they will avoid all forbidden things.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To remove the certainty of created things from our hearts and to place the certainty of Allah alone into our hearts. We must believe that Allah can do everything without the help of creation, and that creation can do nothing without the help of Allah.</p>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">Part Two: Muhammadur Rasulullah</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Muhammad (PBUH) is the true Messenger of Allah.</p>
          </div>
           <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To believe firmly that the only way to achieve success in this world and the Hereafter is by following the lifestyle (Sunnah) of the Prophet Muhammad (PBUH).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">After believing in the Oneness of Allah, we must accept that we cannot obey Him unless we follow Muhammad (PBUH) as our guide. Obedience to the Prophet is obedience to Allah. We must believe in the unseen things he told us about—angels, the grave, the Resurrection, Heaven, and Hell—and follow his method of living in all aspects of life, from marriage and business to eating and sleeping.</p>
          </div>
        </div>
         <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Faith</h4>
            <div className="space-y-4">
                <blockquote className="border-l-2 pl-4 italic">"Whoever says 'Laa ilaaha illallah' sincerely from his heart, the doors of the heavens are opened for it until it reaches the Throne, as long as he avoids major sins." (Tirmidhi)
                <p className="arabic-text text-right mt-1 text-lg">مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصًا فُتِحَتْ لَهُ أَبْوَابُ السَّمَاءِ حَتَّى تُفْضِيَ إِلَى الْعَرْشِ مَا اجْتُنِبَتِ الْكَبَائِرُ</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"Faith has more than seventy branches. The highest is saying 'Laa ilaaha illallah', and the lowest is removing a harmful object from the road." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"Renew your faith." They asked, "How do we renew our faith?" He said, "Say 'Laa ilaaha illallah' frequently." (Ahmad)
                <p className="arabic-text text-right mt-1 text-lg">جَدِّدُوا إِيمَانَكُمْ، قِيلَ: يَا رَسُولَ اللهِ، وَكَيْفَ نُجَدِّدُ إِيمَانَنَا؟ قَالَ: أَكْثِرُوا مِنْ قَوْلِ لَا إِلَهَ إِلَّا اللهُ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"Whoever dies knowing that there is no god but Allah will enter Paradise." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">مَنْ مَاتَ وَهُوَ يَعْلَمُ أَنَّهُ لاَ إِلَهَ إِلاَّ اللَّهُ دَخَلَ الْجَنَّةَ</p>
                </blockquote>
            </div>
         </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to the greatness of Allah and the lifestyle of the Prophet (PBUH).</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Sit in gatherings where the greatness of Allah constitutes the talk.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to grant us the reality of Iman (Faith).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Landmark,
    title: "Salah",
    subtitle: "With Khushu’ wal Khudu’",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground">To pray with mental concentration (Khushu) and physical humility (Khudu), following the method shown by the Prophet Muhammad (PBUH).</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground">To bring the obedience of Allah into our daily lives directly from our Salah. If our Salah is correct, our whole life will become correct.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">The Explanation:</p>
              <p className="text-muted-foreground">Salah is the first practical manifestation of our faith. It is the most distinguished of all good deeds. The Prophet (PBUH) said that the first thing we will be held accountable for on the Day of Judgement is Salah. If our Salah is perfect, we shall attain salvation. A great merit of Salah is that all the limbs of the worshipper are solely devoted to Allah. The Quran states that Salah prevents a person from shameful and forbidden acts.</p>
            </div>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-2">Key Points on Salah</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">In Congregation:</span> Prayer in congregation is twenty-seven times more rewarding than praying alone.</li>
                <li><span className="font-semibold text-foreground">Proper Posture:</span> One must perform Ruku (bowing) and Sajdah (prostration) properly, with calmness. The Prophet (PBUH) called rushing through these movements "the theft of prayer."</li>
                <li><span className="font-semibold text-foreground">On Time:</span> Delaying prayer until the last moment is a sign of hypocrisy.</li>
             </ul>
        </div>
        <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Salah</h4>
            <div className="space-y-4">
                 <blockquote className="border-l-2 pl-4 italic">"The first thing a servant will be held accountable for on the Day of Resurrection is his prayer. If it is good, he succeeds and prospers; if it is bad, he fails and loses." (Tirmidhi)
                <p className="arabic-text text-right mt-1 text-lg">إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلاَتُهُ فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"The coolness of my eyes lies in Salah." (Nasa’i)
                <p className="arabic-text text-right mt-1 text-lg">وَجُعِلَتْ قُرَّةُ عَيْنِي فِي الصَّلاَةِ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"The difference between a man and disbelief is the abandonment of Salah." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلاَةِ</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"Allah does not look at the prayer of one who does not straighten his back between bowing and prostration." (Musnad Ahmad)
                <p className="arabic-text text-right mt-1 text-lg">لاَ يَنْظُرُ اللَّهُ إِلَى صَلاَةِ رَجُلٍ لاَ يُقِيمُ صُلْبَهُ بَيْنَ الرُّكُوعِ وَالسُّجُودِ</p>
                </blockquote>
            </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to the importance of Salah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Strive to improve both the outer form and the inner concentration of our prayers.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to grant us the reality of concentration and humility.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Ilm and Dhikr",
    subtitle: "Knowledge & Remembrance",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">Part One: Ilm (Knowledge)</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">To know what Allah wants from us at this specific moment and in this specific condition.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To carry out the commands of Allah within the boundaries of the Sharia (Islamic Law).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Knowledge is the guide. Only knowledge that brings a man closer to Allah is truly appreciated. We must distinguish between Ilm of Fadhail (Virtues) and Ilm of Masail (Jurisprudence).</p>
          </div>
           <Separator />
            <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Knowledge</h4>
                <div className="space-y-4">
                    <blockquote className="border-l-2 pl-4 italic">"Whoever follows a path to seek knowledge, Allah makes the path to Paradise easy for him." (Muslim)
                    <p className="arabic-text text-right mt-1 text-lg">مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</p>
                    </blockquote>
                    <blockquote className="border-l-2 pl-4 italic">"The best of you is he who learns the Quran and teaches it." (Bukhari)
                    <p className="arabic-text text-right mt-1 text-lg">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
                    </blockquote>
                    <blockquote className="border-l-2 pl-4 italic">"Whom Allah wills good for, He gives understanding of religion." (Bukhari)
                    <p className="arabic-text text-right mt-1 text-lg">مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ</p>
                    </blockquote>
                </div>
            </div>
          <Separator />
          <div>
            <h5 className="font-semibold text-foreground">How to Acquire It:</h5>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to seek knowledge.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Sit in gatherings of Ta’lim (teaching/learning). Ask scholars about legal rulings.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah for beneficial knowledge.</li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">Part Two: Dhikr (Remembrance)</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">To remember Allah in every state and situation.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To perform the commands of Allah while being conscious of His Majesty, believing that "Allah is watching me."</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Dhikr polishes the heart. The highest degree of Dhikr is to never forget Allah. The Prophet (PBUH) said the difference between one who remembers Allah and one who does not is like the difference between the living and the dead. We should keep our tongues busy with the remembrance of Allah, especially the morning and evening supplications (Adhkar).</p>
          </div>
           <Separator />
             <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Dhikr</h4>
                <div className="space-y-4">
                    <blockquote className="border-l-2 pl-4 italic">"The likeness of the one who remembers his Lord and the one who does not is like that of a living to a dead person." (Bukhari)
                    <p className="arabic-text text-right mt-1 text-lg">مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ</p>
                    </blockquote>
                     <blockquote className="border-l-2 pl-4 italic">"Keep your tongue moist with the remembrance of Allah." (Tirmidhi)
                    <p className="arabic-text text-right mt-1 text-lg">لاَ يَزَالُ لِسَانُكَ رَطْبًا مِنْ ذِكْرِ اللَّهِ</p>
                    </blockquote>
                     <blockquote className="border-l-2 pl-4 italic">"I am with My servant as long as he remembers Me and his lips move with My mention." (Ibn Majah)
                    <p className="arabic-text text-right mt-1 text-lg">أَنَا مَعَ عَبْدِي إِذَا ذَكَرَنِي وَتَحَرَّكَتْ بِي شَفَتَاهُ</p>
                    </blockquote>
                </div>
            </div>
          <Separator />
          <div>
            <h5 className="font-semibold text-foreground">How to Acquire It:</h5>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to the remembrance of Allah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Recite the Tasbihat (Subhanallah, Alhamdulillah, Laa ilaaha illallah, Allahu Akbar), Darood Sharif (Salutations on the Prophet), and Istighfar (Seeking forgiveness) regularly.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to give us a tongue that is always moist with His remembrance.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Handshake,
    title: "Ikram-ul-Muslim",
    subtitle: "Honouring a Muslim",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">To treat every Muslim with honour and respect.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To fulfill the rights of fellow Muslims without demanding our own rights from them.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">We must realise that every Muslim possesses the light of Faith in their heart, and for that reason alone, they are worthy of respect. The Prophet (PBUH) said: "He is not one of us who does not respect our elders, does not show mercy to our youngsters, and is not respectful to our Scholars."</p>
          </div>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-2">A True Believer...</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Likes for others what he likes for himself.</li>
                <li>Is the first to greet others (Salam).</li>
                <li>Forgives those who offend him.</li>
                <li>Avoids backbiting.</li>
                <li>Helps the poor and needy.</li>
                <li>Does not harm any Muslim with his tongue or hand.</li>
             </ul>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Honouring Muslims</h4>
             <div className="space-y-4">
                 <blockquote className="border-l-2 pl-4 italic">"None of you truly believes until he loves for his brother what he loves for himself." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"A Muslim is the brother of a Muslim. He does not wrong him, nor does he surrender him to the enemy." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">الْمُسْلِمُ أَخُو الْمُسْلِمِ لاَ يَظْلِمُهُ وَلاَ يُسْلِمُهُ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"Whoever covers the faults of a Muslim, Allah will cover his faults on the Day of Resurrection." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"Allah will always help a servant as long as he is helping his brother." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ</p>
                </blockquote>
            </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to respect the believers.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Respect the elders, have mercy on the young, honour the scholars, and be humble with your peers.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to grant us the excellent character of the Prophet (PBUH).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Heart,
    title: "Ikhlas-e-Niyyah",
    subtitle: "Sincerity of Intention",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">To clean one's intention and do everything solely for the pleasure of Allah.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To ensure our deeds are accepted by Allah.</p>
          </div>
           <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">This is also called the "Correction of Intention." The Prophet (PBUH) said: "The reward for your deeds depends entirely on your intention." If a deed is done for show (Riya), for worldly gain, or for fame, it holds no weight in the eyes of Allah. In fact, showing off is described as "Minor Shirk" (Polytheism). We must check our intention before the action, during the action, and after the action to ensure we are not seeking the praise of people. A companion asked, "What is Faith?" The Prophet (PBUH) replied, "Faith is Sincerity."</p>
          </div>
        </div>
        <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Sincerity</h4>
            <div className="space-y-4">
                 <blockquote className="border-l-2 pl-4 italic">"Actions are judged by intentions, and every man shall have what he intended." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"Verily, Allah does not look at your physical shapes and wealth, but He looks at your hearts and deeds." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"Allah accepts only those deeds which are done purely for His sake and to seek His pleasure." (Nasa’i)
                <p className="arabic-text text-right mt-1 text-lg">إِنَّ اللَّهَ لاَ يَقْبَلُ مِنَ الْعَمَلِ إِلاَّ مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ</p>
                </blockquote>
            </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to sincerity.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Constantly check your heart: "Why am I doing this?" If it is not for Allah, correct it immediately.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to save us from hypocrisy and showing off.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Megaphone,
    title: "Dawat and Tabligh",
    subtitle: "Inviting & Conveying",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">To spare time from our worldly engagements to travel in the path of Allah, inviting people towards Him.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To correct our own faith and deeds, and to help all of mankind get connected to Allah. To revive the effort of the Prophet (PBUH) in the entire world.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">The literal meaning of Tafrigh-i-Waqt is "to spare time." We must leave our homes, families, and businesses for a period to learn and practice the religion. Prophethood has ended, but the work of the Prophets—inviting people to goodness and forbidding evil—has been entrusted to this Ummah (community). The Prophet (PBUH) said: "Whoever spends his morning or evening in the way of Allah, his reward will be better than the whole world and whatever is in it." The Companions sacrificed everything for this work. They tolerated hunger and hardship so that the message of Islam could reach us. We too must walk in their footsteps to revive the religion in our lives and in society.</p>
          </div>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Da’wah</h4>
            <div className="space-y-4">
                 <blockquote className="border-l-2 pl-4 italic">"Whoever guides someone to goodness will have a reward like one who did it." (Muslim)
                <p className="arabic-text text-right mt-1 text-lg">مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ</p>
                </blockquote>
                <blockquote className="border-l-2 pl-4 italic">"To spend a morning or an evening in the way of Allah is better than the world and all it contains." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">لَغَدْوَةٌ فِي سَبِيلِ اللَّهِ أَوْ رَوْحَةٌ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"By Allah, if Allah guides one man through you, it is better for you than red camels (the most precious wealth)." (Bukhari)
                <p className="arabic-text text-right mt-1 text-lg">فَوَاللَّهِ لأَنْ يَهْدِيَ اللَّهُ بِكَ رَجُلاً وَاحِدًا خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"If the dust of the path of Allah touches a person, Allah forbids the Fire of Hell for him." (Tirmidhi)
                <p className="arabic-text text-right mt-1 text-lg">مَنِ اغْبَرَّتْ قَدَمَاهُ فِي سَبِيلِ اللَّهِ حَرَّمَهُ اللَّهُ عَلَى النَّارِ</p>
                </blockquote>
            </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to go in the path of Allah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Spare time! The suggested course is 4 months in a lifetime, 40 days every year, 3 days every month, and 2.5 hours daily for local efforts.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to accept us for His noble work.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const finalNote = {
    title: "Abandoning Vanity (Laghw)",
    description: "A necessary condition for all these qualities.",
    content: (
        <div className="space-y-6">
            <p className="text-muted-foreground">A Muslim should spend every moment of their life preparing for the Hereafter. We must avoid vain talk, destructive customs, and wasting time on things that bring no benefit in this world or the next. The Prophet (PBUH) said: <span className="font-semibold italic text-foreground">"The perfection of one’s Islam is to leave that which does not concern him."</span> (Tirmidhi). One should be cautious with their tongue, as the tongue causes more people to slip into the Fire than the feet. By avoiding useless activities, we preserve our energy for good deeds and the remembrance of Allah.</p>
            <Separator />
             <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Avoiding Vanity</h4>
                <div className="space-y-4">
                     <blockquote className="border-l-2 pl-4 italic">"Part of the perfection of a person’s Islam is his leaving that which is of no concern to him." (Tirmidhi)
                    <p className="arabic-text text-right mt-1 text-lg">مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ</p>
                    </blockquote>
                    <blockquote className="border-l-2 pl-4 italic">"A person may speak a word without thinking about its implications, but because of it, he will slip into Hellfire further than the distance between the east and west." (Bukhari)
                    <p className="arabic-text text-right mt-1 text-lg">إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مِنْ سَخَطِ اللَّهِ لاَ يُلْقِي لَهَا بَالاً يَهْوِي بِهَا فِي جَهَنَّمَ</p>
                    </blockquote>
                    <blockquote className="border-l-2 pl-4 italic">"He who believes in Allah and the Last Day, let him speak good or remain silent." (Bukhari)
                    <p className="arabic-text text-right mt-1 text-lg">مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
};


export default function SixQualitiesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        .arabic-text {
          font-family: 'Noto Naskh Arabic', serif;
        }
      `}</style>
      <Navigation title="The Six Qualities" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Star className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-2xl">The Six Qualities (Points) of Tabligh</CardTitle>
                        <CardDescription>
                            Allah (SWT) has placed the success and glory of human beings—both in this world and in the Hereafter—solely in the perfection of our religious deeds, just as they were brought by the Prophet Muhammad (ﷺ).
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">The Companions (Sahabah) of the Prophet Muhammad (PBUH) succeeded in implementing the perfection of Islam in their lives. This was because they possessed these Six Qualities. People today may not have the strength to practice religion perfectly. However, if we strive to acquire these qualities, Allah will make it easy for perfect Islam to enter our hearts and lives.</p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <quality.icon className="h-10 w-10 text-accent flex-shrink-0" />
                    <div>
                      <CardTitle className="font-headline text-xl">{quality.title}</CardTitle>
                      <CardDescription className="font-semibold">{quality.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-muted-foreground text-base leading-relaxed">{quality.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-accent/50 bg-accent/10">
              <CardHeader>
                <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">{finalNote.title}</CardTitle>
                        <CardDescription>{finalNote.description}</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                  {finalNote.content}
              </CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        A guide for personal and spiritual development.
      </footer>
    </div>
  );
}


    