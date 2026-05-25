/**
 * NEXFLUX STUDIO Engine
 * Architecture: Vanilla SPA Reactive Dynamic Section Router with Structural Virtual Templating
 */

// ==========================================================================
// CENTRAL APPLICATION REPOSITORY (DATA & CONTENT STORAGE)
// ==========================================================================
const NEXFLUX_STORE = {
    services: [
        { id: "web-dev", icon: "fas fa-code", title: "Website Development", short: "Ultra-premium web architecture optimized for modern scaling parameters.", price: "₹18,000" },
        { id: "smm", icon: "fas fa-bullhorn", title: "Social Media Management", short: "Hyper-targeted content strategies converting metrics to revenue streams.", price: "₹7,999/month" },
        { id: "graphic", icon: "fas fa-bezier-curve", title: "Branding & Graphic Design", short: "High-end corporate layouts and bespoke creative system assets.", price: "₹2,000+" },
        { id: "logo", icon: "fas fa-pen-nib", title: "Premium Logo Design", short: "Iconic vectors symbolizing ultimate enterprise positioning.", price: "₹5,000" },
        { id: "thumb", icon: "fas fa-photo-video", title: "High-CTR Thumbnail Design", short: "Visual psychological hooks maximizing CTR and organic distribution.", price: "₹1,200" },
        { id: "video", icon: "fas fa-film", title: "Cinematic Video Editing", short: "Hollywood-tier grading, sound design, and retention-focused structures.", price: "₹800+" },
        { id: "seo-ads", icon: "fas fa-search-dollar", title: "SEO Optimization & Ads", short: "Algorithmic engineering designed to secure continuous organic performance.", price: "₹6,000/month" },
        { id: "ads-mgmt", icon: "fas fa-chart-line", title: "Ads Management", short: "Scalable performance ads maximizing pipeline ROAS via real-time logic.", price: "Variable" }
    ],
    deepServices: {
        "web-dev": {
            title: "Next-Gen Web Architecture",
            tagline: "Speed. Optimization. Conversion-Driven UX.",
            overview: "We engineer lightning-fast digital storefronts and platform interfaces. Ditching standard templates, we create clean layouts optimized for maximum user conversion.",
            features: ["Bespoke UI Design Systems", "Headless Core Core Metrics Optimization", "Enterprise SSR Architecture", "Comprehensive Behavioral Analytics Integration"],
            workflow: ["Deep-Dive Component Architecture Discovery", "Wireframing & UI Prototyping", "Clean Native Codebase Implementation", "Rigorous Stress Testing & Optimization Strategy"],
            benefits: ["Sub-100ms LCP Scores", "300%+ Average User Conversion Boost", "SEO-Ready Structural Node Configuration"],
            pricing: "Premium Engagement Model starting from ₹18,000. Comprehensive SLA support included."
        },
        "smm": {
            title: "Social Media Management Engine",
            tagline: "Dominate the Digital Stream.",
            overview: "We take full control of your cross-platform digital footprint. By building content funnels that prioritize viewer retention, we shift the focus from vanity metrics to genuine pipeline revenue.",
            features: ["Retention-Optimized Short Form Scripts", "Bespoke Brand Theme Consistency", "Algorithmic Distribution Management", "Advanced Audience Analytics Dashboards"],
            workflow: ["Platform Blueprint Analysis", "Content Engine Ideation & Scripting", "Premium Multimedia Post-Production", "Strategic Distribution & Real-Time Optimization"],
            benefits: ["Exponential Brand Impressions Acceleration", "Engaged Core Audience Communities", "Sustainable Direct-to-Consumer Customer Acquisition Layouts"],
            pricing: "Monthly Scale Retainers from ₹7,999/month. 3-Month Roadmap Initial Lock-In."
        },
        "graphic": {
            title: "Bespoke Design & Branding Systems",
            tagline: "Visual Luxury for Elite Startups.",
            overview: "Your design determines your market value. We create premium brand systems that command attention and communicate high-ticket value instantly.",
            features: ["Corporate Identity Guidelines", "High-End Marketing Collateral", "Advanced Product Mockups", "Dynamic Vector Design Systems"],
            workflow: ["Semiotics & Visual Deep Discovery", "Moodboard Alignment Sessions", "Iterative Aesthetic Refinement", "Comprehensive High-Resolution Delivery Vector Kits"],
            benefits: ["Instant Premium Competitive Differentiation", "Unfailing Brand Uniformity Worldwide", "Emotionally Impactful Customer Interaction Touchpoints"],
            pricing: "A-la-carte configurations starting from ₹2,000+. Structured project pricing structures available."
        },
        "seo-ads": {
            title: "SEO Optimization & Paid Ads Strategy",
            tagline: "Predictable Organic Trajectory.",
            overview: "Stop betting on inconsistent traffic. We configure optimized visibility layouts that place your products directly in front of buyers at the peak of their intent.",
            features: ["Deep Semantic Keyword Audits", "Technological Site Indexing Optimization", "High-ROAS Ad Copy Construction", "Comprehensive Custom Pixel Retargeting Engine Layouts"],
            workflow: ["Competitor Gap Dissection", "On-Page Structural Code Refactoring", "High-Intent Ad Channel Activation", "Granular Funnel ROI Iteration Checks"],
            benefits: ["Sustainable Search Engine Top Rankings", "Reduced Cost Per Customer Acquisition", "Scalable Growth Channels Independent of Industry Shifts"],
            pricing: "Integrated Retainer Matrices from ₹6,000/month. Daily Reporting Cadence Included."
        },
        "video": {
            title: "Cinematic Post-Production & Video Editing",
            tagline: "Retention Engineering by Design.",
            overview: "In the attention economy, retention is your currency. We transform raw footage into highly engaging stories using advanced motion design, crisp soundscapes, and calculated pacing.",
            features: ["Hollywood-Grade Color Grading Layouts", "Bespoke Motion Graphic Overlays", "Sound Design & Kinetic Typography", "Retention-Focused Editing Logic Structures"],
            workflow: ["Asset Selection & Structural Timeline Layout", "Pacing Optimization & Audio Level Correction", "Visual FX Layering & Dynamic Text Integration", "Final Mastering Across Target Export Formats"],
            benefits: ["Dramatic Platform View Retention Growth", "Premium Aesthetic Dynamic Identity Integration", "Maximized Organic Distribution Potential Across Platforms"],
            pricing: "Bespoke Editing Sequences starting from ₹800+ per asset. Volume Retainer Discounts Available."
        }
    },
    portfolio: [
        { title: "Quantum FinTech Interface", category: "development", desc: "High-speed Web3 dashboard UI built for a modern global payment gateway pipeline.", link: "https://ishrat813.github.io/Portfolio-/" },
        { title: "Aether Cosmetics Launch", category: "branding", desc: "Premium brand strategy, structural layout identity vectors, and launch presentation systems.", link: "https://ishrat813.github.io/Portfolio-/" },
        { title: "Vortex SaaS Acquisition", category: "seo", desc: "Scaling digital architecture from zero traffic to 250k monthly active organic discovery views.", link: "https://ishrat813.github.io/Portfolio-/" },
        { title: "Luxe Apparel Campaign", category: "smm", desc: "High-retention social media growth deployment scaling an e-commerce footprint via short-form media.", link: "https://ishrat813.github.io/Portfolio-/" },
        { title: "Elysium AI Explainer", category: "video", desc: "Cinematic, retention-focused animation and voiceover master composition for an AI SaaS platform.", link: "https://ishrat813.github.io/Portfolio-/" }
    ],
    blog: [
        { id: 1, title: "The Typography Systems of Ultra-High Growth Startups", date: "May 12, 2026", category: "Design", read: "5 min read", excerpt: "An analysis of how market-dominant enterprises leverage micro-spacing and structural typeface hierarchies to subtly command user trust and conversion retention metrics." },
        { id: 2, title: "Algorithmic Shifts in Short-Form Video Asset Distribution", date: "April 28, 2026", category: "Marketing", read: "8 min read", excerpt: "How new retention scoring metrics require structural script shifts in post-production workflows to sustain high multi-platform exposure parameters." },
        { id: 3, title: "Optimizing DOM Node Lifecycles for Instant Web Interactions", date: "April 15, 2026", category: "Development", read: "12 min read", excerpt: "A technical overview on building client-side dynamic routers without relying on bloated libraries, ensuring zero UI lag and optimized performance scores." }
    ],
    faqs: [
        { q: "How long does a premium web platform build take?", a: "Standard enterprise applications launch within 2 to 4 weeks. Complex system integrations or multi-layered platforms can span 6 to 8 weeks, including complete optimization and testing cycles." },
        { q: "Can I switch or modify service retainers as priorities change?", a: "Absolutely. Our models are built to be agile. Retainer clients can shift their monthly allocations across development, editing, or advertising design streams as needed." },
        { q: "What metrics are used to measure social media growth success?", a: "We ignore vanity numbers. Our focus is on high-intent inbound inquiries, direct traffic growth, audience watch retention, and qualified click-through conversions." },
        { q: "How is billing handled for ad management and strategies?", a: "We work with fixed, transparent monthly management fees or performance-based models depending on your scale. Ad spend is billed directly to your corporate accounts." }
    ]
};

// ==========================================================================
// CLIENT SINGLE PAGE ROUTING ENGINE
// ==========================================================================
class NexfluxRouter {
    constructor() {
        this.appContainer = document.getElementById("app-router");
        this.navLinks = document.querySelectorAll(".nav-link");
        this.initListeners();
        // Fallback root setting
        this.currentRoute = "home";
    }

    initListeners() {
        // Dynamic event interception pattern
        document.body.addEventListener("click", (e) => {
            const targetLink = e.target.closest(".route-link");
            if (targetLink) {
                e.preventDefault();
                const routeAttr = targetLink.getAttribute("href");
                this.navigateTo(routeAttr);
            }
        });

        // Intercept native browser navigation operations
        window.addEventListener("popstate", () => {
            const activePath = window.location.hash.replace("#/", "") || "home";
            this.renderRoute(activePath, false);
        });
    }

    navigateTo(routeString) {
        window.location.hash = `#/${routeString}`;
    }

    renderRoute(routePath, pushToState = true) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.currentRoute = routePath;
        this.updateNavbarStates(routePath);

        // Sub-page route verification (Service details route matching evaluation)
        if (routePath.startsWith("service-detail/")) {
            const serviceId = routePath.split("/")[1];
            this.appContainer.innerHTML = this.templateServiceDetail(serviceId);
            this.postRenderCallback(routePath);
            return;
        }

        // Standard structural evaluation matrix
        switch (routePath) {
            case "home":
                this.appContainer.innerHTML = this.templateHome();
                break;
            case "about":
                this.appContainer.innerHTML = this.templateAbout();
                break;
            case "services":
                this.appContainer.innerHTML = this.templateServices();
                break;
            case "portfolio":
                this.appContainer.innerHTML = this.templatePortfolio();
                break;
            case "pricing":
                this.appContainer.innerHTML = this.templatePricing();
                break;
            case "blog":
                this.appContainer.innerHTML = this.templateBlog();
                break;
            case "contact":
                this.appContainer.innerHTML = this.templateContact();
                break;
            case "booking":
                this.appContainer.innerHTML = this.templateBooking();
                break;
            case "thank-you":
                this.appContainer.innerHTML = this.templateThankYou();
                break;
            default:
                this.appContainer.innerHTML = this.templateHome();
                break;
        }

        this.postRenderCallback(routePath);
    }

    updateNavbarStates(routePath) {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === routePath.split("/")[0]) {
                link.classList.add("active");
            }
        });
        // Collapse mobile nav if open
        document.querySelector(".nav-menu").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("active");
    }

    postRenderCallback(routePath) {
        // Trigger animations & analytical component configurations
        setTimeout(() => {
            initCounterAnimations();
            initAccordionTriggers();
            if (routePath === "portfolio") {
                initPortfolioFilters();
            }
        }, 50);
    }

    // ==========================================================================
    // MULTI-PAGE VIEW TEMPLATE METHODS
    // ==========================================================================
    templateHome() {
        // Services dynamic loops extraction
        let servicesHTML = "";
        NEXFLUX_STORE.services.slice(0, 3).forEach(s => {
            servicesHTML += `
                <div class="glass-card">
                    <div class="service-icon-box"><i class="${s.icon}"></i></div>
                    <h3 class="service-card-title">${s.title}</h3>
                    <p class="service-card-desc">${s.short}</p>
                    <a href="service-detail/${s.id}" class="service-learn-more-btn route-link">Analyze Dynamic Model <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        });

        // Portfolio showcase extraction
        let portfolioHTML = "";
        NEXFLUX_STORE.portfolio.slice(0, 2).forEach(p => {
            portfolioHTML += `
                <div class="project-premium-card">
                    <div class="project-bg-abstract"></div>
                    <div class="project-accent-mesh"></div>
                    <div class="project-card-content">
                        <span class="project-category-tag">${p.category}</span>
                        <h4 class="project-display-title">${p.title}</h4>
                        <div class="project-action-row">
                            <a href="${p.link}" target="_blank" rel="noopener" class="btn-premium primary small-btn" style="padding: 8px 18px; font-size:0.8rem;">Live Verification</a>
                        </div>
                    </div>
                </div>
            `;
        });

        return `
            <div class="page-wrapper">
                <section class="hero-section">
                    <div class="hero-bg-glows">
                        <div class="hero-glow-1"></div>
                        <div class="hero-glow-2"></div>
                    </div>
                    <div class="subtitle-badge">NEXFLUX STUDIO EXPERIENCE</div>
                    <h1 class="hero-title">Engineering Digital Infrastructure for Brands <span>Ready to Dominate</span></h1>
                    <p class="hero-description">We bridge the gap between high-end digital design and functional user conversion. No standard frameworks. No boring designs. Just elite digital solutions built for clear growth.</p>
                    <div class="hero-cta-group">
                        <a href="booking" class="btn-premium primary route-link">Book Growth Strategy Consultation</a>
                        <a href="services" class="btn-premium secondary route-link">Explore Service Vector</a>
                    </div>
                    
                    <div class="hero-visual-container">
                        <div class="premium-mockup">
                            <div class="mockup-header">
                                <div class="mockup-dot"></div><div class="mockup-dot"></div><div class="mockup-dot"></div>
                            </div>
                            <div class="mockup-body-grid">
                                <div class="mockup-lead-graphic">
                                    <i class="fas fa-chart-network" style="font-size: 2.5rem; margin-right:15px;"></i> LIVE BRAND TRAJECTORY GRAPHIC ENGINE
                                </div>
                                <div class="mockup-side-metric">
                                    <div class="mockup-mini-card">
                                        <div style="font-size:0.75rem; color:var(--text-muted);">CONVERSION PERFORMANCE</div>
                                        <div style="font-size:1.4rem; font-weight:700; color:var(--accent-secondary);">+342.18%</div>
                                    </div>
                                    <div class="mockup-mini-card">
                                        <div style="font-size:0.75rem; color:var(--text-muted);">SPEED CALIBRATION</div>
                                        <div style="font-size:1.4rem; font-weight:700; color:#27c93f;">99/100 LCP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="stats-banner">
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="140">0</div>
                        <div class="stat-label">Deployments Finished</div>
                    </div>
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="82">0</div>
                        <div class="stat-label">Client Growth Multiplier %</div>
                    </div>
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="99">0</div>
                        <div class="stat-label">Satisfaction Rating %</div>
                    </div>
                </section>

                <section class="section-padding">
                    <div class="section-title-area">
                        <div class="subtitle-badge">CAPABILITIES MATRIX</div>
                        <h2 class="main-section-title">Engineered to Solve <span>Growth Blockers</span></h2>
                        <p class="section-desc">We develop and optimize digital ecosystems that clear your path to revenue expansion.</p>
                    </div>
                    <div class="services-grid">${servicesHTML}</div>
                    <div style="text-align:center; margin-top:50px;">
                        <a href="services" class="btn-premium secondary route-link">View Full Capability Portfolio (${NEXFLUX_STORE.services.length} Tracks)</a>
                    </div>
                </section>

                <section class="section-padding" style="background: rgba(255,255,255,0.01);">
                    <div class="split-layout-container">
                        <div class="split-text-block">
                            <div class="subtitle-badge">AGENCY MANIFESTO</div>
                            <h3>Bespoke Engineering for high-intent business execution.</h3>
                            <p>At NEXFLUX, we believe your digital footprint shouldn't just exist—it should actively drive customer acquisition.</p>
                            <p>We blend color theory, smooth interactions, and optimized conversion pathways into your workflows to turn traffic into true bottom-line growth.</p>
                            <ul class="philosophy-bullets">
                                <li><i class="fas fa-shield-halved"></i> <span><strong>Zero Bloat Promise:</strong> Clean, native development that scales your operations seamlessly.</span></li>
                                <li><i class="fas fa-eye"></i> <span><strong>Psychological Design:</strong> Landing page user patterns crafted around real buyer actions.</span></li>
                            </ul>
                            <div style="margin-top:30px;">
                                <a href="about" class="btn-premium primary route-link">Review Full Agency Story</a>
                            </div>
                        </div>
                        <div class="visual-collage-box">
                            <img src="image.png" alt="NEXFLUX Identity Center" class="collage-center-logo">
                        </div>
                    </div>
                </section>

                <section class="section-padding">
                    <div class="section-title-area">
                        <div class="subtitle-badge">CASE EXPLORATION</div>
                        <h2 class="main-section-title">Selected <span>Live Operations</span></h2>
                        <p class="section-desc">Real systems deployed globally. Engineered to match our client growth milestones.</p>
                    </div>
                    <div class="portfolio-grid-layout">${portfolioHTML}</div>
                </section>

                <section class="section-padding">
                    <div class="section-title-area">
                        <div class="subtitle-badge">ANSWERS ACCELERATOR</div>
                        <h2 class="main-section-title">Frequently Asked <span>Questions</span></h2>
                    </div>
                    <div class="faq-accordion-container">
                        ${this.renderFAQLoop(4)}
                    </div>
                </section>

                <section class="section-padding" style="padding-top:20px;">
                    <div class="cinematic-cta-banner">
                        <div class="cta-banner-glow"></div>
                        <div class="cta-banner-content">
                            <h2>Ready to Elevate Your Digital Footprint?</h2>
                            <p>Partner with NEXFLUX to launch premium digital experiences tailored directly to your target audience.</p>
                            <div class="cta-actions-row">
                                <a href="booking" class="btn-premium primary route-link">Launch Discovery Session</a>
                                <a href="https://wa.me/917891798360" target="_blank" rel="noopener" class="btn-premium secondary"><i class="fab fa-whatsapp"></i> Instant WhatsApp Channel</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    templateAbout() {
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">WHO WE ARE</div>
                    <h1 class="main-section-title">We build digital interfaces for brands ready to scale <span>online</span></h1>
                    <p class="section-desc">NEXFLUX is a focused creative agency engineering high-performance web systems and content strategies for clients worldwide.</p>
                </div>

                <div class="split-layout-container" style="margin-bottom:80px;">
                    <div class="visual-collage-box" style="height:350px;">
                        <i class="fas fa-fingerprint" style="font-size:5rem; color:var(--accent-primary);"></i>
                    </div>
                    <div class="split-text-block">
                        <h3>Our Core Goal</h3>
                        <p>We skip generic templates and unoptimized design structures. The modern web requires speed, visual clarity, and deliberate, intent-driven layouts.</p>
                        <p>Whether configuring complex search indexing arrays, implementing high-CTR layouts, or producing engaging short-form media, our focus stays sharp: delivering real growth metrics for your business.</p>
                    </div>
                </div>

                <section class="stats-banner" style="margin-bottom:80px; border-radius:16px;">
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="100">0</div>
                        <div class="stat-label">Client Retention Rate %</div>
                    </div>
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="24">0</div>
                        <div class="stat-label">Expert Execution Nodes</div>
                    </div>
                    <div class="stat-item-block">
                        <div class="stat-number" data-target="400">0</div>
                        <div class="stat-label">Inbound Funnels Configured</div>
                    </div>
                </section>

                <div style="text-align:center;">
                    <h3 style="font-size:2rem; margin-bottom:20px;">Want to collaborate on your next build?</h3>
                    <a href="booking" class="btn-premium primary route-link">Initiate Onboarding Pipeline</a>
                </div>
            </div>
        `;
    }

    templateServices() {
        let fullServicesHTML = "";
        NEXFLUX_STORE.services.forEach(s => {
            fullServicesHTML += `
                <div class="glass-card">
                    <div class="service-icon-box"><i class="${s.icon}"></i></div>
                    <h3 class="service-card-title">${s.title}</h3>
                    <p class="service-card-desc">${s.short}</p>
                    <div style="font-weight:700; color:var(--text-main); margin-bottom:15px; font-size:0.9rem;">BASE RATE: ${s.price}</div>
                    <a href="service-detail/${s.id}" class="service-learn-more-btn route-link">Deep-Dive Blueprint <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        });
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">FULL ARCHITECTURE SYSTEM</div>
                    <h1 class="main-section-title">Our Operational <span>Capabilities</span></h1>
                    <p class="section-desc">Premium digital solutions tailored for clear, scalable growth.</p>
                </div>
                <div class="services-grid">${fullServicesHTML}</div>
            </div>
        `;
    }

    templateServiceDetail(serviceId) {
        // Fallback validation framework for custom service routing lookup
        const data = NEXFLUX_STORE.deepServices[serviceId] || NEXFLUX_STORE.deepServices["web-dev"];
        
        let featuresList = "";
        data.features.forEach(f => featuresList += `<li><i class="fas fa-circle-check"></i> ${f}</li>`);
        
        let stepsList = "";
        data.workflow.forEach((w, idx) => stepsList += `<li><strong>Phase 0${idx+1}:</strong> ${w}</li>`);

        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area" style="text-align:left;">
                    <a href="services" class="route-link" style="color:var(--accent-secondary); font-size:0.9rem; font-weight:600;"><i class="fas fa-arrow-left"></i> Back to Capabilities</a>
                    <h1 class="main-section-title" style="margin-top:20px;">${data.title}</h1>
                    <p class="subtitle-badge" style="margin-top:10px; background:rgba(6,182,212,0.1); color:var(--accent-secondary); border-color:rgba(6,182,212,0.2);">${data.tagline}</p>
                </div>

                <div class="split-layout-container" style="margin-top:40px; gap:40px;">
                    <div class="glass-card">
                        <h3 style="margin-bottom:15px; font-size:1.4rem;">Operational Blueprint Overview</h3>
                        <p style="color:var(--text-muted);">${data.overview}</p>
                        <div style="margin-top:25px; padding:20px; border-radius:10px; background:rgba(255,255,255,0.02); border:1px solid var(--border-color);">
                            <div style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted);">Financial Model Allocation</div>
                            <div style="font-size:1.6rem; font-weight:800; color:var(--accent-primary); margin-top:5px;">${data.pricing}</div>
                        </div>
                    </div>

                    <div class="glass-card" style="border-color:var(--accent-secondary);">
                        <h3 style="margin-bottom:15px; font-size:1.4rem;">Key Deliverables</h3>
                        <ul class="tier-feature-list" style="margin-bottom:0;">${featuresList}</ul>
                    </div>
                </div>

                <div class="glass-card" style="margin-top:40px;">
                    <h3 style="margin-bottom:20px;">Execution Flow &amp; Timeline Architecture</h3>
                    <ul class="philosophy-bullets" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px;">
                        ${stepsList}
                    </ul>
                </div>

                <div style="margin-top:50px; text-align:center;">
                    <a href="booking" class="btn-premium primary route-link">Acquire Track Access Slot</a>
                    <a href="https://wa.me/917891798360" class="btn-premium secondary" style="margin-left:15px;"><i class="fab fa-whatsapp"></i> Direct Specialist Link</a>
                </div>
            </div>
        `;
    }

    templatePortfolio() {
        let portfolioItemsHTML = "";
        NEXFLUX_STORE.portfolio.forEach(p => {
            portfolioItemsHTML += `
                <div class="project-premium-card filter-target" data-cat="${p.category}">
                    <div class="project-bg-abstract"></div>
                    <div class="project-accent-mesh"></div>
                    <div class="project-card-content">
                        <span class="project-category-tag">${p.category}</span>
                        <h4 class="project-display-title">${p.title}</h4>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:15px;">${p.desc}</p>
                        <div class="project-action-row">
                            <a href="${p.link}" target="_blank" rel="noopener" class="btn-premium primary small-btn" style="padding: 8px 18px; font-size:0.8rem;">Live Verification Link</a>
                        </div>
                    </div>
                </div>
            `;
        });

        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">PROVEN SOLUTIONS</div>
                    <h1 class="main-section-title">Case Study <span>Showcase Matrix</span></h1>
                    <p class="section-desc">Explore active deployments engineered across various marketing and development tracks.</p>
                </div>

                <div class="portfolio-filter-bar">
                    <button class="filter-chip active" data-filter="all">All Ecosystems</button>
                    <button class="filter-chip" data-filter="development">Development</button>
                    <button class="filter-chip" data-filter="branding">Branding Systems</button>
                    <button class="filter-chip" data-filter="seo">SEO &amp; Inbound</button>
                    <button class="filter-chip" data-filter="smm">Social Streams</button>
                    <button class="filter-chip" data-filter="video">Post Production</button>
                </div>

                <div class="portfolio-grid-layout" id="portfolio-container-target">
                    ${portfolioItemsHTML}
                </div>
            </div>
        `;
    }

    templatePricing() {
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">TRANSPARENT FINANCIAL CAPABILITIES</div>
                    <h1 class="main-section-title">Investment <span>Packages</span></h1>
                    <p class="section-desc">Clear pricing structures built to align with your project goals.</p>
                </div>

                <div class="pricing-matrix-grid">
                    <div class="glass-card pricing-tier-card">
                        <div class="tier-name">Website Starter</div>
                        <div class="tier-price-box">
                            <span class="tier-currency-amt">₹9,999</span>
                            <span class="tier-billing-cycle">/ One-time Fixed</span>
                        </div>
                        <ul class="tier-feature-list">
                            <li><i class="fas fa-check"></i> Standard 5-Page Responsive Layout</li>
                            <li><i class="fas fa-check"></i> Modern Typography Setup</li>
                            <li><i class="fas fa-check"></i> Standard Contact Form</li>
                            <li><i class="fas fa-check"></i> Mobile Optimization Layer</li>
                        </ul>
                        <a href="booking" class="btn-premium secondary route-link">Select Asset Build</a>
                    </div>

                    <div class="glass-card pricing-tier-card featured-tier">
                        <div class="tier-badge-highlight">MOST DEMANDED</div>
                        <div class="tier-name">Professional Architecture</div>
                        <div class="tier-price-box">
                            <span class="tier-currency-amt">₹18,000</span>
                            <span class="tier-billing-cycle">/ One-time Fixed</span>
                        </div>
                        <ul class="tier-feature-list">
                            <li><i class="fas fa-check"></i> Premium Custom Multi-Page Framework</li>
                            <li><i class="fas fa-check"></i> Advanced Smooth Performance Engine</li>
                            <li><i class="fas fa-check"></i> High-Converting Lead Capture Funnels</li>
                            <li><i class="fas fa-check"></i> Search Engine Indexing Pre-Configured</li>
                            <li><i class="fas fa-check"></i> 30 Days Post-Launch Support</li>
                        </ul>
                        <a href="booking" class="btn-premium primary route-link">Acquire Strategy License</a>
                    </div>

                    <div class="glass-card pricing-tier-card">
                        <div class="tier-name">Social Scale Accelerator</div>
                        <div class="tier-price-box">
                            <span class="tier-currency-amt">₹7,999</span>
                            <span class="tier-billing-cycle">/ Month Retainer</span>
                        </div>
                        <ul class="tier-feature-list">
                            <li><i class="fas fa-check"></i> Full Multi-Platform Platform Strategy</li>
                            <li><i class="fas fa-check"></i> High-Retention Scripting & Post Production</li>
                            <li><i class="fas fa-check"></i> Growth Optimizations & Posting Automation</li>
                            <li><i class="fas fa-check"></i> Comprehensive Analytics & Strategy Reviews</li>
                        </ul>
                        <a href="booking" class="btn-premium secondary route-link">Deploy Content Funnel</a>
                    </div>
                </div>

                <div class="glass-card" style="margin-top:60px; text-align:center;">
                    <h3>Need an enterprise-tier custom configuration?</h3>
                    <p style="color:var(--text-muted); margin-bottom:20px; margin-top:5px;">We provide flexible custom structures tailored to your specific project scope.</p>
                    <a href="contact" class="btn-premium primary route-link">Connect with Our Strategy Team</a>
                </div>
            </div>
        `;
    }

    templateBlog() {
        let blogHTML = "";
        NEXFLUX_STORE.blog.forEach(b => {
            blogHTML += `
                <article class="glass-card blog-premium-node">
                    <div class="blog-abstract-thumbnail"><i class="fas fa-newspaper"></i></div>
                    <div class="blog-meta-strip">
                        <span>${b.category}</span> &bull; <span>${b.date}</span> &bull; <span>${b.read}</span>
                    </div>
                    <h3 class="blog-node-title">${b.title}</h3>
                    <p class="blog-node-excerpt">${b.excerpt}</p>
                    <a href="contact" class="route-link" style="color:var(--accent-primary); font-size:0.9rem; font-weight:700;">Request Complete Whitepaper <i class="fas fa-chevron-right" style="font-size:0.75rem;"></i></a>
                </article>
            `;
        });
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">INSIGHT ENGINE</div>
                    <h1 class="main-section-title">Digital Strategy <span>Insights</span></h1>
                    <p class="section-desc">Practical frameworks covering interface speed, performance marketing, and branding systems.</p>
                </div>
                <div class="blog-matrix-grid">${blogHTML}</div>
            </div>
        `;
    }

    templateContact() {
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">COMMUNICATION VECTOR</div>
                    <h1 class="main-section-title">Let's build something <span>incredible</span></h1>
                    <p class="section-desc">Get in touch to talk strategy, review timelines, or map out your digital growth framework.</p>
                </div>

                <div class="contact-split-grid">
                    <div class="glass-card" style="display:flex; flex-direction:column; gap:30px;">
                        <div>
                            <h4 style="font-size:1.2rem; margin-bottom:10px;">Direct Communication</h4>
                            <p class="contact-info-item"><i class="fas fa-envelope"></i> nexfluxstudio26@gmail.com</p>
                            <p class="contact-info-item"><i class="fas fa-phone-alt"></i> +91 7891798360</p>
                        </div>
                        <div>
                            <h4 style="font-size:1.2rem; margin-bottom:10px;">Core Philosophy</h4>
                            <p style="color:var(--text-muted); font-size:0.9rem;">We jump straight into strategy. Our discovery sessions are designed to uncover growth bottlenecks and outline functional, actionable paths forward.</p>
                        </div>
                        <div>
                            <h4 style="font-size:1.2rem; margin-bottom:10px;">Instant Routing Channel</h4>
                            <a href="https://wa.me/917891798360" target="_blank" rel="noopener" class="btn-premium secondary" style="background:#25d366; color:white; width:100%; justify-content:center; border:none;"><i class="fab fa-whatsapp"></i> Chat Live via WhatsApp</a>
                        </div>
                    </div>

                    <div class="glass-card">
                        <form id="contactFormEngine" class="premium-form-box">
                            <div class="form-row-dual">
                                <div class="form-group-block">
                                    <label>Client Identity Name</label>
                                    <input type="text" class="form-input-ctrl" placeholder="Alex Mercer" required>
                                </div>
                                <div class="form-group-block">
                                    <label>Secure Email Endpoint</label>
                                    <input type="email" class="form-input-ctrl" placeholder="alex@enterprise.com" required>
                                </div>
                            </div>
                            <div class="form-group-block">
                                <label>Target Project Parameter Focus</label>
                                <select class="form-input-ctrl" id="contactServiceSelect">
                                    <option value="web-dev">Website Architecture Formulation</option>
                                    <option value="smm">Social Funnel Optimization Retainer</option>
                                    <option value="graphic">Branding System Blueprint Architecture</option>
                                    <option value="seo-ads">Organic Inbound Scale Engineering</option>
                                    <option value="video">Cinematic Post-Production</option>
                                </select>
                            </div>
                            <div class="form-group-block">
                                <label>Project Brief Specifications</label>
                                <textarea class="form-input-ctrl" rows="5" placeholder="Outline your project scope, timeline expectations, or growth metrics here..." required></textarea>
                            </div>
                            <button type="submit" class="btn-premium primary" style="width:100%; justify-content:center; font-size:1rem;">Transmit Operational Request Brief</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    templateBooking() {
        return `
            <div class="page-wrapper section-padding">
                <div class="section-title-area">
                    <div class="subtitle-badge">STRATEGY SCHEDULING CONSOLE</div>
                    <h1 class="main-section-title">Secure Your <span>Growth Session</span></h1>
                    <p class="section-desc">Select your parameters below to help us tailor our discovery review to your target audience.</p>
                </div>

                <div class="glass-card" style="max-width:800px; margin: 0 auto;">
                    <form id="bookingFormEngine" class="premium-form-box">
                        <div class="form-row-dual">
                            <div class="form-group-block">
                                <label>Corporate Identity / Name</label>
                                <input type="text" class="form-input-ctrl" placeholder="Brand Executive Name" required>
                            </div>
                            <div class="form-group-block">
                                <label>Communication Channel Email</label>
                                <input type="email" class="form-input-ctrl" placeholder="exec@brand.com" required>
                            </div>
                        </div>
                        
                        <div class="form-row-dual">
                            <div class="form-group-block">
                                <label>Target Core Capability Track</label>
                                <select class="form-input-ctrl" id="bookingTrackSelect">
                                    <option value="web">Website Architecture (₹18,000)</option>
                                    <option value="smm">Social Retainer Track (₹7,999/mo)</option>
                                    <option value="brand">Design &amp; Branding Focus (₹2,000+)</option>
                                    <option value="seo">SEO &amp; Inbound Scaling (₹6,000/mo)</option>
                                    <option value="video">Cinematic Video Creation (₹800+)</option>
                                </select>
                            </div>
                            <div class="form-group-block">
                                <label>Capital Allocation Tier</label>
                                <select class="form-input-ctrl">
                                    <option value="tier1">₹10,000 - ₹25,000</option>
                                    <option value="tier2">₹25,000 - ₹50,000</option>
                                    <option value="tier3">₹50,000 - ₹100,000+</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group-block">
                            <label>Execution Timeline Requirement</label>
                            <select class="form-input-ctrl">
                                <option value="fast">Immediate Acceleration (< 2 Weeks)</option>
                                <option value="standard">Standard Roadmap Formulation (3-4 Weeks)</option>
                                <option value="long">Long-Term Strategic Deep Build</option>
                            </select>
                        </div>

                        <div class="form-group-block">
                            <label>Target Audience Overviews &amp; Notes</label>
                            <textarea class="form-input-ctrl" rows="4" placeholder="Tell us about your target demographic or current conversion bottlenecks..." required></textarea>
                        </div>

                        <button type="submit" class="btn-premium primary" style="width:100%; justify-content:center; font-size:1rem;">Deploy Project Blueprint Validation Configuration</button>
                    </form>
                </div>
            </div>
        `;
    }

    templateThankYou() {
        return `
            <div class="page-wrapper section-padding" style="display:flex; justify-content:center; align-items:center;">
                <div class="glass-card success-orchestration-panel">
                    <div class="success-vector-halo">
                        <i class="fas fa-chart-network"></i>
                    </div>
                    <h1 style="font-size:2.5rem; font-weight:800; margin-bottom:15px; background:var(--accent-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Brief Successfully Intercepted</h1>
                    <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:35px;">Our strategy team has received your project parameters. We will review your target audience parameters and get back to you within 12 hours.</p>
                    <div style="display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
                        <a href="home" class="btn-premium primary route-link">Return to Core Matrix</a>
                        <a href="https://wa.me/917891798360" target="_blank" rel="noopener" class="btn-premium secondary" style="background:#25d366; border:none; color:white;"><i class="fab fa-whatsapp"></i> Establish Direct Escalation Route</a>
                    </div>
                </div>
            </div>
        `;
    }

    renderFAQLoop(limit) {
        let html = "";
        NEXFLUX_STORE.faqs.slice(0, limit).forEach(f => {
            html += `
                <div class="faq-node">
                    <button class="faq-trigger-header">
                        <span>${f.q}</span>
                        <i class="fas fa-chevron-down faq-node-icon"></i>
                    </button>
                    <div class="faq-body-panel">
                        <p>${f.a}</p>
                    </div>
                </div>
            `;
        });
        return html;
    }
}

// Global Router Reference Hook
let GLOBAL_ROUTER;

// ==========================================================================
// SYSTEM CORE INITIALIZATION LIFE CYCLE ENTRYPOINT
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Particle Canvas Initialization
    initParticleEngine();

    // 2. Client Side Routing Dynamic Activation
    GLOBAL_ROUTER = new NexfluxRouter();
    
    // Process Initial Route Configuration
    const targetInitHash = window.location.hash.replace("#/", "") || "home";
    GLOBAL_ROUTER.renderRoute(targetInitHash, false);

    // 3. System Theme Memory Configuration Verification
    initThemeStateEngine();

    // 4. UI Layout Interaction Interceptors Activation
    initMobileMenuHandlers();
    initGlobalFormInterceptors();

    // 5. Preloader Fadeout Lifespan Management Sequence
    const loader = document.getElementById("preloader");
    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 600);
        });
        // Safety execution fallback if window load event fired prior script evaluation completion
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 2200);
    }
});

// ==========================================================================
// THEME CONFIGURATION STATE CONFIGURATOR ENGINE
// ==========================================================================
function initThemeStateEngine() {
    const themeToggleBtn = document.getElementById("themeToggle");
    const activeSavedTheme = localStorage.getItem("nexflux-theme") || "dark";
    
    document.documentElement.setAttribute("data-theme", activeSavedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentActive = document.documentElement.getAttribute("data-theme");
        const nextTargetTheme = currentActive === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", nextTargetTheme);
        localStorage.setItem("nexflux-theme", nextTargetTheme);
    });

    // Window scroll event structural tracking decoration assignment logic for navbar element
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// ==========================================================================
// RESPONSIVE INTERACTION & HAMBURGER SYSTEM LAYOUTS
// ==========================================================================
function initMobileMenuHandlers() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// ==========================================================================
// ACCORDION ENGINE MECHANICS (DYNAMIC HEIGHT CALCULATION STRUCT)
// ==========================================================================
function initAccordionTriggers() {
    const nodes = document.querySelectorAll(".faq-trigger-header");
    nodes.forEach(btn => {
        btn.addEventListener("click", () => {
            const currentContainerNode = btn.parentElement;
            const openPanelTarget = currentContainerNode.querySelector(".faq-body-panel");
            const currentlyActiveNode = document.querySelector(".faq-node.active-node");

            if (currentlyActiveNode && currentlyActiveNode !== currentContainerNode) {
                currentlyActiveNode.classList.remove("active-node");
                currentlyActiveNode.querySelector(".faq-body-panel").style.maxHeight = null;
            }

            currentContainerNode.classList.toggle("active-node");
            if (currentContainerNode.classList.contains("active-node")) {
                openPanelTarget.style.maxHeight = openPanelTarget.scrollHeight + "px";
            } else {
                openPanelTarget.style.maxHeight = null;
            }
        });
    });
}

// ==========================================================================
// NUMERIC STATS COUNTER SYSTEM ITERATION SEQUENCERS
// ==========================================================================
function initCounterAnimations() {
    const counterElements = document.querySelectorAll(".stat-number");
    counterElements.forEach(counter => {
        const targetedCeilValue = parseInt(counter.getAttribute("data-target"), 10);
        if (isNaN(targetedCeilValue)) return;

        let baseInitialValue = 0;
        const totalDurationSlices = 60; 
        const numericIncrementStep = Math.ceil(targetedCeilValue / totalDurationSlices);
        
        const counterTaskInterval = setInterval(() => {
            baseInitialValue += numericIncrementStep;
            if (baseInitialValue >= targetedCeilValue) {
                counter.innerText = targetedCeilValue + (counter.parentElement.querySelector(".stat-label").innerText.includes("%") ? "%" : "+");
                clearInterval(counterTaskInterval);
            } else {
                counter.innerText = baseInitialValue;
            }
        }, 20);
    });
}

// ==========================================================================
// PORTFOLIO ARCHITECTURE DEEP FILTER CHIP LOGIC ENGINE
// ==========================================================================
function initPortfolioFilters() {
    const actionChips = document.querySelectorAll(".filter-chip");
    const targets = document.querySelectorAll(".filter-target");

    actionChips.forEach(chip => {
        chip.addEventListener("click", () => {
            actionChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");

            const evaluationFilterKey = chip.getAttribute("data-filter");

            targets.forEach(t => {
                if (evaluationFilterKey === "all" || t.getAttribute("data-cat") === evaluationFilterKey) {
                    t.style.display = "block";
                    t.style.animation = "routeFadeIn 0.4s ease forwards";
                } else {
                    t.style.display = "none";
                }
            });
        });
    });
}

// ==========================================================================
// CENTRAL FORM PROCESSING SUBMISSION VALIDATION INTERCEPTORS
// ==========================================================================
function initGlobalFormInterceptors() {
    document.body.addEventListener("submit", (e) => {
        if (e.target && (e.target.id === "contactFormEngine" || e.target.id === "bookingFormEngine")) {
            e.preventDefault();
            // Form validated, execute routing state update to thank-you screen interface
            GLOBAL_ROUTER.navigateTo("thank-you");
        }
    });
}

// ==========================================================================
// LUXURY BG AMBIENT PARTICLE ENGINE INTERFACES (CANVAS MATRIX DRIVEN)
// ==========================================================================
function initParticleEngine() {
    const targetCanvas = document.getElementById("particleCanvas");
    if (!targetCanvas) return;
    
    const ctx = targetCanvas.getContext("2d");
    let particlesArray = [];
    
    function recalibrateCanvasGeometry() {
        targetCanvas.width = window.innerWidth;
        targetCanvas.height = window.innerHeight;
    }
    recalibrateCanvasGeometry();
    window.addEventListener("resize", recalibrateCanvasGeometry);

    class MathematicalParticleNode {
        constructor() {
            this.x = Math.random() * targetCanvas.width;
            this.y = Math.random() * targetCanvas.height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > targetCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > targetCanvas.height) this.speedY *= -1;
        }
        draw() {
            const evaluatedTheme = document.documentElement.getAttribute("data-theme");
            ctx.fillStyle = evaluatedTheme === "dark" ? "rgba(139, 92, 246, 0.25)" : "rgba(109, 40, 217, 0.12)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function buildNodeRepository(densityThreshold) {
        for (let i = 0; i < densityThreshold; i++) {
            particlesArray.push(new MathematicalParticleNode());
        }
    }
    buildNodeRepository(65);

    function loopRenderCoordinator() {
        ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
        particlesArray.forEach(node => {
            node.update();
            node.draw();
        });
        requestAnimationFrame(loopRenderCoordinator);
    }
    loopRenderCoordinator();
}