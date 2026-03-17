// ...existing code from original <script> ...
// ============================================
// グローバル変数
// ============================================
let counter = 0;
let debugCounter = 0;
const users = [];

// ============================================
// 初期化ログ
// ============================================
console.clear();
console.log('%c[App] Chrome DevTools 実践学習ページ', 'color: #1a73e8; font-size: 16px; font-weight: bold;');
console.log('%c初期化完了 - Consoleパネルでログを確認してください', 'color: #4caf50; font-size: 14px;');

// ============================================
// セクション 3: Console デモ
// ============================================

// 基本ログボタン
document.getElementById('log-button').addEventListener('click', () => {
  console.log('✅ これは通常のログです（console.log）');
});

document.getElementById('warn-button').addEventListener('click', () => {
  console.warn('⚠️ これは警告ログです（console.warn）');
});

document.getElementById('error-button').addEventListener('click', () => {
  console.error('❌ これはエラーログです（console.error）');
});

document.getElementById('clear-button').addEventListener('click', () => {
  console.clear();
  console.log('%c[App] Consoleをクリアしました', 'color: #ff9800; font-size: 14px;');
});

// Exam 1: 入力値の追跡
const inputTracker = document.getElementById('input-tracker');
const displayInput = document.getElementById('display-input');

inputTracker.addEventListener('input', (e) => {
  const value = e.target.value;
  console.log('[InputComponent] ユーザー入力:', value);
  displayInput.textContent = value || '（まだ入力されていません）';

  if (value.length > 10) {
    console.warn('[InputComponent] 入力が長すぎます！（10文字以上）');
  }
});

// Exam 2: カウンター
const counterValue = document.getElementById('counter-value');

const handleIncrement = () => {
  const prev = counter;
  const newVal = prev + 1;
  console.log('[CounterComponent]', '+1 →', newVal);
  return newVal;
};

const handleDecrement = () => {
  const prev = counter;
  const newVal = prev - 1;
  console.log('[CounterComponent]', '-1 →', newVal);
  return newVal;
};

const updateCounter = (newVal) => {
  counter = newVal;
  counterValue.textContent = counter;
};

document.getElementById('increment-btn').addEventListener('click', () => {
  updateCounter(handleIncrement());
});

document.getElementById('decrement-btn').addEventListener('click', () => {
  updateCounter(handleDecrement());
});

document.getElementById('reset-btn').addEventListener('click', () => {
  console.warn('[CounterComponent] リセットされました');
  counter = 0;
  updateCounter(counter);
});

// Exam 3: 配列・オブジェクトの可視化
const userList = document.getElementById('user-list');
let userId = 1;

document.getElementById('add-user-btn').addEventListener('click', () => {
  const newUser = {
    id: userId++,
    name: `User${userId - 1}`,
    role: ['Developer', 'Designer', 'Manager'][Math.floor(Math.random() * 3)],
    active: Math.random() > 0.3
  };
  users.push(newUser);
  console.log('[UserComponent] メンバーを追加:', newUser);

  // 画面にも表示
  const userCard = document.createElement('div');
  userCard.className = 'user-card';
  userCard.textContent = `${newUser.name} (${newUser.role})`;
  userList.appendChild(userCard);
});

document.getElementById('show-table-btn').addEventListener('click', () => {
  if (users.length === 0) {
    console.warn('[UserComponent] まだメンバーが登録されていません');
  } else {
    console.log('[UserComponent] メンバー一覧を表形式で表示:');
    console.table(users);
  }
});

// ============================================
// セクション 4: Sources デバッグ
// ============================================
const debugCounterDisplay = document.getElementById('debug-counter');

function debugIncrement() {
  const prev = debugCounter;
  const newVal = prev + 1;  // ← ここにブレークポイントを設置してください
  console.log('[Debug]', '+1 →', newVal);
  debugCounter = newVal;
  debugCounterDisplay.textContent = debugCounter;
}

document.getElementById('debug-btn').addEventListener('click', () => {
  console.log('%c[Debug] デバッグ実行開始（ブレークポイントを設置してください）', 'color: #d93025; font-size: 14px; font-weight: bold;');
  debugIncrement();
});

// ============================================
// セクション 5: その他のパネル
// ============================================

// Network: ダミーAPI呼び出し
document.getElementById('fetch-btn').addEventListener('click', async () => {
  const resultDiv = document.getElementById('fetch-result');
  resultDiv.textContent = '読み込み中...';

  try {
    console.log('[Network] APIリクエスト送信中...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('[Network] APIレスポンス受信:', data);
    resultDiv.innerHTML = `
      <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 10px;">
        <strong>タイトル:</strong> ${data.title}<br>
        <strong>本文:</strong> ${data.body}
      </div>
    `;
  } catch (error) {
    console.error('[Network] APIエラー:', error);
    resultDiv.textContent = 'エラーが発生しました';
  }
});

// Application: Local Storage
document.getElementById('storage-btn').addEventListener('click', () => {
  const timestamp = new Date().toLocaleString('ja-JP');
  localStorage.setItem('devtools-demo', timestamp);
  console.log('[Application] Local Storageにデータを保存しました:', timestamp);
  alert('データを保存しました！DevToolsの「Application」タブ → 「Local Storage」で確認してください。');
});

document.getElementById('show-storage-btn').addEventListener('click', () => {
  const data = localStorage.getItem('devtools-demo');
  const resultDiv = document.getElementById('storage-result');
  if (data) {
    resultDiv.textContent = `保存されたデータ: ${data}`;
    console.log('[Application] Local Storageから読み込み:', data);
  } else {
    resultDiv.textContent = 'まだデータが保存されていません';
    console.warn('[Application] Local Storageにデータがありません');
  }
});

// ============================================
// ページロード完了ログ
// ============================================
window.addEventListener('load', () => {
  console.log('%c🎉 ページの読み込みが完了しました！', 'color: #4caf50; font-size: 16px; font-weight: bold;');
  console.log('それぞれのセクションで操作を試してみてください。');
});
