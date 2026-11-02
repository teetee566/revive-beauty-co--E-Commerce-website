// REVIVE BEAUTY CO. — FLOATING BEAUTY CHAT

(function() {
    if (document.getElementById("revive-chat-launcher")) {
        return;
    }

    const style = document.createElement("style");

    style.textContent = `
        #revive-chat-launcher {
            position: fixed;
            bottom: 22px;
            right: 22px;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            border: none;
            background: #f8dce6;
            color: #263e32;
            font-size: 27px;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0,0,0,0.18);
            z-index: 9999;
        }

        #revive-chat-panel {
            position: fixed;
            bottom: 95px;
            right: 22px;
            width: min(365px, calc(100vw - 30px));
            height: min(490px, calc(100dvh - 120px));
            background: white;
            border: 1px solid #eee;
            border-radius: 14px;
            box-shadow: 0 8px 35px rgba(0,0,0,0.2);
            z-index: 9999;
            display: none;
            flex-direction: column;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }

        #revive-chat-panel.open {
            display: flex;
        }

        .revive-chat-top {
            background: #263e32;
            color: white;
            padding: 17px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .revive-chat-top button {
            background: none;
            color: white;
            border: none;
            font-size: 22px;
            cursor: pointer;
        }

        .revive-chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .revive-chat-bubble {
            padding: 11px 14px;
            border-radius: 13px;
            max-width: 85%;
            font-size: 13px;
            line-height: 1.5;
            white-space: pre-wrap;
        }

        .revive-chat-bubble.bot {
            background: #f8dce6;
            align-self: flex-start;
        }

        .revive-chat-bubble.user {
            background: #c9dfc5;
            align-self: flex-end;
        }

        .revive-chat-form {
            display: flex;
            border-top: 1px solid #eee;
        }

        .revive-chat-form input {
            flex: 1;
            min-width: 0;
            border: none;
            padding: 14px;
            font-size: 14px;
        }

        .revive-chat-form button {
            background: #263e32;
            color: white;
            border: none;
            padding: 0 18px;
            cursor: pointer;
        }

        .revive-chat-full {
            display: block;
            padding: 11px;
            text-align: center;
            color: #263e32;
            font-size: 12px;
            text-decoration: none;
            border-top: 1px solid #eee;
        }
    `;

    document.head.appendChild(style);

    const launcher = document.createElement("button");
    launcher.id = "revive-chat-launcher";
    launcher.type = "button";
    launcher.textContent = "💬";
    launcher.setAttribute("aria-label", "Open Beauty Assistant");

    const panel = document.createElement("section");
    panel.id = "revive-chat-panel";
    panel.setAttribute("aria-label", "Revive Beauty Assistant");

    panel.innerHTML = `
        <div class="revive-chat-top">
            <strong>Revive Beauty Assistant 💗</strong>
            <button type="button" id="revive-chat-close"
                    aria-label="Close chat">×</button>
        </div>

        <div class="revive-chat-messages"
             id="revive-floating-messages"
             role="log" aria-live="polite"></div>

        <form class="revive-chat-form" id="revive-floating-form">
            <input
                id="revive-floating-input"
                type="text"
                placeholder="Ask me anything..."
                aria-label="Your message"
                maxlength="300"
                required
            >
            <button type="submit">SEND</button>
        </form>

        <a class="revive-chat-full" href="beauty-chat.html">
            OPEN FULL BEAUTY ASSISTANT ↗
        </a>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const messages = document.getElementById(
        "revive-floating-messages"
    );

    const input = document.getElementById(
        "revive-floating-input"
    );

    function addMessage(text, sender) {
        const bubble = document.createElement("div");

        bubble.className = "revive-chat-bubble " + sender;
        bubble.textContent = text;

        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    }

    launcher.addEventListener("click", () => {
        panel.classList.toggle("open");

        if (panel.classList.contains("open")) {
            input.focus();
        }
    });

    document.getElementById("revive-chat-close")
        .addEventListener("click", () => {
            panel.classList.remove("open");
            launcher.focus();
        });

    document.getElementById("revive-floating-form")
        .addEventListener("submit", event => {
            event.preventDefault();

            const message = input.value.trim();

            if (!message) return;

            addMessage(message, "user");
            addMessage(ReviveAssistant.reply(message), "bot");

            input.value = "";
        });

    addMessage(ReviveAssistant.welcome, "bot");
})();
