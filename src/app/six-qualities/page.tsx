
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
    title: "1. THE FIRST QUALITY: KALIMAH TAYYIBAH",
    subtitle: "Laa ilaaha illallah Muhammadur Rasulullah",
    content: (
      <div className="space-y-6">
        <div className="text-center">
            <p className="text-2xl font-bold arabic-text">لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">PART ONE: Laa ilaaha illallah</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">There is no one worthy of worship but Allah.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Simply put, faith means accepting someone’s words with total certainty. Here, faith means accepting everything the Prophet Muhammad (PBUH) told us without needing to see it with our own eyes, just because we trust him. This Kalimah is a sacred promise between a person and Allah. When a believer says this sincerely, they are admitting to Allah that they are His true servant, that they will obey His commands, and that they will avoid everything He has forbidden.</p>
            <p className="font-semibold text-foreground mt-4">We must remember four things:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>To memorise the words correctly.</li>
                <li>To know the correct translation.</li>
                <li>To understand the meaning deeply.</li>
                <li>To fulfil the practical requirements of this pledge.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">The purpose is to take the trust we have in created things out of our hearts, and to put trust in Allah alone into our hearts. We must believe that Allah can do everything without the help of created things, and that created things can do nothing without the help of Allah.</p>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">PART TWO: Muhammadur Rasulullah</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Muhammad (PBUH) is the true Messenger of Allah.</p>
          </div>
           <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">The purpose is to believe firmly that the only way to achieve success in this world and the Hereafter is by following the lifestyle (Sunnah) of the Prophet Muhammad (PBUH).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">After believing in the Oneness of Allah, we must accept that we cannot truly obey Him unless we follow Muhammad (PBUH) as our guide. Obeying the Prophet is actually obeying Allah. We must believe in the unseen things he told us about—like angels, the grave, the Resurrection, Heaven, and Hell—and follow his way of living in everything, from marriage and business to eating and sleeping.</p>
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
              <li><span className="font-semibold text-foreground">Practice:</span> Sit in gatherings where the greatness of Allah is the main topic.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to give us the reality of Iman (Faith).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Landmark,
    title: "2. THE SECOND QUALITY: SALAH (PRAYER)",
    subtitle: "Shalatul Khushu’ wal Khudu’",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground">Praying with mental concentration (Khushu) and physical humility (Khudu), following the method shown by the Prophet Muhammad (PBUH).</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground">To take the obedience we show in Salah and use it in our daily lives. If our prayer is right, our whole life will come right.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">The Explanation:</p>
              <p className="text-muted-foreground">Salah is the first practical proof of our faith. It is the most special of all good deeds. The Prophet (PBUH) said that the first thing we will be asked about on the Day of Judgement is Salah. If our Salah is perfect, we will be successful. One great benefit of Salah is that every part of the body is totally devoted to Allah during the prayer. The Quran says that Salah stops a person from shameful and bad acts.</p>
            </div>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-2">Key Points on Salah</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Congregation:</span> Praying in a group (Jama'at) is twenty-seven times more rewarding than praying alone.</li>
                <li><span className="font-semibold text-foreground">Proper Posture:</span> We must perform Ruku (bowing) and Sajdah (prostration) properly, with calmness. The Prophet (PBUH) called rushing through these movements "the theft of prayer".</li>
                <li><span className="font-semibold text-foreground">On Time:</span> Delaying prayer until the very last moment is a sign of hypocrisy.</li>
             </ul>
        </div>
        <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Salah</h4>
            <div className="space-y-4">
                 <blockquote className="border-l-2 pl-4 italic">"The first thing a servant will be held accountable for on the Day of Resurrection is his prayer. If it is good, he succeeds and prospers; if it is bad, he fails and loses." (Tirmidhi)
                <p className="arabic-text text-right mt-1 text-lg">إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلاَتُهُ فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ</p>
                </blockquote>
                 <blockquote className="border-l-2 pl-4 italic">"The coolness of my eyes (my delight) has been placed in Salah." (Nasa’i)
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
              <li><span className="font-semibold text-foreground">Practice:</span> Try to improve both the outer form and the inner concentration of our prayers.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to give us the reality of concentration and humility.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "3. THE THIRD QUALITY: ILM (KNOWLEDGE) AND DHIKR (REMEMBRANCE)",
    subtitle: "Knowledge & Remembrance of Allah",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-headline text-lg text-primary">PART ONE: ILM (Knowledge)</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Knowing what Allah wants from us at any given moment and in any situation.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To carry out Allah's commands properly according to Islamic Law (Sharia).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Knowledge guides us. Only knowledge that brings a person closer to Allah is truly valued. We must understand two types:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4 mt-2">
                <li><span className="font-semibold text-foreground">Ilm of Fadhail (Virtues):</span> Knowing the rewards to encourage us to do good deeds.</li>
                <li><span className="font-semibold text-foreground">Ilm of Masail (Jurisprudence):</span> Knowing the rules of how to perform deeds (like Wudu, Salah, and business dealings).</li>
            </ul>
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
          <h4 className="font-headline text-lg text-primary">PART TWO: DHIKR (Remembrance)</h4>
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Remembering Allah in every state and situation.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To obey Allah's commands whilst being aware of His Greatness, believing that "Allah is watching me".</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Remembrance cleans the heart. The highest level of Dhikr is to never forget Allah. The Prophet (PBUH) said the difference between one who remembers Allah and one who does not is like the difference between the living and the dead. We should keep our tongues busy with the remembrance of Allah, especially the morning and evening prayers (Adhkar).</p>
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
    title: "4. THE FOURTH QUALITY: IKRAMUL MUSLIMIN",
    subtitle: "Honouring the Muslims",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Treating every Muslim with dignity and respect.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To fulfil the rights of fellow Muslims without demanding our own rights from them.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">We must realise that every Muslim has the light of Faith in their heart, and for that reason alone, they are worthy of respect. The Prophet (PBUH) said: "He is not one of us who does not respect our elders, does not show mercy to our youngsters, and is not respectful to our Scholars."</p>
          </div>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-2">A true believer...</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Wants for others what he wants for himself.</li>
                <li>Is the first to greet others (Salam).</li>
                <li>Forgives those who upset him.</li>
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
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to give us the excellent character of the Prophet (PBUH).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Heart,
    title: "5. THE FIFTH QUALITY: TASH-HIH AN-NIYYAH",
    subtitle: "Sincerity of Intention",
    content: (
       <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Cleaning one's intention and doing everything only for the pleasure of Allah.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To ensure our deeds are accepted by Allah.</p>
          </div>
           <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">This is also called the "Correction of Intention". The Prophet (PBUH) said: "The reward for your deeds depends entirely on your intention." If a deed is done just to show off (Riya), for money, or for fame, it has no value in the eyes of Allah. In fact, showing off is described as "Minor Shirk" (Polytheism). We must check our intention before the action, during the action, and after the action to make sure we are not looking for praise from people.</p>
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
    title: "6. THE SIXTH QUALITY: DA’WAH AND TABLIGH",
    subtitle: "Inviting and Conveying / Making Time",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground">Taking time out from our daily lives to travel in the path of Allah, inviting people towards Him.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground">To fix our own faith and deeds, and to help all of mankind get connected to Allah. To bring the effort of the Prophet (PBUH) back to life in the whole world.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">The Explanation:</p>
            <p className="text-muted-foreground">Tafrigh-i-Waqt literally means "sparing time". We must leave our homes, families, and businesses for a while to learn and practise the religion. Prophethood has ended, but the work of the Prophets—inviting people to goodness and forbidding evil—has been given to this Ummah (community). The Prophet (PBUH) said: "Whoever spends his morning or evening in the way of Allah, his reward will be better than the whole world and whatever is in it." The Companions sacrificed everything for this work. They faced hunger and hardship so that the message of Islam could reach us. We too must walk in their footsteps to revive the religion in our lives and in society.</p>
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
              <li><span className="font-semibold text-foreground">Practice:</span> Make time! The suggested course is 4 months in a lifetime, 40 days every year, 3 days every month, and 2.5 hours daily for local efforts.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to accept us for His noble work.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const finalNote = {
    title: "A FINAL NOTE: AVOIDING USELESS THINGS (LAGHW)",
    description: "A key condition for all these qualities is to stop doing useless things—useless talk and useless actions.",
    content: (
        <div className="space-y-6">
            <p className="text-muted-foreground">We should spend every moment of our lives preparing for the Hereafter. We must avoid vain talk, bad customs, and wasting time on things that bring no benefit in this world or the next. The Prophet (PBUH) said: "The perfection of one’s Islam is to leave that which does not concern him." (Tirmidhi). One should be careful with their tongue, as the tongue causes more people to slip into the Fire than the feet. By avoiding useless activities, we save our energy for good deeds and the remembrance of Allah.</p>
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