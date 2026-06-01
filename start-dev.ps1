$host.UI.RawUI.WindowTitle = "KM Trockenbau - Dev Server"
Set-Location $PSScriptRoot
node "$PSScriptRoot\node_modules\vite\bin\vite.js"
