#!/bin/zsh

# Asegurar rutas de Node en macOS
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node 2>/dev/null | tail -n 1)/bin:$PATH"
[[ -f ~/.zshrc ]] && source ~/.zshrc 2>/dev/null

# Situarse en la carpeta del proyecto
cd "$(dirname "$0")"

echo "========================================"
echo " Iniciando servidor local del Portfolio"
echo "========================================"

# Lanza Vite y abre automáticamente el navegador en la sección de Cobalto
npm run dev -- --open /diseno/cobalto
