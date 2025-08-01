document.addEventListener("DOMContentLoaded", function () {
  let asterism = document.querySelector('.asterism');
  if (!asterism) return;

  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let maxBrightness = 3.2;
    let minBrightness = 0.8;
    let scrollHeight = document.body.scrollHeight - window.innerHeight;

    let brightness = minBrightness + (maxBrightness - minBrightness) *
      (0.5 * (1 + Math.sin((scrollTop / scrollHeight) * 2 * Math.PI)));

    asterism.style.filter = `brightness(${brightness})`;
    // background-attachment: fixed handles position
  });

  const contentContainer = document.querySelector('.content-container');
  contentContainer.style.display = 'flex';
  contentContainer.style.justifyContent = 'center';
  contentContainer.style.alignItems = 'center';
});


window.addEventListener('load', function() {
    const contentContainer = document.querySelector('.content-container');

    // Center the content within the container.  Uses flexbox
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';
    contentContainer.style.alignItems = 'center';
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
    const chat = document.getElementById("chat-output");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const userMessage = input.value.trim();
        if (!userMessage) return;

        // 👉 Make the chat box visible when a question is submitted
        chat.style.display = 'block';

        // Append user message
        chat.innerHTML += `<div class="user"><strong>You:</strong> ${userMessage}</div>`;
        input.value = "";

        try {
            const res = await fetch("https://gpt4-paper-bot.onrender.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query: userMessage })
            });

            const data = await res.json();
            chat.innerHTML += `<div class="bot"><strong>Bot:</strong> ${data.response}</div>`;
            chat.scrollTop = chat.scrollHeight;

        } catch (error) {
            console.error("Error communicating with backend:", error);
            chat.innerHTML += `<div class="bot"><strong>Bot:</strong> Sorry, something went wrong.</div>`;
        }
    });
});



