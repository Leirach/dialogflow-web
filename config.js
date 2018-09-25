export default {
    app: {
        token: "300faf2659eb4bd1ad4149de7793a21c", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: false // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Hola, pregúntame algo para comenzar",
            welcomeDescription: `Puedes escribir "Hola" por ejemplo.`,
            offlineTitle: "¡Oh, no!",
            offlineDescription: "Parece que no estas conectado a internet, esta página requeiere una conexión a internet para procesar las preguntas",
            queryTitle: "Pregúntame algo...",
            voiceTitle: "Te escucho..."
        },
        settings: {
            speechLang: "es-MX", // <- output language
            recognitionLang: "es-MX" // <- input(recognition) language
        }
    }
}