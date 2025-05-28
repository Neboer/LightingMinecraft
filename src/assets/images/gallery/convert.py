import json
import os

# 读取原始 JSON 文件
with open('gallery.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# 创建新的字典
transformed_data = {}

for item in data:
    full_path = item.get('full', '')
    filename = os.path.basename(full_path)  # 提取文件名，例如 '2017_summer_holiday.jpg'
    title = item.get('title', '')
    description = item.get('description', '')
    
    # 将文件名作为键，值为包含title和description的字典
    transformed_data[filename] = {
        "title": title,
        "description": description
    }

# 将转换后的字典写入新文件
with open('gallery_files.json', 'w', encoding='utf-8') as outfile:
    json.dump(transformed_data, outfile, ensure_ascii=False, indent=4)

print("转换完成，结果已保存到 'transformed_gallery.json'")