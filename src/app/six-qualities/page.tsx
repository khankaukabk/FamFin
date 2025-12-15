
"use client";

import * as React from "react";
import { Landmark, BookOpen, Handshake, Heart, Megaphone, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/ui/navigation";

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
      <div className="space-y-8">
        <div className="text-center">
            <p className="arabic-text text-primary">لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ</p>
        </div>
        <div>
          <h4 className="font-headline text-lg text-primary mb-3">PART ONE: Laa ilaaha illallah</h4>
          <div className="space-y-4">
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground -mt-2">There is no one worthy of worship but Allah.</p>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground -mt-2">To take the trust we have in created things out of our hearts, and to put trust in Allah alone into our hearts. We must believe that Allah can do everything without the help of created things, and that created things can do nothing without the help of Allah.</p>
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-3">PART TWO: Muhammadur Rasulullah</h4>
          <div className="space-y-4">
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground -mt-2">Muhammad (PBUH) is the true Messenger of Allah.</p>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground -mt-2">To believe firmly that the only way to achieve success in this world and the Hereafter is by following the lifestyle (Sunnah) of the Prophet Muhammad (PBUH).</p>
          </div>
        </div>
         <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Faith</h4>
            <div className="space-y-6">
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"Whoever says 'Laa ilaaha illallah' sincerely from his heart, the doors of the heavens are opened for it until it reaches the Throne, as long as he avoids major sins." (Tirmidhi)</p>
                  <p className="arabic-text text-right text-primary/80">مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصًا فُتِحَتْ لَهُ أَبْوَابُ السَّمَاءِ حَتَّى تُفْضِيَ إِلَى الْعَرْشِ مَا اجْتُنِبَتِ الْكَبَائِرُ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"Faith has more than seventy branches. The highest is saying 'Laa ilaaha illallah', and the lowest is removing a harmful object from the road." (Muslim)</p>
                  <p className="arabic-text text-right text-primary/80">الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"Renew your faith." They asked, "How do we renew our faith?" He said, "Say 'Laa ilaaha illallah' frequently." (Ahmad)</p>
                  <p className="arabic-text text-right text-primary/80">جَدِّدُوا إِيمَانَكُمْ، قِيلَ: يَا رَسُولَ اللهِ، وَكَيْفَ نُجَدِّدُ إِيمَانَنَا؟ قَالَ: أَكْثِرُوا مِنْ قَوْلِ لَا إِلَهَ إِلَّا اللهُ</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"Whoever dies knowing that there is no god but Allah will enter Paradise." (Muslim)</p>
                  <p className="arabic-text text-right text-primary/80">مَنْ مَاتَ وَهُوَ يَعْلَمُ أَنَّهُ لاَ إِلَهَ إِلاَّ اللَّهُ دَخَلَ الْجَنَّةَ</p>
                </blockquote>
            </div>
         </div>
      </div>
    ),
  },
  {
    icon: Landmark,
    title: "2. THE SECOND QUALITY: SALAH (PRAYER)",
    subtitle: "Shalatul Khushu’ wal Khudu’",
    content: (
       <div className="space-y-8">
          <div className="space-y-4">
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground -mt-2">Praying with mental concentration (Khushu) and physical humility (Khudu), following the method shown by the Prophet Muhammad (PBUH).</p>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground -mt-2">To take the obedience we show in Salah and use it in our daily lives. If our prayer is right, our whole life will come right.</p>
              <p className="font-semibold text-foreground">Key Points on Salah:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Praying in a group (Jama'at) is twenty-seven times more rewarding than praying alone.</li>
                <li>We must perform Ruku (bowing) and Sajdah (prostration) properly, with calmness.</li>
                <li>Delaying prayer until the very last moment is a sign of hypocrisy.</li>
             </ul>
          </div>
        <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Salah</h4>
            <div className="space-y-6">
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"The first thing a servant will be held accountable for on the Day of Resurrection is his prayer. If it is good, he succeeds and prospers; if it is bad, he fails and loses." (Tirmidhi)</p>
                  <p className="arabic-text text-right text-primary/80">إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلاَتُهُ فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"The coolness of my eyes (my delight) has been placed in Salah." (Nasa’i)</p>
                  <p className="arabic-text text-right text-primary/80">وَجُعِلَتْ قُرَّةُ عَيْنِي فِي الصَّلاَةِ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"The difference between a man and disbelief is the abandonment of Salah." (Muslim)</p>
                  <p className="arabic-text text-right text-primary/80">بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلاَةِ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                  <p className="italic text-muted-foreground">"Allah does not look at the prayer of one who does not straighten his back between bowing and prostration." (Musnad Ahmad)</p>
                  <p className="arabic-text text-right text-primary/80">لاَ يَنْظُرُ اللَّهُ إِلَى صَلاَةِ رَجُلٍ لاَ يُقِيمُ صُلْبَهُ بَيْنَ الرُّكُوعِ وَالسُّجُودِ</p>
                </blockquote>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "3. THE THIRD QUALITY: ILM (KNOWLEDGE) AND DHIKR (REMEMBRANCE)",
    subtitle: "Knowledge & Remembrance of Allah",
    content: (
       <div className="space-y-8">
        <div>
          <h4 className="font-headline text-lg text-primary mb-3">PART ONE: ILM (Knowledge)</h4>
          <div className="space-y-4">
              <p className="font-semibold text-foreground">The Meaning:</p>
              <p className="text-muted-foreground -mt-2">Knowing what Allah wants from us at any given moment and in any situation.</p>
              <p className="font-semibold text-foreground">The Purpose:</p>
              <p className="text-muted-foreground -mt-2">To carry out Allah's commands properly according to Islamic Law (Sharia).</p>
          </div>
           <Separator className="my-6"/>
            <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Knowledge</h4>
                <div className="space-y-6">
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"Whoever follows a path to seek knowledge, Allah makes the path to Paradise easy for him." (Muslim)</p>
                      <p className="arabic-text text-right text-primary/80">مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</p>
                    </blockquote>
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"The best of you is he who learns the Quran and teaches it." (Bukhari)</p>
                      <p className="arabic-text text-right text-primary/80">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
                    </blockquote>
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"Whom Allah wills good for, He gives understanding of religion." (Bukhari)</p>
                      <p className="arabic-text text-right text-primary/80">مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ</p>
                    </blockquote>
                </div>
            </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-headline text-lg text-primary mb-3">PART TWO: DHIKR (Remembrance)</h4>
          <div className="space-y-4">
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground -mt-2">Remembering Allah in every state and situation.</p>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground -mt-2">To obey Allah's commands whilst being aware of His Greatness, believing that "Allah is watching me".</p>
          </div>
           <Separator className="my-6"/>
             <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Dhikr</h4>
                <div className="space-y-6">
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"The likeness of the one who remembers his Lord and the one who does not is like that of a living to a dead person." (Bukhari)</p>
                      <p className="arabic-text text-right text-primary/80">مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ</p>
                    </blockquote>
                     <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"Keep your tongue moist with the remembrance of Allah." (Tirmidhi)</p>
                      <p className="arabic-text text-right text-primary/80">لاَ يَزَالُ لِسَانُكَ رَطْبًا مِنْ ذِكْرِ اللَّهِ</p>
                    </blockquote>
                     <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                      <p className="italic text-muted-foreground">"I am with My servant as long as he remembers Me and his lips move with My mention." (Ibn Majah)</p>
                      <p className="arabic-text text-right text-primary/80">أَنَا مَعَ عَبْدِي إِذَا ذَكَرَنِي وَتَحَرَّكَتْ بِي شَفَتَاهُ</p>
                    </blockquote>
                </div>
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
       <div className="space-y-8">
        <div className="space-y-4">
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground -mt-2">Treating every Muslim with dignity and respect.</p>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground -mt-2">To fulfil the rights of fellow Muslims without demanding our own rights from them.</p>
            <p className="font-semibold text-foreground">A True Believer:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Wants for others what he wants for himself.</li>
                <li>Is the first to greet others (Salam).</li>
                <li>Forgives those who upset him.</li>
                <li>Avoids backbiting and helps the poor.</li>
                <li>Does not harm any Muslim with his tongue or hand.</li>
             </ul>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Honouring Muslims</h4>
             <div className="space-y-6">
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"None of you truly believes until he loves for his brother what he loves for himself." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"A Muslim is the brother of a Muslim. He does not wrong him, nor does he surrender him to the enemy." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">الْمُسْلِمُ أَخُو الْمُسْلِمِ لاَ يَظْلِمُهُ وَلاَ يُسْلِمُهُ</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Whoever covers the faults of a Muslim, Allah will cover his faults on the Day of Resurrection." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Allah will always help a servant as long as he is helping his brother." (Muslim)</p>
                   <p className="arabic-text text-right text-primary/80">وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ</p>
                </blockquote>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: Heart,
    title: "5. THE FIFTH QUALITY: TASH-HIH AN-NIYYAH",
    subtitle: "Sincerity of Intention",
    content: (
       <div className="space-y-8">
        <div className="space-y-4">
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground -mt-2">Cleaning one's intention and doing everything only for the pleasure of Allah.</p>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground -mt-2">To ensure our deeds are accepted by Allah.</p>
            <p className="text-muted-foreground">If a deed is done just to show off (Riya), for money, or for fame, it has no value in the eyes of Allah. In fact, showing off is described as "Minor Shirk" (Polytheism). We must check our intention before, during, and after the action.</p>
        </div>
        <Separator />
         <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Sincerity</h4>
            <div className="space-y-6">
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Actions are judged by intentions, and every man shall have what he intended." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Verily, Allah does not look at your physical shapes and wealth, but He looks at your hearts and deeds." (Muslim)</p>
                   <p className="arabic-text text-right text-primary/80">إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Allah accepts only those deeds which are done purely for His sake and to seek His pleasure." (Nasa’i)</p>
                   <p className="arabic-text text-right text-primary/80">إِنَّ اللَّهَ لاَ يَقْبَلُ مِنَ الْعَمَلِ إِلاَّ مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ</p>
                </blockquote>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: Megaphone,
    title: "6. THE SIXTH QUALITY: DA’WAH AND TABLIGH",
    subtitle: "Inviting and Conveying / Making Time",
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
            <p className="font-semibold text-foreground">The Meaning:</p>
            <p className="text-muted-foreground -mt-2">Taking time out from our daily lives to travel in the path of Allah, inviting people towards Him.</p>
            <p className="font-semibold text-foreground">The Purpose:</p>
            <p className="text-muted-foreground -mt-2">To fix our own faith and deeds, and to help all of mankind get connected to Allah. To bring the effort of the Prophet (PBUH) back to life in the whole world.</p>
        </div>
        <Separator />
        <div>
            <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Da’wah</h4>
            <div className="space-y-6">
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"Whoever guides someone to goodness will have a reward like one who did it." (Muslim)</p>
                   <p className="arabic-text text-right text-primary/80">مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ</p>
                </blockquote>
                <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"To spend a morning or an evening in the way of Allah is better than the world and all it contains." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">لَغَدْوَةٌ فِي سَبِيلِ اللَّهِ أَوْ رَوْحَةٌ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"By Allah, if Allah guides one man through you, it is better for you than red camels (the most precious wealth)." (Bukhari)</p>
                   <p className="arabic-text text-right text-primary/80">فَوَاللَّهِ لأَنْ يَهْدِيَ اللَّهُ بِكَ رَجُلاً وَاحِدًا خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ</p>
                </blockquote>
                 <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                   <p className="italic text-muted-foreground">"If the dust of the path of Allah touches a person, Allah forbids the Fire of Hell for him." (Tirmidhi)</p>
                   <p className="arabic-text text-right text-primary/80">مَنِ اغْبَرَّتْ قَدَمَاهُ فِي سَبِيلِ اللَّهِ حَرَّمَهُ اللَّهُ عَلَى النَّارِ</p>
                </blockquote>
            </div>
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
            <p className="text-muted-foreground">We should spend every moment of our lives preparing for the Hereafter. We must avoid vain talk, bad customs, and wasting time on things that bring no benefit in this world or the next. By avoiding useless activities, we save our energy for good deeds and the remembrance of Allah.</p>
            <Separator />
             <div>
                <h4 className="font-headline text-lg text-primary mb-4">Selected Hadiths on Avoiding Vanity</h4>
                <div className="space-y-6">
                     <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                       <p className="italic text-muted-foreground">"Part of the perfection of a person’s Islam is his leaving that which is of no concern to him." (Tirmidhi)</p>
                       <p className="arabic-text text-right text-primary/80">مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ</p>
                    </blockquote>
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                       <p className="italic text-muted-foreground">"A person may speak a word without thinking about its implications, but because of it, he will slip into Hellfire further than the distance between the east and west." (Bukhari)</p>
                       <p className="arabic-text text-right text-primary/80">إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مِنْ سَخَطِ اللَّهِ لاَ يُلْقِي لَهَا بَالاً يَهْوِي بِهَا فِي جَهَنَّمَ</p>
                    </blockquote>
                    <blockquote className="space-y-2 border-l-4 border-primary/20 bg-muted/50 p-4 rounded-r-lg">
                       <p className="italic text-muted-foreground">"He who believes in Allah and the Last Day, let him speak good or remain silent." (Bukhari)</p>
                       <p className="arabic-text text-right text-primary/80">مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
};

const QualityCard = ({ quality, index }: { quality: Quality; index: number }) => {
    const howToAcquire = [
      "Da’wah: Invite others to this quality.",
      "Practice: Strive to embody this quality in your daily life.",
      "Dua: Pray to Allah to grant you the reality of this quality.",
    ];

    if (quality.title.includes("KALIMAH")) {
        howToAcquire[0] = "Da’wah: Invite others to the greatness of Allah and the lifestyle of the Prophet (PBUH)."
        howToAcquire[1] = "Practice: Sit in gatherings where the greatness of Allah is the main topic."
        howToAcquire[2] = "Dua: Pray to Allah to give us the reality of Iman (Faith)."
    }
    if (quality.title.includes("SALAH")) {
        howToAcquire[0] = "Da’wah: Invite others to the importance of Salah."
        howToAcquire[1] = "Practice: Try to improve both the outer form and the inner concentration of our prayers."
        howToAcquire[2] = "Dua: Ask Allah to give us the reality of concentration and humility."
    }
     if (quality.title.includes("ILM")) {
        howToAcquire[0] = "Da’wah: Encourage others to seek knowledge and remember Allah."
        howToAcquire[1] = "Practice: Sit in gatherings of Ta’lim and recite Tasbihat, Darood, and Istighfar."
        howToAcquire[2] = "Dua: Pray to Allah for beneficial knowledge and a moist tongue with His remembrance."
    }
     if (quality.title.includes("IKRAMUL")) {
        howToAcquire[0] = "Da’wah: Encourage others to respect the believers."
        howToAcquire[1] = "Practice: Respect the elders, have mercy on the young, and honour the scholars."
        howToAcquire[2] = "Dua: Pray to Allah to grant us the excellent character of the Prophet (PBUH)."
    }
      if (quality.title.includes("TASH-HIH")) {
        howToAcquire[0] = "Da’wah: Invite others to sincerity."
        howToAcquire[1] = "Practice: Constantly check your heart: 'Why am I doing this?'"
        howToAcquire[2] = "Dua: Pray to Allah to save us from hypocrisy and showing off."
    }
    if (quality.title.includes("DA’WAH")) {
        howToAcquire[0] = "Da’wah: Encourage others to go in the path of Allah."
        howToAcquire[1] = "Practice: Spare time! 4 months in a lifetime, 40 days a year, 3 days a month, 2.5 hours daily."
        howToAcquire[2] = "Dua: Ask Allah to accept us for His noble work."
    }


    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                    <quality.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl leading-tight">{quality.title}</CardTitle>
                <CardDescription className="text-lg mt-1">{quality.subtitle}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-2">
            {quality.content}
            <Separator />
            <div>
              <h4 className="font-headline text-lg text-primary mb-4">How to Acquire this Quality</h4>
              <ul className="space-y-3">
                {howToAcquire.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
    );
}

export default function SixQualitiesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="The Six Qualities" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-3xl space-y-12">
          <Card className="bg-primary/5 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">The Six Qualities of Tabligh</CardTitle>
              <CardDescription className="max-w-2xl mx-auto pt-2">
                The foundational principles for perfecting our religious deeds and achieving success in this life and the Hereafter, as embodied by the Companions of the Prophet Muhammad (PBUH).
              </CardDescription>
            </CardHeader>
          </Card>
          
          <div className="space-y-12">
            {qualities.map((quality, index) => <QualityCard key={quality.title} quality={quality} index={index} />)}
          </div>

          <Card className="bg-muted/50 border-dashed shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">{finalNote.title}</CardTitle>
              <CardDescription className="max-w-2xl mx-auto pt-2">{finalNote.description}</CardDescription>
            </CardHeader>
            <CardContent>{finalNote.content}</CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        A summary for contemplation and practice.
      </footer>
    </div>
  );
}
