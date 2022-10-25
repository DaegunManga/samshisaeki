from tabnanny import check
import requests
from bs4 import BeautifulSoup
import json
def findDOW(daylen):
    result = 0
    if daylen == 11:
        result = 8
    elif daylen == 12:
        result = 9 
    elif daylen == 16:
        result = 8
    else:
        result = 9
    return result

def checkWD(curDay, day):
    checklist = list(day)
    check = checklist[len(checklist)-1] 
    # print(f"{curDay} || {check}") 
    if curDay == check:
        return True
    else:
        return False

def getMenu():
    target = "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blBI&pkid=682&os=24929782&qvt=0&query=%EB%8C%80%EA%B1%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%20%EA%B8%89%EC%8B%9D%EC%8B%9D%EB%8B%A8"
    response = requests.get(target)

    if response.status_code == 200:
        html = response.text
        bsObject = BeautifulSoup(html, "html.parser")
        List = {}
        menuList = {}
        dayTime = []
        day = []

        for Oneday in bsObject.select(".timeline_box"):
            dayTime = Oneday.select(".cm_date")
            for idx, day in enumerate(dayTime):
                daykey = day.get_text()
                for dayList in Oneday.select(".item_list"): 
                    daymenu = []
                    for index , menu in enumerate(dayList.select(".text")):
                        daymenu.append({index:menu.get_text()})           
                    menuList[daykey] = daymenu
                # if checkWD(daykey[0:findDOW(len(daykey))], menuList):
                    List[daykey[0:findDOW(len(daykey))]] = menuList
                
    return json.dumps(List, ensure_ascii=False)

if __name__ == '__main__':
    print(getMenu())
    # getMenu()