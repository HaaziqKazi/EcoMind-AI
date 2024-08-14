import keyword_extraction
import requests
import certifi

# Your API key and institutional token
API_KEY = '90493596c66adc955c2f9cb35812dc83'
INST_TOKEN = '53f0634cd8eae7422fb30357bdb99f86'

# Base URL for ScienceDirect Search API
BASE_URL = 'https://api.elsevier.com/content/search/sciencedirect'


def search_science_direct(query: str):

    keywords = keyword_extraction.extract_keywords(query)
    joined_keywords = ' '.join(keyword[1] for keyword in keywords)

    # Query parameters
    query_params = {
        'query': joined_keywords,
        'count': 1  # Number of results to return
    }

    # Headers including the API key and institutional token
    headers = {
        'X-ELS-APIKey': API_KEY,
        'X-ELS-Insttoken': INST_TOKEN,
        'Accept': 'application/json'
    }

    # Make the request with SSL verification using certifi
    response = requests.get(BASE_URL, params=query_params, headers=headers, verify=certifi.where())

    # Check if the request was successful
    if response.status_code == 200:
        data = response.json()
        # Extract titles and DOIs from the results
        results = [(entry['dc:title'], entry['prism:doi']) for entry in data['search-results']['entry'] if 'prism:doi' in entry]
        return results
    else:
        print(f"Error: {response.status_code} - {response.reason}")
        return None


def get_article_pdf(doi: str):
    # Base URL for fetching the full-text article
    full_text_url = f'https://api.elsevier.com/content/article/doi/{doi}'

    # Headers including the API key and institutional token
    headers = {
        'X-ELS-APIKey': API_KEY,
        'X-ELS-Insttoken': INST_TOKEN,
        'Accept': 'application/pdf'
    }

    # Make the request to fetch the PDF
    response = requests.get(full_text_url, headers=headers, verify=certifi.where())

    # Check if the request was successful
    if response.status_code == 200:
        # Return the PDF content as a blob
        return response.content
    else:
        print(f"Error: {response.status_code} - {response.reason}")
        print(response.content)  # Print the full response content for debugging
        return None


def main():
    query = 'impact of climate change'
    results = search_science_direct(query)
    if results:
        print("DOIs found:")
        for title, doi in results:
            print(f"Title: {title}, DOI: {doi}")
            pdf_blob = get_article_pdf(doi)
            if pdf_blob:
                # Save the PDF blob to a file (for testing purposes)
                filename = f"{doi.replace('/', '_')}.pdf"
                with open(filename, "wb") as pdf_file:
                    pdf_file.write(pdf_blob)
                print(f"PDF for '{title}' has been saved as {filename}.")
            else:
                print(f"Could not retrieve PDF for DOI {doi}.")
    else:
        print("No DOIs found.")