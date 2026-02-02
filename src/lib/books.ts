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

            // --- CHAPTER 1 ---
            "CHAPTER 1: SOCIAL ENGINEERING",
            { text: "Rewritten in Everyday Modern British English. Covers Exam Objective 1.1.", type: "commentary" },
            { text: "Social Engineering is hacking humans, not computers. It's easier to ask for a password than to crack it.", type: "story" },
            
            { text: "Phishing", type: "story", pronunciation: "FISHING" },
            { text: "Sending dodgy emails pretending to be the bank.", type: "commentary" },

            { text: "Vishing", type: "story", pronunciation: "VISHING" },
            { text: "Voice Phishing. Someone ringing you up pretending to be support.", type: "commentary" },

            { text: "Smishing", type: "story", pronunciation: "SMISHING" },
            { text: "SMS Phishing. Dodgy texts claiming you've missed a parcel delivery.", type: "commentary" },

            { text: "Tailgating", type: "story" },
            { text: "Following someone through a secure door without a pass. 'Hold the door, mate!'", type: "commentary" },

            // --- CHAPTER 2 ---
            "CHAPTER 2: THREAT ACTORS",
            { text: "Covers Exam Objective 1.5. Who are the bad guys?", type: "commentary" },

            { text: "Script Kiddies", type: "story" },
            { text: "Amateurs who use tools they don't understand. They download hacks from the internet.", type: "commentary" },

            { text: "Hacktivists", type: "story" },
            { text: "Hackers with a cause. They deface websites for political reasons (e.g., Anonymous).", type: "commentary" },

            { text: "APT (Advanced Persistent Threat)", type: "story", pronunciation: "A-P-T" },
            { text: "Nation States (governments). They have unlimited money and time. They play the long game.", type: "commentary" },

            { text: "Insider Threat", type: "story" },
            { text: "A disgruntled employee. They already have the keys to the building.", type: "commentary" },

            // --- CHAPTER 3 ---
            "CHAPTER 3: MALWARE",
            { text: "Covers Exam Objective 1.2. The nasty software.", type: "commentary" },

            { text: "Ransomware", type: "story", pronunciation: "RAN-sum-wair" },
            { text: "Encrypts your files and demands payment (Bitcoin) to unlock them.", type: "commentary" },

            { text: "Trojan", type: "story", pronunciation: "TROH-jun" },
            { text: "Looks like a useful app (a game or screensaver) but has a virus hidden inside.", type: "commentary" },

            { text: "Logic Bomb", type: "story" },
            { text: "Code that waits for a specific event (like a date or an employee being fired) before exploding.", type: "commentary" },

            { text: "Rootkit", type: "story", pronunciation: "ROOT-kit" },
            { text: "Burrows deep into the OS to hide itself. Very hard to detect.", type: "commentary" },

            // ==========================================
            // DOMAIN 2: ARCHITECTURE & DESIGN
            // ==========================================
            "DOMAIN 2: ARCHITECTURE & DESIGN",

            // --- CHAPTER 4 ---
            "CHAPTER 4: SECURITY CONCEPTS",
            { text: "The CIA Triad", type: "story" },
            { text: "The Holy Trinity of Security.", type: "commentary" },

            { text: "Confidentiality", type: "story", pronunciation: "kon-fi-den-shee-AL-it-ee" },
            { text: "Keeping secrets secret. Encryption helps this.", type: "commentary" },
            
            { text: "Integrity", type: "story", pronunciation: "in-TEG-rit-ee" },
            { text: "Making sure nobody has messed with your data. Hashing helps this.", type: "commentary" },
            
            { text: "Availability", type: "story", pronunciation: "uh-vay-luh-BIL-it-ee" },
            { text: "Making sure the servers are actually running. Backups help this.", type: "commentary" },

            { text: "Non-Repudiation", type: "story", pronunciation: "non-reh-pyoo-dee-AY-shun" },
            { text: "You can't deny you did it. Digital signatures provide this.", type: "commentary" },

            // --- CHAPTER 5 ---
            "CHAPTER 5: CRYPTOGRAPHY (THE MATHS)",
            { text: "Cryptography", type: "story", pronunciation: "krip-TOG-ruh-fee" },
            { text: "Turning English into gobbledygook.", type: "commentary" },

            { text: "Symmetric Encryption", type: "story", pronunciation: "si-MET-rik" },
            { text: "Using the SAME key to lock and unlock. Fast, but hard to share the key securely. (AES).", type: "commentary" },

            { text: "Asymmetric Encryption", type: "story", pronunciation: "ay-si-MET-rik" },
            { text: "Using a PAIR of keys (Public and Private). Slower, but safer for the internet. (RSA).", type: "commentary" },

            { text: "Hashing", type: "story" },
            { text: "One-way scrambling. You can turn a password into a hash, but you can't turn a hash back into a password.", type: "commentary" },

            { text: "Salting", type: "story" },
            { text: "Adding random data to a password before hashing it. Stops Rainbow Table attacks.", type: "commentary" },

            { text: "Steganography", type: "story", pronunciation: "steg-uh-NOG-ruh-fee" },
            { text: "Hiding secret data inside an innocent picture.", type: "commentary" },

            { text: "Obfuscation", type: "story", pronunciation: "ob-fus-KAY-shun" },
            { text: "Making code look messy so hackers can't read it.", type: "commentary" },

            // ==========================================
            // DOMAIN 3: SECURITY ARCHITECTURE (NEW)
            // ==========================================
            "DOMAIN 3: SECURITY ARCHITECTURE",

            // --- CHAPTER 10 ---
            "CHAPTER 10: ARCHITECTURE MODELS",
            { text: "Rewritten in Everyday Modern British English. Covers Exam Objective 3.1.", type: "commentary" },

            "CLOUD COMPUTING",
            { text: "The Cloud is just a fancy word for 'renting someone else's server'.", type: "story" },
            
            "SERVICE MODELS",
            { text: "IaaS (Infrastructure as a Service)", type: "story", pronunciation: "Eye-ass" },
            { text: "You rent the kitchen and oven, but cook the pizza yourself. (You manage OS).", type: "commentary" },

            { text: "PaaS (Platform as a Service)", type: "story", pronunciation: "Paz" },
            { text: "You rent the kitchen and the pre-made dough. (For developers).", type: "commentary" },

            { text: "SaaS (Software as a Service)", type: "story", pronunciation: "Sass" },
            { text: "You order a Domino's. Ready to eat. (Gmail, Salesforce).", type: "commentary" },

            { text: "Serverless", type: "story" },
            { text: "Upload code, run when needed. Pay per second. Like pay-as-you-go mobile.", type: "commentary", pronunciation: "mo-bile" },

            "NETWORK INFRASTRUCTURE",
            { text: "Air Gap", type: "story" },
            { text: "Physically unplugging a computer from everything. To steal data, you need a USB stick.", type: "commentary" },

            { text: "SCADA / ICS", type: "story", pronunciation: "Skah-da" },
            { text: "Systems that run factories. If hacked, lights go out.", type: "commentary" },

            "CHAPTER 10 REVIEW QUESTIONS",
            { text: "1. Software update slows down support. What prevents this?", type: "story" },
            { text: "Answer: Test results.", type: "commentary" },
            { text: "2. Period when website is offline for updates?", type: "story" },
            { text: "Answer: Maintenance window.", type: "commentary" },

            // --- CHAPTER 11 ---
            "CHAPTER 11: SECURING ENTERPRISE",
            { text: "Covers Exam Objective 3.2. Device placement.", type: "commentary" },

            "DEVICE PLACEMENT",
            { text: "DMZ (Demilitarized Zone)", type: "story", pronunciation: "Dee-Em-Zed" },
            { text: "The buffer zone between the Internet and your internal network. Web servers go here.", type: "commentary" },

            { text: "Honeypot", type: "story", pronunciation: "HUN-ee-pot" },
            { text: "A trap placed to lure attackers away from the real jewels.", type: "commentary" },

            "NETWORK APPLIANCES",
            { text: "Jump Server", type: "story" },
            { text: "A hardened server you log into first. Like an airlock.", type: "commentary" },

            { text: "Proxy Server", type: "story", pronunciation: "PROK-see" },
            { text: "Goes to the internet on your behalf. Filters traffic.", type: "commentary" },

            "PORT SECURITY",
            { text: "802.1X", type: "story" },
            { text: "The bouncer. You plug in, it asks for ID.", type: "commentary" },

            "SECURE COMMUNICATION",
            { text: "Split Tunnel", type: "story" },
            { text: "Only work traffic goes through the VPN; Spotify uses normal internet.", type: "commentary" },

            // --- CHAPTER 12 ---
            "CHAPTER 12: PROTECTING DATA",
            { text: "Covers Exam Objective 3.3.", type: "commentary" },

            "DATA TYPES",
            { text: "PII (Personally Identifiable Information)", type: "story" },
            { text: "Names, NI numbers, phone numbers.", type: "commentary" },
            
            { text: "GDPR", type: "story", pronunciation: "priv-a-see" },
            { text: "The big EU privacy law. Look after data or get fined.", type: "commentary" },

            "METHODS",
            { text: "Tokenization", type: "story", pronunciation: "toh-ken-eye-ZAY-shun" },
            { text: "Swapping sensitive data for a random token.", type: "commentary" },

            { text: "Geolocation", type: "story" },
            { text: "Restricting access based on location. 'You can't log in from North Korea.'", type: "commentary" },

            "CHAPTER 12 REVIEW QUESTIONS",
            { text: "1. Protecting data subject to strict laws?", type: "story" },
            { text: "Answer: Regulated (PII/PHI).", type: "commentary" },
            { text: "2. Transforming passwords into fixed strings?", type: "story" },
            { text: "Answer: Hashing.", type: "commentary" },

            // --- CHAPTER 13 ---
            "CHAPTER 13: RESILIENCE",
            { text: "Covers Exam Objective 3.4. When it hits the fan.", type: "commentary" },

            "BACKUPS",
            { text: "Incremental Backup", type: "story", pronunciation: "in-kruh-MEN-tul" },
            { text: "Backs up only what changed. Fast backup, slow restore.", type: "commentary" },

            { text: "Differential Backup", type: "story", pronunciation: "dif-uh-REN-shul" },
            { text: "Backs up everything changed since last FULL backup. Slower backup, faster restore.", type: "commentary" },

            { text: "Snapshots", type: "story" },
            { text: "A quick photo of a VM. Good for rollbacks.", type: "commentary" },

            "RECOVERY SITES",
            { text: "Hot Site", type: "story" },
            { text: "Ready immediately. Expensive.", type: "commentary" },
            { text: "Cold Site", type: "story" },
            { text: "Empty room with power. Cheap but slow.", type: "commentary" },

            // ==========================================
            // DOMAIN 4: SECURITY OPERATIONS
            // ==========================================
            "DOMAIN 4: SECURITY OPERATIONS",

            // --- CHAPTER 14 ---
            "CHAPTER 14: HARDENING",
            { text: "Covers Exam Objective 4.1.", type: "commentary" },

            "SECURE BASELINES",
            { text: "CIS Benchmarks", type: "story" },
            { text: "The gold standard guide on how to secure your OS.", type: "commentary" },

            "WIRELESS",
            { text: "Heat Map", type: "story" },
            { text: "Checking signal strength. Red is strong, Blue is weak.", type: "commentary" },

            "MOBILE",
            { text: "Geofencing", type: "story", pronunciation: "jee-oh-FENS-ing" },
            { text: "Phone only works when physically inside the office.", type: "commentary" },
            
            "APPS",
            { text: "Sandboxing", type: "story", pronunciation: "SAND-boks-ing" },
            { text: "Running dodgy apps in a glass box (VM).", type: "commentary" },

            // --- CHAPTER 15 ---
            "CHAPTER 15: ASSET MANAGEMENT",
            { text: "Covers Exam Objective 4.2. Counting the kit.", type: "commentary" },

            "DISPOSAL",
            { text: "Sanitization", type: "story", pronunciation: "san-i-ty-ZAY-shun" },
            { text: "Overwriting disk with random data.", type: "commentary" },

            { text: "Degaussing", type: "story", pronunciation: "De-gow-sing" },
            { text: "Using a giant magnet to wipe the drive.", type: "commentary" },

            { text: "Shredding", type: "story" },
            { text: "Putting the drive through a metal shredder.", type: "commentary" },

            "CHAPTER 15 REVIEW QUESTIONS",
            { text: "1. Received broken computers for disposal. Action?", type: "story" },
            { text: "Answer: Obtain destruction certificate.", type: "commentary" },
            { text: "2. Securely disposing of hard drive?", type: "story" },
            { text: "Answer: Shredding.", type: "commentary" }
        ]
    }
};