from selenium import webdriver
import time
from selenium.webdriver.common.by import By
try:
    driver = webdriver.Chrome()
    driver.get("http://127.0.0.1:5000")
    user = driver.find_element(By.NAME,"user")
    pwd=driver.find_element(By.NAME,"pwd")
    time.sleep(0.5)
    user.send_keys("xxx")
    time.sleep(0.5)
    pwd.send_keys("123")
    driver.find_element(By.XPATH,"//input[@type='submit']").click()
except Exception as err:
    print(err)
input("Strike any key to finish...")
driver.close()
