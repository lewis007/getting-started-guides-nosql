let srcList = [];

Page({
  data: {
    list: [{
      price: 0,
      name: '人人都会小程序',
      coverPath: '../../resources/cover.png'
    }, {
      price: 149,
      name: '人人都会小程序实战',
      coverPath: '../../resources/cover.png'
    }, {
      price: 249,
      name: '人人都会小程序实战2',
      coverPath: '../../resources/cover.png'
    }, {
      price: 349,
      name: '人人都会小程序实战3',
      coverPath: '../../resources/cover.png'
    }]
  },

  onLoad: function () {
    srcList = this.data.list;
  },

  showAll: function () {
    this.setData({
      list: srcList
    })
  },

  showFree: function () {
    this.onFilter();
  },

  showCost: function () {
    this.onFilter("cost");
  },

  onFilter: function (type) {
    let newList = [];

    for (let i = 0, len = srcList.length; i < len; i++) {
      if ((type == "cost" && srcList[i].price > 0)
        || (type != "cost" && srcList[i].price == 0)) {
        newList.push(srcList[i]);
      }
    }

    this.setData({
      list: newList
    });
  }
})
