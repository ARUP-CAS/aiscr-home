#!/bin/bash

# Skript pro optimalizaci obrázků jednoho blog článku
# Použití: ./optimize-blog-article.sh 004

if [ -z "$1" ]; then
    echo "❌ Chybí číslo článku!"
    echo "Použití: ./optimize-blog-article.sh 004"
    exit 1
fi

ARTICLE_NUM="$1"
BLOG_DIR="static/images/blog/$ARTICLE_NUM"

if [ ! -d "$BLOG_DIR" ]; then
    echo "❌ Složka $BLOG_DIR neexistuje!"
    exit 1
fi

echo "🖼️  Optimalizace obrázků pro článek $ARTICLE_NUM"
echo "📁 Složka: $BLOG_DIR"
echo ""

# Zpracovat všechny obrázky
for file in "$BLOG_DIR"/*.{png,jpg,JPG,jpeg,PNG}; do
    [ -f "$file" ] || continue
    
    filename=$(basename "$file")
    name="${filename%.*}"
    output="$BLOG_DIR/${name}.webp"
    
    # Určit max velikost (náhled vs obsah)
    if [[ "$name" == *"nahled"* ]]; then
        max_size=1200
        echo "📌 Náhledový obrázek: $filename (max ${max_size}px)"
    else
        max_size=1600
        echo "📄 Obrázek v článku: $filename (max ${max_size}px)"
    fi
    
    # Zjistit původní rozměry
    original_dims=$(magick identify -format "%wx%h" "$file" 2>/dev/null)
    original_size=$(du -h "$file" | cut -f1)
    
    # Resize a konverze do WebP
    magick "$file" -resize "${max_size}x${max_size}>" -quality 85 "$output"
    
    # Zjistit nové rozměry
    new_dims=$(magick identify -format "%wx%h" "$output" 2>/dev/null)
    new_size=$(du -h "$output" | cut -f1)
    
    echo "   $original_dims ($original_size) → $new_dims ($new_size)"
    echo "   ✅ Vytvořeno: ${name}.webp"
    echo ""
done

echo "🗑️  Mažu původní soubory..."
rm -f "$BLOG_DIR"/*.{png,jpg,JPG,jpeg,PNG}

echo ""
echo "✅ Hotovo!"
echo ""
echo "📊 Výsledek:"
find "$BLOG_DIR" -name "*.webp" -exec du -h {} \;
echo ""
echo "Celková velikost: $(du -sh "$BLOG_DIR" | cut -f1)"



