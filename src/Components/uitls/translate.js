const config = require("../config/config");
const {
  TranslateClient,
  TranslateTextCommand,
} = require("@aws-sdk/client-translate");

/**
 * Creates an Amazon Translate client.
 */
const createTranslateClient = () => {
  return new TranslateClient({
    region: config.AWS.REGION,
    credentials: {
      accessKeyId: config.AWS.ACCESS_KEY,
      secretAccessKey: config.AWS.SECRET_ACCESS_KEY,
    },
  });
};

// Create once and reuse
const translateClient = createTranslateClient();

/**
 * Translates text using Amazon Translate.
 *
 * @param {Object} params
 * @param {string} params.text
 * @param {string} [params.sourceLanguageCode="en"]
 * @param {string} [params.targetLanguageCode="fr"]
 *
 * @returns {Promise<{translatedText: string|null, awsResponse: Object}>}
 */
const translateText = async ({
  text,
  sourceLanguageCode = "en",
  targetLanguageCode = "fr",
} = {}) => {
  if (typeof text !== "string" || text.trim() === "") {
    throw new TypeError("text is required and must be a non-empty string.");
  }

  const command = new TranslateTextCommand({
    Text: text.trim(),
    SourceLanguageCode: sourceLanguageCode,
    TargetLanguageCode: targetLanguageCode,
  });

  try {
    const awsResponse = await translateClient.send(command);

    return {
      translatedText: awsResponse.TranslatedText || null,
      awsResponse,
    };
  } catch (error) {
    console.error("Amazon Translate Error:", error);
    throw error;
  }
};

module.exports = {
  translateText,
};
