#!/usr/bin/env python3
import urllib.request
import time
import sys

# Configure standard output to handle utf-8 cleanly
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

print("==================================================")
# Test client access
print("       LOCAL WEB CLIENT SANITY RUN        ")
print("==================================================")

time.sleep(1) # wait for server to fully initialize

failures = 0

def test_url(url, expected_snippets=None):
    global failures
    try:
        print(f"Testing GET {url} ...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.status
            content = response.read().decode('utf-8')
            
            if status == 200:
                print(f"[PASS] HTTP Status 200")
            else:
                print(f"[FAIL] HTTP Status {status}")
                failures += 1
                return
                
            if expected_snippets:
                for snippet in expected_snippets:
                    if snippet in content:
                        print(f"[PASS] Found expected content: '{snippet}'")
                    else:
                        print(f"[FAIL] Missing expected content: '{snippet}'")
                        failures += 1
    except Exception as e:
        print(f"[FAIL] Request to {url} failed: {e}")
        failures += 1

# Test HTML Page
test_url("http://localhost:8085/index.html", [
    "<title>USA 2026 World Cup Hub - News & Roster</title>",
    "USMNT Camp Hub",
    "vs. Sweden 🇸🇪 (Warm-up)",
    "vs. Paraguay 🇵🇾 (World Cup)",
    "vs. Australia 🇦🇺",
    "vs. Türkiye 🇹🇷",
    "Mauricio Pochettino's 4-3-3",
    "The Scout Room (Spelarkampen)"
])

# Test CSS file
test_url("http://localhost:8085/index.css", [
    "--sweden-blue: #002868;",
    "--sweden-yellow: #BF0A30;",
    "--bg-dark-900: #F8FAFC;",
    "--bg-dark-800: #FFFFFF;"
])

# Test JS file
test_url("http://localhost:8085/app.js", [
    "Matt Turner",
    "Christian Pulisic",
    "Folarin Balogun",
    "Born in the U.S.A.",
    "Mauricio Pochettino's High-Tempo 4-3-3",
    "Pochettino's Compact Low-Block 4-2-3-1"
])

print("==================================================")
if failures == 0:
    print("STATUS: CLIENT ACCESS SANITY GREEN - Browser static paths serve perfectly!")
    exit(0)
else:
    print(f"STATUS: CLIENT ACCESS SANITY RED - {failures} failures detected!")
    exit(1)
