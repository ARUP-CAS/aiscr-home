#!/bin/bash

# Skript pro zmenšení obrázků na rozumné rozměry
# Zachovává poměr stran, zmenšuje pouze pokud je větší

STATIC_DIR="static/images"

echo "📐 Zmenšování obrázků..."
echo ""

resize_image() {
    local file="$1"
    local max_width="$2"
    local max_height="${3:-$max_width}"
    
    # Získat aktuální rozměry
    current=$(magick identify -format "%wx%h" "$file" 2>/dev/null)
    width=$(echo $current | cut -dx -f1)
    height=$(echo $current | cut -dx -f2)
    
    # Přeskočit pokud je menší
    if [ "$width" -le "$max_width" ] && [ "$height" -le "$max_height" ]; then
        echo "⏭️  $file ($current) - již OK"
        return
    fi
    
    # Zálohovat originál
    cp "$file" "${file}.backup"
    
    # Zmenšit
    magick "$file" -resize "${max_width}x${max_height}>" "$file"
    
    new_dims=$(magick identify -format "%wx%h" "$file" 2>/dev/null)
    old_size=$(du -h "${file}.backup" | cut -f1)
    new_size=$(du -h "$file" | cut -f1)
    
    echo "✅ $file"
    echo "   $current → $new_dims"
    echo "   $old_size → $new_size"
    
    # Smazat zálohu
    rm "${file}.backup"
}

echo "=== Pozadí (max 2600px) ==="
resize_image "$STATIC_DIR/bg-more-info.png" 2600
resize_image "$STATIC_DIR/bg-blog.png" 2600
resize_image "$STATIC_DIR/bg-hero.jpg" 2600
resize_image "$STATIC_DIR/bg-about.png" 2600
resize_image "$STATIC_DIR/bg-faq.png" 2600
resize_image "$STATIC_DIR/bg-terms.png" 2600
resize_image "$STATIC_DIR/bg-about-info.png" 2600
resize_image "$STATIC_DIR/bg-finance.png" 2600

echo ""
echo "=== Hero obrázek (max 1600px) ==="
resize_image "$STATIC_DIR/bg-hero-right.png" 1600

echo ""
echo "=== Týmová fotka (max 2600px) ==="
resize_image "$STATIC_DIR/people/ais-staff.png" 2600

echo ""
echo "=== Fotky vedení (max 400px) ==="
resize_image "$STATIC_DIR/people/novak.png" 400
resize_image "$STATIC_DIR/people/pajdla.png" 400
resize_image "$STATIC_DIR/people/svejcar.png" 400
resize_image "$STATIC_DIR/people/lecbychova.png" 400

echo ""
echo "=== Service backgrounds (max 1400px) ==="
resize_image "$STATIC_DIR/bg-service-atlas.png" 1400
resize_image "$STATIC_DIR/bg-service-teater.png" 1400
resize_image "$STATIC_DIR/bg-service-amcr.png" 1400
resize_image "$STATIC_DIR/bg-service-c14.png" 1400
resize_image "$STATIC_DIR/bg-service-prague.png" 1400

echo ""
echo "=== EN loga (max 800px) ==="
resize_image "$STATIC_DIR/logos/ais-cr-black-en.png" 800
resize_image "$STATIC_DIR/logos/logo-aru-en.png" 800
resize_image "$STATIC_DIR/logos/logo-arub-en.png" 800
resize_image "$STATIC_DIR/logos/infra-black-en.png" 800
resize_image "$STATIC_DIR/logos/akademie-ved-black-en.png" 800

echo ""
echo "=== Hotovo ==="

