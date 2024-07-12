from rake_nltk import Rake

# Initialize the RAKE object
rake_nltk_var = Rake()

# Sample text for keyword extraction
text = """
what is the impact of climate change on pollinators
"""

# Extract keywords by passing the text
rake_nltk_var.extract_keywords_from_text(text)

# Get the ranked phrases with their scores
keyword_extracted = rake_nltk_var.get_ranked_phrases_with_scores()

# Print the keywords and their scores
for score, keyword in keyword_extracted:
    print(f"{keyword}: {score}")