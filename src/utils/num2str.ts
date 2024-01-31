
let price: string;
let rub, kop;
let litera 
let sotny 
let desatky 
let edinicy 
let minus ;
let k = 0, i, j;
let N = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",
  "", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать",
  "", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто",
  "", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот",
  "тысяч", "тысяча", "тысячи", "тысячи", "тысячи", "тысяч", "тысяч", "тысяч", "тысяч", "тысяч",
  "миллионов", "миллион", "миллиона", "миллиона", "миллиона", "миллионов", "миллионов", "миллионов", "миллионов", "миллионов",
  "миллиардов", "миллиард", "миллиарда", "миллиарда", "миллиарда", "миллиардов", "миллиардов", "миллиардов", "миллиардов", "миллиардов"];
let M = new Array(10);
for (j = 0; j < 10; ++j)
  M[j] = new Array(N.length);
for (i = 0; i < N.length; i++)
  for (j = 0; j < 10; j++)
    M[j][i] = N[k++]
let R = new Array("рублей", "рубль", "рубля", "рубля", "рубля", "рублей", "рублей", "рублей", "рублей", "рублей");
let K = new Array("копеек", "копейка", "копейки", "копейки", "копейки", "копеек", "копеек", "копеек", "копеек", "копеек");

export function num2str(money: string) {
  rub = "", kop = "";
  money = money.replace(",", ".");

  if (money.substr(0, 1) == "-") {
    money = money.substr(1);
    minus = "минус "
  }
  else minus = "";
  money = Math.round(+money * 100) / 100 + "";
  if (money.indexOf(".") != -1) {
    rub = money.substr(0, money.indexOf("."));
    kop = money.substr(money.indexOf(".") + 1);
    if (kop.length == 1) kop += "0";
  }
  else rub = money;

  let ru = propis(price = rub, R);
  let ko = propis(price = kop, K);
  let res;
  ko != "" ? res = ru + " " + ko : res = ru;
  ru == "Ноль " + R[0] && ko != "" ? res = ko : 0;

  // kop == 0 ? res += " ноль " + K[0] : 0;


  const result = (minus + res).substr(0, 1).toUpperCase() + (minus + res).substr(1);

  return result;

}
function propis(price: string, D: string[]) {
  litera = "";
  for (i = 0; i < price.length; i += 3) {
    sotny = desatky = edinicy = "";
    if (n(i + 2, 2) > 10 && n(i + 2, 2) < 20) {
      edinicy = " " + M[n(i + 1, 1)][1] + " " + M[0][i / 3 + 3];
      i == 0 ? edinicy += D[0] : 0;
    }
    else {
      edinicy = M[n(i + 1, 1)][0];
      (edinicy == "один" && (i == 3 || D == K)) ? edinicy = "одна" : 0;
      (edinicy == "два" && (i == 3 || D == K)) ? edinicy = "две" : 0;
      i == 0 && edinicy != "" ? 0 : edinicy += " " + M[n(i + 1, 1)][i / 3 + 3];
      edinicy == " " ? edinicy = "" : (edinicy == " " + M[n(i + 1, 1)][i / 3 + 3]) ? 0 : edinicy = " " + edinicy;
      i == 0 ? edinicy += " " + D[n(i + 1, 1)] : 0;
      (desatky = M[n(i + 2, 1)][2]) != "" ? desatky = " " + desatky : 0;
    }
    (sotny = M[n(i + 3, 1)][3]) != "" ? sotny = " " + sotny : 0;
    if (price.substr(price.length - i - 3, 3) == "000" && edinicy == " " + M[0][i / 3 + 3]) edinicy = "";
    litera = sotny + desatky + edinicy + litera;
  }
  if (litera == " " + R[0]) return "ноль" + litera;
  else return litera.substr(1);
}
function n(start: number, len: number) {
  if (start > price.length) return 0;
  else return Number(price.substr(price.length - start, len));
}