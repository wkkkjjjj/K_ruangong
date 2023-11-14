from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
from selenium.webdriver.common.by import By

def spider(index):
    # print(driver.current_url)
    #根据标签查找
    trs=driver.find_elements(By.TAG_NAME,"tr")
    for i in range(1,len(trs)):#从第二行开始查找和提取,第一行为表头
        # print(i)
        tds=trs[i].find_elements(By.TAG_NAME,"td")
        model = tds[0].text
        price = tds[1].text
        print("%-16s%-16s" % (model, price))

    #查找option标签选项,option在加载body的时候就填进了select里
    select = driver.find_element(By.ID,"marks")
    options = select.find_elements(By.TAG_NAME,"option")
    #index为爬取选项的下标
    if index < len(options) - 1:
        index += 1
        options[index].click()
        time.sleep(3)
        spider(index)

'''
带选项的webdriver

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=chrome_options)
'''


driver =  webdriver.Chrome()
driver.get("http://127.0.0.1:5000")
spider(0)
driver.close()
