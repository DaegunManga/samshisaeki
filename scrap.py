import requests
from bs4 import BeautifulSoup
import json

def getMenu():
    target = "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blBI&pkid=682&os=24929782&qvt=0&query=%EB%8C%80%EA%B1%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%20%EA%B8%89%EC%8B%9D%EC%8B%9D%EB%8B%A8"
    response = requests.get(target)

    if response.status_code == 200:
        html = response.text
        bsObject = BeautifulSoup(html, "html.parser")
        menuList = {}
        dayList = []
        day = []
        for week in bsObject.select(".timeline_box"):
            dayList = week.select(".cm_date")
            for day in dayList:
                daykey = day.get_text()
                for list in week.select(".item_list"):
                    index = 0
                    for menu in list.select(".text"):
                        menuList.update({daykey + f"{index}": menu.get_text()})
                        index += 1

    return json.dumps(menuList, ensure_ascii=False)