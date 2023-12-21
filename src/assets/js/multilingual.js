var supportedLanguages = []
if (window.location.hostname == "foscos.fssai.gov.in") {
    supportedLanguages = ["hi", "en","ta", "te", "gu", "mr"];
}
else {
    //liveLang = ["hi", "gu", "te", "en"];
    supportedLanguages = ["hi", "bn", "mr", "ta", "te", "en", "gu"];
}

var translator = new linguistTranslator.TranslatorWidget({
    userLanguage: 'hi',
    rememberTranslationState: true,
    translatorConstructor: class EbsTranslator {
        translate = (text, from, to) => {
            return fetch('https://transq.ebslab.com/webtransX', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    source: from,
                    target: to,
                    format: 'text',
                    //eslint-disable-next-line camelcase
                    api_key: 'foscos',
                    cur_url: window.location.href
                }),
            })
                .then((r) => r.json())
                .then((rsp) => {
                    if (
                        typeof rsp === 'object' &&
                        rsp !== null &&
                        typeof rsp.translatedText === 'string'
                    ) {
                        return rsp.translatedText;
                    }
                    throw new TypeError('Unexpected response');
                })
        };
        translateBatch = (texts, from, to) =>
            Promise.all(texts.map((text) => this.translate(text, from, to)));
        getLengthLimit = () => 5000;
        getRequestsTimeout = () => 300;
        checkLimitExceeding = (text) => {
            const textLength = !Array.isArray(text)
                ? text.length
                : text.reduce((len, text) => len + text.length, 0);
            return textLength - this.getLengthLimit();
        };
        static isSupportedAutoFrom = () => false;
        // prettier-ignore
        static getSupportedLanguages = () => supportedLanguages;
    }
});
translator.enable();
