export type BookSegment = string | { 
    text: string; 
    type: "story" | "commentary"; 
    pronunciation?: string; 
};

export const books: Record<string, { title: string; content: BookSegment[] }> = {
    "security-plus": {
        title: "CompTIA Security+ Study Guide (British Edition)",
        content: [
            // ==========================================
            // DOMAIN 1: THREATS, ATTACKS & VULNERABILITIES
            // ==========================================
            "DOMAIN 1: THREATS & ATTACKS",

            // --- CHAPTER 1 (SUMMARY) ---
            "CHAPTER 1: SOCIAL ENGINEERING",
            { text: "Rewritten in Everyday Modern British English.", type: "commentary" },
            { text: "Social Engineering is hacking humans, not computers. It's easier to ask for a password than to crack it.", type: "story" },
            
            { text: "Phishing", type: "story", pronunciation: "FISH-ing" },
            { text: "Sending dodgy emails pretending to be the bank.", type: "commentary" },

            // --- CHAPTER 2 ---
            "CHAPTER 2: FUNDAMENTAL SECURITY CONCEPTS",
            { text: "Covers Domain 1.0, Objective 1.2. Grab a brew, this covers the bread and butter of keeping things secure.", type: "commentary" },

            "INTRODUCTION",
            { text: "Right then, Chapter 1 was about the tools; Chapter 2 is about the ideas. We're looking at the big concepts that stop your digital life going down the swanny.", type: "story" },
            
            "THE CIA TRIAD (THE HOLY TRINITY)",
            { text: "In the security world, everything revolves around three things. If you mess one of these up, you're in for a right pickle.", type: "story" },

            { text: "Confidentiality", type: "story", pronunciation: "Con-fi-den-she-al-it-ee" },
            { text: "Keeping your secrets secret. It's like whispering gossip to your best mate and making sure the town busybody didn't hear.", type: "commentary" },
            
            { text: "Integrity", type: "story", pronunciation: "in-TEG-rit-ee" },
            { text: "Making sure nobody has messed with your data. If you send an email saying 'Pay Dave £10', you don't want someone changing it to £10,000.", type: "commentary" },
            
            { text: "Availability", type: "story", pronunciation: "uh-vay-luh-BIL-it-ee" },
            { text: "Making sure the systems are actually working when you need them. No good having a secure website if it crashes.", type: "commentary" },

            "NON-REPUDIATION",
            { text: "Non-Repudiation", type: "story", pronunciation: "non-reh-pyoo-dee-AY-shun" },
            { text: "A fancy way of saying 'You can't deny you did it'. If you sign a secure email, you can't turn around later and say 'Wasn't me, gov'.", type: "commentary" },

            "AAA (THE BOUNCER PROTOCOLS)",
            { text: "Authentication", type: "story" },
            { text: "The bouncer asking, 'Who are you?' You show your ID.", type: "commentary" },
            
            { text: "Authorization", type: "story" },
            { text: "The bouncer checking the list. 'Are you allowed in the VIP area?'", type: "commentary" },
            
            { text: "Accounting", type: "story" },
            { text: "The bouncer writing down what time you came in and left.", type: "commentary" },

            { text: "RADIUS", type: "story", pronunciation: "Ray-dee-us" },
            { text: "The protocol we use to handle AAA stuff securely.", type: "commentary" },

            { text: "TACACS+", type: "story", pronunciation: "Tack-axe" },
            { text: "Another AAA protocol, mainly for network administrators.", type: "commentary" },

            "ZERO TRUST",
            { text: "Zero Trust", type: "story" },
            { text: "I don't care if you're the CEO or the cleaner. I'm checking your ID every single time. Never trust, always verify.", type: "commentary" },

            "PHYSICAL SECURITY",
            { text: "Bollards", type: "story", pronunciation: "BOL-ards" },
            { text: "Sturdy posts that stop someone driving a lorry through the front window.", type: "commentary" },

            { text: "Access Control Vestibule", type: "story" },
            { text: "Posh word for a mantrap. A small room with two doors; one locks before the other opens.", type: "commentary" },

            "DECEPTION TECHNOLOGY",
            { text: "Honeypot", type: "story", pronunciation: "Hun-ee-pot" },
            { text: "A fake server full of dummy data. You leave it open to lure hackers in so you can watch what they do.", type: "commentary" },

            { text: "Honeyfile", type: "story" },
            { text: "A file named 'Passwords.txt' that sets off an alarm if anyone opens it.", type: "commentary" },

            "CHAPTER 2 REVIEW QUESTIONS",
            { text: "1. Best resource to investigate attack methods used by a bad actor?", type: "story" },
            { text: "Answer: Honeypot (C). Set up to lure attackers.", type: "commentary" },
            { text: "2. System to track users' access using 802.1x?", type: "story" },
            { text: "Answer: RADIUS (D).", type: "commentary" },
            { text: "3. Which provides non-repudiation?", type: "story" },
            { text: "Answer: Asymmetric encryption (A).", type: "commentary" },
            { text: "4. Insider pinched $100,000. Best source of info?", type: "story" },
            { text: "Answer: Audit trail (C). The paper trail.", type: "commentary" },
            { text: "5. Tool that uses dummy data to track attackers?", type: "story" },
            { text: "Answer: Honeytoken (C).", type: "commentary" },
            { text: "6. Process describing difference between existing resources and future aspirations?", type: "story" },
            { text: "Answer: Gap analysis (D).", type: "commentary" },
            { text: "7. Uses a private key to prove email hasn't been altered?", type: "story" },
            { text: "Answer: Digital signature (A).", type: "commentary" },
            { text: "8. Tailoring permissions based on evolving risk?", type: "story" },
            { text: "Answer: Adaptive identity management (C).", type: "commentary" },
            { text: "9. Sensors that detect frequency changes?", type: "story" },
            { text: "Answer: Microwave sensors (A).", type: "commentary" },
            { text: "10. Log file ensuring someone is responsible for another?", type: "story" },
            { text: "Answer: Visitors log (D).", type: "commentary" },

            // --- CHAPTER 3 ---
            "CHAPTER 3: CHANGE MANAGEMENT (THE FUN POLICE)",
            { text: "Covers Exam Objective 1.3. Why we can't just change settings willy-nilly.", type: "commentary" },

            "INTRODUCTION",
            { text: "Change is inevitable, like rain on a Bank Holiday. But if you update servers without a plan, it goes pear-shaped.", type: "story" },

            "THE PROCESS",
            { text: "CAB (Change Advisory Board)", type: "story", pronunciation: "Cab" },
            { text: "A group of serious people (The Fun Police) who decide if your idea is brilliant or rubbish.", type: "commentary" },

            { text: "Impact Analysis", type: "story" },
            { text: "Asking 'What happens if we press this button?'", type: "commentary" },

            { text: "Backout Plan", type: "story" },
            { text: "The 'Undo' button. If the update destroys the database, how do we go back?", type: "commentary" },

            { text: "Maintenance Window", type: "story" },
            { text: "Usually 3 AM on a Sunday. If you break it then, nobody notices immediately.", type: "commentary" },

            "TECHNICAL IMPLICATIONS",
            { text: "Allow List (Whitelist)", type: "story" },
            { text: "Only these specific apps are allowed. Everyone else is barred.", type: "commentary" },

            { text: "Dependencies", type: "story", pronunciation: "di-PEN-den-seez" },
            { text: "Knowing that if you turn off Server A, Server B will also stop working. It's a domino effect.", type: "commentary" },

            "DOCUMENTATION",
            { text: "Network Diagrams", type: "story" },
            { text: "Maps of where the cables go. Keep them updated or you'll be lost.", type: "commentary" },

            "CHAPTER 3 REVIEW QUESTIONS",
            { text: "1. Component essential for ensuring operations aren't adversely affected?", type: "story" },
            { text: "Answer: Approval process (C).", type: "commentary" },
            { text: "2. Best solution to stop employees installing games?", type: "story" },
            { text: "Answer: Allow list (B).", type: "commentary" },
            { text: "3. Practice reflecting actual network infrastructure?", type: "story" },
            { text: "Answer: Updating diagrams (B).", type: "commentary" },
            { text: "4. Component outlining steps if change fails?", type: "story" },
            { text: "Answer: Backout plan (B).", type: "commentary" },
            { text: "5. Interconnection of services?", type: "story" },
            { text: "Answer: Dependencies (C).", type: "commentary" },
            { text: "6. Primary reason for maintenance window?", type: "story" },
            { text: "Answer: Ensure updates don't disrupt users (D).", type: "commentary" },
            { text: "7. Closing and reopening application to refresh resources?", type: "story" },
            { text: "Answer: Application restart (B).", type: "commentary" },
            { text: "8. Purpose of reviewing test results?", type: "story" },
            { text: "Answer: Identify defects (D).", type: "commentary" },
            { text: "9. Process assessing potential consequences?", type: "story" },
            { text: "Answer: Impact analysis (A).", type: "commentary" },
            { text: "10. Consideration before executing service restart?", type: "story" },
            { text: "Answer: Impact on interconnected services (D).", type: "commentary" },

            // --- CHAPTER 4 ---
            "CHAPTER 4: CRYPTOGRAPHY (SECRET CODES)",
            { text: "Covers Exam Objective 1.4. Turning English into gobbledygook.", type: "commentary" },

            "PKI (PUBLIC KEY INFRASTRUCTURE)",
            { text: "Public Key", type: "story" },
            { text: "Like your public address. People use it to encrypt a message to send to you.", type: "commentary" },

            { text: "Private Key", type: "story" },
            { text: "You keep this secret. Never share it. Used to decrypt messages.", type: "commentary" },

            { text: "Key Escrow", type: "story", pronunciation: "Key Es-crow" },
            { text: "Giving a copy of your key to the boss just in case you get hit by a bus.", type: "commentary" },

            "ENCRYPTION TYPES",
            { text: "Symmetric Encryption", type: "story" },
            { text: "Using the same key to lock and unlock. Like a house key. Fast.", type: "commentary" },

            { text: "Asymmetric Encryption", type: "story" },
            { text: "Using a pair of keys (Public/Private). Like a postbox.", type: "commentary" },

            "HASHING",
            { text: "Hashing", type: "story" },
            { text: "One-way scrambling. You can't turn an omelette back into an egg. Used to check integrity.", type: "commentary" },

            { text: "Salting", type: "story" },
            { text: "Adding random data to a password before hashing it. Stops Rainbow Table attacks.", type: "commentary" },

            "OBFUSCATION",
            { text: "Obfuscation", type: "story", pronunciation: "Ob-fus-kay-shun" },
            { text: "Making things look confusing so hackers give up.", type: "commentary" },

            { text: "Steganography", type: "story", pronunciation: "Steg-ah-nog-rah-fee" },
            { text: "Hiding secret data inside an innocent picture. To the spy, it's a blueprint.", type: "commentary" },

            { text: "Tokenization", type: "story", pronunciation: "Toh-ken-eye-zay-shun" },
            { text: "Swapping real data for a useless token.", type: "commentary" },

            "BLOCKCHAIN",
            { text: "Blockchain", type: "story" },
            { text: "A digital ledger. Once you write something, you can't rub it out.", type: "commentary" },

            "CERTIFICATES",
            { text: "CA (Certificate Authority)", type: "story", pronunciation: "See-Ay" },
            { text: "The company that issues the ID card. Like the Passport Office.", type: "commentary" },

            { text: "CRL (Revocation List)", type: "story", pronunciation: "C-R-L" },
            { text: "A list of 'bad' certificates that have been cancelled.", type: "commentary" },

            { text: "OCSP", type: "story", pronunciation: "O-C-S-P" },
            { text: "A quicker way to check if a certificate is valid in real-time.", type: "commentary" },

            "CHAPTER 4 REVIEW QUESTIONS",
            { text: "1. Primary purpose of a private key in PKI?", type: "story" },
            { text: "Answer: Decryption and digital signatures (D).", type: "commentary" },
            { text: "2. Encryption using single key for volume data?", type: "story" },
            { text: "Answer: Symmetric encryption (C).", type: "commentary" },
            { text: "3. Transforming data into unique tokens?", type: "story" },
            { text: "Answer: Tokenization (C).", type: "commentary" },
            { text: "4. Method using intricate math for irreversible transformation?", type: "story" },
            { text: "Answer: Algorithm encryption (D).", type: "commentary" },
            { text: "5. Catalogs containing invalidated certificates?", type: "story" },
            { text: "Answer: CRLs (D).", type: "commentary" },
            { text: "6. Hardware for keys & Disk encryption?", type: "story" },
            { text: "Answer: TPM and FDE (A & E).", type: "commentary" },
            { text: "7. What does key exchange involve?", type: "story" },
            { text: "Answer: Securely transmitting keys (B).", type: "commentary" },
            { text: "8. Certificate lacking third-party validation?", type: "story" },
            { text: "Answer: Self-signed (D).", type: "commentary" },
            { text: "9. Decentralized digital ledger?", type: "story" },
            { text: "Answer: Blockchain (C).", type: "commentary" },
            { text: "10. Deliberately obscuring code?", type: "story" },
            { text: "Answer: Obfuscation (A).", type: "commentary" },

            // --- CHAPTER 5 ---
            "CHAPTER 5: THREAT ACTORS (THE BAD GUYS)",
            { text: "Covers Domain 2.0, Objective 2.1. Know your enemy.", type: "commentary" },

            "THE LINE-UP",
            { text: "Nation State", type: "story" },
            { text: "Government-backed hackers. Unlimited budget. Playing the long game.", type: "commentary" },

            { text: "APT (Advanced Persistent Threat)", type: "story", pronunciation: "A-P-T" },
            { text: "The ninjas. They get in and stay there quietly for months.", type: "commentary" },

            { text: "Script Kiddies", type: "story" },
            { text: "The amateurs. 'All the gear, no idea'. They make a lot of noise.", type: "commentary" },

            { text: "Hacktivists", type: "story" },
            { text: "Keyboard warriors with a cause. They want to make a point or deface websites.", type: "commentary" },

            { text: "Insider Threat", type: "story" },
            { text: "The traitor within. Disgruntled Dave who got fired.", type: "commentary" },

            { text: "Organized Crime", type: "story" },
            { text: "The Mafia went digital. They are in it for the dosh.", type: "commentary" },

            { text: "Shadow IT", type: "story" },
            { text: "Staff using software the IT team doesn't know about. Not malicious, just annoying.", type: "commentary" },

            "MOTIVATIONS",
            { text: "Financial Gain", type: "story" },
            { text: "Pure greed. The most common reason.", type: "commentary" },

            { text: "Espionage", type: "story", pronunciation: "Es-pee-uh-nahzh" },
            { text: "Spying. Usually Nation States stealing secrets.", type: "commentary" },

            "CHAPTER 5 REVIEW QUESTIONS",
            { text: "1. Who steals trade secrets for a competitor?", type: "story" },
            { text: "Answer: Organized crime (D).", type: "commentary" },
            { text: "2. Threatening to expose data unless paid?", type: "story" },
            { text: "Answer: Blackmail (A).", type: "commentary" },
            { text: "3. Attribute defining reach and effectiveness?", type: "story" },
            { text: "Answer: Sophistication/capability (C).", type: "commentary" },
            { text: "4. Difference between Hacktivist and Insider?", type: "story" },
            { text: "Answer: Hacktivists promote causes; Insiders misuse access (D).", type: "commentary" },
            { text: "5. How do criminals make money from stolen data?", type: "story" },
            { text: "Answer: Data exfiltration (C).", type: "commentary" },
            { text: "6. Novice hacker disrupting site with online tools?", type: "story" },
            { text: "Answer: Unskilled attacker (B).", type: "commentary" },
            { text: "7. Employees using unauthorized cloud storage?", type: "story" },
            { text: "Answer: Shadow IT (A).", type: "commentary" },
            { text: "8. Who launches cyberattack during geopolitical conflict?", type: "story" },
            { text: "Answer: Nation-state (D).", type: "commentary" },
            { text: "9. Spying to gather intelligence?", type: "story" },
            { text: "Answer: Espionage (D).", type: "commentary" },
            { text: "10. Deleting records because they were fired?", type: "story" },
            { text: "Answer: Revenge (A).", type: "commentary" },

            // --- CHAPTER 6 ---
            "CHAPTER 6: THREAT VECTORS (HOW THEY GET IN)",
            { text: "Covers Exam Objective 2.2. The many ways to skin a cat.", type: "commentary" },

            "MESSAGE-BASED ATTACKS",
            { text: "Phishing", type: "story", pronunciation: "Fish-ing" },
            { text: "Sending dodgy emails pretending to be the bank. 'Click here for refund'.", type: "commentary" },

            { text: "Smishing", type: "story", pronunciation: "S-mish-ing" },
            { text: "Phishing via SMS. 'Royal Mail: We missed your parcel'.", type: "commentary" },

            { text: "Vishing", type: "story", pronunciation: "V-ish-ing" },
            { text: "Voice phishing. Someone ringing you up pretending to be Windows Support.", type: "commentary" },

            "OTHER VECTORS",
            { text: "Typosquatting", type: "story", pronunciation: "Typo-squatting" },
            { text: "Registering Goggle.com hoping someone has fat fingers.", type: "commentary" },

            { text: "Watering Hole", type: "story" },
            { text: "Infecting a website you know your target visits. Poisoning the village well.", type: "commentary" },

            "SOCIAL ENGINEERING",
            { text: "Pretexting", type: "story" },
            { text: "Creating a fake scenario. 'Hi, I'm calling from IT...'", type: "commentary" },

            { text: "BEC (Business Email Compromise)", type: "story" },
            { text: "Taking over the boss's email to tell accounts to 'pay this invoice urgently'.", type: "commentary" },

            "CHAPTER 6 REVIEW QUESTIONS",
            { text: "1. Email asking for bank details for refund?", type: "story" },
            { text: "Answer: Phishing (B).", type: "commentary" },
            { text: "2. Hiding message in picture file?", type: "story" },
            { text: "Answer: Steganography (A).", type: "commentary" },
            { text: "3. Hacked via Bluetooth likely caused by?", type: "story" },
            { text: "Answer: Pairing with public headset (C).", type: "commentary" },
            { text: "4. Difference between Spear Phishing and Phishing?", type: "story" },
            { text: "Answer: Spear targets specific people (B).", type: "commentary" },
            { text: "5. Free software making PC act weird?", type: "story" },
            { text: "Answer: Trojan (A).", type: "commentary" },
            { text: "6. Protecting data on stolen mobile phones?", type: "story" },
            { text: "Answer: Remote wipe and Screen locks (C & D).", type: "commentary" },
            { text: "7. Goal of Watering Hole attack?", type: "story" },
            { text: "Answer: Infecting frequently visited site (C).", type: "commentary" },
            { text: "8. Distinguishes Business Email Compromise?", type: "story" },
            { text: "Answer: Impersonating legitimate brand/boss (B).", type: "commentary" },
            { text: "9. Typing microsooft.com?", type: "story" },
            { text: "Answer: Typosquatting (B).", type: "commentary" },
            { text: "10. Describes Disinformation?", type: "story" },
            { text: "Answer: Spreading false info (Contextual).", type: "commentary" },

            // --- CHAPTER 7 ---
            "CHAPTER 7: VULNERABILITIES (THE WEAK SPOTS)",
            { text: "Covers Exam Objective 2.3. Where the cracks are.", type: "commentary" },

            "APP VULNERABILITIES",
            { text: "Buffer Overflow", type: "story" },
            { text: "Trying to pour a pint of beer into a shot glass. It makes a mess and crashes the system.", type: "commentary" },

            { text: "SQL Injection", type: "story", pronunciation: "Sequel-Eye" },
            { text: "Typing code into a search box to trick the database.", type: "commentary" },

            { text: "Race Condition", type: "story" },
            { text: "Two things trying to happen at the same time when they should be sequential.", type: "commentary" },

            "HARDWARE/OS",
            { text: "End-of-Life (EOL)", type: "story" },
            { text: "Software the manufacturer has stopped supporting. Driving an old banger you can't get parts for.", type: "commentary" },

            "VIRTUALIZATION",
            { text: "VM Escape", type: "story" },
            { text: "Breaking out of a Virtual Machine and accessing the main Host server. The nightmare scenario.", type: "commentary" },

            { text: "VM Sprawl", type: "story" },
            { text: "Creating too many VMs and losing track. You can't patch what you don't know exists.", type: "commentary" },

            "MOBILE",
            { text: "Jailbreaking/Rooting", type: "story" },
            { text: "Unlocking your phone. Sounds fun, but breaks the security model.", type: "commentary" },

            { text: "Zero-Day", type: "story" },
            { text: "A vulnerability the vendor doesn't know about yet. No patch exists.", type: "commentary" },

            "CHAPTER 7 REVIEW QUESTIONS",
            { text: "1. User leaves laptop unlocked. First step?", type: "story" },
            { text: "Answer: Revoke certificate (A).", type: "commentary" },
            { text: "2. Stop rogue VMs eating resources?", type: "story" },
            { text: "Answer: Explicit guidelines and Automated templates (B & C).", type: "commentary" },
            { text: "3. Secure practice after using Bluetooth earbuds?", type: "story" },
            { text: "Answer: Turn off Bluetooth (A).", type: "commentary" },
            { text: "4. Risk of third-party app development?", type: "story" },
            { text: "Answer: Supply chain risk (A).", type: "commentary" },
            { text: "5. Prevent data breaches after acquisition?", type: "story" },
            { text: "Answer: DLP (D).", type: "commentary" },
            { text: "6. Stop automated account attacks?", type: "story" },
            { text: "Answer: MFA (A).", type: "commentary" },
            { text: "7. Threat of USB drive in reception?", type: "story" },
            { text: "Answer: Malicious USB attack (C).", type: "commentary" },
            { text: "8. Risks of software from market stall?", type: "story" },
            { text: "Answer: No proof of purchase/Uncertain origin (A & B).", type: "commentary" },
            { text: "9. What is VM Escape?", type: "story" },
            { text: "Answer: Attacker moves from VM to Host (C).", type: "commentary" },
            { text: "10. Risk of third-party libraries?", type: "story" },
            { text: "Answer: Vulnerabilities within library (C).", type: "commentary" },

            // --- CHAPTER 8 ---
            "CHAPTER 8: INDICATORS OF MALICIOUS ACTIVITY",
            { text: "Covers Exam Objective 2.4. Spotting the rot.", type: "commentary" },

            "MALWARE TYPES",
            { text: "Keyloggers", type: "story" },
            { text: "Records every key you press to steal passwords.", type: "commentary" },

            { text: "Logic Bomb", type: "story" },
            { text: "Malware that waits for a specific time or event to detonate.", type: "commentary" },

            { text: "Rootkits", type: "story" },
            { text: "Buries itself deep in the OS to hide from antivirus.", type: "commentary" },

            "NETWORK ATTACKS",
            { text: "DDoS", type: "story", pronunciation: "Dee-Dos" },
            { text: "Using a botnet to flood a website until it crashes.", type: "commentary" },

            { text: "ARP Poisoning", type: "story" },
            { text: "Lying to the switch. 'Hey, I'm the router'. Allows interception.", type: "commentary" },

            "PASSWORD ATTACKS",
            { text: "Brute Force", type: "story" },
            { text: "Trying every combination. Sledgehammer approach.", type: "commentary" },

            { text: "Password Spraying", type: "story" },
            { text: "Trying one common password against every user account.", type: "commentary" },

            { text: "Credential Stuffing", type: "story" },
            { text: "Using passwords leaked from Netflix to try and hack Banking accounts.", type: "commentary" },

            "INDICATORS",
            { text: "Impossible Travel", type: "story" },
            { text: "Login from London at 9am and New York at 9:10am. Unless they have a teleporter, account is compromised.", type: "commentary" },

            "CHAPTER 8 REVIEW QUESTIONS",
            { text: "1. Files deleted every Monday at 9am?", type: "story" },
            { text: "Answer: Logic bomb (A).", type: "commentary" },
            { text: "2. Malware disguised as legit program?", type: "story" },
            { text: "Answer: Trojan (C).", type: "commentary" },
            { text: "3. Accounts repeatedly locked out?", type: "story" },
            { text: "Answer: Brute-force attack (B).", type: "commentary" },
            { text: "4. Malware recorded password?", type: "story" },
            { text: "Answer: Keylogger (C).", type: "commentary" },
            { text: "5. Using stolen credentials on another site?", type: "story" },
            { text: "Answer: Credential stuffing (C).", type: "commentary" },
            { text: "6. Website flooded and crashes?", type: "story" },
            { text: "Answer: DDoS (C).", type: "commentary" },
            { text: "7. Accessing files outside web root?", type: "story" },
            { text: "Answer: Directory traversal (B).", type: "commentary" },
            { text: "8. Two inputs produce same hash?", type: "story" },
            { text: "Answer: Collision attack (D).", type: "commentary" },
            { text: "9. Encrypted connection forced to unencrypted?", type: "story" },
            { text: "Answer: SSL stripping (C).", type: "commentary" },
            { text: "10. Trying common passwords across accounts?", type: "story" },
            { text: "Answer: Password spraying (C).", type: "commentary" },

            // --- CHAPTER 9 ---
            "CHAPTER 9: MITIGATION TECHNIQUES (FIXING IT)",
            { text: "Covers Exam Objective 2.5. Stopping the bleeding.", type: "commentary" },

            "SEGMENTATION",
            { text: "VLANs", type: "story", pronunciation: "V-Lans" },
            { text: "Virtual networks. Keeps Sales traffic separate from HR traffic.", type: "commentary" },

            { text: "Air Gap", type: "story" },
            { text: "Physically disconnecting a sensitive computer. The ultimate segmentation.", type: "commentary" },

            "ACCESS CONTROL",
            { text: "Least Privilege", type: "story" },
            { text: "Give people only the access they need, not a drop more. Cleaners don't need keys to the safe.", type: "commentary" },

            "HARDENING",
            { text: "Disable Unused Ports", type: "story" },
            { text: "If you aren't using Port 23, close it!", type: "commentary" },

            "MONITORING",
            { text: "SIEM", type: "story", pronunciation: "Sim" },
            { text: "The Central Brain. Collects logs from everywhere and looks for patterns.", type: "commentary" },

            { text: "SOAR", type: "story", pronunciation: "Soar" },
            { text: "Like SIEM, but can actually do things automatically (like isolate a virus).", type: "commentary" },

            "DECOMMISSIONING",
            { text: "Sanitization", type: "story" },
            { text: "Wiping data so it can't be recovered.", type: "commentary" },

            "CHAPTER 9 REVIEW QUESTIONS",
            { text: "1. Separate HR/IT networks allowing communication?", type: "story" },
            { text: "Answer: ACL (C) / VLAN.", type: "commentary" },
            { text: "2. Stop user installing game?", type: "story" },
            { text: "Answer: Allow list (C).", type: "commentary" },
            { text: "3. Domain controller infected. First step?", type: "story" },
            { text: "Answer: Disconnect from network (B).", type: "commentary" },
            { text: "4. Real-time blocking of network threats?", type: "story" },
            { text: "Answer: Inline IPS (C).", type: "commentary" },
            { text: "5. Mitigate zero-day if no patch?", type: "story" },
            { text: "Answer: Isolate systems (A).", type: "commentary" },
            { text: "6. Primary purpose of mitigation?", type: "story" },
            { text: "Answer: Reduce risk and impact (D).", type: "commentary" },
            { text: "7. Roles of SOAR?", type: "story" },
            { text: "Answer: Automate response / Release staff (C & D).", type: "commentary" },
            { text: "8. Description of mitigation?", type: "story" },
            { text: "Answer: Reduce likelihood/impact (C).", type: "commentary" },
            { text: "9. Technology collecting logs?", type: "story" },
            { text: "Answer: SIEM (C).", type: "commentary" },
            { text: "10. Scanning for missing patches?", type: "story" },
            { text: "Answer: Credentialed scan & Nessus (A & E).", type: "commentary" },
            { text: "11. Detecting threats on endpoint?", type: "story" },
            { text: "Answer: EDR (A).", type: "commentary" },

            // ==========================================
            // DOMAIN 3: SECURITY ARCHITECTURE (DETAILED)
            // ==========================================
            "DOMAIN 3: SECURITY ARCHITECTURE",

            // --- CHAPTER 10 ---
            "CHAPTER 10: ARCHITECTURE MODELS (THE BLUEPRINT)",
            { text: "Rewritten in Everyday Modern British English. Covers Exam Objective 3.1.", type: "commentary" },

            "INTRODUCTION",
            { text: "Welcome to Domain 3. We're looking at how the whole IT system is put together. Whether you keep your servers in the basement (On-Prem) or rent them from someone else (The Cloud), you need to know how to lock them down without bankrupting the company.", type: "story" },

            "CLOUD COMPUTING",
            { text: "The Cloud is just a fancy word for 'renting someone else's server'.", type: "story" },
            
            "CLOUD MODELS",
            { text: "Public Cloud", type: "story" },
            { text: "Like a block of flats. You rent a flat, but share the building (multi-tenant). Cheap and cheerful.", type: "commentary" },

            { text: "Private Cloud", type: "story" },
            { text: "Buying your own detached house. It's yours, nobody else lives there. More secure, but costs a fortune.", type: "commentary" },

            { text: "Community Cloud", type: "story" },
            { text: "A gated community. Only people from the same industry (e.g., banks) live there.", type: "commentary" },

            { text: "Hybrid Cloud", type: "story" },
            { text: "You have a flat in the city (Public) and a cottage in the country (Private). Best of both worlds.", type: "commentary" },

            "SERVICE MODELS (THE PIZZA ANALOGY)",
            { text: "IaaS (Infrastructure as a Service)", type: "story", pronunciation: "Eye-ass" },
            { text: "You rent the kitchen and oven, but cook yourself. (You manage OS/Apps).", type: "commentary" },

            { text: "PaaS (Platform as a Service)", type: "story", pronunciation: "Paz" },
            { text: "You rent the kitchen and pre-made dough. You just add toppings. (For developers).", type: "commentary" },

            { text: "SaaS (Software as a Service)", type: "story", pronunciation: "Sass" },
            { text: "You order a Domino's. Ready to eat. (Gmail, Salesforce).", type: "commentary" },

            { text: "Infrastructure as Code (IaC)", type: "story" },
            { text: "Instead of manually plugging in cables, you write a script. The server appears by magic.", type: "commentary" },

            { text: "Serverless", type: "story" },
            { text: "You don't care about the server. Upload code, pay per second. Like pay-as-you-go mobile.", type: "commentary", pronunciation: "mo-bile" },

            "NETWORK INFRASTRUCTURE",
            { text: "Router", type: "story", pronunciation: "Root-er" },
            { text: "The post office. Reads address (IP) and sends packet to destination.", type: "commentary" },

            { text: "Switch", type: "story" },
            { text: "The internal sorting office. Connects office computers together.", type: "commentary" },

            { text: "Load Balancer", type: "story" },
            { text: "The traffic warden. If Web Server 1 is busy, it waves traffic to Web Server 2.", type: "commentary" },

            { text: "Air Gap", type: "story" },
            { text: "Physically unplugging a computer. To steal data, you need a USB stick.", type: "commentary" },

            "INDUSTRIAL & EMBEDDED",
            { text: "SCADA / ICS", type: "story", pronunciation: "Skah-da" },
            { text: "Systems running factories. If hacked, lights go out.", type: "commentary" },

            { text: "IoT", type: "story" },
            { text: "Smart fridges/toasters. Usually have terrible security.", type: "commentary" },

            "CONSIDERATIONS",
            { text: "Resilience", type: "story", pronunciation: "Re-zill-ee-ence" },
            { text: "If it breaks, how quickly can we fix it?", type: "commentary" },

            { text: "Latency", type: "story" },
            { text: "Is it laggy? Nobody likes lag.", type: "commentary" },

            "CHAPTER 10 REVIEW QUESTIONS",
            { text: "1. Update slows support. What prevents this?", type: "story" },
            { text: "Answer: Test results (C).", type: "commentary" },
            { text: "2. List of authorized entities?", type: "story" },
            { text: "Answer: Allow list.", type: "commentary" },
            { text: "3. Keeps diagrams accurate?", type: "story" },
            { text: "Answer: Updating diagrams.", type: "commentary" },
            { text: "4. Document to fix failed change?", type: "story" },
            { text: "Answer: Backout plan.", type: "commentary" },
            { text: "5. Website offline for updates?", type: "story" },
            { text: "Answer: Maintenance window.", type: "commentary" },
            { text: "6. Relationship between components?", type: "story" },
            { text: "Answer: Dependencies.", type: "commentary" },
            { text: "7. Why schedule maintenance window?", type: "story", pronunciation: "shed-yool" },
            { text: "Answer: Ensure updates don't disrupt users.", type: "commentary" },
            { text: "8. Photo software freezes. Action?", type: "story" },
            { text: "Answer: Application restart.", type: "commentary" },
            { text: "9. Why update topology diagrams?", type: "story" },
            { text: "Answer: Understand environment.", type: "commentary" },
            { text: "10. Why review test results?", type: "story" },
            { text: "Answer: Identify defects.", type: "commentary" },

            // --- CHAPTER 11 ---
            "CHAPTER 11: SECURING ENTERPRISE INFRASTRUCTURE",
            { text: "Covers Exam Objective 3.2. Putting things in the right place.", type: "commentary" },

            "ZONES",
            { text: "DMZ (Demilitarized Zone)", type: "story", pronunciation: "Dee-Em-Zed" },
            { text: "The 'Buffer Zone' between Internet and Internal Network. Web servers go here.", type: "commentary" },

            { text: "Honeypot Placement", type: "story" },
            { text: "Put in DMZ to lure attackers away from real jewels.", type: "commentary" },

            "FAILURE MODES",
            { text: "Fail-Closed", type: "story" },
            { text: "Lock breaks, door stays locked. Secure, but people stuck.", type: "commentary" },

            { text: "Fail-Open", type: "story" },
            { text: "Lock breaks, door unlocks. Safe for fire, bad for security.", type: "commentary" },

            "APPLIANCES",
            { text: "Jump Server", type: "story" },
            { text: "Hardened server you log into first. Like an airlock.", type: "commentary" },

            { text: "Proxy Server", type: "story" },
            { text: "Goes to internet on your behalf. Filters traffic.", type: "commentary" },

            { text: "Reverse Proxy", type: "story" },
            { text: "Sits in front of web server. Checks traffic before it reaches server.", type: "commentary" },

            "PORT SECURITY",
            { text: "802.1X", type: "story" },
            { text: "The bouncer. Plug in, ask for ID.", type: "commentary" },

            { text: "Sticky MAC", type: "story" },
            { text: "Switch remembers first device. Unplug it, port shuts down.", type: "commentary" },

            "SECURE COMMUNICATION",
            { text: "VPN", type: "story" },
            { text: "Secure tunnel through internet.", type: "commentary" },

            { text: "Split Tunnel", type: "story" },
            { text: "Only work traffic goes through VPN.", type: "commentary" },

            "CHAPTER 11 REVIEW QUESTIONS",
            { text: "1. Why buy Stateful Firewall?", type: "story" },
            { text: "Answer: Analyze traffic patterns/state.", type: "commentary" },
            { text: "2. Secure connectivity for remote staff?", type: "story" },
            { text: "Answer: Site-to-site / Remote Access VPN.", type: "commentary" },
            { text: "3. Minimize exposure for client systems?", type: "story" },
            { text: "Answer: Jump server.", type: "commentary" },
            { text: "4. Where to place Proxy Server?", type: "story" },
            { text: "Answer: At the edge.", type: "commentary" },
            { text: "5. Filter traffic based on rules?", type: "story" },
            { text: "Answer: ACLs / Firewall.", type: "commentary" },
            { text: "6. Prevent data exfiltration?", type: "story" },
            { text: "Answer: DLP.", type: "commentary" },
            { text: "7. Minimize vulnerabilities on attack surface?", type: "story" },
            { text: "Answer: Regular audits / WAF.", type: "commentary" },
            { text: "8. Layer 4 vs Layer 7 firewall?", type: "story" },
            { text: "Answer: Layer 7 inspects content.", type: "commentary" },
            { text: "9. How does Reverse Proxy enhance security?", type: "story" },
            { text: "Answer: Hides real server.", type: "commentary" },

            // --- CHAPTER 12 ---
            "CHAPTER 12: PROTECTING DATA (THE JEWELS)",
            { text: "Covers Exam Objective 3.3. Keeping secrets secret.", type: "commentary" },

            "DATA TYPES",
            { text: "PII", type: "story" },
            { text: "Names, NI numbers, phone numbers.", type: "commentary" },

            { text: "GDPR", type: "story", pronunciation: "priv-a-see" },
            { text: "EU privacy law. Look after data or get fined.", type: "commentary" },

            "METHODS",
            { text: "Encryption", type: "story" },
            { text: "Turning data into code.", type: "commentary" },

            { text: "Hashing", type: "story" },
            { text: "Digital fingerprint to check integrity.", type: "commentary" },

            { text: "Masking", type: "story" },
            { text: "Hiding parts of data (XXXX-1234).", type: "commentary" },

            { text: "Tokenization", type: "story" },
            { text: "Swapping sensitive data for random token.", type: "commentary" },

            { text: "Obfuscation", type: "story", pronunciation: "Ob-fus-kay-shun" },
            { text: "Making code look messy.", type: "commentary" },

            { text: "Geolocation", type: "story" },
            { text: "Restricting access based on location.", type: "commentary" },

            "CHAPTER 12 REVIEW QUESTIONS",
            { text: "1. Protecting regulated data?", type: "story", pronunciation: "priv-a-see" },
            { text: "Answer: PII/PHI.", type: "commentary" },
            { text: "2. Access based on hotel location?", type: "story" },
            { text: "Answer: Geographic restrictions.", type: "commentary" },
            { text: "3. Patents/copyrights?", type: "story" },
            { text: "Answer: Intellectual Property.", type: "commentary" },
            { text: "4. Unreadable code during comms?", type: "story" },
            { text: "Answer: Encryption (TLS).", type: "commentary" },
            { text: "5. Mortgage accounts data type?", type: "story" },
            { text: "Answer: Financial info.", type: "commentary" },
            { text: "6. Passwords into fixed strings?", type: "story" },
            { text: "Answer: Hashing.", type: "commentary" },
            { text: "7. Wireshark PCAP files?", type: "story" },
            { text: "Answer: Non-human-readable.", type: "commentary" },
            { text: "8. Will for dog sanctuary?", type: "story" },
            { text: "Answer: Legal info.", type: "commentary" },
            { text: "9. Patient names to pseudonyms?", type: "story", pronunciation: "sue-doe-nimms" },
            { text: "Answer: Masking.", type: "commentary" },
            { text: "10. Protecting source code?", type: "story" },
            { text: "Answer: Obfuscation.", type: "commentary" },

            // --- CHAPTER 13 ---
            "CHAPTER 13: RESILIENCE AND RECOVERY",
            { text: "Covers Exam Objective 3.4. When it hits the fan.", type: "commentary" },

            "HIGH AVAILABILITY",
            { text: "Load Balancing", type: "story" },
            { text: "Using multiple servers. If one dies, others carry on.", type: "commentary" },

            { text: "Active/Passive", type: "story" },
            { text: "One works, one sleeps until first breaks.", type: "commentary" },

            "BACKUPS",
            { text: "Incremental", type: "story" },
            { text: "Backs up changes since last backup. Fast backup, slow restore.", type: "commentary" },

            { text: "Differential", type: "story" },
            { text: "Backs up changes since last Full. Slower backup, faster restore.", type: "commentary" },

            { text: "Snapshots", type: "story" },
            { text: "Quick photo of VM. Good for rollback.", type: "commentary" },

            { text: "3-2-1 Rule", type: "story" },
            { text: "3 copies, 2 media types, 1 off-site.", type: "commentary" },

            "RECOVERY SITES",
            { text: "Hot Site", type: "story" },
            { text: "Ready immediately. Expensive.", type: "commentary" },

            { text: "Cold Site", type: "story" },
            { text: "Empty room with power. Cheap but slow.", type: "commentary" },

            "POWER",
            { text: "UPS", type: "story" },
            { text: "Big battery. Runs for 10-15 mins.", type: "commentary" },

            "CHAPTER 13 REVIEW QUESTIONS",
            { text: "1. Why load balancers?", type: "story" },
            { text: "Answer: Distribute traffic.", type: "commentary" },
            { text: "2. Evaluate incident response?", type: "story" },
            { text: "Answer: Tabletop exercise.", type: "commentary" },
            { text: "3. Objective of hot site?", type: "story" },
            { text: "Answer: Business continuity.", type: "commentary" },
            { text: "4. Cloud power failure help?", type: "story" },
            { text: "Answer: High Availability.", type: "commentary" },
            { text: "5. 10-second outage solution?", type: "story" },
            { text: "Answer: UPS.", type: "commentary" },
            { text: "6. Log emails for 3 years?", type: "story" },
            { text: "Answer: Journaling.", type: "commentary" },
            { text: "7. Complex calculations?", type: "story" },
            { text: "Answer: Parallel processing.", type: "commentary" },
            { text: "8. Inform stakeholders quietly?", type: "story" },
            { text: "Answer: Communication plan.", type: "commentary" },
            { text: "9. VDI backup?", type: "story" },
            { text: "Answer: Snapshot.", type: "commentary" },
            { text: "10. Power distribution device?", type: "story" },
            { text: "Answer: PDU.", type: "commentary" },

            // ==========================================
            // DOMAIN 4: SECURITY OPERATIONS
            // ==========================================
            "DOMAIN 4: SECURITY OPERATIONS",

            // --- CHAPTER 14 ---
            "CHAPTER 14: SECURITY TECHNIQUES (HARDENING)",
            { text: "Covers Exam Objective 4.1. Toughening things up.", type: "commentary" },

            "BASELINES",
            { text: "CIS Benchmarks", type: "story" },
            { text: "Gold standard guide for securing OS.", type: "commentary" },

            { text: "Group Policy (GPO)", type: "story" },
            { text: "Microsoft tool to force settings on all PCs.", type: "commentary" },

            "HARDENING",
            { text: "IoT", type: "story" },
            { text: "Isolate on VLAN so toasters don't steal banking data.", type: "commentary" },

            "WIRELESS",
            { text: "Site Survey / Heat Map", type: "story" },
            { text: "Checking signal strength. Red is strong.", type: "commentary" },

            { text: "WPA3", type: "story" },
            { text: "Newest, strongest WiFi security.", type: "commentary" },

            "MOBILE",
            { text: "MDM", type: "story" },
            { text: "Corporate software to control phones. Remote wipe.", type: "commentary" },

            { text: "Geofencing", type: "story" },
            { text: "Phone works only inside office.", type: "commentary" },

            "APPS",
            { text: "Input Validation", type: "story" },
            { text: "Checking user input. Stops SQL injection.", type: "commentary" },

            { text: "Sandboxing", type: "story" },
            { text: "Running dodgy app in glass box.", type: "commentary" },

            "CHAPTER 14 REVIEW QUESTIONS",
            { text: "1. Purpose of code signing?", type: "story" },
            { text: "Answer: Validate integrity/source.", type: "commentary" },
            { text: "2. Audit failed patches?", type: "story" },
            { text: "Answer: CIS benchmarks.", type: "commentary" },
            { text: "3. Bluesnarfing?", type: "story" },
            { text: "Answer: Stealing Bluetooth data.", type: "commentary" },
            { text: "4. Wireless site survey?", type: "story" },
            { text: "Answer: Optimize coverage.", type: "commentary" },
            { text: "5. Mobile hardening priority?", type: "story", pronunciation: "mo-bile" },
            { text: "Answer: Encryption/Passcodes.", type: "commentary" },
            { text: "6. Data stolen on open WiFi?", type: "story" },
            { text: "Answer: Evil Twin.", type: "commentary" },
            { text: "7. Cart items change price?", type: "story" },
            { text: "Answer: Input validation.", type: "commentary" },
            { text: "8. Fuzzing?", type: "story" },
            { text: "Answer: Dynamic analysis.", type: "commentary" },
            { text: "9. Connection issues?", type: "story" },
            { text: "Answer: Heat map.", type: "commentary" },
            { text: "10. Prevent Bluetooth pairing?", type: "story" },
            { text: "Answer: Disable when not in use.", type: "commentary" },

            // --- CHAPTER 15 ---
            "CHAPTER 15: ASSET MANAGEMENT (COUNTING THE KIT)",
            { text: "Covers Exam Objective 4.2. Knowing what you own.", type: "commentary" },

            "ASSETS",
            { text: "Naming Convention", type: "story" },
            { text: "Don't call servers 'DeathStar'. Use UK-LON-WEB-01.", type: "commentary" },

            { text: "Asset Tags / RFID", type: "story" },
            { text: "Stickers/tags to track kit.", type: "commentary" },

            "DISPOSAL",
            { text: "Sanitization", type: "story", pronunciation: "san-i-ty-ZAY-shun" },
            { text: "Overwriting disk with random data.", type: "commentary" },

            { text: "Degaussing", type: "story", pronunciation: "De-gow-sing" },
            { text: "Giant magnet wipes drive. Destroys it.", type: "commentary" },

            { text: "Shredding", type: "story" },
            { text: "Metal shredder. Most secure.", type: "commentary" },

            "CHAPTER 15 REVIEW QUESTIONS",
            { text: "1. Broken computers disposal?", type: "story" },
            { text: "Answer: Destruction certificate.", type: "commentary" },
            { text: "2. Destroying classified paper?", type: "story" },
            { text: "Answer: Pulping/Burning.", type: "commentary" },
            { text: "3. Enumerate devices tool?", type: "story" },
            { text: "Answer: NMAP.", type: "commentary" },
            { text: "4. Secure hard drive disposal?", type: "story" },
            { text: "Answer: Shredding.", type: "commentary" },
            { text: "5. Enumeration meaning?", type: "story" },
            { text: "Answer: Identifying resources.", type: "commentary" },
            { text: "6. Data owner responsibility?", type: "story" },
            { text: "Answer: Access requirements / Disposal.", type: "commentary" },
            { text: "7. Prioritize assets after incident?", type: "story" },
            { text: "Answer: Classification/Criticality.", type: "commentary" },
            { text: "8. Reuse drive after sanitization?", type: "story" },
            { text: "Answer: Wiping/Overwriting.", type: "commentary" },
            { text: "9. Labeling laptops?", type: "story" },
            { text: "Answer: Naming convention.", type: "commentary" },
            { text: "10. Why data not sanitized?", type: "story" },
            { text: "Answer: Retention requirements.", type: "commentary" }
        ]
    }
};