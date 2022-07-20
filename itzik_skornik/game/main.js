


let theUser = null;
let AllUsers = [];
let logged = false;
// window.onload = function()
// {
//  window.localStorage.clear();
// }
let loggedUser = {};
let lsToken = localStorage.token || 0;
let lsUser = localStorage.userName || "";

const AllCards = [
  { id: 1, val: 2, suit: "hearts" },
  { id: 2, val: 3, suit: "hearts" },
  { id: 3, val: 4, suit: "hearts" },
  { id: 4, val: 5, suit: "hearts" },
  { id: 5, val: 6, suit: "hearts" },
  { id: 6, val: 7, suit: "hearts" },
  { id: 7, val: 8, suit: "hearts" },
  { id: 8, val: 9, suit: "hearts" },
  { id: 9, val: 10, suit: "hearts" },
  { id: 10, val: 11, suit: "hearts" },
  { id: 11, val: 12, suit: "hearts" },
  { id: 12, val: 13, suit: "hearts" },
  { id: 13, val: 14, suit: "hearts" },
  { id: 14, val: 2, suit: "diamonds" },
  { id: 15, val: 3, suit: "diamonds" },
  { id: 16, val: 4, suit: "diamonds" },
  { id: 17, val: 5, suit: "diamonds" },
  { id: 18, val: 6, suit: "diamonds" },
  { id: 19, val: 7, suit: "diamonds" },
  { id: 20, val: 8, suit: "diamonds" },
  { id: 21, val: 9, suit: "diamonds" },
  { id: 22, val: 10, suit: "diamonds" },
  { id: 23, val: 11, suit: "diamonds" },
  { id: 24, val: 12, suit: "diamonds" },
  { id: 25, val: 13, suit: "diamonds" },
  { id: 26, val: 14, suit: "diamonds" },
  { id: 27, val: 2, suit: "spades" },
  { id: 28, val: 3, suit: "spades" },
  { id: 29, val: 4, suit: "spades" },
  { id: 30, val: 5, suit: "spades" },
  { id: 31, val: 6, suit: "spades" },
  { id: 32, val: 7, suit: "spades" },
  { id: 33, val: 8, suit: "spades" },
  { id: 34, val: 9, suit: "spades" },
  { id: 35, val: 10, suit: "spades" },
  { id: 36, val: 11, suit: "spades" },
  { id: 37, val: 12, suit: "spades" },
  { id: 38, val: 13, suit: "spades" },
  { id: 39, val: 14, suit: "spades" },
  { id: 40, val: 2, suit: "clubs" },
  { id: 41, val: 3, suit: "clubs" },
  { id: 42, val: 4, suit: "clubs" },
  { id: 43, val: 5, suit: "clubs" },
  { id: 44, val: 6, suit: "clubs" },
  { id: 45, val: 7, suit: "clubs" },
  { id: 46, val: 8, suit: "clubs" },
  { id: 47, val: 9, suit: "clubs" },
  { id: 48, val: 10, suit: "clubs" },
  { id: 49, val: 11, suit: "clubs" },
  { id: 50, val: 12, suit: "clubs" },
  { id: 51, val: 13, suit: "clubs" },
  { id: 52, val: 14, suit: "clubs" },
];
// פה קראנו משתנה עם נתונים של הלחיצה בכפתור וכן על הכפתור בעצמו וכן על הקונטינר של הקלפים וכן של כל התצוגה בצד של המשחק  והוםפנו של קלפים עם תוכן של מערך
const Game$ = {
  startBtn: document.querySelector("#start-game"),
  startBtnCont: document.querySelector(".start-btn-cont"),
  cardCont: document.querySelector("#card-cont"),
  timer: document.querySelector("#timer"),
  riddle: document.querySelector("#riddle"),
  score: document.querySelector("#score"),
  round: document.querySelector("#round"),
  level: document.querySelector("#level"),
  messageBox: document.querySelector("#message-box"),
  messageP: document.querySelector("#message-box > p"),

  cards: [],
};
// יצרנו משתנה של אוביקט עם כל הנתונים שיש לנו
const G = {
  timer: null,
  selected: [], // array of 5 cards [25,6,41,7,33]
  winner: 0, // 0 - 4
};

if (lsToken && lsUser) {
  loggedUser.userName = lsUser;
  loggedUser.token = lsToken;
  tokenLogin();
}

// פה אני מפעיל את כפתור הכניסה עם אופציה על לחיצה של הנטר לכניסה למשחק כל זמן שהמשחק לא קיים
let loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", login);
window.addEventListener("keydown", function (e) {
  if (e.code === "Enter" && logged === false) {
    login();
  }
});

function getToken() {
  return parseInt(Math.random() * 999999999) + 100000000;
}
// בליחצת הכפתור של הרשמה
function addUser() {
  // input כאן הלכתי ואספתי את התוכן של
  let firstName = document.getElementById("firstName");
  let userName = document.getElementById("userName");
  let lastName = document.getElementById("lastName");
  let password = document.getElementById("password");
  // כאן קיבצתי את התוכן לאובייקט
  theUser = {
    userName: userName.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
    score: 0,
    level: 1,
    round: 1,
    time: 10,
    token: getToken(),
  };
  // יצרתי משתנה שקורא למידע שלי מהזיכרון והפכתי אותו משטרינג למערך ואם אין כלום יהיה מערך ריק
  AllUsers = JSON.parse(localStorage.getItem("users")) || [];

  //  כאן יצרתי לולאה ומשתנה שמקבל את מיקום מהמערך שלי ומתנה לו שאם המשתנה הזה שווה לשם החדש שהוצג תקפיץ כבר  נרשמת ושם
  //  שיצא ויתחיל הכל מחדש return לו
  for (let i = 0; i < AllUsers.length; i++) {
    const u = AllUsers[i];
    if (u.userName === theUser.userName) {
      alert("this user exists.");
      return;
    }
  }
  //  פה אם זה משתמש חדש אני דוחף אותו למערך הישן שלי ואז סוגר אותו חזרה לשטרינג
  AllUsers.push(theUser);
  localStorage.setItem("users", JSON.stringify(AllUsers));
  localStorage.token = theUser.token;
  localStorage.userName = theUser.userName;
  // פה כדי שלא ישאר תמיד השם שלך ויתרענן הדף שמתי אותם שיהיו ריקים ומוכנים להכנסה נוספת
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  password.value = "";
  //   קראתי לפנקוציה עם נתינת שני פרמטרים שם משתשמש וסכום הנקודות
  goToGame(theUser.firstName, 0, 1, 1, 10); // name, score, level, round, time
}
// יצרתי פנוקציה  שמרוקנת על ידי לחיצת כפתור את סכום הנקודות ושומרת אותם
function reset() {
  theUser.score = 0;
  Game$.score.innerText = theUser.score;
  // ?
  AllUsers.length > 0 &&
    localStorage.setItem("users", JSON.stringify(AllUsers));
}
// הפנוקציה הזאת היא משנה את העמודים אחד לשני
function toggleForms() {
  // כאן יצרתי שתי משתנים שמקבלים את התוכן של כל קופסא והתנתי שאם אחת במצב סגור השני במצב פתוח וכן להפך
  let loginForm = document.getElementById("login-form");
  let signForm = document.getElementById("sign-up-form");
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signForm.style.display = "none";
    //?
    document.getElementById("test").style.display = "none";
  } else {
    loginForm.style.display = "none";
    signForm.style.display = "block";
    document.getElementById("test").style.display = "block";
  }
}
// זאת הפנוקציה שמקבלת את שם המשתמש והקוד ומכניסה למשחק
function login() {
  //    בתוך משתנים ויצרתי משתנה שקורא למידע שלי והופך אותו למערך  input כאן הלכתי ואספתי את התוכן של
  let userName = document.getElementById("userNameLogIn");
  let password = document.getElementById("passwordLogIn");
  AllUsers = JSON.parse(localStorage.getItem("users")) || [];
  // כאן עשיתי לולאה שלוקחת מיקום במערך ובודקת בתנאי שאם זה שווה למה שהוקלד שנמצא במשתנים הראשונים
  for (let i = 0; i < AllUsers.length; i++) {
    const u = AllUsers[i];
    if (u.userName === userName.value && u.password === password.value) {
      // אם זה שווה תוסיף לפסקה את השם שלו וכן תעלים את הלוגין ותציג לי את משחק
      theUser = u;
      localStorage.userName = theUser.userName;
      let newToken = getToken();
      localStorage.token = newToken;
      theUser.token = newToken;
      localStorage.setItem("users", JSON.stringify(AllUsers));

      goToGame(u.firstName, u.score, u.level, u.round, u.time);
      logged = true;
      return;
    }
  }
  alert("Wrong Info");
}

function tokenLogin() {
  //    בתוך משתנים ויצרתי משתנה שקורא למידע שלי והופך אותו למערך  input כאן הלכתי ואספתי את התוכן של

//   AllUsers = JSON.parse(localStorage.getItem("users")) || [];
  // כאן עשיתי לולאה שלוקחת מיקום במערך ובודקת בתנאי שאם זה שווה למה שהוקלד שנמצא במשתנים הראשונים
  for (let i = 0; i < AllUsers.length; i++) {
    const u = AllUsers[i];
    if (u.userName === loggedUser.userName && u.token == loggedUser.token) {
      // אם זה שווה תוסיף לפסקה את השם שלו וכן תעלים את הלוגין ותציג לי את משחק
      theUser = u;
      localStorage.userName = theUser.userName;
      let newToken = getToken();
      localStorage.token = newToken;
      theUser.token = newToken;
      localStorage.setItem("users", JSON.stringify(AllUsers));

      goToGame(u.firstName, u.score, u.level, u.round, u.time);
      logged = true;
      return;
    }
  }
}

function goToGame(x, score, level, round, time) {
  document.getElementById("userFName").innerText = x;
  Game$.score.innerText = score;
  Game$.level.innerText = level;
  Game$.round.innerText = round;
  Game$.timer.innerText = time;
  document.getElementById("auth").style.display = "none";
  document.getElementById("game").style.display = "block";
}

// שם משתנה שמכיל את כל הפונקציות
const Funcs = {
  startGame: function () {
    // פונקציה שאומרת קח את הנתון הזה שזה הכפתור ותעלים לי אותו ואז קוראת לפונקציה הבאה
    Game$.startBtnCont.style.display = "none";
    Funcs.runRound();
  },
  runRound: async function () {
    // פה הפונקציה קוראת לעוד פןנקציה וכן קוראת לשני הפנקציות האחרות שיופעלו לאחר כשלש שניות
    Funcs.get5Cards();
    setTimeout(() => {
      Funcs.getWinner();
      Funcs.getRiddle();
      Funcs.countDown();
    }, 3000);
  },
  checkForLevel: function () {
    if (theUser.round == 5) {
      theUser.round = 1;
      theUser.level++;
      Game$.level.innerHTML = theUser.level;
      theUser.time--;
      Game$.startBtnCont.style.display = "block";
      return true;
    }
    return false;
  },
  countDown: function () {
    let time = theUser.time;
    theUser.timer = setInterval(() => {
      if (time > 0) {
        time--;
        Game$.timer.innerText = time;
      } else {
        clearInterval(theUser.timer);
        Funcs.looseClick();
      }
    }, 1000);
  },
  // מביא חמש קלפים רדומנים

  get5Cards: function () {
    G.selected = [];
    Game$.cardCont.innerHTML = "";
    Game$.riddle.innerHTML = "";
    Game$.cards = [];
    for (let i = 1; i < 6; i++) {
      setTimeout(() => {
        do {
          var x = parseInt(Math.random() * 52); // 20
        } while (G.selected.includes(x));
        G.selected.push(x);
        var card = document.createElement("article"); // <article></article>
        card.className = "card"; // <article class="card"></article>
        card.style.backgroundImage = `url(./assets/cards/${x + 1}.jpg)`;
        Game$.cards.push(card);
        Game$.cardCont.appendChild(card);
      }, 500 * i);
    }
  },
  getWinner: function () {
    G.winner = parseInt(Math.random() * 5); // 0 - 4  -> 1
    console.log(G.winner);
    for (let i = 0; i < 5; i++) {
      const $card = Game$.cards[i]; // <article>
      const card = AllCards[G.selected[i]]; // card object in big array
      if (G.winner === i) {
        $card.addEventListener("click", Funcs.winClick);
        console.log(card);
      } else {
        $card.addEventListener("click", Funcs.looseClick);
      }
    }
  },
  winClick: function () {
    // אם שייך להציג על המסך
    yitziAlert("you win", "lime");
    Funcs.addPoint();
  },
  looseClick: function () {
    yitziAlert("you loose", "red");
  },
  getRiddle: function () {
    const C = AllCards[G.selected[G.winner]];
    const DescValArr = DescriptionVal.find((x) => x.val === C.val);
    console.log(DescValArr);
    const DescSuitArr = DescriptionSuits.find((x) => x.suit === C.suit);
    console.log(DescSuitArr);

    let text = "Value: ";
    let rand = parseInt(Math.random() * 5);
    text += DescValArr.desc[rand];
    rand = parseInt(Math.random() * 5);
    text += "\n" + "\n";
    text += "\n" + "Suit: " + DescSuitArr.desc[rand] + "\n" + "\n";
    Game$.riddle.innerText = text;
  },
  addPoint: function () {
    theUser.score++;
    Game$.score.innerText = theUser.score;
  },
};

function yitziAlert(message, color) {
  clearInterval(theUser.timer);
   let next = Funcs.checkForLevel();
  Game$.timer.innerText = theUser.time;
  Game$.messageP.innerText = message + (next === true ? ". Level up!" : "");
  Game$.messageP.style.color = color;
  Game$.messageBox.style.display = "flex";
  localStorage.setItem("users", JSON.stringify(AllUsers));
  setTimeout(() => {
    Game$.messageBox.style.display = "none";
    if (!next) {
      Funcs.runRound();
      theUser.round++;
      Game$.round.innerText = theUser.round;
    }
  }, 3000);
}
// כאן אני אומר שברגע שלוחץ על הכפתור יופעל הפונקציה הראשונה שקוראת לכלום אחריו
Game$.startBtn.addEventListener("click", Funcs.startGame);

// <article class="card" style="background-image: url(./assets/cards/1.jpg);"></article>

const DescriptionVal = [
  // 14 elements.  each element has 5 descriptions
  {
    val: 14,
    desc: [
      "המספר הראשון",
      "המילה הראשונה באנגלית",
      "נמצא במילים הראשונות של תינוקות",
      "האות הראשונה שבאנגלית שיש לה איות",
      "תמיד על לוח ליבנו",
    ],
  },
  {
    val: 2,
    desc: [
      "  המספר הזוגי הראשון",
      "צריך תמיד עוד אחד איתו",
      "קיבלנו בהר סיני",
      "ביום כיפור הכהן הגדול צריך כמה נשים",
      "כמה ערבות צריך בסוכות",
    ],
  },
  {
    val: 3,
    desc: [
      "שותפים לאדם",
      "האבות שלנו",
      "כמות הימים שאפשר לעשות הבדלה אחרי שבת",
      "מצוי בשיר על הכובע",
      "כמות היחידות הקטנה ביותר שניתן להיבחן בבגרות",
    ],
  },
  {
    val: 4,
    desc: [
      "האמהות שלנו",
      "החלק החשוב בליל הסדר",
      "כמה עונות בשנה",
      "אם תכפילו בשמונה תקבלו שלושים ושתיים",
      "המילה הראשונה במסכת מסוימת",
    ],
  },
  {
    val: 5,
    desc: [
      " קשור לפרשת השבוע",
      "בנות צלופחד",
      "תכפיל בתשע ותקבל ארבעים וחמש",
      "מספר הבחירות ברצף בישראל",
      "המספר הראשון במאות שנהרגו על ידי היהודים בשושן",
    ],
  },
  {
    val: 6,
    desc: [
      "קשור למשניות",
      "מספר היהודים שנהרגו בשואה",
      "תכפילו בחמש ותקבלו שלושים וחמש",
      "חלקו אותו בשלוש ותקבלו את המספר  האי זוגי הקטן ביותר",
      "מספר ערי מקלט בחוץ לארץ",
    ],
  },
  {
    val: 7,
    desc: [
      "ימים בשבוע",
      "קשור לספירת העומר",
      "בני נח מחויבים לכך",
      "ימי החג",
      "ימים של טהרה",
    ],
  },
  {
    val: 8,
    desc: [
      "חנוכייה",
      "ימי מילה",
      "תכפיל בשבע ותקבל חמישים ושש",
      "כמות השנים שבו נשיא ארצות הברית יכול להיות נשיא",
      "תכפיל בתשע ותקבל שביעים ושתיים",
    ],
  },
  {
    val: 9,
    desc: [
      "זמן לידה",
      "תכפיל בתשע ותקבל שמונים ואחת",
      "ערי מקלט",
      "שלוש כפול שלוש",
      "שבעים ושתיים לחלק לשמונה",
    ],
  },
  {
    val: 10,
    desc: [
      "מספר הדיברות",
      "הציון הגובה",
      "מספר המכות במצרים",
      "כמות למנין",
      "מספר החד גדיא",
    ],
  },
  {
    val: 11,
    desc: [
      "כמות הכוכבים",
      "תכפיל בחמש ותקבל חמישים וחמש",
      "מספר הנשיאים שהיו עד כה במדינה ",
      " ניר ברקת נבחר לראשות העיר ירושלים בתאריך  הזה",
      "חג הרווקים (סין)",
    ],
  },
  {
    val: 12,
    desc: [
      "מספר השבטים ",
      "מספר המרגלים",
      "מספר הנשיאים",
      "בת מצוה",
      " ג'ון דמיאניוק הורשע על ידי בית משפט בגרמניה באשמת סיוע לרצח של למעלה מ-28,000 יהודים בעת ששירת כוואכמן במחנה סוביבור, וגזר עליו חמש שנות מאסר",
    ],
  },
  {
    val: 13,
    desc: [
      "מספר המידות",
      "בר מצווה",
      "מספר המלפגות בכנסת",
      " אהוד אולמרט, ראש ממשלת ישראל ה-12 של מדינת ישראל, נידון ל-6 שנים בכלא",
      "הערוץ הראשון מפסיק את שידוריו. התוכנית האחרונה שמשודרת היא שידור תחרות אירוויזיון 2017",
    ],
  },
  // {
  //     val: 14, desc: [
  //         "מספר ראשי הממשלה עד היום", "תכפיל בשמונה ותקבל מאה ושתים עשרה", "עשרים ושמונה לחלק לשתיים", "ערוץ הימני", "תאריך בו נוסדה פתח תקווה"

  //     ]
  // }
];

const DescriptionSuits = [
  // 4 elements.  each element has 5 descriptions
  {
    suit: "clubs",
    desc: ["צמח", "חילבה", "ערלה", "מעשרות", "רוביא"],
  },
  {
    suit: "diamonds",
    desc: [
      "אבן",
      "לפעמיים לבן לפעמיים צהוב ",
      "נמצא בחושן",
      "בהיסטוריה היהודים היו מומחים בזה",
      "מבוקש לזיוף",
    ],
  },
  {
    suit: "hearts",
    desc: [
      "אהבה",
      "תלך תמיד אחריו",
      "לפעמיים הוא שבור",
      "גימטריה שווה לשלושים ושתיים",
      "מלך האדם",
    ],
  },
  {
    suit: "spades",
    desc: [
      "גדל על העץ",
      "נמצא הרבה על הרצפה",
      "מאכל לתלועים",
      "יש שיר ידוע עליו של ישי לפידות",
      "אכלנו במצרים",
    ],
  },
];