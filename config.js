export default {
    app: {
        token: "300faf2659eb4bd1ad4149de7793a21c", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: false // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Hello, ask something to get started",
            welcomeDescription: `You can type "Hello" for example. Or just press on the microphone to talk`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "es-MX", // <- output language
            recognitionLang: "es-MX" // <- input(recognition) language
        }
    }
}