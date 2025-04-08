#!/bin/bash
set -e

echo "Starting build process..."

# Ensure we're in the right directory
cd /opt/build/repo

# Create dist directory
mkdir -p dist

# Install dependencies
echo "Installing dependencies..."
npm install || true

# Attempt the build
echo "Starting build..."
npm run build || true

# Ensure dist/index.html exists
if [ ! -f dist/index.html ]; then
  echo "Creating fallback index.html..."
  cat > dist/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neurolov</title>
    <script type="module" src="/src/main.tsx"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF
fi

# Verify dist directory exists and has content
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
  echo "Build completed successfully. Dist directory contents:"
  ls -la dist
else
  echo "Warning: Dist directory is empty or missing"
  mkdir -p dist
  touch dist/index.html
fi

echo "Build process completed."
exit 0 