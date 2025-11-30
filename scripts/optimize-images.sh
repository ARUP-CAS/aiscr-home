#!/bin/bash

# Skript pro optimalizaci obrázků - konverze do WebP
# Zachovává původní rozměry, optimalizuje velikost souboru

STATIC_DIR="static/images"
QUALITY=85

echo "🖼️  Optimalizace obrázků..."
echo "Kvalita WebP: $QUALITY%"
echo ""

# Počítadlo
converted=0
skipped=0

# Funkce pro konverzi
convert_to_webp() {
    local input="$1"
    local output="${input%.*}.webp"
    
    # Přeskočit pokud WebP už existuje a je novější
    if [ -f "$output" ] && [ "$output" -nt "$input" ]; then
        echo "⏭️  Přeskočeno (existuje): $output"
        ((skipped++))
        return
    fi
    
    # Získat rozměry
    dimensions=$(magick identify -format "%wx%h" "$input" 2>/dev/null)
    
    # Konvertovat do WebP
    magick "$input" -quality $QUALITY "$output" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Velikosti souborů
        original_size=$(du -h "$input" | cut -f1)
        new_size=$(du -h "$output" | cut -f1)
        
        echo "✅ $input ($dimensions)"
        echo "   $original_size → $new_size"
        ((converted++))
    else
        echo "❌ Chyba při konverzi: $input"
    fi
}

# Najít a konvertovat PNG soubory
echo "=== Konverze PNG souborů ==="
find "$STATIC_DIR" -type f -name "*.png" | while read file; do
    convert_to_webp "$file"
done

echo ""
echo "=== Konverze JPG souborů ==="
find "$STATIC_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
    convert_to_webp "$file"
done

echo ""
echo "=== Hotovo ==="
echo "Celková velikost před:"
du -sh "$STATIC_DIR"

echo ""
echo "Pro použití WebP obrázků v kódu je potřeba aktualizovat reference."
echo "Můžete smazat původní PNG/JPG soubory po ověření, že vše funguje."

