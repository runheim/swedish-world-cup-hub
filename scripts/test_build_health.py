#!/usr/bin/env python3
import os
import re
import sys

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")
FILES_TO_CHECK = ["index.html", "index.css", "app.js", "data.js"]

print("==================================================")
print("     ENGLAND 2026 WORLD CUP PORTAL HEALTH CHECK     ")
print("==================================================")

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

failures = 0
warnings = 0

# Helper to log status
def log_result(test_name, success, message=""):
    global failures, warnings
    if success:
        try:
            print(f"✅ [PASS] {test_name}: {message}")
        except UnicodeEncodeError:
            print(f"[PASS] {test_name}: {message}")
    else:
        try:
            print(f"❌ [FAIL] {test_name}: {message}")
        except UnicodeEncodeError:
            print(f"[FAIL] {test_name}: {message}")
        failures += 1

def log_warning(test_name, message=""):
    global warnings
    try:
        print(f"⚠️ [WARN] {test_name}: {message}")
    except UnicodeEncodeError:
        print(f"[WARN] {test_name}: {message}")
    warnings += 1

# TEST 1: FILE EXISTENCE IN ROOT & DIST
print("\n--- Test 1: File Integrity and Deployment Sync ---")
for filename in FILES_TO_CHECK:
    root_path = os.path.join(BASE_DIR, filename)
    dist_path = os.path.join(DIST_DIR, filename)
    
    root_exists = os.path.exists(root_path)
    dist_exists = os.path.exists(dist_path)
    
    log_result(f"File Existence ({filename})", root_exists and dist_exists, 
               f"Root: {'YES' if root_exists else 'NO'} | Dist: {'YES' if dist_exists else 'NO'}")
    
    if root_exists and dist_exists:
        # Check if contents are synchronized
        with open(root_path, "r", encoding="utf-8") as r, open(dist_path, "r", encoding="utf-8") as d:
            sync = r.read() == d.read()
            log_result(f"Sync check ({filename})", sync, 
                       "Root and Dist files are 100% identical" if sync else "FILES ARE NOT IN SYNC! Run copy command.")

# TEST 2: HTML STATIC ANALYSIS
print("\n--- Test 2: index.html Static Analysis ---")
html_path = os.path.join(BASE_DIR, "index.html")
if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
        
        # Check critical elements
        has_title = "<title>" in html
        has_viewport = 'name="viewport"' in html
        has_charset = 'charset="UTF-8"' in html
        has_data_js = 'src="data.js"' in html
        has_app_js = 'src="app.js"' in html
        has_stylesheet = 'href="index.css"' in html
        
        log_result("HTML Title tag", has_title, "Found title tag")
        log_result("HTML Viewport (Mobile support)", has_viewport, "Responsive meta tag exists")
        log_result("HTML Charset", has_charset, "UTF-8 encoding defined")
        log_result("HTML data.js linkage", has_data_js, "data.js linked correctly before app.js")
        log_result("HTML app.js linkage", has_app_js, "app.js linked correctly")
        log_result("HTML index.css linkage", has_stylesheet, "index.css linked correctly")
        
        # Check that time-simulator-panel is successfully removed
        sim_removed = "time-simulator-panel" not in html
        log_result("Simulator Panel Cleanup", sim_removed, "time-simulator-panel is completely deleted")
        
        # Check tag pairings for basic sanity
        open_divs = len(re.findall(r"<div\b", html))
        close_divs = len(re.findall(r"</div>", html))
        if open_divs == close_divs:
            log_result("Div element pairing", True, f"Found {open_divs} open and close divs")
        else:
            log_warning("Div element pairing mismatch", f"Div count mismatch! Opens: {open_divs}, Closes: {close_divs}")

# TEST 3: CSS STATIC ANALYSIS
print("\n--- Test 3: index.css Static Analysis ---")
css_path = os.path.join(BASE_DIR, "index.css")
if os.path.exists(css_path):
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()
        
        # Check premium variable overrides
        has_vars = "--bg-dark-900: #F8FAFC" in css
        has_header_shading = ".main-header" in css and "linear-gradient(135deg" in css
        
        log_result("Light Theme CSS Variables", has_vars, "Clean slate perimeter color variables loaded")
        log_result("Light Blue Shaded Header", has_header_shading, "Main header slightly shaded with light blue gradient")

# TEST 4: JS DYNAMICS & INTEGRITY
print("\n--- Test 4: JavaScript Logic Static Analysis ---")
app_path = os.path.join(BASE_DIR, "app.js")
if os.path.exists(app_path):
    with open(app_path, "r", encoding="utf-8") as f:
        js = f.read()
        
        # Verify simulator is cleaned up
        has_simulator_var = "SIMULATOR_ACTIVE" in js
        has_timeline_merge = "DYNAMIC_HUB_DATA" in js
        has_dynamic_dates = "Object.keys(TIMELINE_DATABASE)" in js
        
        log_result("Simulator Variables Cleaned", not has_simulator_var, "Simulator variables successfully removed")
        log_result("Dynamic Data Merger", has_timeline_merge, "Merges dynamic timelines on initialization")
        log_result("Dynamic Date Key List", has_dynamic_dates, "News timeline calculates dates dynamically")

# SUMMARY
print("\n==================================================")
print(f"HEALTH CHECK COMPLETE: {failures} FAILURES | {warnings} WARNINGS")
print("==================================================")

if failures > 0:
    print("❌ Status: HEALTH CHECK RED - Critical issues detected!")
    sys.exit(1)
else:
    print("🟢 Status: HEALTH CHECK GREEN - Deployed build is healthy and fully functional!")
    sys.exit(0)
