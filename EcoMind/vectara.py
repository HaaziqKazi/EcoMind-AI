import requests
import json

def vectara(api_key, sent_files):
    url = "https://api.vectara.io/v2/corpora/new/upload_file"

    payload={}

    # don't change the first part that says file for the below
    # can only put one file at a time
    files = [
      ('file', ('vectara_handbook', open(sent_files[0], 'rb'), 'application/octet-stream'))
    ]
    headers = {
      'Accept': 'application/json',
      'x-api-key': api_key
    }

    response_upload = requests.request("POST", url, headers=headers, data=payload, files=files)

    print(response_upload.text)


    url = "https://api.vectara.io/v2/query"

    payload = json.dumps({
      "query": "Am I allowed to bring pets to work?",
      "search": {
        "corpora": [
          {
            "custom_dimensions": {},
            "lexical_interpolation": 0,
            "semantics": "default",
            "corpus_key": "new"
          }
        ]
        },
      "stream_response": False
    })
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'zut_63JHduOA7XZXlewPHuQOD7YuamOctBXBaAeuQA'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)

    return response.text