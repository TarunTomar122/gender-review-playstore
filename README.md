# gender-review-playstore

This is our SDE-PROJECT under Dr. Sumit Kalra.                                            
Research paper -> https://link.springer.com/article/10.1007/s10664-021-10080-8                                      
Doc link -> https://docs.google.com/document/d/1vRZpwwf8Zca_6X2SMfEjyicqOR3O9m-iWN7qoNu1CuY/edit

## Description

The main objective of this study was to understand gender biasing in android applications and create a tool to automatically provide developers with a complete gender analysis of the application based on google play store reviews. 

We started our work by choosing 7 categories of apps.
The categories chosen are as follows - 

- Art and design
- Books
- Communication
- Education
- Entertainment
- Health and fitness
- Games


Then we took the top 20 applications from each category and we scraped around 500 reviews from the google play store for each application which takes the means the total number of reviews scraped for the analysis was around 

                                                              20*7*500 = 70000


Once we collected the data we went ahead and used several different techniques to classify the users as either male or female based on their user_name. 
We used machine learning models like naive Bayes classifier and nltk toolkit to create a classifier for the gender. 

Next up we used several open source libraries and machine learning models to create a sentiment analysis model that could return the sentiment of the user review. 

Finally, we created a flask api that returns the complete analysis of the user reviews for any particular app that a developer wants. 
We have also created a frontend where we showed the general analysis from our data and provided a GUI to do analysis on a new application.


## System Architecture

## Team
| Name                                            | Year      | Department                       |
| ----------------------------------------------- | --------- | -------------------------------- |
| [Tarun Tomar](https://github.com/TarunTomar122) | 3rd Year | Computer Science And Engineering |
| [Neeraj Anand](https://github.com/neeraj-2) | 3rd Year | Computer Science And Engineering |
