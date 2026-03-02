import os
import shutil

base_dir = r"d:\Resume Site"
portfolio_dir = os.path.join(base_dir, "portfolio")

# Files/dirs to remove
to_remove = ["node_modules", "package.json", "package-lock.json", "temp_extract.js", "move_files.js"]
for item in to_remove:
    path = os.path.join(base_dir, item)
    try:
        if os.path.isdir(path):
            shutil.rmtree(path)
        elif os.path.exists(path):
            os.remove(path)
    except Exception as e:
        print(f"Error removing {path}: {e}")

# Move files from portfolio
for item in os.listdir(portfolio_dir):
    src = os.path.join(portfolio_dir, item)
    dst = os.path.join(base_dir, item)
    try:
        if os.path.exists(dst):
            if os.path.isdir(dst):
                shutil.rmtree(dst)
            else:
                os.remove(dst)
        shutil.move(src, dst)
    except Exception as e:
        print(f"Error moving {src} to {dst}: {e}")

try:
    shutil.rmtree(portfolio_dir)
except Exception as e:
    print(f"Error removing {portfolio_dir}: {e}")

print("Moved Next.js files successfully.")
