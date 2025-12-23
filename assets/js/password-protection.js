// ========================================
// 簡易パスワード保護
// ========================================

(function() {
    'use strict';
    
    // ========================================
    // ⚠️ ここにパスワードを設定してください
    // ========================================
    const correctPassword = 'K7mN9pQr2sT4vWx6yZ8aB3cD5eF1gH0j';  // ← ここを変更
    
    // セッションストレージのキー
    const authKey = 'portfolio_auth';
    
    // すでに認証済みかチェック
    if (sessionStorage.getItem(authKey) === 'true') {
        return; // 認証済みなら何もしない
    }
    
    // ページのコンテンツを隠す
    document.documentElement.style.visibility = 'hidden';
    
    // ページ読み込み完了後にパスワード確認
    window.addEventListener('DOMContentLoaded', function() {
        // パスワード入力を求める
        const userPassword = prompt('このページはパスワードで保護されています。\nパスワードを入力してください：');
        
        // パスワードチェック
        if (userPassword === correctPassword) {
            // 正解！セッションに保存
            sessionStorage.setItem(authKey, 'true');
            document.documentElement.style.visibility = 'visible';
        } else {
            // 不正解
            alert('パスワードが間違っています。');
            // 別のページにリダイレクト（またはメッセージ表示）
            document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center;"><div><h1 style="color: #0066CC; margin-bottom: 20px;">🔒 Access Denied</h1><p style="color: #6B7280;">パスワードが正しくありません。</p><button onclick="location.reload()" style="margin-top: 20px; padding: 12px 24px; background: #0066CC; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">再試行</button></div></div>';
            document.documentElement.style.visibility = 'visible';
        }
    });
})();

