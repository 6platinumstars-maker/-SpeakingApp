# SpeakingApp

瞬間英作文用のシンプルな学習アプリです。  
`index.html` を開くと、セクションごとの例文表示、英語音声、日本語音声、連続77問の学習ができます。

## 表示仕様

- スマホと PC の画面幅に応じてレイアウトを自動調整
- スマホでは従来どおりの縦長レイアウト
- PC では文字サイズと横幅を最適化し、全体が 1 画面に収まりやすいよう余白とカード高さを調整
- 上部の 4 つのモード切替ボタンは横 1 列で表示
- 例文カード内の `日本語` `英語` `ヒント` 見出しは小さめ表示
- 例文カード内の本文は、日本語・英語・ヒントで同じ文字サイズに統一

## 画面機能

### 例文

- 初期状態では日本語とヒントを表示
- 文章エリアをタップ
  - 1回目: 日本語 + ヒント + 英文を表示
  - 2回目: 次の文へ進む
- セクション最後の文で 2回目をタップすると、次のセクションの先頭文へ進む
- `←前` と `次→` で文を移動
- 中央ボタンで英文の `fast` 音声を1回再生

### 英語音声

- セクション内の `5en` 音声を再生
- 初期状態では本文非表示
- 文章エリアをタップ
  - 1回目: 英文を表示
  - 2回目: 英文 + 日本文を表示
- 中央ボタンでヒント表示

### 日本語音声

- セクション内の各日本語音声を1文ずつ再生
- 初期状態ではヒントのみ表示し、現在文の日本語音声を再生
- 文章エリアをタップ
  - 1回目: 日本語 + 英語 + ヒントを表示
  - 2回目: 次の文へ進み、ヒントのみ表示して日本語音声を再生
- セクション最後の文で 2回目をタップすると、次のセクションの先頭文へ進む
- 中央ボタンで現在文の日本語音声を再生

### 連続77問

- 上部の選択バーで `1` から `10` を選択
- 各番号に対応する `77jp` 音声を利用
- 中央ボタンは `再生/一時停止`
- 初期状態では本文非表示
- 文章エリアをタップ
  - 1回目: 英文 + 日本文 + ヒントを表示
  - 2回目以降: 次の文ペアを順に表示

## 主要ファイル

- [index.html](/home/ps/SpeakingApp/index.html)
  - 画面構造
- [style.css](/home/ps/SpeakingApp/style.css)
  - レイアウトと見た目
- [bath.js](/home/ps/SpeakingApp/bath.js)
  - モード切替、表示制御、音声再生制御
- [bath-data.js](/home/ps/SpeakingApp/bath-data.js)
  - 例文データ、ヒントデータ、補助関数

## データ構造

`bathData` は `section01` から `section77` までを持ち、各セクションに10件の英日ペアがあります。

各データは次の形です。

```js
{
  position: 1,
  jp: "これは名刺です。",
  en: "This is a business card."
}
```

`position` は各セクション内の何番目かを表します。

ヒントは `bathHints` に同じキーで入ります。

未設定のセクションは空文字を返すため、ヒント欄は空表示のまま動作します。

```js
bathHints.section01
getBathHint("section01")
```

位置ごとの横断取得用に次の補助関数があります。

```js
getBathEntriesByPosition(1)
getBathJapaneseByPosition(2)
getBathEnglishByPosition(4)
```

## 音声ファイル構成

`mp3` 配下の主な構成は次のとおりです。

- `mp3/en/<section>/`
  - `01_female_fast.mp3`
  - `01_female_slow.mp3`
- `mp3/5en/<section>/`
  - `01_female_5x.mp3`
- `mp3/jp/<section>/`
  - `01_female.mp3`
  - `all_sentences.mp3`
- `mp3/77jp/<position>/`
  - `section01.mp3`
  - `all_sections.mp3`

## 音声生成スクリプト

### 英語 slow / fast、日本語、5en の生成

- [generate_bath_audio.py](/home/ps/SpeakingApp/scripts/generate_bath_audio.py)

内容:

- `bath-data.js` を読み込み
- 英語女性音声 `slow` / `fast` を生成
- 日本語女性音声を生成
- `5en` を連結生成

### 日本語セクション連結音声の生成

- [build_jp_section_audio.py](/home/ps/SpeakingApp/scripts/build_jp_section_audio.py)

内容:

- `mp3/jp/<section>/` 内の10文を連結
- 文間は6秒
- `all_sentences.mp3` を生成

### 77問連結音声の生成

- [build_77jp_audio.py](/home/ps/SpeakingApp/scripts/build_77jp_audio.py)

内容:

- `mp3/77jp/<position>/section01.mp3` から `section77.mp3` を連結
- 文間は6秒
- `all_sections.mp3` を生成

## 補足

- `連続77問` モードでは、通常のセクション選択バーが `1〜10` の選択バーに切り替わります
- `5en` は `fast -> slow -> fast -> slow -> fast` の並びです
- ヒントはセクション単位で管理しています
- 現在は `section01` から `section77` まで、すべてのセクションにヒントを登録済みです
- キャッシュ更新が必要な変更時は `index.html` の `style.css?v=...` や `bath.js?v=...` のバージョン番号を更新します
