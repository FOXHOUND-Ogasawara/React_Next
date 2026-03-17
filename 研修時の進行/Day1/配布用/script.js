// JSは実装済みという前提のため、ここでは簡単なログのみを提供します。
document.addEventListener('DOMContentLoaded', () => {
    // Consoleパネル [1] の動作確認用
    console.log("JavaScript initialized. DevTools Console ready.");

    const addButton = document.querySelector('.add-to-cart-button');
    if (addButton) {
        addButton.addEventListener('click', () => {
            // このログが確認できても、課題3のレイアウトは直っていないことを示唆
            console.warn("商品がカートに追加されました。しかし、課題3のレイアウト修正を先に完了してください。");
        });
    }
});
