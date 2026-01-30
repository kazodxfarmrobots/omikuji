const omikujiButton   = document.getElementById("push")
const resultDisplay   = document.getElementById("result")
const commentDisplay  = document.getElementById("comment")
const mikoPicture     = document.getElementById("miko")

const omikuji  = ["大吉", "吉", "凶"]
const daikichi = ["最高の結果だよ！", "これ以上ないね！", "今年はいい年になりそうだねっ！"]
const kichi    = ["まあまあだね", "いいんじゃない？", "ふつうです"]
const kyou     = ["あはは……", "今年はだめそうだね", "まあ、頑張って"]

// ボタンを押すと、おみくじの結果が表示される
omikujiButton.addEventListener(
  "click",
  () => {
    drawOmikuji()
  }
)

function drawOmikuji() {
  // おみくじの結果をランダムに表示する
  const randomOmikujiIndex = Math.floor(Math.random() * omikuji.length)
  resultDisplay.innerText = omikuji[randomOmikujiIndex]

  // 大吉の場合、大吉のコメントを表示し、大吉のキャラを表示する
  if (omikuji[randomOmikujiIndex] === "大吉") {
    const randomCommentIndex = Math.floor(Math.random() * daikichi.length)
    commentDisplay.innerText = daikichi[randomCommentIndex]
    mikoPicture.src = "daikichi.jpg"
  
  // 吉の場合、吉のコメントを表示し、吉のキャラを表示する
  } else if (omikuji[randomOmikujiIndex] === "吉") {
    const randomCommentIndex = Math.floor(Math.random() * kichi.length)
    commentDisplay.innerText = kichi[randomCommentIndex]
    mikoPicture.src = "kichi.jpg"

  // 凶の場合、凶のコメントを表示し、凶のキャラを表示する
  } else if (omikuji[randomOmikujiIndex] === "凶") {
    const randomCommentIndex = Math.floor(Math.random() * kyou.length)
    commentDisplay.innerText = kyou[randomCommentIndex]
    mikoPicture.src = "kyou.jpg"
  }
}



