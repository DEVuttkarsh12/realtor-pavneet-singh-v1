"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  buyerSteps,
  communities,
  properties,
  sellerSteps,
  services,
  site,
} from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  imageAlt?: string;
  index?: string;
  align?: "left" | "center";
  variant?: "default" | "portrait";
};

function InnerHero({ eyebrow, title, copy, image, imageAlt = "", index = "PS / NS", align = "left", variant = "default" }: HeroProps) {
  return (
    <section className={`inner-hero ${align === "center" ? "is-centered" : ""} ${variant === "portrait" ? "has-portrait-media" : ""}`}>
      <img src={image} alt={imageAlt} data-parallax="hero" />
      <div className="inner-hero-film" />
      <div className="inner-hero-grid" aria-hidden="true"><i /><i /><i /></div>
      <div className="shell inner-hero-content">
        <p className="eyebrow light hero-enter delay-1">{eyebrow}</p>
        <h1 className="hero-enter delay-2">{title}</h1>
        <p className="hero-enter delay-3">{copy}</p>
      </div>
      <div className="inner-hero-index hero-enter delay-4">
        <span>{index}</span><i /><span>Nova Scotia</span>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function PageCta({ title, copy = "Tell Pavneet what you are considering and receive direct guidance on the clearest next step." }: { title: ReactNode; copy?: string }) {
  return (
    <section className="page-cta dark-section">
      <div className="shell page-cta-grid">
        <div className="reveal">
          <p className="eyebrow light">Start with a conversation</p>
          <h2>{title}</h2>
        </div>
        <div className="reveal reveal-delay">
          <p>{copy}</p>
          <a className="primary-button light-button" href="/contact">Discuss your goals <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const faqs = [
    ["What areas does Pavneet serve?", "Pavneet advises clients across Nova Scotia, with strong local context in Halifax, Bedford, Dartmouth, Hammonds Plains, Sackville, Truro, the Annapolis Valley, and Cape Breton."],
    ["Can Pavneet help newcomers buy a first home?", "Yes. Guidance can cover the purchase sequence, complete ownership budget, community fit, mortgage preparation, closing costs, and the local professionals involved in a Canadian transaction."],
    ["Does Pavneet work with investors and business owners?", "Yes. His advisory work includes income property, multi-unit assets, commercial acquisitions, owner-occupied real estate, industrial sites, and development land."],
    ["Which languages can Pavneet communicate in?", "Pavneet works across English, Punjabi, Hindi, Urdu, Gujarati, and Spanish, making important details easier to understand for clients from diverse backgrounds."],
  ];

  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="About Pavneet Singh"
          title={<>A relationship built on <em>trust & results.</em></>}
          copy="Your family REALTOR® with Sutton Group Professional Realty, helping people create opportunity, security, and a future in Nova Scotia."
          image="/images/pavneet-studio-portrait.jpg"
          imageAlt="Pavneet Singh, Nova Scotia REALTOR®"
          index="ABOUT / 01"
          variant="portrait"
        />

        <section className="about-story section-space">
          <div className="shell about-story-grid">
            <div className="about-story-heading reveal">
              <p className="eyebrow">More than properties</p>
              <h2>Real estate shaped around the life you <em>envision.</em></h2>
            </div>
            <div className="about-story-copy reveal reveal-delay">
              <p className="lead-copy">Real estate is about creating opportunity, building security, and helping people achieve the life they envision for themselves and their families.</p>
              <p>Across Nova Scotia, Pavneet has helped families find a place to call home, supported homeowners through meaningful sales, and guided investors toward opportunities designed to strengthen long-term wealth.</p>
              <p>As someone who understands the importance of building a future in Canada, he is especially passionate about helping newcomers, families, and investors navigate the market with confidence.</p>
              <blockquote>“My role is to bring clarity to a meaningful decision, then stay beside you until the opportunity becomes a result.”</blockquote>
            </div>
          </div>
        </section>

        <section className="expertise-band dark-section section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="A wider advisory lens"
              title={<>Three strengths in <em>one advisor.</em></>}
              copy="Finance, construction, and relocation experience meet in one practical real estate conversation."
            />
            <div className="expertise-grid">
              {[
                ["01", "Financial modelling", "Cash flow, investment returns, purchase costs, and operating reality are brought into the property decision."],
                ["02", "Construction acumen", "A practical eye supports condition reviews, renovation feasibility, and more useful questions during viewings."],
                ["03", "Multilingual relocation", "A personal understanding of building a life in Canada brings empathy and precision to the newcomer journey."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${index + 1}`} key={item[0]}>
                  <span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-story section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Community in action"
              title={<>Local relationships, <em>lived.</em></>}
              copy="Community service and showing up for people are part of the same long-term approach Pavneet brings to every client relationship."
            />
            <div className="community-collage">
              <figure className="reveal">
                <img src="/images/pavneet-community-leadership.jpg" alt="Pavneet Singh at a Canadian community leadership event" />
                <figcaption><span>01</span>Community leadership</figcaption>
              </figure>
              <figure className="reveal reveal-delay">
                <img src="/images/pavneet-community.jpg" alt="Pavneet Singh supporting a local community initiative" />
                <figcaption><span>02</span>Showing up locally</figcaption>
              </figure>
              <figure className="reveal reveal-delay-2">
                <img src="/images/pavneet-studio-portrait.jpg" alt="Pavneet Singh" />
                <figcaption><span>03</span>Serving all of Nova Scotia</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="credentials-section soft-section section-space">
          <div className="shell credentials-grid">
            <div className="reveal">
              <p className="eyebrow">Professional foundation</p>
              <h2>Advice backed by a wider <em>professional lens.</em></h2>
            </div>
            <div className="credential-list reveal reveal-delay">
              <div><span>Brokerage</span><strong>Sutton Group Professional Realty</strong></div>
              <div><span>Service area</span><strong>All of Nova Scotia</strong></div>
              <div><span>Client spectrum</span><strong>Families, newcomers, investors & entrepreneurs</strong></div>
              <div><span>Languages</span><strong>English, Punjabi, Hindi, Urdu, Gujarati & Spanish</strong></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-space">
          <div className="shell faq-grid">
            <div className="reveal">
              <p className="eyebrow">Frequently asked</p>
              <h2>Good questions deserve <em>clear answers.</em></h2>
            </div>
            <div className="faq-list reveal reveal-delay">
              {faqs.map((faq, index) => (
                <details key={faq[0]} open={index === 0}>
                  <summary><span>0{index + 1}</span>{faq[0]}<i>+</i></summary>
                  <p>{faq[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Create opportunities for <em>generations.</em></>} />
      </main>
    </SiteChrome>
  );
}

function ServicesPage() {
  const detail = [
    {
      ...services[0],
      id: "residential",
      headline: "A home decision guided by the life around it.",
      points: ["Market analysis and valuation", "Neighbourhood and community insight", "Personalized shortlist", "Offer and negotiation strategy"],
      deliverables: ["Comparative market context", "Complete budget clarity", "Transaction roadmap"],
    },
    {
      ...services[1],
      id: "investment",
      headline: "Durable value, tested before emotion.",
      points: ["Income-producing property", "Multi-unit opportunities", "Rental and operating context", "Portfolio growth planning"],
      deliverables: ["Cash-flow lens", "Risk and return review", "Acquisition strategy"],
    },
    {
      ...services[2],
      id: "commercial",
      headline: "Real estate that supports the business objective.",
      points: ["Owner-occupied property", "Retail and office opportunities", "Mixed-use assets", "Location and use context"],
      deliverables: ["Lease-versus-own framing", "Location review", "Negotiation plan"],
    },
    {
      ...services[3],
      id: "land",
      headline: "Site decisions built around feasibility and growth.",
      points: ["Industrial property sourcing", "Strategic land acquisition", "Servicing and zoning context", "Development opportunity review"],
      deliverables: ["Comparative site context", "Feasibility questions", "Due-diligence coordination"],
    },
  ];

  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="Real estate advisory in Nova Scotia"
          title={<>Strategy for every stage of your <em>journey.</em></>}
          copy="Analytical, personalized guidance across residential, investment, commercial, industrial, and development real estate."
          image="/images/industrial.jpg"
          index="ADVISORY / 02"
        />

        <section className="service-details section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Four advisory pillars"
              title={<>Make the opportunity fit the <em>objective.</em></>}
              copy="Local knowledge becomes valuable when it is applied to a clear understanding of your goals."
            />
            <div className="service-detail-list">
              {detail.map((item, index) => (
                <article className="service-detail reveal" id={item.id} key={item.id}>
                  <div className="service-detail-image"><img src={item.image} alt="" /><span>{item.number}</span></div>
                  <div className="service-detail-content">
                    <p className="eyebrow">{item.subtitle}</p>
                    <h3>{item.title}</h3>
                    <h4>{item.headline}</h4>
                    <p>{item.copy}</p>
                    <div className="detail-columns">
                      <div><span>Scope</span><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                      <div><span>What you receive</span><ul>{item.deliverables.map((point) => <li key={point}>{point}</li>)}</ul></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relocation-section dark-section section-space">
          <div className="shell relocation-grid">
            <div className="relocation-heading reveal">
              <p className="eyebrow light">Nova Scotia relocation concierge</p>
              <h2>Moving here? <em>Start here.</em></h2>
              <p>Guidance extends beyond property into the community, cost, timing, and practical decisions that shape a successful move.</p>
            </div>
            <div className="relocation-list">
              {[
                ["01", "Neighbourhood matching", "Compare commute, schools, lifestyle, services, and budget across urban, suburban, and rural communities."],
                ["02", "Financial orientation", "Understand the complete purchase budget, local taxes, ongoing costs, and the financing sequence."],
                ["03", "Remote purchase support", "Coordinate consultation, video tours, inspections, document flow, and the professionals involved from a distance."],
                ["04", "Settlement context", "Connect the property choice to transportation, schools, healthcare, services, and community resources."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Bring the whole decision into <em>one conversation.</em></>} />
      </main>
    </SiteChrome>
  );
}

function PropertiesPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [searchReady, setSearchReady] = useState(false);
  const categories = ["All", "Residential", "Commercial"] as const;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const savedQuery = params.get("q");
    const savedCategory = params.get("type");
    if (savedQuery) setQuery(savedQuery);
    if (savedCategory && categories.includes(savedCategory as (typeof categories)[number])) {
      setActive(savedCategory);
    }
    setSearchReady(true);
  }, []);

  useEffect(() => {
    if (!searchReady) return;
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query.trim());
    else url.searchParams.delete("q");
    if (active !== "All") url.searchParams.set("type", active);
    else url.searchParams.delete("type");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }, [active, query, searchReady]);
  const normalizeSearch = (value: string) => value
    .toLowerCase()
    .replace(/[$,]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const searchTerms = normalizeSearch(query).split(" ").filter(Boolean);
  const filtered = properties.filter((property) => {
    if (active !== "All" && property.category !== active) return false;
    if (searchTerms.length === 0) return true;
    const searchable = normalizeSearch([
      property.title,
      property.location,
      property.price,
      property.category,
      property.beds,
      property.baths,
      property.area,
      property.summary,
    ].join(" "));
    return searchTerms.every((term) => searchable.includes(term));
  });
  const clearMarketplace = () => {
    setQuery("");
    setActive("All");
  };

  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="Property opportunities in Nova Scotia"
          title={<>Find the opportunity that fits <em>what comes next.</em></>}
          copy="A curated design preview for homes, income property, commercial assets, and future development opportunities."
          image="/images/halifax-aerial.jpg"
          index="MARKET / 03"
        />
        <section className="marketplace-section section-space">
          <div className="shell">
            <div className="marketplace-toolbar reveal">
              <div>
                <p className="eyebrow">Curated marketplace</p>
                <h2>Property, viewed through the <em>right lens.</em></h2>
              </div>
              <div className="market-filters" role="group" aria-label="Filter properties">
                {categories.map((category) => (
                  <button type="button" className={active === category ? "is-active" : ""} onClick={() => setActive(category)} key={category}>{category}</button>
                ))}
              </div>
            </div>
            <div className="market-search-panel reveal reveal-delay">
              <div className="market-search-copy">
                <label htmlFor="market-search">Describe what you are looking for</label>
                <p>Search every listing by address, city, price, property type, bedrooms, or feature.</p>
              </div>
              <div className="market-search-control">
                <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
                <input
                  id="market-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={'Try "Halifax", "3 beds", "$579,900" or "commercial"'}
                  autoComplete="off"
                />
                {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear property search">Clear</button>}
              </div>
            </div>
            <div className="market-results-summary" aria-live="polite">
              <strong>{String(filtered.length).padStart(2, "0")}</strong>
              <span>{filtered.length === 1 ? "matching opportunity" : "matching opportunities"}</span>
              {(query || active !== "All") && <button type="button" onClick={clearMarketplace}>Reset search</button>}
            </div>
            {filtered.length > 0 ? <div className="marketplace-grid">
              {filtered.map((property) => (
                <a className="market-card" href={`/properties/${property.slug}`} key={property.slug} data-cursor-label="View">
                  <div className="market-card-image"><img src={property.image} alt={property.title} /><span>{property.category}</span><i><ArrowUpRight /></i></div>
                  <div className="market-card-copy">
                    <p>{property.location}</p><h3>{property.title}</h3><strong>{property.price}</strong>
                    <div><span>{property.beds}</span><span>{property.baths}</span><span>{property.area}</span></div>
                  </div>
                </a>
              ))}
            </div> : <div className="market-empty" role="status">
              <span>No exact matches</span>
              <h3>Let&apos;s broaden the search.</h3>
              <p>Try a city, street, listing type, number of bedrooms, or exact price. You can also ask Pavneet about opportunities that are not publicly listed.</p>
              <button type="button" className="line-link" onClick={clearMarketplace}>Clear all filters</button>
            </div>}
            <div className="market-disclaimer reveal">
              <span>Important</span>
              <p>These are public market references presented for design and discovery. They are not represented as Pavneet&apos;s active listings. Availability, pricing, measurements, and all listing details must be independently confirmed.</p>
            </div>
          </div>
        </section>
        <PageCta
          title={<>The right opportunity does not always begin with a <em>public listing.</em></>}
          copy="Share your brief directly. Pavneet can help define the search, evaluate public opportunities, and explore the clearest next step."
        />
      </main>
    </SiteChrome>
  );
}

function NeighbourhoodsPage() {
  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="Nova Scotia neighbourhood guides"
          title={<>Find the community that fits your <em>life.</em></>}
          copy="Every community has its own character, strengths, pace, and property context. Start with what matters to you."
          image="/images/nova-scotia-coast.webp"
          index="PLACES / 04"
        />
        <section className="communities-section section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Community profiles"
              title={<>Eight places. Eight ways to feel <em>at home.</em></>}
              copy="Local context turns a property search into a decision about where to build your everyday life."
            />
            <div className="communities-grid">
              {communities.map((community, index) => (
                <article className={`community-card reveal reveal-delay-${(index % 3) + 1}`} key={community.name}>
                  <div className="community-card-image"><img src={community.image} alt={community.name} /><span>0{index + 1}</span></div>
                  <div className="community-card-copy">
                    <small>{community.type}</small><h3>{community.name}</h3><p>{community.description}</p>
                    <div>{community.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={<>Which community fits your <em>goals?</em></>} copy="Share your commute, lifestyle, school, investment, and budget priorities to receive tailored community guidance." />
      </main>
    </SiteChrome>
  );
}

function GuidesPage() {
  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="Buyer & seller resources"
          title={<>Two journeys. One clear place to <em>begin.</em></>}
          copy="Practical Nova Scotia guidance for purchasing with confidence or positioning a property for its strongest outcome."
          image="/images/interior-kitchen.jpg"
          index="GUIDES / 05"
        />
        <section className="guide-choices section-space">
          <div className="shell">
            <SectionIntro eyebrow="Choose your path" title={<>Know what comes <em>next.</em></>} copy="Focused roadmaps that connect the key decisions before the process becomes emotional or urgent." />
            <div className="guide-choice-grid">
              <a className="guide-choice reveal" href="/buying-guide">
                <img src="/images/interior-kitchen.jpg" alt="Modern Nova Scotia home interior" /><div className="guide-choice-film" />
                <span>01 / Buying</span><h3>From first priorities to the front door.</h3><p>A seven-step roadmap across budget, pre-approval, search, offers, due diligence, and closing.</p><i><ArrowUpRight /></i>
              </a>
              <a className="guide-choice reveal reveal-delay" href="/selling-guide">
                <img src="/images/home-exterior.jpg" alt="Well-presented family home" /><div className="guide-choice-film" />
                <span>02 / Selling</span><h3>Prepare, position, negotiate, and close.</h3><p>A coordinated approach built to protect leverage, attract serious buyers, and keep the move connected.</p><i><ArrowUpRight /></i>
              </a>
            </div>
          </div>
        </section>
        <section className="decision-notes soft-section section-space">
          <div className="shell">
            <SectionIntro eyebrow="Decision notes" title={<>Questions worth answering <em>early.</em></>} />
            <div className="decision-grid">
              {[
                ["Buying", "What should happen before the first showing?", "Align goals, comfortable budget, financing, timing, and the true non-negotiables."],
                ["Selling", "Which preparation protects your leverage?", "Make presentation, pricing, timing, and launch strategy work together."],
                ["Investing", "Does this opportunity fit the objective?", "Test income, risk, location, operations, and long-term portfolio fit."],
                ["Relocating", "Which community supports the whole move?", "Connect the home search to commute, services, schools, and everyday life."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>0{index + 1} / {item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={<>Turn information into a <em>clear plan.</em></>} />
      </main>
    </SiteChrome>
  );
}

function StepGuide({ type }: { type: "buy" | "sell" }) {
  const buying = type === "buy";
  const steps = buying ? buyerSteps : sellerSteps;
  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow={buying ? "Nova Scotia home buying guide" : "Nova Scotia home selling guide"}
          title={buying ? <>A clearer path to <em>homeownership.</em></> : <>Position your home for its <em>best outcome.</em></>}
          copy={buying ? "From first priorities to closing day, understand the steps that turn a home search into a confident purchase." : "A considered strategy across preparation, pricing, marketing, negotiation, and closing, designed around your goals."}
          image={buying ? "/images/interior-kitchen.jpg" : "/images/home-exterior.jpg"}
          index={buying ? "BUY / 06" : "SELL / 07"}
        />
        <section className="step-guide section-space">
          <div className="shell step-guide-layout">
            <div className="step-guide-intro reveal">
              <p className="eyebrow">The complete roadmap</p>
              <h2>{buying ? <>From brief to <em>keys.</em></> : <>From plan to <em>sold.</em></>}</h2>
              <p>{buying ? "Keep financing, fit, local context, negotiation, and due diligence connected from the beginning." : "Protect your leverage by connecting preparation, position, exposure, offer analysis, and closing."}</p>
              <a className="primary-button ink-button" href="/contact">Build my plan <ArrowUpRight /></a>
            </div>
            <div className="guide-steps">
              {steps.map((step, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={step[0]}>
                  <span>Step {step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p><i aria-hidden="true">↘</i>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="guide-checklist dark-section section-space">
          <div className="shell guide-checklist-grid">
            <div className="reveal">
              <p className="eyebrow light">Plan for the complete decision</p>
              <h2>{buying ? <>What belongs in the <em>budget?</em></> : <>What shapes the <em>outcome?</em></>}</h2>
            </div>
            <div className="checklist-grid">
              {(buying ? [
                ["Purchase funds", "Down payment, deposit, legal work, inspection, tax adjustments, and moving."],
                ["Ownership costs", "Mortgage, property tax, insurance, utilities, maintenance, and potential upgrades."],
                ["Property context", "Condition, neighbourhood value, commute, services, resale, and future fit."],
                ["Due diligence", "Inspection, disclosure, financing, title, documents, and professional advice."],
              ] : [
                ["Market position", "Comparable sales, active competition, property condition, timing, and demand."],
                ["Presentation", "Repairs, decluttering, staging, photography, and a clear first impression."],
                ["Offer quality", "Price, deposit, financing confidence, conditions, timing, and buyer strength."],
                ["Net result", "Selling costs, legal work, mortgage obligations, adjustments, and the next move."],
              ]).map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={buying ? <>Start the search with a <em>stronger brief.</em></> : <>Plan the sale before the listing goes <em>live.</em></>} />
      </main>
    </SiteChrome>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "Real estate enquiry");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`${interest}: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <SiteChrome darkHeader>
      <main>
        <section className="contact-hero dark-section">
          <div className="contact-orbits" aria-hidden="true"><i /><i /><i /></div>
          <div className="shell contact-hero-grid">
            <div className="contact-hero-copy">
              <p className="eyebrow light hero-enter delay-1">Best real estate advice starts here</p>
              <h1 className="hero-enter delay-2">Let&apos;s build your <em>legacy.</em></h1>
              <p className="hero-enter delay-3">Share where you are today and what you want your next move to accomplish.</p>
              <div className="contact-direct hero-enter delay-4">
                <div><span>Direct line</span><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></div>
                <div><span>Professional email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
                <div><span>Office</span><address>{site.office}</address></div>
              </div>
            </div>
            <form className="contact-form hero-enter delay-3" onSubmit={submit}>
              <div className="field-row">
                <label><span>Your name *</span><input name="name" required autoComplete="name" /></label>
                <label><span>Email address *</span><input name="email" type="email" required autoComplete="email" /></label>
              </div>
              <div className="field-row">
                <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label><span>I&apos;m interested in</span><select name="interest" defaultValue="Buying a home"><option>Buying a home</option><option>Selling a property</option><option>Residential investment</option><option>Commercial or industrial</option><option>Land or development</option><option>Relocating to Nova Scotia</option></select></label>
              </div>
              <label><span>How can Pavneet help? *</span><textarea name="message" rows={5} required /></label>
              <button className="primary-button light-button" type="submit">Prepare my enquiry <ArrowUpRight /></button>
              <p className="form-note">{sent ? "Your email app is opening with the enquiry prepared." : "Submitting prepares a private email directly to Pavneet."}</p>
            </form>
          </div>
        </section>
        <section className="contact-process section-space">
          <div className="shell">
            <SectionIntro eyebrow="Turning opportunities into results" title={<>A plan designed around your <em>goals.</em></>} />
            <div className="contact-process-grid">
              {[
                ["01", "Discover", "Clarify your goal, timing, preferred areas, risk tolerance, and long-term priorities."],
                ["02", "Strategize", "Turn market context, financial thinking, and local knowledge into a tailored plan."],
                ["03", "Execute", "Coordinate viewings, negotiations, due diligence, legal work, and closing with purpose."],
              ].map((item, index) => <article className={`reveal reveal-delay-${index + 1}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <SiteChrome darkHeader>
      <main>
        <InnerHero
          eyebrow="Website information"
          title={privacy ? <>Privacy <em>policy.</em></> : <>Terms of <em>use.</em></>}
          copy={privacy ? "How information shared through this website is handled." : "Important information governing use of this real estate website."}
          image="/images/halifax-aerial.jpg"
          index={privacy ? "LEGAL / P" : "LEGAL / T"}
          align="center"
        />
        <section className="legal-section section-space">
          <article className="legal-copy reveal">
            <p className="legal-updated">Last updated: August 20, 2026</p>
            {privacy ? (
              <>
                <h2>Information you choose to share</h2>
                <p>This website may collect information you voluntarily provide when contacting Pavneet, such as your name, email address, phone number, real estate interests, and message. The contact form prepares an email in your own email application; the website does not maintain an independent contact database.</p>
                <h2>How information is used</h2>
                <p>Information you send may be used to respond to your enquiry, understand your real estate needs, provide requested guidance, coordinate a consultation, and maintain professional correspondence.</p>
                <h2>Third-party services</h2>
                <p>Links to phone, email, WhatsApp, social media, brokerage, mapping, or property-information services are governed by the privacy practices of those providers. Review their policies before sharing personal information.</p>
                <h2>Your choices</h2>
                <p>You may contact Pavneet directly to ask about personal information you have shared, request a correction, or ask that non-required correspondence be deleted, subject to professional and legal record-keeping obligations.</p>
              </>
            ) : (
              <>
                <h2>General information only</h2>
                <p>Content on this website is provided for general information and initial real estate education. It is not legal, tax, accounting, engineering, inspection, lending, immigration, or other specialized professional advice.</p>
                <h2>Property and market information</h2>
                <p>Property references, prices, measurements, availability, neighbourhood information, and market observations may change or contain information supplied by third parties. All material facts must be independently verified before making a decision.</p>
                <h2>No representation agreement</h2>
                <p>Using this website, sending an enquiry, or reviewing information does not by itself create an agency, representation, fiduciary, or brokerage relationship. Any formal relationship must be documented as required by applicable law and professional standards.</p>
                <h2>Trademarks</h2>
                <p>REALTOR®, MLS®, Multiple Listing Service® and associated marks are owned or controlled by the Canadian Real Estate Association and are used to identify professionals and services meeting CREA standards.</p>
              </>
            )}
            <h2>Contact</h2>
            <p>Questions may be directed to <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.</p>
          </article>
        </section>
      </main>
    </SiteChrome>
  );
}

export function PropertyDetail({ property }: { property: (typeof properties)[number] }) {
  return (
    <SiteChrome darkHeader>
      <main>
        <section className="property-detail-hero">
          <img src={property.image} alt={property.title} data-parallax="hero" />
          <div className="property-detail-film" />
          <div className="shell property-detail-hero-content">
            <p className="eyebrow light hero-enter delay-1">{property.category} | Public market reference</p>
            <h1 className="hero-enter delay-2">{property.title}</h1>
            <div className="property-detail-title-row hero-enter delay-3"><span>{property.location}</span><strong>{property.price}</strong></div>
          </div>
        </section>
        <section className="property-detail-body section-space">
          <div className="shell property-detail-grid">
            <aside className="property-detail-aside reveal">
              <p className="eyebrow">At a glance</p>
              <div><span>Type</span><strong>{property.category}</strong></div>
              <div><span>Bedrooms</span><strong>{property.beds}</strong></div>
              <div><span>Bathrooms / use</span><strong>{property.baths}</strong></div>
              <div><span>Scale</span><strong>{property.area}</strong></div>
            </aside>
            <article className="property-detail-copy reveal reveal-delay">
              <p className="eyebrow">A closer look</p>
              <h2>A property worth a <em>conversation.</em></h2>
              <p className="lead-copy">{property.summary}</p>
              <p>A strong property decision connects the building, location, budget, timing, and the life or business objective behind the move. Pavneet can help evaluate those elements together and identify the questions that deserve answers before you proceed.</p>
              <div className="property-detail-actions">
                <a className="primary-button ink-button" href="/contact">Ask about this opportunity <ArrowUpRight /></a>
                <a className="line-link" href="/properties">Back to marketplace <ArrowUpRight /></a>
              </div>
              <div className="market-disclaimer"><span>Reference notice</span><p>This page is a design preview using public market reference information. It is not a representation that Pavneet is the listing agent. Availability, price, measurements, condition, features, and all material details must be confirmed through current source documents and appropriate professional review.</p></div>
            </article>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

export default function ContentPage({ slug }: { slug: string }) {
  switch (slug) {
    case "about": return <AboutPage />;
    case "services": return <ServicesPage />;
    case "properties": return <PropertiesPage />;
    case "neighbourhoods": return <NeighbourhoodsPage />;
    case "guides": return <GuidesPage />;
    case "buying-guide": return <StepGuide type="buy" />;
    case "selling-guide": return <StepGuide type="sell" />;
    case "contact": return <ContactPage />;
    case "privacy-policy": return <LegalPage type="privacy" />;
    case "terms": return <LegalPage type="terms" />;
    default: return null;
  }
}
