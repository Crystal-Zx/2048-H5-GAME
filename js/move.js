function moveToLeft (type) {
  var arr = [],tag = false
  for(var x = 0;x < 4;x++) {
    arr[x] = new Array()
    arr[x] = board[x]
    tag = tag || canMove(arr[x])
    if(type) updateArr(arr[x])
  }
  if(tag && type) board = arr
  arr = null
  return tag
}

function moveToTop (type) {
  var arr = [],tag = false
  for(var y = 0;y < 4;y++) {
    arr[y] = new Array()
    for(var x = 0;x < 4;x++) {
      arr[y].push(board[x][y])
    }
    tag = tag || canMove(arr[y])
    if(type) updateArr(arr[y])
  }
  if(tag && type) {
    for(var x = 0;x < 4;x++) {
      for(var y = 0;y < 4;y++) {
        board[y][x] = arr[x][y]
      }
    }
  }
  arr = null
  return tag
}

function moveToRight (type) {
  var arr = [],tag = false
  for(var x = 0;x < 4;x++) {
    arr[x] = new Array()
    // 数组反向传入处理函数
    arr[x] = board[x].concat()
    arr[x].reverse()
    tag = tag || canMove(arr[x])
    if(type) updateArr(arr[x])
  }
  // 数组再一次反向 即为此方向上的正确值顺序
  if(tag && type) {
    for(var x = 0;x < 4;x++) {
      board[x] = arr[x].reverse()
    }
  }
  arr = null
  canMoveRight = tag
  return tag
}

function moveToBottom (type) {
  var arr = [],tag = false
  for(var y = 0;y < 4;y++) {
    arr[y] = new Array()
    for(var x = 0;x < 4;x++) {
      arr[y].unshift(board[x][y])
    }
    tag = tag || canMove(arr[y])
    if(type) updateArr(arr[y])
  }
  if(tag && type) {
    for(var x = 0;x < 4;x++) {
      arr[x].reverse()
      for(var y = 0;y < 4;y++) {
        board[y][x] = arr[x][y]
      }
    }
  }
  arr = null
  canMoveBottom = tag
  return tag
}

function updateArr (arr) {
  // 先删除数组中的0
  var tag = 0
  for(var i = 0;i < arr.length;i++) {
    if(arr[tag] === 0) {
      arr.splice(tag,1)
      arr.push(0)
    } else {
      tag++
      continue
    }
  }
  // 判断相加/合并
  for(var i = 1;i < arr.length;i++) {
    if(arr[i] === 0) break
    if(arr[i] === arr[i-1]) {
      setScore()
      arr[i-1] *= 2
      arr.splice(i,1)
      arr.push(0)
      i = 0   // 此处不能 i -= 1 [8,2,2,4]会出问题
    }
  }
}

function canMove (arr) {
  var hasZero = false
  for(var i = 0;i < arr.length;i++) {
    if(arr[i] === 0) {
      hasZero = true
    } else if(arr[i] !== 0 && hasZero || arr[i] === arr[i+1]) {
      return true
    } else {
      continue
    }
  }
  return false
}