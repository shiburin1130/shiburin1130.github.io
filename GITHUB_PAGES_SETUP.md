# GitHub Pages 公開手順 🚀

このポートフォリオサイトをGitHub Pagesで公開する手順をまとめたよ！

## 📋 事前準備

- GitHubアカウント
- 画像ファイル（`assets/images/work01/`, `work02/`, `work03/` に配置）

---

## 🎯 手順

### 1. GitHubリポジトリを作成

1. GitHubにログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力：`shiburin1130.github.io`
4. 「Public」を選択
5. 「Create repository」をクリック

**ポイント：** リポジトリ名を `ユーザー名.github.io` にすると、ルートドメインで公開されます！

### 2. ローカルでGit初期化 & プッシュ

ターミナルで以下のコマンドを実行：

```bash
cd /Users/k_tada/Desktop/work/portfolios

# Git初期化
git init

# .gitignoreを作成
echo "*.php" > .gitignore
echo "convert-to-html.sh" >> .gitignore
echo ".DS_Store" >> .gitignore

# ファイルをステージング
git add .

# コミット
git commit -m "Initial commit: Portfolio site"

# リモートリポジトリを追加
git remote add origin https://github.com/shiburin1130/shiburin1130.github.io.git

# プッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesを有効化

1. GitHubのリポジトリページを開く
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. 「Source」で「Deploy from a branch」を選択
5. 「Branch」で「main」と「/ (root)」を選択
6. 「Save」をクリック

### 4. 公開完了！

数分待つと、以下のURLでアクセスできるようになります：

```
https://shiburin1130.github.io/
```

**めっちゃシンプルなURLで公開できます！** 🎉

---

## 📝 更新方法

作品を追加したり、内容を変更したら：

```bash
# 変更をコミット
git add .
git commit -m "Add new work"

# プッシュ
git push
```

---

## 🎨 新しい作品の追加方法

### 1. HTMLファイルを作成

`work-template.html` をコピー：

```bash
cp work-template.html work04.html
```

### 2. 内容を編集

`work04.html` を開いて、以下を編集：

- `<title>` タグの内容
- パンくずリストの作品名
- カテゴリー名
- 作品タイトル
- クライアント名、日付、URL
- 説明文
- 画像パス（`assets/images/work04/`）

### 3. 画像を配置

```
assets/images/work04/
├── thumbnail.jpg  # サムネイル（800×533px）
├── pc.jpg         # PC版デザイン
└── sp.jpg         # SP版デザイン
```

### 4. トップページに追加

`index.html` の `<div class="works__grid">` 内に以下を追加：

```html
<!-- 作品4 -->
<article class="work-card">
    <a href="work04.html" class="work-card__link">
        <div class="work-card__image">
            <img src="assets/images/work04/thumbnail.jpg" alt="Work 04">
        </div>
        <div class="work-card__content">
            <h3 class="work-card__title">作品タイトル</h3>
            <p class="work-card__category">カテゴリー名</p>
        </div>
    </a>
</article>
```

### 5. Gitにプッシュ

```bash
git add .
git commit -m "Add work04"
git push
```

---

## 💡 お問い合わせフォームについて

`contact.html` のフォームは、そのままでは動きません。  
以下の無料サービスを使うと、フォーム送信機能を簡単に追加できます：

### おすすめ：Formspree（無料）

1. [Formspree](https://formspree.io/) にアクセス
2. アカウント登録（無料）
3. 新しいフォームを作成
4. フォームIDをコピー
5. `contact.html` の以下の部分を編集：

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

`YOUR_FORM_ID` を取得したIDに置き換えてください。

---

## 🎯 カスタムドメインの設定（任意）

独自ドメインを使いたい場合：

1. ドメインを取得（お名前.com、ムームードメインなど）
2. GitHubのリポジトリ設定 → Pages → Custom domain にドメインを入力
3. DNSレコードを設定（詳細はGitHubのドキュメント参照）

---

## 🔧 トラブルシューティング

### 画像が表示されない

- 画像ファイルのパスが正しいか確認
- 画像ファイル名が正確か確認（大文字小文字も区別される）
- ブラウザのキャッシュをクリア

### CSSが反映されない

- `assets/css/style.css` が存在するか確認
- ブラウザのキャッシュをクリア
- GitHub Pagesの反映に数分かかることがあります

### ページが404エラー

- GitHubのリポジトリ設定でPagesが有効になっているか確認
- URLが正しいか確認
- デプロイ完了まで数分待つ

---

## 📚 参考リンク

- [GitHub Pages公式ドキュメント](https://docs.github.com/ja/pages)
- [Formspree（お問い合わせフォーム）](https://formspree.io/)

---

困ったことがあったら、このファイルを見返してね！✨

