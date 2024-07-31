from rake_nltk import Rake

# Initialize the RAKE object
rake_nltk_var = Rake()

def extract_keywords(query):

    # Extract keywords by passing the text
    rake_nltk_var.extract_keywords_from_text(query)

    # Get the ranked phrases with their scores
    keywords_extracted = rake_nltk_var.get_ranked_phrases_with_scores()

    # Print the keywords and their scores
    for score, keyword in keywords_extracted:
        print(f"{keyword}: {score}")

    return keywords_extracted