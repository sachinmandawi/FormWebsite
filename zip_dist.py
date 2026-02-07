import zipfile
import os

def zip_directory(folder_path, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                # Create arcname using forward slashes
                arcname = os.path.relpath(file_path, folder_path).replace('\\', '/')
                zipf.write(file_path, arcname)

if __name__ == "__main__":
    zip_directory('dist', 'build.zip')
    print("Successfully created build.zip with forward slashes.")
