const rake = require('rake-js');

// stopwords are the words in the query that will be ignored

function extractKeywords(query, stopwords) {
    // Extract keywords
    const keywordsExtracted = rake(query);

    // Print the keywords and their scores
    keywordsExtracted.forEach(keyword => {
        console.log(keyword);
    });

    return keywordsExtracted;
}

// Example usage
const query = `
Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language.
The ultimate objective of NLP is to read, decipher, understand, and make sense of the human languages in a manner that is valuable.
Most NLP techniques rely on machine learning to derive meaning from human languages.
`;

const extractedKeywords = extractKeywords(query, []);
console.log(extractedKeywords);