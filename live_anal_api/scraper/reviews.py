from bs4 import BeautifulSoup   # For HTML parsing
import requests            # For HTTP requests
import datetime  # For date information
import json

from models import GenderClassifier

from AnalyseSentiment.AnalyseSentiment import AnalyseSentiment


class ReviewScraper:

    url = ''

    def __init__(self, url):
        self.url = url

    def scrapeIt(self):

        data = requests.get(self.url+"&showAllReviews=true")

        # print(data.text)

        model_obj = GenderClassifier()

        soup = BeautifulSoup(data.text, 'html.parser')
        app_name = soup.find("h1", {'class': "AHFaub"}).text
        app_category = soup.find("span", {'class': "T32cc UAO9ie"}).text
        app_installs = soup.find("span", {'class': "AYi5wd TBRnV"}).text

        # Get all the reviews
        scripts = soup.find_all("script")
        reviews = []

        sent_obj = AnalyseSentiment()

        total_male_reviews = 0
        total_female_reviews = 0
        total_male_positive_reviews = 0
        total_female_positive_reviews = 0

        for script in scripts[30:]:

            # check if this script is the one we want
            thisScript = str(script.extract())

            if(thisScript[66:71] == "ds:18"):
                obj = thisScript[91:-29]
                reviews_array = json.loads(obj)[0]

                for review in reviews_array:
                    userName = review[1][0]
                    rating = review[2]
                    content = review[4]

                    gender = model_obj.classify(userName.split(" ")[0])

                    data = sent_obj.Analyse(content)
                    sentiment = data['overall_sentiment_score']

                    if gender == "male":
                        total_male_reviews += 1

                        if sentiment > 0:
                            total_male_positive_reviews += 1
                    else:
                        total_female_reviews += 1

                        if sentiment > 0:
                            total_female_positive_reviews += 1

                    reviews.append({
                        'user_name': userName,
                        'rating': rating,
                        'content': content,
                        'gender': gender,
                    })

        return {
            'app_name': app_name,
            'app_category': app_category,
            'app_installs': app_installs,
            'reviews': reviews,
            'total_male_reviews': total_male_reviews,
            'total_male_positive_reviews': total_male_positive_reviews,
            'total_female_reviews': total_female_reviews,
            'total_female_positive_reviews': total_female_positive_reviews
        }
