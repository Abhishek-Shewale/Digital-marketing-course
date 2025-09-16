/* ------------- DATA: topics (hand-written lesson content) ------------- */
/* This is intentionally comprehensive. Edit any content or images you want. */
const topics = [
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      tags: ['On-page SEO','Technical SEO','Link Building','Content Strategy'],
      cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
      desc: 'Master practical SEO: keyword intent, content structure, technical foundations, link earning and measurement that produce measurable organic growth.',
      level: 'Beginner → Intermediate',
      duration: '90–120 mins',
      lessons: [
        {
          title: 'Introduction: How search engines work & modern SEO principles',
          content:
  `Search engines crawl the web, index content, and use ranking algorithms to decide which pages answer a user’s query. Modern SEO blends three pillars: relevance (does the content match intent?), experience (is the page fast and usable?), and authority (are there signals that the page/site is trusted?). Understanding this helps you prioritize work that matters.
  
  Start with the user’s intent: people search to learn, compare, or transact. Mapping content to these intents (informational vs transactional) is the foundation of effective keyword selection. Avoid the trap of optimizing only for single keywords — think in topical clusters that satisfy a set of related queries.
  
  Practically, build an SEO playbook: a reproducible checklist for keyword selection, on-page optimization, technical checks, and outreach. Measure the right metrics (organic users, key landing page conversions, impression share on your targets) and iterate. SEO is long-term: small, regular improvements compound into noticeable traffic gains.`,
  
          image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Keyword research & intent mapping',
          content:
  `Effective keyword research begins by defining business goals and mapping search intent. Use a combination of tools, internal site search queries, and competitor SERP analysis to build seed lists. Then group queries into intent buckets — informational, navigational, commercial investigation, and transactional — and prioritize those that align with your goals.
  
  For each prioritized keyword or cluster, document the desired content type (e.g., how-to guide, product page, comparison) and a target metric (traffic, leads, revenue). This prevents spinning out low-value pieces and helps you allocate resources to pages that can move business metrics.
  
  A practical workflow: create a spreadsheet with keyword, intent, estimated volume/difficulty, target URL, and next action (create, update, merge). This repeatable approach scales across teams and helps you measure opportunity vs. effort consistently.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'On-page optimization & content structure',
          content:
  `On-page SEO ensures each page communicates its topic clearly to both users and search engines. Key fields: title tag, meta description, H1, URL structure, and image alt text. Write human-first copy that uses your target phrases naturally — avoid keyword stuffing and focus on satisfying the user’s need.
  
  Structure content for scanners: use descriptive H2/H3 headings, short paragraphs, bulleted lists, and examples. A good practice is to open with the primary answer or value proposition, then expand into detail. Include internal links to related cluster pages to demonstrate topical depth and guide search engines.
  
  Also include clear conversion signals (CTA) and structured data when appropriate (product, FAQ, breadcrumbs). This not only helps SEO but improves user experience and engagement — which are increasingly correlated with ranking performance.`,
          image: 'https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Technical SEO: speed, crawlability, and indexability',
          content:
  `Technical SEO prevents structural problems from blocking growth. Start with crawlability (robots.txt, sitemaps, canonical tags) and ensure your site doesn’t accidentally hide important pages. Regularly check Search Console for crawl errors and index coverage issues.
  
  Page speed and mobile performance are both ranking and conversion factors. Optimize images (modern formats, responsive sizes), minimize render-blocking scripts, and enable caching. Use tools like Lighthouse to identify high-impact fixes (e.g., large images, long tasks).
  
  Finally, plan for robust redirects and canonical handling when pages change. Broken redirects and duplicate content waste crawl budget and confuse ranking signals. A small technical debt backlog with prioritized fixes will pay dividends during a growth push.`,
          image: 'https://images.unsplash.com/photo-1502880195258-7b0e0e1da0d6?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Link earning strategy and outreach',
          content:
  `High-quality backlinks remain an important relevance and authority signal. Instead of chasing quantity, build a strategy around creating genuinely useful assets — research, tools, in-depth guides, or datasets — that peers and journalists naturally reference.
  
  Mapping outreach: identify target sites that link to similar content, understand their editorial standards, and craft personalized outreach explaining why your asset fits their audience. Track outreach with a simple CRM: who to contact, outreach date, follow-up, and outcome.
  
  Also use relationship-building tactics: contribute guest insights, co-create content with partners, or offer data visualizations reporters can reuse. Track the impact of links on referral traffic and organic rankings and reuse successful formats for future linkable assets.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measurement, reporting and iterative SEO',
          content:
  `Measure organic performance beyond rankings. Track organic sessions to priority landing pages, conversions attributed to organic traffic, and engagement metrics (time on page, bounce trends). Use Search Console for query-level insights and Google Analytics (or your analytics platform) for behavior and conversions.
  
  Build a concise dashboard that shows top landing pages, keywords moving up/down, and prioritized action items (content to update, technical fixes, outreach opportunities). Each reporting cycle should end with concrete experiments or tasks: refresh a page, add internal links, or outreach for a broken-link replacement.
  
  SEO is iterative: run a change, measure impact after a sensible window (weeks to months depending on the initiative), and treat small wins as test signals to scale successful tactics.`,
          image: 'https://images.unsplash.com/photo-1551288049-7b9c8d36805a?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'sem',
      title: 'Search Engine Marketing (SEM)',
      tags: ['Google Ads','Account Structure','Quality Score','Bid Strategy'],
      cover: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1400&auto=format&fit=crop',
      desc: 'Create efficient search campaigns by aligning keywords, landing pages and bids to business outcomes — then measure and scale what works.',
      level: 'All levels',
      duration: '75–100 mins',
      lessons: [
        {
          title: 'SEM fundamentals & account planning',
          content:
  `Search marketing buys intent at scale. Begin by defining clear business objectives (CPL, CPA, ROAS) and mapping them to campaign structure. Good account planning includes naming conventions, campaign segmentation, conversion definitions and a testing cadence.
  
  Design the account so measurement is clean: separate top-of-funnel awareness campaigns from bottom-funnel conversion efforts. Use proper tagging (UTMs) and conversion events to capture the customer journey across ads, landing pages, and backend systems.
  
  Finally, allocate budget based on expected performance and runway: start small with controlled tests, measure signal, then scale winners. Establish guardrails (daily caps, minimum ROAS) to prevent overspend during learning phases.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Keyword match types, negatives, and intent mapping',
          content:
  `Use match types strategically: exact and phrase for high-intent, high-precision queries; broad modified (or broad with audience signals) for discovery. Always use negative keywords to filter irrelevant or low-quality traffic that wastes budget.
  
  Map keywords to intent buckets so bids and landing pages align with user expectations (e.g., purchase intent vs research intent). This alignment improves Quality Score and conversion rates because the ad and landing page match the user’s expectation.
  
  Maintain a negative keyword list updated from search query reports and exclude irrelevant terms quickly. This practice reduces wasted spend and improves auction competitiveness.`,
          image: 'https://images.unsplash.com/photo-1526378723503-2f0b6a8b9a42?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Ad copywriting and extensions that lift CTR',
          content:
  `High-performing ad copy is concise, relevant, and benefit-focused. Put the main value proposition in the headline and use description lines to explain differentiators or offers. A/B test multiple headline and description combinations to find what resonates with searchers.
  
  Ad extensions (sitelinks, callouts, structured snippets, location) increase ad real estate and provide additional user signals. Implement relevant extensions and tailor them by campaign to improve CTR and provide more paths to conversion.
  
  Write with clarity, include numerical evidence (prices, discounts) where applicable, and make CTAs specific (e.g., "Get a 7-day trial" vs "Learn more"). The combination of relevant copy + strong extensions typically improves both CTR and conversion performance.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Bidding strategies, automation and budgets',
          content:
  `Match bidding to your data and goals. Manual CPC provides granular control, while automated strategies (target CPA, ROAS) can scale when you have enough conversion signal. Start conservative during learning periods and avoid frequent drastic bid changes.
  
  Use shared budgets and portfolio strategies when campaigns share objectives, but monitor allocation to avoid starving high-performing sub-campaigns. Establish minimum and maximum bid limits to prevent runaway costs during automation.
  
  Continuously monitor performance and apply guardrails (daily caps, rules). If automation underperforms, revert to manual control to diagnose data issues (poor tracking, low conversion volume).`,
          image: 'https://images.unsplash.com/photo-1508385082359-2b0b5d3b1fcd?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Landing page relevance and conversion optimization',
          content:
  `Landing page relevance drives Quality Score and conversions. The ad headline should match the landing page headline and offer. Reduce friction: clear CTA above the fold, minimal form fields, trust signals and visible value proposition.
  
  Run iterative A/B tests focused on high-impact items (headline, CTA, form length). Always ensure sample sizes are sufficient before declaring winners. Use session recordings and funnel analytics to identify drop-off points.
  
  Also optimize technical aspects: fast load times, responsive design, and proper tracking. Without reliable conversion tracking, bidding decisions will be based on misleading signals.`,
          image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measurement, attribution and experiments',
          content:
  `Don’t optimize solely for last-click conversions. Understand attribution models and design controlled experiments (geo-tests, holdouts) to measure incremental lift. Track micro-conversions that indicate progress toward your main goal.
  
  Maintain consistent naming and UTM standards to ensure you can join data across platforms. Import offline conversions where relevant to get a full-funnel view. Use experiments to validate structural changes (new bidding strategy or creative approach) rather than relying on correlations.
  
  Summarize results in actionable recommendations: what to scale, what to stop, and what to test next. That discipline turns SEM from guesswork into repeatable performance improvement.`,
          image: 'https://images.unsplash.com/photo-1532614996-7b4dd1bd6d5b?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'ppc',
      title: 'Pay-Per-Click Fundamentals',
      tags: ['PPC','Funnel','Ad Copy','Landing Pages'],
      cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1400&auto=format&fit=crop',
      desc: 'Practical fundamentals for building paid funnels across search, social and display: audiences, creative, landing pages and measurement.',
      level: 'Beginner',
      duration: '60–90 mins',
      lessons: [
        {
          title: 'Campaign objectives & funnel mapping',
          content:
  `A paid campaign should be designed with a clear objective: awareness, consideration, lead gen, or direct sales. Map creatives and placements to each funnel stage: broad educational content for awareness, more detailed comparisons for consideration, and focused offers for conversion.
  
  Define primary and secondary KPIs for each campaign type (e.g., impressions & reach for awareness; leads and CPA for conversion). This clarity prevents metric confusion and ensures the team optimizes the right signals.
  
  Plan budget allocation by funnel stage and be prepared to shift spend toward high-performing stages as you collect evidence. Successful PPC is not just creative — it's the orchestration of funnel movements with measurement at each step.`,
          image: 'https://images.unsplash.com/photo-1529465230220-1c3c3f6b6b3a?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Audience segmentation & targeting',
          content:
  `Segment audiences by behavior, demographics, and intent. Use remarketing to re-engage users who showed interest and lookalike or similar audiences to scale reach. Layer signals for precision (e.g., visited pricing page AND time on site > x).
  
  Test audience hypotheses using controlled experiments: one ad set per audience segment so you can attribute performance cleanly. Avoid overly complex targeting until you have baseline performance data.
  
  Document results and build reusable audience containers (e.g., high-intent, engaged, new prospects) to speed campaign creation and consistent analysis across channels.`,
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Ad creative, messaging and assets',
          content:
  `Creative must match the audience and the channel. Short, visually strong assets work well on social; clear, benefit-driven headlines are critical for search. Use a single CTA and keep the message consistent across click path.
  
  Create creative variants that explore headline, body, image/video and CTA. Use data to find patterns (which messaging resonates with which audience) and codify high-performing formats into templates.
  
  Maintain an asset library with performance metadata so production can prioritize formats that historically convert well, saving time and increasing iteration speed.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Landing page best practices & CRO',
          content:
  `Landing pages should have one clear action and minimal distractions. Use above-the-fold clarity (headline, benefit, CTA), trust elements (testimonials, logos), and concise supporting information below the fold.
  
  Run small A/B tests to optimize headline, CTA color and form length. Use heatmaps and session recordings to identify UX friction. Prioritize tests that address the largest drop-off points in your funnel for the best ROI.
  
  Remember to optimize for mobile: a majority of paid traffic is mobile, and poor mobile UX destroys conversion rates even on good creative.`,
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Budgeting, pacing & scaling',
          content:
  `Set daily and campaign-level pacing rules so budget doesn’t deplete early in the day. Start budgets at levels that give enough data for reliable decisions, then scale winners gradually. Sudden, large budget increases often destabilize performance.
  
  When scaling, apply the 20–30% rule: expand budgets incrementally and monitor CPA/ROAS closely. Consider geographic or audience expansion as controlled levers rather than doubling budgets.
  
  Document scaling experiments and results — this prevents repeating mistakes and helps the team know which levers to pull for similar campaign types in the future.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Reporting and presenting impact to stakeholders',
          content:
  `Build concise, action-driven reports: show top-line performance, trends, and three suggested next steps. Stakeholders want to know impact on business metrics (cost per lead, pipeline value) — avoid drowning them in channel-level minutiae.
  
  Create a weekly snapshot for operations and a monthly summary that ties paid activity to business outcomes. Use visuals (trend charts) and short commentary to highlight wins and risks.
  
  Always close reports with clear asks: additional budget, creative assets needed, or hypothesis to test. This makes reporting operational and forward-looking.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'smm',
      title: 'Social Media Marketing',
      tags: ['Content Calendar','Engagement','Brand Voice','Analytics'],
      cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
      desc: 'Build and scale social presence through content pillars, production workflows, community and measurement that tie back to real outcomes.',
      level: 'All levels',
      duration: '70–90 mins',
      lessons: [
        {
          title: 'Platform selection & audience mapping',
          content:
  `Not every platform suits every brand. Choose platforms where your target audience spends time and where your content format fits (TikTok/short video, Instagram/visual, LinkedIn/professional). Focus resources on 1–2 platforms to start.
  
  Map audience behavior per platform (when they browse, what content they engage with) and set platform-specific goals (reach, engagement, website clicks). Use small pilot tests to validate assumptions before scaling.
  
  Document channel playbooks: tone, post cadence, ideal formats, and success metrics. This ensures consistent execution as you expand the team or outsource production.`,
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Content pillars & creative frameworks',
          content:
  `Define 3–5 content pillars (e.g., education, product highlights, customer stories, culture) to maintain variety and consistency. For each pillar, prepare content templates and quick briefs so production is fast and repeatable.
  
  A good framework speeds ideation: who is the audience, what’s the hook, what is the value, and what’s the CTA. Keep briefs short but specific so creators can produce high-quality assets quickly.
  
  Rotate pillars in your calendar to maintain freshness. Track which pillars drive your core goals and refine pillar distribution accordingly.`,
          image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Production workflow, batching & repurposing',
          content:
  `Batched production saves time: schedule ideation, capture, edit, and scheduling in blocks rather than creating ad-hoc. Use simple templates for captions, video hooks, and visual compositing.
  
  Repurpose long-form content into short clips, quotes and visuals for social. A single webinar can become dozens of posts, email snippets, and short videos. This stretches the value of your content and increases consistency.
  
  Maintain a content calendar and asset library with metadata (pillar, target audience, performance) to improve reuse and reduce rework.`,
          image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Community management & moderation',
          content:
  `Responding to comments and messages promptly builds trust and deepens engagement. Create moderation guidelines and an escalation path for policy or safety issues so community managers can act quickly and consistently.
  
  Encourage user-generated content (UGC) with prompts and recognition. Featuring customers or creators increases authenticity and often drives better engagement than purely brand-created posts.
  
  Measure the community’s impact on retention, referrals, and product feedback. A healthy community can reduce support load and generate organic growth.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Creator partnerships & influencer programs',
          content:
  `Choose creators whose audience and content style align with your goals. Start with smaller, targeted creators for trial runs to test messaging and performance before scaling to larger partners.
  
  Create clear briefs with campaign goals, deliverables, and required disclosures. Track results by campaign (views, engagement, referral traffic, conversions) to understand ROI and identify repeatable formats.
  
  Nurture relationships beyond single campaigns — long-term partnerships often produce more authentic integrations and better business outcomes.`,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measurement & optimization for social',
          content:
  `Measure the right things for each objective: reach and impressions for awareness; saves, shares and clicks for engagement; and conversion events for direct response. Avoid focusing on vanity metrics without business linkage.
  
  Use experiments (organic content A/B, boosted post tests) to learn which formats and hooks work best. Combine organic learnings with paid amplification to scale winners.
  
  Create a weekly report that highlights what worked, what to double down on, and one hypothesis to test next — that makes social work iterative and performance-driven.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'email',
      title: 'Email Marketing Essentials',
      tags: ['Lifecycle','Deliverability','Automation','Segmentation'],
      cover: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop',
      desc: 'Create lifecycle-driven email programs: capture, onboard, nurture and re-engage with deliverability and segmentation best practices.',
      level: 'Beginner → Intermediate',
      duration: '60–80 mins',
      lessons: [
        {
          title: 'List growth: offers, forms and quality',
          content:
  `Focus on quality over quantity. Design forms that are contextually relevant and promise a clear benefit (checklist, template, discount). Use progressive profiling to ask for more information on repeat interactions rather than forcing long sign-up forms.
  
  Test placement (inline, modal, exit intent) and messaging for conversion and lead quality. Track downstream behavior (engagement, purchases) to ensure acquisition channels bring valuable subscribers.
  
  Incentivize referrals and use gated content sparingly; the best subscribers are often those who find your content valuable without heavy incentivization.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Welcome sequences & onboarding flows',
          content:
  `A welcome series sets the tone: deliver the promised asset, set expectations for future emails, and guide the subscriber to a first meaningful action (account setup, content consumption). Plan 3–5 steps that move recipients along the desired path.
  
  Make each message useful — don’t use the welcome series as a sales pitch. Include social proof and quick wins that build trust and get recipients to engage.
  
  Measure the onboarding funnel and iterate on copy and timing. A good onboarding flow increases long-term engagement and reduces early churn from your list.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Segmentation & personalization basics',
          content:
  `Segment by clear, actionable signals: past purchases, page views, lead magnet downloaded, or inactivity. Even a few high-impact segments (e.g., buyers vs prospects, engaged vs inactive) can dramatically increase relevance.
  
  Personalization should be useful and scalable — dynamic recommendations, tailored subject lines, and behaviorally-triggered flows typically outperform generic blasts. Start small and scale personalization as data improves.
  
  Keep segments well-documented and automated; manual segmentation is not scalable and introduces errors. Use engagement windows (e.g., 30/90-day inactive) to trigger re-engagement campaigns.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Writing emails for opens and clicks',
          content:
  `Subject lines compete in a crowded inbox — be specific, clear and benefit-driven. Use preview text to extend the subject and test personalization vs clarity. In the body, lead with the value proposition and use a single clear CTA.
  
  Structure emails for skimming: short paragraphs, bold key points, and a single column layout for mobile. Use buttons for primary CTAs and text links for secondary actions.
  
  Track open and click rates but optimize toward downstream metrics (e.g., conversion rate from email clicks). If high opens but low clicks persist, experiment with stronger CTAs and clearer value propositions.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Testing, templates and flows',
          content:
  `Create templates for common flows (welcome, nurture, promotions) to ensure brand consistency and speed production. Use A/B testing to validate subject lines, send times, and content variations, but ensure tests run long enough for statistical confidence.
  
  Document test outcomes and roll successful variations into templates. For flows, verify each message for links, personalization tokens, and rendering across clients.
  
  Automation and templates make scale possible; testing and documentation make scale successful and safe.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Deliverability & sender reputation',
          content:
  `Protect sender reputation by monitoring bounces, spam complaints, and engagement. Implement SPF, DKIM, and DMARC, and maintain list hygiene (suppress bounces and long-term inactive addresses).
  
  Warm new sending IPs and maintain consistent sending patterns. Avoid spammy language and overly aggressive frequency that increases complaints.
  
  If deliverability issues arise, prioritize root cause analysis (source of spam complaints, sudden bounces) and remediate quickly — reputation problems compound if ignored.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'analytics',
      title: 'Marketing Analytics & Measurement',
      tags: ['Attribution','Dashboards','Experiments','KPIs'],
      cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
      desc: 'Design measurement that connects marketing activity to business outcomes and supports experimentation and data-driven decisions.',
      level: 'Intermediate',
      duration: '80–100 mins',
      lessons: [
        {
          title: 'KPIs that tie to business outcomes',
          content:
  `Select KPIs that reflect true business outcomes — revenue, leads that convert, or LTV — rather than vanity metrics. Map leading indicators (clicks, signups) to lagging metrics (revenue) so optimizations are meaningfully aligned to business goals.
  
  Document metric definitions (what constitutes a conversion, how revenue is attributed) so teams interpret reports consistently. Ambiguity causes misaligned decisions.
  
  Use a minimal set of KPIs per stakeholder group (executive, marketing ops, channel specialist) rather than a massive dashboard that obscures action.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Event tracking, data layers and hygiene',
          content:
  `Implement event tracking with consistent naming conventions and a data layer where possible to simplify client-side tagging. Track primary interactions (form submits, add-to-cart, payment success) and critical micro-actions that indicate intent.
  
  Regularly audit events: verify triggers fire once, values are correct, and downstream systems (analytics, ads) receive data intact. Clean, reliable data is a prerequisite for automation and accurate analysis.
  
  Keep a living spec for events and maintain a test environment so new tracking can be validated without affecting production metrics.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Attribution models and measuring incrementality',
          content:
  `Attribution models (last-click, first-click, linear) each have biases. Rather than assuming model outputs represent truth, use experiments and holdouts to measure incrementality — the real lift produced by a marketing tactic.
  
  For example, geo or cohort-based holdouts can reveal whether a channel drives incremental conversions or merely shifts credit. Incrementality studies are the best defense against over-attributing success to channels.
  
  Combine model-based reporting with experimental evidence to make more confident budget and strategy decisions.`,
          image: 'https://images.unsplash.com/photo-1506381073661-3b2c2ad2f9a2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Dashboards that drive decisions',
          content:
  `Build concise dashboards targeted to each audience: an executive summary (top KPIs, trend direction, one-line recommendation) and operational dashboards for channel owners with actionable insights.
  
  Avoid raw dumps of tables; highlight anomalies, explain why they happened, and recommend next steps. Use visualization best practices (clear axes, consistent colors, context windows) to speed comprehension.
  
  Schedule a reporting cadence and ensure each report ends with one hypothesis to test or one action to take.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Experiment design and A/B testing',
          content:
  `Design experiments with a clear hypothesis, pre-specified metrics, and sample size estimates. Track both primary and secondary metrics to ensure changes don’t produce harmful side effects.
  
  Randomized controlled experiments (A/B tests) are the gold standard for causation. Avoid peeking and stopping tests early; use statistical planning to determine test length and power.
  
  Document experiments, results, and learning so the organization builds institutional knowledge and avoids repeating negative tests.`,
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Maintaining trusted datasets and governance',
          content:
  `Create a single source of truth for core business metrics and document transformations applied in ETL or dashboard layers. Automate data quality checks to detect missing or anomalous values early.
  
  Govern access, ensure version control for dashboards, and provide a data dictionary so analysts and stakeholders interpret metrics identically. Good governance reduces time wasted on arguing over "whose numbers are right."
  
  Finally, treat measurement as product: iterate on metrics, fix known data gaps, and keep stakeholders informed of changes that affect reporting.`,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'persona',
      title: 'Persona Development & Target Audience',
      tags: ['JTBD','Research','ICP','Messaging'],
      cover: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
      desc: 'Turn qualitative and quantitative research into actionable personas and messaging that guide product, content and campaign choices.',
      level: 'All levels',
      duration: '60–75 mins',
      lessons: [
        {
          title: 'Why personas matter and what they should be',
          content:
  `Personas are practical tools: concise profiles that represent core customer segments, their goals, pain points, and decision triggers. They help teams avoid vague audience descriptions and make concrete product and marketing choices.
  
  A useful persona includes a short narrative, key tasks/jobs-to-be-done, main frustrations, and the channels they use. Keep personas lightweight — too much detail makes them unusable.
  
  Personas should be living artifacts, informed by data and updated as the market and product evolve. Use them to prioritize features, content topics, and creative approaches.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Research methods: qualitative + quantitative',
          content:
  `Combine qualitative interviews (customers, prospects, support) with quantitative signals (analytics, surveys) to validate persona hypotheses. Interviews reveal motivations and language that quantitative data can’t capture.
  
  Use analytics to identify behavioral cohorts; use targeted surveys to validate pain points and willingness to pay. Bring both streams together to form representative personas anchored in evidence.
  
  Document the methodology so you can reproduce and update personas regularly, and avoid relying on anecdotes alone for major decisions.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Building actionable persona templates',
          content:
  `Create a compact persona template with: name, role/title, goals, top frustrations, preferred channels, typical jobs-to-be-done, and a short quote. Include 2–3 primary use cases where the persona intersects with product features or marketing offers.
  
  Keep each persona tied to measurable behaviors: pages visited, features used, purchase history. This enables targeted experiments and messaging that can be validated with real performance data.
  
  Store templates centrally so product, content and acquisition teams can apply the persona consistently across touchpoints.`,
          image: 'https://images.unsplash.com/photo-1522748922350-1d5b1f3eedf8?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Messaging hierarchy & testing messages',
          content:
  `Develop a messaging hierarchy: primary value proposition, key supporting messages, proof points, and CTAs. Tailor versions for each persona that highlight the specific pains and outcomes they care about.
  
  Test messaging using lightweight experiments: targeted landing pages, ad copy variants, and email subject lines. Measure both engagement and conversion lifts to determine which messages resonate.
  
  Iterate messages with real performance data and update the persona file with language and proof points that tested well.`,
          image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Validating personas with campaign experiments',
          content:
  `Use micro-campaigns targeted to persona segments to validate assumptions: differences in CTR, conversion rate, or retention indicate meaningful personas. Use control groups to measure relative lift.
  
  If results contradict persona assumptions, refine the persona rather than force-fit the campaign. Personas are hypotheses that should be tested and improved over time.
  
  Hold regular reviews to incorporate campaign learnings into persona updates so marketing and product remain aligned with real user behavior.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'content',
      title: 'Content Strategy & Data Storytelling',
      tags: ['Editorial','Pillars','Templates','Distribution'],
      cover: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop',
      desc: 'Plan and produce content that compounds: audit, pillar planning, briefs, distribution, measurement and iterative improvement.',
      level: 'All levels',
      duration: '70–90 mins',
      lessons: [
        {
          title: 'Content audits: what to keep, refresh, or retire',
          content:
  `A content audit catalogs pages, traffic, backlinks, and conversions to reveal opportunities: underperforming pages with traffic but poor conversion (refresh), thin pages to expand (merge), and obsolete pages to retire or redirect.
  
  Use metrics (organic traffic, engagement, conversions) plus manual review to decide actions and prioritize work. Create a backlog with impact/effort scoring.
  
  The audit is the starting point for a rational content plan — it surfaces low-hanging wins and prevents duplicative future effort.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Pillars, clusters and editorial calendars',
          content:
  `Define a few content pillars aligned to strategic goals (e.g., product education, thought leadership, buyer enablement). For each pillar, map pillar pages and supporting cluster content to cover related queries and internal linking opportunities.
  
  An editorial calendar balances evergreen content, seasonal topics, and campaign-driven pieces. Assign owners, production timelines and distribution plans to each piece.
  
  This structure helps search performance, streamlines ideation and ensures consistent publication cadence.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Briefs, templates and quality control',
          content:
  `Use content briefs that specify objective, target persona, key points, SEO targets, recommended structure, and CTA. Templates for formats (how-to, case study, checklist) reduce back-and-forth and help freelance writers succeed.
  
  Build a quick editorial checklist (readability, imagery, links, SEO fields) that each piece must pass before publishing. This preserves quality at scale.
  
  Include a review step for factual accuracy and clear ownership of updates and republishing intervals.`,
          image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Repurposing & distribution strategies',
          content:
  `Repurposing increases ROI: long-form pieces can be segmented into social posts, newsletters, short videos and downloadable assets. Create a distribution plan that includes owned channels, partners and paid amplification for priority pieces.
  
  Track which distribution channels drive the highest-value outcomes and budget promotion accordingly. Use small paid tests to amplify promising content and collect audience signals.
  
  Plan repurposing at the brief stage to maximize asset yield and reduce additional production costs.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Data storytelling & case study creation',
          content:
  `Convert metrics into compelling narratives: start with the customer problem, present the data-driven approach you used, and show measurable outcomes. Use visuals (charts, before/after snapshots) to make the impact clear.
  
  Case studies that quantify results (percent lift, time savings, ROI) are powerful assets for both demand and sales enablement. Structure them: challenge, approach, results, and key learnings.
  
  Keep case studies concise and shareable — they become excellent content for social, ads and sales collateral.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measurement & iterative improvement',
          content:
  `Measure content by acquisition, engagement and conversion. Identify content that drives high traffic but low conversions and prioritize updates for those pages. Also identify content that converts well but has low traffic — promote it.
  
  Run regular retrospectives: what content formats performed best, which audiences engaged, and what distribution boosted reach. Use those learnings to refine briefs and production plans.
  
  Treat content as an iterative product: test formats, measure outcomes, and iterate. Over time this creates a compounding library of assets that drive predictable value.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'branding',
      title: 'Brand Awareness Fundamentals',
      tags: ['Positioning','Consistency','Recall','Reach'],
      cover: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1400&auto=format&fit=crop',
      desc: 'Define positioning, brand codes and a consistent voice so brand work amplifies performance without diluting messaging.',
      level: 'Beginner',
      duration: '50–70 mins',
      lessons: [
        {
          title: 'Positioning and category entry points',
          content:
  `Positioning clarifies the space your product occupies in customers’ minds. Identify the primary problem you solve and articulate a clear, differentiated benefit. Consider how customers discover category solutions and choose an entry point that emphasizes your unique capability.
  
  A simple positioning statement (who, need, benefit, reason to believe) is an excellent distillation for teams. Test positioning with small messaging experiments to ensure resonance.
  
  Good positioning reduces friction in all downstream marketing and product decisions.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Visual identity & brand codes',
          content:
  `Visual identity is a small set of consistent cues — color palette, typography, imagery style, and iconography — that make a brand recognizable. Create simple usage rules and a few examples to prevent misuse across channels.
  
  Keep the system flexible enough for different formats (web, video, print) but strict on core elements that drive recognition. A short brand primer with do/don’t examples is often more effective than long brand bibles that are rarely read.
  
  Consistency builds recall: repeated, coherent visual language increases the odds people remember your brand when they need it.`,
          image: 'https://images.unsplash.com/photo-1508385082359-f39f6a3d5fbc?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Voice, tone and messaging systems',
          content:
  `Define a voice and tone that reflect your brand personality — friendly, authoritative, playful — and provide concrete examples. Create a messaging hierarchy (headline, support, proof) for common touchpoints so teams can reproduce the right emphasis quickly.
  
  Train content creators and external partners on the system through short briefs and templates. A few real examples help more than abstract rules.
  
  Measure message resonance through testing and update the voice guidelines based on what actually performs.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Always-on vs launch bursts',
          content:
  `Balance always-on efforts (steady content, search ads, retention) with burst campaigns for launches. Always-on keeps the brand present and supports consistent demand, while bursts amplify key moments.
  
  Coordinate creative and messaging across both modes so bursts reinforce ongoing narratives. Use bursts to accelerate awareness and experiments to discover which creative works for sustained investment.
  
  Plan measurement to capture both immediate and downstream impact (e.g., increase in branded search after a burst).`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measuring awareness and recall',
          content:
  `Awareness is best measured with a mix of quantitative (branded search volume, reach, impressions) and qualitative (surveys for aided/unaided recall). Choose simple periodic surveys to measure recall and track changes alongside campaign exposure.
  
  Use lift studies or experiments (control vs exposed groups) to measure how advertising impacts brand metrics and downstream behaviors. Avoid assuming raw impressions equate to awareness.
  
  Tie awareness work to business outcomes when possible: does increased recall translate into more branded search or better conversion efficiency?`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'keyword',
      title: 'Keyword Research & Intent Mapping',
      tags: ['Keywords','Search Intent','SERP Analysis'],
      cover: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1400&auto=format&fit=crop',
      desc: 'A focused workflow for picking high-value keywords and mapping them to content that converts and ranks.',
      level: 'Beginner',
      duration: '30–45 mins',
      lessons: [
        {
          title: 'Keyword fundamentals and intent categories',
          content:
  `Keywords should be categorized by intent: informational (how-to), navigational (brand queries), commercial investigation (reviews), and transactional (buy). Intent guides content format and funnel placement.
  
  Prioritize keywords that match your conversion goals and content resources. High-volume but low-intent keywords are often poor investments for conversion-focused teams.
  
  Document intent in your keyword tracker so content creators and paid teams all align on the purpose of each target.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Sources for seed keywords and competitor analysis',
          content:
  `Collect seeds from customer interviews, internal search, support tickets, analytics, and competitor SERPs. Competitor analysis reveals what types of content currently rank and where there are content gaps.
  
  Analyze SERP features to see if you can realistically win a spot (featured snippet, knowledge panel). If the SERP is dominated by strong authoritative sites, prioritize long-tail or adjacent queries where you can be distinctive.
  
  Combine multiple sources and validate with search volumes and difficulty estimates to build a prioritized list.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'SERP analysis and content type selection',
          content:
  `When analyzing SERPs, note the content format that ranks (listicle, guide, product page, video). Build the same or better format with unique value (original data, better examples) rather than duplicating what’s already out there.
  
  Also identify secondary SERP features to target (e.g., "People also ask" questions) — answering those within your content can expand visibility.
  
  Choose content types that align with both intent and your production strengths.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Prioritization: opportunity score & roadmap',
          content:
  `Score keywords by a combination of intent, estimated traffic, ranking difficulty, and business value. Create an opportunity matrix that indicates quick wins vs long-term plays.
  
  Use this scoring to plan a content roadmap: refresh high-opportunity existing pages, create new cluster pages, and schedule resource allocation based on expected impact.
  
  Re-evaluate priorities regularly as rankings and business objectives change.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'googleads',
      title: 'Google Ads Practical',
      tags: ['Google Ads','Search','Shopping'],
      cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
      desc: 'Hands-on Google Ads guidance: account setup, campaign types, tracking, feed quality, and optimization loops.',
      level: 'All levels',
      duration: '60–90 mins',
      lessons: [
        {
          title: 'Account setup, structure and naming',
          content:
  `Start with a logical account structure: separate campaigns by objective (search vs shopping), geography, or product line. Use clear naming conventions to make reporting and automation scalable.
  
  Set up conversion tracking before launching campaigns so you don’t optimize in the dark. Implement remarketing audiences and basic audience lists early, even if you don’t use them immediately.
  
  A clean account structure reduces errors and increases the speed of iterative changes.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Campaign types and settings',
          content:
  `Understand when to use search, display, shopping, Video and Performance Max. Match campaign type to the customer journey: search for intent capture, display for prospecting and retargeting, and shopping for product discovery.
  
  Configure geo, language, and bid settings aligned to business goals. Use ad schedules and device bid adjustments based on performance data.
  
  Test campaign types in parallel with small budgets to learn which combinations drive the best business outcomes for your vertical.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Shopping feed & product data quality',
          content:
  `For Shopping campaigns, the feed quality directly impacts performance. Optimize titles, descriptions, categories, and images to reflect searcher intent and product specifics. Ensure pricing, availability and GTINs are accurate.
  
  Test variations in product titles (front-loading brand and key attributes) and monitor feed diagnostics. Small feed fixes can produce outsized campaign lifts.
  
  Automate feed updates and keep monitoring to avoid disapprovals or stale data issues.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Conversion tracking, server-side tagging & measurement',
          content:
  `Use robust tracking: client-side tags complemented by server-side events for resiliency and privacy compliance. Verify conversions end-to-end and label micro- vs macro-conversions for clarity.
  
  Consider importing offline conversions to attribute full-funnel impact. Keep naming and event definitions consistent to enable reliable reporting and bidding automation.
  
  If conversions appear low, check pixel fires, tag blocking and attribution windows before changing bids.`,
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Optimization loops & structured experiments',
          content:
  `Adopt a simple experiment cadence: analyze, hypothesize, act, and measure. Test small, isolated changes (headline, audience, landing page) with controlled experiments. Use campaign drafts and experiments where supported by the platform.
  
  Keep an experiment log to track hypotheses and outcomes. Scaling should be evidence-based: expand budgets and audiences only after validation.
  
  This process reduces noise and ensures each change has observable impact.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Scaling & governance',
          content:
  `Scale systematically: expand geos, audiences, and budgets incrementally and monitor key metrics (CPA, ROAS). Maintain governance controls — naming, access, change logs — to avoid destructive changes during rapid scaling.
  
  Use scripts or rules to enforce budget caps and automated alerts for outliers. Maintain a playbook for scaling so new team members follow proven steps.
  
  Good governance prevents costly mistakes and supports predictable growth.`,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    },
  
    {
      id: 'engagement',
      title: 'Customer Engagement & Community',
      tags: ['Engagement','Community','Retention'],
      cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
      desc: 'Design engagement systems and communities that increase retention and generate advocacy.',
      level: 'Intermediate',
      duration: '45–70 mins',
      lessons: [
        {
          title: 'Community models and choosing the right one',
          content:
  `Communities can be product-led (in-app forums), brand-led (social groups), or independent (third-party forums). Choose a model that fits resources and member expectations. Product communities often boost product usage; external communities often drive discovery and advocacy.
  
  Define clear objectives (support, retention, product feedback) and pick KPIs (activity, retention lift, referral rate) to measure success. Design governance (rules, moderation capacity) up front to scale safely.
  
  Pilot a small community, learn from early adopters, and expand features and moderation as value becomes clear.`,
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Onboarding and activation for new members',
          content:
  `A strong onboarding nudges new members to their first meaningful action: complete a profile, introduce themselves, or join a discussion. Design a short, friendly onboarding checklist that guides newcomers into the community.
  
  Use email or in-app prompts to encourage first contributions and surface ways to engage. Early wins (a reply, a mention) predict long-term participation.
  
  Measure onboarding conversion (members who take their first meaningful action) and iterate on prompts and friction points.`,
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Moderation, policies and healthy spaces',
          content:
  `Create clear, concise community guidelines and escalation paths for violations. Empower volunteer moderators with training and tools to keep the community safe and engaging.
  
  Moderation should be transparent and consistent; arbitrary enforcement destroys trust. Provide visible channels for appeals and corrections.
  
  A healthy environment encourages constructive participation and reduces churn.`,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Engagement mechanics: prompts, challenges and rewards',
          content:
  `Use prompts, Q&A sessions, AMAs, and challenges to stimulate activity. Small, regular events (weekly prompts) are often more effective than one-off mega-events for sustaining interaction.
  
  Consider lightweight gamification (badges, leaderboard) only if it aligns with desired behaviors. Recognition and meaningful rewards (visibility, early access) often perform better than trivial points.
  
  Track which mechanics drive the types of contributions that create value (answers, referrals, content) and refine accordingly.`,
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
        },
        {
          title: 'Measuring retention and community ROI',
          content:
  `Measure retention cohorts, contribution rates, and downstream metrics like referral or conversion lift. Tie community activity to business outcomes through experiments (e.g., test retention lift for members vs non-members).
  
  Qualitative feedback (sentiment, product ideas) is also valuable and can be translated into product improvements that reduce churn. Build a simple dashboard tracking key engagement and business metrics.
  
  Use the data to justify investment and to identify community programs that scale value.`,
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
        }
      ]
    }
  ];
  
  /* make topics available globally (safe) */
  if (typeof window !== 'undefined') window.topics = topics;
  
  /* ------------- image overrides & defaults ------------- */
  const imageOverrides = {
    // optional: map id -> image (tune or remove as needed)
    // 'seo': 'https://images.unsplash.com/...',
  };
  const defaultCover = 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3';
  
  /* apply overrides if present (non-destructive) */
  if (typeof imageOverrides !== 'undefined' && Array.isArray(topics)) {
    topics.forEach(t => {
      if (t && t.id && imageOverrides[t.id]) t.cover = imageOverrides[t.id];
    });
  }
  
  /* ------------- helpers ------------- */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  
  function toHtmlParagraphs(text) {
    if (!text) return '';
    const parts = String(text).split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    return parts.map(p => `<p class="mt-4 text-slate-700 leading-relaxed">${escapeHtml(p)}</p>`).join('\n');
  }
  
  /* ------------- DOM elements ------------- */
  const grid = document.getElementById('cardGrid');
  const search = document.getElementById('search');
  const clearSearch = document.getElementById('clearSearch');
  const heroSection = document.getElementById('hero');
  const coursesSection = document.getElementById('courses');
  const courseInfoSection = document.getElementById('courseView');
  const courseDashboardSection = document.getElementById('courseDashboard');
  const lessonCardsSection = document.getElementById('lessonCardsView');
  const individualLessonSection = document.getElementById('individualLessonView');
  const lessonSection = document.getElementById('lessonView');
  
  const title = document.getElementById('title');
  const desc = document.getElementById('desc');
  const cover = document.getElementById('cover');
  const lessonList = document.getElementById('lessonList');
  const tagList = document.getElementById('tagList');
  const startBtn = document.getElementById('startBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const meta = document.getElementById('meta');
  const backBtn = document.getElementById('backBtn');
  
  // Dashboard elements
  const dashboardTitle = document.getElementById('dashboardTitle');
  const dashboardMeta = document.getElementById('dashboardMeta');
  const studyMaterialsCard = document.getElementById('studyMaterialsCard');
  const importantTopicsCard = document.getElementById('importantTopicsCard');
  const mockTestsCard = document.getElementById('mockTestsCard');
  const backToCourseFromDashboardBtn = document.getElementById('backToCourseFromDashboardBtn');

  // Lesson cards elements
  const lessonCardsTitle = document.getElementById('lessonCardsTitle');
  const lessonCardsMeta = document.getElementById('lessonCardsMeta');
  const lessonCardsGrid = document.getElementById('lessonCardsGrid');
  const backToDashboardBtn = document.getElementById('backToDashboardBtn');

  // Individual lesson elements
  const individualLessonTitle = document.getElementById('individualLessonTitle');
  const individualLessonImage = document.getElementById('individualLessonImage');
  const individualLessonContent = document.getElementById('individualLessonContent');
  const backToLessonCardsBtn = document.getElementById('backToLessonCardsBtn');
  const downloadLessonBtn = document.getElementById('downloadLessonBtn');
  
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonContent = document.getElementById('lessonContent');
  const lessonMeta = document.getElementById('lessonMeta');
  const backToCourseBtn = document.getElementById('backToCourseBtn');
  const downloadFullCourseBtn = document.getElementById('downloadFullCourseBtn');
  
  let currentCourse = null;
  let currentLesson = null;
  
  /* ------------- render cards ------------- */
  function renderCards(filter = '') {
    const q = (filter || '').trim().toLowerCase();
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = (Array.isArray(topics) ? topics : []).filter(t => {
      if (!t) return false;
      const titleOk = (t.title || '').toLowerCase().includes(q);
      const tagOk = (t.tags || []).some(tag => tag.toLowerCase().includes(q));
      return titleOk || tagOk;
    });

    filtered.forEach(t => {
      const coverUrl = t.cover || defaultCover;
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'group card-shadow rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 focus:outline-none';
      el.setAttribute('aria-label', `Open course: ${t.title}`);
  
      el.innerHTML = `
        <div class="w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
          <div class="card-img-box" style="height:12rem; width:100%;">
            <img
              src="${escapeHtml(coverUrl)}"
              alt="${escapeHtml(t.title)}"
              loading="lazy"
              style="width:100%; height:100%; object-fit:cover; object-position:center; opacity:0; transition:opacity 0.3s;"
              onerror="this.onerror=null;this.src='${escapeHtml(defaultCover)}';"
              onload="this.style.opacity='1';"
            />
          </div>
        </div>
  
        <div class="mt-3">
          <h3 class="text-sm font-semibold leading-snug text-slate-900 card-title">${escapeHtml(t.title)}</h3>
          <div class="card-badges">
            ${(t.tags || []).slice(0,4).map(tag => `<span class="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-700">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      `;
  
      el.addEventListener('click', () => openCourse(t.id));
      
      grid.appendChild(el);
    });
  }
  
  /* ------------- open course (info view) ------------- */
  function openCourse(id) {
    currentCourse = topics.find(t => t.id === id);
    if (!currentCourse) return;
  
    title.textContent = currentCourse.title || '';
    desc.textContent = currentCourse.desc || '';
    cover.src = currentCourse.cover || defaultCover;
  
    // lesson list: only titles (click to render full course & scroll to lesson)
    lessonList.innerHTML = (currentCourse.lessons || []).map((lesson, idx) => {
      const safeTitle = escapeHtml(lesson.title || `Lesson ${idx + 1}`);
      return `
        <li>
          <button data-lesson-index="${idx}" class="w-full text-left hover:underline text-sm font-medium text-slate-800">
            ${idx + 1}. ${safeTitle}
          </button>
        </li>
      `;
    }).join('');
  
    // attach handlers
    Array.from(lessonList.querySelectorAll('button[data-lesson-index]')).forEach(btn => {
      btn.addEventListener('click', () => {
        const index = Number(btn.getAttribute('data-lesson-index'));
        renderFullCourse(index);
      });
    });
  
    tagList.innerHTML = (currentCourse.tags || []).map(tag => `<span class='rounded-full bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium mr-1'>${escapeHtml(tag)}</span>`).join('');
    meta.textContent = '';
  
    // show/hide sections
    heroSection?.classList.add('hidden');
    coursesSection?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    courseInfoSection?.classList.remove('hidden');
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------- show course dashboard ------------- */
  function showCourseDashboard() {
    if (!currentCourse) return;

    dashboardTitle.textContent = `Crack ${currentCourse.title} with Student AI`;

    // show/hide sections
    heroSection?.classList.add('hidden');
    coursesSection?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------- show lesson cards ------------- */
  function showLessonCards() {
    if (!currentCourse) return;

    lessonCardsTitle.textContent = `${currentCourse.title} - Study Materials`;
    lessonCardsGrid.innerHTML = '';

    // Create lesson cards
    (currentCourse.lessons || []).forEach((lesson, index) => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-200 cursor-pointer';
      card.setAttribute('data-lesson-index', index);

      // Extract first sentence as description
      const description = lesson.content ? lesson.content.split('.')[0] + '.' : 'Learn essential concepts and practical applications.';
      
      card.innerHTML = `
        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 mb-4">
          <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-slate-900 mb-2">${escapeHtml(lesson.title || `Lesson ${index + 1}`)}</h3>
        <p class="text-slate-600 text-sm">${escapeHtml(description)}</p>
      `;

      card.addEventListener('click', () => showIndividualLesson(index));
      lessonCardsGrid.appendChild(card);
    });

    // show/hide sections
    heroSection?.classList.add('hidden');
    coursesSection?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------- show individual lesson ------------- */
  function showIndividualLesson(lessonIndex) {
    if (!currentCourse || !currentCourse.lessons || !currentCourse.lessons[lessonIndex]) return;

    currentLesson = currentCourse.lessons[lessonIndex];
    
    individualLessonTitle.textContent = currentLesson.title || `Lesson ${lessonIndex + 1}`;
    individualLessonImage.src = currentLesson.image || defaultCover;
    individualLessonImage.alt = currentLesson.title || `Lesson ${lessonIndex + 1}`;
    individualLessonContent.innerHTML = `<div class="prose max-w-none">${toHtmlParagraphs(currentLesson.content || '')}</div>`;

    // show/hide sections
    heroSection?.classList.add('hidden');
    coursesSection?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  /* ------------- render full course (all lessons on one page) ------------- */
  function renderFullCourse(startIndex = null) {
    if (!currentCourse) return;

    // shallow copy lessons so we don't mutate original
    const lessons = (currentCourse.lessons || []).map(l => Object.assign({}, l));

    // Course cover image at the top
    const courseCoverImage = currentCourse.cover || defaultCover;
    const courseImageHtml = `
      <div class="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src="${escapeHtml(courseCoverImage)}" alt="${escapeHtml(currentCourse.title || '')}" class="w-full h-64 md:h-80 lg:h-96 object-cover" loading="lazy" onerror="this.onerror=null;this.src='${escapeHtml(defaultCover)}';" />
      </div>
    `;

    // build lesson blocks without individual images
    const blocks = lessons.map((lesson, idx) => {
      const num = idx + 1;
      const safeTitle = escapeHtml(lesson.title || `Lesson ${num}`);
      const contentSource = lesson.content || '';
      const contentHtml = toHtmlParagraphs(contentSource);

      return `
        <article class="mb-12" id="lesson-${num}">
          <h3 class="text-2xl font-bold">${num}. ${safeTitle}</h3>
          <div class="mt-4">${contentHtml}</div>
        </article>
      `;
    });

    lessonTitle.textContent = `${escapeHtml(currentCourse.title || '')} — All lessons`;
    lessonMeta.textContent = '';
    lessonContent.innerHTML = `<div class="prose max-w-none">${courseImageHtml}${blocks.join('\n')}</div>`;

    // show/hide sections
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    lessonSection?.classList.remove('hidden');

    // scroll and optionally jump to a lesson
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (Number.isFinite(startIndex) && startIndex >= 0) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`lesson-${startIndex + 1}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }
  
  /* ------------- PDF generation functions ------------- */
  
  // Function to load and convert SVG to image data
  async function loadLogoAsImageData() {
    try {
      const response = await fetch('studnetailogo.svg');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const svgText = await response.text();
      
      // Create a canvas to convert SVG to image data
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      return new Promise((resolve, reject) => {
        img.onload = function() {
          canvas.width = 100; // Set logo width
          canvas.height = 100; // Set logo height
          ctx.drawImage(img, 0, 0, 100, 100);
          const imageData = canvas.toDataURL('image/png');
          resolve(imageData);
        };
        
        img.onerror = function() {
          console.error('Error loading image from SVG');
          resolve(null); // Return null instead of rejecting to allow PDF generation without logo
        };
        
        // Convert SVG to data URL
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        img.src = url;
      });
    } catch (error) {
      console.error('Error loading logo:', error);
      return null;
    }
  }

  // Function to generate PDF with logo
  async function generatePDFWithLogo(course, isFullCourse = false) {
    if (!window.jspdf) {
      throw new Error('jsPDF library not loaded. Please check if the CDN is accessible.');
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Load logo
    const logoData = await loadLogoAsImageData();
    
    // Add logo to PDF
    if (logoData) {
      doc.addImage(logoData, 'PNG', 15, 10, 30, 30);
    }
    
    // Add title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text(course.title, 15, 50);
    
    // Add description
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    const descLines = doc.splitTextToSize(course.desc, 180);
    doc.text(descLines, 15, 65);
    
    // Add course info
    doc.setFontSize(10);
    doc.text(`Level: ${course.level}`, 15, 85);
    doc.text(`Duration: ${course.duration}`, 15, 95);
    
    // Add tags
    if (course.tags && course.tags.length > 0) {
      doc.text('Tags:', 15, 110);
      const tagsText = course.tags.join(', ');
      const tagLines = doc.splitTextToSize(tagsText, 180);
      doc.text(tagLines, 15, 120);
    }
    
    let yPosition = 140;
    
    // Add lessons
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Lessons:', 15, yPosition);
    yPosition += 10;
    
    course.lessons.forEach((lesson, index) => {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Add lesson title
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      const lessonTitle = `${index + 1}. ${lesson.title}`;
      const titleLines = doc.splitTextToSize(lessonTitle, 180);
      doc.text(titleLines, 15, yPosition);
      yPosition += titleLines.length * 5 + 5;
      
      // Add lesson content if it's a full course download
      if (isFullCourse && lesson.content) {
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        const contentLines = doc.splitTextToSize(lesson.content, 180);
        
        // Check if content fits on current page
        if (yPosition + contentLines.length * 4 > 280) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.text(contentLines, 15, yPosition);
        yPosition += contentLines.length * 4 + 10;
      } else {
        yPosition += 5;
      }
    });
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text('Generated by Digital Marketing Course', 15, 290);
      doc.text(`Page ${i} of ${pageCount}`, 180, 290);
    }
    
    return doc;
  }

  /* ------------- download syllabus (PDF) ------------- */
  async function downloadSyllabus() {
    if (!currentCourse) {
      console.error('No current course selected');
      return;
    }
    
    try {
      console.log('Starting PDF generation for syllabus...');
      const doc = await generatePDFWithLogo(currentCourse, false);
      const fileName = `${(currentCourse.title || 'syllabus').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}-syllabus.pdf`;
      console.log('Saving PDF:', fileName);
      doc.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please check console for details.');
    }
  }

  /* ------------- download course (PDF) ------------- */
  async function downloadCourse(courseId) {
    const course = topics.find(t => t.id === courseId);
    if (!course) {
      console.error('Course not found:', courseId);
      return;
    }
    
    try {
      console.log('Starting PDF generation for course:', course.title);
      const doc = await generatePDFWithLogo(course, true);
      const fileName = `${(course.title || 'course').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}-course.pdf`;
      console.log('Saving PDF:', fileName);
      doc.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please check console for details.');
    }
  }
  
  /* ------------- events ------------- */
  search?.addEventListener('input', () => renderCards(search.value));
  clearSearch?.addEventListener('click', () => { search.value=''; renderCards(''); search.focus(); });
  
  backToCourseBtn?.addEventListener('click', () => {
    lessonSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseInfoSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToCourseFromDashboardBtn?.addEventListener('click', () => {
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseInfoSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToDashboardBtn?.addEventListener('click', () => {
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    courseDashboardSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToLessonCardsBtn?.addEventListener('click', () => {
    individualLessonSection?.classList.add('hidden');
    lessonCardsSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  backBtn?.addEventListener('click', () => {
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    heroSection?.classList.remove('hidden');
    coursesSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  startBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    // show dashboard instead of immediately starting course
    showCourseDashboard();
  });

  // Dashboard card event handlers
  studyMaterialsCard?.addEventListener('click', () => {
    // Show lesson cards when Study Materials is clicked
    showLessonCards();
  });

  importantTopicsCard?.addEventListener('click', () => {
    alert('Important Topics feature is coming soon! Stay tuned for updates.');
  });

  mockTestsCard?.addEventListener('click', () => {
    alert('Mock Tests & Analytics feature is coming soon! Stay tuned for updates.');
  });
  
  downloadBtn?.addEventListener('click', () => {
    console.log('Download syllabus button clicked');
    downloadSyllabus();
  });
  
  downloadFullCourseBtn?.addEventListener('click', () => {
    console.log('Download full course button clicked');
    if (currentCourse) {
      downloadCourse(currentCourse.id);
    } else {
      console.error('No current course available for download');
    }
  });
  
  /* ------------- init ------------- */
  renderCards();
  