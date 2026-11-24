import os
import re
import glob

def find_jsx_tags(content, tag_name):
    pos = 0
    tags = []
    pattern = '<' + tag_name
    while True:
        idx = content.find(pattern, pos)
        if idx == -1:
            break
        p = idx + len(pattern)
        if p < len(content) and content[p] not in ' \t\r\n/>':
            pos = p
            continue
        brace_depth = 0
        in_quote = None
        end_idx = -1
        while p < len(content):
            ch = content[p]
            if in_quote:
                if ch == in_quote and content[p-1] != '\\':
                    in_quote = None
            else:
                if ch in ('"', "'", '`'):
                    in_quote = ch
                elif ch == '{':
                    brace_depth += 1
                elif ch == '}':
                    brace_depth -= 1
                elif ch == '>' and brace_depth == 0:
                    end_idx = p
                    break
            p += 1
        if end_idx != -1:
            tag_open = content[idx:end_idx+1]
            tags.append((idx, tag_open))
            pos = end_idx + 1
        else:
            pos = idx + 1
    return tags

html_files = glob.glob('public/*.html') + glob.glob('public/**/*.html') + ['index.html']
missing_buttons = []
for fp in html_files:
    with open(fp, 'r', encoding='utf-8') as f:
        c = f.read()
    btns = find_jsx_tags(c, 'button')
    for idx, tag in btns:
        if 'aria-label' not in tag and 'aria-labelledby' not in tag:
            close_idx = c.find('</button>', idx)
            inner = c[idx+len(tag):close_idx] if close_idx != -1 else ''
            text = re.sub(r'<[^>]+>', ' ', inner).strip()
            if not text:
                missing_buttons.append((fp, tag))

print(f"Missing accessible names on buttons in HTML files: {len(missing_buttons)}")
for fp, tag in missing_buttons:
    print(f"  {fp}: {tag}")
