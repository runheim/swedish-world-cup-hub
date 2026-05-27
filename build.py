#!/usr/bin/env python3
import os
import shutil

files_to_copy = ['index.html', 'index.css', 'app.js', 'data.js']
base_dir = os.path.dirname(os.path.abspath(__file__))
dist_folder = os.path.join(base_dir, 'dist')

print('Starting USMNT World Cup Hub compilation build...')

try:
    # Create dist folder if it doesn't exist
    if not os.path.exists(dist_folder):
        os.makedirs(dist_folder, exist_ok=True)
        print('Created dist/ directory successfully.')
    else:
        print('dist/ directory already exists.')

    # Copy files
    for file in files_to_copy:
        src_path = os.path.join(base_dir, file)
        dest_path = os.path.join(dist_folder, file)
        
        if os.path.exists(src_path):
            shutil.copyfile(src_path, dest_path)
            print(f"Copied {file} -> dist/{file}")
        else:
            print(f"Warning: Source file {file} not found!")

    print('Build completed successfully!')
except Exception as e:
    print(f"Build execution failed: {e}")
    exit(1)
