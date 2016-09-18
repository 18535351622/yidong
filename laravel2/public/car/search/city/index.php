<?php
header("content-type:text/json;charset:utf-8;");
$json=<<<END
{"HTTP":"http://","homePageUrl":"www.woqu.com","domain":"www.woqu.com","localIP":"host-web-5.woqu.com","cid":null,"hotCityList":[{"cityId":4334,"cityNameCN":"洛杉矶","cityNameEN":"Los Angeles","cityHotLevel":1,"letter":"L","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4363,"cityNameCN":"旧金山","cityNameEN":"San Francisco","cityHotLevel":2,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4785,"cityNameCN":"纽约","cityNameEN":"New York","cityHotLevel":11,"letter":"N","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4564,"cityNameCN":"夏威夷","cityNameEN":"Hawaii - Hawaii Island","cityHotLevel":12,"letter":"H","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4446,"cityNameCN":"拉斯维加斯","cityNameEN":"Las Vegas","cityHotLevel":13,"letter":"L","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4667,"cityNameCN":"西雅图","cityNameEN":"Seattle","cityHotLevel":15,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":1405,"cityNameCN":"温哥华","cityNameEN":"Vancouver","cityHotLevel":16,"letter":"V","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":4662,"cityNameCN":"盐湖城","cityNameEN":"Salt Lake City","cityHotLevel":23,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4511,"cityNameCN":"芝加哥","cityNameEN":"Chicago","cityHotLevel":24,"letter":"C","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":1403,"cityNameCN":"多伦多","cityNameEN":"Toronto","cityHotLevel":25,"letter":"T","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":2364,"cityNameCN":"慕尼黑","cityNameEN":"Munich","cityHotLevel":6,"letter":"M","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":1933,"cityNameCN":"巴黎","cityNameEN":"Paris","cityHotLevel":7,"letter":"P","countryId":141,"countryNameCN":"法国","countryNameEN":"France"},{"cityId":4224,"cityNameCN":"伦敦","cityNameEN":"London","cityHotLevel":8,"letter":"L","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"},{"cityId":3803,"cityNameCN":"马德里","cityNameEN":"Madrid","cityHotLevel":9,"letter":"M","countryId":214,"countryNameCN":"西班牙","countryNameEN":"Spain"},{"cityId":2871,"cityNameCN":"米兰","cityNameEN":"Milano","cityHotLevel":10,"letter":"M","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":2200,"cityNameCN":"法兰克福","cityNameEN":"Frankfurt","cityHotLevel":14,"letter":"F","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":2612,"cityNameCN":"阿姆斯特丹","cityNameEN":"Amsterdam","cityHotLevel":19,"letter":"A","countryId":152,"countryNameCN":"荷兰","countryNameEN":"Netherlands"},{"cityId":2924,"cityNameCN":"罗马","cityNameEN":"Rome","cityHotLevel":20,"letter":"R","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":1214,"cityNameCN":"维也纳","cityNameEN":"Vienna","cityHotLevel":21,"letter":"V","countryId":109,"countryNameCN":"奥地利","countryNameEN":"Austria"},{"cityId":3511,"cityNameCN":"里斯本","cityNameEN":"Lisbon","cityHotLevel":22,"letter":"L","countryId":199,"countryNameCN":"葡萄牙","countryNameEN":"Portugal"},{"cityId":3301,"cityNameCN":"基督城","cityNameEN":"Christchurch","cityHotLevel":3,"letter":"C","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3318,"cityNameCN":"皇后镇","cityNameEN":"Queenstown","cityHotLevel":4,"letter":"Q","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":1143,"cityNameCN":"墨尔本","cityNameEN":"Melbourne","cityHotLevel":5,"letter":"M","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":3298,"cityNameCN":"奥克兰","cityNameEN":"Auckland","cityHotLevel":17,"letter":"A","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":1187,"cityNameCN":"悉尼","cityNameEN":"Sydney","cityHotLevel":18,"letter":"S","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1070,"cityNameCN":"布里斯班","cityNameEN":"Brisbane","cityHotLevel":26,"letter":"B","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1080,"cityNameCN":"凯恩斯","cityNameEN":"Cairns","cityHotLevel":31,"letter":"C","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":3324,"cityNameCN":"惠灵顿","cityNameEN":"Wellington","cityHotLevel":31,"letter":"W","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":1047,"cityNameCN":"阿德莱德","cityNameEN":"Adelaide","cityHotLevel":32,"letter":"A","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":3302,"cityNameCN":"达尼丁","cityNameEN":"Dunedin","cityHotLevel":32,"letter":"D","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"}],"continentHotCityList":[{"continent":"north_america","continentNameCN":"北美","continentNameEN":"north_america","countryHotCityList":[{"countryId":235,"countryNameEN":"United States","countryNameCN":"美国","hotCityList":[{"cityId":4334,"cityNameCN":"洛杉矶","cityNameEN":"Los Angeles","cityHotLevel":1,"letter":"L","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4363,"cityNameCN":"旧金山","cityNameEN":"San Francisco","cityHotLevel":2,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4785,"cityNameCN":"纽约","cityNameEN":"New York","cityHotLevel":11,"letter":"N","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4564,"cityNameCN":"夏威夷","cityNameEN":"Hawaii - Hawaii Island","cityHotLevel":12,"letter":"H","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4446,"cityNameCN":"拉斯维加斯","cityNameEN":"Las Vegas","cityHotLevel":13,"letter":"L","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4667,"cityNameCN":"西雅图","cityNameEN":"Seattle","cityHotLevel":15,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4662,"cityNameCN":"盐湖城","cityNameEN":"Salt Lake City","cityHotLevel":23,"letter":"S","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4511,"cityNameCN":"芝加哥","cityNameEN":"Chicago","cityHotLevel":24,"letter":"C","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4416,"cityNameCN":"迈阿密","cityNameEN":"Miami","cityHotLevel":31,"letter":"M","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":7208,"cityNameCN":"华盛顿","cityNameEN":"Washington","cityHotLevel":32,"letter":"W","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4490,"cityNameCN":"波士顿","cityNameEN":"Boston","cityHotLevel":33,"letter":"B","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4422,"cityNameCN":"奥兰多","cityNameEN":"Orlando","cityHotLevel":34,"letter":"O","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4573,"cityNameCN":"休斯顿","cityNameEN":"Houston","cityHotLevel":35,"letter":"H","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4474,"cityNameCN":"亚特兰大","cityNameEN":"Atlanta","cityHotLevel":36,"letter":"A","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"},{"cityId":4527,"cityNameCN":"丹佛","cityNameEN":"Denver","cityHotLevel":37,"letter":"D","countryId":235,"countryNameCN":"美国","countryNameEN":"United States"}]},{"countryId":124,"countryNameEN":"Canada","countryNameCN":"加拿大","hotCityList":[{"cityId":1405,"cityNameCN":"温哥华","cityNameEN":"Vancouver","cityHotLevel":16,"letter":"V","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1403,"cityNameCN":"多伦多","cityNameEN":"Toronto","cityHotLevel":25,"letter":"T","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1406,"cityNameCN":"维多利亚","cityNameEN":"Victoria","cityHotLevel":31,"letter":"V","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1337,"cityNameCN":"卡尔加里","cityNameEN":"Calgary","cityHotLevel":32,"letter":"C","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1368,"cityNameCN":"蒙特利尔","cityNameEN":"Montreal","cityHotLevel":33,"letter":"M","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1377,"cityNameCN":"渥太华","cityNameEN":"Ottawa","cityHotLevel":34,"letter":"O","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":6240,"cityNameCN":"魁北克","cityNameEN":"Quebec","cityHotLevel":35,"letter":"Q","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1347,"cityNameCN":"埃德蒙顿","cityNameEN":"Edmonton","cityHotLevel":36,"letter":"E","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"},{"cityId":1410,"cityNameCN":"温尼伯","cityNameEN":"Winnipeg","cityHotLevel":37,"letter":"W","countryId":124,"countryNameCN":"加拿大","countryNameEN":"Canada"}]}]},{"continent":"oceania","continentNameCN":"澳新","continentNameEN":"oceania","countryHotCityList":[{"countryId":108,"countryNameEN":"Australia","countryNameCN":"澳大利亚","hotCityList":[{"cityId":1143,"cityNameCN":"墨尔本","cityNameEN":"Melbourne","cityHotLevel":5,"letter":"M","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1187,"cityNameCN":"悉尼","cityNameEN":"Sydney","cityHotLevel":18,"letter":"S","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1070,"cityNameCN":"布里斯班","cityNameEN":"Brisbane","cityHotLevel":26,"letter":"B","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1080,"cityNameCN":"凯恩斯","cityNameEN":"Cairns","cityHotLevel":31,"letter":"C","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1047,"cityNameCN":"阿德莱德","cityNameEN":"Adelaide","cityHotLevel":32,"letter":"A","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1168,"cityNameCN":"珀斯","cityNameEN":"Perth","cityHotLevel":33,"letter":"P","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1112,"cityNameCN":"黄金海岸","cityNameEN":"Gold Coast","cityHotLevel":34,"letter":"G","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1083,"cityNameCN":"堪培拉","cityNameEN":"Canberra","cityHotLevel":35,"letter":"C","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"},{"cityId":1118,"cityNameCN":"霍巴特","cityNameEN":"Hobart","cityHotLevel":36,"letter":"H","countryId":108,"countryNameCN":"澳大利亚","countryNameEN":"Australia"}]},{"countryId":188,"countryNameEN":"New Zealand","countryNameCN":"新西兰","hotCityList":[{"cityId":3301,"cityNameCN":"基督城","cityNameEN":"Christchurch","cityHotLevel":3,"letter":"C","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3318,"cityNameCN":"皇后镇","cityNameEN":"Queenstown","cityHotLevel":4,"letter":"Q","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3298,"cityNameCN":"奥克兰","cityNameEN":"Auckland","cityHotLevel":17,"letter":"A","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3324,"cityNameCN":"惠灵顿","cityNameEN":"Wellington","cityHotLevel":31,"letter":"W","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3302,"cityNameCN":"达尼丁","cityNameEN":"Dunedin","cityHotLevel":32,"letter":"D","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3315,"cityNameCN":"皮克顿","cityNameEN":"Picton","cityHotLevel":33,"letter":"P","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3319,"cityNameCN":"罗托鲁瓦","cityNameEN":"Rotorua","cityHotLevel":34,"letter":"R","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3304,"cityNameCN":"格雷茅斯","cityNameEN":"Greymouth","cityHotLevel":35,"letter":"G","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"},{"cityId":3320,"cityNameCN":"陶波","cityNameEN":"Taupo","cityHotLevel":36,"letter":"T","countryId":188,"countryNameCN":"新西兰","countryNameEN":"New Zealand"}]}]},{"continent":"europe","continentNameCN":"欧洲","continentNameEN":"europe","countryHotCityList":[{"countryId":142,"countryNameEN":"Germany","countryNameCN":"德国","hotCityList":[{"cityId":2364,"cityNameCN":"慕尼黑","cityNameEN":"Munich","cityHotLevel":6,"letter":"M","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":2200,"cityNameCN":"法兰克福","cityNameEN":"Frankfurt","cityHotLevel":14,"letter":"F","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":2489,"cityNameCN":"斯图加特","cityNameEN":"Stuttgart","cityHotLevel":30,"letter":"S","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":2121,"cityNameCN":"柏林","cityNameEN":"Berlin","cityHotLevel":31,"letter":"B","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"},{"cityId":2150,"cityNameCN":"科隆","cityNameEN":"Cologne","cityHotLevel":32,"letter":"C","countryId":142,"countryNameCN":"德国","countryNameEN":"Germany"}]},{"countryId":141,"countryNameEN":"France","countryNameCN":"法国","hotCityList":[{"cityId":1933,"cityNameCN":"巴黎","cityNameEN":"Paris","cityHotLevel":7,"letter":"P","countryId":141,"countryNameCN":"法国","countryNameEN":"France"},{"cityId":1876,"cityNameCN":"马赛","cityNameEN":"Marseille","cityHotLevel":31,"letter":"M","countryId":141,"countryNameCN":"法国","countryNameEN":"France"},{"cityId":1921,"cityNameCN":"尼斯","cityNameEN":"Nice","cityHotLevel":32,"letter":"N","countryId":141,"countryNameCN":"法国","countryNameEN":"France"},{"cityId":1868,"cityNameCN":"里昂","cityNameEN":"Lyon","cityHotLevel":33,"letter":"L","countryId":141,"countryNameCN":"法国","countryNameEN":"France"},{"cityId":1656,"cityNameCN":"阿维尼翁","cityNameEN":"Avignon","cityHotLevel":34,"letter":"A","countryId":141,"countryNameCN":"法国","countryNameEN":"France"}]},{"countryId":234,"countryNameEN":"United Kingdom","countryNameCN":"英国","hotCityList":[{"cityId":4224,"cityNameCN":"伦敦","cityNameEN":"London","cityHotLevel":8,"letter":"L","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"},{"cityId":4157,"cityNameCN":"剑桥","cityNameEN":"Cambridge","cityHotLevel":31,"letter":"C","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"},{"cityId":4182,"cityNameCN":"爱丁堡","cityNameEN":"Edinburgh","cityHotLevel":32,"letter":"E","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"},{"cityId":4229,"cityNameCN":"曼彻斯特","cityNameEN":"Manchester","cityHotLevel":33,"letter":"M","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"},{"cityId":4143,"cityNameCN":"伯明翰","cityNameEN":"Birmingham","cityHotLevel":34,"letter":"B","countryId":234,"countryNameCN":"英国","countryNameEN":"United Kingdom"}]},{"countryId":162,"countryNameEN":"Italy","countryNameCN":"意大利","hotCityList":[{"cityId":2871,"cityNameCN":"米兰","cityNameEN":"Milano","cityHotLevel":10,"letter":"M","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":2924,"cityNameCN":"罗马","cityNameEN":"Rome","cityHotLevel":20,"letter":"R","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":2982,"cityNameCN":"威尼斯","cityNameEN":"Venice","cityHotLevel":28,"letter":"V","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":2822,"cityNameCN":"佛罗伦萨","cityNameEN":"Florence","cityHotLevel":31,"letter":"F","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"},{"cityId":2880,"cityNameCN":"那不勒斯","cityNameEN":"Naples","cityHotLevel":32,"letter":"N","countryId":162,"countryNameCN":"意大利","countryNameEN":"Italy"}]},{"countryId":224,"countryNameEN":"Sweden","countryNameCN":"瑞典","hotCityList":[{"cityId":3968,"cityNameCN":"斯德哥尔摩","cityNameEN":"Stockholm","cityHotLevel":31,"letter":"S","countryId":224,"countryNameCN":"瑞典","countryNameEN":"Sweden"},{"cityId":3910,"cityNameCN":"哥德堡","cityNameEN":"Gothenburg","cityHotLevel":32,"letter":"G","countryId":224,"countryNameCN":"瑞典","countryNameEN":"Sweden"},{"cityId":3920,"cityNameCN":"延雪平","cityNameEN":"Jonkoping","cityHotLevel":33,"letter":"J","countryId":224,"countryNameCN":"瑞典","countryNameEN":"Sweden"}]},{"countryId":152,"countryNameEN":"Netherlands","countryNameCN":"荷兰","hotCityList":[{"cityId":2612,"cityNameCN":"阿姆斯特丹","cityNameEN":"Amsterdam","cityHotLevel":19,"letter":"A","countryId":152,"countryNameCN":"荷兰","countryNameEN":"Netherlands"},{"cityId":2620,"cityNameCN":"海牙","cityNameEN":"Den Haag","cityHotLevel":31,"letter":"D","countryId":152,"countryNameCN":"荷兰","countryNameEN":"Netherlands"},{"cityId":2626,"cityNameCN":"埃因霍温","cityNameEN":"Eindhoven","cityHotLevel":32,"letter":"E","countryId":152,"countryNameCN":"荷兰","countryNameEN":"Netherlands"},{"cityId":2647,"cityNameCN":"鹿特丹","cityNameEN":"Rotterdam","cityHotLevel":33,"letter":"R","countryId":152,"countryNameCN":"荷兰","countryNameEN":"Netherlands"}]},{"countryId":109,"countryNameEN":"Austria","countryNameCN":"奥地利","hotCityList":[{"cityId":1214,"cityNameCN":"维也纳","cityNameEN":"Vienna","cityHotLevel":21,"letter":"V","countryId":109,"countryNameCN":"奥地利","countryNameEN":"Austria"},{"cityId":1212,"cityNameCN":"萨尔茨堡","cityNameEN":"Salzburg","cityHotLevel":31,"letter":"S","countryId":109,"countryNameCN":"奥地利","countryNameEN":"Austria"},{"cityId":1208,"cityNameCN":"格拉茨","cityNameEN":"Graz","cityHotLevel":32,"letter":"G","countryId":109,"countryNameCN":"奥地利","countryNameEN":"Austria"}]},{"countryId":225,"countryNameEN":"Switzerland","countryNameCN":"瑞士","hotCityList":[{"cityId":4009,"cityNameCN":"日内瓦","cityNameEN":"Geneva","cityHotLevel":31,"letter":"G","countryId":225,"countryNameCN":"瑞士","countryNameEN":"Switzerland"},{"cityId":4049,"cityNameCN":"苏黎世","cityNameEN":"Zurich","cityHotLevel":32,"letter":"Z","countryId":225,"countryNameCN":"瑞士","countryNameEN":"Switzerland"},{"cityId":3995,"cityNameCN":"伯尔尼","cityNameEN":"Bern","cityHotLevel":33,"letter":"B","countryId":225,"countryNameCN":"瑞士","countryNameEN":"Switzerland"}]},{"countryId":214,"countryNameEN":"Spain","countryNameCN":"西班牙","hotCityList":[{"cityId":3803,"cityNameCN":"马德里","cityNameEN":"Madrid","cityHotLevel":9,"letter":"M","countryId":214,"countryNameCN":"西班牙","countryNameEN":"Spain"},{"cityId":3750,"cityNameCN":"巴塞罗那","cityNameEN":"Barcelona","cityHotLevel":27,"letter":"B","countryId":214,"countryNameCN":"西班牙","countryNameEN":"Spain"},{"cityId":3841,"cityNameCN":"塞维利亚","cityNameEN":"Sevilla","cityHotLevel":31,"letter":"S","countryId":214,"countryNameCN":"西班牙","countryNameEN":"Spain"},{"cityId":3849,"cityNameCN":"托莱多","cityNameEN":"Toledo","cityHotLevel":32,"letter":"T","countryId":214,"countryNameCN":"西班牙","countryNameEN":"Spain"}]},{"countryId":199,"countryNameEN":"Portugal","countryNameCN":"葡萄牙","hotCityList":[{"cityId":3511,"cityNameCN":"里斯本","cityNameEN":"Lisbon","cityHotLevel":22,"letter":"L","countryId":199,"countryNameCN":"葡萄牙","countryNameEN":"Portugal"},{"cityId":3527,"cityNameCN":"波尔图","cityNameEN":"Porto","cityHotLevel":31,"letter":"P","countryId":199,"countryNameCN":"葡萄牙","countryNameEN":"Portugal"},{"cityId":3502,"cityNameCN":"法鲁","cityNameEN":"Faro","cityHotLevel":32,"letter":"F","countryId":199,"countryNameCN":"葡萄牙","countryNameEN":"Portugal"}]},{"countryId":198,"countryNameEN":"Poland","countryNameCN":"波兰","hotCityList":[{"cityId":3472,"cityNameCN":"华沙","cityNameEN":"Warsaw","cityHotLevel":31,"letter":"W","countryId":198,"countryNameCN":"波兰","countryNameEN":"Poland"},{"cityId":3465,"cityNameCN":"克拉科夫","cityNameEN":"Krakow","cityHotLevel":32,"letter":"K","countryId":198,"countryNameCN":"波兰","countryNameEN":"Poland"},{"cityId":3469,"cityNameCN":"波兹南","cityNameEN":"Poznan","cityHotLevel":33,"letter":"P","countryId":198,"countryNameCN":"波兰","countryNameEN":"Poland"}]},{"countryId":192,"countryNameEN":"Norway","countryNameCN":"挪威","hotCityList":[{"cityId":3343,"cityNameCN":"卑尔根","cityNameEN":"Bergen","cityHotLevel":31,"letter":"B","countryId":192,"countryNameCN":"挪威","countryNameEN":"Norway"},{"cityId":3426,"cityNameCN":"特罗姆瑟","cityNameEN":"Tromsoe","cityHotLevel":32,"letter":"T","countryId":192,"countryNameCN":"挪威","countryNameEN":"Norway"},{"cityId":3400,"cityNameCN":"奥斯陆","cityNameEN":"Oslo","cityHotLevel":33,"letter":"O","countryId":192,"countryNameCN":"挪威","countryNameEN":"Norway"}]},{"countryId":132,"countryNameEN":"Czech Republic","countryNameCN":"捷克","hotCityList":[{"cityId":1475,"cityNameCN":"布拉格","cityNameEN":"Prague","cityHotLevel":29,"letter":"P","countryId":132,"countryNameCN":"捷克","countryNameEN":"Czech Republic"},{"cityId":1471,"cityNameCN":"卡罗维发利","cityNameEN":"Karlovy Vary","cityHotLevel":31,"letter":"K","countryId":132,"countryNameCN":"捷克","countryNameEN":"Czech Republic"},{"cityId":1468,"cityNameCN":"布尔诺","cityNameEN":"Brno","cityHotLevel":32,"letter":"B","countryId":132,"countryNameCN":"捷克","countryNameEN":"Czech Republic"}]},{"countryId":155,"countryNameEN":"Hungary","countryNameCN":"匈牙利","hotCityList":[{"cityId":2666,"cityNameCN":"布达佩斯","cityNameEN":"Budapest","cityHotLevel":31,"letter":"B","countryId":155,"countryNameCN":"匈牙利","countryNameEN":"Hungary"},{"cityId":2672,"cityNameCN":"佩奇","cityNameEN":"Pecs","cityHotLevel":32,"letter":"P","countryId":155,"countryNameCN":"匈牙利","countryNameEN":"Hungary"},{"cityId":2668,"cityNameCN":"杰尔","cityNameEN":"Gyor","cityHotLevel":33,"letter":"G","countryId":155,"countryNameCN":"匈牙利","countryNameEN":"Hungary"}]},{"countryId":145,"countryNameEN":"Greece","countryNameCN":"希腊","hotCityList":[{"cityId":2561,"cityNameCN":"雅典","cityNameEN":"Athens","cityHotLevel":31,"letter":"A","countryId":145,"countryNameCN":"希腊","countryNameEN":"Greece"},{"cityId":2586,"cityNameCN":"圣托里尼","cityNameEN":"Santorini","cityHotLevel":32,"letter":"S","countryId":145,"countryNameCN":"希腊","countryNameEN":"Greece"}]}]}],"HTTPS":"https://"}
END;
$json=iconv("GB2312","UTF-8//IGNORE",$json);
echo $json;
