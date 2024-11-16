<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ECsite-AI</title>
</head>
<body>
  <header>
    <h1>ECsite-AI</h1>
    <p>AI を活用した EC サイトプロジェクトのリポジトリです。このアプリケーションは、ユーザーにおすすめの商品を提案する機能を提供します。</p>
  </header>
  <hr>

  <section id="requirements">
    <h2>📋 必要要件</h2>
    <p>以下のソフトウェアがインストールされていることを確認してください：</p>
    <ul>
      <li><strong>Node.js</strong>: バージョン 18.x 以上</li>
      <li><strong>npm</strong> または <strong>yarn</strong>: Node.js に付属</li>
      <li><strong>Git</strong>: リポジトリのクローンに必要</li>
    </ul>
  </section>
  <hr>

  <section id="installation">
    <h2>🚀 インストール手順</h2>
    <h3>1. リポジトリをクローン</h3>
    <pre><code>git clone https://github.com/kosuke-eth/ECsite-AI.git
cd ECsite-AI
    </code></pre>

    <h3>2. 依存関係をインストール</h3>
    <p>使用するパッケージマネージャーに応じて、以下のコマンドを実行してください：</p>
    <p><strong>npm を使用する場合：</strong></p>
    <pre><code>npm install</code></pre>
    <p><strong>yarn を使用する場合：</strong></p>
    <pre><code>yarn install</code></pre>

    <h3>3. 環境変数を設定</h3>
    <p>プロジェクトで必要な API キーや設定値を <code>.env.local</code> ファイルに記載します。</p>
    <ol>
      <li>プロジェクトのルートディレクトリに <code>.env.local</code> ファイルを作成します。</li>
      <li>以下を <code>.env.local</code> に記載してください：</li>
    </ol>
    <pre><code># 必要な環境変数
NEXT_PUBLIC_API_URL=&lt;APIエンドポイント&gt;
NEXT_PUBLIC_API_KEY=&lt;APIキー&gt;
    </code></pre>

    <h3>4. 開発サーバーを起動</h3>
    <p>以下のコマンドを実行して開発サーバーを起動します：</p>
    <p><strong>npm を使用する場合：</strong></p>
    <pre><code>npm run dev</code></pre>
    <p><strong>yarn を使用する場合：</strong></p>
    <pre><code>yarn dev</code></pre>

    <h3>5. アプリケーションにアクセス</h3>
    <p>ブラウザで以下の URL にアクセスしてください：</p>
    <pre><code>http://localhost:3000</code></pre>
  </section>
  <hr>

  <section id="scripts">
    <h2>📦 スクリプト</h2>
    <p>以下のスクリプトを利用できます：</p>
    <ul>
      <li><code>npm run dev</code> / <code>yarn dev</code>: 開発モードでアプリを起動</li>
      <li><code>npm run build</code> / <code>yarn build</code>: プロダクションビルドを作成</li>
      <li><code>npm run start</code> / <code>yarn start</code>: プロダクションモードでアプリを起動</li>
      <li><code>npm run lint</code> / <code>yarn lint</code>: コードをリント</li>
    </ul>
  </section>
  <hr>

  <section id="features">
    <h2>🌟 主な機能</h2>
    <ul>
      <li>AI を活用した商品レコメンデーション</li>
      <li>カスタマイズ可能なユーザーインターフェース</li>
      <li>API 経由での動的データ取得</li>
    </ul>
  </section>
  <hr>

  <section id="development">
    <h2>🛠️ 開発環境</h2>
    <p>このプロジェクトは以下の技術を使用しています：</p>
    <ul>
      <li><strong>Next.js</strong>: フロントエンドフレームワーク</li>
      <li><strong>TypeScript</strong>: 型安全な JavaScript</li>
      <li><strong>Tailwind CSS</strong>: スタイリング</li>
    </ul>
  </section>
  <hr>

  <section id="contribute">
    <h2>📚 貢献</h2>
    <p>貢献を歓迎します！以下の手順でプルリクエストを送ってください：</p>
    <ol>
      <li>リポジトリをフォーク</li>
      <li>フィーチャーブランチを作成</li>
      <pre><code>git checkout -b feature/YourFeature</code></pre>
      <li>変更をコミット</li>
      <pre><code>git commit -m 'Add YourFeature'</code></pre>
      <li>プッシュ</li>
      <pre><code>git push origin feature/YourFeature</code></pre>
      <li>プルリクエストを作成</li>
    </ol>
  </section>
  <hr>

  <section id="notes">
    <h2>⚠️ 注意事項</h2>
    <ul>
      <li>このプロジェクトで使用されている API キーや秘密情報は、公開しないでください。</li>
      <li>問題が発生した場合は、<a href="https://github.com/kosuke-eth/ECsite-AI/issues" target="_blank">Issues</a> で報告してください。</li>
    </ul>
  </section>
  <hr>

  <footer>
    <h2>📄 ライセンス</h2>
    <p>このプロジェクトのライセンスは、リポジトリ内の <code>LICENSE</code> ファイルを参照してください。</p>
  </footer>
</body>
</html>
