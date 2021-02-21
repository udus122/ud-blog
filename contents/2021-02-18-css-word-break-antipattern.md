---
title: "CSSの改行処理関連プロパティの違いとこれすべからず"
date: "2021-02-18T05:35:07.322Z"
---

# CSS の改行処理関連プロパティの違いとこれすべからず

## この記事で分かること

`overflow-wrap`  
`word-wrap`  
`word-break`  
の違い

## まえがき

CSS の改行処理を行うプロパティは 3 種類ある

- `overflow-wrap`
- `word-wrap`
- `word-break`

これらの違いを説明しつつ、CSS の改行処理関連プロパティの違いの解説と非推奨な値の指定方法を紹介することがこの記事の目的

## 背景

![horizontal-scroll](https://dl.dropboxusercontent.com/s/43jvsxjwftpsn73/Feb-18-2021%2008-36-30.gif)

上記のように、ブログのタイトルが長過ぎる時に横スクロールが発生するのを防ぐ CSS について調べていると色々とややこしかったので違いについてまとめてみた。

## 本題

### overflow-wrap と word-wrap の違い

下記の引用にあるように、この 2 つは名前が違うだけで、中身は同じです。

> このプロパティはもともと、標準外かつ接頭辞のない `word-wrap` と呼ばれる Microsoft 拡張であり、多くのブラウザーはこの名前で実装していました。 `overflow-wrap` に改名されたため、 `word-wrap` は別名になりました。
> [overflow-wrap - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap)

もともと`word-wrap`だったものが、`overflow-wrap`に名前を変えてます。
なので、基本的に`overflow-wrap`だけを使っていれば問題ないでしょう。
`word-wrap`が出てきたときも`overflow-wrap`に読み替えてください。

### overflow-wrap と word-break の違い

前節で`overflow-wrap`と`word-wrap`が同じであることはわかりました。  
では、`overflow-wrap`と`word-break`の違いは何なのでしょうか?

- `overflow-wrap`は、テキストを囲む**箱が主体**になっていて、箱に収まらないときに中の文字列をどう表示させるかに関するプロパティ
- `word-break`は、**テキストが主体**で、テキストが箱に幅に収まりきらなかった場合にどう表示させるかに関するプロパティ

というのが 2 つの CSS プロパティの違いです。  
以下の表現もわかりやすいかなと思います。

> word-break : 表示範囲最後まで来た時、（単語が長かろうが短かろうが）単語の途中で改行させるかどうか<br/>overflow-wrap (word-wrap) : 表示範囲に収まらない長い連続する文字列を、途中で改行させるかどうか  
> [【CSS】overflow-wrap (word-wrap) と word-break の違い | Hazu Labo](https://web.hazu.jp/overflow-wrap-word-break/)

この 2 つの違いを理解する上で何がややこしいかと言うと、`overflow-wrap`と`word-break`のどちらにも`break-word`という値が存在し、しかもその挙動が異なるということです。

どういうことかと言うと、

`overflow-wrap: break-word`は MDN には以下にあるようにあります。

> `break-word`<br/>anywhere の値と同様に、行内にその他の分割可能な位置がない場合、通常は分割可能でない単語が任意の場所で分割されますが、コンテンツの最小固有寸法を計算する時に、単語分割によって導入された折り返し可能位置が考慮されません。  
> [overflow-wrap - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap)

一方で、`word-break: break-word`には以下のようにあります。

> `break-word`<br/>overflow-wrap プロパティの値とは関係なく、 word-break: normal や overflow-wrap: anywhere と同じ効果になります。  
> [word-break - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/word-break)

このように、`over-flow`と`word-break`で同じ名前の`break-word`という値があるにも関わらず、その挙動は異なるということです。

ただ、`word-break: break-word`は MDN にも非推奨とあるので、基本的に使わないほうが良さそうです。

## まとめ

### 結局どれを使えば良いのか

`word-wrap`は過去の仕様との互換性を保つためのプロパティなので、原則使わなくていいでしょう
`word-break: break-word`も非推奨ですし、挙動も直感的ではないので使わないほうがいいでしょう

後は`overflow-wrap: break-word`や`word-break: break-all`などその他の値の使い分けに関してですが、
以下の記事に詳しく書いてあるので、参照すると良いと思います。

[word-break と word-wrap はややこしい](https://w3g.jp/blog/confusing_word-break_word-wrap)

結論、なるべく`overflow-wrap: break-word`を使い、`word-break: break-all`はどうしてもうまくいかないときだけ使うというガイドラインになるかと思います。

以上、CSS の改行処理関連プロパティの違いの解説とべからずの紹介でした。

## 参考

[overflow-wrap: break-word; や word-break: break-all; が万能の改行処理だったなら、こんなに苦労していない - Qiita](https://qiita.com/akane_kato/items/2b1385574e1a1babdde1)

[word-break と word-wrap はややこしい](https://w3g.jp/blog/confusing_word-break_word-wrap)

[overflow-wrap - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap)

[【CSS】overflow-wrap (word-wrap) と word-break の違い | Hazu Labo](https://web.hazu.jp/overflow-wrap-word-break/)
