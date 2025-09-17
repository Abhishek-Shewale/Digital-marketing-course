/* ------------- DATA: important topics for each course ------------- */
const importantTopics = {
    seo: {
        "id": "seo_important_topics",
        "title": "Important Topics - Search Engine Optimization (SEO)",
        "content": [
            {
                "step": 1,
                "title": "SEO Fundamentals",
                "points": [
                    "Understand crawling, indexing, and ranking.",
                    "Know the difference between on-page, off-page, and technical SEO.",
                    "Learn about search intent: informational, navigational, transactional."
                ]
            },
            {
                "step": 2,
                "title": "Keyword Research & Intent",
                "points": [
                    "Differentiate seed, short-tail, and long-tail keywords.",
                    "Understand keyword intent and mapping.",
                    "Avoid keyword cannibalization by assigning unique keywords to each page."
                ]
            },
            {
                "step": 3,
                "title": "On-page Optimization Essentials",
                "points": [
                    "Optimize title tags, meta descriptions, and headings.",
                    "Use clean URLs and descriptive image alt text.",
                    "Leverage internal linking to connect related content."
                ]
            },
            {
                "step": 4,
                "title": "Content Structure & User Value",
                "points": [
                    "Follow E-E-A-T principles (Experience, Expertise, Authority, Trust).",
                    "Structure content with clear headings and hierarchy.",
                    "Optimize content for featured snippets and voice search."
                ]
            },
            {
                "step": 5,
                "title": "Technical SEO Basics",
                "points": [
                    "Check crawlability and indexability using robots.txt and XML sitemaps.",
                    "Understand canonical tags and duplicate content issues.",
                    "Improve Core Web Vitals: speed, responsiveness, and stability."
                ]
            },
            {
                "step": 6,
                "title": "Link Earning & Outreach",
                "points": [
                    "Focus on quality over quantity of backlinks.",
                    "Use guest posts, collaborations, and digital PR for link building.",
                    "Avoid spammy or paid link schemes that harm rankings."
                ]
            },
            {
                "step": 7,
                "title": "Measurement & Iteration",
                "points": [
                    "Track SEO KPIs: impressions, clicks, CTR, conversions.",
                    "Use Google Search Console and Google Analytics for monitoring.",
                    "Apply iterative SEO: measure, test, and refine regularly."
                ]
            }
        ],
        "note": "These are the high-priority topics to revise step-by-step before exams, interviews, or SEO projects. Each step builds on the previous one."
    },

    sem: {
        "id": "sem_important_topics",
        "title": "Important Topics - Search Engine Marketing (SEM)",
        "content": [
            {
                "step": 1,
                "title": "SEM Fundamentals",
                "points": [
                    "Understand PPC basics and ad auction system.",
                    "Know the role of Ad Rank, Quality Score, CPC, CTR.",
                    "See why SEM delivers immediate visibility compared to SEO."
                ]
            },
            {
                "step": 2,
                "title": "Keyword Research & Commercial Intent",
                "points": [
                    "Focus on commercial/transactional keywords.",
                    "Use match types (broad, phrase, exact) effectively.",
                    "Maintain negative keyword lists to avoid wasted spend."
                ]
            },
            {
                "step": 3,
                "title": "Ad Copy & Creative Best-practices",
                "points": [
                    "Write compelling headlines and descriptions.",
                    "Include keywords and clear CTAs.",
                    "Use ad extensions to boost visibility and CTR."
                ]
            },
            {
                "step": 4,
                "title": "Landing Page Relevance",
                "points": [
                    "Match ad promises with landing page content.",
                    "Highlight value proposition and strong CTA.",
                    "Ensure mobile-first, fast-loading landing pages."
                ]
            },
            {
                "step": 5,
                "title": "Campaign Structure & Targeting",
                "points": [
                    "Organize campaigns → ad groups → keywords → ads.",
                    "Apply location, device, schedule, and demographic targeting.",
                    "Separate goals into different campaigns for clarity."
                ]
            },
            {
                "step": 6,
                "title": "Bidding Strategies & Budgeting",
                "points": [
                    "Start with manual bidding to gather data.",
                    "Move to automated bidding (CPA/ROAS) with enough conversions.",
                    "Reallocate budget to high-performing campaigns."
                ]
            },
            {
                "step": 7,
                "title": "Measurement & Optimization",
                "points": [
                    "Track conversions and KPIs like CTR, CPC, CPA, ROAS.",
                    "Run A/B tests to improve ads and landing pages.",
                    "Iterate weekly/monthly to sustain performance."
                ]
            }
        ],
        "note": "Follow these SEM essentials to maximize ROI with paid search campaigns."
    },

    ppc: {
        "id": "ppc_important_topics",
        "title": "Important Topics - Pay-Per-Click (PPC)",
        "content": [
            {
                "step": 1,
                "title": "PPC Fundamentals",
                "points": [
                    "Understand PPC auction model across platforms.",
                    "Know Quality Score, Ad Rank, CPC, CTR, CPA.",
                    "Differentiate PPC vs SEO for traffic generation."
                ]
            },
            {
                "step": 2,
                "title": "Platform Selection & Goals",
                "points": [
                    "Google & Microsoft Ads for search intent traffic.",
                    "Facebook/LinkedIn/Twitter Ads for audience targeting.",
                    "Set clear goals: awareness, leads, or sales."
                ]
            },
            {
                "step": 3,
                "title": "Keyword Targeting & Match Types",
                "points": [
                    "Use exact/phrase/broad match wisely.",
                    "Leverage long-tail keywords for lower CPC.",
                    "Add negative keywords to prevent wasted clicks."
                ]
            },
            {
                "step": 4,
                "title": "Ad Creative & Formats",
                "points": [
                    "Create attention-grabbing headlines and CTAs.",
                    "Test responsive ads and multiple ad variations.",
                    "Use ad extensions (sitelinks, callouts, promotions)."
                ]
            },
            {
                "step": 5,
                "title": "Bidding & Budget Management",
                "points": [
                    "Choose manual or automated bidding based on maturity.",
                    "Allocate budgets to high-performing keywords.",
                    "Apply bid adjustments for device, time, and location."
                ]
            },
            {
                "step": 6,
                "title": "Landing Page Optimization",
                "points": [
                    "Align landing page with ad promise.",
                    "Use a single clear CTA with trust signals.",
                    "Optimize for speed and mobile responsiveness."
                ]
            },
            {
                "step": 7,
                "title": "Tracking, Analytics & Reporting",
                "points": [
                    "Set up conversion tracking and Google Analytics.",
                    "Monitor KPIs like CTR, CPC, CPA, ROAS.",
                    "Use attribution models and A/B testing for optimization."
                ]
            }
        ],
        "note": "These PPC essentials ensure ad spend efficiency and maximize conversions."
    },

    smm: {
        id: "smm_important_topics",
        title: "Important Topics - Social Media Marketing (SMM)",
        content: [
            {
                step: 1,
                title: "SMM Fundamentals",
                points: [
                    "Understand platform differences (Instagram, Facebook, LinkedIn, TikTok, YouTube).",
                    "Know organic vs paid reach and the role of engagement in algorithms.",
                    "Define clear SMM objectives: awareness, engagement, traffic, conversions."
                ]
            },
            {
                step: 2,
                title: "Strategy & Planning",
                points: [
                    "Set SMART goals, choose platforms based on audience, and define content pillars.",
                    "Create a content calendar and publishing workflow.",
                    "Perform competitive analysis and audience research before posting."
                ]
            },
            {
                step: 3,
                title: "Content Creation",
                points: [
                    "Produce platform-specific formats (short video, carousel, stories, long-form).",
                    "Focus on visual storytelling, hook-first openers, and scannable captions.",
                    "Repurpose core content across formats and use UGC where possible."
                ]
            },
            {
                step: 4,
                title: "Community Management & Engagement",
                points: [
                    "Respond promptly, encourage conversations, and nurture advocates.",
                    "Use social listening to capture mentions and sentiment.",
                    "Have moderation & crisis protocols; reward top contributors."
                ]
            },
            {
                step: 5,
                title: "Social Advertising",
                points: [
                    "Match ad format to objective (awareness, consideration, conversion).",
                    "Use precise targeting, retargeting, and lookalike audiences.",
                    "Always A/B test creatives, copy, and CTAs — measure CPA/ROAS."
                ]
            },
            {
                step: 6,
                title: "Analytics & Performance",
                points: [
                    "Track KPIs per objective (reach, engagement, CTR, conversions).",
                    "Build dashboards and run weekly/monthly reviews to optimize.",
                    "Use qualitative insights (comments) alongside numbers for decisions."
                ]
            },
            {
                step: 7,
                title: "Growth & Best Practices",
                points: [
                    "Leverage influencers and partnerships for credibility and reach.",
                    "Follow platform trends but keep brand voice consistent.",
                    "Iterate — test formats, posting times, and promotion mixes regularly."
                ]
            }
        ],
        note: "High-priority SMM topics — use as a single-page quick reference to plan posts, campaigns and measurement."
    },

    email: {
        id: "email_important_topics",
        title: "Important Topics - Email Marketing",
        content: [
            {
                step: 1,
                title: "Email Fundamentals",
                points: [
                    "Understand permission-based marketing and common email types (broadcast, transactional, drip).",
                    "Know core metrics: open rate, CTR, conversion rate, unsubscribe rate.",
                    "Recognize the business value — high ROI and direct customer access."
                ]
            },
            {
                step: 2,
                title: "List Building & Segmentation",
                points: [
                    "Collect subscribers with value-driven lead magnets and opt-ins.",
                    "Use double opt-in and keep list hygiene (regular cleaning).",
                    "Segment by behavior, purchase history, and engagement for relevance."
                ]
            },
            {
                step: 3,
                title: "Crafting Effective Email Content",
                points: [
                    "Write clear subject lines + preheaders and one primary CTA per email.",
                    "Use inverted-pyramid structure and make content scannable for mobile.",
                    "Personalize beyond name — dynamic content based on segments."
                ]
            },
            {
                step: 4,
                title: "Design & Deliverability",
                points: [
                    "Design responsive templates; test across major email clients.",
                    "Implement SPF/DKIM/DMARC and monitor sender reputation.",
                    "Balance text-to-image ratio and include plain-text alternatives."
                ]
            },
            {
                step: 5,
                title: "Automation & Drip Campaigns",
                points: [
                    "Map user journeys and build trigger-based workflows (welcome, cart, onboarding).",
                    "Use conditional logic and behavioral triggers for personalization.",
                    "Monitor and optimize automation performance regularly."
                ]
            },
            {
                step: 6,
                title: "Analytics & Optimization",
                points: [
                    "Track both engagement (open/CTR) and business metrics (conversions, revenue).",
                    "Use A/B tests for subject lines, send times and CTAs.",
                    "Create dashboards and run cohort/segment analyses for deeper insight."
                ]
            },
            {
                step: 7,
                title: "Compliance & Best Practices",
                points: [
                    "Follow GDPR/CAN-SPAM rules: clear opt-outs, consent records, and privacy links.",
                    "Respect frequency preferences and provide a preference center.",
                    "Document tests and iterate — deliverability and engagement improve over time."
                ]
            }
        ],
        note: "Use this single-page guide to set up effective email programs — acquisition, nurture, automation and measurement."
    },

    analytics: {
        id: "analytics_important_topics",
        title: "Important Topics - Marketing Analytics & Measurement",
        content: [
            {
                step: 1,
                title: "Analytics Fundamentals",
                points: [
                    "Understand descriptive, diagnostic, predictive, and prescriptive analytics.",
                    "Know why data-driven marketing decisions outperform intuition.",
                    "Learn how analytics connects marketing actions to business outcomes."
                ]
            },
            {
                step: 2,
                title: "Data Collection & Integration",
                points: [
                    "Differentiate first, second, and third-party data.",
                    "Understand CDPs, DMPs, APIs, and ETL processes.",
                    "Prioritize first-party data and ensure data quality and governance."
                ]
            },
            {
                step: 3,
                title: "Key Performance Indicators (KPIs)",
                points: [
                    "Focus on KPIs aligned with business goals: acquisition, engagement, conversion, retention, revenue.",
                    "Know difference between leading and lagging indicators.",
                    "Avoid vanity metrics — measure what drives outcomes."
                ]
            },
            {
                step: 4,
                title: "Attribution Modeling",
                points: [
                    "Understand single-touch models (first-click, last-click) vs multi-touch models.",
                    "Know time-decay, linear, position-based, and algorithmic approaches.",
                    "Use attribution insights to optimize budget allocation."
                ]
            },
            {
                step: 5,
                title: "Reporting & Visualization",
                points: [
                    "Create dashboards that track KPIs clearly and simply.",
                    "Use appropriate chart types (line for trends, bar for comparisons, funnel for conversion).",
                    "Tell stories with data — insights and recommendations matter more than raw numbers."
                ]
            },
            {
                step: 6,
                title: "Advanced & Predictive Analytics",
                points: [
                    "Apply regression, classification, clustering, and time-series forecasting.",
                    "Use churn prediction, CLV modeling, and propensity scoring.",
                    "Balance model accuracy with interpretability for business use."
                ]
            },
            {
                step: 7,
                title: "Best Practices & Ethics",
                points: [
                    "Ensure compliance with GDPR, CCPA and other privacy regulations.",
                    "Integrate online + offline data for a complete customer view.",
                    "Continuously monitor, validate, and refine analytics processes."
                ]
            }
        ],
        note: "These topics cover the full cycle of marketing analytics — from data collection to reporting and predictive modeling. Master these to prove and improve ROI."
    },

    persona: {
        id: "persona_important_topics",
        title: "Important Topics - Persona Development & Target Audience",
        content: [
            {
                step: 1,
                title: "Personas & Target Audiences Basics",
                points: [
                    "Understand difference between personas (semi-fictional profiles) and target audiences (market segments).",
                    "Personas humanize data; audiences define scope of market.",
                    "Both are essential for customer-centric marketing."
                ]
            },
            {
                step: 2,
                title: "Research Methods",
                points: [
                    "Use qualitative methods (interviews, focus groups, observation).",
                    "Use quantitative methods (surveys, analytics, CRM data).",
                    "Combine multiple sources for evidence-based personas."
                ]
            },
            {
                step: 3,
                title: "Creating Detailed Personas",
                points: [
                    "Include demographics, psychographics, behaviors, goals, and pain points.",
                    "Add relatable elements: names, quotes, photos.",
                    "Make personas specific but not overly narrow."
                ]
            },
            {
                step: 4,
                title: "Audience Segmentation",
                points: [
                    "Apply demographic, geographic, psychographic, and behavioral segmentation.",
                    "Use MASDA criteria (Measurable, Accessible, Substantial, Differentiable, Actionable).",
                    "Align segmentation with business objectives and capabilities."
                ]
            },
            {
                step: 5,
                title: "Customer Journey Mapping",
                points: [
                    "Visualize stages: awareness → consideration → purchase → retention → advocacy.",
                    "Include customer actions, thoughts, emotions, and pain points.",
                    "Identify moments of truth and opportunities for improvement."
                ]
            },
            {
                step: 6,
                title: "Applying Personas to Strategy",
                points: [
                    "Tailor content, messaging, and campaigns to specific personas.",
                    "Choose channels and positioning that match audience preferences.",
                    "Balance personalization with overall brand consistency."
                ]
            },
            {
                step: 7,
                title: "Best Practices & Optimization",
                points: [
                    "Base personas on research, not assumptions.",
                    "Update personas regularly as markets evolve.",
                    "Share personas across all teams for consistent application."
                ]
            }
        ],
        note: "These are the core steps to create and apply personas effectively — from research and segmentation to customer journeys and strategy alignment."
    },

    content: {
        id: "content_important_topics",
        title: "Important Topics - Content Strategy & Data Storytelling",
        content: [
            {
                step: 1,
                title: "Content Strategy Foundations",
                points: [
                    "Understand goals, audience analysis, and content lifecycle.",
                    "Learn how governance ensures consistency and quality.",
                    "Integrate strategy with distribution and measurement."
                ]
            },
            {
                step: 2,
                title: "Content Planning & Development",
                points: [
                    "Conduct content audits and gap analysis.",
                    "Define content pillars and frameworks for structure.",
                    "Create calendars and workflows for consistent publishing."
                ]
            },
            {
                step: 3,
                title: "Data Collection & Analysis",
                points: [
                    "Use web, social, and CMS analytics to track performance.",
                    "Collect both quantitative and qualitative insights.",
                    "Perform competitive and keyword analysis to spot opportunities."
                ]
            },
            {
                step: 4,
                title: "Data Storytelling Principles",
                points: [
                    "Apply narrative structures: problem/solution, before/after, journey.",
                    "Combine context, insight, and emotional connection.",
                    "End stories with clear call-to-actions for impact."
                ]
            },
            {
                step: 5,
                title: "Visualization & Communication",
                points: [
                    "Use appropriate charts and infographics for clarity.",
                    "Simplify complexity — highlight insights, not clutter.",
                    "Balance accuracy with accessibility for target audiences."
                ]
            },
            {
                step: 6,
                title: "Content Distribution & Promotion",
                points: [
                    "Leverage paid, owned, and earned channels strategically.",
                    "Adapt content to fit platform formats and audiences.",
                    "Build multi-channel plans that maximize reach and ROI."
                ]
            },
            {
                step: 7,
                title: "Measurement & Iteration",
                points: [
                    "Track KPIs: awareness, engagement, conversion, retention.",
                    "Run A/B tests and optimize content performance regularly.",
                    "Follow iterative improvement: plan → test → measure → refine."
                ]
            }
        ],
        note: "These steps cover the full cycle of content strategy — from planning and storytelling to distribution and measurement."
    },

    branding: {
        id: "branding_important_topics",
        title: "Important Topics - Brand Awareness Fundamentals",
        content: [
            {
                step: 1,
                title: "Brand Awareness Basics",
                points: [
                    "Differentiate recognition, recall, and top-of-mind awareness.",
                    "Understand brand salience and how it builds recall.",
                    "Awareness is the foundation for consideration and loyalty."
                ]
            },
            {
                step: 2,
                title: "Brand Identity",
                points: [
                    "Develop strong visual, verbal, and experiential elements.",
                    "Ensure identity reflects values and resonates with audience.",
                    "Maintain consistency across all brand touchpoints."
                ]
            },
            {
                step: 3,
                title: "Brand Positioning",
                points: [
                    "Define target audience, frame of reference, and point of difference.",
                    "Use positioning statements to guide messaging and campaigns.",
                    "Ensure positioning is relevant, credible, and sustainable."
                ]
            },
            {
                step: 4,
                title: "Messaging & Storytelling",
                points: [
                    "Craft core and supporting messages aligned with brand essence.",
                    "Use authentic narratives to create emotional connections.",
                    "Maintain consistent brand voice and adapt for different channels."
                ]
            },
            {
                step: 5,
                title: "Visual Brand Design",
                points: [
                    "Create distinctive logos, color palettes, and typography.",
                    "Develop imagery styles and brand guidelines for consistency.",
                    "Ensure visual elements scale across different platforms and media."
                ]
            },
            {
                step: 6,
                title: "Awareness Strategies & Tactics",
                points: [
                    "Leverage paid, owned, earned, and shared media channels.",
                    "Use IMC (Integrated Marketing Communications) for consistency.",
                    "Mix experiential, influencer, and partnership marketing for reach."
                ]
            },
            {
                step: 7,
                title: "Measuring Awareness & Equity",
                points: [
                    "Track aided, unaided, and top-of-mind awareness.",
                    "Measure brand equity: associations, loyalty, perceived quality.",
                    "Benchmark against competitors and measure change over time."
                ]
            }
        ],
        note: "These key topics help establish, build, and measure brand awareness — from identity and messaging to strategies and equity tracking."
    },

    keyword: {
        id: "keyword_important_topics",
        title: "Important Topics - Keyword Research & Intent Mapping",
        content: [
            {
                step: 1,
                title: "Keyword Research Basics",
                points: [
                    "Understand difference between short-tail and long-tail keywords.",
                    "Know how search volume, difficulty, and relevance affect selection.",
                    "Start with seed keywords related to your business or topic."
                ]
            },
            {
                step: 2,
                title: "Understanding Search Intent",
                points: [
                    "Differentiate informational, navigational, transactional, and commercial investigation queries.",
                    "Match content type to intent (blogs, product pages, comparisons).",
                    "Analyze SERPs to identify the dominant intent for a keyword."
                ]
            },
            {
                step: 3,
                title: "Keyword Tools & Techniques",
                points: [
                    "Use free tools (Google Keyword Planner, Search Console, Trends) for discovery.",
                    "Leverage paid tools like SEMrush, Ahrefs, Moz for deeper insights.",
                    "Explore autocomplete, People Also Ask, and forums for real queries."
                ]
            },
            {
                step: 4,
                title: "Competition & Difficulty Analysis",
                points: [
                    "Evaluate domain and page authority of current ranking sites.",
                    "Check backlink strength and content quality of competitors.",
                    "Prioritize keywords with good balance of relevance and achievable difficulty."
                ]
            },
            {
                step: 5,
                title: "Mapping Keywords to Content",
                points: [
                    "Cluster related keywords into groups for topic coverage.",
                    "Map keywords to specific content types and journey stages.",
                    "Build pillar pages with supporting articles to improve topical authority."
                ]
            },
            {
                step: 6,
                title: "Performance Measurement",
                points: [
                    "Track keyword rankings and organic traffic regularly.",
                    "Monitor CTR, bounce rate, and conversions for targeted keywords.",
                    "Identify page 2 keywords for optimization opportunities."
                ]
            },
            {
                step: 7,
                title: "Iteration & Optimization",
                points: [
                    "Update underperforming pages with improved content and on-page SEO.",
                    "Adjust keyword targeting as search trends evolve.",
                    "Expand successful clusters and retire low-value keywords."
                ]
            }
        ],
        note: "This sequence covers the lifecycle of keyword strategy — from research and intent to mapping, tracking, and iteration."
    },

    googleads: {
        id: "googleads_important_topics",
        title: "Important Topics - Google Ads Practical",
        content: [
            {
                step: 1,
                title: "Google Ads Foundations",
                points: [
                    "Understand PPC model, account structure, and ad auction process.",
                    "Learn about campaigns, ad groups, ads, and keywords hierarchy.",
                    "Know how Quality Score and Ad Rank impact performance and cost."
                ]
            },
            {
                step: 2,
                title: "Campaign Types & Structure",
                points: [
                    "Know the main campaign types: Search, Display, Video, Shopping, App, Local, Smart.",
                    "Select campaign type based on business goals and audience.",
                    "Organize campaigns and ad groups with clear themes."
                ]
            },
            {
                step: 3,
                title: "Keyword Targeting",
                points: [
                    "Understand match types: broad, phrase, exact, and negative keywords.",
                    "Use Search Terms Report to refine targeting and add negatives.",
                    "Balance reach and control by mixing match types strategically."
                ]
            },
            {
                step: 4,
                title: "Ad Creation & Optimization",
                points: [
                    "Write compelling ad copy with clear CTAs and value propositions.",
                    "Use Responsive Search Ads to test multiple variations.",
                    "Leverage ad extensions (sitelinks, callouts, structured snippets)."
                ]
            },
            {
                step: 5,
                title: "Bidding Strategies & Budgeting",
                points: [
                    "Start with manual CPC for control, then test automated strategies.",
                    "Know automated options: Target CPA, Target ROAS, Maximize Conversions.",
                    "Allocate and adjust budgets based on campaign performance."
                ]
            },
            {
                step: 6,
                title: "Performance Tracking",
                points: [
                    "Set up conversion tracking for meaningful measurement.",
                    "Monitor CTR, Quality Score, CPA, ROAS, and impression share.",
                    "Link Google Ads with Google Analytics for deeper insights."
                ]
            },
            {
                step: 7,
                title: "Optimization & Iteration",
                points: [
                    "Run A/B tests on ad copy, extensions, and landing pages.",
                    "Pause underperforming keywords and scale winners.",
                    "Continuously refine targeting, bidding, and messaging."
                ]
            }
        ],
        note: "These topics cover the practical workflow of running Google Ads — from setup and targeting to bidding, measurement, and continuous optimization."
    },

    engagement: {
        id: "engagement_important_topics",
        title: "Important Topics - Customer Engagement & Community",
        content: [
            {
                step: 1,
                title: "Foundations of Engagement & Community",
                points: [
                    "Understand what customer engagement means (cognitive, emotional, behavioral, and social dimensions).",
                    "Learn how communities support engagement and brand loyalty.",
                    "Know why engagement and community are key for long-term growth."
                ]
            },
            {
                step: 2,
                title: "Customer Behavior & Motivations",
                points: [
                    "Analyze customer behavior using both quantitative (data) and qualitative (feedback) methods.",
                    "Recognize motivations: functional, emotional, social, and aspirational.",
                    "Map the customer journey from awareness to advocacy."
                ]
            },
            {
                step: 3,
                title: "Designing Engagement Strategies",
                points: [
                    "Align engagement strategies with business goals and brand values.",
                    "Identify touchpoints across the customer journey.",
                    "Plan omnichannel and personalized engagement tactics."
                ]
            },
            {
                step: 4,
                title: "Tactics for Each Journey Stage",
                points: [
                    "Awareness: content marketing, social media presence, and events.",
                    "Consideration: personalized recommendations, comparisons, and demos.",
                    "Purchase: seamless checkout, live chat, and special offers.",
                    "Service: proactive support, loyalty programs, onboarding.",
                    "Advocacy: referral programs, UGC campaigns, and co-creation."
                ]
            },
            {
                step: 5,
                title: "Community Development & Management",
                points: [
                    "Define community purpose and choose a suitable platform.",
                    "Onboard members and set clear guidelines.",
                    "Encourage contributions, discussions, and peer-to-peer support.",
                    "Balance structure with organic growth for authenticity."
                ]
            },
            {
                step: 6,
                title: "Measuring Engagement & Community Health",
                points: [
                    "Track activity metrics: active members, posts, time spent.",
                    "Assess quality: discussion depth, sentiment, supportiveness.",
                    "Evaluate business impact: retention, advocacy, reduced support costs.",
                    "Use a balanced scorecard of activity + quality + ROI metrics."
                ]
            },
            {
                step: 7,
                title: "Leveraging Technology",
                points: [
                    "Adopt community platforms (Circle, Tribe, Discourse) and CRM systems.",
                    "Use personalization engines, analytics, and automation tools.",
                    "Integrate systems for unified customer experience.",
                    "Balance automation efficiency with authentic human interaction."
                ]
            }
        ],
        note: "These topics cover the complete cycle of customer engagement and community building — from understanding behavior to designing strategies, managing communities, measuring success, and scaling with technology."
    }
};