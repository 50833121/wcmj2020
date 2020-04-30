var tipuesearch = {"pages": [{'title': '網管', 'text': '', 'tags': '', 'url': '網管.html'}, {'title': 'W2 3.13', 'text': '此內容管理系統以 \xa0 https:..github.com.mdecourse.cmsimde \xa0 作為  submodule  運作 ,  可以選定對應的版本運作 , cmsimde  可以持續改版 ,  不會影響之前設為  submodule,  使用舊版  cmsimde  模組的內容管理相關運作 . \n 利用  cmsimde  建立靜態網誌方法 : \n 1. 在  github  建立倉儲 , git clone  到近端 \n 2. 參考 https:..github.com.mdecourse.newcms ,  加入除了  cmsimde  目錄外的所有內容 \n 以  git submodule add\xa0 https:..github.com.mdecourse.cmsimde \xa0cmsimde \n 建立  cmsimde  目錄 ,  並從  github  取下子模組內容 . \n 3. 在近端維護時 ,  更換目錄到倉儲中的  cmsimde,  以  python wsgi.py  啟動近端網際伺服器 . \n 動態內容編輯完成後 ,  以  generate_pages  轉為靜態內容 ,  以  git add commit  及  push  將內容推到遠端 . \n 之後若要以  git clone  取下包含  submodule  的所有內容 ,  執行 : \n git clone --recurse-submodules\xa0 https:..github.com.mdecourse.newcms.git \n', 'tags': '', 'url': 'W2 3.13.html'}, {'title': 'W3 3.20', 'text': 'terminology  專業術語、 particular  特別、 technical  技術、 application  應用、 \n software  軟體、 hardware  硬體、 firmwarre  韌體、 machine language  機器語言、 \n URL:Uniform Resourse Locator\xa0  統一資源定位、 command wundow  命令視窗、 submodule  子模組 \n 程式令 : \n Y:← 指 y 槽  Y:\\\xa0 \xa0← 表示 Y 槽的 root 根目錄  >  為回應符號 (prormptsign)\xa0 \\  為 blackslash  反斜線  dir 為顯示目錄內容的指令  cd tmp  表示 change directory  到指定的目錄  git 為分散式版次管理的指令名稱  git clone 表示要使用 git 對遠端的倉儲進行 clone 。 \n', 'tags': '', 'url': 'W3 3.20.html'}, {'title': 'W4 3.27', 'text': 'portable  可攜、 Assembly  執行機器速度快但對硬體的相容性差、 objective -c \n → 開發 iphone 的前一代程式、 compile  編譯、 interpret  解譯、 unix 電腦系統的一種、 shell  殼、 graphics  圖形、 device  物件、 interface  介面 \n ps.c++ → 加入物件功能的 C \n', 'tags': '', 'url': 'W4 3.27.html'}, {'title': 'W5 4.3', 'text': '掃墓 ~~ 休息 \n', 'tags': '', 'url': 'W5 4.3.html'}, {'title': 'W6 4.10', 'text': '大致講解 ↓ 的用法和規格 \n portable obs\xa0→ 直播軟體 \n meet.google.com→google  的視訊軟體 \n \xa0 \n', 'tags': '', 'url': 'W6 4.10.html'}, {'title': 'W7 4.17', 'text': 'abunta→ 遠端操控電腦、 asscii  美國標準交換資訊碼。 \xa0 \n tmp>wcmj2020>init.py\xa0 \xa0 更改網頁標題 \n', 'tags': '', 'url': 'W7 4.17.html'}, {'title': 'W8 4.24', 'text': '網站 push 的步驟 \n 1. 先把網站切成靜態 Home \n 2.git add 空格 .\xa0 \xa0→ 意思是跟電腦說現在要讀的東西 \n 3.git comit -m"add w□" → 跟電腦說你要讀的東西是什麼 \n 4.git push → 推上動態網頁 \n 讓我們實作一次分組，弄 meet.google.com 的實際操作。好讓下次上課可以線上上課。 \n', 'tags': '', 'url': 'W8 4.24.html'}, {'title': '笑話', 'text': '', 'tags': '', 'url': '笑話.html'}, {'title': '第一篇', 'text': '1.賓士要用什麼洗?\xa0 \xa0 \xa0洗面乳(台) \n 2.有一天，小明去找算命師卜掛，算命師跟他說:「你是不是在凌晨出生 \xa0」小明說:「對阿對阿你怎麼知道」因為凌晨1.~3.是丑時阿 \n 3. 醫生問小明：如果把你一邊耳朵割掉你會怎麼樣？ 小明：我會聽不見 醫生又問：那再割掉另一個耳朵呢？ 小明：我會看不見 醫生問他為什麼... 小明：因為我有戴眼鏡 \n 4. 把外勞關在家猜一個地名\xa0 \xa0 索馬利亞 \n 5. 為什麼衣索比亞沒有藥局\xa0 \xa0\xa0 因為醫生說空腹不能吃藥 \n 6.\xa0\xa0 有一天有個帥哥走在路上\xa0 \xa0 一個阿嬤突然上前搭訕說「帥哥，你超會搭耶」\xa0 \xa0 然後帥哥就冒煙了 \n 7. 有一個男病人去看醫生問說：為啥我的雞雞是螺旋狀醫生無解， 突然病人尿急想去上廁所上完時看到隔壁的人上完都抖一抖他就學著抖一抖， 結果就變直了回到診間 醫生超驚訝問他：怎麼變回來的？ 病人說：剛剛上完看到別人抖一抖，我也學他抖一抖就變直了！ 醫生：那你之前上完都怎麼做？ 病人：我之前都把他扭乾 \n 8.有一天一個老外來台灣玩， 走著，走著，那個老外突然很渴，就在那時，剛好看到路邊有人在賣有機蔬菜果汁，用生澀的國語跟老闆說：『請給我紅蘿蔔汁』老闆說：『好！好！請等一下！』老闆把一根一根的蘿蔔放進去機器裡。。。突然，碰！的ㄧ聲，後面有人發生車禍！老外轉過頭去看再轉回來對著老闆很驚訝的說：『Ｏｈ\u3000ｍｙ\u3000ｇｏｄ』老闆聽ㄌ很生氣ㄉ說：『我已經”尬”下去了！你還叫我”賣尬”』 \n 9.結婚前~結婚後 \n 往↓看： 他：太好了！我期盼的日子終於來臨了！我都等不及了！ 她：我可以反悔嗎？ 他：不，你甚至想都別想！ 她：你愛我嗎？ 他：當然！ 她：你會背叛我嗎？ 他：不會，你怎麼會有這種想法？ 她：你可以吻我一下嗎？ 他：當然，絕不可能只有一下！ 她：你有可能打我嗎？ 他：永遠不可能！ 她：我能相信你嗎？ 往上看↑ \n 10. \n 有一個英國人、法國人、美國人，英國人都會說：我們三個 \n 法國人都會說：吐司麵包\xa0 美國人都會說：還不快點 \n 有一天他麼三個去餐廳吃飯，服務生說：請問你們幾位？ \n 英國人說：我們三個 服務生說：你們要吃甚麼？ \n 法國人說：吐司麵包 這時，服務生覺得他們怪怪的就打電話給警察！ 警察問：你們幾位？ 英國人說：我們三個 警察又問：你們叫甚麼名子？ \n \n \n \n 英國人說：吐司麵包 警察說：你們在講，我就要開槍囉! 美國人說：還不快點！ \n \xa0 \n \xa0', 'tags': '', 'url': '第一篇.html'}]};