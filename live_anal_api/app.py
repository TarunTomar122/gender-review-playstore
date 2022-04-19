from scraper import ReviewScraper

# obj = ReviewScraper(
#     "https://play.google.com/store/apps/details?id=com.t11.skyviewfree")

# print(obj.scrapeIt())
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/live-anal', methods=['POST'])
def get_reviews():

    try:
        # get url from the request body
        url = request.args.get("url")

        obj = ReviewScraper(url)

        return jsonify(obj.scrapeIt())

    except Exception as e:

        return jsonify({"error": str(e)})
