
export const questions = [
  {
    "question": "1. Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
    "correct_answer": "C. Spear phishing",
    "incorrect_answers": [
      "A. Phishing",
      "B. Social engineering",
      "D. Trojan horse"
    ],
    "explanation": "The correct answer is spear phishing. Spear phishing is targeted to a specific group, in this case insurance professionals. Although this is a form of phishing, the more specific answer is the one you will need to choose on questions like this. Phishing uses social engineering techniques to succeed but is once again a broader answer than spear phishing and thus is not the correct choice. Finally, a Trojan horse pretends to be a legitimate or desirable program or file, which this scenario doesn’t describe."
  },
  {
    "question": "2. You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Worm",
      "C. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "A logic bomb is malware that performs its malicious activity when some condition is met. A worm is malware that self-propagates. A Trojan horse is malware attached to a legitimate program, and a rootkit is malware that gets root or administrative privileges."
  },
  {
    "question": "3. You are responsible for incident response at Acme Bank. The Acme Bank website has been attacked. The attacker used the login screen, but rather than enter login credentials, they entered some odd text: ' or '1' = '1 . What is the best description for this attack?",
    "correct_answer": "C. SQL injection",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "B. Cross-site request forgery",
      "D. ARP poisoning"
    ],
    "explanation": "This is a very basic form of SQL injection. Cross-site scripting would have JavaScript in the text field and would be designed to impact other sites from a user’s session. Cross-site request forgery would not involve any text being entered in the web page, and ARP poisoning is altering the ARP table in a switch; it is not related to website hacking."
  },
  {
    "question": "4. Users are complaining that they cannot connect to the wireless network. You discover that the WAPs are being subjected to a wireless attack designed to block their Wi-Fi signals. Which of the following is the best label for this attack?",
    "correct_answer": "B. Jamming",
    "incorrect_answers": [
      "A. IV attack",
      "C. WPS attack",
      "D. Botnet"
    ],
    "explanation": "This describes a jamming attack, where legitimate traffic is interfered with by another signal. Jamming can be intentional or unintentional and may be intermittent. IV attacks are obscure cryptographic attacks on stream ciphers. Wi-Fi protected setup (WPS) uses a PIN to connect to the wireless access point (WAP). The WPS attack attempts to intercept that PIN in transmission, connect to the WAP, and then steal the WPA2 password. A botnet is a group of machines that are being used, without their consent, as part of an attack."
  },
  {
    "question": "5. Frank is deeply concerned about attacks to his company's ecommerce server. He is particularly worried about cross-site scripting and SQL injection. Which of the following would best defend against these two specific attacks?",
    "correct_answer": "B. Input validation",
    "incorrect_answers": [
      "A. Encrypted web traffic",
      "C. A firewall",
      "D. An IDS"
    ],
    "explanation": "The best option listed to defend against the attacks mentioned is input validation. Encrypting the web traffic will not have any effect on these two attacks. A web application firewall (WAF) might mitigate these attacks, but it would be secondary to input validation, and an intrusion detection system (IDS) will simply detect the attack—it won’t stop it."
  },
  {
    "question": "6. You are responsible for network security at Acme Company. Users have been reporting that personal data is being stolen when using the wireless network. They all insist they only connect to the corporate wireless access point (AP). However, logs for the AP show that these users have not connected to it. Which of the following could best explain this situation?",
    "correct_answer": "C. Rogue access point",
    "incorrect_answers": [
      "A. Session hijacking",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "If users have been connecting but the AP does not show them connecting, then they have been connecting to a rogue access point. This could be the cause of an architecture and design weakness such as a network without segmentation and control of devices connecting to the network. Session hijacking involves taking over an already authenticated session. Most session hijacking attacks involve impersonation. The attacker attempts to gain access to another user’s session by posing as that user. Clickjacking involves causing visitors to a website to click on the wrong item. Finally, bluejacking is a Bluetooth attack."
  },
  {
    "question": "7. What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
    "correct_answer": "C. Cross-site scripting",
    "incorrect_answers": [
      "A. SQL injection",
      "B. Clickjacking",
      "D. Bluejacking"
    ],
    "explanation": "Cross-site scripting involves entering a script into text areas that other users will view. SQL injection is not about entering scripts, but rather SQL commands. Clickjacking is about tricking users into clicking on the wrong thing. Bluejacking is a Bluetooth attack."
  },
  {
    "question": "8. Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
    "correct_answer": "D. Encrypting password plain text using symmetric encryption",
    "incorrect_answers": [
      "A. Use of a salt",
      "B. Use of a pepper",
      "C. Use of a purpose-built password hashing algorithm"
    ],
    "explanation": "Retaining the actual password is not a best practice, and thus encrypting password plain text is not a common technique to make passwords harder to crack. Since the application would need the cryptographic key to read the passwords, anybody who had access to that key could decrypt the passwords. Using a salt, a pepper, and a cryptographic hashing algorithm designed for passwords are all common best practices to prevent offline brute-force attacks."
  },
  {
    "question": "9. What term is used to describe spam over Internet messaging services?",
    "correct_answer": "A. SPIM",
    "incorrect_answers": [
      "B. SMSPAM",
      "C. IMSPAM",
      "D. TwoFaceTiming"
    ],
    "explanation": "Although this is one of the more dated items on the Security+ exam outline, you need to know that the term for Internet messaging spam messages is SPIM. The rest of the answers were made up, and though this shows up in the exam outline, the rest of the world has moved on from using this term."
  },
  {
    "question": "10. Susan is analyzing the source code for an application and discovers a pointer de-reference and returns NULL. This causes the program to attempt to read from the NULL pointer and results in a segmentation fault. What impact could this have for the application?",
    "correct_answer": "B. A denial-of-service condition",
    "incorrect_answers": [
      "A. A data breach",
      "C. Permissions creep",
      "D. Privilege escalation"
    ],
    "explanation": "A segmentation fault will typically stop the program from running. This type of issue is why a NULL pointer or other pointer de-referencing error is considered a potential security issue, as a denial-of-service condition impacts the availability of the service. This type of error is unlikely to cause a data breach or allow privilege escalation, and permissions creep occurs as individuals accrue more permissions over time in a single organization as their permissions are not cleaned up when they switch positions or roles."
  },
  {
    "question": "11. Teresa is the security manager for a mid-sized insurance company. She receives a call from law enforcement, telling her that some computers on her network participated in a massive denial-of-service (DoS) attack. Teresa is certain that none of the employees at her company would be involved in a cybercrime. What would best explain this scenario?",
    "correct_answer": "C. The machines are bots.",
    "incorrect_answers": [
      "A. It is a result of social engineering.",
      "B. The machines all have backdoors.",
      "D. The machines are infected with crypto-viruses."
    ],
    "explanation": "The machines in her network are being used as bots, and the users are not aware that they are part of a distributed denial-of-service (DDoS) attack. Social engineering is when someone tries to manipulate you into giving information. Techniques involved in social engineering attacks include consensus, scarcity, and familiarity. There is a slight chance that all computers could have a backdoor, but that is very unlikely, and attackers normally don’t manually log into each machine to do a DDoS—it would be automated, as through a bot."
  },
  {
    "question": "12. Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
    "correct_answer": "C. Indicators of compromise",
    "incorrect_answers": [
      "A. Predictive analysis",
      "B. OSINT",
      "D. Threat maps"
    ],
    "explanation": "There are many indicators of compromise (IoCs), including unusual outbound network traffic, geographical irregularities like logins from a country where the person normally does not work, or increases in database read volumes beyond normal traffic patterns. Predictive analysis is analysis work done using datasets to attempt to determine trends and likely attack vectors so that analysts can focus their efforts where they will be most needed and effective. OSINT is open source intelligence, and threat maps are often real-time or near real-time visualizations of where threats are coming from and where they are headed to."
  },
  {
    "question": "13. Chris needs visibility into connection attempts through a firewall because he believes that a TCP handshake is not properly occurring. What security information and event management (SIEM) capability is best suited to troubleshooting this issue?",
    "correct_answer": "B. Packet capture",
    "incorrect_answers": [
      "A. Reviewing reports",
      "C. Sentiment analysis",
      "D. Log collection and analysis"
    ],
    "explanation": "When troubleshooting TCP handshakes, the most valuable tool in many cases is packet capture. If Chris sees a series of SYN packets without the handshake being completed, he can be reasonably sure the firewall is blocking traffic. Reviewing reports or logs may be useful for this as well but won’t show the TCP handshake issue mentioned in the problem, and sentiment analysis is focused on how individuals and groups are responding, not on a technical problem."
  },
  {
    "question": "14. Chris wants to detect a potential insider threat using his security information and event management (SIEM) system. What capability best matches his needs?",
    "correct_answer": "D. User behavior analysis",
    "incorrect_answers": [
      "A. Sentiment analysis",
      "B. Log aggregation",
      "C. Security monitoring"
    ],
    "explanation": "User behavior analysis is a key capability when attempting to detect potential insider threats. Chris can use his SIEM’s behavioral analysis capabilities to detect improper or illicit use of rights and privileges as well as abnormal behavior on the part of his users. Sentiment analysis helps analyze feelings, and log aggregation and security monitoring provide ways to gain insight into the overall security posture and status of the organization."
  },
  {
    "question": "15. Chris has hundreds of systems spread across multiple locations and wants to better handle the amount of data that they create. What two technologies can help with this?",
    "correct_answer": "A. Log aggregation and log collectors",
    "incorrect_answers": [
      "B. Packet capture and log aggregation",
      "C. Security monitoring and log collectors",
      "D. Sentiment analysis and user behavior analysis"
    ],
    "explanation": "Using log aggregation to pull together logs from multiple sources, and performing collection and initial analysis on log collectors can help centralize and handle large log volumes. Capturing packets is useful for network traffic analysis to identify issues or security concerns. Security monitoring is an overall function for security information and event management (SIEM) and doesn’t specifically help with this need. Both sentiment analysis and user behavior analysis are aimed at users and groups rather than at how data is collected and managed."
  },
  {
    "question": "16. What type of security team establishes the rules of engagement for a cybersecurity exercise?",
    "correct_answer": "B. White team",
    "incorrect_answers": [
      "A. Blue team",
      "C. Purple team",
      "D. Red team"
    ],
    "explanation": "White teams act as judges and observers during cybersecurity exercises. Blue teams act as defenders, red teams act as attackers, and purple teams are composed of both blue and red team members to combine attack and defense knowledge to improve organizational security."
  },
  {
    "question": "17. Cynthia is concerned about attacks against an application programming interface (API) that her company provides for its customers. What should she recommend to ensure that the API is only used by customers who have paid for the service?",
    "correct_answer": "A. Require authentication.",
    "incorrect_answers": [
      "B. Install and configure a firewall.",
      "C. Filter by IP address.",
      "D. Install and use an IPS."
    ],
    "explanation": "The simplest way to ensure that APIs are only used by legitimate users is to require the use of authentication. API keys are one of the most frequently used methods for this. If an API key is lost or stolen, the key can be invalidated and reissued, and since API keys can be matched to usage, Cynthia’s company can also bill customers based on their usage patterns if they want to. A firewall or IP restrictions may be able to help, but they can be fragile; customer IP addresses may change. An intrusion prevention system (IPS) can detect and prevent attacks, but legitimate usage would be hard to tell from those who are not customers using an IPS."
  },
  {
    "question": "18. What type of attack is based on sending more data to a target variable than the data can actually hold?",
    "correct_answer": "B. Buffer overflow",
    "incorrect_answers": [
      "A. Bluesnarfing",
      "C. Bluejacking",
      "D. Cross-site scripting"
    ],
    "explanation": "Buffer overflow attacks cram more data into a field or buffer than they can accept, overflowing into other memory locations and either crashing the system or application, or potentially allowing code to be inserted into executable locations. Bluesnarfing and bluejacking are both Bluetooth attacks. Cross-site scripting attacks allow attackers to inject scripts into pages viewed by other users."
  },
  {
    "question": "19. An email arrives telling Gurvinder that there is a limited time to act to get a software package for free and that the first 50 downloads will not have to be paid for. What social engineering principle is being used against him?",
    "correct_answer": "A. Scarcity",
    "incorrect_answers": [
      "B. Intimidation",
      "C. Authority",
      "D. Consensus"
    ],
    "explanation": "Attackers are attempting to influence Gurvinder with a combination of scarcity and urgency. Thus, for this question you should answer scarcity since urgency is not listed. In many social engineering principle questions, more than one of the principles may be in play, and you will need to answer with the principle that is correct or more correct for the question. In this case, there is no intimidation or claim to authority, and consensus would require some form of validation from others."
  },
  {
    "question": "20. You have been asked to test your company network for security issues. The specific test you are conducting involves primarily using automated and semiautomated tools to look for known vulnerabilities with the various systems on your network. Which of the following best describes this type of test?",
    "correct_answer": "A. Vulnerability scan",
    "incorrect_answers": [
      "B. Penetration test",
      "C. Security audit",
      "D. Security test"
    ],
    "explanation": "Vulnerability scans use automated tools to look for known vulnerabilities in systems and applications and then provide reports to assist in remediation activities. Penetration tests seek to actually exploit the vulnerabilities and break into systems. Security audits usually focus on checking policies, incident reports, and other documents. Security test is a generic term for any sort of test."
  },
  {
    "question": "21. Susan wants to reduce the likelihood of successful credential harvesting attacks via her organization's commercial websites. Which of the following is not a common prevention method aimed at stopping credential harvesting?",
    "correct_answer": "C. Use of complex usernames",
    "incorrect_answers": [
      "A. Use of multifactor authentication",
      "B. User awareness training",
      "D. Limiting or preventing use of third-party web scripts and plugins"
    ],
    "explanation": "Username complexity has no impact in credential harvesting. Multifactor authentication can help prevent successful credential harvesting by ensuring that even capture of username and password is not enough to compromise the account. Awareness training helps to reduce the likelihood of credential exposure, and limiting or preventing use of third-party web scripts makes websites less likely to have credentials stolen through the use of those scripts, plug-ins, or modules."
  },
  {
    "question": "22. Greg wants to gain admission to a network which is protected by a network access control (NAC) system that recognized the hardware address of systems. How can he bypass this protection?",
    "correct_answer": "C. Use MAC cloning to clone a legitimate MAC address.",
    "incorrect_answers": [
      "A. Spoof a legitimate IP address.",
      "B. Conduct a denial-of-service attack against the NAC system.",
      "D. None of the above"
    ],
    "explanation": "Greg can clone a legitimate Media Access Control (MAC) address if he can identify one on the network. This can be as easy as checking for a MAC label on some devices or by capturing traffic on the network if he can physically access it."
  },
  {
    "question": "23. Coleen is the web security administrator for an online auction website. A small number of users are complaining that when they visit the website it does not appear to be the correct site. Coleen checks and she can visit the site without any problem, even from computers outside the network. She also checks the web server log and there is no record of those users ever connecting. Which of the following might best explain this?",
    "correct_answer": "A. Typo squatting",
    "incorrect_answers": [
      "B. SQL injection",
      "C. Cross-site scripting",
      "D. Cross-site request forgery"
    ],
    "explanation": "From the description it appears that they are not connecting to the real web server but rather a fake server. That indicates typo squatting: have a URL that is named very similarly to a real site so that when users mistype the real site’s URL they will go to the fake site. Options B, C, and D are all incorrect. These are all methods of attacking a website, but in this case, the actual website was not attacked. Instead, some users are visiting a fake site."
  },
  {
    "question": "24. The organization that Mike works in finds that one of their domains is directing traffic to a competitor's website. When Mike checks, the domain information has been changed, including the contact and other administrative details for the domain. If the domain had not expired, what has most likely occurred?",
    "correct_answer": "C. Domain hijacking",
    "incorrect_answers": [
      "A. DNS hijacking",
      "B. An on-path attack",
      "D. A zero-day attack"
    ],
    "explanation": "Domain hijacking, or domain theft, occurs when the registration or other information for the domain is changed without the original registrant’s permission. This may occur because of a compromised account or due to a breach of the domain registrar’s security. A common issue is a lapsed domain being purchased by a third party, and this can look like a hijacked domain, but it is a legitimate occurrence if the domain is not renewed! DNS hijacking inserts false information into a DNS server, on-path (man-in-the-middle) attacks capture or modify traffic by causing the traffic to pass through a compromised midpoint, and zero-day attacks are attacks that use an unknown until used vulnerability."
  },
  {
    "question": "25. Mahmoud is responsible for managing security at a large university. He has just performed a threat analysis for the network, and based on past incidents and studies of similar networks, he has determined that the most prevalent threat to his network is low-skilled attackers who wish to breach the system, simply to prove they can or for some low-level crime, such as changing a grade. Which term best describes this type of attacker?",
    "correct_answer": "D. Script kiddie",
    "incorrect_answers": [
      "A. Hacktivist",
      "B. Amateur",
      "C. Insider"
    ],
    "explanation": "The term for low-skilled hackers is script kiddie. Script kiddies typically use prebuilt tools and do not have the expertise to make or modify their own tools. Nothing indicates this is being done for ideological reasons, and thus that a hacktivist is involved. Although “Amateur” may be an appropriate description, the correct term is script kiddie. Finally, nothing in this scenario indicates an insider threat."
  },
  {
    "question": "26. How is phishing different from general spam?",
    "correct_answer": "B. It is intended to acquire credentials or other data.",
    "incorrect_answers": [
      "A. It is sent only to specific targeted individuals.",
      "C. It is sent via SMS.",
      "D. It includes malware in the message."
    ],
    "explanation": "Phishing is intended to acquire data, most often credentials or other information that will be useful to the attacker. Spam is a broader term for unwanted email, although the term is often generally used to describe unwanted communications. Spear phishing targets specific individuals, whereas whaling targets important people in an organization. Smishing is sent via SMS (text message). Malware can be sent in any of these instances, but there is not a specific related term that means “spam with malware in it.”"
  },
  {
    "question": "27. Which of the following best describes a collection of computers that have been compromised and are being controlled from one central point?",
    "correct_answer": "B. Botnet",
    "incorrect_answers": [
      "A. Zombienet",
      "C. Nullnet",
      "D. Attacknet"
    ],
    "explanation": "A collection of computers that are compromised, then centrally controlled to perform actions like denial-of-service attacks, data collection, and other malicious activities is called a botnet. Zombienets, Nullnets, and Attacknets are not commonly used terms to describe botnets."
  },
  {
    "question": "28. Selah includes a question in her procurement request-for-proposal process that asks how long the vendor has been in business and how many existing clients the vendor has. What common issue is this practice intended to help prevent?",
    "correct_answer": "B. Lack of vendor support",
    "incorrect_answers": [
      "A. Supply chain security issues",
      "C. Outsourced code development issues",
      "D. System integration and configuration issues"
    ],
    "explanation": "Systems and software that no longer have vendor support can be a significant security risk, and ensuring that a vendor will continue to exist and provide support is an important part of many procurement processes. Selah’s questions are intended to assess the longevity and viability of the company and whether buying from them will result in her organization having a usable product for the long term."
  },
  {
    "question": "29. John is conducting a penetration test of a client's network. He is currently gathering information from sources such as archive.org, netcraft.com, social media, and information websites. What best describes this stage?",
    "correct_answer": "B. Passive reconnaissance",
    "incorrect_answers": [
      "A. Active reconnaissance",
      "C. Initial exploitation",
      "D. Pivot"
    ],
    "explanation": "Passive reconnaissance is any reconnaissance that is done without actually connecting to the target. In this case, John is conducting a form of OSINT, or open source intelligence, by using commonly available third-party information sources to gather information about his target. Active reconnaissance involves communicating with the target network, such as doing a port scan. The initial exploitation is not information gathering; it is actually breaking into the target network. A pivot is when you have breached one system and use that to move to another system."
  },
  {
    "question": "30. Alice wants to prevent SSRF attacks. Which of the following will not be helpful for preventing them?",
    "correct_answer": "A. Removing all SQL code from submitted HTTP queries",
    "incorrect_answers": [
      "B. Blocking hostnames like 127.0.01 and localhost",
      "C. Blocking sensitive URLs like /admin",
      "D. Applying whitelist-based input filters"
    ],
    "explanation": "Server-side request forgery (SSRF) attempts typically attempt to get HTTP data passed through and will not include SQL injection. Blocking sensitive hostnames, IP addresses, and URLs are all valid ways to prevent SSRF, as is the use of whitelist-based input filters."
  },
  {
    "question": "31. What type of attack is based on entering fake entries into a target network's domain name server?",
    "correct_answer": "A. DNS poisoning",
    "incorrect_answers": [
      "B. ARP poisoning",
      "C. XSS poisoning",
      "D. CSRF poisoning"
    ],
    "explanation": "Domain Name System (DNS) poisoning attacks attempt to insert incorrect or malicious entries into a trusted DNS server. Address Resolution Protocol (ARP) poisoning involves altering the MAC-IP tables in a switch. Although cross-site scripting (XSS) and cross-site request forgery (CSRF or XSRF) are both types of attacks, neither is a poisoning attack."
  },
  {
    "question": "32. Frank has been asked to conduct a penetration test of a small bookkeeping firm. For the test, he has only been given the company name, the domain name for their website, and the IP address of their gateway router. What best describes this type of test?",
    "correct_answer": "C. An unknown environment test",
    "incorrect_answers": [
      "A. A known environment test",
      "B. External test",
      "D. Threat test"
    ],
    "explanation": "An unknown environment test is also called black-box or a zero-knowledge test because it does not provide information beyond the basic information needed to identify the target. A known environment, or white-box test, involves very complete information being given to the tester. This scenario is probably done from outside the network, but external test is not the correct terminology. Threat test is not a term used in penetration testing."
  },
  {
    "question": "33. You work for a security company that performs penetration testing for clients. You are conducting a test of an e-commerce company. You discover that after compromising the web server, you can use the web server to launch a second attack into the company's internal network. What best describes this?",
    "correct_answer": "D. A pivot",
    "incorrect_answers": [
      "A. Internal attack",
      "B. Known environment testing",
      "C. Unknown environment testing"
    ],
    "explanation": "A pivot occurs when you exploit one machine and use that as a basis to attack other systems. Pivoting can be done from internal or external tests. White- and black-box testing describes the amount of information the tester is given in advance, not how the tester performs the test."
  },
  {
    "question": "34. While investigating a malware outbreak on your company network, you discover something very odd. There is a file that has the same name as a Windows system DLL, and it even has the same API interface, but it handles input very differently, in a manner to help compromise the system, and it appears that applications have been attaching to this file, rather than the real system DLL. What best describes this?",
    "correct_answer": "A. Shimming",
    "incorrect_answers": [
      "B. Trojan horse",
      "C. Backdoor",
      "D. Refactoring"
    ],
    "explanation": "Shimming is when the attacker places some malware between an application and some other file and intercepts the communication to that file (usually to a library or system API). In many cases, this is done with a driver for a hardware component. A Trojan horse might be used to get the shim onto the system, but that is not described in this scenario. A backdoor is a means to circumvent system authorization and get direct access to the system. Refactoring is the process of changing names of variables, functions, and so forth in a program."
  },
  {
    "question": "35. Which of the following capabilities is not a key part of a SOAR (security orchestration, automation, and response) tool?",
    "correct_answer": "C. Automated malware analysis",
    "incorrect_answers": [
      "A. Threat and vulnerability management",
      "B. Security incident response",
      "D. Security operations automation"
    ],
    "explanation": "SOAR is a relatively new category as defined by Gartner. Security orchestration, automation, and response includes threat and vulnerability management, security incident response, and security operations automation, but not automated malware analysis."
  },
  {
    "question": "36. John discovers that email from his company's email servers is being blocked because of spam that was sent from a compromised account. What type of lookup can he use to determine what vendors like McAfee and Barracuda have classified his domain as?",
    "correct_answer": "C. A domain reputation lookup",
    "incorrect_answers": [
      "A. An nslookup",
      "B. A tcpdump",
      "D. A SMTP whois"
    ],
    "explanation": "Domain reputation services like Reputation Authority, Cisco’s Talos, McAfee’s trustedsource.org, and Barracuda’s barracudacentral.org sites all provide domain reputation data that allow you to look up a domain or IP address to determine if it is currently blacklisted or has a poor reputation."
  },
  {
    "question": "37. Frank is a network administrator for a small college. He discovers that several machines on his network are infected with malware. That malware is sending a flood of packets to a target external to the network. What best describes this attack?",
    "correct_answer": "B. DDoS",
    "incorrect_answers": [
      "A. SYN flood",
      "C. Botnet",
      "D. Backdoor"
    ],
    "explanation": "His machines are part of a distributed denial-of-service (DDoS) attack. This scenario describes a generic DDoS, not a specific one like SYN flood, which would involve many SYN packets being sent without a full three-way TCP handshake. These machines could be part of a botnet or they may just have a trigger that causes them to launch the attack at a specific time. The real key in this scenario is the DDoS attack. Finally, a backdoor gives an attacker access to the target system."
  },
  {
    "question": "38. Why is SSL stripping a particular danger with open Wi-Fi networks?",
    "correct_answer": "B. Open hotspots do not assert their identity in a secure way.",
    "incorrect_answers": [
      "A. WPA2 is not secure enough to prevent this.",
      "C. Open hotspots can be accessed by any user.",
      "D. 802.11ac is insecure and traffic can be redirected."
    ],
    "explanation": "Since open Wi-Fi hotspots do not have a way to prove they are legitimate, they can be easily spoofed. Attackers can stand up a fake version of the hotspot and then conduct an SSL stripping attack by inserting themselves into sessions that victims attempt to open to secure servers."
  },
  {
    "question": "39. A sales manager at your company is complaining about slow performance on his computer. When you thoroughly investigate the issue, you find spyware on his computer. He insists that the only thing he has downloaded recently was a freeware stock trading application. What would best explain this situation?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Logic bomb",
      "C. Rootkit",
      "D. Macro virus"
    ],
    "explanation": "A Trojan horse attaches a malicious program to a legitimate program. When the user downloads and installs the legitimate program, they get the malware. A logic bomb is malware that does its misdeeds when some condition is met. A rootkit is malware that gets administrative, or root, access. A macro virus is a virus that is embedded in a document as a macro."
  },
  {
    "question": "40. When phishing attacks are so focused that they target a specific high-ranking or important individual, they are called what?",
    "correct_answer": "D. Whaling",
    "incorrect_answers": [
      "A. Spear phishing",
      "B. Targeted phishing",
      "C. Phishing"
    ],
    "explanation": "Whaling is targeting a specific individual who is important in the organization like the president or chief financial officer (CFO). Spear phishing targets specific individuals or groups, but whaling is more specific in terms of the importance of the individuals involved. Targeted phishing is not a term used in the industry. Phishing is the generic term for a wide range of related attacks, and you should choose the most accurate answer for questions like this."
  },
  {
    "question": "41. What type of threat actors are most likely to have a profit motive for their malicious activities?",
    "correct_answer": "D. Criminal syndicates",
    "incorrect_answers": [
      "A. State actors",
      "B. Script kiddies",
      "C. Hacktivists"
    ],
    "explanation": "Criminal syndicates may produce, sell, and support malware tools, or may deploy them themselves. Crypto malware and other packages are examples of tools often created and used by criminal syndicates. State actors are more likely to be associated with advanced persistent threats (APTs) aimed at accomplishing goals of the nation-state that supports them. Hacktivists typically have political motivations, whereas script kiddies may simply be in it for recognition or fun."
  },
  {
    "question": "42. One of your users cannot recall the password for their laptop. You want to recover that password for them. You intend to use a tool/technique that is popular with hackers, and it consists of searching tables of precomputed hashes to recover the password. What best describes this?",
    "correct_answer": "A. Rainbow table",
    "incorrect_answers": [
      "B. Backdoor",
      "C. Social engineering",
      "D. Dictionary attack"
    ],
    "explanation": "A rainbow table is a table of precomputed hashes, used to retrieve passwords. A backdoor is used to gain access to a system, not to recover passwords. Social engineering and dictionary attacks can both be used to gain access to passwords, but they are not tables of precomputed hashes."
  },
  {
    "question": "43. What risk is commonly associated with a lack of vendor support for a product, such as an outdated version of a device?",
    "correct_answer": "B. Lack of patches or updates",
    "incorrect_answers": [
      "A. Improper data storage",
      "C. Lack of available documentation",
      "D. System integration and configuration issues"
    ],
    "explanation": "The most common concern that will arise when a vendor no longer supports a device is a lack of updates or patches. This is particularly concerning when the devices are operational technology such as utility, lighting, or other infrastructure control devices that have a very long life cycle and control important processes or systems. Although improper data storage, lack of documentation, and configuration issues can all be issues, lack of updates and patching remains the biggest and most frequent issue."
  },
  {
    "question": "44. You have noticed that when in a crowded area, you sometimes get a stream of unwanted text messages. The messages end when you leave the area. What describes this attack?",
    "correct_answer": "A. Bluejacking",
    "incorrect_answers": [
      "B. Bluesnarfing",
      "C. Evil twin",
      "D. Rogue access point"
    ],
    "explanation": "Bluejacking involves sending unsolicited messages to Bluetooth devices when they are in range. Bluesnarfing involves getting data from the Bluetooth device. An evil twin attack uses a rogue access point whose name is similar or identical to that of a legitimate access point."
  },
  {
    "question": "45. Dennis uses an on-path attack to cause a system to send HTTPS traffic to his system and then forwards it to the actual server the traffic is intended for. What type of password attack can he conduct with the data he gathers if he captures all the traffic from a login form?",
    "correct_answer": "A. A plain-text password attack",
    "incorrect_answers": [
      "B. A pass-the-hash attack",
      "C. A SQL injection attack",
      "D. A cross-site scripting attack"
    ],
    "explanation": "Since Dennis is able to view the web traffic before it is sent to the actual server, he should be able to conduct a plain-text password attack by intercepting the password. Pass-the-hash attacks are typically used inside Windows environments, SQL injection would attack the server, and cross-site scripting is possible but not as likely as the plain-text password attack in this scenario."
  },
  {
    "question": "46. Someone has been rummaging through your company's trash bins seeking to find documents, diagrams, or other sensitive information that has been thrown out. What is this called?",
    "correct_answer": "A. Dumpster diving",
    "incorrect_answers": [
      "B. Trash diving",
      "C. Social engineering",
      "D. Trash engineering"
    ],
    "explanation": "Dumpster diving is the term for rummaging through the waste/trash to recover useful documents or materials. Penetration testers and attackers may dumpster-dive as part of their efforts. In fact, emptying trash cans in a location can provide useful information even without jumping into a dumpster! Trash diving and trash engineering are not the terms used in the industry. Nothing in this scenario describes social engineering."
  },
  {
    "question": "47. Louis is investigating a malware incident on one of the computers on his network. He has discovered unknown software that seems to be opening a port, allowing someone to remotely connect to the computer. This software seems to have been installed at the same time as a small shareware application. Which of the following best describes this malware?",
    "correct_answer": "A. RAT",
    "incorrect_answers": [
      "B. Worm",
      "C. Logic bomb",
      "D. Rootkit"
    ],
    "explanation": "This is a remote-access Trojan (RAT), malware that opens access for someone to remotely access the system. A worm would have spread itself via a vulnerability, whereas a logic bomb runs when some logical condition is met. Finally, a rootkit provides root or administrative access to the system."
  },
  {
    "question": "48. Jared is responsible for network security at his company. He has discovered behavior on one computer that certainly appears to be a virus. He has even identified a file he thinks might be the virus. However, using three separate antivirus programs, he finds that none can detect the file. Which of the following is most likely to be occurring?",
    "correct_answer": "B. The computer has a zero-day exploit.",
    "incorrect_answers": [
      "A. The computer has a RAT.",
      "C. The computer has a worm.",
      "D. The computer has a rootkit."
    ],
    "explanation": "Zero-day exploits are new, and they are not in the virus definitions for the antivirus (AV) programs. This makes them difficult to detect, except by their behavior. RATs, worms, and rootkits are more likely to be detected by AV programs."
  },
  {
    "question": "49. Which of the following is not a common means of attacking RFID badges?",
    "correct_answer": "D. Birthday attacks",
    "incorrect_answers": [
      "A. Data capture",
      "B. Spoofing",
      "C. Denial-of-service"
    ],
    "explanation": "Radio frequency identifier (RFID) attacks typically focus on data capture, spoofing RFID data, or conducting a denial-of-service attack. Birthday attacks are used against cryptosystems, which may be part of an RFID tag environment, but they aren’t a common attack against RFID systems."
  },
  {
    "question": "50. Your wireless network has been breached. It appears the attacker modified a portion of data used with the stream cipher and used this to expose wirelessly encrypted data. What is this attack called?",
    "correct_answer": "C. IV attack",
    "incorrect_answers": [
      "A. Evil twin",
      "B. Rogue WAP",
      "D. WPS attack"
    ],
    "explanation": "Initialization vectors are used with stream ciphers. An IV attack attempts to exploit a flaw to use the IV to expose encrypted data. Nothing in this scenario requires or describes a rogue access point/evil twin. Wi-Fi Protected Setup (WPS) uses a PIN to connect to the wireless access point (WAP). The WPS attack attempts to intercept that PIN in transmission, connect to the WAP, and then steal the WPA2 password."
  },
  {
    "question": "51. The company that Scott works for has experienced a data breach, and the personal information of thousands of customers has been exposed. Which of the following impact categories is not a concern as described in this scenario?",
    "correct_answer": "C. Availability loss",
    "incorrect_answers": [
      "A. Financial",
      "B. Reputation",
      "D. Data loss"
    ],
    "explanation": "This description does not include any risk to availability since there is no information about systems or services being down or offline. This scenario would likely result in reputational, financial, and data loss impacts for Scott’s company."
  },
  {
    "question": "52. What type of attack exploits the trust that a website has for an authenticated user to attack that website by spoofing requests from the trusted user?",
    "correct_answer": "B. Cross-site request forgery",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. Bluejacking",
      "D. Evil twin"
    ],
    "explanation": "Cross-site request forgery (XSRF or CSRF) sends fake requests to a website that purport to be from a trusted, authenticated user. Cross-site scripting (XSS) exploits the trust the user has for the website and embeds scripts into that website. Bluejacking is a Bluetooth attack. Nothing in this scenario requires or describes an evil twin, which is an attack that uses a malicious access point that duplicates a legitimate AP."
  },
  {
    "question": "53. What purpose does a fusion center serve in cyberintelligence activities?",
    "correct_answer": "A. It promotes information sharing between agencies or organizations.",
    "incorrect_answers": [
      "B. It combines security technologies to create new, more powerful tools.",
      "C. It generates power for the local community in a secure way.",
      "D. It separates information by classification ratings to avoid accidental distribution."
    ],
    "explanation": "Cyberintelligence fusion is the process of gathering, analyzing, and then distributing information between disparate agencies and organizations. Fusion centers like those operated by the U.S. Department of Homeland Security (DHS) focus on strengthening shared intelligence activities. They are not specifically tasked with building tools by combining other tools, although they may in some cases. They are not power plants, and they are focused on gathering and sharing information, not building a classification structure."
  },
  {
    "question": "54. CVE is an example of what type of feed?",
    "correct_answer": "B. A vulnerability feed",
    "incorrect_answers": [
      "A. A threat intelligence feed",
      "C. A critical infrastructure listing feed",
      "D. A critical virtualization exploits feed"
    ],
    "explanation": "The Common Vulnerabilities and Exposures (CVE) list has entries that describe and provide references to publicly known cybersecurity vulnerabilities. A CVE feed will provide updated information about new vulnerabilities and a useful index number to cross reference with other services."
  },
  {
    "question": "55. What type of attack is a birthday attack?",
    "correct_answer": "B. A cryptographic attack",
    "incorrect_answers": [
      "A. A social engineering attack",
      "C. A network denial-of-service attack",
      "D. A TCP/IP protocol attack"
    ],
    "explanation": "A birthday attack exploits the birthday problem in probability theory and relies on finding collisions between random attack attempts and the number of potential permutations of a solution. Birthday attacks are one method of attacking cryptographic hash functions. They are not a social engineering attack, a network denial-of-service attack, or a TCP/IP protocol attack."
  },
  {
    "question": "56. Juanita is a network administrator for Acme Company. Some users complain that they keep getting dropped from the network. When Juanita checks the logs for the wireless access point (WAP), she finds that a deauthentication packet has been sent to the WAP from the users' IP addresses. What seems to be happening here?",
    "correct_answer": "B. Disassociation attack",
    "incorrect_answers": [
      "A. Problem with users' Wi-Fi configuration",
      "C. Session hijacking",
      "D. Backdoor attack"
    ],
    "explanation": "This an example of a disassociation attack. The deauthentication packet causes Juanita’s system to disassociate, and the attacker can then execute a second attack targeting her authentication credentials or other wireless data using an evil twin attack. Misconfiguration won’t cause authenticated users to deauthenticate. Session hijacking involves taking over an authenticated session. Backdoors are built-in methods to circumvent authentication."
  },
  {
    "question": "57. John has discovered that an attacker is trying to get network passwords by using software that attempts a number of passwords from a list of common passwords. What type of attack is this?",
    "correct_answer": "A. Dictionary",
    "incorrect_answers": [
      "B. Rainbow table",
      "C. Brute force",
      "D. Session hijacking"
    ],
    "explanation": "Dictionary attacks use a list of words that are believed to be likely passwords. A rainbow table is a precomputed table of hashes. Brute force tries every possible random combination. If an attacker has the original plain text and ciphertext for a message, they can determine the key space used through brute-force attempts targeting the key space. Session hijacking is when the attacker takes over an authenticated session."
  },
  {
    "question": "58. You are a network security administrator for a bank. You discover that an attacker has exploited a flaw in OpenSSL and forced some connections to move to a weak cipher suite version of TLS, which the attacker could breach. What type of attack was this?",
    "correct_answer": "B. Downgrade attack",
    "incorrect_answers": [
      "A. Disassociation attack",
      "C. Session hijacking",
      "D. Brute force"
    ],
    "explanation": "Downgrade attacks seek to make a Transport Layer Security (TLS) connection use a weaker cipher version, thus allowing the attacker to more easily break the encryption and read the protected data. In a disassociation attack, the attacker attempts to force the victim into disassociating from a resource. Session hijacking is when the attacker takes over an authenticated session. Brute-force attempts every possible random combination to get the password or encryption key."
  },
  {
    "question": "59. When an attacker tries to find an input value that will produce the same hash as a password, what type of attack is this?",
    "correct_answer": "D. Collision attack",
    "incorrect_answers": [
      "A. Rainbow table",
      "B. Brute force",
      "C. Session hijacking"
    ],
    "explanation": "A collision is when two different inputs produce the same hash. A rainbow table is a table of precomputed hashes. Brute force attempts every possible random combination to get the password or encryption key. Session hijacking is when the attacker takes over an authenticated session."
  },
  {
    "question": "60. Farès is the network security administrator for a company that creates advanced routers and switches. He has discovered that his company's networks have been subjected to a series of advanced attacks over a period of time. What best describes this attack?",
    "correct_answer": "C. APT",
    "incorrect_answers": [
      "A. DDoS",
      "B. Brute force",
      "D. Disassociation attack"
    ],
    "explanation": "An advanced persistent threat (APT) involves sophisticated (i.e., advanced) attacks over a period of time (i.e., persistent). A distributed denial-of-service (DDoS) could be a part of an APT, but in and of itself is unlikely to be an APT. Brute force attempts every possible random combination to get the password or encryption key. In a disassociation attack, the attacker attempts to force the victim into disassociating from a resource."
  },
  {
    "question": "61. What type of information is phishing not commonly intended to acquire?",
    "correct_answer": "B. Email addresses",
    "incorrect_answers": [
      "A. Passwords",
      "C. Credit card numbers",
      "D. Personal information"
    ],
    "explanation": "Phishing is not commonly used to acquire email addresses. Phishing emails target personal information and sensitive information like passwords and credit card numbers in most cases."
  },
  {
    "question": "62. John is running an IDS on his network. Users sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
    "correct_answer": "A. False positive",
    "incorrect_answers": [
      "B. False negative",
      "C. False trigger",
      "D. False flag"
    ],
    "explanation": "When an IDS or antivirus mistakes legitimate traffic for an attack, this is called a false positive. A false negative is when the IDS mistakes an attack for legitimate traffic. It is the opposite of a false positive. Options C and D are both incorrect. Although these may be grammatically correct, these are not the terms used in the industry. In military operations, false flag operations attempt to transfer blame to another company, thus a “false flag.”"
  },
  {
    "question": "63. Scott discovers that malware has been installed on one of the systems he is responsible for. Shortly afterward passwords used by the user that the system is assigned to are discovered to be in use by attackers. What type of malicious program should Scott look for on the compromised system?",
    "correct_answer": "B. A keylogger",
    "incorrect_answers": [
      "A. A rootkit",
      "C. A worm",
      "D. None of the above"
    ],
    "explanation": "A keylogger is a software or hardware tool used to capture keystrokes. Keyloggers are often used by attackers to capture credentials and other sensitive information. A rootkit is used to obtain and maintain administrative rights on a system, and a worm is a self-spreading form of malware that frequently targets vulnerable services on a network to spread."
  },
  {
    "question": "64. You are performing a penetration test of your company's network. As part of the test, you will be given a login with minimal access and will attempt to gain administrative access with this account. What is this called?",
    "correct_answer": "A. Privilege escalation",
    "incorrect_answers": [
      "B. Session hijacking",
      "C. Root grabbing",
      "D. Climbing"
    ],
    "explanation": "The term for attempting to gain any privileges beyond what you have is privilege escalation. Session hijacking is taking over an authenticated session. Root grabbing and climbing are not terms used in the industry."
  },
  {
    "question": "65. Matt discovers that a system on his network is sending hundreds of Ethernet frames to the switch it is connected to, with each frame containing a different source MAC address. What type of attack has he discovered?",
    "correct_answer": "B. MAC flooding",
    "incorrect_answers": [
      "A. Etherspam",
      "C. Hardware spoofing",
      "D. MAC hashing"
    ],
    "explanation": "MAC flooding attacks attempt to overflow a switch’s CAM table, causing the switch to send all traffic to all ports rather than to the port that a given MAC address is associated with. Although this was possible with many older switches, most modern switches are less susceptible to this type of attack, and some have security capabilities built in to prevent this type of attack."
  },
  {
    "question": "66. Spyware is an example of what type of malware?",
    "correct_answer": "B. PUP",
    "incorrect_answers": [
      "A. Trojan",
      "C. RAT",
      "D. Ransomware"
    ],
    "explanation": "Spyware and adware are both common examples PUPs, or potentially unwanted programs. Though not directly malicious, they can pose risks to user privacy as well as create annoyances like popups or other unwanted behaviors. Trojans appear to be legitimate programs or are paired with them, RATs provide remote access and are a subcategory of Trojans, and ransomware demands payment or other actions to avoid damage to files or reputation."
  },
  {
    "question": "67. Mary has discovered that a web application used by her company does not always handle multithreading properly, particularly when multiple threads access the same variable. This could allow an attacker who discovered this vulnerability to exploit it and crash the server. What type of error has Mary discovered?",
    "correct_answer": "C. Race conditions",
    "incorrect_answers": [
      "A. Buffer overflow",
      "B. Logic bomb",
      "D. Improper error handling"
    ],
    "explanation": "A race condition can occur when multiple threads in an application are using the same variable and the situation is not properly handled. Option A is incorrect. A buffer overflow is attempting to put more data in a buffer than it is designed to hold. Option B is incorrect. A logic bomb is malware that performs its misdeed when some logical condition is met. Option D is incorrect. As the name suggests, improper error handling is the lack of adequate or appropriate error handling mechanisms within software."
  },
  {
    "question": "68. An attacker is trying to get access to your network. He is sending users on your network a link to a new game with a hacked license code program. However, the game files also include software that will give the attacker access to any machine that it is installed on. What type of attack is this?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Rootkit",
      "C. Spyware",
      "D. Boot sector virus"
    ],
    "explanation": "The malware in this example is a Trojan horse—it pretends to be something desirable, or at least innocuous, and installs malicious software in addition to or instead of the desired software. A rootkit gives root or administrative access, spyware is malware that records user activities, and a boot sector virus is a virus that infects the boot sector of the hard drive."
  },
  {
    "question": "69. The following image shows a report from an OpenVAS system. What type of weak configuration is shown here?",
    "correct_answer": "B. Unsecured administrative accounts",
    "incorrect_answers": [
      "A. Weak encryption",
      "C. Open ports and services",
      "D. Unsecure protocols"
    ],
    "explanation": "The Postgres server is set up using a weak password for the user postgres, the administrative login for the database. This is a form of unsecured administrative or root account. Interestingly, this is not a default setting, since Postgres uses no password by default for the Postgres account—an even worse setting than using postgres as the password, but not by much!"
  },
  {
    "question": "70. While conducting a penetration test, Annie scans for systems on the network she has gained access to. She discovers another system within the same network that has the same accounts and user types as the one she is on. Since she already has a valid user account on the system she has already accessed, she is able to log in to it. What type of technique is this?",
    "correct_answer": "A. Lateral movement",
    "incorrect_answers": [
      "B. Privilege escalation",
      "C. Privilege retention",
      "D. Vertical movement"
    ],
    "explanation": "Annie has moved laterally. Lateral movement moves to systems at the same trust level. This can provide access to new data or different views of the network depending on how the systems and security are configured. Privilege escalation involves gaining additional privileges, often those of an administrative user. Vertical movement is sometimes referenced when gaining access to systems or accounts with a higher security or trust level. Privilege retention was made up for this question."
  },
  {
    "question": "71. Amanda scans a Red Hat Linux server that she believes is fully patched and discovers that the Apache version on the server is reported as vulnerable to an exploit from a few months ago. When she checks to see if she is missing patches, Apache is fully patched. What has occurred?",
    "correct_answer": "A. A false positive",
    "incorrect_answers": [
      "B. An automatic update failure",
      "C. A false negative",
      "D. An Apache version mismatch"
    ],
    "explanation": "This is an example of a false positive. A false positive can cause a vulnerability to show that was not actually there. This sometimes happens when a patch or fix is installed but the application does not change in a way that shows the change, and it has been an issue with updates where the version number is the primary check for a vulnerability. When a vulnerability scanner sees a vulnerable version number but a patch has been installed that does not update it, a false positive report can occur. A false negative would report a patch or fix where there was actually a vulnerability. Automatic updates were not mentioned, nor was a specific Apache version."
  },
  {
    "question": "72. When a program has variables, especially arrays, and does not check the boundary values before inputting data, what attack is the program vulnerable to?",
    "correct_answer": "C. Buffer overflow",
    "incorrect_answers": [
      "A. XSS",
      "B. CSRF",
      "D. Logic bomb"
    ],
    "explanation": "A buffer overflow is possible when boundaries are not checked and the attacker tries to put in more data than the variable can hold. Cross-site scripting (XSS) is a web page attack. Cross-site request forgery (CSRF) is a web page attack. A logic bomb is malware that performs its misdeed when some condition is met."
  },
  {
    "question": "73. Tracy is concerned that the software she wants to download may not be trustworthy, so she searches for it and finds many postings claiming that the software is legitimate. If she installs the software and later discovers it is malicious and that malicious actors have planted those reviews, what principle of social engineering have they used?",
    "correct_answer": "C. Consensus",
    "incorrect_answers": [
      "A. Scarcity",
      "B. Familiarity",
      "D. Trust"
    ],
    "explanation": "Consensus, sometimes called social proof, is a social engineering principle that leverages the fact that people are often willing to trust groups of other people. Here, the attackers have planted false information that the software is trustworthy, thus allowing targets to “prove” to themselves that they can safely install the software. Scarcity uses a perception that something may not be available or is uncommon and thus desirable. Familiarity takes advantage of the trust that individuals put into people and organizations they are already familiar with. Trust-based attacks exploit a perception of trustworthiness."
  },
  {
    "question": "74. Which of the following best describes malware that will execute some malicious activity when a particular condition is met (i.e., if the condition is met, then executed)?",
    "correct_answer": "B. Logic bomb",
    "incorrect_answers": [
      "A. Boot sector virus",
      "C. Buffer overflow",
      "D. Sparse infector virus"
    ],
    "explanation": "A logic bomb performs malicious actions when a specific condition or conditions are met. A boot sector virus infects the boot sector of the hard drive. A buffer overflow occurs when the attacker attempts to put more data in a variable than it can hold. A sparse infector virus performs its malicious activity intermittently to make it harder to detect."
  },
  {
    "question": "75. What term describes using conversational tactics as part of a social engineering exercise to extract information from targets?",
    "correct_answer": "B. Elicitation",
    "incorrect_answers": [
      "A. Pretexting",
      "C. Impersonation",
      "D. Intimidation"
    ],
    "explanation": "Elicitation, or the process of eliciting information through conversation to gather useful information, is a key tool in a penetration tester’s social engineering arsenal. Pretexting involves the use of believable reasons for the target to go along with whatever the social engineering is attempting to do. Impersonation involves acting like someone you are not, whereas intimidation attempts to scare or threaten the target into doing what the social engineer wants them to."
  },
  {
    "question": "76. Telnet, RSH, and FTP are all examples of what?",
    "correct_answer": "B. Unsecure protocols",
    "incorrect_answers": [
      "A. File transfer protocols",
      "C. Core protocols",
      "D. Open ports"
    ],
    "explanation": "All of these protocols are unsecure. FTP has been replaced by secure versions in some uses (SFTP/FTPS), whereas Telnet has been superseded by SSH in modern applications. RSH is outmoded and should be seen only on truly ancient systems. If you find a system or device exposing these protocols, you will need to dig in further to determine why they are exposed and how they can be protected if they must remain open for a legitimate reason."
  },
  {
    "question": "77. Scott wants to determine where an organization's wireless network can be accessed from. What testing techniques are his most likely options?",
    "correct_answer": "B. War driving and war flying",
    "incorrect_answers": [
      "A. OSINT and active scans",
      "C. Social engineering and active scans",
      "D. OSINT and war driving"
    ],
    "explanation": "The best way for Scott to determine where an organization’s wireless networks can be accessed from is to use war driving, war flying, and/or war walking techniques to map out the wireless signal footprint of the organization. OSINT and active scans would be useful gathering information about the organization and its systems, but not about its wireless networks range and accessibility, and social engineering is more likely to be useful for gathering information or gaining access to facilities or systems."
  },
  {
    "question": "78. Gerald is a network administrator for a small financial services company. Users are reporting odd behavior that appears to be caused by a virus on their machines. After isolating the machines that he believes are infected, Gerald analyzes them. He finds that all the infected machines received an email purporting to be from accounting, with an Excel spreadsheet, and the users opened the spreadsheet. What is the most likely issue on these machines?",
    "correct_answer": "A. A macro virus",
    "incorrect_answers": [
      "B. A boot sector virus",
      "C. A Trojan horse",
      "D. A RAT"
    ],
    "explanation": "A macro virus is a malicious script (macro) embedded into a file, typically a Microsoft Office file. They are typically written in Visual Basic for Applications (VBA) script. A boot sector virus infects the boot sector of the hard drive. A Trojan horse is malware that is tied to a legitimate program. In this scenario, the malware is actually embedded in an Office document. The two are similar, but not the same. A remote access Trojan (RAT) is a Trojan horse that gives the attacker remote access to the machine."
  },
  {
    "question": "79. Your company has hired an outside security firm to perform various tests of your network. During the vulnerability scan, you will provide that company with logins for various systems (i.e., database server, application server, web server, etc.) to aid in their scan. What best describes this?",
    "correct_answer": "C. A credentialed scan",
    "incorrect_answers": [
      "A. A known environment test",
      "B. A gray-box test",
      "D. An intrusive scan"
    ],
    "explanation": "By giving the tester logins, you are allowing them to conduct a credentialed scan (i.e., a scan with an account or accounts that allow them access to check settings and configurations). Known environment and partially known environment tests describe the level of knowledge the tester is given of the network. A privilege scan cannot be an unknown environment test, but it could be either known or partially known. An intrusive scan is a term used for scans that attempt to exercise or use the vulnerability they find instead of attempting to avoid harm."
  },
  {
    "question": "80. Steve discovers the following code on a system. What language is it written in, and what does it do?\nimport socket as skt\nfor port in range (1,9999):\ntry:\nsc=skt.socket(askt.AF_INET,skt.SOCK_STREAM)\nsc.settimeout(900)\nsc.connect(('127.0.0.1,port))\nprint '%d:OPEN' % (port)\nsc.close\nexcept: continue",
    "correct_answer": "B. Python, port scanning",
    "incorrect_answers": [
      "A. Perl, vulnerability scanning",
      "C. Bash, vulnerability scanning",
      "D. PowerShell, port scanning"
    ],
    "explanation": "The Security+ exam expects practitioners to be able to analyze scripts and code to determine roughly what function they perform and to be able to identify multiple programming languages. Python relies on formatting like indenting to indicate blocks of code and does not use line end indicators as you would find in some languages. This code is a basic Python port scanner that will scan every port from 1 to 9999, checking to see if it allows a connection."
  },
  {
    "question": "81. Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "correct_answer": "C. Botnet",
    "incorrect_answers": [
      "A. Phishing",
      "B. Adware",
      "D. Trojan"
    ],
    "explanation": "Botnets are often used to launch DDoS attacks, with the attack coming from all the computers in the botnet simultaneously. Phishing attacks attempt to get the user to give up information, click on a link, or open an attachment. Adware consists of unwanted popup ads. A Trojan horse attaches malware to a legitimate program."
  },
  {
    "question": "82. Amanda discovers that a member of her organization's staff has installed a remote access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "correct_answer": "B. Insider threat",
    "incorrect_answers": [
      "A. Zero-day",
      "C. Misconfiguration",
      "D. Weak encryption"
    ],
    "explanation": "Amanda has discovered an insider threat. Insider threats can be difficult to discover, as a malicious administrator or other privileged user will often have the ability to conceal their actions or may actually be the person tasked with hunting for threats like this! This is not a zero-day—no vulnerability was mentioned, there was no misconfiguration since this was an intentional action, and encryption is not mentioned or discussed."
  },
  {
    "question": "83. Postings from Russian agents during the 2016 U.S. presidential campaign to Facebook and Twitter are an example of what type of effort?",
    "correct_answer": "B. A social media influence campaign",
    "incorrect_answers": [
      "A. Impersonation",
      "C. Asymmetric warfare",
      "D. A watering hole attack"
    ],
    "explanation": "Social media influence campaigns seek to achieve the goals of the attacker or owner of the campaign. They leverage social media using bots and groups of posters to support the ideas, concepts, or beliefs that align with the goals of the campaign. Impersonation is a type of social engineering attack where the attacker pretends to be someone else. A watering hole attack places malware or malicious code on a site or sites that are frequently visited by a targeted group. Asymmetric warfare is warfare between groups with significantly different power or capabilities."
  },
  {
    "question": "84. Juan is responsible for incident response at a large financial institution. He discovers that the company Wi-Fi has been breached. The attacker used the same login credentials that ship with the wireless access point (WAP). The attacker was able to use those credentials to access the WAP administrative console and make changes. Which of the following best describes what caused this vulnerability to exist?",
    "correct_answer": "C. Using default settings",
    "incorrect_answers": [
      "A. Improperly configured accounts",
      "B. Untrained users",
      "D. Failure to patch systems"
    ],
    "explanation": "Using default settings is a form of weak configuration. Many vulnerability scanners and attack tools have default settings built-in to test with, and default settings are easily obtained for most devices with a quick search of the Internet. Configuring the accounts is not the issue; changing default passwords and settings is. Although training users is important, that’s not the issue in this scenario. Patching systems is important, but that won’t change default settings."
  },
  {
    "question": "85. Elizabeth is investigating a network breach at her company. She discovers a program that was able to execute code within the address space of another process by using the target process to load a specific library. What best describes this attack?",
    "correct_answer": "D. DLL injection",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Session hijacking",
      "C. Buffer overflow"
    ],
    "explanation": "In a DLL injection, the malware attempts to inject code into the process of some library. This is a rather advanced attack. Option A is incorrect. A logic bomb executes its misdeed when some condition is met. Option B is incorrect. Session hijacking is taking over an authenticated session. Option C is incorrect. Buffer overflows are done by sending more data to a variable than it can hold."
  },
  {
    "question": "86. Which of the following threat actors is most likely to be associated with an advanced persistent threat (APT)?",
    "correct_answer": "B. State actors",
    "incorrect_answers": [
      "A. Hacktivists",
      "C. Script kiddies",
      "D. Insider threats"
    ],
    "explanation": "State actors (or nation-state actors) often have greater resources and skills, making them a more significant threat and far more likely to be associated with an advanced persistent threat actor. Script kiddies, hacktivists, and insider threats tend to be less capable and are all far less likely to be associated with an APT."
  },
  {
    "question": "87. What is the primary difference between an intrusive and a nonintrusive vulnerability scan?",
    "correct_answer": "C. An intrusive scan could potentially disrupt operations.",
    "incorrect_answers": [
      "A. An intrusive scan is a penetration test.",
      "B. A nonintrusive scan is just a document check.",
      "D. A nonintrusive scan won't find most vulnerabilities."
    ],
    "explanation": "An intrusive scan attempts to actively exploit vulnerabilities, and thus could possibly cause some disruption of operations. For this reason, it should be conducted outside normal business hours or in a test environment, if it is used at all. A nonintrusive scan attempts to identify vulnerabilities without exploiting them. A penetration test actually attempts to breach the network by exploiting vulnerabilities. An audit is primarily a document check. Both intrusive and nonintrusive vulnerability scans can be effective at finding vulnerabilities."
  },
  {
    "question": "88. Your company outsourced development of an accounting application to a local programming firm. After three months of using the product, one of your administrators discovers that the developers have inserted a way to log in and bypass all security and authentication. What best describes this?",
    "correct_answer": "C. Backdoor",
    "incorrect_answers": [
      "A. Logic bomb",
      "B. Trojan horse",
      "D. Rootkit"
    ],
    "explanation": "A backdoor is a method for bypassing normal security and directly accessing the system. A logic bomb is malware that performs its misdeeds when some condition is met. A Trojan horse wraps a malicious program to a legitimate program. When the user downloads and installs the legitimate program, they get the malware. A rootkit is malware that gets root or administrative privileges."
  },
  {
    "question": "89. Daryl is investigating a recent breach of his company's web server. The attacker used sophisticated techniques and then defaced the website, leaving messages that were denouncing the company's public policies. He and his team are trying to determine the type of actor who most likely committed the breach. Based on the information provided, who was the most likely threat actor?",
    "correct_answer": "D. Hacktivists",
    "incorrect_answers": [
      "A. A script",
      "B. A nation-state",
      "C. Organized crime"
    ],
    "explanation": "The fact that the website is defaced in a manner related to the company’s public indicates that the attackers were most likely engaging in hacktivism to make a political or belief-based point. Scripts, nation-state actors, and organized crime don’t account for the statements adverse to the company’s policies, which is why hacktivism is the real cause."
  },
  {
    "question": "90. What two techniques are most commonly associated with a pharming attack?",
    "correct_answer": "A. Modifying the hosts file on a PC or exploiting a DNS vulnerability on a trusted DNS server",
    "incorrect_answers": [
      "B. Phishing many users and harvesting email addresses from them",
      "C. Phishing many users and harvesting many passwords from them",
      "D. Spoofing DNS server IP addresses or modifying the hosts file on a PC"
    ],
    "explanation": "Pharming attempts to redirect traffic intended for a legitimate site to another malicious site. Attackers most often do this by changing the local hosts file or by exploiting a trusted DNS server."
  },
  {
    "question": "91. Angela reviews the authentication logs for her website and sees attempts from many different accounts using the same set of passwords. What is this attack technique called?",
    "correct_answer": "B. Password spraying",
    "incorrect_answers": [
      "A. Brute forcing",
      "C. Limited login attacks",
      "D. Account spinning"
    ],
    "explanation": "Password spraying is a specific type of brute force attack which uses a smaller list of common passwords for many accounts to attempt to log in. Although brute forcing is technically correct, the best match here is password spraying. When you encounter questions like this on the test, make sure you provide the most accurate answer, rather than one that fits but may not be the best answer. Limited login attacks is a made-up answer, and spinning an account refers to changing the password for an account, often because of a compromise or to prevent a user from logging back into it while preserving the account."
  },
  {
    "question": "92. When investigating breaches and attempting to attribute them to specific threat actors, which of the following is not one of the indicators of an APT?",
    "correct_answer": "C. The attack comes from a foreign IP address.",
    "incorrect_answers": [
      "A. Long-term access to the target",
      "B. Sophisticated attacks",
      "D. The attack is sustained over time."
    ],
    "explanation": "Although you might suppose that a nation-state attacker (the usual attacker behind an advanced persistent threat) would attack from a foreign IP address, they often use a compromised address in the target country as a base for attacks. Options A, B, and D are all incorrect. These are actually signs of an advanced persistent threat."
  },
  {
    "question": "93. Charles discovers that an attacker has used a vulnerability in a web application that his company runs and has then used that exploit to obtain root privileges on the web server. What type of attack has he discovered?",
    "correct_answer": "B. Privilege escalation",
    "incorrect_answers": [
      "A. Cross-site scripting",
      "C. A SQL injection",
      "D. A race condition"
    ],
    "explanation": "A privilege escalation attack can occur horizontally, where attackers obtain similar levels of privilege but for other users, or vertically where they obtain more advanced rights. In this case, Charles has discovered a vertical privilege escalation attack that has allowed the attacker to obtain administrative rights. Cross-site scripting and SQL injection are both common types of web application attacks, and a race condition occurs when data can be changed between when it is checked and when it is used."
  },
  {
    "question": "94. What type of attack uses a second wireless access point (WAP) that broadcasts the same SSID as a legitimate access point, in an attempt to get users to connect to the attacker's WAP?",
    "correct_answer": "A. Evil twin",
    "incorrect_answers": [
      "B. IP spoofing",
      "C. Trojan horse",
      "D. Privilege escalation"
    ],
    "explanation": "Evil twin attacks use a malicious access point configured to appear to be identical to a legitimate AP. Attackers wait for their targets to connect via the evil twin, and can then capture or modify traffic however they wish. IP spoofing uses the IP address of a system already on the network, Trojan horses are malware that appear to be legitimate software or files, and privilege escalation is the process of using exploits to gain higher privileges."
  },
  {
    "question": "95. Which of the following best describes a zero-day vulnerability?",
    "correct_answer": "A. A vulnerability that the vendor is not yet aware of",
    "incorrect_answers": [
      "B. A vulnerability that has not yet been breached",
      "C. A vulnerability that can be quickly exploited (i.e., in zero days)",
      "D. A vulnerability that will give the attacker brief access (i.e., zero days)"
    ],
    "explanation": "A zero-day exploit or attack occurs before the vendor has knowledge of it. The remainder of the answers don’t accurately describe a zero-day attack—just because it has not yet been breached does not make it a zero-day, nor is a zero-day necessarily quickly exploitable. Finally, a zero-day attack does not specify how long the attacker may have access."
  },
  {
    "question": "96. What type of attack involves adding an expression or phrase such as adding “SAFE” to mail headers?",
    "correct_answer": "D. Prepending",
    "incorrect_answers": [
      "A. Pretexting",
      "B. Phishing",
      "C. SQL injection"
    ],
    "explanation": "Prepending is one of the stranger terms that appear on the CompTIA Security+ exam and is not a commonly used phrase in the industry. Thus, you need to know that when it is used for this exam it can mean one of three things: adding an expression or phrase to an email, subject line, or headers to either protect or fool users. They also note that it can be used when adding data as part of an attack, and that social engineers may “prepend” information by inserting it into conversation to get targets to think about things the attacker wants them to. Pretexing is a social engineering technique where attackers use a reason that is intended to be believable to the target for what they are doing. SQL injection is attempts to add SQL code to a web query to gain additional access or data. Prepending is used to cover a wide variety of techniques in the Security+ exam outline that focus on adding information or data to existing content."
  },
  {
    "question": "97. Charles wants to ensure that his outsourced code development efforts are as secure as possible. Which of the following is not a common practice to ensure secure remote code development?",
    "correct_answer": "D. Audit all underlying libraries used in the code.",
    "incorrect_answers": [
      "A. Ensure developers are trained on secure coding techniques.",
      "B. Set defined acceptance criteria for code security.",
      "C. Test code using automated and manual security testing systems."
    ],
    "explanation": "Although auditing some libraries or libraries that are custom-developed for the code is common, auditing all libraries used in the code is unlikely except in exceptional situations. The remainder of these practices are all commonly used when working with outsourced code development teams."
  },
  {
    "question": "98. You have discovered that there are entries in your network's domain name server that point legitimate domains to unknown and potentially harmful IP addresses. What best describes this type of attack?",
    "correct_answer": "C. DNS poisoning",
    "incorrect_answers": [
      "A. A backdoor",
      "B. An APT",
      "D. A Trojan horse"
    ],
    "explanation": "DNS poisoning occurs when false DNS information is inserted into legitimate DNS servers, resulting in traffic being redirected to unwanted or malicious sites. A backdoor provides access to the system by circumventing normal authentication. An APT is an advanced persistent threat. A Trojan horse ties a malicious program to a legitimate program."
  },
  {
    "question": "99. Spyware is an example of what type of malicious software?",
    "correct_answer": "C. A PUP",
    "incorrect_answers": [
      "A. A CAT",
      "B. A worm",
      "D. A Trojan"
    ],
    "explanation": "Spyware and adware are both common examples of a PUP, or potentially unwanted program. A CAT was made up for this question and is not a common categorization for malware, whereas worms are self-spreading malware that often exploit vulnerabilities to spread via a network. Trojans pretend to be legitimate software or paired with legitimate software to gain entry to a system or device."
  },
  {
    "question": "100. What best describes an attack that attaches some malware to a legitimate program so that when the user installs the legitimate program, they inadvertently install the malware?",
    "correct_answer": "B. Trojan horse",
    "incorrect_answers": [
      "A. Backdoor",
      "C. RAT",
      "D. Polymorphic virus"
    ],
    "explanation": "A Trojan horse pretends to be legitimate software, and may even include it, but also includes malicious software as well. Backdoors, RATs, and polymorphic viruses are all attacks, but they do not match what is described in the question scenario."
  }
]
