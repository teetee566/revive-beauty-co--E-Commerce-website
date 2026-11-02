// REVIVE BEAUTY CO. — VIRTUAL BEAUTY ASSISTANT

const ReviveAssistant = {
    welcome:
        "Hey beautiful! 💗 Welcome to Revive Beauty Co. " +
        "I'm your virtual beauty assistant. " +
        "Need help finding your perfect lip shade?",

    suggestions: [
        "Recommend a lipstick",
        "Build a lip combo",
        "Virtual try-on",
        "Personalised engraving",
        "Lipstick refills"
    ],

    reply(message) {
        const q = message.toLowerCase().trim();

        if (!q) {
            return "Type a question and I'll do my best to help! 💗";
        }

        if (q.includes("hello") || q.includes("hi") ||
            q.includes("hey")) {
            return this.welcome;
        }

        if (q.includes("combo") || q.includes("bundle")) {
            return "💋 Create your perfect lip combo for £40! " +
                "Choose one lipstick, one lip liner and one gloss. " +
                "That's a £5 saving compared with buying them separately. " +
                "Visit our Lip Combo Studio to create yours!";
        }

        if (q.includes("try-on") || q.includes("camera") ||
            q.includes("selfie")) {
            return "📸 Our Virtual Lip Try-On lets you experiment " +
                "with all five lipstick shades! " +
                "You can use your live camera or upload a selfie. " +
                "Visit our Virtual Try-On Studio to get started.";
        }

        if (q.includes("engraving") || q.includes("personalise") ||
            q.includes("personalized") || q.includes("name on")) {
            return "🎀 Make your lipstick uniquely yours! " +
                "Our personalised engraving service costs an extra £5. " +
                "You can preview your name, initials or short message " +
                "on your lipstick case before adding it to your bag.";
        }

        if (q.includes("refill") || q.includes("reusable")) {
            return "♻️ Our lipstick cases are designed to be reusable! " +
                "A lipstick refill costs £13, saving you £6 " +
                "compared with buying a new £19 lipstick.";
        }

        if (q.includes("liner")) {
            return "✏️ Our lip liners cost £10 and come in " +
                "Soft Nude, Rosewood and Deep Berry. " +
                "They're perfect for defining your lip shape!";
        }

        if (q.includes("gloss")) {
            return "✨ Our lip glosses cost £16. " +
                "Choose Crystal Clear for a glossy finish " +
                "or Rose Glow for a soft pink shine.";
        }

        if (q.includes("berry") || q.includes("bold") ||
            q.includes("dark")) {
            return "💜 If you love a bold lip, try Berry Bliss! " +
                "It's our deep berry lipstick shade. " +
                "Pair it with Deep Berry liner and Rose Glow gloss.";
        }

        if (q.includes("red")) {
            return "❤️ Velvet Red is our classic red lipstick! " +
                "It's a beautiful statement shade. " +
                "Try it virtually to see how it looks on you.";
        }

        if (q.includes("nude") || q.includes("natural")) {
            return "🤎 Bare Bloom is our nude lipstick shade. " +
                "Pair it with Soft Nude liner and Crystal Clear gloss " +
                "for a natural-looking lip combo.";
        }

        if (q.includes("pink") || q.includes("soft")) {
            return "🌸 Petal Kiss is our soft pink lipstick, " +
                "while Rose Revival is a dusty rose shade. " +
                "Try both virtually to find your favourite!";
        }

        if (q.includes("recommend") || q.includes("shade") ||
            q.includes("lipstick") || q.includes("suit me")) {
            return "💄 I'd love to help! For a natural look, " +
                "try Bare Bloom. For a soft pink, choose Petal Kiss. " +
                "For a romantic rose shade, try Rose Revival. " +
                "For something bold, explore Velvet Red or Berry Bliss. " +
                "Our Virtual Try-On can help you compare them!";
        }

        if (q.includes("delivery") || q.includes("shipping")) {
            return "📦 Our demonstration checkout offers " +
                "standard delivery for £3.99 or express delivery " +
                "for £5.99. No real orders are processed.";
        }

        if (q.includes("price") || q.includes("cost") ||
            q.includes("how much")) {
            return "💗 Our prices are: Lipstick £19, " +
                "Lip Liner £10, Lip Gloss £16, " +
                "Lip Combo £40, Lipstick Refill £13 " +
                "and optional engraving +£5.";
        }

        if (q.includes("checkout") || q.includes("basket") ||
            q.includes("order")) {
            return "🛍️ Add your favourites to your bag, " +
                "then proceed to checkout. " +
                "This is a university demonstration website, " +
                "so no real payments or orders are processed.";
        }

        if (q.includes("thank")) {
            return "You're so welcome, beautiful! 💗 " +
                "I'm always here to help you find your perfect lip look.";
        }

        return "💗 I'd love to help with that! " +
            "I can answer questions about lipstick shades, " +
            "lip combos, engraving, virtual try-on, refills, " +
            "delivery and shopping. What would you like to know?";
    }
};
