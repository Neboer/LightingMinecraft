$src_root = $PSScriptRoot
$build_folder = $args[0]
if ("" -ne $build_folder )
{
    Set-Location $src_root
    yarn build
    Set-Location $src_root/docs
    env NODE_OPTIONS=--openssl-legacy-provider yarn build
    Move-Item -Path $src_root/dist -Destination $build_folder
    Move-Item -Path $src_root/docs/src/.vuepress/dist -Destination $build_folder/doc
    Copy-Item $src_root/src/assets/images/gallery -Destination $build_folder/img -Exclude gallery.json -Recurse
} else {
    Write-Host "useage:./build.ps1 output_folder"
}
