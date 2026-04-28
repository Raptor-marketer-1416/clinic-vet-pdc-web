@echo off
REM Clinic Vet PDC - Deploy a Cloudflare Pages via Wrangler
SET CLOUDFLARE_API_TOKEN=NLn0L2ooM-Q-ENTapCz-ABycp8S5h-be4MSfMvr5
SET CLOUDFLARE_ACCOUNT_ID=598d12c266f77cf364564d086167f79f

echo ===============================================
echo  Publicando Clinic Vet PDC a Cloudflare Pages
echo ===============================================
npx wrangler pages deploy . --project-name=clinic-vet-pdc --commit-dirty=true
echo.
echo ===============================================
echo  Listo. Sitio actualizado.
echo ===============================================
pause
