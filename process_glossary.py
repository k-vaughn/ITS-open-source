import re

# Define file paths
glossary_file = 'resources/glossary.md'
scope_file = 'resources/scope.md'
general_file = 'docs/general.md'

# Read the scope content
with open(scope_file, 'r') as f:
    scope_content = f.read()
    
# Read the glossary file
with open(glossary_file, 'r') as f:
    glossary_content = f.readlines()

# Extract terms and definitions
glossary_entries = []
for line in glossary_content:
    match = re.match(r'\*\[(.+?)\]:\s*(.+)', line)
    if match:
        term = match.group(1)
        definition = match.group(2)
        glossary_entries.append(f'**{term}**: {definition}\n\n')

# Write to the general file
with open(general_file, 'w') as f:
    f.write(scope_content)  # Write the general content first
    f.write('## Glossary {.body}\n\nFor terms not defined here, English words are used in accordance with their definitions by the [merriam-webster online dictionary](https://www.merriam-webster.com). Electrical and electronic terms not defined in this section or in Webster\'s New Collegiate Dictionary are used in accordance with their definitions in ISO/IEC/IEEE 24765:2017.\n\n')
    f.writelines(glossary_entries)

print(f'Generated general.md with {len(glossary_entries)} glossary entries.')