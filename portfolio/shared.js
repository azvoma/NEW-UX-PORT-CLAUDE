// Shared nav HTML
const NAV = `
<nav>
  <a href="../index.html" class="nav-logo">Andrew<span>.</span></a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../case-studies.html">Case Studies</a></li>
    <li><a href="../index.html#about">About</a></li>
    <li><a href="../index.html#process">Process</a></li>
    <li><a href="mailto:azvoma@gmail.com" class="nav-cta">Contact</a></li>
  </ul>
</nav>`;

const FOOTER = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="../index.html" class="footer-logo">Andrew<span>.</span></a>
      <p>UX/UI Product Designer with 5+ years experience creating scalable digital products.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../case-studies.html">Case Studies</a></li>
        <li><a href="../index.html#about">About</a></li>
        <li><a href="../index.html#process">Process</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Get In Touch</h4>
      <ul>
        <li><a href="mailto:azvoma@gmail.com">azvoma@gmail.com</a></li>
        <li><a href="https://a2zee.uk" target="_blank">a2zee.uk</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">© 2026 Andrew Zvoma. All rights reserved.</div>
</footer>`;

const REVEAL_SCRIPT = `
<script>
const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),i*60); obs.unobserve(e.target); } });
}, {threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});
});
<\/script>`;
