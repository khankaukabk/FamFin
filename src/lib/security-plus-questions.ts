
export const questions = [
  {
    "question": "1. Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
    "correct_answer": "C. Spear phishing",
    "incorrect_answers": [
      "A. Phishing",
      "B. Social engineering",
      "D. Trojan horse"
    ]
  },
  {
    "question": "2. You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Worm",
      "C. Trojan horse",
      "D. Rootkit"
    ]
  },
  {
    "question": "3. You are responsible for incident response at Acme Bank. The Acme Bank website has been attacked. The attacker used the login screen, but rather than enter login credentials, they entered some odd text: ' or '1' = '1 . What is the best description for this attack?",
    "correct_answer": "C. SQL injection",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "B. Cross-site request forgery",
      "D. ARP poisoning"
    ]
  },
  {
    "question": "4. Users are complaining that they cannot connect to the wireless network. You discover that the WAPs are being subjected to a wireless attack designed to block their Wi-Fi signals. Which of the following is the best label for this attack?",
    "correct_answer": "B. Jamming",
    "incorrect_answers": [
      "A. IV attack",
      "C. WPS attack",
      "D. Botnet"
    ]
  },
  {
    "question": "5. Frank is deeply concerned about attacks to his company's ecommerce server. He is particularly worried about cross-site scripting and SQL injection. Which of the following would best defend against these two specific attacks?",
    "correct_answer": "B. Input validation",
    "incorrect_answers": [
      "A. Encrypted web traffic",
      "C. A firewall",
      "D. An IDS"
    ]
  },
  {
    "question": "6. You are responsible for network security at Acme Company. Users have been reporting that personal data is being stolen when using the wireless network. They all insist they only connect to the corporate wireless access point (AP). However, logs for the AP show that these users have not connected to it. Which of the following could best explain this situation?",
    "correct_answer": "C. Rogue access point",
    "incorrect_answers": [
      "A. Session hijacking",
      "B. Clickjacking",
      "D. Bluejacking"
    ]
  },
  {
    "question": "7. What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
    "correct_answer": "C. Cross-site scripting",
    "incorrect_answers": [
      "A. SQL injection",
      "B. Clickjacking",
      "D. Bluejacking"
    ]
  },
  {
    "question": "8. Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
    "correct_answer": "D. Encrypting password plain text using symmetric encryption",
    "incorrect_answers": [
      "A. Use of a salt",
      "B. Use of a pepper",
      "C. Use of a purpose-built password hashing algorithm"
    ]
  },
  {
    "question": "9. What term is used to describe spam over Internet messaging services?",
    "correct_answer": "A. SPIM",
    "incorrect_answers": [
      "B. SMSPAM",
      "C. IMSPAM",
      "D. TwoFaceTiming"
    ]
  },
  {
    "question": "10. Susan is analyzing the source code for an application and discovers a pointer de-reference and returns NULL. This causes the program to attempt to read from the NULL pointer and results in a segmentation fault. What impact could this have for the application?",
    "correct_answer": "B. A denial-of-service condition",
    "incorrect_answers": [
      "A. A data breach",
      "C. Permissions creep",
      "D. Privilege escalation"
    ]
  },
  {
    "question": "11. Teresa is the security manager for a mid-sized insurance company. She receives a call from law enforcement, telling her that some computers on her network participated in a massive denial-of-service (DoS) attack. Teresa is certain that none of the employees at her company would be involved in a cybercrime. What would best explain this scenario?",
    "correct_answer": "C. The machines are bots.",
    "incorrect_answers": [
      "A. It is a result of social engineering.",
      "B. The machines all have backdoors.",
      "D. The machines are infected with crypto-viruses."
    ]
  },
  {
    "question": "12. Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
    "correct_answer": "C. Indicators of compromise",
    "incorrect_answers": [
      "A. Predictive analysis",
      "B. OSINT",
      "D. Threat maps"
    ]
  },
  {
    "question": "13. Chris needs visibility into connection attempts through a firewall because he believes that a TCP handshake is not properly occurring. What security information and event management (SIEM) capability is best suited to troubleshooting this issue?",
    "correct_answer": "B. Packet capture",
    "incorrect_answers": [
      "A. Reviewing reports",
      "C. Sentiment analysis",
      "D. Log collection and analysis"
    ]
  },
  {
    "question": "14. Chris wants to detect a potential insider threat using his security information and event management (SIEM) system. What capability best matches his needs?",
    "correct_answer": "D. User behavior analysis",
    "incorrect_answers": [
      "A. Sentiment analysis",
      "B. Log aggregation",
      "C. Security monitoring"
    ]
  },
  {
    "question": "15. Chris has hundreds of systems spread across multiple locations and wants to better handle the amount of data that they create. What two technologies can help with this?",
    "correct_answer": "A. Log aggregation and log collectors",
    "incorrect_answers": [
      "B. Packet capture and log aggregation",
      "C. Security monitoring and log collectors",
      "D. Sentiment analysis and user behavior analysis"
    ]
  },
  {
    "question": "16. What type of security team establishes the rules of engagement for a cybersecurity exercise?",
    "correct_answer": "B. White team",
    "incorrect_answers": [
      "A. Blue team",
      "C. Purple team",
      "D. Red team"
    ]
  },
  {
    "question": "17. Cynthia is concerned about attacks against an application programming interface (API) that her company provides for its customers. What should she recommend to ensure that the API is only used by customers who have paid for the service?",
    "correct_answer": "A. Require authentication.",
    "incorrect_answers": [
      "B. Install and configure a firewall.",
      "C. Filter by IP address.",
      "D. Install and use an IPS."
    ]
  },
  {
    "question": "18. What type of attack is based on sending more data to a target variable than the data can actually hold?",
    "correct_answer": "B. Buffer overflow",
    "incorrect_answers": [
      "A. Bluesnarfing",
      "C. Bluejacking",
      "D. Cross-site scripting"
    ]
  },
  {
    "question": "19. An email arrives telling Gurvinder that there is a limited time to act to get a software package for free and that the first 50 downloads will not have to be paid for. What social engineering principle is being used against him?",
    "correct_answer": "A. Scarcity",
    "incorrect_answers": [
      "B. Intimidation",
      "C. Authority",
      "D. Consensus"
    ]
  },
  {
    "question": "20. You have been asked to test your company network for security issues. The specific test you are conducting involves primarily using automated and semiautomated tools to look for known vulnerabilities with the various systems on your network. Which of the following best describes this type of test?",
    "correct_answer": "A. Vulnerability scan",
    "incorrect_answers": [
      "B. Penetration test",
      "C. Security audit",
      "D. Security test"
    ]
  },
  {
    "question": "21. Susan wants to reduce the likelihood of successful credential harvesting attacks via her organization's commercial websites. Which of the following is not a common prevention method aimed at stopping credential harvesting?",
    "correct_answer": "C. Use of complex usernames",
    "incorrect_answers": [
      "A. Use of multifactor authentication",
      "B. User awareness training",
      "D. Limiting or preventing use of third-party web scripts and plugins"
    ]
  },
  {
    "question": "22. Greg wants to gain admission to a network which is protected by a network access control (NAC) system that recognized the hardware address of systems. How can he bypass this protection?",
    "correct_answer": "C. Use MAC cloning to clone a legitimate MAC address.",
    "incorrect_answers": [
      "A. Spoof a legitimate IP address.",
      "B. Conduct a denial-of-service attack against the NAC system.",
      "D. None of the above"
    ]
  },
  {
    "question": "23. Coleen is the web security administrator for an online auction website. A small number of users are complaining that when they visit the website it does not appear to be the correct site. Coleen checks and she can visit the site without any problem, even from computers outside the network. She also checks the web server log and there is no record of those users ever connecting. Which of the following might best explain this?",
    "correct_answer": "A. Typo squatting",
    "incorrect_answers": [
      "B. SQL injection",
      "C. Cross-site scripting",
      "D. Cross-site request forgery"
    ]
  },
  {
    "question": "24. The organization that Mike works in finds that one of their domains is directing traffic to a competitor's website. When Mike checks, the domain information has been changed, including the contact and other administrative details for the domain. If the domain had not expired, what has most likely occurred?",
    "correct_answer": "C. Domain hijacking",
    "incorrect_answers": [
      "A. DNS hijacking",
      "B. An on-path attack",
      "D. A zero-day attack"
    ]
  },
  {
    "question": "25. Mahmoud is responsible for managing security at a large university. He has just performed a threat analysis for the network, and based on past incidents and studies of similar networks, he has determined that the most prevalent threat to his network is low-skilled attackers who wish to breach the system, simply to prove they can or for some low-level crime, such as changing a grade. Which term best describes this type of attacker?",
    "correct_answer": "D. Script kiddie",
    "incorrect_answers": [
      "A. Hacktivist",
      "B. Amateur",
      "C. Insider"
    ]
  },
  {
    "question": "26. How is phishing different from general spam?",
    "correct_answer": "B. It is intended to acquire credentials or other data.",
    "incorrect_answers": [
      "A. It is sent only to specific targeted individuals.",
      "C. It is sent via SMS.",
      "D. It includes malware in the message."
    ]
  },
  {
    "question": "27. Which of the following best describes a collection of computers that have been compromised and are being controlled from one central point?",
    "correct_answer": "B. Botnet",
    "incorrect_answers": [
      "A. Zombienet",
      "C. Nullnet",
      "D. Attacknet"
    ]
  },
  {
    "question": "28. Selah includes a question in her procurement request-for-proposal process that asks how long the vendor has been in business and how many existing clients the vendor has. What common issue is this practice intended to help prevent?",
    "correct_answer": "B. Lack of vendor support",
    "incorrect_answers": [
      "A. Supply chain security issues",
      "C. Outsourced code development issues",
      "D. System integration and configuration issues"
    ]
  },
  {
    "question": "29. John is conducting a penetration test of a client's network. He is currently gathering information from sources such as archive.org, netcraft.com, social media, and information websites. What best describes this stage?",
    "correct_answer": "B. Passive reconnaissance",
    "incorrect_answers": [
      "A. Active reconnaissance",
      "C. Initial exploitation",
      "D. Pivot"
    ]
  },
  {
    "question": "30. Alice wants to prevent SSRF attacks. Which of the following will not be helpful for preventing them?",
    "correct_answer": "A. Removing all SQL code from submitted HTTP queries",
    "incorrect_answers": [
      "B. Blocking hostnames like 127.0.01 and localhost",
      "C. Blocking sensitive URLs like /admin",
      "D. Applying whitelist-based input filters"
    ]
  },
  {
    "question": "31. What type of attack is based on entering fake entries into a target network's domain name server?",
    "correct_answer": "A. DNS poisoning",
    "incorrect_answers": [
      "B. ARP poisoning",
      "C. XSS poisoning",
      "D. CSRF poisoning"
    ]
  },
  {
    "question": "32. Frank has been asked to conduct a penetration test of a small bookkeeping firm. For the test, he has only been given the company name, the domain name for their website, and the IP address of their gateway router. What best describes this type of test?",
    "correct_answer": "C. An unknown environment test",
    "incorrect_answers": [
      "A. A known environment test",
      "B. External test",
      "D. Threat test"
    ]
  },
  {
    "question": "33. You work for a security company that performs penetration testing for clients. You are conducting a test of an e-commerce company. You discover that after compromising the web server, you can use the web server to launch a second attack into the company's internal network. What best describes this?",
    "correct_answer": "D. A pivot",
    "incorrect_answers": [
      "A. Internal attack",
      "B. Known environment testing",
      "C. Unknown environment testing"
    ]
  },
  {
    "question": "34. While investigating a malware outbreak on your company network, you discover something very odd. There is a file that has the same name as a Windows system DLL, and it even has the same API interface, but it handles input very differently, in a manner to help compromise the system, and it appears that applications have been attaching to this file, rather than the real system DLL. What best describes this?",
    "correct_answer": "A. Shimming",
    "incorrect_answers": [
      "B. Trojan horse",
      "C. Backdoor",
      "D. Refactoring"
    ]
  },
  {
    "question": "35. Which of the following capabilities is not a key part of a SOAR (security orchestration, automation, and response) tool?",
    "correct_answer": "C. Automated malware analysis",
    "incorrect_answers": [
      "A. Threat and vulnerability management",
      "B. Security incident response",
      "D. Security operations automation"
    ]
  },
  {
    "question": "36. John discovers that email from his company's email servers is being blocked because of spam that was sent from a compromised account. What type of lookup can he use to determine what vendors like McAfee and Barracuda have classified his domain as?",
    "correct_answer": "C. A domain reputation lookup",
    "incorrect_answers": [
      "A. An nslookup",
      "B. A tcpdump",
      "D. A SMTP whois"
    ]
  },
  {
    "question": "37. Frank is a network administrator for a small college. He discovers that several machines on his network are infected with malware. That malware is sending a flood of packets to a target external to the network. What best describes this attack?",
    "correct_answer": "B. DDoS",
    "incorrect_answers": [
      "A. SYN flood",
      "C. Botnet",
      "D. Backdoor"
    ]
  },
  {
    "question": "38. Why is SSL stripping a particular danger with open Wi-Fi networks?",
    "correct_answer": "B. Open hotspots do not assert their identity in a secure way.",
    "incorrect_answers": [
      "A. WPA2 is not secure enough to prevent this.",
      "C. Open hotspots can be accessed by any user.",
      "D. 802.11ac is insecure and traffic can be redirected."
    ]
  },
  {
    "question": "39. A sales manager at your company is complaining about slow performance on his computer. When you thoroughly investigate the issue, you find spyware on his computer. He insists that the only thing he has downloaded recently was a freeware stock trading application. What would best explain this situation?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Logic bomb",
      "C. Rootkit",
      "D. Macro virus"
    ]
  },
  {
    "question": "40. When phishing attacks are so focused that they target a specific high-ranking or important individual, they are called what?",
    "correct_answer": "D. Whaling",
    "incorrect_answers": [
      "A. Spear phishing",
      "B. Targeted phishing",
      "C. Phishing"
    ]
  },
  {
    "question": "41. What type of threat actors are most likely to have a profit motive for their malicious activities?",
    "correct_answer": "D. Criminal syndicates",
    "incorrect_answers": [
      "A. State actors",
      "B. Script kiddies",
      "C. Hacktivists"
    ]
  },
  {
    "question": "42. One of your users cannot recall the password for their laptop. You want to recover that password for them. You intend to use a tool/technique that is popular with hackers, and it consists of searching tables of precomputed hashes to recover the password. What best describes this?",
    "correct_answer": "A. Rainbow table",
    "incorrect_answers": [
      "B. Backdoor",
      "C. Social engineering",
      "D. Dictionary attack"
    ]
  },
  {
    "question": "43. What risk is commonly associated with a lack of vendor support for a product, such as an outdated version of a device?",
    "correct_answer": "B. Lack of patches or updates",
    "incorrect_answers": [
      "A. Improper data storage",
      "C. Lack of available documentation",
      "D. System integration and configuration issues"
    ]
  },
  {
    "question": "44. You have noticed that when in a crowded area, you sometimes get a stream of unwanted text messages. The messages end when you leave the area. What describes this attack?",
    "correct_answer": "A. Bluejacking",
    "incorrect_answers": [
      "B. Bluesnarfing",
      "C. Evil twin",
      "D. Rogue access point"
    ]
  },
  {
    "question": "45. Dennis uses an on-path attack to cause a system to send HTTPS traffic to his system and then forwards it to the actual server the traffic is intended for. What type of password attack can he conduct with the data he gathers if he captures all the traffic from a login form?",
    "correct_answer": "A. A plain-text password attack",
    "incorrect_answers": [
      "B. A pass-the-hash attack",
      "C. A SQL injection attack",
      "D. A cross-site scripting attack"
    ]
  },
  {
    "question": "46. Someone has been rummaging through your company's trash bins seeking to find documents, diagrams, or other sensitive information that has been thrown out. What is this called?",
    "correct_answer": "A. Dumpster diving",
    "incorrect_answers": [
      "B. Trash diving",
      "C. Social engineering",
      "D. Trash engineering"
    ]
  },
  {
    "question": "47. Louis is investigating a malware incident on one of the computers on his network. He has discovered unknown software that seems to be opening a port, allowing someone to remotely connect to the computer. This software seems to have been installed at the same time as a small shareware application. Which of the following best describes this malware?",
    "correct_answer": "A. RAT",
    "incorrect_answers": [
      "B. Worm",
      "C. Logic bomb",
      "D. Rootkit"
    ]
  },
  {
    "question": "48. Jared is responsible for network security at his company. He has discovered behavior on one computer that certainly appears to be a virus. He has even identified a file he thinks might be the virus. However, using three separate antivirus programs, he finds that none can detect the file. Which of the following is most likely to be occurring?",
    "correct_answer": "B. The computer has a zero-day exploit.",
    "incorrect_answers": [
      "A. The computer has a RAT.",
      "C. The computer has a worm.",
      "D. The computer has a rootkit."
    ]
  },
  {
    "question": "49. Which of the following is not a common means of attacking RFID badges?",
    "correct_answer": "D. Birthday attacks",
    "incorrect_answers": [
      "A. Data capture",
      "B. Spoofing",
      "C. Denial-of-service"
    ]
  },
  {
    "question": "50. Your wireless network has been breached. It appears the attacker modified a portion of data used with the stream cipher and used this to expose wirelessly encrypted data. What is this attack called?",
    "correct_answer": "C. IV attack",
    "incorrect_answers": [
      "A. Evil twin",
      "B. Rogue WAP",
      "D. WPS attack"
    ]
  },
  {
    "question": "51. The company that Scott works for has experienced a data breach, and the personal information of thousands of customers has been exposed. Which of the following impact categories is not a concern as described in this scenario?",
    "correct_answer": "C. Availability loss",
    "incorrect_answers": [
      "A. Financial",
      "B. Reputation",
      "D. Data loss"
    ]
  },
  {
    "question": "52. What type of attack exploits the trust that a website has for an authenticated user to attack that website by spoofing requests from the trusted user?",
    "correct_answer": "B. Cross-site request forgery",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. Bluejacking",
      "D. Evil twin"
    ]
  },
  {
    "question": "53. What purpose does a fusion center serve in cyberintelligence activities?",
    "correct_answer": "A. It promotes information sharing between agencies or organizations.",
    "incorrect_answers": [
      "B. It combines security technologies to create new, more powerful tools.",
      "C. It generates power for the local community in a secure way.",
      "D. It separates information by classification ratings to avoid accidental distribution."
    ]
  },
  {
    "question": "54. CVE is an example of what type of feed?",
    "correct_answer": "B. A vulnerability feed",
    "incorrect_answers": [
      "A. A threat intelligence feed",
      "C. A critical infrastructure listing feed",
      "D. A critical virtualization exploits feed"
    ]
  },
  {
    "question": "55. What type of attack is a birthday attack?",
    "correct_answer": "B. A cryptographic attack",
    "incorrect_answers": [
      "A. A social engineering attack",
      "C. A network denial-of-service attack",
      "D. A TCP/IP protocol attack"
    ]
  },
  {
    "question": "56. Juanita is a network administrator for Acme Company. Some users complain that they keep getting dropped from the network. When Juanita checks the logs for the wireless access point (WAP), she finds that a deauthentication packet has been sent to the WAP from the users' IP addresses. What seems to be happening here?",
    "correct_answer": "B. Disassociation attack",
    "incorrect_answers": [
      "A. Problem with users' Wi-Fi configuration",
      "C. Session hijacking",
      "D. Backdoor attack"
    ]
  },
  {
    "question": "57. John has discovered that an attacker is trying to get network passwords by using software that attempts a number of passwords from a list of common passwords. What type of attack is this?",
    "correct_answer": "A. Dictionary",
    "incorrect_answers": [
      "B. Rainbow table",
      "C. Brute force",
      "D. Session hijacking"
    ]
  },
  {
    "question": "58. You are a network security administrator for a bank. You discover that an attacker has exploited a flaw in OpenSSL and forced some connections to move to a weak cipher suite version of TLS, which the attacker could breach. What type of attack was this?",
    "correct_answer": "B. Downgrade attack",
    "incorrect_answers": [
      "A. Disassociation attack",
      "C. Session hijacking",
      "D. Brute force"
    ]
  },
  {
    "question": "59. When an attacker tries to find an input value that will produce the same hash as a password, what type of attack is this?",
    "correct_answer": "D. Collision attack",
    "incorrect_answers": [
      "A. Rainbow table",
      "B. Brute force",
      "C. Session hijacking"
    ]
  },
  {
    "question": "60. Farès is the network security administrator for a company that creates advanced routers and switches. He has discovered that his company's networks have been subjected to a series of advanced attacks over a period of time. What best describes this attack?",
    "correct_answer": "C. APT",
    "incorrect_answers": [
      "A. DDoS",
      "B. Brute force",
      "D. Disassociation attack"
    ]
  },
  {
    "question": "61. What type of information is phishing not commonly intended to acquire?",
    "correct_answer": "B. Email addresses",
    "incorrect_answers": [
      "A. Passwords",
      "C. Credit card numbers",
      "D. Personal information"
    ]
  },
  {
    "question": "62. John is running an IDS on his network. Users sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
    "correct_answer": "A. False positive",
    "incorrect_answers": [
      "B. False negative",
      "C. False trigger",
      "D. False flag"
    ]
  },
  {
    "question": "63. Scott discovers that malware has been installed on one of the systems he is responsible for. Shortly afterward passwords used by the user that the system is assigned to are discovered to be in use by attackers. What type of malicious program should Scott look for on the compromised system?",
    "correct_answer": "B. A keylogger",
    "incorrect_answers": [
      "A. A rootkit",
      "C. A worm",
      "D. None of the above"
    ]
  },
  {
    "question": "64. You are performing a penetration test of your company's network. As part of the test, you will be given a login with minimal access and will attempt to gain administrative access with this account. What is this called?",
    "correct_answer": "A. Privilege escalation",
    "incorrect_answers": [
      "B. Session hijacking",
      "C. Root grabbing",
      "D. Climbing"
    ]
  },
  {
    "question": "65. Matt discovers that a system on his network is sending hundreds of Ethernet frames to the switch it is connected to, with each frame containing a different source MAC address. What type of attack has he discovered?",
    "correct_answer": "B. MAC flooding",
    "incorrect_answers": [
      "A. Etherspam",
      "C. Hardware spoofing",
      "D. MAC hashing"
    ]
  },
  {
    "question": "66. Spyware is an example of what type of malware?",
    "correct_answer": "B. PUP",
    "incorrect_answers": [
      "A. Trojan",
      "C. RAT",
      "D. Ransomware"
    ]
  },
  {
    "question": "67. Mary has discovered that a web application used by her company does not always handle multithreading properly, particularly when multiple threads access the same variable. This could allow an attacker who discovered this vulnerability to exploit it and crash the server. What type of error has Mary discovered?",
    "correct_answer": "C. Race conditions",
    "incorrect_answers": [
      "A. Buffer overflow",
      "B. Logic bomb",
      "D. Improper error handling"
    ]
  },
  {
    "question": "68. An attacker is trying to get access to your network. He is sending users on your network a link to a new game with a hacked license code program. However, the game files also include software that will give the attacker access to any machine that it is installed on. What type of attack is this?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Rootkit",
      "C. Spyware",
      "D. Boot sector virus"
    ]
  },
  {
    "question": "69. The following image shows a report from an OpenVAS system. What type of weak configuration is shown here?",
    "correct_answer": "D. Unsecure protocols",
    "incorrect_answers": [
      "A. Weak encryption",
      "B. Unsecured administrative accounts",
      "C. Open ports and services"
    ]
  },
  {
    "question": "70. While conducting a penetration test, Annie scans for systems on the network she has gained access to. She discovers another system within the same network that has the same accounts and user types as the one she is on. Since she already has a valid user account on the system she has already accessed, she is able to log in to it. What type of technique is this?",
    "correct_answer": "A. Lateral movement",
    "incorrect_answers": [
      "B. Privilege escalation",
      "C. Privilege retention",
      "D. Vertical movement"
    ]
  },
  {
    "question": "71. Amanda scans a Red Hat Linux server that she believes is fully patched and discovers that the Apache version on the server is reported as vulnerable to an exploit from a few months ago. When she checks to see if she is missing patches, Apache is fully patched. What has occurred?",
    "correct_answer": "A. A false positive",
    "incorrect_answers": [
      "B. An automatic update failure",
      "C. A false negative",
      "D. An Apache version mismatch"
    ]
  },
  {
    "question": "72. When a program has variables, especially arrays, and does not check the boundary values before inputting data, what attack is the program vulnerable to?",
    "correct_answer": "C. Buffer overflow",
    "incorrect_answers": [
      "A. XSS",
      "B. CSRF",
      "D. Logic bomb"
    ]
  },
  {
    "question": "73. Tracy is concerned that the software she wants to download may not be trustworthy, so she searches for it and finds many postings claiming that the software is legitimate. If she installs the software and later discovers it is malicious and that malicious actors have planted those reviews, what principle of social engineering have they used?",
    "correct_answer": "C. Consensus",
    "incorrect_answers": [
      "A. Scarcity",
      "B. Familiarity",
      "D. Trust"
    ]
  },
  {
    "question": "74. Which of the following best describes malware that will execute some malicious activity when a particular condition is met (i.e., if the condition is met, then executed)?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Boot sector virus",
      "C. Buffer overflow",
      "D. Sparse infector virus"
    ]
  },
  {
    "question": "75. What term describes using conversational tactics as part of a social engineering exercise to extract information from targets?",
    "correct_answer": "B. Elicitation",
    "incorrect_answers": [
      "A. Pretexting",
      "C. Impersonation",
      "D. Intimidation"
    ]
  },
  {
    "question": "76. Telnet, RSH, and FTP are all examples of what?",
    "correct_answer": "B. Unsecure protocols",
    "incorrect_answers": [
      "A. File transfer protocols",
      "C. Core protocols",
      "D. Open ports"
    ]
  },
  {
    "question": "77. Scott wants to determine where an organization's wireless network can be accessed from. What testing techniques are his most likely options?",
    "correct_answer": "B. War driving and war flying",
    "incorrect_answers": [
      "A. OSINT and active scans",
      "C. Social engineering and active scans",
      "D. OSINT and war driving"
    ]
  },
  {
    "question": "78. Gerald is a network administrator for a small financial services company. Users are reporting odd behavior that appears to be caused by a virus on their machines. After isolating the machines that he believes are infected, Gerald analyzes them. He finds that all the infected machines received an email purporting to be from accounting, with an Excel spreadsheet, and the users opened the spreadsheet. What is the most likely issue on these machines?",
    "correct_answer": "A. A macro virus",
    "incorrect_answers": [
      "B. A boot sector virus",
      "C. A Trojan horse",
      "D. A RAT"
    ]
  },
  {
    "question": "79. Your company has hired an outside security firm to perform various tests of your network. During the vulnerability scan, you will provide that company with logins for various systems (i.e., database server, application server, web server, etc.) to aid in their scan. What best describes this?",
    "correct_answer": "C. A credentialed scan",
    "incorrect_answers": [
      "A. A known environment test",
      "B. A gray-box test",
      "D. An intrusive scan"
    ]
  },
  {
    "question": "80. Steve discovers the following code on a system. What language is it written in, and what does it do?\nimport socket as skt\nfor port in range (1,9999):\ntry:\nsc=skt.socket(askt.AF_INET,skt.SOCK_STREAM)\nsc.settimeout(900)\nsc.connect(('127.0.0.1,port))\nprint '%d:OPEN' % (port)\nsc.close\nexcept: continue",
    "correct_answer": "B. Python, port scanning",
    "incorrect_answers": [
      "A. Perl, vulnerability scanning",
      "C. Bash, vulnerability scanning",
      "D. PowerShell, port scanning"
    ]
  },
  {
    "question": "81. Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "correct_answer": "C. Botnet",
    "incorrect_answers": [
      "A. Phishing",
      "B. Adware",
      "D. Trojan"
    ]
  },
  {
    "question": "82. Amanda discovers that a member of her organization's staff has installed a remote access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "correct_answer": "B. Insider threat",
    "incorrect_answers": [
      "A. Zero-day",
      "C. Misconfiguration",
      "D. Weak encryption"
    ]
  },
  {
    "question": "83. Postings from Russian agents during the 2016 U.S. presidential campaign to Facebook and Twitter are an example of what type of effort?",
    "correct_answer": "B. A social media influence campaign",
    "incorrect_answers": [
      "A. Impersonation",
      "C. Asymmetric warfare",
      "D. A watering hole attack"
    ]
  },
  {
    "question": "84. Juan is responsible for incident response at a large financial institution. He discovers that the company Wi-Fi has been breached. The attacker used the same login credentials that ship with the wireless access point (WAP). The attacker was able to use those credentials to access the WAP administrative console and make changes. Which of the following best describes what caused this vulnerability to exist?",
    "correct_answer": "C. Using default settings",
    "incorrect_answers": [
      "A. Improperly configured accounts",
      "B. Untrained users",
      "D. Failure to patch systems"
    ]
  },
  {
    "question": "85. Elizabeth is investigating a network breach at her company. She discovers a program that was able to execute code within the address space of another process by using the target process to load a specific library. What best describes this attack?",
    "correct_answer": "D. DLL injection",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Session hijacking",
      "C. Buffer overflow"
    ]
  },
  {
    "question": "86. Which of the following threat actors is most likely to be associated with an advanced persistent threat (APT)?",
    "correct_answer": "B. State actors",
    "incorrect_answers": [
      "A. Hacktivists",
      "C. Script kiddies",
      "D. Insider threats"
    ]
  },
  {
    "question": "87. What is the primary difference between an intrusive and a nonintrusive vulnerability scan?",
    "correct_answer": "C. An intrusive scan could potentially disrupt operations.",
    "incorrect_answers": [
      "A. An intrusive scan is a penetration test.",
      "B. A nonintrusive scan is just a document check.",
      "D. A nonintrusive scan won't find most vulnerabilities."
    ]
  },
  {
    "question": "88. Your company outsourced development of an accounting application to a local programming firm. After three months of using the product, one of your administrators discovers that the developers have inserted a way to log in and bypass all security and authentication. What best describes this?",
    "correct_answer": "C. Backdoor",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Trojan horse",
      "D. Rootkit"
    ]
  },
  {
    "question": "89. Daryl is investigating a recent breach of his company's web server. The attacker used sophisticated techniques and then defaced the website, leaving messages that were denouncing the company's public policies. He and his team are trying to determine the type of actor who most likely committed the breach. Based on the information provided, who was the most likely threat actor?",
    "correct_answer": "D. Hacktivists",
    "incorrect_answers": [
      "A. A script",
      "B. A nation-state",
      "C. Organized crime"
    ]
  },
  {
    "question": "90. What two techniques are most commonly associated with a pharming attack?",
    "correct_answer": "A. Modifying the hosts file on a PC or exploiting a DNS vulnerability on a trusted DNS server",
    "incorrect_answers": [
      "B. Phishing many users and harvesting email addresses from them",
      "C. Phishing many users and harvesting many passwords from them",
      "D. Spoofing DNS server IP addresses or modifying the hosts file on a PC"
    ]
  },
  {
    "question": "91. Angela reviews the authentication logs for her website and sees attempts from many different accounts using the same set of passwords. What is this attack technique called?",
    "correct_answer": "B. Password spraying",
    "incorrect_answers": [
      "A. Brute forcing",
      "C. Limited login attacks",
      "D. Account spinning"
    ]
  },
  {
    "question": "92. When investigating breaches and attempting to attribute them to specific threat actors, which of the following is not one of the indicators of an APT?",
    "correct_answer": "C. The attack comes from a foreign IP address.",
    "incorrect_answers": [
      "A. Long-term access to the target",
      "B. Sophisticated attacks",
      "D. The attack is sustained over time."
    ]
  },
  {
    "question": "93. Charles discovers that an attacker has used a vulnerability in a web application that his company runs and has then used that exploit to obtain root privileges on the web server. What type of attack has he discovered?",
    "correct_answer": "B. Privilege escalation",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. A SQL injection",
      "D. A race condition"
    ]
  },
  {
    "question": "94. What type of attack uses a second wireless access point (WAP) that broadcasts the same SSID as a legitimate access point, in an attempt to get users to connect to the attacker's WAP?",
    "correct_answer": "A. Evil twin",
    "incorrect_answers": [
      "B. IP spoofing",
      "C. Trojan horse",
      "D. Privilege escalation"
    ]
  },
  {
    "question": "95. Which of the following best describes a zero-day vulnerability?",
    "correct_answer": "A. A vulnerability that the vendor is not yet aware of",
    "incorrect_answers": [
      "B. A vulnerability that has not yet been breached",
      "C. A vulnerability that can be quickly exploited (i.e., in zero days)",
      "D. A vulnerability that will give the attacker brief access (i.e., zero days)"
    ]
  },
  {
    "question": "96. What type of attack involves adding an expression or phrase such as adding “SAFE” to mail headers?",
    "correct_answer": "D. Prepending",
    "incorrect_answers": [
      "A. Pretexting",
      "B. Phishing",
      "C. SQL injection"
    ]
  },
  {
    "question": "97. Charles wants to ensure that his outsourced code development efforts are as secure as possible. Which of the following is not a common practice to ensure secure remote code development?",
    "correct_answer": "D. Audit all underlying libraries used in the code.",
    "incorrect_answers": [
      "A. Ensure developers are trained on secure coding techniques.",
      "B. Set defined acceptance criteria for code security.",
      "C. Test code using automated and manual security testing systems."
    ]
  },
  {
    "question": "98. You have discovered that there are entries in your network's domain name server that point legitimate domains to unknown and potentially harmful IP addresses. What best describes this type of attack?",
    "correct_answer": "C. DNS poisoning",
    "incorrect_answers": [
      "A. A backdoor",
      "B. An APT",
      "D. A Trojan horse"
    ]
  },
  {
    "question": "99. Spyware is an example of what type of malicious software?",
    "correct_answer": "C. A PUP",
    "incorrect_answers": [
      "A. A CAT",
      "B. A worm",
      "D. A Trojan"
    ]
  },
  {
    "question": "100. What best describes an attack that attaches some malware to a legitimate program so that when the user installs the legitimate program, they inadvertently install the malware?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Backdoor",
      "C. RAT",
      "D. Polymorphic virus"
    ]
  }
]
