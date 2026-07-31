$files = Get-ChildItem -Filter *.html
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    $newContent = $content -replace '(?s)(<div class="footer-col">\s*<h4>Group A</h4>)', '<hr class="footer-divider" style="grid-column: 1 / -1; border: none; border-top: 1px solid #2f372c; width: 100%; margin: 1rem 0;">$1'
    if ($content -ne $newContent) {
        Set-Content -Path $f.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($f.Name)"
    }
}
