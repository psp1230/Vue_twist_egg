<template>
  <v-app id="inspire">
    <v-card>
      <v-tabs show-arrows>
        <v-tab> <v-icon left>mdi-account</v-icon>帳號問題 </v-tab>
        <v-tab> <v-icon left>mdi-lock</v-icon>消費問題 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>運送問題 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>商品問題 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>一番賞問題 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>退貨流程 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>問題回報 </v-tab>
        <v-tab> <v-icon left>mdi-access-point</v-icon>表單下載 </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h1>帳號問題</h1>
              <br />
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰要怎麼註冊成會員？</h2>
              <br />
              <p style="font-size:20px">
                A︰請在會員系統註冊或者使用Facebook登入，您在經過授權後輸入寄送必要資訊後即可成功註冊。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰會員要從哪裡登入？</h2>
              <br />
              <p style="font-size:20px">
                A︰您可以點選首頁上方登入按鈕進行登入。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰註冊成會員有什麼好處？</h2>
              <br />
              <p style="font-size:20px">
                A︰會員可使用紅利點數以及代幣，非會員則不可使用。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰我的資料會不會被別人知道？</h2>
              <br />
              <p style="font-size:20px">
                A︰本站將善盡保管職責，您的相關資訊僅作為記錄與寄送之用，本站承諾將不會挪作他用。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰沒辦法登入怎麼辦？</h2>
              <br />
              <p style="font-size:20px">
                A︰請您使用問題回報將詳細狀況告知客服人員，我們將盡速為您處理。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰我要怎麼修改資料？</h2>
              <br />
              <p style="font-size:20px">
                A︰您可以透過會員專區中的資料編輯來進行完善或修改。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰忘記帳號怎麼辦？</h2>
              <br />
              <p style="font-size:20px">
                A︰您可以使用問題回報告知您註冊時所填入的姓名、電話、EMAIL，若三者皆正確，我們將回覆告知您。
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h1>消費問題</h1>
              <br />
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰沒有註冊能不能買？</h2>
              <br />
              <p style="font-size:20px">A︰需註冊成為會員才可以購買商品。</p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰我是會員要怎麼買？</h2>
              <br />
              <p style="font-size:20px">
                A︰您可到商品頁面選購喜愛的商品並加入購物車，隨後至購物車進行結帳完成訂單即可，隨後可到我的扭蛋功能了解您所獲得的扭蛋內容。
                若是使用代幣購買則可在商品頁面使用單抽扭蛋功能馬上扭馬上獲得，最後再到我的扭蛋功能進行寄送即可。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰代幣是什麼？</h2>
              <br />
              <p style="font-size:20px">
                A︰代幣是您預儲到蛋鋪裡面的替代貨幣，可使用代幣進行單抽扭蛋或是結帳。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰沒用完的代幣怎麼辦？</h2>
              <br />
              <p style="font-size:20px">
                A︰代幣需100以上即可申請退費，客服人員將會請您至表單下載專區下載「折讓單」，請您在印出後簽名並附上身分證正反面影本(公司行號須蓋上發票章)以及匯款資料後寄回本公司，在您寄回該折讓單後，我們將扣除必要的手續費之後使用匯款方式退還費用。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰有哪些付款方式？</h2>
              <br />
              <p style="font-size:20px">
                A︰目前蛋鋪可使用的付款方式除了代幣付款以外，尚有信用卡、WEBATM、ATM轉帳、超商代碼繳費、超商貨到付款，日後會陸續開放其它付費方式。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰運費要怎麼計算？</h2>
              <br />
              <p style="font-size:20px">
                A︰目前寄送方式分為五種。
                <br />郵局小包︰須加收運費50元。
                <br />超商取貨︰須加收運費60元。 <br />宅配︰須加收運費85元。
                <br />超商貨到付款︰須加收運費60元。
                <br />親自取貨︰須加收運費30元。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰要怎麼合併運送？</h2>
              <br />
              <p style="font-size:20px">
                A︰在每日中午12點前，若您有合併訂單的需求，請務必提前告知客服。多收取的運費，會退還代幣給您，若商品已寄出，恕無法退還運費。
              </p>
              <v-divider></v-divider>
              <br />
              <h2 style="color:#E53935">Q︰寄送的範圍是哪裡？</h2>
              <br />
              <p style="font-size:20px">
                A︰目前蛋舖除郵局掛號小包寄送範圍可達台灣本島、離島及偏遠地區外，其餘寄送服務皆僅服務台灣本島地區，國外地區尚未開啟寄送服務，請您見諒。
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>
