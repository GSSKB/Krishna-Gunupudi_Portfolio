
import sys

filename = '/Users/gsskb/Downloads/GSSKB/Full Stack AI Developer/Krishna Gunupudi_Portfolio/src/constants/index.js'
with open(filename, 'rb') as f:
    lines = f.readlines()
    # Line 339 is index 338 (0-indexed)
    line_idx = 338
    if line_idx < len(lines):
        line = lines[line_idx]
        print(f"Line {line_idx+1} content (bytes): {line}")
        for i, byte in enumerate(line):
            if byte > 127:
                print(f"Non-ASCII byte at position {i}: {byte} ({hex(byte)})")
    

    # Check line 338 for unescaped double quotes
    line_prev = lines[line_idx-1]
    print(f"Line {line_idx} has {line_prev.count(b'"')} double quotes")
    print(f"Line {line_idx} content: {line_prev}")


