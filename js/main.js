var score = 0
var board = new Array()
$(document).ready(function () {
  newGamen()
})

function newGamen () {
  // 初始化棋盘
  init()
  // 初始生成两个数字 2 4 8 16 32 64 128 ...
  generateOneNumber()
  generateOneNumber()
}

function init () {
  score = 0
  $("header #score").text(score)
  $(".mask,#game-over,#game-win").addClass("hide")
  for(var x = 0;x < 4;x++) {
    board[x] = new Array()
    for(var y = 0;y < 4;y++) {
      board[x][y] = 0
    }
  }
}

function generateOneNumber () {
  // 随机生成一个数字 2or4
  var randNumber = Math.random() < 0.5 ? 2 : 4
  // 随机生成位置
  var randNumberX = Math.floor(Math.random()*4)
  var randNumberY = Math.floor(Math.random()*4)
  // 检查该位置上是否已有值
  if(board[randNumberX][randNumberY] !== 0) {
    generateOneNumber()
  } else {
    board[randNumberX][randNumberY] = randNumber
  }
  renderBoard()
}

function renderBoard () {
  for(var x = 0;x < 4;x++) {
    for(var y = 0;y < 4;y++) {
      var num = board[x][y]
      if(num !== 0) {
        $(`#grid-cell-${x}-${y}`).addClass("number-cell")
        .html(board[x][y])
        .css("background",getNumberCellBgColor(num))
        .css("color",getNumberColor(num))
      } else {
        $(`#grid-cell-${x}-${y}`).removeClass("number-cell")
        .html("")
        .css("background",getNumberCellBgColor(num))
      }
    }
  }
}

function setScore () {
  score += 4
  $("header #score").text(score)
}
// 判断此时四个方向上能否有一个能移动
function noMove () {
  if(moveToLeft(false) || moveToTop(false) || moveToRight(false) || moveToBottom(false)) 
    return false
  return true
}
// 判断此时16宫格中是否还有空格子
function noSpace () {
  for(var x = 0;x < 4;x++) {
    for(var y = 0;y < 4;y++) {
      if(board[x][y] === 0) return false
    }
  }
  return true
}

function isGameOver () {
  if(noSpace()&&noMove()) {
    gameover()
  }
}

function gameover () {
  $(".mask,#game-over").removeClass("hide")
}

function isGameWin () {
  for(var x = 0;x < 4;x++) {
    for(var y = 0;y < 4;y++) {
      if(board[x][y] === 2048) {
        gamewin()
        return true
      }
    }
  }
  return false
}

function gamewin () {
  $(".mask,#game-win").removeClass("hide")
}

$(document).keyup(function (e) {
  switch (e.keyCode) {
    case 37 :
      if(moveToLeft(true)) {
        renderBoard()
        generateOneNumber()
        if(!isGameWin())
          isGameOver()
      }
      break
    case 38 :
      if(moveToTop(true)) {
        renderBoard()
        generateOneNumber()
        if(!isGameWin())
          isGameOver()
      }
      break
    case 39 :
      if(moveToRight(true)) {
        renderBoard()
        generateOneNumber()
        if(!isGameWin())
          isGameOver()
      }
      break
    case 40 :
      if(moveToBottom(true)) {
        renderBoard()
        generateOneNumber()
        if(!isGameWin())
          isGameOver()
      }
      break
    default: break;
  }
})

$(document).on("click","button#new-game",function () {
  newGamen()
})
