from operator import index
from urllib import request
import requests
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json

target = "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blBI&pkid=682&os=24929782&qvt=0&query=%EB%8C%80%EA%B1%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%20%EA%B8%89%EC%8B%9D%EC%8B%9D%EB%8B%A8"

response = requests.get(target)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    source = soup.select_one('.item_list')


# bsObject = BeautifulSoup(html, "html.parser")
# idx = 0;
# menulist = {}
# for list in bsObject.select(".item"):
#     for menu in list.select(".text"):
        # menulist[idx] = menu.get_text()
#         idx+=1
# 아래 저거 리턴하면 됨
# print(json.dumps(menulist, ensure_ascii=False))

bsObject = BeautifulSoup(html, "html.parser")
menulist = {}
for week in bsObject.select(".timeline_box"):
    day = week.select(".cm_date")
    print(day)