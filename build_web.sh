#!/bin/bash

# Build script to copy Jingler web files to GitHub Pages repository
# Usage: ./build_web.sh

# Set source and destination directories
SOURCE_DIR="/home/jasondennis/code/jingler"
DEST_DIR="/home/jasondennis/code/jdennisuf.github.io/jingler"

echo "🎵 Building Jingler for GitHub Pages..."

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy main HTML file
echo "📄 Copying HTML files..."
cp "$SOURCE_DIR/index.html" "$DEST_DIR/"

# Copy JavaScript files
echo "🔧 Copying JavaScript files..."
cp "$SOURCE_DIR/jingler.js" "$DEST_DIR/"

# Copy CSS files
echo "🎨 Copying CSS files..."
cp -r "$SOURCE_DIR/styles" "$DEST_DIR/"

# Copy images
echo "🖼️  Copying image assets..."
cp -r "$SOURCE_DIR/images" "$DEST_DIR/"

# Copy documentation
echo "📖 Copying documentation..."
cp "$SOURCE_DIR/README.md" "$DEST_DIR/"
cp "$SOURCE_DIR/LICENSE" "$DEST_DIR/"

# Copy package.json if needed for reference
echo "📦 Copying package.json..."
cp "$SOURCE_DIR/package.json" "$DEST_DIR/"

echo "✅ Build complete! Files copied to: $DEST_DIR"
echo "🚀 Your Jingler app is ready to deploy at: https://jdennisuf.github.io/jingler"
echo ""
echo "Next steps:"
echo "1. cd ~/code/jdennisuf.github.io"
echo "2. git add jingler/"
echo "3. git commit -m 'Add Jingler music app'"
echo "4. git push origin main"
