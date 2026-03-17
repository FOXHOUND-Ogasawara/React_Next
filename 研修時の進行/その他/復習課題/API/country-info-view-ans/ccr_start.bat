@echo off
REM CCR 自動モデル切替（OpenAI優先＋Geminiフォールバック）
node "C:\Users\atsushi.ogasawara\.claude-code-router\auto_model.js"
ccr code
pause
