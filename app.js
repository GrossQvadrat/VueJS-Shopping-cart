var app = new Vue({
  el: '#app',
  data: {
    items: [
      {
        name: "T-Shirt",
        price: 69.3,
        img: "./images/T-Shirt.jpg",
        colItem: 1,
        title: ""
      },
      {
        name: "JEANS",
        title: "",
        price: 211,
        img: "./images/JEANS.jpg",
        colItem: 1
      },
      {
        name: "Bag",
        title: "",
        price: 212,
        img: "./images/Bag.jpg",
        colItem: 1
      },
      {
        name: "Belt",
        title: "",
        price: 210,
        img: "./images/Belt.jpg",
        colItem: 1
      },
      {
        name: "Hooded Sweatshirt",
        title: "",
        price: 211,
        img: "./images/Sweatshirt.jpg",
        colItem: 1
      },
      {
        name: "Blazer",
        title: "",
        price: 212,
        img: "./images/Blazer.jpg",
        colItem: 1
      }
    ],
    cart: [],
    cartImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjI1IDE5LjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOS4yNSAxOS4yNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxnIGlkPSJMYXllcl8xXzEwN18iPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTkuMDA2LDIuOTdjLTAuMTkxLTAuMjE5LTAuNDY2LTAuMzQ1LTAuNzU2LTAuMzQ1SDQuNDMxTDQuMjM2LDEuNDYxICAgICBDNC4xNTYsMC45NzksMy43MzksMC42MjUsMy4yNSwwLjYyNUgxYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDEuNDAzbDEuODYsMTEuMTY0YzAuMDA4LDAuMDQ1LDAuMDMxLDAuMDgyLDAuMDQ1LDAuMTI0ICAgICBjMC4wMTYsMC4wNTMsMC4wMjksMC4xMDMsMC4wNTQsMC4xNTFjMC4wMzIsMC4wNjYsMC4wNzUsMC4xMjIsMC4xMiwwLjE3OWMwLjAzMSwwLjAzOSwwLjA1OSwwLjA3OCwwLjA5NSwwLjExMiAgICAgYzAuMDU4LDAuMDU0LDAuMTI1LDAuMDkyLDAuMTkzLDAuMTNjMC4wMzgsMC4wMjEsMC4wNzEsMC4wNDksMC4xMTIsMC4wNjVjMC4xMTYsMC4wNDcsMC4yMzgsMC4wNzUsMC4zNjcsMC4wNzUgICAgIGMwLjAwMSwwLDExLjAwMSwwLDExLjAwMSwwYzAuNTUzLDAsMS0wLjQ0NywxLTFzLTAuNDQ3LTEtMS0xSDYuMDk3bC0wLjE2Ni0xSDE3LjI1YzAuNDk4LDAsMC45Mi0wLjM2NiwwLjk5LTAuODU4bDEtNyAgICAgQzE5LjI4MSwzLjQ3OSwxOS4xOTUsMy4xODgsMTkuMDA2LDIuOTd6IE0xNy4wOTcsNC42MjVsLTAuMjg1LDJIMTMuMjV2LTJIMTcuMDk3eiBNMTIuMjUsNC42MjV2MmgtM3YtMkgxMi4yNXogTTEyLjI1LDcuNjI1djIgICAgIGgtM3YtMkgxMi4yNXogTTguMjUsNC42MjV2MmgtM2MtMC4wNTMsMC0wLjEwMSwwLjAxNS0wLjE0OCwwLjAzbC0wLjMzOC0yLjAzSDguMjV6IE01LjI2NCw3LjYyNUg4LjI1djJINS41OTdMNS4yNjQsNy42MjV6ICAgICAgTTEzLjI1LDkuNjI1di0yaDMuNDE4bC0wLjI4NSwySDEzLjI1eiIgZmlsbD0iI2UwOGE0MSIvPgoJCQk8Y2lyY2xlIGN4PSI2Ljc1IiBjeT0iMTcuMTI1IiByPSIxLjUiIGZpbGw9IiNlMDhhNDEiLz4KCQkJPGNpcmNsZSBjeD0iMTUuNzUiIGN5PSIxNy4xMjUiIHI9IjEuNSIgZmlsbD0iI2UwOGE0MSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
    plusImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzNTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYWRkIj4KCQk8cGF0aCBkPSJNMzU3LDIwNEgyMDR2MTUzaC01MVYyMDRIMHYtNTFoMTUzVjBoNTF2MTUzaDE1M1YyMDR6IiBmaWxsPSIjZTA4YTQxIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==",
    minusImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzNTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icmVtb3ZlIj4KCQk8cGF0aCBkPSJNMzU3LDIwNEgwdi01MWgzNTdWMjA0eiIgZmlsbD0iI2UwOGE0MSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    priceImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4NC4xODQgNDg0LjE4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg0LjE4NCA0ODQuMTg0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPHBhdGggZD0iTTMwOS40MywyMTkuOTQ0Yy0xOS0xMC41LTM5LjItMTguNS01OS4yLTI2LjhjLTExLjYtNC44LTIyLjctMTAuNC0zMi41LTE4LjJjLTE5LjMtMTUuNC0xNS42LTQwLjQsNy01MC4zICAgYzYuNC0yLjgsMTMuMS0zLjcsMTkuOS00LjFjMjYuMi0xLjQsNTEuMSwzLjQsNzQuOCwxNC44YzExLjgsNS43LDE1LjcsMy45LDE5LjctOC40YzQuMi0xMyw3LjctMjYuMiwxMS42LTM5LjMgICBjMi42LTguOC0wLjYtMTQuNi04LjktMTguM2MtMTUuMi02LjctMzAuOC0xMS41LTQ3LjItMTQuMWMtMjEuNC0zLjMtMjEuNC0zLjQtMjEuNS0yNC45Yy0wLjEtMzAuMy0wLjEtMzAuMy0zMC41LTMwLjMgICBjLTQuNCwwLTguOC0wLjEtMTMuMiwwYy0xNC4yLDAuNC0xNi42LDIuOS0xNywxNy4yYy0wLjIsNi40LDAsMTIuOC0wLjEsMTkuM2MtMC4xLDE5LTAuMiwxOC43LTE4LjQsMjUuM2MtNDQsMTYtNzEuMiw0Ni03NC4xLDk0ICAgYy0yLjYsNDIuNSwxOS42LDcxLjIsNTQuNSw5Mi4xYzIxLjUsMTIuOSw0NS4zLDIwLjUsNjguMSwzMC42YzguOSwzLjksMTcuNCw4LjQsMjQuOCwxNC42YzIxLjksMTguMSwxNy45LDQ4LjItOC4xLDU5LjYgICBjLTEzLjksNi4xLTI4LjYsNy42LTQzLjcsNS43Yy0yMy4zLTIuOS00NS42LTktNjYuNi0xOS45Yy0xMi4zLTYuNC0xNS45LTQuNy0yMC4xLDguNmMtMy42LDExLjUtNi44LDIzLjEtMTAsMzQuNyAgIGMtNC4zLDE1LjYtMi43LDE5LjMsMTIuMiwyNi42YzE5LDkuMiwzOS4zLDEzLjksNjAsMTcuMmMxNi4yLDIuNiwxNi43LDMuMywxNi45LDIwLjFjMC4xLDcuNiwwLjEsMTUuMywwLjIsMjIuOSAgIGMwLjEsOS42LDQuNywxNS4yLDE0LjYsMTUuNGMxMS4yLDAuMiwyMi41LDAuMiwzMy43LTAuMWM5LjItMC4yLDEzLjktNS4yLDEzLjktMTQuNWMwLTEwLjQsMC41LTIwLjksMC4xLTMxLjMgICBjLTAuNS0xMC42LDQuMS0xNiwxNC4zLTE4LjhjMjMuNS02LjQsNDMuNS0xOSw1OC45LTM3LjhDMzg2LjMzLDMyOS41NDQsMzcwLjAzLDI1My40NDQsMzA5LjQzLDIxOS45NDR6IiBmaWxsPSIjZTA4YTQxIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==",
    cartMiniImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjI1IDE5LjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOS4yNSAxOS4yNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnIGlkPSJMYXllcl8xXzEwN18iPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTkuMDA2LDIuOTdjLTAuMTkxLTAuMjE5LTAuNDY2LTAuMzQ1LTAuNzU2LTAuMzQ1SDQuNDMxTDQuMjM2LDEuNDYxICAgICBDNC4xNTYsMC45NzksMy43MzksMC42MjUsMy4yNSwwLjYyNUgxYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDEuNDAzbDEuODYsMTEuMTY0YzAuMDA4LDAuMDQ1LDAuMDMxLDAuMDgyLDAuMDQ1LDAuMTI0ICAgICBjMC4wMTYsMC4wNTMsMC4wMjksMC4xMDMsMC4wNTQsMC4xNTFjMC4wMzIsMC4wNjYsMC4wNzUsMC4xMjIsMC4xMiwwLjE3OWMwLjAzMSwwLjAzOSwwLjA1OSwwLjA3OCwwLjA5NSwwLjExMiAgICAgYzAuMDU4LDAuMDU0LDAuMTI1LDAuMDkyLDAuMTkzLDAuMTNjMC4wMzgsMC4wMjEsMC4wNzEsMC4wNDksMC4xMTIsMC4wNjVjMC4xMTYsMC4wNDcsMC4yMzgsMC4wNzUsMC4zNjcsMC4wNzUgICAgIGMwLjAwMSwwLDExLjAwMSwwLDExLjAwMSwwYzAuNTUzLDAsMS0wLjQ0NywxLTFzLTAuNDQ3LTEtMS0xSDYuMDk3bC0wLjE2Ni0xSDE3LjI1YzAuNDk4LDAsMC45Mi0wLjM2NiwwLjk5LTAuODU4bDEtNyAgICAgQzE5LjI4MSwzLjQ3OSwxOS4xOTUsMy4xODgsMTkuMDA2LDIuOTd6IE0xNy4wOTcsNC42MjVsLTAuMjg1LDJIMTMuMjV2LTJIMTcuMDk3eiBNMTIuMjUsNC42MjV2MmgtM3YtMkgxMi4yNXogTTEyLjI1LDcuNjI1djIgICAgIGgtM3YtMkgxMi4yNXogTTguMjUsNC42MjV2MmgtM2MtMC4wNTMsMC0wLjEwMSwwLjAxNS0wLjE0OCwwLjAzbC0wLjMzOC0yLjAzSDguMjV6IE01LjI2NCw3LjYyNUg4LjI1djJINS41OTdMNS4yNjQsNy42MjV6ICAgICAgTTEzLjI1LDkuNjI1di0yaDMuNDE4bC0wLjI4NSwySDEzLjI1eiIgZmlsbD0iI2UwOGE0MSIvPgoJCQk8Y2lyY2xlIGN4PSI2Ljc1IiBjeT0iMTcuMTI1IiByPSIxLjUiIGZpbGw9IiNlMDhhNDEiLz4KCQkJPGNpcmNsZSBjeD0iMTUuNzUiIGN5PSIxNy4xMjUiIHI9IjEuNSIgZmlsbD0iI2UwOGE0MSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
    CloseImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2FuY2VsIj4KCQk8cGF0aCBkPSJNMjU1LDBDMTE0Ljc1LDAsMCwxMTQuNzUsMCwyNTVzMTE0Ljc1LDI1NSwyNTUsMjU1czI1NS0xMTQuNzUsMjU1LTI1NVMzOTUuMjUsMCwyNTUsMHogTTM4Mi41LDM0Ni44bC0zNS43LDM1LjcgICAgTDI1NSwyOTAuN2wtOTEuOCw5MS44bC0zNS43LTM1LjdsOTEuOC05MS44bC05MS44LTkxLjhsMzUuNy0zNS43bDkxLjgsOTEuOGw5MS44LTkxLjhsMzUuNywzNS43TDI5MC43LDI1NUwzODIuNSwzNDYuOHoiIGZpbGw9IiNlMDhhNDEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
    deleteImg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ1OSA0NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OSA0NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZGVsZXRlIj4KCQk8cGF0aCBkPSJNNzYuNSw0MDhjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWgyMDRjMjguMDUsMCw1MS0yMi45NSw1MS01MVYxMDJoLTMwNlY0MDh6IE00MDgsMjUuNWgtODkuMjVMMjkzLjI1LDBoLTEyNy41bC0yNS41LDI1LjUgICAgSDUxdjUxaDM1N1YyNS41eiIgZmlsbD0iI2UwOGE0MSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
  },
  filters: {
    tip(value) {
      return (value).toFixed(2);
    }
  },
  methods: {
    colItemMinus: function (index) {
      var total = this.items[index].colItem;
      total > 1 ? this.items[index].colItem-- : this.items[index].colItem = 1;
    },
    addToCart: function (index) {
      var found = false;

      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].name === this.items[index].name) {
          var newProduct = this.cart[i];
          newProduct.colItem += this.items[index].colItem;
          found = true;
          break;
        }
      }
      if (!found) {
        this.cart.push({
          img: this.items[index].img,
          name: this.items[index].name,
          price: this.items[index].price,
          colItem: this.items[index].colItem
        });
      }
    },
    deleteItemCart: function (index) {
      this.cart.splice(index, 1);
    }
  },
  computed: {
    totalBeta(acc) {
      var total = 0;
      for (var i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price * this.cart[i].colItem;
      }
      return total;
    },
    cartLen() {
      return this.cart.length;
    }
  }
})
