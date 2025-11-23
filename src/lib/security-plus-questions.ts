
export const questions = [
  {
    "question": "1. Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
    "correct_answer": "C. Spear phishing",
    "incorrect_answers": [
      "A. Phishing",
      "B. Social engineering",
      "D. Trojan horse"
    ],
    "explanation": "This is spear phishing because the attack is targeted at a specific individual (Ahmed) and tailored to his profession (insurance). While it is a form of phishing and social engineering, spear phishing is the most precise description because of its targeted nature."
  },
  {
    "question": "2. You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Worm",
      "C. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "A logic bomb is a piece of code intentionally inserted into a software system that will set off a malicious function when specified conditions are met. In this case, the condition is the termination of a specific employee."
  },
  {
    "question": "3. You are responsible for incident response at Acme Bank. The Acme Bank website has been attacked. The attacker used the login screen, but rather than enter login credentials, they entered some odd text: ' or '1' = '1 . What is the best description for this attack?",
    "correct_answer": "C. SQL injection",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "B. Cross-site request forgery",
      "D. ARP poisoning"
    ],
    "explanation": "This is a classic example of a SQL injection attack. The input ' or '1' = '1 is designed to be appended to a SQL query, causing the WHERE clause to always evaluate to true, thereby bypassing authentication."
  },
  {
    "question": "4. Users are complaining that they cannot connect to the wireless network. You discover that the WAPs are being subjected to a wireless attack designed to block their Wi-Fi signals. Which of the following is the best label for this attack?",
    "correct_answer": "B. Jamming",
    "incorrect_answers": [
      "A. IV attack",
      "C. WPS attack",
      "D. Botnet"
    ],
    "explanation": "A jamming attack disrupts wireless communications by broadcasting on the same frequencies as the wireless access points (WAPs), preventing legitimate users from connecting to the network. This is a type of wireless denial-of-service attack."
  },
  {
    "question": "5. Frank is deeply concerned about attacks to his company's ecommerce server. He is particularly worried about cross-site scripting and SQL injection. Which of the following would best defend against these two specific attacks?",
    "correct_answer": "B. Input validation",
    "incorrect_answers": [
      "A. Encrypted web traffic",
      "C. A firewall",
      "D. An IDS"
    ],
    "explanation": "Input validation is a crucial security measure that involves sanitising and validating all data received from a user or another system. It is the primary defence against both Cross-Site Scripting (XSS) and SQL Injection attacks, as it prevents malicious scripts or queries from being executed."
  },
  {
    "question": "6. You are responsible for network security at Acme Company. Users have been reporting that personal data is being stolen when using the wireless network. They all insist they only connect to the corporate wireless access point (AP). However, logs for the AP show that these users have not connected to it. Which of the following could best explain this situation?",
    "correct_answer": "C. Rogue access point",
    "incorrect_answers": [
      "A. Session hijacking",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "A rogue access point is an unauthorised wireless access point installed on a secure network. In this scenario, users are likely connecting to a malicious AP disguised as the corporate one (an 'evil twin'), which is then used to intercept their data."
  },
  {
    "question": "7. What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
    "correct_answer": "C. Cross-site scripting",
    "incorrect_answers": [
      "A. SQL injection",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "Cross-Site Scripting (XSS) attacks involve injecting malicious scripts into trusted websites. When a victim visits the page, the script executes in their browser, allowing the attacker to hijack user sessions, deface websites, or redirect the user to malicious sites."
  },
  {
    "question": "8. Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
    "correct_answer": "D. Encrypting password plain text using symmetric encryption",
    "incorrect_answers": [
      "A. Use of a salt",
      "B. Use of a pepper",
      "C. Use of a purpose-built password hashing algorithm"
    ],
    "explanation": "Encrypting plain text with symmetric encryption is not a standard method for storing passwords because it implies the key could be compromised, revealing all passwords. Hashing algorithms like bcrypt or PBKDF2, often combined with salts and peppers, are the correct approach as they are one-way functions designed to be slow and computationally intensive."
  },
  {
    "question": "9. What term is used to describe spam over Internet messaging services?",
    "correct_answer": "A. SPIM",
    "incorrect_answers": [
      "B. SMSPAM",
      "C. IMSPAM",
      "D. TwoFaceTiming"
    ],
    "explanation": "SPIM stands for Spam over Instant Messaging. It is the term for unsolicited messages sent through instant messaging (IM) platforms."
  },
  {
    "question": "10. Susan is analyzing the source code for an application and discovers a pointer de-reference and returns NULL. This causes the program to attempt to read from the NULL pointer and results in a segmentation fault. What impact could this have for the application?",
    "correct_answer": "B. A denial-of-service condition",
    "incorrect_answers": [
      "A. A data breach",
      "C. Permissions creep",
      "D. Privilege escalation"
    ],
    "explanation": "A NULL pointer dereference occurs when a program tries to access memory at a NULL address. This almost always results in the program crashing, which leads to a denial-of-service (DoS) condition, as the application becomes unavailable."
  },
  {
    "question": "11. Teresa is the security manager for a mid-sized insurance company. She receives a call from law enforcement, telling her that some computers on her network participated in a massive denial-of-service (DoS) attack. Teresa is certain that none of the employees at her company would be involved in a cybercrime. What would best explain this scenario?",
    "correct_answer": "C. The machines are bots.",
    "incorrect_answers": [
      "A. It is a result of social engineering.",
      "B. The machines all have backdoors.",
      "D. The machines are infected with crypto-viruses."
    ],
    "explanation": "The most likely explanation is that the computers are part of a botnet. A botnet is a network of compromised computers (bots) that are controlled by a central attacker (the bot-herder) to carry out coordinated attacks, such as a Distributed Denial-of-Service (DDoS) attack, without the owners' knowledge."
  },
  {
    "question": "12. Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
    "correct_answer": "C. Indicators of compromise",
    "incorrect_answers": [
      "A. Predictive analysis",
      "B. OSINT",
      "D. Threat maps"
    ],
    "explanation": "Indicators of Compromise (IoCs) are pieces of forensic data, such as system log entries or file hashes, that identify potentially malicious activity on a system or network. The examples given are all potential signs that a system has been breached."
  },
  {
    "question": "13. Chris needs visibility into connection attempts through a firewall because he believes that a TCP handshake is not properly occurring. What security information and event management (SIEM) capability is best suited to troubleshooting this issue?",
    "correct_answer": "B. Packet capture",
    "incorrect_answers": [
      "A. Reviewing reports",
      "C. Sentiment analysis",
      "D. Log collection and analysis"
    ],
    "explanation": "Packet capture (or PCAP) allows for the detailed analysis of network traffic. To troubleshoot a TCP handshake issue, Chris would need to examine the individual packets being exchanged between the client and server, which is precisely what packet capture enables."
  },
  {
    "question": "14. Chris wants to detect a potential insider threat using his security information and event management (SIEM) system. What capability best matches his needs?",
    "correct_answer": "D. User behavior analysis",
    "incorrect_answers": [
      "A. Sentiment analysis",
      "B. Log aggregation",
      "C. Security monitoring"
    ],
    "explanation": "User Behaviour Analytics (UBA) or User and Entity Behaviour Analytics (UEBA) systems are designed to detect insider threats, targeted attacks, and financial fraud by baselining normal user behaviour and identifying anomalous activities that deviate from that baseline."
  },
  {
    "question": "15. Chris has hundreds of systems spread across multiple locations and wants to better handle the amount of data that they create. What two technologies can help with this?",
    "correct_answer": "A. Log aggregation and log collectors",
    "incorrect_answers": [
      "B. Packet capture and log aggregation",
      "C. Security monitoring and log collectors",
      "D. Sentiment analysis and user behavior analysis"
    ],
    "explanation": "Log collectors gather logs from various sources, and log aggregation centralises them in a single location (like a SIEM). This combination is essential for managing and analysing large volumes of log data from distributed systems."
  },
  {
    "question": "16. What type of security team establishes the rules of engagement for a cybersecurity exercise?",
    "correct_answer": "B. White team",
    "incorrect_answers": [
      "A. Blue team",
      "C. Purple team",
      "D. Red team"
    ],
    "explanation": "In a cybersecurity exercise, the white team acts as the neutral referee. They define the rules of engagement, manage the exercise infrastructure, and arbitrate between the red team (attackers) and the blue team (defenders)."
  },
  {
    "question": "17. Cynthia is concerned about attacks against an application programming interface (API) that her company provides for its customers. What should she recommend to ensure that the API is only used by customers who have paid for the service?",
    "correct_answer": "A. Require authentication.",
    "incorrect_answers": [
      "B. Install and configure a firewall.",
      "C. Filter by IP address.",
      "D. Install and use an IPS."
    ],
    "explanation": "Requiring authentication is the most direct and effective way to control access to an API. By issuing API keys or using authentication tokens (like OAuth), Cynthia can ensure that only authorised and paying customers can make requests to the API."
  },
  {
    "question": "18. What type of attack is based on sending more data to a target variable than the data can actually hold?",
    "correct_answer": "B. Buffer overflow",
    "incorrect_answers": [
      "A. Bluesnarfing",
      "C. Bluejacking",
      "D. Cross-site scripting"
    ],
    "explanation": "A buffer overflow occurs when a program attempts to write data beyond the boundaries of a fixed-length buffer in memory. This can overwrite adjacent memory, leading to crashes, incorrect data, or, in a worst-case scenario, arbitrary code execution."
  },
  {
    "question": "19. An email arrives telling Gurvinder that there is a limited time to act to get a software package for free and that the first 50 downloads will not have to be paid for. What social engineering principle is being used against him?",
    "correct_answer": "A. Scarcity",
    "incorrect_answers": [
      "B. Intimidation",
      "C. Authority",
      "D. Consensus"
    ],
    "explanation": "The principle of scarcity is being used. By creating the impression of a limited-time offer or limited availability ('first 50 downloads'), the attacker pressures the target to act quickly without thinking, bypassing their normal security judgment."
  },
  {
    "question": "20. You have been asked to test your company network for security issues. The specific test you are conducting involves primarily using automated and semiautomated tools to look for known vulnerabilities with the various systems on your network. Which of the following best describes this type of test?",
    "correct_answer": "A. Vulnerability scan",
    "incorrect_answers": [
      "B. Penetration test",
      "C. Security audit",
      "D. Security test"
    ],
    "explanation": "A vulnerability scan uses automated tools to identify known vulnerabilities, misconfigurations, and weaknesses in a network or systems. This is different from a penetration test, which involves actively trying to exploit those vulnerabilities."
  },
  {
    "question": "21. Susan wants to reduce the likelihood of successful credential harvesting attacks via her organization's commercial websites. Which of the following is not a common prevention method aimed at stopping credential harvesting?",
    "correct_answer": "C. Use of complex usernames",
    "incorrect_answers": [
      "A. Use of multifactor authentication",
      "B. User awareness training",
      "D. Limiting or preventing use of third-party web scripts and plugins"
    ],
    "explanation": "Complex usernames do not significantly deter credential harvesting. Attackers typically focus on obtaining the password. Multifactor Authentication (MFA), user training, and limiting attack surfaces (like third-party scripts) are all effective preventative measures."
  },
  {
    "question": "22. Greg wants to gain admission to a network which is protected by a network access control (NAC) system that recognized the hardware address of systems. How can he bypass this protection?",
    "correct_answer": "C. Use MAC cloning to clone a legitimate MAC address.",
    "incorrect_answers": [
      "A. Spoof a legitimate IP address.",
      "B. Conduct a denial-of-service attack against the NAC system.",
      "D. None of the above"
    ],
    "explanation": "Network Access Control (NAC) systems that rely on hardware addresses can be bypassed using MAC address spoofing (or cloning). By changing his device's MAC address to match that of a legitimate, authorised device, Greg can trick the NAC system into granting him access."
  },
  {
    "question": "23. Coleen is the web security administrator for an online auction website. A small number of users are complaining that when they visit the website it does not appear to be the correct site. Coleen checks and she can visit the site without any problem, even from computers outside the network. She also checks the web server log and there is no record of those users ever connecting. Which of the following might best explain this?",
    "correct_answer": "A. Typo squatting",
    "incorrect_answers": [
      "B. SQL injection",
      "C. Cross-site scripting",
      "D. Cross-site request forgery"
    ],
    "explanation": "Typo squatting (or URL hijacking) involves registering domain names that are slight misspellings of a popular brand (e.g., 'acmebank.co' instead of 'acmebank.com'). The users are likely making a typo and being redirected to a malicious site, which explains why there's no record of their connection on the legitimate server."
  },
  {
    "question": "24. The organization that Mike works in finds that one of their domains is directing traffic to a competitor's website. When Mike checks, the domain information has been changed, including the contact and other administrative details for the domain. If the domain had not expired, what has most likely occurred?",
    "correct_answer": "C. Domain hijacking",
    "incorrect_answers": [
      "A. DNS hijacking",
      "B. An on-path attack",
      "D. A zero-day attack"
    ],
    "explanation": "Domain hijacking is the act of changing the registration of a domain name without the permission of the original registrant. Since the administrative details were changed, the attacker has effectively stolen control of the domain itself."
  },
  {
    "question": "25. Mahmoud is responsible for managing security at a large university. He has just performed a threat analysis for the network, and based on past incidents and studies of similar networks, he has determined that the most prevalent threat to his network is low-skilled attackers who wish to breach the system, simply to prove they can or for some low-level crime, such as changing a grade. Which term best describes this type of attacker?",
    "correct_answer": "D. Script kiddie",
    "incorrect_answers": [
      "A. Hacktivist",
      "B. Amateur",
      "C. Insider"
    ],
    "explanation": "A script kiddie is a low-skilled attacker who uses pre-existing tools and scripts written by others to launch attacks. Their motivation is often curiosity, bragging rights, or minor mischief, which matches the description perfectly."
  },
  {
    "question": "26. How is phishing different from general spam?",
    "correct_answer": "B. It is intended to acquire credentials or other data.",
    "incorrect_answers": [
      "A. It is sent only to specific targeted individuals.",
      "C. It is sent via SMS.",
      "D. It includes malware in the message."
    ],
    "explanation": "The key differentiator of phishing is its intent. While spam is simply unsolicited commercial email, phishing is a form of social engineering designed to trick the recipient into divulging sensitive information like usernames, passwords, and credit card details."
  },
  {
    "question": "27. Which of the following best describes a collection of computers that have been compromised and are being controlled from one central point?",
    "correct_answer": "B. Botnet",
    "incorrect_answers": [
      "A. Zombienet",
      "C. Nullnet",
      "D. Attacknet"
    ],
    "explanation": "A botnet is a network of private computers infected with malicious software and controlled as a group without the owners' knowledge, e.g., to send spam or launch DDoS attacks. The individual compromised machines are often called 'zombies'."
  },
  {
    "question": "28. Selah includes a question in her procurement request-for-proposal process that asks how long the vendor has been in business and how many existing clients the vendor has. What common issue is this practice intended to help prevent?",
    "correct_answer": "B. Lack of vendor support",
    "incorrect_answers": [
      "A. Supply chain security issues",
      "C. Outsourced code development issues",
      "D. System integration and configuration issues"
    ],
    "explanation": "By verifying a vendor's history and client base, Selah is performing due diligence to ensure the vendor is stable and reputable. This helps mitigate the risk that the vendor will go out of business or be unable to provide long-term support, updates, and patches for their product."
  },
  {
    "question": "29. John is conducting a penetration test of a client's network. He is currently gathering information from sources such as archive.org, netcraft.com, social media, and information websites. What best describes this stage?",
    "correct_answer": "B. Passive reconnaissance",
    "incorrect_answers": [
      "A. Active reconnaissance",
      "C. Initial exploitation",
      "D. Pivot"
    ],
    "explanation": "This is passive reconnaissance (or Open-Source Intelligence - OSINT) because John is gathering information from publicly available sources without directly interacting with the target's systems. Active reconnaissance would involve direct interaction, such as port scanning."
  },
  {
    "question": "30. Alice wants to prevent SSRF attacks. Which of the following will not be helpful for preventing them?",
    "correct_answer": "A. Removing all SQL code from submitted HTTP queries",
    "incorrect_answers": [
      "B. Blocking hostnames like 127.0.01 and localhost",
      "C. Blocking sensitive URLs like /admin",
      "D. Applying whitelist-based input filters"
    ],
    "explanation": "Server-Side Request Forgery (SSRF) involves an attacker tricking a server into making requests on their behalf. Removing SQL code is a defense against SQL Injection, not SSRF. The other options (blocking local addresses, sensitive paths, and using whitelists) are all valid prevention techniques for SSRF."
  },
  {
    "question": "31. What type of attack is based on entering fake entries into a target network's domain name server?",
    "correct_answer": "A. DNS poisoning",
    "incorrect_answers": [
      "B. ARP poisoning",
      "C. XSS poisoning",
      "D. CSRF poisoning"
    ],
    "explanation": "DNS poisoning (or DNS cache poisoning) is an attack where an attacker introduces false information into a DNS server's cache. This causes the server to return an incorrect IP address, diverting traffic to a malicious site."
  },
  {
    "question": "32. Frank has been asked to conduct a penetration test of a small bookkeeping firm. For the test, he has only been given the company name, the domain name for their website, and the IP address of their gateway router. What best describes this type of test?",
    "correct_answer": "C. An unknown environment test",
    "incorrect_answers": [
      "A. A known environment test",
      "B. External test",
      "D. Threat test"
    ],
    "explanation": "This is an unknown environment test, also known as a 'black-box' test. The tester is given very little information about the target network, simulating an attack from an external actor who has no prior knowledge of the internal infrastructure."
  },
  {
    "question": "33. You work for a security company that performs penetration testing for clients. You are conducting a test of an e-commerce company. You discover that after compromising the web server, you can use the web server to launch a second attack into the company's internal network. What best describes this?",
    "correct_answer": "D. A pivot",
    "incorrect_answers": [
      "A. Internal attack",
      "B. Known environment testing",
      "C. Unknown environment testing"
    ],
    "explanation": "A pivot is a penetration testing technique where an attacker uses a compromised system to attack other systems on the same internal network. It allows them to bypass perimeter defences and move deeper into the target environment."
  },
  {
    "question": "34. While investigating a malware outbreak on your company network, you discover something very odd. There is a file that has the same name as a Windows system DLL, and it even has the same API interface, but it handles input very differently, in a manner to help compromise the system, and it appears that applications have been attaching to this file, rather than the real system DLL. What best describes this?",
    "correct_answer": "A. Shimming",
    "incorrect_answers": [
      "B. Trojan horse",
      "C. Backdoor",
      "D. Refactoring"
    ],
    "explanation": "Shimming involves creating a malicious library file that mimics a legitimate one. When an application calls a function, it is redirected to the malicious code in the shim instead of the legitimate DLL, allowing the attacker to intercept or modify the function call."
  },
  {
    "question": "35. Which of the following capabilities is not a key part of a SOAR (security orchestration, automation, and response) tool?",
    "correct_answer": "C. Automated malware analysis",
    "incorrect_answers": [
      "A. Threat and vulnerability management",
      "B. Security incident response",
      "D. Security operations automation"
    ],
    "explanation": "While SOAR platforms integrate with various security tools, automated malware analysis (which involves sandboxing and reverse-engineering malware) is a highly specialised function typically performed by dedicated platforms, not a core feature of SOAR itself. SOAR focuses on automating response workflows."
  },
  {
    "question": "36. John discovers that email from his company's email servers is being blocked because of spam that was sent from a compromised account. What type of lookup can he use to determine what vendors like McAfee and Barracuda have classified his domain as?",
    "correct_answer": "C. A domain reputation lookup",
    "incorrect_answers": [
      "A. An nslookup",
      "B. A tcpdump",
      "D. A SMTP whois"
    ],
    "explanation": "Domain reputation services (like those from McAfee, Barracuda, or Talos) track the behaviour of domains and IPs to identify sources of spam and malware. A domain reputation lookup allows an administrator to check their domain's score and see why it might be blacklisted."
  },
  {
    "question": "37. Frank is a network administrator for a small college. He discovers that several machines on his network are infected with malware. That malware is sending a flood of packets to a target external to the network. What best describes this attack?",
    "correct_answer": "B. DDoS",
    "incorrect_answers": [
      "A. SYN flood",
      "C. Botnet",
      "D. Backdoor"
    ],
    "explanation": "This is a Distributed Denial-of-Service (DDoS) attack. Multiple compromised machines (a botnet) are being used to flood a single target with traffic, overwhelming its resources and making it unavailable to legitimate users."
  },
  {
    "question": "38. Why is SSL stripping a particular danger with open Wi-Fi networks?",
    "correct_answer": "B. Open hotspots do not assert their identity in a secure way.",
    "incorrect_answers": [
      "A. WPA2 is not secure enough to prevent this.",
      "C. Open hotspots can be accessed by any user.",
      "D. 802.11ac is insecure and traffic can be redirected."
    ],
    "explanation": "SSL stripping is an on-path attack where an attacker intercepts a user's request and downgrades an HTTPS connection to an unencrypted HTTP connection. This is particularly dangerous on open Wi-Fi because there is no authentication mechanism to verify the identity of the access point, making it easy for an attacker to position themselves between the user and the internet."
  },
  {
    "question": "39. A sales manager at your company is complaining about slow performance on his computer. When you thoroughly investigate the issue, you find spyware on his computer. He insists that the only thing he has downloaded recently was a freeware stock trading application. What would best explain this situation?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Logic bomb",
      "C. Rootkit",
      "D. Macro virus"
    ],
    "explanation": "A Trojan horse is malware that is disguised as a legitimate piece of software. The user intentionally installs the software (the stock trading app), but it contains a hidden malicious payload (the spyware)."
  },
  {
    "question": "40. When phishing attacks are so focused that they target a specific high-ranking or important individual, they are called what?",
    "correct_answer": "D. Whaling",
    "incorrect_answers": [
      "A. Spear phishing",
      "B. Targeted phishing",
      "C. Phishing"
    ],
    "explanation": "Whaling is a highly targeted form of spear phishing aimed at senior executives or other high-profile targets within an organisation. The term 'whaling' signifies the size and importance of the target."
  },
  {
    "question": "41. What type of threat actors are most likely to have a profit motive for their malicious activities?",
    "correct_answer": "D. Criminal syndicates",
    "incorrect_answers": [
      "A. State actors",
      "B. Script kiddies",
      "C. Hacktivists"
    ],
    "explanation": "Criminal syndicates, or organised crime groups, are almost exclusively motivated by financial gain. They engage in activities like ransomware, data theft for resale, and financial fraud."
  },
  {
    "question": "42. One of your users cannot recall the password for their laptop. You want to recover that password for them. You intend to use a tool/technique that is popular with hackers, and it consists of searching tables of precomputed hashes to recover the password. What best describes this?",
    "correct_answer": "A. Rainbow table",
    "incorrect_answers": [
      "B. Backdoor",
      "C. Social engineering",
      "D. Dictionary attack"
    ],
    "explanation": "A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes. It allows an attacker to look up a hash and instantly find the corresponding plain text password, which is much faster than brute-forcing."
  },
  {
    "question": "43. What risk is commonly associated with a lack of vendor support for a product, such as an outdated version of a device?",
    "correct_answer": "B. Lack of patches or updates",
    "incorrect_answers": [
      "A. Improper data storage",
      "C. Lack of available documentation",
      "D. System integration and configuration issues"
    ],
    "explanation": "When a vendor no longer supports a product, they stop releasing security patches and updates. This leaves the product vulnerable to newly discovered exploits, creating a significant security risk for any organisation still using it."
  },
  {
    "question": "44. You have noticed that when in a crowded area, you sometimes get a stream of unwanted text messages. The messages end when you leave the area. What describes this attack?",
    "correct_answer": "A. Bluejacking",
    "incorrect_answers": [
      "B. Bluesnarfing",
      "C. Evil twin",
      "D. Rogue access point"
    ],
    "explanation": "Bluejacking is the sending of unsolicited messages over Bluetooth to Bluetooth-enabled devices. It is a harmless but annoying prank, where an attacker sends a text message to a nearby device. Bluesnarfing, in contrast, is the theft of information from a device via Bluetooth."
  },
  {
    "question": "45. Dennis uses an on-path attack to cause a system to send HTTPS traffic to his system and then forwards it to the actual server the traffic is intended for. What type of password attack can he conduct with the data he gathers if he captures all the traffic from a login form?",
    "correct_answer": "A. A plain-text password attack",
    "incorrect_answers": [
      "B. A pass-the-hash attack",
      "C. A SQL injection attack",
      "D. A cross-site scripting attack"
    ],
    "explanation": "Because Dennis is performing an on-path (formerly Man-in-the-Middle) attack and terminating the TLS/SSL session, he can view the traffic in plain text. This means he can directly read the username and password submitted in the login form."
  },
  {
    "question": "46. Someone has been rummaging through your company's trash bins seeking to find documents, diagrams, or other sensitive information that has been thrown out. What is this called?",
    "correct_answer": "A. Dumpster diving",
    "incorrect_answers": [
      "B. Trash diving",
      "C. Social engineering",
      "D. Trash engineering"
    ],
    "explanation": "Dumpster diving is a physical reconnaissance technique where an attacker searches through an organisation's refuse to find sensitive information that has been improperly disposed of, such as printouts, notes, or old hard drives."
  },
  {
    "question": "47. Louis is investigating a malware incident on one of the computers on his network. He has discovered unknown software that seems to be opening a port, allowing someone to remotely connect to the computer. This software seems to have been installed at the same time as a small shareware application. Which of the following best describes this malware?",
    "correct_answer": "A. RAT",
    "incorrect_answers": [
      "B. Worm",
      "C. Logic bomb",
      "D. Rootkit"
    ],
    "explanation": "A Remote Access Trojan (RAT) is a type of malware that provides an attacker with full remote administrative control over an infected computer. The description of opening a port for remote connection is a key characteristic of a RAT."
  },
  {
    "question": "48. Jared is responsible for network security at his company. He has discovered behavior on one computer that certainly appears to be a virus. He has even identified a file he thinks might be the virus. However, using three separate antivirus programs, he finds that none can detect the file. Which of the following is most likely to be occurring?",
    "correct_answer": "B. The computer has a zero-day exploit.",
    "incorrect_answers": [
      "A. The computer has a RAT.",
      "C. The computer has a worm.",
      "D. The computer has a rootkit."
    ],
    "explanation": "A zero-day exploit is an attack that targets a previously unknown vulnerability. Because the vulnerability is unknown to the software vendor and security community, antivirus programs will not have a signature to detect it, explaining why the scans are coming up clean."
  },
  {
    "question": "49. Which of the following is not a common means of attacking RFID badges?",
    "correct_answer": "D. Birthday attacks",
    "incorrect_answers": [
      "A. Data capture",
      "B. Spoofing",
      "C. Denial-of-service"
    ],
    "explanation": "Birthday attacks are cryptographic attacks related to finding hash collisions. Data capture (skimming), spoofing (cloning), and denial-of-service (jamming) are all common attacks against RFID systems. A birthday attack is not relevant in this context."
  },
  {
    "question": "50. Your wireless network has been breached. It appears the attacker modified a portion of data used with the stream cipher and used this to expose wirelessly encrypted data. What is this attack called?",
    "correct_answer": "C. IV attack",
    "incorrect_answers": [
      "A. Evil twin",
      "B. Rogue WAP",
      "D. WPS attack"
    ],
    "explanation": "An Initialization Vector (IV) attack targets weaknesses in the way IVs are generated and used in older wireless encryption protocols like WEP. By analysing the IVs in captured packets, an attacker can deduce the WEP key and decrypt the traffic."
  },
  {
    "question": "51. The company that Scott works for has experienced a data breach, and the personal information of thousands of customers has been exposed. Which of the following impact categories is not a concern as described in this scenario?",
    "correct_answer": "C. Availability loss",
    "incorrect_answers": [
      "A. Financial",
      "B. Reputation",
      "D. Data loss"
    ],
    "explanation": "Availability loss refers to the disruption of services, which is not mentioned in the scenario. A data breach directly involves data loss, and will almost certainly have financial (fines, cleanup costs) and reputational (loss of customer trust) impacts."
  },
  {
    "question": "52. What type of attack exploits the trust that a website has for an authenticated user to attack that website by spoofing requests from the trusted user?",
    "correct_answer": "B. Cross-site request forgery",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. Bluejacking",
      "D. Evil twin"
    ],
    "explanation": "Cross-Site Request Forgery (CSRF or XSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they are currently authenticated. The attacker tricks the user's browser into sending a forged request to the trusted site."
  },
  {
    "question": "53. What purpose does a fusion center serve in cyberintelligence activities?",
    "correct_answer": "A. It promotes information sharing between agencies or organizations.",
    "incorrect_answers": [
      "B. It combines security technologies to create new, more powerful tools.",
      "C. It generates power for the local community in a secure way.",
      "D. It separates information by classification ratings to avoid accidental distribution."
    ],
    "explanation": "A fusion centre is a collaborative effort of two or more agencies that provides resources, expertise, and information to the centre with the goal of maximising their ability to detect, prevent, investigate, and respond to criminal and terrorist activity."
  },
  {
    "question": "54. CVE is an example of what type of feed?",
    "correct_answer": "B. A vulnerability feed",
    "incorrect_answers": [
      "A. A threat intelligence feed",
      "C. A critical infrastructure listing feed",
      "D. A critical virtualization exploits feed"
    ],
    "explanation": "CVE stands for Common Vulnerabilities and Exposures. It is a list of publicly disclosed computer security flaws. A CVE feed provides standardized identifiers for known vulnerabilities, making it easier to share data across different vulnerability management tools and services."
  },
  {
    "question": "55. What type of attack is a birthday attack?",
    "correct_answer": "B. A cryptographic attack",
    "incorrect_answers": [
      "A. A social engineering attack",
      "C. A network denial-of-service attack",
      "D. A TCP/IP protocol attack"
    ],
    "explanation": "A birthday attack is a type of cryptographic attack that belongs to a class of brute-force attacks. It exploits the mathematics behind the birthday problem in probability theory to find collisions in hash functions."
  },
  {
    "question": "56. Juanita is a network administrator for Acme Company. Some users complain that they keep getting dropped from the network. When Juanita checks the logs for the wireless access point (WAP), she finds that a deauthentication packet has been sent to the WAP from the users' IP addresses. What seems to be happening here?",
    "correct_answer": "B. Disassociation attack",
    "incorrect_answers": [
      "A. Problem with users' Wi-Fi configuration",
      "C. Session hijacking",
      "D. Backdoor attack"
    ],
    "explanation": "This is a disassociation attack (or deauthentication attack). The attacker is sending spoofed deauthentication frames to the WAP, making it appear as if they are coming from the victim's machine. This forces the user off the network, often as a precursor to an evil twin attack."
  },
  {
    "question": "57. John has discovered that an attacker is trying to get network passwords by using software that attempts a number of passwords from a list of common passwords. What type of attack is this?",
    "correct_answer": "A. Dictionary",
    "incorrect_answers": [
      "B. Rainbow table",
      "C. Brute force",
      "D. Session hijacking"
    ],
    "explanation": "A dictionary attack is a form of brute-force attack that uses a predefined list of words (a dictionary) to try and guess a password. This is faster than a pure brute-force attack, which tries every possible combination of characters."
  },
  {
    "question": "58. You are a network security administrator for a bank. You discover that an attacker has exploited a flaw in OpenSSL and forced some connections to move to a weak cipher suite version of TLS, which the attacker could breach. What type of attack was this?",
    "correct_answer": "B. Downgrade attack",
    "incorrect_answers": [
      "A. Disassociation attack",
      "C. Session hijacking",
      "D. Brute force"
    ],
    "explanation": "A downgrade attack is an on-path attack where an attacker forces a system to abandon a higher-security mode of operation (like a strong TLS cipher suite) in favour of an older, lower-security mode (a weak cipher suite) that is easier to break."
  },
  {
    "question": "59. When an attacker tries to find an input value that will produce the same hash as a password, what type of attack is this?",
    "correct_answer": "D. Collision attack",
    "incorrect_answers": [
      "A. Rainbow table",
      "B. Brute force",
      "C. Session hijacking"
    ],
    "explanation": "A collision attack is a cryptographic attack where an attacker attempts to find two different inputs that produce the same hash output. In the context of passwords, this could allow an attacker to create a different password that has the same hash as the victim's, potentially granting them access."
  },
  {
    "question": "60. Farès is the network security administrator for a company that creates advanced routers and switches. He has discovered that his company's networks have been subjected to a series of advanced attacks over a period of time. What best describes this attack?",
    "correct_answer": "C. APT",
    "incorrect_answers": [
      "A. DDoS",
      "B. Brute force",
      "D. Disassociation attack"
    ],
    "explanation": "An Advanced Persistent Threat (APT) is a sophisticated, long-term, and targeted attack where an intruder gains unauthorised access to a network and remains undetected for an extended period. The goal is typically data exfiltration rather than causing damage."
  },
  {
    "question": "61. What type of information is phishing not commonly intended to acquire?",
    "correct_answer": "B. Email addresses",
    "incorrect_answers": [
      "A. Passwords",
      "C. Credit card numbers",
      "D. Personal information"
    ],
    "explanation": "Phishing attacks are designed to acquire sensitive, actionable data like passwords and financial details. While attackers use email addresses to send the phishing emails, their goal is not usually to acquire more email addresses, but rather the credentials associated with them."
  },
  {
    "question": "62. John is running an IDS on his network. Users sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
    "correct_answer": "A. False positive",
    "incorrect_answers": [
      "B. False negative",
      "C. False trigger",
      "D. False flag"
    ],
    "explanation": "A false positive is an alert that incorrectly indicates that malicious activity is occurring. In this case, the Intrusion Detection System (IDS) is flagging legitimate traffic as an attack, creating a false alarm."
  },
  {
    "question": "63. Scott discovers that malware has been installed on one of the systems he is responsible for. Shortly afterward passwords used by the user that the system is assigned to are discovered to be in use by attackers. What type of malicious program should Scott look for on the compromised system?",
    "correct_answer": "B. A keylogger",
    "incorrect_answers": [
      "A. A rootkit",
      "C. A worm",
      "D. None of the above"
    ],
    "explanation": "A keylogger is a type of spyware that records the keystrokes made by a user. This is a common method for attackers to capture usernames, passwords, and other sensitive information as it is being typed."
  },
  {
    "question": "64. You are performing a penetration test of your company's network. As part of the test, you will be given a login with minimal access and will attempt to gain administrative access with this account. What is this called?",
    "correct_answer": "A. Privilege escalation",
    "incorrect_answers": [
      "B. Session hijacking",
      "C. Root grabbing",
      "D. Climbing"
    ],
    "explanation": "Privilege escalation is the act of exploiting a bug, design flaw, or configuration oversight in an operating system or software application to gain elevated access to resources that are normally protected from an application or user."
  },
  {
    "question": "65. Matt discovers that a system on his network is sending hundreds of Ethernet frames to the switch it is connected to, with each frame containing a different source MAC address. What type of attack has he discovered?",
    "correct_answer": "B. MAC flooding",
    "incorrect_answers": [
      "A. Etherspam",
      "C. Hardware spoofing",
      "D. MAC hashing"
    ],
    "explanation": "A MAC flooding attack attempts to overwhelm a network switch's Content Addressable Memory (CAM) table, which stores MAC address-to-port mappings. By sending a flood of frames with fake source MAC addresses, the attacker can force the switch into 'fail-open' mode, where it acts like a hub and broadcasts all traffic to all ports, allowing the attacker to sniff the traffic."
  },
  {
    "question": "66. Spyware is an example of what type of malware?",
    "correct_answer": "B. PUP",
    "incorrect_answers": [
      "A. Trojan",
      "C. RAT",
      "D. Ransomware"
    ],
    "explanation": "Spyware is often considered a Potentially Unwanted Program (PUP). While not always overtly malicious like a virus, it performs unwanted actions such as tracking user activity, displaying ads, or collecting personal information without the user's explicit consent."
  },
  {
    "question": "67. Mary has discovered that a web application used by her company does not always handle multithreading properly, particularly when multiple threads access the same variable. This could allow an attacker who discovered this vulnerability to exploit it and crash the server. What type of error has Mary discovered?",
    "correct_answer": "C. Race conditions",
    "incorrect_answers": [
      "A. Buffer overflow",
      "B. Logic bomb",
      "D. Improper error handling"
    ],
    "explanation": "A race condition occurs when the behaviour of a system depends on the sequence or timing of uncontrollable events. When multiple threads access and manipulate the same data concurrently, it can lead to unexpected outcomes, crashes, or security vulnerabilities."
  },
  {
    "question": "68. An attacker is trying to get access to your network. He is sending users on your network a link to a new game with a hacked license code program. However, the game files also include software that will give the attacker access to any machine that it is installed on. What type of attack is this?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Rootkit",
      "C. Spyware",
      "D. Boot sector virus"
    ],
    "explanation": "A Trojan horse is malware that misleads users of its true intent. The game appears legitimate, but it carries a malicious payload (the backdoor software). The user voluntarily installs the game, and in doing so, also installs the malware."
  },
  {
    "question": "69. The following image shows a report from an OpenVAS system. What type of weak configuration is shown here?",
    "correct_answer": "D. Unsecure protocols",
    "incorrect_answers": [
      "A. Weak encryption",
      "B. Unsecured administrative accounts",
      "C. Open ports and services"
    ],
    "explanation": "Without the image, we must infer from common OpenVAS findings. OpenVAS often flags the use of insecure protocols like Telnet, FTP, and older versions of SSL/TLS. These protocols transmit data in cleartext or have known vulnerabilities, making them a significant security risk."
  },
  {
    "question": "70. While conducting a penetration test, Annie scans for systems on the network she has gained access to. She discovers another system within the same network that has the same accounts and user types as the one she is on. Since she already has a valid user account on the system she has already accessed, she is able to log in to it. What type of technique is this?",
    "correct_answer": "A. Lateral movement",
    "incorrect_answers": [
      "B. Privilege escalation",
      "C. Privilege retention",
      "D. Vertical movement"
    ],
    "explanation": "Lateral movement is the process by which an attacker moves from one compromised host to another within the same network. Reusing credentials to access other systems is a classic example of this technique."
  },
  {
    "question": "71. Amanda scans a Red Hat Linux server that she believes is fully patched and discovers that the Apache version on the server is reported as vulnerable to an exploit from a few months ago. When she checks to see if she is missing patches, Apache is fully patched. What has occurred?",
    "correct_answer": "A. A false positive",
    "incorrect_answers": [
      "B. An automatic update failure",
      "C. A false negative",
      "D. An Apache version mismatch"
    ],
    "explanation": "This is a common false positive. Linux distributions like Red Hat often backport security fixes to older, stable versions of software rather than upgrading to the newest version. The vulnerability scanner sees the old version number and flags it as vulnerable, even though the security patch has been applied."
  },
  {
    "question": "72. When a program has variables, especially arrays, and does not check the boundary values before inputting data, what attack is the program vulnerable to?",
    "correct_answer": "C. Buffer overflow",
    "incorrect_answers": [
      "A. XSS",
      "B. CSRF",
      "D. Logic bomb"
    ],
    "explanation": "This describes a buffer overflow vulnerability. If a program allows more data to be written to a buffer (like an array) than it is allocated to hold, the excess data will overwrite adjacent memory, which can lead to program crashes or arbitrary code execution."
  },
  {
    "question": "73. Tracy is concerned that the software she wants to download may not be trustworthy, so she searches for it and finds many postings claiming that the software is legitimate. If she installs the software and later discovers it is malicious and that malicious actors have planted those reviews, what principle of social engineering have they used?",
    "correct_answer": "C. Consensus",
    "incorrect_answers": [
      "A. Scarcity",
      "B. Familiarity",
      "D. Trust"
    ],
    "explanation": "Consensus, or social proof, is a psychological phenomenon where people assume the actions of others in an attempt to reflect correct behaviour for a given situation. By faking positive reviews, the attackers make Tracy believe that many other people trust the software, influencing her to do the same."
  },
  {
    "question": "74. Which of the following best describes malware that will execute some malicious activity when a particular condition is met (i.e., if the condition is met, then executed)?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Boot sector virus",
      "C. Buffer overflow",
      "D. Sparse infector virus"
    ],
    "explanation": "A logic bomb is a piece of code that lies dormant until a specific condition or trigger occurs. The trigger could be a specific date and time, the presence or absence of a file, or a particular user action."
  },
  {
    "question": "75. What term describes using conversational tactics as part of a social engineering exercise to extract information from targets?",
    "correct_answer": "B. Elicitation",
    "incorrect_answers": [
      "A. Pretexting",
      "C. Impersonation",
      "D. Intimidation"
    ],
    "explanation": "Elicitation is the strategic use of conversation to extract information from people without giving them the feeling that they are being interrogated. It's a key skill in social engineering and intelligence gathering."
  },
  {
    "question": "76. Telnet, RSH, and FTP are all examples of what?",
    "correct_answer": "B. Unsecure protocols",
    "incorrect_answers": [
      "A. File transfer protocols",
      "C. Core protocols",
      "D. Open ports"
    ],
    "explanation": "These are all examples of unsecure protocols because they transmit data, including usernames and passwords, in cleartext. They should be replaced with secure alternatives like SSH (for Telnet/RSH) and SFTP/FTPS (for FTP)."
  },
  {
    "question": "77. Scott wants to determine where an organization's wireless network can be accessed from. What testing techniques are his most likely options?",
    "correct_answer": "B. War driving and war flying",
    "incorrect_answers": [
      "A. OSINT and active scans",
      "C. Social engineering and active scans",
      "D. OSINT and war driving"
    ],
    "explanation": "War driving is the act of searching for Wi-Fi networks from a moving vehicle. War flying is the same concept but from an aircraft (often a drone). These techniques are used to map the physical footprint of a wireless network and identify potential rogue access points."
  },
  {
    "question": "78. Gerald is a network administrator for a small financial services company. Users are reporting odd behavior that appears to be caused by a virus on their machines. After isolating the machines that he believes are infected, Gerald analyzes them. He finds that all the infected machines received an email purporting to be from accounting, with an Excel spreadsheet, and the users opened the spreadsheet. What is the most likely issue on these machines?",
    "correct_answer": "A. A macro virus",
    "incorrect_answers": [
      "B. A boot sector virus",
      "C. A Trojan horse",
      "D. A RAT"
    ],
    "explanation": "A macro virus is a virus that is written in a macro language, such as the one used by Microsoft Office applications. The virus is embedded in a document (like an Excel spreadsheet) and executes when the document is opened, infecting the user's computer."
  },
  {
    "question": "79. Your company has hired an outside security firm to perform various tests of your network. During the vulnerability scan, you will provide that company with logins for various systems (i.e., database server, application server, web server, etc.) to aid in their scan. What best describes this?",
    "correct_answer": "C. A credentialed scan",
    "incorrect_answers": [
      "A. A known environment test",
      "B. A gray-box test",
      "D. An intrusive scan"
    ],
    "explanation": "A credentialed scan is a vulnerability scan performed with valid user credentials. This allows the scanner to log in to the target system and perform a more thorough check for vulnerabilities, including issues related to software versions, patch levels, and local configurations that are not visible from the outside."
  },
  {
    "question": "80. Steve discovers the following code on a system. What language is it written in, and what does it do?\nimport socket as skt\nfor port in range (1,9999):\ntry:\nsc=skt.socket(askt.AF_INET,skt.SOCK_STREAM)\nsc.settimeout(900)\nsc.connect(('127.0.0.1,port))\nprint '%d:OPEN' % (port)\nsc.close\nexcept: continue",
    "correct_answer": "B. Python, port scanning",
    "incorrect_answers": [
      "A. Perl, vulnerability scanning",
      "C. Bash, vulnerability scanning",
      "D. PowerShell, port scanning"
    ],
    "explanation": "The code uses Python's `socket` library to attempt to connect to a range of ports (1 to 9999) on the local machine ('127.0.0.1'). This is a simple script for port scanning to identify open ports."
  },
  {
    "question": "81. Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "correct_answer": "C. Botnet",
    "incorrect_answers": [
      "A. Phishing",
      "B. Adware",
      "D. Trojan"
    ],
    "explanation": "A botnet, a network of compromised 'zombie' computers, is the primary tool for launching a DDoS attack. The attacker commands the entire botnet to send traffic to the target, overwhelming it with the sheer volume of requests from many different sources."
  },
  {
    "question": "82. Amanda discovers that a member of her organization's staff has installed a remote access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "correct_answer": "B. Insider threat",
    "incorrect_answers": [
      "A. Zero-day",
      "C. Misconfiguration",
      "D. Weak encryption"
    ],
    "explanation": "An insider threat is a security risk that originates from within the organisation. This can be a current or former employee, contractor, or business partner who has inside information concerning the organisation's security practices, data, and computer systems."
  },
  {
    "question": "83. Postings from Russian agents during the 2016 U.S. presidential campaign to Facebook and Twitter are an example of what type of effort?",
    "correct_answer": "B. A social media influence campaign",
    "incorrect_answers": [
      "A. Impersonation",
      "C. Asymmetric warfare",
      "D. A watering hole attack"
    ],
    "explanation": "This is a prime example of an influence campaign, where social media platforms are used to manipulate public opinion, spread disinformation, and sow discord by creating and promoting divisive content."
  },
  {
    "question": "84. Juan is responsible for incident response at a large financial institution. He discovers that the company Wi-Fi has been breached. The attacker used the same login credentials that ship with the wireless access point (WAP). The attacker was able to use those credentials to access the WAP administrative console and make changes. Which of the following best describes what caused this vulnerability to exist?",
    "correct_answer": "C. Using default settings",
    "incorrect_answers": [
      "A. Improperly configured accounts",
      "B. Untrained users",
      "D. Failure to patch systems"
    ],
    "explanation": "The vulnerability was caused by the failure to change the default administrative credentials on the wireless access point. Many devices ship with well-known default usernames and passwords, which must be changed immediately upon installation."
  },
  {
    "question": "85. Elizabeth is investigating a network breach at her company. She discovers a program that was able to execute code within the address space of another process by using the target process to load a specific library. What best describes this attack?",
    "correct_answer": "D. DLL injection",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Session hijacking",
      "C. Buffer overflow"
    ],
    "explanation": "DLL injection is a technique used for running code within the address space of another process by forcing it to load a dynamic-link library (DLL). The attacker can then use this to perform actions as if they were the target process."
  },
  {
    "question": "86. Which of the following threat actors is most likely to be associated with an advanced persistent threat (APT)?",
    "correct_answer": "B. State actors",
    "incorrect_answers": [
      "A. Hacktivists",
      "C. Script kiddies",
      "D. Insider threats"
    ],
    "explanation": "State-sponsored actors (or nation-states) are the groups most often associated with Advanced Persistent Threats (APTs). They have the resources, skills, and long-term objectives (like espionage or sabotage) to conduct such sophisticated and sustained campaigns."
  },
  {
    "question": "87. What is the primary difference between an intrusive and a nonintrusive vulnerability scan?",
    "correct_answer": "C. An intrusive scan could potentially disrupt operations.",
    "incorrect_answers": [
      "A. An intrusive scan is a penetration test.",
      "B. A nonintrusive scan is just a document check.",
      "D. A nonintrusive scan won't find most vulnerabilities."
    ],
    "explanation": "A non-intrusive scan only identifies vulnerabilities, while an intrusive scan attempts to actively exploit them. This active exploitation carries the risk of causing a denial of service or otherwise disrupting the normal operation of the target system."
  },
  {
    "question": "88. Your company outsourced development of an accounting application to a local programming firm. After three months of using the product, one of your administrators discovers that the developers have inserted a way to log in and bypass all security and authentication. What best describes this?",
    "correct_answer": "C. Backdoor",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "A backdoor is a hidden method of bypassing normal authentication or encryption in a computer system, a product, or an embedded device. In this case, the developers intentionally created a secret entry point for their own use."
  },
  {
    "question": "89. Daryl is investigating a recent breach of his company's web server. The attacker used sophisticated techniques and then defaced the website, leaving messages that were denouncing the company's public policies. He and his team are trying to determine the type of actor who most likely committed the breach. Based on the information provided, who was the most likely threat actor?",
    "correct_answer": "D. Hacktivists",
    "incorrect_answers": [
      "A. A script",
      "B. A nation-state",
      "C. Organized crime"
    ],
    "explanation": "Hacktivists are individuals or groups who use hacking to promote a political agenda or social change. Defacing a website with messages denouncing a company's policies is a classic hacktivist tactic."
  },
  {
    "question": "90. What two techniques are most commonly associated with a pharming attack?",
    "correct_answer": "A. Modifying the hosts file on a PC or exploiting a DNS vulnerability on a trusted DNS server",
    "incorrect_answers": [
      "B. Phishing many users and harvesting email addresses from them",
      "C. Phishing many users and harvesting many passwords from them",
      "D. Spoofing DNS server IP addresses or modifying the hosts file on a PC"
    ],
    "explanation": "Pharming is a cyberattack intended to redirect a website's traffic to another, fake site. This is typically achieved either by poisoning a DNS server's cache or by modifying the local 'hosts' file on an individual computer."
  },
  {
    "question": "91. Angela reviews the authentication logs for her website and sees attempts from many different accounts using the same set of passwords. What is this attack technique called?",
    "correct_answer": "B. Password spraying",
    "incorrect_answers": [
      "A. Brute forcing",
      "C. Limited login attacks",
      "D. Account spinning"
    ],
    "explanation": "Password spraying is a type of brute-force attack where an attacker tries a small number of commonly used passwords against many different user accounts. This avoids locking out individual accounts that have failed login attempt limits."
  },
  {
    "question": "92. When investigating breaches and attempting to attribute them to specific threat actors, which of the following is not one of the indicators of an APT?",
    "correct_answer": "C. The attack comes from a foreign IP address.",
    "incorrect_answers": [
      "A. Long-term access to the target",
      "B. Sophisticated attacks",
      "D. The attack is sustained over time."
    ],
    "explanation": "While many APTs originate from foreign countries, the source IP address is not a reliable indicator, as attackers frequently use proxies and compromised systems around the world to hide their true location. The key indicators are the sophistication, persistence, and long-term nature of the attack."
  },
  {
    "question": "93. Charles discovers that an attacker has used a vulnerability in a web application that his company runs and has then used that exploit to obtain root privileges on the web server. What type of attack has he discovered?",
    "correct_answer": "B. Privilege escalation",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. A SQL injection",
      "D. A race condition"
    ],
    "explanation": "Privilege escalation is the act of exploiting a flaw to gain elevated access. The attacker started with the permissions of the web application user and 'escalated' them to gain the highest level of access (root)."
  },
  {
    "question": "94. What type of attack uses a second wireless access point (WAP) that broadcasts the same SSID as a legitimate access point, in an attempt to get users to connect to the attacker's WAP?",
    "correct_answer": "A. Evil twin",
    "incorrect_answers": [
      "B. IP spoofing",
      "C. Trojan horse",
      "D. Privilege escalation"
    ],
    "explanation": "An evil twin is a fraudulent Wi-Fi access point that appears to be legitimate but is set up to eavesdrop on wireless communications. It broadcasts the same Service Set Identifier (SSID) as the legitimate network to trick users into connecting to it."
  },
  {
    "question": "95. Which of the following best describes a zero-day vulnerability?",
    "correct_answer": "A. A vulnerability that the vendor is not yet aware of",
    "incorrect_answers": [
      "B. A vulnerability that has not yet been breached",
      "C. A vulnerability that can be quickly exploited (i.e., in zero days)",
      "D. A vulnerability that will give the attacker brief access (i.e., zero days)"
    ],
    "explanation": "A zero-day vulnerability is a flaw in software or hardware that is unknown to the party or parties responsible for patching or otherwise fixing the flaw. Attackers can exploit it before a patch is available, giving them 'zero days' to prepare."
  },
  {
    "question": "96. What type of attack involves adding an expression or phrase such as adding “SAFE” to mail headers?",
    "correct_answer": "D. Prepending",
    "incorrect_answers": [
      "A. Pretexting",
      "B. Phishing",
      "C. SQL injection"
    ],
    "explanation": "Prepending is a social engineering technique used to trick users by adding text to a message to make it appear more legitimate. For example, an attacker might prepend '[EXTERNAL]' or '[SAFE]' to an email subject line to manipulate the user's perception of its origin or safety."
  },
  {
    "question": "97. Charles wants to ensure that his outsourced code development efforts are as secure as possible. Which of the following is not a common practice to ensure secure remote code development?",
    "correct_answer": "D. Audit all underlying libraries used in the code.",
    "incorrect_answers": [
      "A. Ensure developers are trained on secure coding techniques.",
      "B. Set defined acceptance criteria for code security.",
      "C. Test code using automated and manual security testing systems."
    ],
    "explanation": "While auditing third-party libraries is a good practice (Software Composition Analysis), it is often prohibitively difficult to audit *all* of them. The other options—training, setting criteria, and testing—are all standard and essential practices for secure software development."
  },
  {
    "question": "98. You have discovered that there are entries in your network's domain name server that point legitimate domains to unknown and potentially harmful IP addresses. What best describes this type of attack?",
    "correct_answer": "C. DNS poisoning",
    "incorrect_answers": [
      "A. A backdoor",
      "B. An APT",
      "D. A Trojan horse"
    ],
    "explanation": "DNS poisoning, or DNS cache poisoning, is the act of corrupting a Domain Name System (DNS) server's cache with incorrect information. This can cause DNS lookups to return the wrong IP address, redirecting users to malicious websites."
  },
  {
    "question": "99. Spyware is an example of what type of malicious software?",
    "correct_answer": "C. A PUP",
    "incorrect_answers": [
      "A. A CAT",
      "B. A worm",
      "D. A Trojan"
    ],
    "explanation": "Spyware often falls into the category of a Potentially Unwanted Program (PUP). These are programs that may not be explicitly malicious but perform undesirable actions, such as tracking browsing habits or displaying pop-up ads, and are often installed without the user's full understanding."
  },
  {
    "question": "100. What best describes an attack that attaches some malware to a legitimate program so that when the user installs the legitimate program, they inadvertently install the malware?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Backdoor",
      "C. RAT",
      "D. Polymorphic virus"
    ],
    "explanation": "This is the definition of a Trojan horse. The malware is hidden within a seemingly harmless program, tricking the user into installing it. Unlike a virus, a Trojan does not replicate itself."
  }
]
