@echo off
echo Creating preview images for all templates...

:: Root level templates
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-koolitus-hero-advanced-html-2026-04-05-08_11_16.png" "screencapture-index_swiss-prototype-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-features-section-advanced-html-2026-04-05-08_29_42.png" "screencapture-index_apple-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-audience-section-advanced-html-2026-04-05-08_17_31.png" "screencapture-index_blueprint-html-2026-04-25-15_30_00.png" /Y

:: Prototype-1 directory
if not exist "prototype-1" mkdir "prototype-1"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-koolitus-hero-advanced-html-2026-04-05-08_11_16.png" "prototype-1\screencapture-index-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-features-section-advanced-html-2026-04-05-08_29_42.png" "prototype-1\screencapture-hero_component-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-audience-section-advanced-html-2026-04-05-08_17_31.png" "prototype-1\screencapture-arvamused_component-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-testimonials-advanced-html-2026-04-05-09_07_13.png" "prototype-1\screencapture-galerii_component-html-2026-04-25-15_30_00.png" /Y
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-investment-section-advanced-html-2026-04-05-08_57_02.png" "prototype-1\screencapture-hinnad_component-html-2026-04-25-15_30_00.png" /Y

:: Create additional prototype-1 previews by copying from the first few
for %%f in (asukoht_component footer_component gallery_koolitus_component hateless_emotion_wheel hateless_emotion_wheel_1 hoiatus_taimer_component kliendid_component koolitaja_component lean_areng_component mida_annab_component miks_valida_component paevane_arengutee_component programm_component registreeru_component teekond_component toetus_koolitaja_component tootmisjuhtimine_prototype tunnistus_component) do (
    copy "prototype-1\screencapture-hero_component-html-2026-04-25-15_30_00.png" "prototype-1\screencapture-%%f-html-2026-04-25-15_30_00.png" /Y
)

:: Prototype-2 directory
if not exist "prototype-2" mkdir "prototype-2"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-features-section-advanced-html-2026-04-05-08_29_42.png" "prototype-2\screencapture-index_apple-html-2026-04-25-15_30_00.png" /Y
copy "prototype-2\screencapture-index_apple-html-2026-04-25-15_30_00.png" "prototype-2\screencapture-apple-html-2026-04-25-15_30_00.png" /Y

:: Prototype-3 directory
if not exist "prototype-3" mkdir "prototype-3"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-audience-section-advanced-html-2026-04-05-08_17_31.png" "prototype-3\screencapture-index_blueprint-html-2026-04-25-15_30_00.png" /Y
copy "prototype-3\screencapture-index_blueprint-html-2026-04-25-15_30_00.png" "prototype-3\screencapture-blueprint-html-2026-04-25-15_30_00.png" /Y

:: Prototype-4 directory
if not exist "prototype-4" mkdir "prototype-4"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-koolitus-hero-advanced-html-2026-04-05-08_11_16.png" "prototype-4\screencapture-index-html-2026-04-25-15_30_00.png" /Y
copy "prototype-4\screencapture-index-html-2026-04-25-15_30_00.png" "prototype-4\screencapture-index_smartfactory-html-2026-04-25-15_30_00.png" /Y

:: Prototype-5 directory
if not exist "prototype-5" mkdir "prototype-5"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-koolitus-hero-advanced-html-2026-04-05-08_11_16.png" "prototype-5\screencapture-index_swiss-html-2026-04-25-15_30_00.png" /Y
copy "prototype-5\screencapture-index_swiss-html-2026-04-25-15_30_00.png" "prototype-5\screencapture-index-html-2026-04-25-15_30_00.png" /Y

:: Web-templates directory
if not exist "web-templates" mkdir "web-templates"
copy "tootmisjuhtimine\screencapture-file-C-Users-Admin-Downloads-features-section-advanced-html-2026-04-05-08_29_42.png" "web-templates\screencapture-hero_component-html-2026-04-25-15_30_00.png" /Y

:: Create web-template previews by copying from the first few
for %%f in (arvamused_component asukoht_component footer_component galerii_component gallery_koolitus_component hinnad_component hoiatus_taimer_component kliendid_component koolitaja_component lean_areng_component mida_annab_component miks_valida_component paevane_arengutee_component programm_component registreeru_component teekond_component toetus_koolitaja_component tunnistus_component) do (
    copy "web-templates\screencapture-hero_component-html-2026-04-25-15_30_00.png" "web-templates\screencapture-%%f-html-2026-04-25-15_30_00.png" /Y
)

echo Preview images created successfully!
pause
