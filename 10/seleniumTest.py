from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
#创建webdriver
driver = webdriver.Chrome(options=chrome_options)
driver.get("http://127.0.0.1:5000")
html=driver.page_source
soup=BeautifulSoup(html,"lxml")
hMsg=soup.find("span",attrs={"id":"hMsg"}).text
print(hMsg)
jMsg=soup.find("span",attrs={"id":"jMsg"}).text
print(jMsg)
sMsg=soup.find("span",attrs={"id":"sMsg"}).text
print(sMsg)
