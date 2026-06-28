import type { Lang } from './translations'

export type ServiceItem = { title: string; description: string }

export type ServiceSection = {
  eyebrow: string
  heading: string
  intro?: string
  items: ServiceItem[]
}

export type ServicePageData = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta?: string
  }
  sections: ServiceSection[]
  whyUs: {
    eyebrow: string
    heading: string
    intro?: string
    points: string[]
    credentialsHeading?: string
    credentials?: ServiceItem[]
  }
  faq?: { question: string; answer: string }[]
}

// ─────────────────────────────────────────────────────────────────────────────
// CYBERSECURITY
// ─────────────────────────────────────────────────────────────────────────────
const cybersecurity: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'CYBERSECURITY · QATAR · GCC',
      title: 'Top Cyber Security Service Provider in Qatar, GCC',
      subtitle: 'Information system auditing is getting more popular around the globe and is now the auditing focus. A leading provider of information audits with numerous extra benefits is Compass IT Solutions.',
      primaryCta: 'Book a Consultation',
      secondaryCta: 'Secure your business',
    },
    sections: [
      {
        eyebrow: 'OUR SERVICES',
        heading: 'Comprehensive Cyber Security Consulting Services Qatar, Saudi Arabia, UAE',
        intro: 'Compass IT Solutions offers full-scale cybersecurity consultant services in Qatar, GCC in line with your intended business vision. One of the leading cybersecurity companies in Qatar, Saudi Arabia, UAE — our services enable organizations to evolve from reactive defenses to proactive cyber resilience.',
        items: [
          { title: 'Risk Assessment', description: 'Identifying loopholes and other vulnerabilities in your IT system helps you evaluate potential impacts on data integrity, confidentiality, and availability. By implementing the appropriate countermeasures under our advice, the risks and possible consequences of any breach can be minimized.' },
          { title: 'Cybersecurity', description: 'We assist our clients in approaching cybersecurity strategically, reducing the associated risks, and strengthening their information security. We can help you align your security program by making use of all of our strategic or technology service capabilities.' },
          { title: 'Security Assessment', description: "The process of assessing an organization's compliance with pertinent cybersecurity standards, laws, and best practices is known as a security assessment review audit. An organization's cybersecurity controls should be evaluated for efficacy, and any non-compliance or vulnerabilities should be found during such a review." },
          { title: 'Impact Assessment', description: "A procedure that assesses the possible effects of security incidents or vulnerabilities on an organization's information technology systems, assets, and activities. Its objectives are to identify and rank risks, comprehend the possible repercussions of those risks, and create suitable mitigation plans." },
          { title: 'Security Implementations & Trainings', description: "Protecting an organization's data, networks, and systems against illegal access, security breaches, and other dangers requires putting in place strong IT security procedures. Network infrastructure and data will be protected by putting firewalls, VPNs, and intrusion detection and prevention systems (IDPS) into place." },
          { title: 'Business Continuity Planning', description: 'Imagine discovering a significant data breach or a natural disaster when you woke up the following day. Such disruptions will have a significant effect on your company. For the benefit of your business, you must not give up; instead, you must get up and get back into shape.' },
          { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', description: 'Businesses can remain resolute in the face of lawful cyberattacks thanks to Vulnerability and penetration testing. This test will identify the weak points in every piece of technology you own, including computers, servers, firewalls, and networks. Any business, regardless of size, must use VAPT to find its weak points.' },
          { title: 'ISO Compliance', description: "We help you become compliant with various ISO certifications and obtain them. The International Standards Organization, or ISO, is a separate entity that develops the standards for the group. A standard is the effectiveness, safety, and caliber of a business's goods or services." },
          { title: 'Data Privacy and Security', description: 'Organizations nowadays place a higher priority on evolving customer privacy expectations, stakeholder profitability demands, and tighter privacy rules. Consequently, there is a growing focus on personal data, and companies have to navigate a complicated landscape of regulatory, reputational, and data privacy risks.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Why Businesses Trust Compass IT Solutions for Cybersecurity in Qatar, Saudi Arabia, UAE',
      intro: 'Compass IT Solutions is not just a vendor; we are a long-term cybersecurity service provider in GCC. Our flexible and business-aligned approach truly sets us apart as the top cyber security service provider in Qatar, Saudi Arabia, UAE.',
      points: [
        '75+ clients across GCC — Qatar, Saudi Arabia and UAE',
        'Strong domain knowledge in BFSI, healthcare, telecom, and the public sector',
        'Flexible security solutions that greatly reduce breach risks and provide significant compliance help',
        'Tools and frameworks: EDR, SOAR, SIEM',
        'CISSP, OSCP, CEH Certified resources',
        'Ethical hacking and audit specialists',
        'Compliance knowledge for the specific sector',
        'Strategic frameworks backed by automation and analytics',
      ],
      credentialsHeading: 'Credentials and Standards for Cybersecurity Services',
      credentials: [
        { title: 'Certified Information Systems Auditor (CISA)', description: 'CISA is a globally recognized certification issued by ISACA. It validates professionals\' knowledge and expertise in auditing, controlling, and securing information systems.' },
        { title: 'ISO 27001', description: 'ISO 27001 is an international standard for information security management systems. Organizations that achieve ISO 27001 certification demonstrate their commitment to effectively managing information security risks.' },
        { title: 'COBIT', description: 'COBIT is a framework developed by ISACA that provides guidelines and best practices for IT governance and management. It helps organizations align IT with business objectives, ensure effective risk management, and optimize IT processes.' },
        { title: 'Certified Ethical Hacker (CEH)', description: 'The EC-Council grants the CEH certification to individuals who can demonstrate their ability to evaluate the security posture of target systems using the same tools and knowledge as malicious hackers, but in a legal and ethical manner.' },
        { title: 'NIST Cybersecurity Framework', description: "The NIST Cybersecurity Framework provides guidelines and best practices for managing and improving an organization's cybersecurity posture. It helps organizations identify, protect, detect, respond to, and recover from cybersecurity incidents." },
      ],
    },
    faq: [
      { question: 'What services does Compass IT Solutions offer?', answer: 'Compass IT Solutions provides a wide range of cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT), Risk Assessment, Cybersecurity, Security Assessment, Security Implementations & Training, Data Privacy and Security, and Business Continuity Planning.' },
      { question: 'Why should businesses choose Compass IT Solutions for cybersecurity consulting?', answer: 'Compass IT Solutions combines certified cybersecurity professionals, advanced tools such as SIEM and SOAR, and risk-based security frameworks to help organizations build strong and scalable security infrastructures.' },
      { question: 'What is VAPT and why is it important?', answer: 'Vulnerability Assessment and Penetration Testing (VAPT) identifies security weaknesses in systems, networks, and applications. It helps organizations detect vulnerabilities before hackers exploit them and strengthens overall cybersecurity defenses.' },
    ],
  },
  ar: {
    hero: {
      eyebrow: 'الأمن السيبراني · قطر · دول الخليج',
      title: 'أفضل مزود لخدمات الأمن السيبراني في قطر ودول الخليج',
      subtitle: 'أصبح تدقيق أنظمة المعلومات أكثر انتشاراً على مستوى العالم ويحتل مكانة محورية في مجال التدقيق. كومباس آي تي سولوشنز — مزود رائد لعمليات تدقيق المعلومات مع فوائد إضافية متعددة.',
      primaryCta: 'احجز استشارة',
      secondaryCta: 'أمّن أعمالك',
    },
    sections: [
      {
        eyebrow: 'خدماتنا',
        heading: 'خدمات استشارات الأمن السيبراني الشاملة في قطر والمملكة العربية السعودية والإمارات',
        intro: 'تقدم كومباس آي تي سولوشنز خدمات استشارات أمن سيبراني متكاملة في قطر ودول الخليج تتوافق مع رؤيتك التجارية. إحدى شركات الأمن السيبراني الرائدة في المنطقة — خدماتنا تمكّن المؤسسات من الانتقال من الدفاع التفاعلي إلى المرونة السيبرانية الاستباقية.',
        items: [
          { title: 'تقييم المخاطر', description: 'يساعد تحديد الثغرات ونقاط الضعف في نظامك على تقييم التأثيرات المحتملة على سلامة البيانات وسريتها وتوافرها. من خلال تطبيق التدابير المضادة المناسبة بناءً على توجيهاتنا، يمكن تقليل المخاطر والعواقب المحتملة لأي خرق.' },
          { title: 'الأمن السيبراني', description: 'نساعد عملاءنا على معالجة الأمن السيبراني باستراتيجية واضحة، وتقليل المخاطر المرتبطة به، وتعزيز أمن معلوماتهم. نساعدك على مواءمة برنامجك الأمني من خلال الاستفادة من قدراتنا الاستراتيجية والتقنية.' },
          { title: 'تقييم الأمن', description: 'عملية تقييم مدى امتثال المؤسسة للمعايير والقوانين وأفضل الممارسات المتعلقة بالأمن السيبراني. يجب تقييم ضوابط الأمن السيبراني لمعرفة مدى فاعليتها، وتحديد أي حالات عدم امتثال أو ثغرات تستوجب المعالجة.' },
          { title: 'تقييم الأثر', description: 'إجراء يقيّم التأثيرات المحتملة للحوادث الأمنية أو الثغرات على أنظمة المعلومات التقنية للمؤسسة وأصولها وعملياتها. أهدافه: تحديد المخاطر وترتيبها، وفهم عواقبها المحتملة، ووضع خطط تخفيف مناسبة.' },
          { title: 'تطبيقات الأمن والتدريب', description: 'تأمين بيانات المؤسسة وشبكاتها وأنظمتها ضد الوصول غير المشروع والاختراقات الأمنية يتطلب وضع إجراءات أمنية تقنية قوية. سيتم حماية البنية التحتية للشبكة والبيانات من خلال تطبيق جدران الحماية والشبكات الافتراضية الخاصة وأنظمة كشف التسلل.' },
          { title: 'تخطيط استمرارية الأعمال', description: 'تخيّل أنك اكتشفت اختراقاً كبيراً للبيانات أو كارثة طبيعية عند استيقاظك في الصباح. مثل هذه الاضطرابات ستؤثر تأثيراً كبيراً على شركتك. لمصلحة عملك، يجب ألا تستسلم؛ بل عليك النهوض والعودة إلى مسارك الصحيح.' },
          { title: 'تقييم الضعف واختبار الاختراق (VAPT)', description: 'يتيح اختبار الضعف والاختراق للشركات التصدي للهجمات السيبرانية القانونية بثبات. يحدد هذا الاختبار نقاط الضعف في كل جهاز تقني تمتلكه، بما في ذلك الحواسيب والخوادم وجدران الحماية والشبكات. يعد VAPT ضرورياً لأي مؤسسة بغض النظر عن حجمها.' },
          { title: 'الامتثال لمعايير ISO', description: 'نساعدك على الامتثال لشهادات ISO المختلفة والحصول عليها. منظمة ISO هي هيئة مستقلة تضع المعايير الدولية التي تحدد الفعالية والسلامة والجودة في سلع وخدمات الشركات.' },
          { title: 'خصوصية البيانات وأمنها', description: 'باتت المؤسسات تولي أولوية متزايدة لتوقعات خصوصية العملاء ومتطلبات الربحية وقواعد الخصوصية الأكثر صرامة. ونتيجةً لذلك، يتزايد التركيز على البيانات الشخصية، وعلى الشركات التعامل مع مشهد معقد من المخاطر التنظيمية وخصوصية البيانات.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'لماذا تثق الشركات بكومباس آي تي سولوشنز للأمن السيبراني في قطر والسعودية والإمارات',
      intro: 'كومباس آي تي سولوشنز ليست مجرد مورد؛ نحن شريك استراتيجي طويل الأمد في مجال الأمن السيبراني بدول الخليج. نهجنا المرن والمتوافق مع متطلبات الأعمال يميزنا بوصفنا أفضل مزودي خدمات الأمن السيبراني في المنطقة.',
      points: [
        'أكثر من 75 عميل في دول الخليج — قطر والمملكة العربية السعودية والإمارات',
        'خبرة قوية في قطاعات الخدمات المالية والرعاية الصحية والاتصالات والقطاع العام',
        'حلول أمنية مرنة تقلل مخاطر الاختراق بشكل كبير وتدعم الامتثال التنظيمي',
        'أدوات وأطر عمل: EDR وSOAR وSIEM',
        'موارد بشرية حاصلة على شهادات CISSP وOSCP وCEH',
        'متخصصون في الاختراق الأخلاقي والتدقيق الأمني',
        'معرفة متعمقة بمتطلبات الامتثال في كل قطاع',
        'أطر استراتيجية مدعومة بالأتمتة والتحليلات',
      ],
      credentialsHeading: 'اعتمادات ومعايير خدمات الأمن السيبراني',
      credentials: [
        { title: 'مدقق أنظمة المعلومات المعتمد (CISA)', description: 'شهادة معترف بها دولياً تمنحها منظمة ISACA، تُثبت كفاءة المهنيين في تدقيق أنظمة المعلومات والتحكم فيها وتأمينها.' },
        { title: 'ISO 27001', description: 'معيار دولي لأنظمة إدارة أمن المعلومات. تُثبت الجهات الحاصلة على هذه الشهادة التزامها الفعّال بإدارة مخاطر أمن المعلومات.' },
        { title: 'COBIT', description: 'إطار عمل طورته منظمة ISACA يوفر إرشادات وممارسات مثلى لحوكمة تكنولوجيا المعلومات وإدارتها، ومواءمة تقنية المعلومات مع أهداف الأعمال.' },
        { title: 'المخترق الأخلاقي المعتمد (CEH)', description: 'شهادة تمنحها مجلس EC-Council للأفراد القادرين على تقييم الوضع الأمني للأنظمة باستخدام نفس أدوات القراصنة، لكن بطريقة قانونية وأخلاقية.' },
        { title: 'إطار الأمن السيبراني NIST', description: 'يوفر إرشادات وممارسات مثلى لإدارة وضع الأمن السيبراني وتحسينه، ويساعد المؤسسات على تحديد التهديدات والتصدي لها والتعافي من الحوادث الأمنية.' },
      ],
    },
    faq: [
      { question: 'ما هي الخدمات التي تقدمها كومباس آي تي سولوشنز؟', answer: 'تقدم كومباس آي تي سولوشنز طيفاً واسعاً من خدمات الأمن السيبراني تشمل: اختبار الاختراق وتقييم الضعف، وتقييم المخاطر، والأمن السيبراني، وتقييم الأمن، وتطبيقات الأمن والتدريب، وخصوصية البيانات وأمنها، وتخطيط استمرارية الأعمال.' },
      { question: 'لماذا يجب على الشركات اختيار كومباس آي تي سولوشنز للاستشارات الأمنية؟', answer: 'تجمع كومباس آي تي سولوشنز بين متخصصين أمنيين معتمدين وأدوات متقدمة كـ SIEM وSOAR، وأطر عمل قائمة على المخاطر، لمساعدة المؤسسات على بناء بنية تحتية أمنية متينة وقابلة للتوسع.' },
      { question: 'ما هو اختبار الاختراق وتقييم الضعف وما أهميته؟', answer: 'يحدد اختبار الاختراق وتقييم الضعف (VAPT) نقاط الضعف الأمنية في الأنظمة والشبكات والتطبيقات، مما يتيح للمؤسسات اكتشاف الثغرات قبل استغلالها وتعزيز دفاعاتها الأمنية.' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// IT SERVICES
// ─────────────────────────────────────────────────────────────────────────────
const itServices: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'IT SERVICES · QATAR · GCC',
      title: 'Best IT Service Company In Qatar-GCC',
      subtitle: 'As a leading IT services company in Qatar, Compass IT Solutions provides comprehensive end-to-end IT services and IT solutions to businesses across the GCC — backed by up-to-date knowledge and expertise in the latest IT technologies.',
      primaryCta: 'Contact us',
    },
    sections: [
      {
        eyebrow: 'OUR SERVICES',
        heading: 'Make Your Growth — Best IT Support Company In Qatar, GCC',
        intro: "Compass IT Solutions is a trusted and reputable managed IT Support Company in Qatar. Our objective is to place our client's needs at the forefront by delivering IT solutions that improve business efficiency, all while minimizing downtime and reducing costs.",
        items: [
          { title: 'Managed IT Support', description: 'Compass IT Solutions is a trusted and reputable managed IT Support Company in Qatar. We help your business grow to the highest level without IT obstacles, addressing every challenge that hinders your growth.' },
          { title: 'Onsite & Remote IT Support', description: "Contact us for reliable onsite and remote IT support solutions tailored to meet your business needs in Qatar. Our IT support is prompt and readily available — simply submit a request, and we'll get back to you without delay." },
          { title: 'IT Hardware & Software Supply', description: 'As a trusted IT supplier in Qatar, Compass IT Solutions provides a comprehensive selection of genuine hardware and software solutions, including servers, laptops, networking devices, printers, and advanced security systems from globally recognized brands.' },
          { title: 'Laptop & Computer Support', description: 'We serve our clients with the best onsite IT solutions, IT services, and IT support along with laptop services and computer support services tailored to meet your business needs.' },
          { title: 'IT AMC (Annual Maintenance Contracts)', description: 'Our Annual Maintenance Contracts ensure your IT infrastructure stays in peak condition year-round. We provide proactive monitoring, scheduled maintenance, and rapid response support under one fixed annual agreement.' },
          { title: 'IT Network Solutions', description: 'From startups to large enterprises, we deliver cost-effective and scalable IT solutions that match your specific requirements — including complete IT network solutions and infrastructure setup.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'What Makes Our IT Services and IT Support The Best In the GCC',
      intro: 'As the leading IT support company in Qatar, we deliver comprehensive, reliable, and future-ready IT solutions to businesses across the GCC. We specialize in complete IT setup services designed to empower your business with technology and peace of mind.',
      points: [
        "Our IT support in Qatar is prompt and readily available — simply submit a request, and we'll get back to you without delay",
        'On-site IT support service in Qatar — while you focus on your core priorities, we handle your tech issues, ensuring your business runs smoothly without interruptions',
        'Our team of IT experts in Qatar undergoes rigorous training and certification to guarantee top-tier IT services',
        'Our fully equipped and up-to-date 24/7 support team can tackle any technical challenge that a company in Qatar or all over the GCC presents',
        'Fast delivery, expert technical assistance, and tailor-made IT packages that help your business operate efficiently and securely',
        'We understand the vital role that technology plays in your business development and achievements, and we are committed to addressing your IT concerns with trusted solutions',
      ],
    },
  },
  ar: {
    hero: {
      eyebrow: 'خدمات تقنية المعلومات · قطر · دول الخليج',
      title: 'أفضل شركة خدمات تقنية معلومات في قطر ودول الخليج',
      subtitle: 'بوصفها شركة رائدة في خدمات تقنية المعلومات بقطر، تقدم كومباس آي تي سولوشنز حلول تقنية شاملة ومتكاملة للشركات في جميع أنحاء دول الخليج — مدعومةً بمعرفة متجددة وخبرة في أحدث التقنيات.',
      primaryCta: 'تواصل معنا',
    },
    sections: [
      {
        eyebrow: 'خدماتنا',
        heading: 'حقق نمو أعمالك — أفضل شركة دعم تقني في قطر ودول الخليج',
        intro: 'كومباس آي تي سولوشنز شركة دعم تقني موثوقة وذات سمعة راسخة في قطر. هدفنا وضع احتياجات عملائنا في المقدمة من خلال تقديم حلول تقنية ترفع كفاءة الأعمال مع تقليص وقت التوقف والتكاليف.',
        items: [
          { title: 'الدعم التقني المُدار', description: 'كومباس آي تي سولوشنز شركة دعم تقني مُدار موثوقة في قطر. نساعد أعمالك على الوصول إلى أعلى مستوياتها دون عوائق تقنية، بمعالجة كل تحدٍّ يعيق نموك.' },
          { title: 'الدعم التقني الميداني والعن بُعد', description: 'تواصل معنا للحصول على حلول دعم تقني ميداني وعن بُعد موثوقة مصممة لتلبية احتياجات أعمالك في قطر. دعمنا التقني سريع الاستجابة — فقط أرسل طلبك وسنتواصل معك فوراً.' },
          { title: 'توريد الأجهزة والبرمجيات', description: 'بوصفها موردًا موثوقًا للتقنية في قطر، تقدم كومباس آي تي سولوشنز تشكيلة شاملة من الأجهزة والبرمجيات الأصيلة، تشمل الخوادم والحواسيب المحمولة وأجهزة الشبكات والطابعات وأنظمة الأمن من أشهر الماركات العالمية.' },
          { title: 'دعم الحواسيب المحمولة وأجهزة الكمبيوتر', description: 'نقدم لعملائنا أفضل حلول الدعم التقني الميداني وخدمات صيانة الحواسيب المحمولة وأجهزة الكمبيوتر المصممة لتلبية احتياجات أعمالهم.' },
          { title: 'عقود الصيانة السنوية (AMC)', description: 'تضمن عقود الصيانة السنوية لدينا بقاء بنيتك التحتية التقنية في أفضل حالة على مدار العام. نوفر مراقبة استباقية وصيانة مجدولة ودعم سريع الاستجابة ضمن اتفاقية سنوية ثابتة.' },
          { title: 'حلول شبكات تقنية المعلومات', description: 'من الشركات الناشئة إلى المؤسسات الكبرى، نقدم حلولاً تقنية فعّالة من حيث التكلفة وقابلة للتوسع تتوافق مع متطلباتك الخاصة، بما فيها إعداد البنية التحتية للشبكات وتجهيزها الكامل.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'ما الذي يجعل خدمات تقنية المعلومات ودعمنا التقني الأفضل في دول الخليج',
      intro: 'بوصفها الشركة الرائدة في دعم تقنية المعلومات بقطر، نقدم حلولاً تقنية شاملة وموثوقة ومستعدة للمستقبل للشركات في جميع أنحاء دول الخليج. نتخصص في خدمات الإعداد التقني الكامل المصممة لتمكين أعمالك بالتقنية وراحة البال.',
      points: [
        'دعمنا التقني في قطر سريع الاستجابة — فقط أرسل طلبك وسنتواصل معك دون تأخير',
        'خدمة الدعم التقني الميداني في قطر — بينما تركز على أولوياتك الأساسية، نحن نتولى حل مشاكلك التقنية لضمان سير أعمالك دون انقطاع',
        'يخضع فريقنا من خبراء تقنية المعلومات في قطر لتدريب مكثف واعتماد دوري لضمان خدمات تقنية من أعلى المستويات',
        'فريق الدعم المجهز بالكامل والمتاح على مدار 24/7 قادر على معالجة أي تحدٍّ تقني في قطر وجميع أنحاء دول الخليج',
        'توصيل سريع ودعم تقني متخصص وحزم تقنية مخصصة تساعد أعمالك على العمل بكفاءة وأمان',
        'نفهم الدور المحوري الذي تؤديه التقنية في تطوير أعمالك وإنجازاتك، ونلتزم بمعالجة مخاوفك التقنية بحلول موثوقة',
      ],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// WEB DEVELOPMENT
// ─────────────────────────────────────────────────────────────────────────────
const webDevelopment: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'WEB DEVELOPMENT · QATAR · GCC',
      title: 'Web Development Services in Qatar, GCC',
      subtitle: 'Developing interactive website solutions that deliver tangible business results. Grow your customer base, get more leads and expand your reach with Compass IT Solutions Web Development services.',
      primaryCta: 'Request a call back',
    },
    sections: [
      {
        eyebrow: 'OUR SERVICES',
        heading: 'Come to us for all your Web Design & Development projects',
        intro: 'For over 10 years, Compass IT Solutions has been delivering engaging website solutions for leading organizations across various industries. Our website development experts deliver impactful web solutions from mobile web development to responsive designs, custom e-commerce and intranet experiences.',
        items: [
          { title: 'Custom Website Designing', description: 'Our experienced web developers specialise in building lead-generating websites that accommodate the latest technologies, thus allowing businesses to always stay ahead of the digital curve and stand out from the rest.' },
          { title: 'Prototyping & UI', description: 'We conceptualize and develop websites based on detailed wire-framing, UX-driven design and close collaboration so we can develop a powerful platform that establishes your credibility and drives home your brand message.' },
          { title: 'Web Application Development', description: 'Having created powerful web applications for businesses of all shapes, app developers at Compass IT Solutions can start building platforms from scratch and customise your mobile application to suit your unique business needs.' },
          { title: 'WordPress Development', description: 'Flexibility and user-experience lie at the core of every WordPress project we undertake. We have helped hundreds of businesses build custom-made content management systems. Partner with us to develop a fast and reliable WordPress website.' },
          { title: 'Ecommerce Solution', description: 'Drawing on compelling design and cutting edge development, our certified developers know what it takes to create bespoke online stores that can convert your visitors into loyal customers and grow your business.' },
          { title: 'Custom CMS', description: "If your requirement is not able to meet with the product we can develop a custom CMS for you. With a custom CMS, you have control over the platform's functionality, interface and updates." },
          { title: 'PSD to HTML Conversion', description: 'We never undermine the importance of precision. Hence you can be sure that our conversion processes promote multi-browser compatibility & support with responsive as well as fidelity performance.' },
          { title: 'Website Testing & QA Checks', description: "None of the websites that we build are ever deployed without being first put through a series of systematic, rigid and thorough QA checks that ensure that they are free of any bugs or issues that might affect customer engagement or brand value." },
        ],
      },
      {
        eyebrow: 'OUR PROCESS',
        heading: 'Our Website Development Process',
        items: [
          { title: 'Scope Of Work Analysis', description: "We discuss your project idea and requirements to understand what exactly you want. We'll conduct our own research regarding target audience demographics and behaviour so we can optimize site development and design for the right people." },
          { title: 'Prototyping', description: 'Using the information gathered from phase one, it is time to put it together and make a detailed website plan. At this point, a site map is developed. Our team usually creates one or more prototypes and you will be informed throughout all the design and development stages.' },
          { title: 'Coding', description: "At this point, we'll be ready with the design and move ahead. It requires extra development effort to translate it into HTML/CSS, and then to add a layer of animations or JavaScript, depending on the complexity of the design." },
          { title: 'Testing', description: 'When the content and the visuals are in place, the testing process can be started. Every page has to be tested to make sure that all links are working and the website is displayed correctly in different browsers.' },
          { title: 'Launch', description: "Once you give us the final approval, it is time for the website to go live. But before that, the site will be run-through for one last time to confirm that all files have been uploaded correctly, and that the site is fully functional." },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Choose Compass IT Solutions for Website Development',
      points: [
        'Agile methodology — every step of our website development project aims at providing maximum value to our customers with a low risk of failure',
        "Transparent Communication — we relay our progress to our clients about their project's advancement and set clear expectations for delivery",
        'On-time delivery — we believe in on-time delivery of projects with 95% client satisfaction',
        'Flexible engagement models — hire for full-time, part-time, fixed-cost, or developer by the hour',
        'Reliable and highly skilled developers — our solutions, implementation of the latest technologies and trends will synchronize with your project needs',
        'Maintenance and Support — we are always here to give you 24/7 assistance and deliver proactive solutions for your queries',
      ],
    },
  },
  ar: {
    hero: {
      eyebrow: 'تطوير المواقع الإلكترونية · قطر · دول الخليج',
      title: 'خدمات تطوير المواقع الإلكترونية في قطر ودول الخليج',
      subtitle: 'نطور حلول مواقع إلكترونية تفاعلية تحقق نتائج أعمال ملموسة. وسّع قاعدة عملائك واحصل على مزيد من الفرص وأعمالك مع خدمات تطوير المواقع من كومباس آي تي سولوشنز.',
      primaryCta: 'اطلب معاودة الاتصال',
    },
    sections: [
      {
        eyebrow: 'خدماتنا',
        heading: 'تعامل معنا لجميع مشاريع تصميم وتطوير المواقع الإلكترونية',
        intro: 'على مدار أكثر من 10 سنوات، قدمت كومباس آي تي سولوشنز حلول مواقع إلكترونية جذابة للمؤسسات الرائدة في مختلف الصناعات. خبراؤنا في تطوير المواقع يقدمون حلولاً رقمية مؤثرة من تطوير المواقع للجوال إلى التصاميم المتجاوبة ومتاجر التجارة الإلكترونية.',
        items: [
          { title: 'تصميم المواقع المخصصة', description: 'يتخصص مطورو الويب لدينا في بناء مواقع إلكترونية تولّد العملاء المحتملين وتواكب أحدث التقنيات، مما يتيح للشركات البقاء دائماً في طليعة التحول الرقمي والتميز عن المنافسين.' },
          { title: 'النماذج الأولية وتصميم واجهة المستخدم', description: 'نبتكر ونطور المواقع الإلكترونية استناداً إلى التخطيط السلكي التفصيلي وتصميم تجربة المستخدم والتعاون الوثيق، لبناء منصة قوية تعزز مصداقيتك وتوصل رسالة علامتك التجارية بفاعلية.' },
          { title: 'تطوير تطبيقات الويب', description: 'بحكم خبرتنا في بناء تطبيقات ويب قوية لشركات من مختلف الأحجام، يستطيع مطورو تطبيقات كومباس آي تي سولوشنز البدء من الصفر وتخصيص تطبيقك المحمول ليتناسب مع احتياجات أعمالك الفريدة.' },
          { title: 'تطوير ووردبريس', description: 'المرونة وتجربة المستخدم هما جوهر كل مشروع ووردبريس نتولاه. ساعدنا مئات الشركات في بناء أنظمة إدارة محتوى مخصصة. شاركنا لتطوير موقع ووردبريس سريع وموثوق.' },
          { title: 'حلول التجارة الإلكترونية', description: 'بفضل التصميم المقنع والتطوير التقني المتميز، يعرف مطورونا المعتمدون كيفية إنشاء متاجر إلكترونية فريدة قادرة على تحويل الزوار إلى عملاء مخلصين وتنمية أعمالك.' },
          { title: 'نظام إدارة المحتوى المخصص', description: 'إذا كانت متطلباتك لا تتوافق مع الحلول الجاهزة، يمكننا تطوير نظام إدارة محتوى مخصص لك. مع نظام إدارة المحتوى المخصص، تتحكم في وظائف المنصة وواجهتها وتحديثاتها بشكل كامل.' },
          { title: 'تحويل PSD إلى HTML', description: 'لا نتهاون مطلقاً في الدقة. لذا يمكنك الاطمئنان إلى أن عمليات التحويل لدينا تضمن التوافق مع مختلف المتصفحات ودعم التصاميم المتجاوبة وأداء عالي الدقة.' },
          { title: 'اختبار المواقع وفحص الجودة', description: 'لا يُطلق أي موقع نبنيه دون المرور بسلسلة من عمليات فحص الجودة المنهجية والصارمة والشاملة، التي تضمن خلوه من أي أخطاء أو مشاكل قد تؤثر على تجربة العملاء أو قيمة العلامة التجارية.' },
        ],
      },
      {
        eyebrow: 'منهجيتنا',
        heading: 'مراحل تطوير الموقع الإلكتروني',
        items: [
          { title: 'تحليل نطاق العمل', description: 'نناقش فكرة مشروعك ومتطلباتك لفهم ما تريده بالضبط، ونجري بحثاً خاصاً حول الفئة المستهدفة وسلوكها لتحسين تطوير الموقع وتصميمه للجمهور الصحيح.' },
          { title: 'النموذج الأولي', description: 'باستخدام المعلومات التي جمعناها في المرحلة الأولى، نضع خطة تفصيلية للموقع ونطور نماذج أولية. ستُحاط علماً بكل مراحل التصميم والتطوير لضمان توافق النتيجة النهائية مع احتياجاتك.' },
          { title: 'البرمجة والتطوير', description: 'عند الانتهاء من التصميم، ننتقل إلى مرحلة التطوير وتحويله إلى كود HTML/CSS، ثم إضافة طبقة من الحركات والتفاعل بلغة JavaScript بحسب تعقيد التصميم.' },
          { title: 'الاختبار', description: 'بعد اكتمال المحتوى والمرئيات، تبدأ مرحلة الاختبار. تُختبر كل صفحة للتحقق من عمل جميع الروابط وعرض الموقع بشكل صحيح في مختلف المتصفحات.' },
          { title: 'الإطلاق', description: 'بمجرد حصولنا على موافقتك النهائية، يحين وقت إطلاق الموقع. وقبل ذلك، نُجري مراجعة أخيرة شاملة للتحقق من رفع جميع الملفات بشكل صحيح وعمل الموقع بكامل وظائفه.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'اختر كومباس آي تي سولوشنز لتطوير موقعك الإلكتروني',
      points: [
        'منهجية Agile — كل خطوة في مشروع تطوير موقعك تهدف إلى تحقيق أقصى قيمة لعملائنا مع تقليل مخاطر الفشل',
        'تواصل شفاف — نطلعك باستمرار على تقدم مشروعك ونضع توقعات واضحة للتسليم',
        'الالتزام بالمواعيد — نؤمن بتسليم المشاريع في وقتها مع نسبة رضا تبلغ 95% من عملائنا',
        'نماذج تعاقد مرنة — وظّف بدوام كامل أو جزئي أو بتكلفة ثابتة أو بالساعة',
        'مطورون موثوقون وعالو المهارة — حلولنا وتطبيقنا لأحدث التقنيات والاتجاهات ستتزامن مع متطلبات مشروعك',
        'الصيانة والدعم — نحن دائماً هنا لتقديم المساعدة على مدار 24/7 وتقديم حلول استباقية لاستفساراتك',
      ],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// AI WORKFLOWS
// ─────────────────────────────────────────────────────────────────────────────
const aiWorkflows: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'AI DEVELOPMENT · QATAR · GCC',
      title: 'AI Development & Consulting Services Qatar, Saudi Arabia, UAE',
      subtitle: 'Improve Business Outcomes With AI Development & Consulting Services in GCC. Machine learning, content classification, deep learning, and process automation — AI helps enhance your business capabilities and makes you hit your business goals efficiently.',
      primaryCta: 'Connect with our AI team',
    },
    sections: [
      {
        eyebrow: 'OUR OFFERINGS',
        heading: 'Stay One Step Ahead Of Your Competition With Compass IT Solutions AI Services',
        intro: 'At Compass IT Solutions, we bring innovative integration and orchestration of robotic, intelligent, and autonomous capabilities to make your business stand out. We provide end-to-end AI development and consulting services to clients in and around the GCC.',
        items: [
          { title: 'AI Consulting Services', description: 'Leverage our AI consulting services to help you harness the potential of artificial intelligence aligned towards maximizing your business ROI as well as the productivity of your employees. Our AI consultants establish a roadmap to adopt AI technologies best suited for your business.' },
          { title: 'AI as a Service', description: 'We do not propose an AI strategy plan without knowing your business needs, your future goals, and room for improvement. After diving deep into your current systems, we discuss various high-tech solutions that can ease your business challenges.' },
          { title: 'AI Development Services', description: "Our AI specialists at Compass IT Solutions help retool your existing systems and enhance your business capabilities. Whether it's a simple chatbot or sales and marketing operations automation through machine learning — our custom AI Development services help your business reach a new level." },
          { title: 'AI Chatbots', description: 'Integration of AI-powered chatbots into your CRM improves your business relationships with your customers and prospective clients. Proven AI intelligence gives a more solution-driven approach leading to quick responses.' },
          { title: 'AI Integration', description: 'AI solutions maximize ROI after successful integration of the AI custom software solution in the existing system of your business. We integrate ML models, voice AI into conversational CX, and AI-based OCR-SDK.' },
          { title: 'AI Machine Learning', description: 'Our machine learning experts help you see the big picture while helping you forecast the future, recommend industry-leading products, detect anomalies and detect trends that are necessary to drive business growth.' },
          { title: 'AI Support and Maintenance', description: 'Compass IT Solutions offers round-the-clock support services for your AI-powered solutions and applications. Our team of AI experts plays an important role in managing the security status and vulnerability of your business assets.' },
          { title: 'AI Data Annotation', description: 'Compass IT Solutions aims to augment, annotate and label business data accurately using advanced tools and human skills to make the data recognizable by computer visions or machines.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'What Makes Compass IT Solutions the Best Option for AI Services',
      intro: 'AI solutions make your business unlock its true potential and we at Compass IT Solutions, help you strategize on how to utilize AI to give its maximum benefits to your business.',
      points: [
        'Complete AI Consulting Services — outstanding and knowledgeable staff to integrate AI solutions into your business setup without interfering with business continuity',
        'AI Engineers with certification — rely on the knowledge and skills of certified and specialized AI experts',
        '24-hour upkeep and assistance — our AI specialists offer round-the-clock support to help you settle into the new environment after a successful deployment',
        'Committed Project Manager — a project manager at Compass IT Solutions monitors your complete AI development and provides status updates and support',
        'No downtime — there is no business interruption or downtime for your IT operations during the whole testing, deployment, integration, and implementation phase',
        'Technological Innovation — Compass IT Solutions informs you of the most recent upgrades and assists you in making use of them in accordance with the future needs of your company',
      ],
    },
  },
  ar: {
    hero: {
      eyebrow: 'تطوير الذكاء الاصطناعي · قطر · دول الخليج',
      title: 'خدمات تطوير واستشارات الذكاء الاصطناعي في قطر والسعودية والإمارات',
      subtitle: 'حسّن نتائج أعمالك من خلال خدمات تطوير واستشارات الذكاء الاصطناعي في دول الخليج. التعلم الآلي وتصنيف المحتوى والتعلم العميق وأتمتة العمليات — الذكاء الاصطناعي يعزز قدرات أعمالك ويساعدك على تحقيق أهدافك بكفاءة.',
      primaryCta: 'تواصل مع فريق الذكاء الاصطناعي',
    },
    sections: [
      {
        eyebrow: 'عروضنا',
        heading: 'تفوق على منافسيك بخدمات الذكاء الاصطناعي من كومباس آي تي سولوشنز',
        intro: 'في كومباس آي تي سولوشنز، نجلب التكامل المبتكر لقدرات الروبوتات والذكاء والاستقلالية لتمييز أعمالك. نقدم خدمات تطوير واستشارات ذكاء اصطناعي متكاملة للعملاء في جميع أنحاء دول الخليج.',
        items: [
          { title: 'خدمات استشارات الذكاء الاصطناعي', description: 'استفد من خدمات استشارات الذكاء الاصطناعي لدينا لاستثمار إمكانات الذكاء الاصطناعي بما يحقق أقصى عائد استثمار لأعمالك وإنتاجية موظفيك. يضع مستشارو الذكاء الاصطناعي لدينا خارطة طريق لتبني التقنيات المناسبة لأعمالك.' },
          { title: 'الذكاء الاصطناعي كخدمة', description: 'لا نقترح خطة استراتيجية للذكاء الاصطناعي دون فهم احتياجات أعمالك وأهدافك المستقبلية ومجالات التحسين. بعد دراسة أنظمتك الحالية، نناقش حلولاً تقنية متقدمة تخفف تحديات أعمالك.' },
          { title: 'خدمات تطوير الذكاء الاصطناعي', description: 'يساعد متخصصو الذكاء الاصطناعي لدينا في كومباس آي تي سولوشنز على تحديث أنظمتك الموجودة وتعزيز قدرات أعمالك، سواء أكان الأمر يتعلق بروبوت محادثة بسيط أم بأتمتة عمليات التسويق والمبيعات عبر التعلم الآلي.' },
          { title: 'روبوتات المحادثة بالذكاء الاصطناعي', description: 'يُحسّن دمج روبوتات المحادثة المدعومة بالذكاء الاصطناعي في نظام CRM علاقات أعمالك مع العملاء والعملاء المحتملين، ويوفر نهجاً أكثر تركيزاً على الحلول يؤدي إلى ردود أسرع.' },
          { title: 'تكامل الذكاء الاصطناعي', description: 'تعظم حلول الذكاء الاصطناعي العائد على الاستثمار بعد التكامل الناجح لحل البرمجيات المخصص بالذكاء الاصطناعي في نظام أعمالك الموجود، بما في ذلك نماذج التعلم الآلي وصوت الذكاء الاصطناعي.' },
          { title: 'التعلم الآلي', description: 'يساعدك خبراء التعلم الآلي لدينا على رؤية الصورة الكاملة، والتنبؤ بالمستقبل، والتوصية بالمنتجات الرائدة في الصناعة، واكتشاف الشذوذات والاتجاهات الضرورية لدفع نمو الأعمال.' },
          { title: 'دعم وصيانة الذكاء الاصطناعي', description: 'تقدم كومباس آي تي سولوشنز خدمات دعم متواصلة على مدار الساعة لحلولك وتطبيقاتك المدعومة بالذكاء الاصطناعي. يؤدي فريق خبراء الذكاء الاصطناعي دوراً محورياً في إدارة الوضع الأمني لأصول أعمالك.' },
          { title: 'تحديد البيانات وتصنيفها', description: 'تهدف كومباس آي تي سولوشنز إلى تعزيز البيانات التجارية وتصنيفها ووضع تسميات دقيقة عليها باستخدام أدوات متقدمة ومهارات بشرية لجعل البيانات قابلة للتعرف بواسطة الآلات.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'ما الذي يجعل كومباس آي تي سولوشنز الخيار الأمثل لخدمات الذكاء الاصطناعي',
      intro: 'تساعد حلول الذكاء الاصطناعي أعمالك على إطلاق إمكاناتها الحقيقية، ونحن في كومباس آي تي سولوشنز نساعدك على وضع استراتيجية للاستفادة القصوى من الذكاء الاصطناعي.',
      points: [
        'خدمات استشارات ذكاء اصطناعي شاملة — طاقم متميز ومتمكن لدمج حلول الذكاء الاصطناعي في بيئة أعمالك دون المساس باستمراريتها',
        'مهندسو ذكاء اصطناعي معتمدون — اعتمد على معرفة ومهارات خبراء الذكاء الاصطناعي المتخصصين والمعتمدين',
        'صيانة ودعم على مدار الساعة — يقدم متخصصو الذكاء الاصطناعي لدينا دعماً متواصلاً لمساعدتك على التكيف مع البيئة الجديدة بعد النشر الناجح',
        'مدير مشروع متفرغ — يتابع مدير المشروع في كومباس آي تي سولوشنز تطوير الذكاء الاصطناعي بالكامل ويقدم تحديثات الحالة والدعم',
        'لا توقف عن العمل — لا يوجد انقطاع في الأعمال أو توقف لعمليات تقنية المعلومات خلال مراحل الاختبار والنشر والتكامل والتطبيق',
        'ابتكار تقني — تطلعك كومباس آي تي سولوشنز على أحدث التحديثات وتساعدك على الاستفادة منها وفق الاحتياجات المستقبلية لشركتك',
      ],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// CLOUD SOLUTIONS
// ─────────────────────────────────────────────────────────────────────────────
const cloudSolutions: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'CLOUD SOLUTIONS · QATAR · GCC',
      title: 'Cloud Consulting Company in Qatar',
      subtitle: "Making Your Business's Modernization Journey Easier With Our Cloud Services. At Compass IT Solutions, we create cloud strategies that enhance business cost efficiency, increase business productivity and make collaboration easier.",
      primaryCta: 'Contact us',
    },
    sections: [
      {
        eyebrow: 'OUR PROCESS',
        heading: 'Our Cloud Development Process',
        items: [
          { title: 'Plan', description: 'We discuss your project idea and requirements to understand what exactly you want. Our team works to understand your current systems, future goals, and the room for improvement before recommending any cloud strategy.' },
          { title: 'Design', description: 'We create mockups and workflows that are perfect to give you an app-like feel. Our cloud solutions experts design multiple deployment models in order to keep your business goals at primary focus.' },
          { title: 'Develop & Testing', description: "We have employed brilliant developers, coders and testers who deliver a bug-free application. Once the development is finished, everything needs to be fully tested before it touches your production environment." },
          { title: 'Deployment Testing', description: 'We use a streamlined deployment and testing flow that consists of three phases — pre-deploy, deploy and post-deploy — helping us improve quality and eradicate issues at every step.' },
          { title: 'Optimization', description: "Whether you've recently migrated to the cloud, or you've been operating there for a while now, our team helps you understand exactly where your cloud spend goes and what drives your costs, maximising your ROI." },
          { title: 'Maintenance & Support', description: "We send the final project to our client after checking the app's functionality and usability. After delivery, we follow up with maintenance and support for the application on an ongoing basis." },
        ],
      },
      {
        eyebrow: 'OUR OFFERINGS',
        heading: 'Make Your Business Agile and Accelerate Growth via Compass IT Solutions Cloud Services in Qatar',
        intro: 'When your business becomes cloud compliant, it helps maintain data backup, makes disaster recovery easier and lowers business operation costs because data can be mirrored at multiple redundant sites.',
        items: [
          { title: 'Cloud Application Development', description: 'Our cloud service providers manage everything — from application to data, from runtime to middleware and OS. After a successful readiness assessment and a cloud architecture audit, our DevOps team develops a roadmap for your business migration to cloud.' },
          { title: 'Cloud Adoption and Migration', description: "Compass IT Solutions Cloud developers and Engineers help businesses access and plan for their digital transformation. We help you identify and prioritise the business's immediate modernization opportunities which improves the cloud readiness and transformation roadmap." },
          { title: 'Cloud Optimization', description: 'A Cloud ecosystem that is optimised — built across network, storage, compute, and operations — drives higher ROI in your business. Compass IT Solutions cloud solutions experts streamline all your IT operations without compromising business performance, security and scalability.' },
          { title: 'Cloud Infrastructure Management', description: 'Compass IT Solutions offers Cloud management services that play an important role in managing the security status and vulnerability of your business assets. The availability of real-time information accelerates the process of decision-making.' },
          { title: 'Cloud Computing Security', description: "Advanced threats require advanced Cloud management and security services. Compass IT Solutions provides complete security of your business assets — securing your cloud environment against unauthorised use, DDoS attacks, hackers, malware, and other risks." },
          { title: 'Cloud Modernization', description: "Compass IT Solutions helps make your business's modernization journey a breeze. We ensure uninterrupted services, enhance product value and brand perception. Incorporating Cloud-based architecture helps you achieve faster time to market." },
          { title: 'Cloud Disaster Management', description: 'Compass IT Solutions Cloud Disaster Management Service helps you save time and capital, offers more data backup location options, and provides the best data restoration plans based on your RPO and RTO for your business.' },
          { title: 'Cloud Managed Services', description: 'Compass IT Solutions cloud managed service helps you in rapid cloud deployment managed according to your requirement keeping in mind your budgetary goals. We offer enhanced security and compliance capabilities and on-going guidance and support.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Innovate Your Business With Cloud Solutions in Qatar',
      points: [
        'At Compass IT Solutions, we create cloud strategies that enhance business cost efficiency, increase business productivity and make collaboration easier',
        'Our all-encompassing cloud computing consulting and implementation services ensure a safe, efficient and high-performing cloud environment',
        'We provide end-to-end cloud computing services to clients in and around the GCC — for startups, enterprises, global brands, and government organisations',
        'Our unparalleled attention to minute details while making your enterprise cloud compliant gives lower operational cost and capping scalability options for a secured future',
        'Portability, Efficiency and Security are the pillars of business operations — we help your business achieve all three through cloud migration',
        'Comprehensive business solutions with extensive automation, self-service capabilities, outstanding security, and infrastructure optimization for better performance and cost savings',
      ],
    },
  },
  ar: {
    hero: {
      eyebrow: 'الحلول السحابية · قطر · دول الخليج',
      title: 'شركة استشارات سحابية في قطر',
      subtitle: 'نجعل رحلة تحديث أعمالك أيسر من خلال خدماتنا السحابية. في كومباس آي تي سولوشنز، نضع استراتيجيات سحابية ترفع كفاءة التكلفة وتزيد إنتاجية الأعمال وتيسّر التعاون.',
      primaryCta: 'تواصل معنا',
    },
    sections: [
      {
        eyebrow: 'منهجيتنا',
        heading: 'مراحل تطوير الحلول السحابية',
        items: [
          { title: 'التخطيط', description: 'نناقش فكرة مشروعك ومتطلباتك لفهم ما تريده بالضبط. يعمل فريقنا على فهم أنظمتك الحالية وأهدافك المستقبلية ومجالات التحسين قبل التوصية بأي استراتيجية سحابية.' },
          { title: 'التصميم', description: 'نُنشئ نماذج وسير عمل تمنحك تجربة تشبه التطبيقات. يصمم خبراء الحلول السحابية لدينا نماذج نشر متعددة للحفاظ على أهداف أعمالك في المقدمة.' },
          { title: 'التطوير والاختبار', description: 'وظّفنا مطورين ومبرمجين ومختبرين متميزين يقدمون تطبيقات خالية من الأخطاء. بمجرد الانتهاء من التطوير، يجب اختبار كل شيء بالكامل قبل الوصول إلى بيئة الإنتاج.' },
          { title: 'اختبار النشر', description: 'نستخدم منهجية نشر واختبار مبسطة تتكون من ثلاث مراحل — قبل النشر والنشر وبعد النشر — مما يساعدنا على تحسين الجودة والقضاء على المشكلات في كل خطوة.' },
          { title: 'التحسين', description: 'سواء انتقلت إلى السحابة مؤخراً أو كنت تعمل فيها منذ فترة، يساعدك فريقنا على فهم أين تذهب تكاليفك السحابية بالضبط وما الذي يدفعها، مما يعظم عائدك على الاستثمار.' },
          { title: 'الصيانة والدعم', description: 'نسلّم المشروع النهائي للعميل بعد التحقق من وظائف التطبيق وقابليته للاستخدام. وبعد التسليم، نتابع مع الصيانة والدعم المستمرين للتطبيق.' },
        ],
      },
      {
        eyebrow: 'عروضنا',
        heading: 'اجعل أعمالك أكثر مرونة وسرّع نموها بخدمات كومباس آي تي سولوشنز السحابية في قطر',
        intro: 'عندما تصبح أعمالك متوافقة مع السحابة، يساعد ذلك في الحفاظ على النسخ الاحتياطية للبيانات، ويسهّل التعافي من الكوارث، ويخفض تكاليف تشغيل الأعمال.',
        items: [
          { title: 'تطوير التطبيقات السحابية', description: 'يدير مزودو الخدمات السحابية لدينا كل شيء — من التطبيق إلى البيانات، ومن وقت التشغيل إلى البنية الوسيطة ونظام التشغيل. بعد تقييم ناجح لجاهزية السحابة، يضع فريق DevOps لدينا خارطة طريق للانتقال.' },
          { title: 'التبني والهجرة السحابية', description: 'يساعد مطورو ومهندسو كومباس آي تي سولوشنز الشركاتِ على التخطيط لتحولها الرقمي. نساعدك على تحديد أولويات فرص التحديث الفورية التي تحسّن جاهزية السحابة وخارطة طريق التحول.' },
          { title: 'تحسين السحابة', description: 'منظومة سحابية محسّنة مبنية عبر الشبكة والتخزين والحوسبة والعمليات تحقق عائداً أعلى على الاستثمار. يبسّط خبراء الحلول السحابية لدينا جميع عمليات تقنية المعلومات دون المساومة على الأداء أو الأمن أو قابلية التوسع.' },
          { title: 'إدارة البنية التحتية السحابية', description: 'تقدم كومباس آي تي سولوشنز خدمات إدارة سحابية تؤدي دوراً محورياً في إدارة الوضع الأمني وثغرات أصول أعمالك. توافر المعلومات في الوقت الفعلي يسرّع اتخاذ القرارات.' },
          { title: 'أمن الحوسبة السحابية', description: 'التهديدات المتطورة تستدعي خدمات إدارة وأمان سحابية متطورة. تقدم كومباس آي تي سولوشنز حماية كاملة لأصول أعمالك وتأمين بيئتك السحابية ضد الاستخدام غير المشروع وهجمات DDoS والقراصنة والبرمجيات الخبيثة.' },
          { title: 'تحديث السحابة', description: 'تجعل كومباس آي تي سولوشنز رحلة تحديث أعمالك يسيرة. نضمن خدمات متواصلة وتعزيز قيمة المنتج وتصور العلامة التجارية. دمج البنية السحابية يساعدك على تحقيق وقت أسرع للوصول إلى السوق.' },
          { title: 'إدارة الكوارث السحابية', description: 'تساعدك خدمة إدارة الكوارث السحابية من كومباس آي تي سولوشنز على توفير الوقت والمال، وتوفر خيارات أكثر لمواقع النسخ الاحتياطي للبيانات، وتقدم أفضل خطط استعادة البيانات بناءً على RPO وRTO الخاصة بأعمالك.' },
          { title: 'الخدمات السحابية المُدارة', description: 'تساعدك خدمة كومباس آي تي سولوشنز السحابية المُدارة في النشر السحابي السريع وفق متطلباتك مع مراعاة أهدافك الميزانية. نقدم قدرات أمنية وامتثالية معززة ودعماً مستمراً وإرشادات متواصلة.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'طوّر أعمالك من خلال الحلول السحابية في قطر',
      points: [
        'في كومباس آي تي سولوشنز، نضع استراتيجيات سحابية ترفع كفاءة التكلفة وتزيد إنتاجية الأعمال وتيسّر التعاون',
        'خدمات استشارات وتطبيق الحوسبة السحابية الشاملة لدينا تضمن بيئة سحابية آمنة وفعّالة وعالية الأداء',
        'نقدم خدمات حوسبة سحابية متكاملة للعملاء في جميع أنحاء دول الخليج — للشركات الناشئة والمؤسسات والعلامات التجارية العالمية والهيئات الحكومية',
        'اهتمامنا الفائق بالتفاصيل الدقيقة في جعل مؤسستك متوافقة مع السحابة يمنحك تكاليف تشغيلية أقل وخيارات توسع مضمونة لمستقبل آمن',
        'قابلية النقل والكفاءة والأمن هي ركائز عمليات الأعمال — نساعد أعمالك على تحقيق الثلاثة من خلال الهجرة السحابية',
        'حلول أعمال شاملة مع أتمتة واسعة ومنصة خدمة ذاتية وأمن استثنائي وتحسين للبنية التحتية لتحقيق أداء أفضل وتوفير في التكاليف',
      ],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// NETWORK INFRASTRUCTURE
// ─────────────────────────────────────────────────────────────────────────────
const networkInfrastructure: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'NETWORK INFRASTRUCTURE · QATAR · GCC',
      title: 'Network Infrastructure Solutions in Qatar, GCC',
      subtitle: 'Best Network Infrastructure Solution Provider in Qatar, GCC. Businesses today need to be well connected globally and be online at all times — we build the strong backbone that keeps your network running.',
      primaryCta: 'Contact us',
    },
    sections: [
      {
        eyebrow: 'HOW WE BUILD',
        heading: 'How We Build a Resilient Infrastructure',
        items: [
          { title: 'Routers, Switches & Wireless Devices', description: "It is easy to overlook the importance of these devices while setting up your office network. Estimating the usage and deciding the number of routers needed for sharing a common IP or placing switches to accurately connect multiple devices is easier said than done. Our team of experts are fully equipped to plan out these solutions for you in no time." },
          { title: 'Network Security', description: "Your customers today are short of time and need everything now — this means there's no room for downtime due to security issues or network failures. We at Compass IT Solutions have just what you need to protect your systems from every imaginable threat so you can work stress free everyday." },
          { title: 'Network Monitoring Devices', description: 'Simply using high quality devices does not guarantee a smooth running network. Monitoring the added devices and keeping them well maintained is vital to ensure that any potential threats or issues are tackled well in advance and possible system bottlenecks eliminated beforehand.' },
        ],
      },
      {
        eyebrow: 'HOW WE HELP',
        heading: 'How Compass IT Solutions Can Help Your Business',
        items: [
          { title: 'Network Assessments', description: 'A thorough network assessment will help you identify any cracks in your current system, infrastructure, and security processes. By identifying vulnerabilities, we make it possible to design tailored network infrastructure solutions that enhance your existing setup and improve the overall performance of your network.' },
          { title: 'Design & Architecture', description: 'Once the assessment is complete, the next step is to design an efficient, scalable, and secure system that supports your daily network usage and maximizes productivity by eliminating any network interruptions, drops, or delays.' },
          { title: 'Managed Network Services', description: 'With our dedicated staff on hand, you can forgo your worries of monitoring, supporting, and maintaining your network at all times. Our Network Infrastructure Solutions ensure that the most important component for your business success remains active, secure, and available whenever you need it.' },
          { title: 'Implementation & Support', description: "It's often confusing and at times even overwhelming when you hear about access points and other networking components. But with our Network Infrastructure Solutions, you don't need to fret over installation or support issues. Our certified network technicians handle everything for you." },
          { title: 'LAN & WAN Implementation', description: 'When setting up a LAN and WAN infrastructure for any business, it is essential to create a flexible and trusted network that provides the required bandwidth and ensures all available resources operate at optimum levels.' },
          { title: 'Firewall Solutions', description: 'Be it a small, medium, or large-scale business, firewalls have become an important aspect of every network infrastructure due to the extensive exposure to external and potentially harmful network traffic. Our customized services ensure you are fully equipped.' },
          { title: 'On-Site Support', description: 'We pride ourselves on having a team of well-trained and experienced professionals who maintain high levels of customer service. From copper and optical fiber cabling to switches, routers, LAN & WAN, every aspect of your network infrastructure is handled with utmost care.' },
          { title: 'Service-Level Agreements', description: "Our SLA's are prepared with much care to provide you with clear and concise information on what we provide as part of our service. Timely responses and allocation of the best of our engineers and well trained personnel for your every need is guaranteed." },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Why Network Infrastructure Is Very Important',
      points: [
        'Businesses today need to be well connected globally and be online at all times — Network Infrastructure Solutions are essential for building a strong backbone that ensures different devices and their users remain connected',
        'Every business is unique in its own way with varied manpower, office layout, equipment usage — without effective Network Infrastructure Solutions, businesses encounter inefficiencies and delays in network connectivity',
        'With a well planned and customized network design that includes the required on premise hardware and cloud based services in place, you get the best output with minimal effort and investment',
        'An effective network infrastructure plan will even leave room for future growth and development so that you are free to expand your horizons and reach your full potential',
        'From copper and optical fiber cabling to switches, routers, LAN & WAN — every aspect of your network infrastructure is handled with utmost care and expertise by our service engineers',
      ],
    },
  },
  ar: {
    hero: {
      eyebrow: 'البنية التحتية للشبكات · قطر · دول الخليج',
      title: 'حلول البنية التحتية للشبكات في قطر ودول الخليج',
      subtitle: 'أفضل مزود لحلول البنية التحتية للشبكات في قطر ودول الخليج. تحتاج الشركات اليوم إلى التواصل العالمي المستمر والاتصال الدائم بالإنترنت — نحن نبني العمود الفقري القوي الذي يبقي شبكتك تعمل.',
      primaryCta: 'تواصل معنا',
    },
    sections: [
      {
        eyebrow: 'كيف نبني',
        heading: 'كيف نبني بنية تحتية صامدة',
        items: [
          { title: 'الموجّهات والمحوّلات والأجهزة اللاسلكية', description: 'من السهل إغفال أهمية هذه الأجهزة عند إعداد شبكة مكتبك. تقدير الاستخدام وتحديد عدد الموجّهات اللازمة ووضع المحوّلات بدقة لتوصيل أجهزة متعددة أمر يتطلب خبرة متخصصة. فريقنا مؤهل تماماً لتخطيط هذه الحلول لك في وقت قياسي.' },
          { title: 'أمن الشبكات', description: 'عملاؤك اليوم لا يتحملون الانتظار — وهذا يعني أنه لا مجال للتوقف عن العمل بسبب مشكلات أمنية أو أعطال في الشبكة. لدى كومباس آي تي سولوشنز ما تحتاجه تماماً لحماية أنظمتك من كل تهديد محتمل حتى تعمل بلا توتر كل يوم.' },
          { title: 'أجهزة مراقبة الشبكات', description: 'استخدام أجهزة عالية الجودة وحده لا يضمن شبكة تعمل بسلاسة. مراقبة الأجهزة المضافة والحفاظ على صيانتها الجيدة أمر حيوي لضمان التعامل مع أي تهديدات أو مشكلات مسبقاً وتفادي الاختناقات في النظام.' },
        ],
      },
      {
        eyebrow: 'كيف نساعدك',
        heading: 'كيف يمكن لكومباس آي تي سولوشنز مساعدة أعمالك',
        items: [
          { title: 'تقييم الشبكات', description: 'يساعدك التقييم الشامل للشبكة على تحديد أي نقاط ضعف في نظامك الحالي وبنيتك التحتية وعمليات الأمان. من خلال تحديد الثغرات، نُمكّن من تصميم حلول بنية تحتية شبكية مخصصة تعزز إعدادك الحالي وتحسن الأداء الكلي.' },
          { title: 'التصميم والهندسة المعمارية', description: 'بعد اكتمال التقييم، الخطوة التالية هي تصميم نظام فعّال وقابل للتوسع وآمن يدعم استخدامك اليومي للشبكة ويعظم الإنتاجية بالقضاء على أي انقطاعات أو تراجعات أو تأخيرات في الشبكة.' },
          { title: 'خدمات الشبكات المُدارة', description: 'مع وجود طاقمنا المتفرغ، يمكنك الاسترخاء من مخاوف مراقبة شبكتك ودعمها وصيانتها في جميع الأوقات. تضمن حلول البنية التحتية للشبكات لدينا بقاء المكوّن الأهم لنجاح أعمالك نشطاً وآمناً ومتاحاً دائماً.' },
          { title: 'التطبيق والدعم', description: 'كثيراً ما يكون الحديث عن نقاط الوصول ومكونات الشبكة الأخرى محيراً ومرهقاً. لكن مع حلول البنية التحتية للشبكات لدينا، لا داعي للقلق بشأن مسائل التركيب أو الدعم. فنيو الشبكات المعتمدون لدينا يتولون كل شيء نيابةً عنك.' },
          { title: 'تطبيق الشبكات المحلية والواسعة (LAN & WAN)', description: 'عند إعداد بنية تحتية LAN وWAN لأي شركة، يُعدّ إنشاء شبكة مرنة وموثوقة توفر النطاق الترددي المطلوب وتضمن عمل جميع الموارد المتاحة بمستويات مثلى أمراً جوهرياً.' },
          { title: 'حلول جدران الحماية', description: 'سواء أكانت شركتك صغيرة أم متوسطة أم كبيرة، أصبحت جدران الحماية جانباً أساسياً في كل بنية تحتية للشبكات نظراً للتعرض الواسع لحركة مرور الشبكة الخارجية وما قد تحمله من مخاطر. خدماتنا المخصصة تضمن تجهيزك الكامل.' },
          { title: 'الدعم الميداني', description: 'نفخر بامتلاك فريق من المحترفين المدربين والخبراء الذين يحافظون على مستويات عالية من خدمة العملاء. من كابلات النحاس والألياف البصرية إلى المحوّلات والموجّهات وشبكات LAN وWAN — كل جانب من جوانب بنيتك التحتية يُعالَج بعناية واحترافية.' },
          { title: 'اتفاقيات مستوى الخدمة', description: 'تُعدّ اتفاقيات مستوى الخدمة لدينا بعناية فائقة لتزويدك بمعلومات واضحة وموجزة حول ما نقدمه. الاستجابة في الوقت المناسب وتخصيص أفضل المهندسين والكوادر المدربة لكل احتياجاتك مضمون.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'لماذا تُعدّ البنية التحتية للشبكات بالغة الأهمية',
      points: [
        'تحتاج الشركات اليوم إلى التواصل العالمي والاتصال المستمر — حلول البنية التحتية للشبكات ضرورية لبناء عمود فقري قوي يضمن بقاء الأجهزة ومستخديها متصلين في جميع الأوقات',
        'كل شركة فريدة بطريقتها مع قوى عاملة وتصاميم مكاتب واستخدامات أجهزة متنوعة — دون حلول بنية تحتية فعّالة تواجه الشركات كفاءات منخفضة وتأخيرات في الاتصال',
        'مع تصميم شبكة مخطط ومخصص يشمل الأجهزة المادية المطلوبة والخدمات السحابية، تحصل على أفضل نتيجة بأقل جهد واستثمار',
        'خطة البنية التحتية للشبكات الفعّالة تترك مجالاً للنمو والتطوير المستقبلي حتى تتمكن من التوسع وتحقيق إمكاناتك الكاملة',
        'من كابلات النحاس والألياف البصرية إلى المحوّلات والموجّهات وشبكات LAN وWAN — يتولى مهندسو الخدمة لدينا كل جانب من جوانب بنيتك التحتية للشبكات بعناية واحترافية فائقة',
      ],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// APP DEVELOPMENT
// ─────────────────────────────────────────────────────────────────────────────
const appDevelopment: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'APP DEVELOPMENT · QATAR · GCC',
      title: 'Mobile App Development Services in Qatar, GCC',
      subtitle: 'Native and cross-platform mobile applications built for performance, usability, and long-term maintainability. From the first user flow to the App Store listing.',
      primaryCta: 'Start your app',
    },
    sections: [
      {
        eyebrow: 'OUR SERVICES',
        heading: 'iOS & Android App Development for Businesses in Qatar, GCC',
        intro: 'Compass IT Solutions builds native and cross-platform mobile applications that earn a place on the home screen. From scoping and UX design through to App Store submission and 30-day post-launch support — our mobile team owns the full delivery.',
        items: [
          { title: 'iOS App Development', description: 'Native Swift applications built to Apple Human Interface Guidelines — optimised for performance, accessibility, and App Store approval. We handle provisioning, signing, and submission so your team can focus on the product.' },
          { title: 'Android App Development', description: 'Kotlin-first Android development from design handoff to Play Store listing. We build for the full Android device spectrum — screen sizes, OS versions, and performance tiers — so your app works for every user.' },
          { title: 'Cross-Platform Development', description: 'React Native and Flutter solutions that share a single codebase across iOS and Android without compromising native feel. The right choice when speed-to-market and budget efficiency matter without sacrificing quality.' },
          { title: 'UX & Interaction Design', description: 'Every app starts with flows — not code. Our UX process maps real user journeys, stress-tests navigation patterns, and produces interactive prototypes reviewed with stakeholders before a single line is written.' },
          { title: 'API & Backend Integration', description: 'Most apps are only as good as their data layer. We design and integrate REST and GraphQL APIs, connect to third-party services, and build the Node.js backend your app needs to run reliably at scale.' },
          { title: 'Quality Assurance & Testing', description: 'Manual exploratory testing, automated test suites, and crash-free monitoring on real devices — not emulators. We target 99.5%+ crash-free sessions and cold-start under two seconds before any submission.' },
          { title: 'App Store Optimisation (ASO)', description: 'Title, description, keywords, screenshots, and preview video — all optimised for discoverability before launch. A well-optimised listing converts significantly better than a generic one.' },
          { title: 'Post-Launch Support', description: '30-day post-launch support window included on every project. Bug fixes, OS compatibility updates, and performance monitoring handled proactively so issues never reach your users first.' },
        ],
      },
      {
        eyebrow: 'OUR PROCESS',
        heading: 'How We Deliver Mobile Applications',
        items: [
          { title: 'Discovery & Scoping', description: 'Stakeholder interviews, competitive audit, user persona definition, and a detailed scope document. We agree on what is in scope — and what is not — before any design work begins.' },
          { title: 'UX Design & Prototyping', description: 'Information architecture, user flows, wireframes, and interactive prototype. Reviewed and signed off before visual design begins.' },
          { title: 'Visual Design & Component Library', description: 'On-brand visual design across all screens — light and dark modes, accessibility contrast, and a component library that speeds up development and keeps the UI consistent.' },
          { title: 'Development Sprints', description: 'Two-week sprints with a working build at the end of each. You see progress continuously, not just at the finish line.' },
          { title: 'QA, Testing & Submission', description: 'Full QA cycle across target devices and OS versions. App Store and Play Store submission handled end-to-end including review responses if required.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Why Businesses in Qatar Choose Compass IT Solutions for App Development',
      intro: 'From the first wireframe to the live app, Compass IT Solutions manages every stage of mobile development in-house — no subcontracting, no handoff gaps, no surprises at launch.',
      points: [
        'Crash-free 99.5%+ before submission — measured on mid-tier devices, not just flagships',
        'Cold-start under two seconds on the full target device matrix',
        'iOS and Android delivered in parallel — one team, one timeline, one point of accountability',
        'Design and engineering under one roof — no handoff friction between UX and code',
        'App Store and Play Store submission handled end-to-end including review responses',
        '30-day post-launch support on every project — proactive monitoring, not reactive patching',
      ],
    },
    faq: [
      { question: 'How long does it take to build a mobile app in Qatar?', answer: 'A standard mobile application takes 10–16 weeks from discovery to App Store submission. Projects with complex backend integrations or custom hardware features may take longer. Compass IT Solutions provides a detailed timeline at the start of every project.' },
      { question: 'Do you build for both iOS and Android?', answer: 'Yes. Compass IT Solutions builds native iOS (Swift), native Android (Kotlin), and cross-platform (React Native, Flutter) applications. The right technology choice depends on your budget, timeline, and performance requirements — we advise on this during the discovery phase.' },
      { question: 'What happens after the app launches?', answer: 'Every project includes a 30-day post-launch support window covering bug fixes, OS compatibility updates, and performance monitoring. Ongoing retained support is also available on a monthly basis.' },
    ],
  },
  ar: {
    hero: {
      eyebrow: 'تطوير التطبيقات · قطر · دول الخليج',
      title: 'خدمات تطوير تطبيقات الجوال في قطر ودول الخليج',
      subtitle: 'تطبيقات جوال أصيلة ومتعددة المنصات مبنية للأداء وسهولة الاستخدام والاستدامة على المدى البعيد — من أول تدفق للمستخدم حتى إدراج التطبيق في متجر التطبيقات.',
      primaryCta: 'ابدأ مشروع تطبيقك',
    },
    sections: [
      {
        eyebrow: 'خدماتنا',
        heading: 'تطوير تطبيقات iOS وAndroid للشركات في قطر ودول الخليج',
        intro: 'تبني كومباس آي تي سولوشنز تطبيقات جوال أصيلة ومتعددة المنصات تستحق مكاناً على الشاشة الرئيسية. من تحديد النطاق وتصميم تجربة المستخدم وحتى تقديم التطبيق للمتجر ودعم 30 يوماً بعد الإطلاق — فريق الجوال لدينا يمتلك كامل دورة التسليم.',
        items: [
          { title: 'تطوير تطبيقات iOS', description: 'تطبيقات Swift أصيلة مبنية وفق إرشادات واجهة مستخدم Apple — محسّنة للأداء وإمكانية الوصول والموافقة على متجر التطبيقات. نتولى التوفير والتوقيع والتقديم حتى يركز فريقك على المنتج.' },
          { title: 'تطوير تطبيقات Android', description: 'تطوير Android بلغة Kotlin من استلام التصميم حتى الإدراج في متجر Play. نبني للطيف الكامل من أجهزة Android — أحجام الشاشات وإصدارات نظام التشغيل ومستويات الأداء — حتى يعمل تطبيقك لكل مستخدم.' },
          { title: 'التطوير متعدد المنصات', description: 'حلول React Native وFlutter تشترك في قاعدة كود واحدة عبر iOS وAndroid دون التنازل عن الإحساس الأصيل. الخيار الصحيح عندما يكون الوصول السريع للسوق وكفاءة الميزانية مهمين دون التضحية بالجودة.' },
          { title: 'تصميم تجربة المستخدم والتفاعل', description: 'كل تطبيق يبدأ بالتدفقات — لا بالكود. تُعدّ عملية UX لدينا رحلات المستخدم الحقيقية واختبار أنماط التنقل وإنتاج نماذج أولية تفاعلية تُراجع مع أصحاب المصلحة قبل كتابة سطر واحد.' },
          { title: 'تكامل API والخلفية البرمجية', description: 'معظم التطبيقات لا تتجاوز جودة طبقة البيانات الخاصة بها. نصمم ونُدمج REST وGraphQL APIs، ونتصل بخدمات الأطراف الثالثة، ونبني خلفية Node.js التي يحتاجها تطبيقك للعمل بموثوقية على نطاق واسع.' },
          { title: 'ضمان الجودة والاختبار', description: 'اختبار استكشافي يدوي وأجنحة اختبار آلية ومراقبة خالية من الأعطال على أجهزة حقيقية — لا محاكيات. نستهدف 99.5%+ جلسات خالية من الأعطال وبدء تشغيل بارد أقل من ثانيتين قبل أي تقديم.' },
          { title: 'تحسين متجر التطبيقات (ASO)', description: 'العنوان والوصف والكلمات المفتاحية والصور ومقطع الفيديو التوضيحي — كلها محسّنة للاكتشاف قبل الإطلاق. القوائم المحسّنة جيداً تحقق معدلات تحويل أعلى بكثير من القوائم العامة.' },
          { title: 'دعم ما بعد الإطلاق', description: 'نافذة دعم 30 يوماً بعد الإطلاق مدرجة في كل مشروع. إصلاحات الأخطاء وتحديثات توافق نظام التشغيل ومراقبة الأداء تُعالَج باستباقية حتى لا تصل المشكلات إلى مستخدميك أولاً.' },
        ],
      },
      {
        eyebrow: 'منهجيتنا',
        heading: 'كيف نُسلّم تطبيقات الجوال',
        items: [
          { title: 'الاستكشاف وتحديد النطاق', description: 'مقابلات أصحاب المصلحة، والمراجعة التنافسية، وتعريف شخصية المستخدم، ووثيقة نطاق تفصيلية. نتفق على ما هو ضمن النطاق وما هو خارجه قبل البدء بأي عمل تصميمي.' },
          { title: 'تصميم UX والنماذج الأولية', description: 'هندسة المعلومات وتدفقات المستخدم والإطارات السلكية والنموذج الأولي التفاعلي. يُراجع ويُوافق عليه قبل البدء بالتصميم المرئي.' },
          { title: 'التصميم المرئي ومكتبة المكونات', description: 'تصميم مرئي متوافق مع العلامة التجارية عبر جميع الشاشات — الوضع الفاتح والداكن وتباين إمكانية الوصول ومكتبة مكونات تسرّع التطوير وتحافظ على اتساق واجهة المستخدم.' },
          { title: 'سبرينتات التطوير', description: 'سبرينتات أسبوعية مدتها أسبوعان مع نسخة عمل في نهاية كل منها. تشاهد التقدم باستمرار، لا في نهاية المشروع فقط.' },
          { title: 'ضمان الجودة والاختبار والتقديم', description: 'دورة ضمان جودة كاملة عبر الأجهزة المستهدفة وإصدارات نظام التشغيل. تقديم App Store وPlay Store مُدار من البداية إلى النهاية بما في ذلك ردود المراجعة عند الحاجة.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'لماذا تختار الشركات في قطر كومباس آي تي سولوشنز لتطوير التطبيقات',
      intro: 'من أول إطار سلكي حتى التطبيق الحي، تُدير كومباس آي تي سولوشنز كل مرحلة من مراحل التطوير المحمول داخلياً — لا مقاولين من الباطن، لا فجوات في التسليم، لا مفاجآت عند الإطلاق.',
      points: [
        'خالٍ من الأعطال بنسبة 99.5%+ قبل التقديم — مقاس على الأجهزة المتوسطة، لا فقط على الأجهزة الرائدة',
        'بدء تشغيل بارد أقل من ثانيتين على مصفوفة الأجهزة المستهدفة الكاملة',
        'iOS وAndroid مُسلَّمان بالتوازي — فريق واحد، جدول زمني واحد، نقطة مساءلة واحدة',
        'التصميم والهندسة تحت سقف واحد — لا احتكاك في التسليم بين UX والكود',
        'تقديم App Store وPlay Store مُدار من البداية إلى النهاية بما في ذلك ردود المراجعة',
        'دعم 30 يوماً بعد الإطلاق في كل مشروع — مراقبة استباقية، لا رقع تفاعلية',
      ],
    },
    faq: [
      { question: 'كم يستغرق بناء تطبيق جوال في قطر؟', answer: 'يستغرق تطبيق الجوال القياسي من 10 إلى 16 أسبوعاً من مرحلة الاستكشاف حتى تقديمه لمتجر التطبيقات. المشاريع ذات التكاملات المعقدة مع الخلفية البرمجية أو ميزات الأجهزة المخصصة قد تستغرق وقتاً أطول. تقدم كومباس آي تي سولوشنز جدولاً زمنياً تفصيلياً في بداية كل مشروع.' },
      { question: 'هل تبنون لنظامي iOS وAndroid معاً؟', answer: 'نعم. تبني كومباس آي تي سولوشنز تطبيقات iOS أصيلة (Swift) وAndroid أصيلة (Kotlin) ومتعددة المنصات (React Native وFlutter). الاختيار التقني المناسب يعتمد على ميزانيتك وجدولك الزمني ومتطلبات الأداء — ننصح بذلك خلال مرحلة الاستكشاف.' },
      { question: 'ماذا يحدث بعد إطلاق التطبيق؟', answer: 'كل مشروع يشمل نافذة دعم 30 يوماً بعد الإطلاق تغطي إصلاحات الأخطاء وتحديثات توافق نظام التشغيل ومراقبة الأداء. الدعم المستمر المُدار متاح أيضاً على أساس شهري.' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// DIGITAL MARKETING
// ─────────────────────────────────────────────────────────────────────────────
const digitalMarketing: Record<Lang, ServicePageData> = {
  en: {
    hero: {
      eyebrow: 'DIGITAL MARKETING · QATAR · GCC',
      title: 'Digital Marketing Agency in Qatar, GCC',
      subtitle: 'Drive measurable business growth with data-led digital marketing services in Qatar. SEO, Google Ads, social media marketing, content, and analytics — all under one strategy, measured weekly, optimised monthly.',
      primaryCta: 'Start measuring what matters',
    },
    sections: [
      {
        eyebrow: 'OUR SERVICES',
        heading: 'Comprehensive Digital Marketing Services for Businesses in Qatar and the GCC',
        intro: 'Compass IT Solutions is a full-service digital marketing agency in Qatar, building programmes that compound over time — not campaigns that spike and fade. Whether you need SEO to rank on Google in Doha, Google Ads to drive immediate leads, or social media marketing to build your brand across the GCC, our team manages every channel under one integrated strategy measured against real business outcomes.',
        items: [
          { title: 'Search Engine Optimisation (SEO) Qatar', description: 'Technical SEO, on-page optimisation, content strategy, and authority building — structured to move your rankings on Google Qatar and drive qualified organic traffic. Every recommendation is grounded in data: keyword opportunity in the Qatar and GCC market, competitive gap analysis, and crawl health audits. We target the search terms your customers in Doha actually use.' },
          { title: 'Search Engine Marketing (SEM) — Google Ads Qatar', description: 'Google Ads and Bing Ads campaigns managed to a clear performance brief for businesses in Qatar. We handle keyword research, ad copy, bid strategy, audience targeting, and landing page alignment — reviewed and optimised monthly. Budget is allocated to what drives revenue, not what looks active on a dashboard.' },
          { title: 'Social Media Marketing Qatar', description: 'Organic and paid social media marketing across LinkedIn, Instagram, and X for businesses targeting Qatar and GCC audiences. Content calendars built from audience insight and local market context — not generic templates. Paid social targeted by role, industry, seniority, and intent so your budget reaches the right decision-makers in Doha and beyond.' },
          { title: 'Content Marketing & Inbound', description: 'Long-form content, thought leadership articles, case studies, and resource assets that attract the right audience in Qatar and convert them over time. Gated content, email nurture sequences, and lead scoring built around your sales process. Content is written and optimised for both search engines and human readers.' },
          { title: 'Email Marketing & Automation', description: 'Segmented email campaigns, drip sequences, and triggered workflows set up in HubSpot, Mailchimp, or your existing CRM. We go beyond open rates and click-throughs — the metric that matters is pipeline contribution. Automation means the right message reaches the right contact at the right time, without manual effort.' },
          { title: 'B2B Digital Marketing Qatar', description: 'Messaging architecture, value proposition development, and channel sequencing built for complex B2B sales cycles in Qatar. LinkedIn outreach, account-based marketing (ABM), and sales enablement content aligned to your funnel. Particularly effective for technology, professional services, and industrial businesses selling to enterprises in Doha and the wider Gulf.' },
          { title: 'Analytics & Attribution', description: 'GA4, Google Tag Manager, multi-touch attribution modelling, and custom reporting dashboards. We connect marketing activity to revenue — not just sessions and page views. Vanity metrics get cut by month two. Every report shows what moved the number and what to do next.' },
          { title: 'Digital Strategy & Competitive Audit', description: 'Before recommending a channel mix, we audit your existing digital presence — SEO health, analytics accuracy, ad account structure, content library, and how your competitors are performing in Qatar search results. Strategy comes before execution. You will know exactly where you stand before any budget is committed.' },
        ],
      },
      {
        eyebrow: 'HOW WE WORK',
        heading: 'Our Digital Marketing Engagement Model',
        items: [
          { title: 'Digital Audit & Baseline', description: 'We start by auditing your existing digital presence — SEO health, analytics accuracy, ad account structure, content library, and competitive positioning in Qatar search. The audit surfaces quick wins and long-term priorities before a single campaign launches.' },
          { title: 'Strategy & Channel Mix', description: 'Based on the audit findings, we agree a channel mix and 90-day roadmap tied directly to your business objectives. Budget allocation, KPIs, and reporting cadence are confirmed in writing before any work begins.' },
          { title: 'Creative & Content Production', description: 'Copy, design, and where needed, video assets — produced in-house. Brand voice and visual identity applied consistently across every channel and both English and Arabic where required.' },
          { title: 'Campaign Execution', description: 'Campaigns launched, monitored, and iterated within agreed timelines. Weekly check-ins and transparent reporting throughout — no waiting until the end of month to find out what happened.' },
          { title: 'Monthly Review & Optimisation', description: 'Monthly reporting tied to agreed KPIs. Budget reallocation, bid adjustments, and content pivots made based on what the data shows. Every recommendation has a reason behind it.' },
          { title: 'Quarterly Strategy Review', description: 'Every quarter we revisit the strategy — competitive landscape in Qatar, channel performance, and the roadmap for the next 90 days. Programmes that compound require a steady pace of small improvements over time.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'WHY COMPASS ITS',
      heading: 'Why Businesses in Qatar Choose Compass IT Solutions for Digital Marketing',
      intro: 'As a digital marketing agency based in Qatar, Compass IT Solutions understands the local market, the competitive landscape in Doha, and how to reach decision-makers across the GCC. We report what moved the number — not what was busy.',
      points: [
        'Based in Qatar — we understand the Doha market, local search behaviour, and GCC audience expectations',
        'Weekly reporting tied to real business outcomes — not traffic and impressions alone',
        'Multi-touch attribution so you know exactly which channels and touchpoints are driving pipeline',
        'SEO, SEM, social, email, and content managed under one strategy — no gaps between specialists',
        'Analytics and tracking infrastructure set up correctly before any campaign launches',
        'Bilingual capability — English and Arabic campaigns for businesses targeting both audiences in Qatar',
        'B2B and B2C experience across professional services, technology, retail, and industrial sectors in the GCC',
        'Project or retained engagement models — start with a defined scope before committing to a longer retainer',
      ],
      credentialsHeading: 'Digital Marketing Certifications and Partnerships',
      credentials: [
        { title: 'Google Ads Certified', description: 'Our team holds Google Ads certifications covering Search, Display, and Performance Max campaigns — ensuring your paid search budget is managed to Google\'s highest standards of practice.' },
        { title: 'Google Analytics 4 (GA4)', description: 'Certified in GA4 setup, configuration, and reporting. We implement tracking correctly from day one so your data is accurate, complete, and actionable from the start of the engagement.' },
        { title: 'Meta Advertising', description: 'Experienced in Meta Ads Manager for Facebook and Instagram campaigns — including audience building, creative testing, retargeting, and conversion optimisation for Qatar and GCC audiences.' },
        { title: 'HubSpot', description: 'HubSpot-experienced for inbound marketing, CRM integration, email automation, and lead nurturing — connecting your marketing activity directly to your sales pipeline.' },
        { title: 'LinkedIn Campaign Manager', description: 'LinkedIn advertising for B2B businesses in Qatar — targeting by job title, seniority, company size, and industry. Particularly effective for professional services and technology companies reaching decision-makers across the GCC.' },
      ],
    },
    faq: [
      { question: 'What digital marketing services does Compass IT Solutions offer in Qatar?', answer: 'Compass IT Solutions provides a full suite of digital marketing services in Qatar including SEO, Google Ads (SEM), social media marketing on LinkedIn and Instagram, content marketing, email automation, B2B communication strategy, and analytics and attribution — all managed under one integrated strategy.' },
      { question: 'How long does SEO take to show results in Qatar?', answer: 'SEO in Qatar typically shows meaningful movement in 3–6 months depending on competition, current site health, and keyword targets. We establish a baseline audit in month one, begin technical and content work in month two, and report on ranking progress weekly.' },
      { question: 'Do you run Google Ads campaigns in Qatar?', answer: 'Yes. Compass IT Solutions manages Google Ads and Bing Ads campaigns for businesses in Qatar and across the GCC. We handle keyword research, ad copy, bid strategy, landing page alignment, and monthly optimisation — reporting on what actually moved the number.' },
      { question: 'How much does digital marketing cost in Qatar?', answer: 'Digital marketing costs in Qatar vary by channel mix, competition level, and scope. We offer project-based and retained engagement models. We recommend starting with a defined audit and 90-day programme before committing to a longer retainer — so you can see results before scaling the budget.' },
      { question: 'Can you handle Arabic and English digital marketing in Qatar?', answer: 'Yes. Compass IT Solutions delivers campaigns in both English and Arabic, covering bilingual SEO, Arabic ad copy, and localised content for the Qatar and GCC market. Bilingual strategy is important for businesses targeting both expatriate and Qatari local audiences.' },
      { question: 'Do you work with B2B businesses in Qatar?', answer: 'Yes. Compass IT Solutions has experience with B2B digital marketing across professional services, technology, and industrial sectors in Qatar and the GCC. LinkedIn campaigns, account-based marketing, and sales enablement content are all in scope.' },
    ],
  },
  ar: {
    hero: {
      eyebrow: 'التسويق الرقمي · قطر · دول الخليج',
      title: 'خدمات التسويق الرقمي في قطر ودول الخليج',
      subtitle: 'قنوات البحث والمحتوى والإعلانات المدفوعة مصممة للعمل معاً — قياس أسبوعي، تحسين شهري، تراكم على مدى أرباع السنة.',
      primaryCta: 'ابدأ قياس ما يهم',
    },
    sections: [
      {
        eyebrow: 'خدماتنا',
        heading: 'تسويق رقمي متكامل للمؤسسات في قطر ودول الخليج',
        intro: 'تبني كومباس آي تي سولوشنز برامج تسويق رقمي تتراكم عبر الزمن — لا حملات تشتعل وتخبو. قنوات البحث والتواصل الاجتماعي والبريد الإلكتروني والإعلانات المدفوعة تعمل معاً تحت استراتيجية واحدة، مقاسة بنتائج الأعمال الحقيقية.',
        items: [
          { title: 'تحسين محركات البحث (SEO)', description: 'SEO تقني واستراتيجية محتوى وبناء سلطة — مهيكلة لتحريك الترتيبات التي تجلب الزيارات المؤهلة. كل توصية مبنية على البيانات: فرص الكلمات المفتاحية، والفجوة التنافسية، وصحة الزحف.' },
          { title: 'التسويق عبر محركات البحث (SEM)', description: 'حملات Google Ads وBing Ads مُدارة وفق موجز أداء واضح. تخصيص الميزانية واستراتيجية العطاء ونسخة الإعلان ومحاذاة الصفحة المقصودة تُراجع شهرياً. نُبلّغ عما حرّك الرقم — لا عما كان مشغولاً فحسب.' },
          { title: 'التسويق عبر وسائل التواصل الاجتماعي', description: 'تواصل اجتماعي عضوي ومدفوع عبر LinkedIn وInstagram وX. تقاويم المحتوى مبنية من رؤية الجمهور، لا من قوالب. التواصل الاجتماعي المدفوع مستهدف بالدور والصناعة والنية — لا بالديموغرافيا فقط.' },
          { title: 'تسويق المحتوى والاستقطاب', description: 'محتوى طويل وقيادة فكرية وأصول موارد تجذب الجمهور المناسب وتحوّله عبر الزمن. محتوى مقيّد وتسلسلات تغذية بريد إلكتروني وتسجيل نقاط العملاء المحتملين مبنية حول عملية المبيعات الخاصة بك.' },
          { title: 'التسويق عبر البريد الإلكتروني والأتمتة', description: 'حملات مجزأة وتسلسلات تدفق وسير عمل مُشغَّلة في HubSpot أو Mailchimp أو CRM الموجود. معدلات الفتح والنقر تُبلَّغ — لكن المقياس المهم هو مساهمة خط الأنابيب.' },
          { title: 'استراتيجية التواصل B2B', description: 'هندسة الرسائل وتطوير عرض القيمة وتسلسل القنوات لدورات مبيعات B2B المعقدة. التواصل عبر LinkedIn والتسويق القائم على الحسابات ومحتوى تمكين المبيعات متوافقة مع مسار تحويلك.' },
          { title: 'التحليلات والإسناد', description: 'GA4 وGoogle Tag Manager والإسناد متعدد اللمس ولوحات متابعة مخصصة. نربط نشاط التسويق بالإيرادات — لا بالزيارات فقط. مقاييس الغرور تُقطع بحلول الشهر الثاني.' },
          { title: 'الاستراتيجية الرقمية والمراجعات', description: 'قبل أن نوصي بمزيج قنوات، نراجع ما لديك — المحتوى الموجود وإعداد التحليلات وتموضع المنافسين والمشهد الكلمات المفتاحية. الاستراتيجية تأتي قبل التنفيذ.' },
        ],
      },
      {
        eyebrow: 'كيف نعمل',
        heading: 'نموذج التعاون التسويقي لدينا',
        items: [
          { title: 'المراجعة والخط الأساسي', description: 'نبدأ بمراجعة وجودك الرقمي الحالي — صحة SEO ودقة التحليلات وهيكل حساب الإعلانات ومكتبة المحتوى والتموضع التنافسي. تكشف المراجعة عن المكاسب السريعة والأولويات طويلة المدى.' },
          { title: 'الاستراتيجية ومزيج القنوات', description: 'بناءً على المراجعة، نتفق على مزيج قنوات وخارطة طريق 90 يوماً مرتبطة بأهداف أعمالك. تخصيص الميزانية ومؤشرات KPI وإيقاع التقارير تُؤكَّد قبل إطلاق أي حملة.' },
          { title: 'إنتاج الإبداع والمحتوى', description: 'الكتابة والتصميم وأصول الفيديو تُنتَج داخلياً. صوت العلامة التجارية والهوية البصرية تُطبَّق باتساق عبر كل قناة — لا تناثر للمستقلين.' },
          { title: 'تنفيذ الحملة', description: 'الحملات تُطلق وتُراقب وتُكرَّر ضمن الجداول الزمنية المتفق عليها. فحوصات أسبوعية وتقارير شفافة طوال الفترة.' },
          { title: 'المراجعة والتحسين الشهري', description: 'تقارير شهرية مرتبطة بمؤشرات KPI المتفق عليها. إعادة تخصيص الميزانية وتعديلات العطاء ومحاور المحتوى تُجرى بناءً على ما تُظهره البيانات — لا الحدس.' },
          { title: 'مراجعة الاستراتيجية الفصلية', description: 'كل ربع سنة نُعيد النظر في الاستراتيجية — المشهد التنافسي وأداء القنوات وخارطة طريق الـ 90 يوماً القادمة. البرامج التراكمية تتطلب وتيرة ثابتة من التحسينات الصغيرة.' },
        ],
      },
    ],
    whyUs: {
      eyebrow: 'لماذا كومباس آي تي سولوشنز',
      heading: 'لماذا تختار الشركات في قطر كومباس آي تي سولوشنز للتسويق الرقمي',
      intro: 'نُبلّغ عما حرّك الرقم — لا عما كان مشغولاً فحسب. كل تعاقد يبدأ ببنية تحتية للقياس حتى نعرف ما يصلح من الأسبوع الأول.',
      points: [
        'تقارير أسبوعية مرتبطة بنتائج أعمال حقيقية — لا الزيارات والظهور وحدهما',
        'إسناد متعدد اللمس حتى تعرف أي القنوات ونقاط التماس تُحرّك خط الأنابيب',
        'قنوات البحث والتواصل الاجتماعي والبريد الإلكتروني والإعلانات المدفوعة مُدارة تحت استراتيجية واحدة — لا فجوات عزل',
        'بنية تحتية للتحليلات والتتبع تُعدّ بشكل صحيح قبل إطلاق الحملات',
        'قادر على B2B — LinkedIn والتسويق القائم على الحسابات ومحتوى تمكين المبيعات ضمن النطاق',
        'نماذج تعاقد بالمشروع أو المستمر — اختبر بنطاق محدد قبل الالتزام على المدى البعيد',
      ],
    },
    faq: [
      { question: 'ما خدمات التسويق الرقمي التي تقدمها كومباس آي تي سولوشنز في قطر؟', answer: 'تقدم كومباس آي تي سولوشنز SEO وGoogle Ads (SEM) والتسويق عبر وسائل التواصل الاجتماعي وتسويق المحتوى وأتمتة البريد الإلكتروني واستراتيجية التواصل B2B والتحليلات والإسناد — كلها مُدارة تحت استراتيجية متكاملة واحدة.' },
      { question: 'كم من الوقت يستغرق التسويق الرقمي لإظهار النتائج؟', answer: 'القنوات المدفوعة (SEM والتواصل الاجتماعي المدفوع) يمكنها إظهار نتائج خلال الشهر الأول. SEO وتسويق المحتوى يتراكمان على مدى 3–6 أشهر. نضع جداول زمنية واقعية في بداية كل تعاقد ونُبلّغ أسبوعياً حتى ترى الزخم يتراكم.' },
      { question: 'هل تعملون مع الشركات B2B في قطر؟', answer: 'نعم. لدى كومباس آي تي سولوشنز خبرة في التسويق الرقمي B2B عبر الخدمات المهنية والتكنولوجيا والقطاعات الصناعية في قطر ودول الخليج. حملات LinkedIn والتسويق القائم على الحسابات ومحتوى تمكين المبيعات كلها ضمن النطاق.' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export const serviceData: Record<string, Record<Lang, ServicePageData>> = {
  cybersecurity,
  'it-services': itServices,
  'web-development': webDevelopment,
  'ai-workflows': aiWorkflows,
  'cloud-solutions': cloudSolutions,
  'network-infrastructure': networkInfrastructure,
  'app-development': appDevelopment,
  'digital-marketing': digitalMarketing,
}
