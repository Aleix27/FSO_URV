import os
import glob
import json
import re

resums_dir = "../Resums"
md_files = glob.glob(os.path.join(resums_dir, "*resum*.md"))

# Sort files conceptually (ch1, ch2, ..., ch15, appA)
def sort_key(f):
    base = os.path.basename(f)
    m = re.match(r"ch(\d+)_", base)
    if m:
        return (0, int(m.group(1)))
    m2 = re.match(r"app([A-Z])_", base)
    if m2:
         return (1, m2.group(1))
    return (2, base)

md_files.sort(key=sort_key)

resums_data = []

for filepath in md_files:
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Try to extract the title from the first heading
    title = filename
    title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
    if title_match:
        title = title_match.group(1).strip()
    
    resums_data.append({
        "id": filename.replace(".md", ""),
        "title": title,
        "content": content
    })

js_output = "const resumsData = " + json.dumps(resums_data, ensure_ascii=False, indent=2) + ";\n"

with open("data/resums.js", "w", encoding="utf-8") as f:
    f.write(js_output)

print(f"Generated data/resums.js with {len(resums_data)} summaries.")
