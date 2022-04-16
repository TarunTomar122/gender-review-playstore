import scrapy
import json
from scrapy.http import Request
import pkgutil
import time


class Extractor(scrapy.Spider):

    name = "reviews_extractor"
    start_urls = ["https://play.google.com/store/apps/collection/cluster?clp=ogo1CAESC0dBTUVfQUNUSU9OGhwKFnJlY3NfdG9waWNfbzlVOEZRbGc4LTQQOxgDKgIIB1ICCAI%3D:S:ANO1ljK_km0&gsr=CjiiCjUIARILR0FNRV9BQ1RJT04aHAoWcmVjc190b3BpY19vOVU4RlFsZzgtNBA7GAMqAggHUgIIAg%3D%3D:S:ANO1ljL6B-Y"]

    def start_requests(self):
        for url in self.start_urls:
            yield Request(url=url, callback=self.parse, dont_filter=True)

    def parse(self, response):

        # Get all the cards with class "ImZGtf mpg5gc"
        cards = response.xpath('//div[@class="ImZGtf mpg5gc"]')

        # Get the link from a tag in cards
        for card in cards:
            link = "https://play.google.com" + \
                card.xpath('.//a/@href').extract_first()+"&showAllReviews=true"
            yield Request(link, callback=self.parse_app)

    def parse_app(self, response):

        app_name = response.xpath('//h1[@class="AHFaub"]')

        app_name = app_name.xpath('.//span/text()').extract_first()
        app_category = response.xpath(
            '//span[@class="T32cc UAO9ie"]/a/text()')[1].extract()
        app_installs = response.xpath(
            '//span[@class="AYi5wd TBRnV"]/span/text()').extract_first()

        # Get all the reviews

        scripts = response.xpath('//script')

        for script in scripts[30:]:

            # check if this script is the one we want
            thisScript = script.extract()

            if(thisScript[66:71] == "ds:18"):
                obj = thisScript[91:-29]
                reviews_array = json.loads(obj)[0]

                for review in reviews_array:
                    userName = review[1][0]
                    rating = review[2]
                    content = review[4]

                    yield {
                        'app_name': app_name,
                        'app_category': app_category,
                        'app_installs': app_installs,
                        'user_name': userName,
                        'rating': rating,
                        'content': content
                    }
