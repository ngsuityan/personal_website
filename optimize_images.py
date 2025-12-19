#!/usr/bin/env python3
"""
Image Optimization Helper Script
Automatically adds loading="lazy" to all img tags in HTML files
"""

import re
import os
from pathlib import Path

def add_lazy_loading_to_html(file_path):
    """Add loading='lazy' attribute to all img tags"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Pattern to find img tags and add loading="lazy" if not present
    # This handles various img tag formats
    pattern = r'<img\s+([^>]*?)(?:>|(?<!loading="lazy")>)'
    
    def replace_img(match):
        img_tag = match.group(1)
        
        # Check if already has loading attribute
        if 'loading=' in img_tag:
            return match.group(0)
        
        # Add loading="lazy" before the closing >
        return f'<img {img_tag} loading="lazy">'
    
    # More precise pattern that handles existing attributes better
    pattern = r'<img\s+([^>]*?)>'
    
    def replace_img_precise(match):
        img_content = match.group(1)
        
        # Skip if already has loading attribute
        if 'loading=' in img_content:
            return match.group(0)
        
        # Add loading="lazy"
        return f'<img {img_content} loading="lazy">'
    
    new_content = re.sub(pattern, replace_img_precise, content)
    
    if new_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        # Count changes
        original_count = len(re.findall(r'<img\s+', original_content))
        new_count = len(re.findall(r'loading="lazy"', new_content))
        changed_count = new_count - len(re.findall(r'loading="lazy"', original_content))
        
        print(f"✅ Updated: {file_path}")
        print(f"   - Total img tags: {original_count}")
        print(f"   - Added lazy loading to: {changed_count} images")
        return True
    else:
        print(f"ℹ️  No changes needed: {file_path}")
        return False

def scan_and_report_images(base_dir):
    """Scan images folder and report file sizes"""
    
    images_dir = Path(base_dir) / "assets" / "images"
    
    if not images_dir.exists():
        print(f"❌ Images directory not found: {images_dir}")
        return
    
    print("\n📊 IMAGE SIZE REPORT:")
    print("=" * 60)
    
    total_size = 0
    image_files = []
    
    for img_file in sorted(images_dir.glob('*.*')):
        if img_file.is_file():
            size_bytes = img_file.stat().st_size
            size_kb = size_bytes / 1024
            total_size += size_bytes
            
            extension = img_file.suffix.lower()
            image_files.append({
                'name': img_file.name,
                'size_kb': size_kb,
                'extension': extension
            })
            
            # Flag large files
            if size_kb > 300:
                print(f"🔴 {img_file.name:<40} {size_kb:>8.2f} KB [LARGE - COMPRESS!]")
            elif size_kb > 100:
                print(f"🟡 {img_file.name:<40} {size_kb:>8.2f} KB [Medium]")
            else:
                print(f"🟢 {img_file.name:<40} {size_kb:>8.2f} KB [Good]")
    
    print("=" * 60)
    total_mb = total_size / (1024 * 1024)
    print(f"Total images size: {total_mb:.2f} MB")
    print(f"Total files: {len(image_files)}")
    
    # Recommendations
    large_files = [f for f in image_files if f['size_kb'] > 300]
    if large_files:
        print(f"\n⚠️  Found {len(large_files)} files larger than 300KB:")
        print("   Recommended: Compress these with TinyPNG (https://tinypng.com/)")
        for f in large_files:
            print(f"   - {f['name']} ({f['size_kb']:.2f} KB)")

if __name__ == "__main__":
    base_directory = r"c:\xampp\htdocs\personal_website"
    
    print("🚀 Image Optimization Helper\n")
    
    # Find all HTML files
    html_files = list(Path(base_directory).glob('**/*.html'))
    
    if not html_files:
        print(f"❌ No HTML files found in {base_directory}")
    else:
        print(f"📝 Found {len(html_files)} HTML file(s)\n")
        
        updated_count = 0
        for html_file in html_files:
            if add_lazy_loading_to_html(str(html_file)):
                updated_count += 1
        
        print(f"\n✨ Updated {updated_count} file(s)")
    
    # Scan and report images
    scan_and_report_images(base_directory)
    
    print("\n📋 Next Steps:")
    print("1. Upload large PNG files to https://tinypng.com/")
    print("2. Download compressed versions")
    print("3. Replace original files in assets/images/")
    print("4. Run this script again to verify")
    print("5. Test on https://pagespeed.web.dev/")
