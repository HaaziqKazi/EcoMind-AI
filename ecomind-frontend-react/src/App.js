import React, { useState } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const extractKeywords = text => {
  const stopwords = [
    'a',
    "a's",
    'able',
    'about',
    'above',
    'according',
    'accordingly',
    'across',
    'actually',
    'after',
    'afterwards',
    'again',
    'against',
    "ain't",
    'all',
    'allow',
    'allows',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'am',
    'among',
    'amongst',
    'an',
    'and',
    'another',
    'any',
    'anybody',
    'anyhow',
    'anyone',
    'anything',
    'anyway',
    'anyways',
    'anywhere',
    'apart',
    'appear',
    'appreciate',
    'appropriate',
    'are',
    "aren't",
    'around',
    'as',
    'aside',
    'ask',
    'asking',
    'associated',
    'at',
    'available',
    'away',
    'awfully',
    'b',
    'be',
    'became',
    'because',
    'become',
    'becomes',
    'becoming',
    'been',
    'before',
    'beforehand',
    'behind',
    'being',
    'believe',
    'below',
    'beside',
    'besides',
    'best',
    'better',
    'between',
    'beyond',
    'both',
    'brief',
    'but',
    'by',
    'c',
    "c'mon",
    "c's",
    'came',
    'can',
    "can't",
    'cannot',
    'cant',
    'cause',
    'causes',
    'certain',
    'certainly',
    'changes',
    'clearly',
    'co',
    'com',
    'come',
    'comes',
    'concerning',
    'consequently',
    'consider',
    'considering',
    'contain',
    'containing',
    'contains',
    'corresponding',
    'could',
    "couldn't",
    'course',
    'currently',
    'd',
    'definitely',
    'described',
    'despite',
    'did',
    "didn't",
    'different',
    'do',
    'does',
    "doesn't",
    'doing',
    "don't",
    'done',
    'down',
    'downwards',
    'during',
    'e',
    'each',
    'edu',
    'eg',
    'eight',
    'either',
    'else',
    'elsewhere',
    'enough',
    'entirely',
    'especially',
    'et',
    'etc',
    'even',
    'ever',
    'every',
    'everybody',
    'everyone',
    'everything',
    'everywhere',
    'ex',
    'exactly',
    'example',
    'except',
    'f',
    'far',
    'few',
    'fifth',
    'first',
    'five',
    'followed',
    'following',
    'follows',
    'for',
    'former',
    'formerly',
    'forth',
    'four',
    'from',
    'further',
    'furthermore',
    'g',
    'get',
    'gets',
    'getting',
    'given',
    'gives',
    'go',
    'goes',
    'going',
    'gone',
    'got',
    'gotten',
    'greetings',
    'h',
    'had',
    "hadn't",
    'happens',
    'hardly',
    'has',
    "hasn't",
    'have',
    "haven't",
    'having',
    'he',
    "he's",
    'hello',
    'help',
    'hence',
    'her',
    'here',
    "here's",
    'hereafter',
    'hereby',
    'herein',
    'hereupon',
    'hers',
    'herself',
    'hi',
    'him',
    'himself',
    'his',
    'hither',
    'hopefully',
    'how',
    'howbeit',
    'however',
    'i',
    "i'd",
    "i'll",
    "i'm",
    "i've",
    'ie',
    'if',
    'ignored',
    'immediate',
    'in',
    'inasmuch',
    'inc',
    'indeed',
    'indicate',
    'indicated',
    'indicates',
    'inner',
    'insofar',
    'instead',
    'into',
    'inward',
    'is',
    "isn't",
    'it',
    "it'd",
    "it'll",
    "it's",
    'its',
    'itself',
    'j',
    'just',
    'k',
    'keep',
    'keeps',
    'kept',
    'know',
    'known',
    'knows',
    'l',
    'last',
    'lately',
    'later',
    'latter',
    'latterly',
    'least',
    'less',
    'lest',
    'let',
    "let's",
    'like',
    'liked',
    'likely',
    'little',
    'look',
    'looking',
    'looks',
    'ltd',
    'm',
    'mainly',
    'many',
    'may',
    'maybe',
    'me',
    'mean',
    'meanwhile',
    'merely',
    'might',
    'more',
    'moreover',
    'most',
    'mostly',
    'much',
    'must',
    'my',
    'myself',
    'n',
    'name',
    'namely',
    'nd',
    'near',
    'nearly',
    'necessary',
    'need',
    'needs',
    'neither',
    'never',
    'nevertheless',
    'new',
    'next',
    'nine',
    'no',
    'nobody',
    'non',
    'none',
    'noone',
    'nor',
    'normally',
    'not',
    'nothing',
    'novel',
    'now',
    'nowhere',
    'o',
    'obviously',
    'of',
    'off',
    'often',
    'oh',
    'ok',
    'okay',
    'old',
    'on',
    'once',
    'one',
    'ones',
    'only',
    'onto',
    'or',
    'other',
    'others',
    'otherwise',
    'ought',
    'our',
    'ours',
    'ourselves',
    'out',
    'outside',
    'over',
    'overall',
    'own',
    'p',
    'particular',
    'particularly',
    'per',
    'perhaps',
    'placed',
    'please',
    'plus',
    'possible',
    'presumably',
    'probably',
    'provides',
    'q',
    'que',
    'quite',
    'qv',
    'r',
    'rather',
    'rd',
    're',
    'really',
    'reasonably',
    'regarding',
    'regardless',
    'regards',
    'relatively',
    'respectively',
    'right',
    's',
    'said',
    'same',
    'saw',
    'say',
    'saying',
    'says',
    'second',
    'secondly',
    'see',
    'seeing',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'seen',
    'self',
    'selves',
    'sensible',
    'sent',
    'serious',
    'seriously',
    'seven',
    'several',
    'shall',
    'she',
    'should',
    "shouldn't",
    'since',
    'six',
    'so',
    'some',
    'somebody',
    'somehow',
    'someone',
    'something',
    'sometime',
    'sometimes',
    'somewhat',
    'somewhere',
    'soon',
    'sorry',
    'specified',
    'specify',
    'specifying',
    'still',
    'sub',
    'such',
    'sup',
    'sure',
    't',
    "t's",
    'take',
    'taken',
    'tell',
    'tends',
    'th',
    'than',
    'thank',
    'thanks',
    'thanx',
    'that',
    "that's",
    'thats',
    'the',
    'their',
    'theirs',
    'them',
    'themselves',
    'then',
    'thence',
    'there',
    "there's",
    'thereafter',
    'thereby',
    'therefore',
    'therein',
    'theres',
    'thereupon',
    'these',
    'they',
    "they'd",
    "they'll",
    "they're",
    "they've",
    'think',
    'third',
    'this',
    'thorough',
    'thoroughly',
    'those',
    'though',
    'three',
    'through',
    'throughout',
    'thru',
    'thus',
    'to',
    'together',
    'too',
    'took',
    'toward',
    'towards',
    'tried',
    'tries',
    'truly',
    'try',
    'trying',
    'twice',
    'two',
    'u',
    'un',
    'under',
    'unfortunately',
    'unless',
    'unlikely',
    'until',
    'unto',
    'up',
    'upon',
    'us',
    'use',
    'used',
    'useful',
    'uses',
    'using',
    'usually',
    'uucp',
    'v',
    'value',
    'various',
    'very',
    'via',
    'viz',
    'vs',
    'w',
    'want',
    'wants',
    'was',
    "wasn't",
    'way',
    'we',
    "we'd",
    "we'll",
    "we're",
    "we've",
    'welcome',
    'well',
    'went',
    'were',
    "weren't",
    'what',
    "what's",
    'whatever',
    'when',
    'whence',
    'whenever',
    'where',
    "where's",
    'whereafter',
    'whereas',
    'whereby',
    'wherein',
    'whereupon',
    'wherever',
    'whether',
    'which',
    'while',
    'whither',
    'who',
    "who's",
    'whoever',
    'whole',
    'whom',
    'whose',
    'why',
    'will',
    'willing',
    'wish',
    'with',
    'within',
    'without',
    "won't",
    'wonder',
    'would',
    "wouldn't",
    'x',
    'y',
    'yes',
    'yet',
    'you',
    "you'd",
    "you'll",
    "you're",
    "you've",
    'your',
    'yours',
    'yourself',
    'yourselves',
    'z',
    'zero',
  ];
  const words = text.toLowerCase().match(/\b(\w+)\b/g);
  const filteredKeywords = words.filter(word => !stopwords.includes(word));
  return filteredKeywords;
};

// Leftmost Sidebar component
const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-item"><i className="fa fa-comments"></i></div>
    <div className="sidebar-item"><i className="fa fa-users"></i></div>
    <div className="sidebar-item"><i className="fa fa-cog"></i></div>
  </div>
);

// Chat List Panel component
const ChatItem = ({ name, lastMessage, time }) => (
  <div className="chat-item">
    <div className="chat-details">
      <p className="chat-name">{name}</p>
      <p className="chat-last-message">{lastMessage}</p>
    </div>
    <div className="chat-time">{time}</div>
  </div>
);

// Chat List component
const ChatList = () => (
  <div className="chat-list">
    <ChatItem name="Bee Population Decline" lastMessage="Due to insecticide..." time="2:14 PM"/>
    <ChatItem name="Global Temperatures" lastMessage="Over the last 4 decades..." time="10:25 AM"/>
    <ChatItem name="Cosmic Evolution" lastMessage="Some 15 billion years ago..." time="9:34 PM"/>
  </div>
);

// Chat window component
const ChatWindow = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const apiKey = '90493596c66adc955c2f9cb35812dc83';  
  const institutionToken = '53f0634cd8eae7422fb30357bdb99f86';  

  // Function to handle sending query to Science Direct and getting the response
  const handleSendQuery = async () => {
    const keywords = extractKeywords(query); // Assuming `extractKeywords` is defined
    const searchQuery = keywords.join(' ');

    const searchUrl = 'https://api.elsevier.com/content/search/sciencedirect';
    const searchHeaders = {
        'Accept': 'application/json',
        'X-ELS-APIKey': apiKey,
        'X-ELS-Insttoken': institutionToken
    };
    const searchParams = new URLSearchParams({
        query: searchQuery,
        count: 1  // Fetching only one article for simplicity
    });

    try {
        const searchResponse = await fetch(`${searchUrl}?${searchParams}`, { headers: searchHeaders });
        const searchData = await searchResponse.json();
        if (!searchResponse.ok) throw new Error(`Failed to fetch articles: ${searchResponse.status}`);

        const entry = searchData['search-results'].entry[0];
        const doi = entry['dc:identifier'].split('DOI:')[1];
        const title = entry['dc:title'];  // Extract the title of the article

        const pdfUrl = `https://api.elsevier.com/content/article/doi/${doi}?httpAccept=application/pdf`;
        const pdfHeaders = {
            'Accept': 'application/pdf',
            'X-ELS-APIKey': apiKey,
            'X-ELS-Insttoken': institutionToken
        };

        const pdfResponse = await fetch(pdfUrl, { headers: pdfHeaders });
        if (!pdfResponse.ok) throw new Error(`Failed to fetch PDF: ${pdfResponse.status}`);

        const pdfBlob = await pdfResponse.blob();
        console.log("PDF fetched successfully, ready to upload.");

        // Call the function to upload the PDF, using the article title as the file name
        await receivePdfBlob(pdfBlob, title);  // Pass the title for use as the file name
        await queryVectara(searchQuery);
        // setResponse();
    } catch (error) {
        console.error('Error:', error);
        setError(`Error: ${error.message}`);
        setResponse('');
    }
};

// This function uploads the PDF blob to Vectara, using the article title as the filename
async function receivePdfBlob(pdfBlob, filename) {
    const formData = new FormData();
    // Sanitize filename to ensure it's safe for use in file systems and URLs
    const safeFilename = filename.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';
    formData.append('file', pdfBlob, safeFilename);
    const response = await fetch('https://api.vectara.io/v2/corpora/new/upload_file', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'x-api-key': 'zut_63JHduOA7XZXlewPHuQOD7YuamOctBXBaAeuQA'
        },
        body: formData
    });
    if (!response.ok) {
        console.error('Upload failed', response.statusText);
    } else {
        const responseData = await response.json();
        console.log('Upload successful', responseData);
    }
}

// Assuming this function is part of a React component
const queryVectara = async (queryText) => {
  let data = JSON.stringify({
      "query": queryText,
      "search": {
          "corpora": [
              {
                  "custom_dimensions": {},
                  "lexical_interpolation": 0,
                  "semantics": "default",
                  "corpus_key": "new"
              }
          ],
      },
      "generation": {
          "response_language": "auto",
          "citations": {
              "style": "none",
              "url_pattern": "https://vectara.com/documents/{doc.id}",
              "text_pattern": "{doc.title}"
          },
          "enable_factual_consistency_score": true
      },
      "stream_response": false
  });

  let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': 'zut_63JHduOA7XZXlewPHuQOD7YuamOctBXBaAeuQA'
      },
      body: data
  };

  try {
      const response = await fetch('https://api.vectara.io/v2/query', config);
      if (!response.ok) {
          throw new Error(`Vectara API responded with ${response.status}`);
      }
      const responseData = await response.json();
      // Format the response data for readability
      const formattedResponse = formatVectaraResponse(responseData);
      setResponse(formattedResponse); // Display formatted response in UI
  } catch (error) {
      console.error('Failed to query Vectara:', error);
      setResponse(`Error querying Vectara: ${error.message}`);
  }
};

// Function to format the response into a readable format
const formatVectaraResponse = (responseData) => {
  let formattedResponse = `\n${responseData.summary}\n\n\n`;

  // responseData.search_results.forEach((result, index) => {
  //     formattedResponse += `Result ${index + 1}:\n`;
  //     formattedResponse += `Text: ${result.text}\n`;
  //     formattedResponse += `Score: ${result.score.toFixed(3)}\n`;
  //     formattedResponse += `Document Title: ${result.document_metadata.title}\n`;
  //     formattedResponse += `Document ID: ${result.document_id}\n`;
  //     formattedResponse += `Page: ${result.part_metadata.page}, Section: ${result.part_metadata.section}\n\n`;
  // });

  return formattedResponse;
};




  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>EcoMind AI Chatbot</h2>
      </div>
      <div className="chat-messages">
        <div className="message you">
          <p>{query}</p>
        </div>
        <div className="message response">
          <p>{response}</p>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask a question here" />
        <button className="send-button" onClick={handleSendQuery}><i className="fa fa-paper-plane"></i></button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};


// Main landing page component
const LandingPage = () => (
  <div className="dark">
    <Sidebar />
    <div className="chats-panel">
      <div className="header">
        <h2>My Chats</h2>
        <button className="add-chat">+</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <ChatList />
    </div>
    <ChatWindow />
  </div>
);

export default LandingPage;
