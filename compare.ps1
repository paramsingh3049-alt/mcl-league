Add-Type -AssemblyName System.Drawing
$uploaded = [System.Drawing.Bitmap]::FromFile('C:\Users\HP\.gemini\antigravity\brain\56291813-3e3d-4f41-b2b4-29240983cff1\.user_uploaded\media__1785476360470.png')
$uploadedResized = New-Object System.Drawing.Bitmap($uploaded, 10, 10)

Get-ChildItem -Filter *.png | Where-Object { $_.Name -notmatch 'logo|bg|placeholder' } | ForEach-Object {
    try {
        $img = [System.Drawing.Bitmap]::FromFile($_.FullName)
        $imgResized = New-Object System.Drawing.Bitmap($img, 10, 10)
        $diff = 0
        for ($x=0; $x -lt 10; $x++) {
            for ($y=0; $y -lt 10; $y++) {
                $p1 = $uploadedResized.GetPixel($x, $y)
                $p2 = $imgResized.GetPixel($x, $y)
                $diff += [Math]::Abs($p1.R - $p2.R) + [Math]::Abs($p1.G - $p2.G) + [Math]::Abs($p1.B - $p2.B)
            }
        }
        $img.Dispose()
        $imgResized.Dispose()
        [PSCustomObject]@{
            Name = $_.Name
            Diff = $diff
        }
    } catch {
        Write-Warning "Error processing $($_.Name): $_"
    }
} | Sort-Object Diff | Select-Object -First 3
$uploaded.Dispose()
$uploadedResized.Dispose()
