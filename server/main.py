from fastapi import FastAPI

import requests
from bs4 import BeautifulSoup

app = FastAPI()


@app.get("/")
def read_root():
  return get_food()


def get_food():
  target = "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blBI&pkid=682&os=24929782&qvt=0&query=%EB%8C%80%EA%B1%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%20%EA%B8%89%EC%8B%9D%EC%8B%9D%EB%8B%A8"
  response = requests.get(target)

  if response.status_code == 200:
    html = response.text
    bsObject = BeautifulSoup(html, "html.parser")

    lists = []

    for daily_meal in bsObject.select(".timeline_box"):
      data = {}
      menulist = []

      data['date'] = daily_meal.select_one(".cm_date").get_text().strip()

      for name in daily_meal.select_one('.item_list').select(".item"):
        menulist.append(name.select_one(".text").get_text())

      data['menu'] = menulist
      lists.append(data)

    return lists
