Add-Type -AssemblyName System.Drawing
$uploaded = [System.Drawing.Bitmap]::FromFile('C:\Users\HP\.gemini\antigravity\brain\56291813-3e3d-4f41-b2b4-29240983cff1\.user_uploaded\media__1785476360470.png')
Write-Host "Uploaded: $($uploaded.Width)x$($uploaded.Height)"

Get-ChildItem -Filter *.png | Where-Object { $_.Name -notmatch 'logo|bg|placeholder' } | ForEach-Object {
    try {
        $img = [System.Drawing.Bitmap]::FromFile($_.FullName)
        Write-Host "$($_.Name): $($img.Width)x$($img.Height)"
        $img.Dispose()
    } catch { }
}
$uploaded.Dispose()
