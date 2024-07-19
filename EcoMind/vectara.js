// upload
document.getElementById('fileInput').addEventListener('change', async function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Get the selected file
  
    if (!file) {
      alert('Please select a file first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('https://api.vectara.io/v2/corpora/new/upload_file', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'x-api-key': 'zut_63JHduOA7XZXlewPHuQOD7YuamOctBXBaAeuQA'
        },
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });


// query

let data = JSON.stringify({
    "query": "what is climate change",
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

fetch('https://api.vectara.io/v2/query', config)
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data));
})
.catch(error => {
    console.error(error);
});
