import os
import glob
import re

folders = ['app/views/v5.4/pages/opt-out', 'app/views/v5.4/pages/opt-in']

for folder in folders:
    print(f"\n# Folder: {os.path.basename(folder)}\n")
    for filepath in sorted(glob.glob(os.path.join(folder, '*.html'))):
        with open(filepath, 'r') as f:
            content = f.read()
            
        print(f"## File: {os.path.basename(filepath)}")
        
        # Extract nunjucks sets
        sets = re.findall(r'{%\s*set\s+\w+\s*=\s*"(.*?)"\s*%}', content, re.DOTALL)
        if sets:
            for s in sets:
                s = s.replace('\n', ' ').replace('<br>', '')
                print(f"- {s.strip()}")
                
        # Extract text from macros like text: "...", title: "..."
        macro_texts = re.findall(r'(?:text|title|html)\s*:\s*"(.*?)"', content)
        if macro_texts:
            for m in macro_texts:
                m = m.replace('\n', ' ').replace('<br>', '')
                print(f"- {m.strip()}")
                
        # Extract plain HTML text (simple regex for basic tags)
        # Just getting h1, h2, h3, p, li tags roughly
        tags = re.findall(r'<(p|h[1-6]|li|label)[^>]*>(.*?)</\1>', content, re.DOTALL | re.IGNORECASE)
        if tags:
            for tag, text in tags:
                # Remove inner html tags
                text = re.sub(r'<[^>]+>', '', text)
                text = text.replace('\n', ' ').strip()
                text = re.sub(r'\s+', ' ', text)
                if text and not text.startswith('{%'):
                    print(f"- {text}")
        print("")
