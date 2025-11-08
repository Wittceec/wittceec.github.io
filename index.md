---
layout: splash
permalink: /
title: "Christopher Wittman"
excerpt: "Automation-first data center operations leader"
author_profile: true
header:
  overlay_color: "#050608"
  overlay_filter: 0.55
  overlay_image: /assets/images/hero-grid.svg
  cta_label: "View Projects"
  cta_url: "/projects/"
  cta_class: "btn--primary"
---

<section class="cw-section cw-hero-panel">
  <div class="cw-hero-content">
    <p class="cw-eyebrow">Data Center Operations · Automation · Observability</p>
    <h1>Keeping healthcare infrastructure fast, resilient, and boring (the good kind).</h1>
    <p>I close the gap between facilities and automation — Power Automate, PowerShell, Python, AD, and the network gear keeping it all moving. I build the runbooks, dashboards, and bots so the team can focus on the next outage before it happens.</p>
    <div class="cw-hero-actions">
      <a class="btn btn--primary" href="/projects/">View Projects</a>
      <a class="btn" href="/resume.docx">Download Resume</a>
    </div>
  </div>
  <div class="cw-hero-card">
    <p class="cw-eyebrow">Recent wins</p>
    <ul>
      <li>Digitized visitor onboarding with Power Automate approvals and Teams notifications.</li>
      <li>Documented on-call runbooks so night-shift techs can resolve the usual suspects quickly.</li>
      <li>Automated ServiceNow triage to keep facilities, security, and ops in the same thread.</li>
    </ul>
  </div>
</section>

<section class="cw-section cw-stats">
  <article>
    <p class="cw-stat-value">Data center</p>
    <p class="cw-stat-label">Power, cooling, and vendor coordination</p>
  </article>
  <article>
    <p class="cw-stat-value">Automation</p>
    <p class="cw-stat-label">Power Platform, PowerShell, Python</p>
  </article>
  <article>
    <p class="cw-stat-value">Service desk</p>
    <p class="cw-stat-label">ServiceNow workflows, shift handoffs</p>
  </article>
  <article>
    <p class="cw-stat-value">Security</p>
    <p class="cw-stat-label">Visitor vetting, access reviews, auditing</p>
  </article>
</section>

<section class="cw-section cw-focus">
  <div class="cw-focus-card">
    <h2>Ops focus</h2>
    <ul>
      <li>Modernize legacy ticketing with adaptive routing and metrics.</li>
      <li>Automate runbooks that mix Power Automate, Graph API, and PowerShell.</li>
      <li>Keep networking & identity baselines in sync across Linux + Windows.</li>
      <li>Turn tribal knowledge into dashboards and self-service tooling.</li>
    </ul>
  </div>
  <div class="cw-focus-card">
    <h2>Toolkit</h2>
    <div class="cw-tag-grid">
      <span>Power Automate</span>
      <span>Power Apps</span>
      <span>PowerShell</span>
      <span>Python</span>
      <span>SharePoint</span>
      <span>Teams</span>
      <span>ServiceNow</span>
      <span>Active Directory</span>
      <span>Azure</span>
      <span>Microsoft 365</span>
      <span>Networking</span>
      <span>Linux</span>
    </div>
  </div>
</section>

<section class="cw-section">
  <div class="cw-section-heading">
    <h2>Recent projects</h2>
    <p>Automation, immersive visualizations, and practical tooling that ships fast.</p>
  </div>
  <div class="cw-project-grid">
    <article>
      <div class="cw-card-eyebrow">Python · TUI · Linux</div>
      <h3>Networking TUI</h3>
      <p>Unified terminal UI for Linux network ops: interfaces, diagnostics, packet captures, and CSV exports.</p>
      <div class="cw-card-tags">
        <span>curses</span><span>asyncio</span><span>net-utils</span>
      </div>
      <a class="cw-card-link" href="https://github.com/Wittceec/net-tui">View repository →</a>
    </article>
    <article>
      <div class="cw-card-eyebrow">Power Platform · Automation</div>
      <h3>Receptionist Management & Check-In</h3>
      <p>Power Apps + Dataverse solution that registers visitors, routes approvals, and pings hosts when badges print.</p>
      <div class="cw-card-tags">
        <span>Power Apps</span><span>Dataverse</span><span>Teams</span>
      </div>
      <a class="cw-card-link" href="/projects/#receptionist-management-check-in-automation">Read overview →</a>
    </article>
    <article>
      <div class="cw-card-eyebrow">PowerShell · Outlook</div>
      <h3>EmailSuite Automation</h3>
      <p>Template-driven IT comms tool that parses change data, swaps tokens in HTML/MSG, and drafts polished alerts.</p>
      <div class="cw-card-tags">
        <span>PowerShell</span><span>Templates</span><span>Automation</span>
      </div>
      <a class="cw-card-link" href="/projects/#emailsuite-automation-project">Read overview →</a>
    </article>
    <article>
      <div class="cw-card-eyebrow">Three.js · GSAP</div>
      <h3>Interactive Resume Center</h3>
      <p>3D data center experience showcasing resume highlights with spatial navigation and motion design.</p>
      <div class="cw-card-tags">
        <span>3D</span><span>GSAP</span><span>Storytelling</span>
      </div>
      <a class="cw-card-link" href="https://github.com/Wittceec/Resume_Center">View repository →</a>
    </article>
  </div>
</section>

<section class="cw-section cw-posts">
  <div class="cw-section-heading">
    <h2>Field notes</h2>
    <p>Hands-on walkthroughs and retros on the automations that saved the night shift.</p>
  </div>
  {% assign featured_posts = site.posts | slice: 0, 2 %}
  {% if featured_posts.size > 0 %}
    <div class="cw-post-grid">
      {% for post in featured_posts %}
        <article>
          <p class="cw-card-eyebrow">{{ post.date | date: "%b %Y" }}</p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
          <a class="cw-card-link" href="{{ post.url | relative_url }}">Read story →</a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>No posts yet — first write-up coming soon.</p>
  {% endif %}
</section>

<section class="cw-section cw-cta">
  <div>
    <h2>Let’s automate the boring parts.</h2>
    <p>Need resilient automation across Power Platform, scripting, and infrastructure? I love pairing with ops teams that want to move faster without breaking things.</p>
  </div>
  <div class="cw-cta-actions">
    <a class="btn btn--primary" href="mailto:chris@example.com">Start a conversation</a>
    <a class="btn" href="https://www.linkedin.com/in/christopher-wittman">Connect on LinkedIn</a>
  </div>
</section>
