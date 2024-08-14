from flask import Flask, request, jsonify
from extract_articles import search_science_direct, get_article_pdf
from vectara import vectara_upload, vectara_query
from keyword_extraction import extract_keywords

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, this is main page <h1>Hello!<h1>'


if __name__ == '__main__':
    app.run()


'''
@app.route('/process', methods=['POST'])
def process_request():
    data = request.json
    query = data.get('query')

    if not query:
        return jsonify({"error": "Query parameter is required"}), 400

    try:
        # Step 1: Search ScienceDirect
        keywords = extract_keywords(query)
        search_results = search_science_direct(keywords)
        # Assuming you get article IDs from search results
        article_doi = search_results[0]
        article_title = search_results[1]

        # Step 2: Get PDF
        pdf_blob = get_article_pdf(article_doi)

        # Step 3: Upload to Vectara
        upload_response = vectara_upload(article_title, pdf_blob)

        return jsonify(upload_response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
'''
