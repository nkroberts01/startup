# CS 260 Startup

# Pantry Recipes

Are you ever in the mood to cook a home-made meal and you can only seem to find recipes for which you're missing a couple key ingredients? Pantry Recipes is a personalized recipe finder. The database is dependent on users' contributions. The user can add new recipes, search all recipes in the database, or do a custom search based on the ingredients they have in their pantry. With opportunity in advertisements and potential pro-memberships, the possibilities of growth are endless.

The app begins in a login/register page which then takes you to the home page where you can select to search, look at your account settings, or your recipes. Within the search page, you can filter by your ingredients, what type of food, and what meal of the day you are looking for (breakfast, lunch, dinner). You can also add new recipes in the "my recipes" section.

Key Features:
  -Secure login
  -Ability to add recipes to database
  -Ability to search database with filters

<img width="237" alt="Screen Shot 2023-01-21 at 7 41 51 PM" src="https://user-images.githubusercontent.com/92897089/213898361-94c9a56b-252c-4dc2-ab1d-fb31a3600a9f.png">

<img width="248" alt="Screen Shot 2023-01-21 at 7 41 42 PM" src="https://user-images.githubusercontent.com/92897089/213898372-41051975-0d98-4f60-a5c5-53ef7b18d91a.png">

<img width="245" alt="Screen Shot 2023-01-21 at 7 42 02 PM" src="https://user-images.githubusercontent.com/92897089/213898380-62304fbd-c275-4200-9882-703bea1ee7f3.png">

<img width="239" alt="Screen Shot 2023-01-21 at 7 42 10 PM" src="https://user-images.githubusercontent.com/92897089/213898382-b4ed1c84-4521-402a-850f-bab139cd901d.png">

IP Address: 3.22.162.199

ssh -i /Users/nkroberts/Downloads/production.pem ubuntu@3.22.162.199

A-name records is a direct mapping of domain name to IP address, C-name Records map a domain name to another domain name and then to an IP address.

Caddy acts as a gateway to different web services, hosts web application files, and can enable HTTPS.
~/Caddyfile

Navigation through webpages is built entirely around hyperlinks. Subdomains can be added when deploying with the -s attribute along with the name for the subdomain.

CSS and HTML work together using selectors. Naming your HTML components and classes is important so that you can style them with CSS. Each type of object has specific attributes that you can edit to create whatever visual you please. 

Use the "link" in your html headers to connect it with CSS. <link href="" rel="stylesheet" integrity="" crossorigin="anonymous" />

Bootstrap allows for more styling within HTML. Specific class names correspond to pre-made bootstrap classes with style attributes. Include the following link to allow for bootstrap usage.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

"margin: 0 auto;" can be used to center an element.

You can create HTML elements in Javascript with the createElement('type') function. This is helpful for adding table rows when you have new information or under any specific conditions.

Insert text into elements with element.textContext = '...' or element.innerHTML = '...'

Reference specific HTML elements using the document.querySelector('#id') function
