document.addEventListener("DOMContentLoaded", function () {
  let asterism = document.querySelector('.asterism');
  if (!asterism) return;

  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let speed = 0.2; // Reduced for more natural motion
    let maxBrightness = 2.2;
    let minBrightness = 0.8;
    let scrollHeight = document.body.scrollHeight - window.innerHeight;

    let brightness = minBrightness + (maxBrightness - minBrightness) * (0.5 * (1 + Math.sin((scrollTop / scrollHeight) * 2 * Math.PI)));
    let yPosition = scrollTop * speed;

    asterism.style.backgroundPositionY = `${yPosition}px`;
    asterism.style.filter = `brightness(${brightness})`;
  });
});

window.addEventListener('load', function() {
  const contentContainer = document.querySelector('.content-container');

  if (document.body.classList.contains('front-page')) {
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';
    contentContainer.style.alignItems = 'center';
  } else {
    contentContainer.style.display = 'block';
    contentContainer.style.justifyContent = '';
    contentContainer.style.alignItems = '';
  }
});

document.querySelectorAll('.glow-hover').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.remove('fade-out');
    void el.offsetWidth; // force reflow
    el.classList.add('hover-active');
  });

  el.addEventListener('mouseleave', () => {
    setTimeout(() => {
      el.classList.remove('hover-active');
    }, 500); // Let the glow stay a bit longer
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const chat = document.getElementById('chat-output');
  const submit = document.getElementById('chat-submit');

  if (!form || !input || !chat) return;

  const PAPER_BOT_URL = 'https://kevinmacastro-paper-bot.onrender.com/chat';

  const paperMetadata = {
    McCarthy2019_GalAB_pp: {
      citation: 'McCarthy, Zheng & Guo (2019)',
      title: 'The Effects of Galaxy Assembly Bias on the Inference of Growth Rate from Redshift-Space Distortions',
      pdf: 'papers/McCarthy2019_GalAB_pp.pdf'
    },
    McCarthy2020_BNSM_pp: {
      citation: 'McCarthy et al. (2020)',
      title: 'McCarthy et al. (2020)',
      pdf: 'papers/McCarthy2020_BNSM_pp.pdf'
    },
    McCarthy2022_GalAB_Data_pp: {
      citation: 'McCarthy et al. (2022)',
      title: 'On the Constraints of Galaxy Assembly Bias in Velocity Space',
      pdf: 'papers/McCarthy2022_GalAB_Data_pp.pdf'
    },
    McCarthy2023_HaPK_pp: {
      citation: 'McCarthy, Zhai & Wang (2023)',
      title: 'McCarthy, Zhai & Wang (2023)',
      pdf: 'papers/McCarthy2023_HaPK_pp.pdf'
    }
  };

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) return;

    chat.style.display = 'block';
    chat.innerHTML = `
      <div class="user"><strong>Interlocutor:</strong> ${escapeHtml(query)}</div>
      <div class="bot">
        <strong>Research Assistant:</strong>
        <p>Searching my papers… The server may take up to a minute to wake.</p>
      </div>
    `;

    input.disabled = true;
    if (submit) submit.disabled = true;

    try {
      const response = await fetch(PAPER_BOT_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The assistant could not answer the question.');

      // Remove inline [SOURCE X] citations since we show a proper source list below.

      const cleanAnswer = data.answer.replace(/\s*\[(SOURCE[^\]]+)\]/g, '');

      const sources = data.sources.map(source => {
        const metadata = paperMetadata[source.paper] || {
          citation: source.paper,
          title: source.paper,
          pdf: '#'
        };

        const pages = source.page_start === source.page_end ? `p. ${source.page_start}` : `pp. ${source.page_start}–${source.page_end}`;

        const sourceNumber = Number(source.label.replace(/\D/g, ''));
        
        return `
         <div class="source-entry">
           <a href="${metadata.pdf}#page=${source.page_start}" target="_blank" rel="noopener">
             <strong>[${sourceNumber}] ${metadata.citation}</strong>, ${pages}
           </a>
           <span>${metadata.title}</span>
         </div>
        `;
      }).join('');

      chat.innerHTML = `
        <div class="user"><strong>Interlocutor:</strong> ${escapeHtml(query)}</div>
        <div class="bot">
          <strong>Research Assistant:</strong>
          <div class="answer-text">${renderAnswerWithCitations(data.answer,data.sources)}</div> 
          <h3>Sources</h3>
          <div class="source-list">${sources}</div> 
        </div>
      `;
    } catch (error) {
      console.error('Error communicating with backend:', error);
      chat.innerHTML += `
        <div class="bot">
          <strong>Research Assistant:</strong>
          Sorry, something went wrong: ${escapeHtml(error.message)}
        </div>
      `;
    } finally {
      input.disabled = false;
      if (submit) submit.disabled = false;
      input.value = '';
      input.focus();
      //chat.scrollTop = chat.scrollHeight;
    }
  });


function renderAnswerWithCitations(answer, sources) {

  const sourceMap = new Map();

  for (const source of sources) {
    const n = parseInt(source.label.replace(/\D/g,''),10);
    sourceMap.set(n, source);
  }

  let html = escapeHtml(answer);

  html = html.replace(/\[([^\]]*SOURCE[^\]]*)\]/g, function(match, inside){

    const nums = [...inside.matchAll(/SOURCE\s+(\d+)/g)].map(x=>parseInt(x[1],10));

    const links = nums.map(function(n){

      const source = sourceMap.get(n);
      if (!source) return n;

      const meta = paperMetadata[source.paper];

      return `<a class="inline-citation" href="${meta.pdf}#page=${source.page_start}" target="_blank" title="${meta.citation}, pp. ${source.page_start}-${source.page_end}">${n}</a>`;

    });

    return `[${links.join(", ")}]`;

  });

  return html.replace(/\n/g,"<br>");
}


  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
