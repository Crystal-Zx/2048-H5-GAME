function getNumberCellBgColor (num) {
  switch (num) {
    case 2 :
      return "#EEE4DA"
    case 4 :
      return "#EDE0C8"
    case 8:
      return "#F26179"
    case 16:
      return "#F59563"
    case 32:
      return "#F67C5F"
    case 64:
      return "#F65E36"
    case 128:
      return "#EDCF72"
    case 256:
      return "#EDCC61"
    case 512:
      return "#9C0"
    case 1024:
      return "#3365A5"
    case 2048:
      return "#09C"
    case 4096:
      return "#a6bc"
    case 8192:
      return "#93c"
    default: 
      return "#CDC1B4"
  }
}

function getNumberColor(number) {
  if (number <= 4){
    return "#776e65";
  }
  return "white";
}


// 格子移动前端动画效果
function showAnimate () {
  
}

// 新格子生成动画
function showNumberWithAnimate (randNumberX,randNumberY,randNumber) {
  // var numCell = $(`#grid-cell-${randNumberX}-${randNumberY}`)
  // numCell.addClass("number-cell")
  // .html(board[randNumberX][randNumberY])
  // .css("background",getNumberCellBgColor(randNumber))
  // .css("color",getNumberColor(randNumber))
  // numCell.animate({
  //   width: $(".grid-cell").width,
  // },50)
}

// 二维数组转置
// function matrixConverse (keyCode) {
//   virtualBoard = [[],[],[],[]]
//   switch(keyCode) {
//     case 37 :     // 向左，保持原数组不变

//   }
// }