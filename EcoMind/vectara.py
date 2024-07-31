import requests
import json


def vectara_upload(title, pdf_blob):
    url = "https://api.vectara.io/v2/corpora/new/upload_file"

    payload = {}

    # don't change the first part that says file for the below
    # can only put one file at a time
    file = [
        ('file', (title, pdf_blob, 'application/pdf'))
    ]
    headers = {
        'Accept': 'application/json',
        'x-api-key': 'zwt_63JHdqcfMJ1Fb0hNh4KTPVhllvJlFozexIcPHA'
    }

    response_upload = requests.request("POST", url, headers=headers, data=payload, files=file)

    print(response_upload.text)


def vectara_query(query):
    url = "https://api.vectara.io/v2/query"

    payload = json.dumps({
        "query": query,
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


