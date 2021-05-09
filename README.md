# caesar-cipher-cli-tool

###Описание:
Консольное приложение caesar-cipher-cli-tool.

[Шифр Цезаря](https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F) — это вид шифра подстановки, в котором каждый символ в открытом тексте заменяется символом, находящимся на некотором постоянном числе позиций левее или правее него в алфавите. Например, в шифре со сдвигом вправо на 3, А была бы заменена на Г, Б станет Д, и так далее.

---

Приложение принимает 4 параметра (короткий псевдоним и полное имя):

`-s`, `--shift` : сдвиг, целое положительное число.

`-i`, `--input` : входной файл, стррока, путь к файлу.

`-o`, `--output` : выходной файл, стррока, путь к файлу.

`-a`, `--action` : encode / decode действия.

Обязательными параметрами являются `-s` `-a`.

###Установка и использования:
Для установки корне приложение необхожимо запустить команду `npm install` (или npm i).

Для запуска необходимо ввести команду `node index.js` и передать необходимые параметры.
Либо `npm run start` и передать необходимые параметры.

###Пример использования:

1: _-a (--action)_ is **encode**

```bash
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2: _-a (--action)_ is **decode**

```bash
$ node index.js --action decode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> output.txt
> `This is secret. Message about "_" symbol!`
