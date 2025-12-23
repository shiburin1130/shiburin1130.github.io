# Portfolio Site 🎨

Webデザイナー用のポートフォリオサイトです。  
青をベースカラーとしたクールなデザインで、作品を美しく魅せます。

## 🌟 特徴

- 📱 **レスポンシブ対応** - PC・タブレット・スマートフォンで最適表示
- 🎨 **青ベースのクールなデザイン** - 洗練された配色とレイアウト
- ⚡ **簡単に作品追加** - テンプレートファイルをコピーするだけ
- 🖼️ **PC/SP画像表示** - 両デバイスのデザインを並べて紹介
- 🚀 **GitHub Pages対応** - 無料で簡単に公開可能

## 💻 技術スタック

- **HTML5** - マークアップ
- **CSS3 (SCSS)** - スタイルシート
- **jQuery** - JavaScript
- **PHP** - サーバーサイド処理（オプション）

## 📦 含まれるファイル

### HTML版（GitHub Pages用）
- `index.html` - トップページ
- `work01.html`, `work02.html`, `work03.html` - 作品詳細ページ
- `about.html` - Aboutページ
- `contact.html` - お問い合わせページ
- `work-template.html` - 作品ページテンプレート

### PHP版（ローカル開発・サーバー用）
- `index.php` - トップページ
- `work01.php`, `work02.php`, `work03.php` - 作品詳細ページ
- `about.php` - Aboutページ
- `contact.php` - お問い合わせページ
- `work-template.php` - 作品ページテンプレート

## ファイル構成

```
portfolios/
├── index.php              # トップページ（作品一覧）
├── work-template.php      # 作品詳細ページのテンプレート
├── work01.php            # 作品詳細ページ 1
├── work02.php            # 作品詳細ページ 2
├── work03.php            # 作品詳細ページ 3
├── about.php             # Aboutページ
├── contact.php           # お問い合わせページ
├── assets/
│   ├── css/
│   │   ├── style.scss    # SCSSファイル
│   │   └── style.css     # コンパイル済みCSS
│   ├── js/
│   │   └── main.js       # JavaScript
│   └── images/
│       ├── work01/
│       │   ├── thumbnail.jpg  # サムネイル画像
│       │   ├── pc.jpg         # PC版画像
│       │   └── sp.jpg         # SP版画像
│       ├── work02/
│       └── work03/
└── README.md
```

## 🚀 クイックスタート

### GitHub Pagesで公開（おすすめ）

**HTML版**を使用してGitHub Pagesで無料公開できます！

詳しい手順は **[GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)** を参照してください。

### ローカルで確認

#### HTML版を確認（簡単）

1. `index.html` をブラウザで開く
2. または Live Server（VS Code拡張）を使用

#### PHP版を確認

```bash
# PHPサーバー起動
php -S localhost:8080

# ブラウザで開く
open http://localhost:8080
```

### SCSSのコンパイル（カスタマイズする場合）

CSSを編集する場合は、SCSSファイルを編集してコンパイル：

```bash
# 1回コンパイル
sass assets/css/style.scss assets/css/style.css

# 自動コンパイル（開発時）
sass --watch assets/css/style.scss:assets/css/style.css
```

## ➕ 作品の追加方法

### HTML版（GitHub Pages用）

#### 1. 新しい作品ページを作成

`work-template.html` をコピーして新しいファイルを作成：

```bash
cp work-template.html work04.html
```

#### 2. ファイルを編集

`work04.html` を開き、以下を編集：

- `<title>` タグ
- パンくずリストの作品名
- カテゴリー名
- 作品タイトル
- クライアント情報
- 説明文
- 画像パス

### PHP版（サーバー用）

#### 1. 新しい作品ページを作成

`work-template.php` をコピーして新しいファイルを作成：

```bash
cp work-template.php work04.php
```

#### 2. ファイルを編集

`work04.php` を開き、以下の変数を編集：

```php
$workTitle = "作品タイトル";
$workCategory = "カテゴリー名";
$workDescription = "作品の説明文";
$workFolder = "work04"; // フォルダ名
$clientName = "クライアント名";
$projectDate = "2025年1月";
$siteUrl = "https://example.com"; // 任意
```

### 3. 画像を配置

`assets/images/` に作品用のフォルダを作成し、画像を配置：

```
assets/images/work04/
├── thumbnail.jpg  # サムネイル（一覧ページ用）
├── pc.jpg         # PC版デザイン
└── sp.jpg         # SP版デザイン
```

**推奨画像サイズ：**
- `thumbnail.jpg`: 800×533px（3:2）
- `pc.jpg`: 1600×1000px程度
- `sp.jpg`: 750×1334px程度

#### 4. トップページに追加

`index.html`（または `index.php`）を開き、作品カード部分に以下を追加：

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

**注意：** PHP版の場合は `work04.php` にリンクしてください。

## カスタマイズ

### カラー変更

`assets/css/style.scss` の変数を編集：

```scss
// カラー
$primary-color: #0066CC;      // メインカラー
$primary-dark: #004C99;       // メインカラー（暗）
$primary-light: #3385D6;      // メインカラー（明）
$accent-color: #00A8E8;       // アクセントカラー
```

編集後、SCSSをコンパイルしてください。

### サイト名変更

各PHPファイルの `$siteTitle` を変更：

```php
$siteTitle = "Your Portfolio";
```

## 📧 お問い合わせフォームの設定

`contact.html` のフォームを機能させるには、[Formspree](https://formspree.io/)などの無料サービスを利用してください。

詳細は **[GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)** を参照。

## 📄 ライセンス

このプロジェクトは自由にカスタマイズして使用できます。

## 🎯 GitHub Pagesで公開する方法

詳しい手順は **[GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)** を参照してください！

